// tech-bio-map viz. Reads data/graph.json (nodes+edges) and data/index.json (full records).
// No build step: static site, Cytoscape from CDN.

const SUBSTRATE = {
  A: { label: "Data", color: "#4e79a7" },
  B: { label: "Automation", color: "#59a14f" },
  C: { label: "Model", color: "#e15759" },
  D: { label: "Deeptech", color: "#f28e2b" },
  E: { label: "Biological", color: "#b07aa1" },
  F: { label: "Clinical", color: "#76b7b2" },
  "": { label: "Unassigned", color: "#9aa0a6" },
};
const REL_COLOR = { uses: "#f28e2b", references: "#b07aa1", closest: "#59a14f", competes: "#3a4150", complements: "#4a6a4a" };
const SHAPE = { primitive: "diamond", company: "ellipse", idea: "round-rectangle" };

let cy, GRAPH, INDEX, BYID;

Promise.all([
  fetch("data/graph.json").then((r) => r.json()),
  fetch("data/index.json").then((r) => r.json()),
]).then(([graph, index]) => {
  GRAPH = graph;
  INDEX = index;
  BYID = Object.fromEntries(index.map((r) => [r.id, r]));
  document.getElementById("counts").textContent =
    `${graph.nodes.length} nodes · ${graph.edges.length} edges`;
  buildSubstrateFilters();
  buildLegend();
  initGraph();
  buildTable();
  wireControls();
});

function nodeColor(n) { return (SUBSTRATE[n.substrate_family] || SUBSTRATE[""]).color; }
function nodeSize(n) {
  if (n.type === "primitive") return 22 + (Number(n.trl) || 3) * 3;
  if (n.type === "company") {
    const f = Number(n.total_funding_usd_m) || 0;
    return 16 + Math.min(34, Math.sqrt(f) * 1.6);
  }
  return 20;
}

function initGraph() {
  const els = [];
  for (const n of GRAPH.nodes) {
    els.push({ data: { id: n.id, label: n.label, type: n.type, fam: n.substrate_family || "",
      color: nodeColor(n), size: nodeSize(n), shape: SHAPE[n.type] } });
  }
  for (const e of GRAPH.edges) {
    els.push({ data: { id: `${e.source}__${e.relation}__${e.target}`, source: e.source,
      target: e.target, relation: e.relation, color: REL_COLOR[e.relation] || "#333" } });
  }
  cy = cytoscape({
    container: document.getElementById("cy"),
    elements: els,
    wheelSensitivity: 0.2,
    style: [
      { selector: "node", style: {
        "background-color": "data(color)", shape: "data(shape)",
        width: "data(size)", height: "data(size)", label: "data(label)",
        color: "#cfd3d8", "font-size": 9, "text-wrap": "wrap", "text-max-width": 90,
        "text-valign": "bottom", "text-margin-y": 3, "min-zoomed-font-size": 7,
        "border-width": 1, "border-color": "#0f1115" } },
      { selector: "node:selected", style: { "border-width": 3, "border-color": "#fff", "font-size": 12, color: "#fff" } },
      { selector: "edge", style: {
        width: 1, "line-color": "data(color)", "curve-style": "haystack",
        "haystack-radius": 0.4, opacity: 0.45, "target-arrow-color": "data(color)" } },
      { selector: "edge[relation = 'uses']", style: { width: 1.6, opacity: 0.7 } },
      { selector: "edge[relation = 'references']", style: { width: 1.4, "line-style": "dashed", opacity: 0.7 } },
      { selector: ".faded", style: { opacity: 0.06, "text-opacity": 0 } },
      { selector: ".hl", style: { opacity: 1, "text-opacity": 1, "z-index": 999 } },
    ],
    layout: fcoseOpts(),
  });

  cy.on("tap", "node", (evt) => showDetail(evt.target.id()));
  cy.on("tap", (evt) => { if (evt.target === cy) { clearHighlight(); hideDetail(); } });
  applyEdgeFilter();
}

function fcoseOpts() {
  return { name: "fcose", quality: "default", animate: false, randomize: true,
    nodeRepulsion: 8000, idealEdgeLength: 70, nodeSeparation: 90, packComponents: true };
}

