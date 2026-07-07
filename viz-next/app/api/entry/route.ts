import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { execSync } from "child_process"

// The repo root is the parent of viz-next (where next dev runs).
const REPO = path.join(process.cwd(), "..")

/** Locate an entry's markdown file by id (filename stem == id). */
async function findFile(id: string): Promise<string | null> {
  const stack = ["entries", "primitives", "ideas"].map((d) => path.join(REPO, d))
  while (stack.length) {
    const dir = stack.pop() as string
    let ents
    try {
      ents = await fs.readdir(dir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const e of ents) {
      const p = path.join(dir, e.name)
      if (e.isDirectory()) stack.push(p)
      else if (e.name === `${id}.md`) return p
    }
  }
  return null
}

function quoteIfNeeded(v: string): string {
  const isNum = v !== "" && !Number.isNaN(Number(v))
  const isBool = v === "true" || v === "false"
  if (!isNum && !isBool && /[:#]/.test(v)) return `"${v.replace(/"/g, "'")}"`
  return v
}

/** Replace or insert a scalar frontmatter field, clearing any old list block. */
function setScalar(lines: string[], key: string, value: string) {
  const i = lines.findIndex((l) => l.startsWith(`${key}:`))
  const out = `${key}: ${quoteIfNeeded(String(value))}`
  if (i >= 0) {
    let j = i + 1
    while (j < lines.length && /^\s+-\s/.test(lines[j])) j++
    lines.splice(i, j - i, out)
  } else {
    lines.push(out)
  }
}

/** Replace or insert a list frontmatter field. */
function setList(lines: string[], key: string, items: string[]) {
  const clean = items.map((s) => s.trim()).filter(Boolean)
  const block = clean.length
    ? [`${key}:`, ...clean.map((it) => `  - ${quoteIfNeeded(it)}`)]
    : [`${key}: []`]
  const i = lines.findIndex((l) => l.startsWith(`${key}:`))
  if (i >= 0) {
    let j = i + 1
    while (j < lines.length && /^\s+-\s/.test(lines[j])) j++
    lines.splice(i, j - i, ...block)
  } else {
    lines.push(...block)
  }
}

/** Replace a `## Section` body block (or append it if missing). `rest` includes the closing fence. */
function setSection(rest: string, name: string, text: string): string {
  const marker = `\n## ${name}\n`
  const idx = rest.indexOf(marker)
  if (idx === -1) {
    return rest.replace(/\s*$/, "") + `\n\n## ${name}\n\n${text}\n`
  }
  const contentStart = idx + marker.length
  let next = rest.indexOf("\n## ", contentStart)
  if (next === -1) next = rest.length
  return rest.slice(0, contentStart) + `\n${text}\n` + rest.slice(next)
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    id: string
    updates?: Record<string, string>
    lists?: Record<string, string[]>
    sections?: Record<string, string>
  }
  const { id, updates = {}, lists = {}, sections = {} } = body
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 })

  const file = await findFile(id)
  if (!file) return NextResponse.json({ error: `no entry for '${id}'` }, { status: 404 })

  const original = await fs.readFile(file, "utf8")
  const end = original.indexOf("\n---", 4)
  if (!original.startsWith("---\n") || end === -1) {
    return NextResponse.json({ error: "malformed frontmatter" }, { status: 500 })
  }
  const fmLines = original.slice(4, end).split("\n")
  let rest = original.slice(end) // "\n---\n<body>"

  for (const [k, v] of Object.entries(updates)) setScalar(fmLines, k, v)
  for (const [k, items] of Object.entries(lists)) setList(fmLines, k, items)
  for (const [name, text] of Object.entries(sections)) rest = setSection(rest, name, text)

  const newText = "---\n" + fmLines.join("\n") + rest
  await fs.writeFile(file, newText)

  // Safety net: validate. On any failure, revert untouched.
  try {
    execSync("python3 scripts/validate_entries.py", { cwd: REPO, stdio: "pipe" })
  } catch (e) {
    await fs.writeFile(file, original)
    return NextResponse.json(
      { error: "validation failed, edit reverted", detail: String(e).slice(0, 400) },
      { status: 400 },
    )
  }

  try {
    execSync("python3 scripts/generate.py", { cwd: REPO, stdio: "pipe" })
    execSync("cp generated/graph.json generated/index.json viz-next/public/data/", {
      cwd: REPO,
      stdio: "pipe",
    })
  } catch (e) {
    return NextResponse.json({ error: "regen failed", detail: String(e).slice(0, 400) }, { status: 500 })
  }

  return NextResponse.json({ ok: true, file: path.relative(REPO, file) })
}
