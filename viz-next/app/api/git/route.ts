import { NextRequest, NextResponse } from "next/server"
import path from "path"
import { execSync } from "child_process"

const REPO = path.join(process.cwd(), "..")

/** Commit all changes and push. Returns status so the UI can surface errors. */
export async function POST(req: NextRequest) {
  let message = "Edit via tech-bio-map viz"
  try {
    const body = (await req.json()) as { message?: string }
    if (body.message) message = body.message
  } catch {
    // no body is fine
  }
  const msg = message.replace(/"/g, "'").slice(0, 200)

  try {
    execSync("git add -A", { cwd: REPO, stdio: "pipe" })
    const status = execSync("git status --porcelain", { cwd: REPO }).toString().trim()
    if (!status) {
      return NextResponse.json({ ok: true, committed: false, note: "nothing to commit" })
    }
    execSync(
      `git commit -m "${msg}" -m "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"`,
      { cwd: REPO, stdio: "pipe" },
    )
    const head = execSync("git rev-parse --short HEAD", { cwd: REPO }).toString().trim()

    let pushed = false
    let detail = ""
    try {
      detail = execSync("git push", { cwd: REPO, stdio: "pipe" }).toString()
      pushed = true
    } catch (e) {
      detail = String((e as { stderr?: Buffer }).stderr ?? e).slice(0, 400)
    }
    return NextResponse.json({ ok: true, committed: true, pushed, commit: head, detail })
  } catch (e) {
    const err = e as { stderr?: Buffer }
    return NextResponse.json(
      { error: "git failed", detail: String(err.stderr ?? e).slice(0, 500) },
      { status: 500 },
    )
  }
}