function showDetail(id) {
  const r = BYID[id];
  const el = document.getElementById("detail");
  if (!r) { el.classList.add("hidden"); return; }
  highlightNeighborhood(id);
  const fam = SUBSTRATE[r.substrate_family || ""];
  const rows = [];
  const add = (k, v) => { if (v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && !v.length))
    rows.push(`<div class="row"><div class="k">${k}</div><div class="v">${fmt(v)}</div></div>`); };
  const label = r.name || r.idea || r.id;
  let head = `<h2>${esc(label)}</h2>`;
  head += `<div><span class="tag" style="color:${fam.color}">${r.type}</span>`;
  if (r.substrate_family) head += `<span class="tag">${r.substrate_family} ${fam.label}</span>`;
  (r.substrate_tags || []).forEach((t) => (head += `<span class="tag">${esc(t)}</span>`));
  head += `</div>`;

  if (r.type === "primitive") {
    add("New capability", r.new_capability); add("Mechanism", r.mechanism);
    add("What it unlocks", r.what_it_could_unlock); add("Lead TRL", r.technology_readiness_level);
    add("Evidence", r.evidence_level); add("Commercialisation", r.commercialisation_status);
    add("Closest companies", r.closest_companies); add("Defensibility", r.defensibility);
    if (r.capabilities && r.capabilities.length) {
      const caps = r.capabilities.slice()
        .sort((a, b) => (Number(b.technology_readiness_level) || 0) - (Number(a.technology_readiness_level) || 0))
        .map((c) => {
          const trl = c.technology_readiness_level;
          return `<div class="cap"><span class="trl trl-${ventureBand(trl)}">TRL ${trl ?? "?"}</span>` +
            `<b>${esc(c.capability || "")}</b>` +
            (c.what_it_could_unlock ? `<div class="capsub">${esc(c.what_it_could_unlock)}</div>` : "") +
            (c.translational_gap ? `<div class="capgap">gap: ${esc(c.translational_gap)}</div>` : "") +
            `<div class="capshape">${ventureShape(trl)}</div></div>`;
        }).join("");
      rows.push(`<div class="row"><div class="k">Capabilities (${r.capabilities.length})</div><div class="v caps">${caps}</div></div>`);
    }
  } else if (r.type === "company") {
    add("New capability", r.new_capability); add("Founded", r.founded);
    add("Stage", r.funding_stage); add("Total funding $M", r.total_funding_usd_m);
    add("Platforms", r.technology_platform_ids); add("TRL", r.technology_readiness_level);
    add("Commercialisation", r.commercialisation_status); add("Business model", r.business_model);
    add("Buyer", r.buyer); add("Moat", r.moat); add("Limiting factor", r.limiting_factor);
    if (r.website) rows.push(`<div class="row"><div class="k">Website</div><div class="v"><a href="https://${esc(r.website)}" target="_blank" rel="noopener">${esc(r.website)}</a></div></div>`);
  } else {
    add("Idea", r.idea); add("New capability", r.new_capability);
    add("Primitives", r.technology_platform_ids); add("First use case", r.first_use_case);
    add("Why now", r.why_now); add("3-month MVP", r.three_month_mvp);
    add("Validation plan", r.validation_plan); add("Unfair advantage", r.unfair_advantage_needed);
    add("EF fit", r.ef_route_fit); add("Cambridge fit", r.cambridge_route_fit);
    add("Score", r.overall_score); add("Closest companies", r.closest_companies);
  }
  el.innerHTML = head + rows.join("");
  el.classList.remove("hidden");
}
function hideDetail() { document.getElementById("detail").classList.add("hidden"); }

function highlightNeighborhood(id) {
  clearHighlight();
  const node = cy.getElementById(id);
  const hood = node.closedNeighborhood();
  cy.elements().addClass("faded");
  hood.removeClass("faded").addClass("hl");
}
function clearHighlight() { cy.elements().removeClass("faded hl"); }

function activeEdgeRelations() {
  return [...document.querySelectorAll("#relation-filters input:checked")].map((i) => i.value);
}
function activeTypes() {
  return [...document.querySelectorAll("#type-filters input:checked")].map((i) => i.value);
}
function activeSubstrates() {
  return [...document.querySelectorAll("#substrate-filters input:checked")].map((i) => i.value);
}

function applyEdgeFilter() {
  const rels = new Set(activeEdgeRelations());
  cy.edges().forEach((e) => e.style("display", rels.has(e.data("relation")) ? "element" : "none"));
}
function applyNodeFilter() {
  const types = new Set(activeTypes());
  const subs = new Set(activeSubstrates());
  const q = document.getElementById("search").value.trim().toLowerCase();
  cy.nodes().forEach((n) => {
    const okType = types.has(n.data("type"));
    const okSub = subs.has(n.data("fam") || "");
    const okQ = !q || (n.data("label") || "").toLowerCase().includes(q);
    n.style("display", okType && okSub && okQ ? "element" : "none");
  });
}

function buildSubstrateFilters() {
  const wrap = document.getElementById("substrate-filters");
  Object.entries(SUBSTRATE).forEach(([k, v]) => {
    if (k === "") return;
    const l = document.createElement("label");
    l.innerHTML = `<input type="checkbox" value="${k}" checked /> <span style="color:${v.color}">${k}</span> ${v.label}`;
    wrap.appendChild(l);
  });
  const l = document.createElement("label");
  l.innerHTML = `<input type="checkbox" value="" checked /> n/a`;
  wrap.appendChild(l);
}

function buildLegend() {
  const el = document.getElementById("legend");
  let h = `<div style="color:var(--muted);margin-bottom:4px">Substrate</div>`;
  Object.entries(SUBSTRATE).forEach(([k, v]) => {
    if (k === "") return;
    h += `<div class="item"><span class="swatch" style="background:${v.color}"></span>${k} ${v.label}</div>`;
  });
  h += `<div style="color:var(--muted);margin:6px 0 4px">Shape</div>`;
  h += `<div class="item">◆ primitive · ● company · ▢ idea</div>`;
  el.innerHTML = h;
}

function wireControls() {
  document.getElementById("tab-graph").onclick = () => switchTab("graph");
  document.getElementById("tab-table").onclick = () => switchTab("table");
  document.getElementById("relayout").onclick = () => cy.layout(fcoseOpts()).run();
  document.querySelectorAll("#relation-filters input").forEach((i) => (i.onchange = applyEdgeFilter));
  document.querySelectorAll("#type-filters input, #substrate-filters input").forEach((i) => (i.onchange = applyNodeFilter));
  document.getElementById("search").oninput = () => { applyNodeFilter(); filterTable(); };
}

function switchTab(which) {
  const g = which === "graph";
  document.getElementById("graph-view").classList.toggle("hidden", !g);
  document.getElementById("table-view").classList.toggle("hidden", g);
  document.getElementById("tab-graph").classList.toggle("active", g);
  document.getElementById("tab-table").classList.toggle("active", !g);
  document.getElementById("legend").classList.toggle("hidden", !g);
  if (g && cy) cy.resize();
}

// ---- Table view ----
const TCOLS = [
  { k: "type", t: "Type" }, { k: "label", t: "Name" }, { k: "substrate_family", t: "Sub" },
  { k: "technology_readiness_level", t: "TRL" }, { k: "funding_stage", t: "Stage" },
  { k: "total_funding_usd_m", t: "$M" }, { k: "commercialisation_status", t: "Status" },
  { k: "technology_platform_ids", t: "Primitives" }, { k: "new_capability", t: "New capability" },
];
let sortKey = "type", sortDir = 1;

function rowVal(r, k) {
  if (k === "label") return r.name || r.idea || r.id;
  return r[k];
}
function buildTable() {
  const tf = document.getElementById("table-filters");
  tf.innerHTML =
    `<select id="tf-type"><option value="">All types</option><option>primitive</option><option>company</option><option>idea</option></select>` +
    `<select id="tf-sub"><option value="">All substrates</option>${Object.keys(SUBSTRATE).filter(Boolean).map((k) => `<option>${k}</option>`).join("")}</select>`;
  tf.querySelector("#tf-type").onchange = filterTable;
  tf.querySelector("#tf-sub").onchange = filterTable;
  renderTable();
}
function renderTable() {
  const head = `<tr>${TCOLS.map((c) => `<th data-k="${c.k}">${c.t}</th>`).join("")}</tr>`;
  const rows = tableRows();
  const body = rows.map((r) => `<tr>${TCOLS.map((c) => {
    let v = rowVal(r, c.k);
    if (c.k === "label") {
      const col = (SUBSTRATE[r.substrate_family || ""] || SUBSTRATE[""]).color;
      return `<td><span class="dot" style="background:${col}"></span>${esc(v || "")}</td>`;
    }
    return `<td>${esc(fmtCell(v))}</td>`;
  }).join("")}</tr>`).join("");
  document.getElementById("table-wrap").innerHTML = `<table><thead>${head}</thead><tbody>${body}</tbody></table>`;
  document.querySelectorAll("#table-wrap th").forEach((th) => (th.onclick = () => {
    const k = th.dataset.k;
    if (sortKey === k) sortDir *= -1; else { sortKey = k; sortDir = 1; }
    renderTable();
  }));
}
function tableRows() {
  const ty = document.getElementById("tf-type")?.value || "";
  const su = document.getElementById("tf-sub")?.value || "";
  const q = document.getElementById("search").value.trim().toLowerCase();
  let rows = INDEX.filter((r) =>
    (!ty || r.type === ty) &&
    (!su || (r.substrate_family || "") === su) &&
    (!q || (r.name || r.idea || r.id).toLowerCase().includes(q)));
  rows.sort((a, b) => {
    let x = rowVal(a, sortKey), y = rowVal(b, sortKey);
    x = Array.isArray(x) ? x.join(",") : (x ?? ""); y = Array.isArray(y) ? y.join(",") : (y ?? "");
    const nx = parseFloat(x), ny = parseFloat(y);
    if (!isNaN(nx) && !isNaN(ny)) return (nx - ny) * sortDir;
    return String(x).localeCompare(String(y)) * sortDir;
  });
  return rows;
}
function filterTable() { renderTable(); }

// ---- venture shape from TRL ----
function ventureBand(trl) {
  const t = Number(trl);
  if (!t) return "na";
  if (t <= 3) return "1";
  if (t <= 5) return "2";
  if (t <= 7) return "3";
  return "4";
}
function ventureShape(trl) {
  return {
    "1": "research programme / grant / academic spinout",
    "2": "translational startup / prototype / first clinical collaborator",
    "3": "seed-stage commercialisation / regulatory strategy / pilots",
    "4": "product differentiation / distribution / data moat",
    na: "",
  }[ventureBand(trl)];
}

// ---- helpers ----
function fmt(v) { return Array.isArray(v) ? v.map(esc).join(", ") : esc(String(v)); }
function fmtCell(v) { if (Array.isArray(v)) return v.join(", "); if (v === undefined || v === null) return ""; return String(v); }
function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
