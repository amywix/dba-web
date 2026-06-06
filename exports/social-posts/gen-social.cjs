/* Done By Amy — 30-day Instagram content pack generator.
   Produces 30 portrait (1080x1350) HTML posts, alternating dark + white styles. */
const fs = require("fs");
const path = require("path");

const OUT = path.resolve(__dirname, "../../artifacts/mockup-sandbox/public/ads");
fs.mkdirSync(OUT, { recursive: true });

const ICONS = {
  messageSquare: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  bot: '<rect x="3" y="8" width="18" height="12" rx="3"/><path d="M12 8V4M8 2h8"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',
  trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  dollar: '<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.4-.6-.6-2.4z"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  dumbbell: '<rect x="2" y="9" width="3.5" height="6" rx="1"/><rect x="18.5" y="9" width="3.5" height="6" rx="1"/><rect x="5" y="10.5" width="14" height="3" rx="1"/>',
  utensils: '<path d="M4 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3M6 12v9M18 3c-2 0-3 2-3 5s1 4 3 4v9"/>',
  home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
};
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n] || ""}</svg>`;
const hl = (t) => t.replace(/\{\{(.+?)\}\}/g, '<span class="hl">$1</span>');
const MASCOT = { wave: "bot_wave_t.png", phone: "bot_phone_t.png", thumbsup: "bot_thumbsup_t.png" };

/* ---------- layout renderers ---------- */
function rHook(p) {
  let h = `<div class="body ${p.mascot ? "withBot" : ""}">`;
  h += `<h1 class="hookTitle">${hl(p.title)}</h1>`;
  if (p.big) h += `<div class="big">${p.big}</div>`;
  if (p.punch) h += `<div class="punch">${hl(p.punch)}</div>`;
  if (p.sub) h += `<p class="hookSub">${hl(p.sub)}</p>`;
  if (p.chips) h += `<div class="chips">${p.chips.map((c) => `<span class="chip">${icon(c.i)}${c.t}</span>`).join("")}</div>`;
  if (p.cta) h += `<span class="cta">${p.cta}</span>`;
  h += `</div>`;
  if (p.mascot) h += `<img class="mascot" src="../images/${MASCOT[p.mascot]}" alt="">`;
  return h;
}
function rList(p) {
  return `<div class="body"><h2 class="secTitle">${hl(p.title)}</h2><ul class="list">${p.items
    .map((it) => `<li><span class="ic">${icon(it.i)}</span><span class="liText">${it.t}</span></li>`)
    .join("")}</ul>${p.strap ? `<div class="strap">${hl(p.strap)}</div>` : ""}</div>`;
}
function rVs(p) {
  const badH = p.badH || "Without Automation";
  const goodH = p.goodH || "With Automation";
  return `<div class="body"><h2 class="secTitle">${hl(p.title)}</h2><div class="vs">
    <div class="vsCol bad"><h3>${badH}</h3><ul>${p.bad.map((t) => `<li><span class="mk">${icon("x")}</span>${t}</li>`).join("")}</ul></div>
    <div class="vsMid">VS</div>
    <div class="vsCol good"><h3>${goodH}</h3><ul>${p.good.map((t) => `<li><span class="mk">${icon("check")}</span>${t}</li>`).join("")}</ul></div>
  </div>${p.strap ? `<div class="strap">${hl(p.strap)}</div>` : ""}</div>`;
}
function rFaq(p) {
  return `<div class="body"><h2 class="secTitle">${hl(p.title)}</h2><div class="faq">${p.qs
    .map((q) => `<div class="qrow"><span class="q">${q}</span><span class="yes">${icon("check")}YES</span></div>`)
    .join("")}</div>${p.cta ? `<span class="cta">${p.cta}</span>` : ""}</div>`;
}
function rProcess(p) {
  const hasDesc = p.steps.some((s) => s.d);
  return `<div class="body"><h2 class="secTitle">${hl(p.title)}</h2><div class="steps ${hasDesc ? "" : "tight"}">${p.steps
    .map((s, i) => `<div class="step"><span class="num">${i + 1}</span><span class="stxt"><span class="stitle">${s.t}</span>${s.d ? `<span class="sdesc">${s.d}</span>` : ""}</span></div>`)
    .join("")}</div>${p.strap ? `<div class="strap">${hl(p.strap)}</div>` : ""}</div>`;
}
function rGrid(p) {
  return `<div class="body"><h2 class="secTitle">${hl(p.title)}</h2><div class="grid c${p.cols}">${p.cells
    .map((c) => `<div class="cell"><span class="ic">${icon(c.i)}</span><span class="ctext"><span>${c.t}</span>${c.d ? `<span class="cdesc">${c.d}</span>` : ""}</span></div>`)
    .join("")}</div>${p.cta ? `<span class="cta">${p.cta}</span>` : p.strap ? `<div class="strap">${hl(p.strap)}</div>` : ""}</div>`;
}
function rPoll(p) {
  let mid;
  if (p.input) {
    mid = `<div class="pollInput"><span>${p.inputPlaceholder}</span><span class="sendBtn">${icon("send")}</span></div>`;
  } else {
    mid = `<div class="pollOpts">${p.options.map((o, i) => `<div class="opt ${i === 0 ? "y2" : ""}">${o}</div>`).join("")}</div>`;
  }
  return `<div class="body"><h1 class="hookTitle">${hl(p.title)}</h1>${p.sub ? `<p class="hookSub">${hl(p.sub)}</p>` : ""}${mid}${p.foot2 ? `<div class="pollNote">${hl(p.foot2)}</div>` : ""}</div>`;
}
function rOffer(p) {
  const segs = ["HRS", "MINS", "SECS"];
  return `<div class="body"><span class="offerBadge">${p.badge}</span>
    <h1 class="hookTitle" style="margin-top:30px">${hl(p.title)}</h1>
    <div class="count">${p.countdown
      .map((n, i) => `<div class="seg"><b>${n}</b><span>${segs[i]}</span></div>${i < 2 ? '<div class="colon">:</div>' : ""}`)
      .join("")}</div>
    <span class="cta">${p.cta}</span></div>`;
}
const RENDER = { hook: rHook, list: rList, vs: rVs, faq: rFaq, process: rProcess, grid: rGrid, poll: rPoll, offer: rOffer };

/* ---------- page wrapper ---------- */
function page(p) {
  const body = RENDER[p.kind](p);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head>
<body><div class="post ${p.theme}"><div class="glow"></div>
<header class="top"><span class="wm"><span class="wmMain">DONE</span> <span class="wmScript">by</span> <span class="wmMain">AMY</span></span><span class="tag">${p.tag}</span></header>
${body}
<footer class="foot"><span class="handle">@donebyamy</span><span class="dot"></span><span class="tagline">Automate today. Elevate tomorrow.</span></footer>
</div></body></html>`;
}

const CSS = `
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:1080px;height:1350px;}
.post{position:relative;width:1080px;height:1350px;overflow:hidden;display:flex;flex-direction:column;padding:80px;font-family:'Poppins',sans-serif;}
.post.dark{background:#0b0b0f;color:#fff;}
.post.light{background:#ffffff;color:#16131d;}
.glow{position:absolute;inset:0;z-index:0;}
.dark .glow{background:radial-gradient(900px 640px at 102% -6%,rgba(217,70,239,.22),transparent 60%),radial-gradient(940px 720px at -12% 106%,rgba(124,58,237,.30),transparent 60%);}
.light .glow{background:radial-gradient(720px 520px at 104% -8%,rgba(168,85,247,.16),transparent 60%),radial-gradient(720px 620px at -10% 110%,rgba(124,58,237,.12),transparent 60%);}
.top,.body,.foot{position:relative;z-index:1;}
.top{display:flex;justify-content:space-between;align-items:center;}
.wm{font-family:'Montserrat',sans-serif;font-weight:800;font-size:30px;letter-spacing:.5px;display:flex;align-items:baseline;gap:9px;}
.wmScript{font-family:'Dancing Script',cursive;font-weight:700;font-size:40px;line-height:1;}
.dark .wmScript{color:#c084fc;} .light .wmScript{color:#7c3aed;}
.tag{font-weight:600;font-size:18px;letter-spacing:3px;padding:11px 22px;border-radius:999px;}
.dark .tag{background:rgba(168,85,247,.16);color:#d8b4fe;border:1px solid rgba(168,85,247,.35);}
.light .tag{background:#f1e9fe;color:#7c3aed;border:1px solid #e3d3fb;}
.body{flex:1;display:flex;flex-direction:column;justify-content:center;}
.foot{display:flex;align-items:center;gap:16px;font-size:21px;}
.foot .handle{font-weight:600;}
.dot{width:6px;height:6px;border-radius:50%;}
.dark .dot{background:#a855f7;} .light .dot{background:#7c3aed;}
.tagline{opacity:.62;}
/* hook */
.hookTitle{font-family:'Montserrat',sans-serif;font-weight:900;font-size:90px;line-height:1.03;letter-spacing:-1.8px;}
.punch{font-family:'Montserrat',sans-serif;font-weight:900;font-size:90px;line-height:1.03;letter-spacing:-1.8px;margin-top:4px;}
.hookSub{margin-top:30px;font-size:31px;line-height:1.45;max-width:780px;font-weight:300;}
.dark .hookSub{color:rgba(255,255,255,.78);} .light .hookSub{color:#4b4456;}
.big{font-family:'Montserrat',sans-serif;font-weight:900;font-size:240px;line-height:1;letter-spacing:-6px;margin:6px 0;}
.dark .big{background:linear-gradient(120deg,#a855f7,#d946ef);-webkit-background-clip:text;background-clip:text;color:transparent;}
.light .big{color:#7c3aed;}
.hl{font-weight:inherit;}
.dark .hl{background:linear-gradient(120deg,#c084fc,#e879f9);-webkit-background-clip:text;background-clip:text;color:transparent;}
.light .hl{color:#7c3aed;}
.chips{display:flex;flex-wrap:wrap;gap:16px;margin-top:42px;}
.chip{display:flex;align-items:center;gap:13px;padding:18px 26px;border-radius:16px;font-size:25px;font-weight:600;}
.dark .chip{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);}
.light .chip{background:#faf7ff;border:1px solid #ece3fb;box-shadow:0 8px 24px rgba(124,58,237,.06);}
.chip svg{width:30px;height:30px;}
.dark .chip svg{color:#c084fc;} .light .chip svg{color:#7c3aed;}
.withBot .hookTitle{max-width:660px;} .withBot .hookSub{max-width:560px;} .withBot .chips{max-width:600px;}
.cta{align-self:flex-start;margin-top:46px;display:inline-flex;align-items:center;gap:14px;padding:24px 44px;border-radius:999px;font-weight:700;font-size:27px;color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);box-shadow:0 18px 44px rgba(124,58,237,.42);}
.cta::after{content:'\\2192';font-size:30px;}
.mascot{position:absolute;right:-26px;bottom:-18px;height:560px;width:auto;z-index:1;filter:drop-shadow(0 28px 60px rgba(124,58,237,.4));}
/* section title */
.secTitle{font-family:'Montserrat',sans-serif;font-weight:800;font-size:66px;line-height:1.08;letter-spacing:-1.2px;margin-bottom:48px;max-width:880px;}
/* list */
.list{display:flex;flex-direction:column;gap:22px;}
.list li{list-style:none;display:flex;align-items:center;gap:24px;padding:28px 32px;border-radius:20px;font-size:31px;font-weight:500;}
.dark .list li{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08);}
.light .list li{background:#faf8ff;border:1px solid #eee6fb;box-shadow:0 10px 30px rgba(124,58,237,.05);}
.ic{flex:0 0 auto;width:66px;height:66px;border-radius:16px;display:flex;align-items:center;justify-content:center;}
.dark .ic{background:rgba(168,85,247,.16);} .light .ic{background:#f1e9fe;}
.ic svg{width:34px;height:34px;}
.dark .ic svg{color:#d8b4fe;} .light .ic svg{color:#7c3aed;}
.strap{margin-top:44px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:42px;letter-spacing:-.5px;}
.dark .strap{color:#e879f9;} .light .strap{color:#7c3aed;}
/* vs */
.vs{display:flex;gap:22px;align-items:stretch;position:relative;}
.vsCol{flex:1;border-radius:24px;padding:42px 34px;}
.vsCol h3{font-family:'Montserrat',sans-serif;font-weight:800;font-size:30px;margin-bottom:28px;letter-spacing:.3px;}
.vsCol ul{display:flex;flex-direction:column;gap:22px;}
.vsCol li{list-style:none;display:flex;align-items:center;gap:14px;font-size:27px;font-weight:500;}
.vsCol .mk{flex:0 0 auto;width:34px;height:34px;display:flex;align-items:center;justify-content:center;}
.vsCol .mk svg{width:30px;height:30px;}
.dark .bad{background:rgba(255,255,255,.035);border:1px solid rgba(255,99,99,.28);}
.light .bad{background:#fdf4f4;border:1px solid #f4dada;}
.bad h3,.bad .mk{color:#ff6b6b;}
.dark .good{background:rgba(168,85,247,.12);border:1px solid rgba(168,85,247,.42);}
.light .good{background:#f4ecfe;border:1px solid #e0cffb;}
.dark .good h3{color:#d8b4fe;} .light .good h3{color:#7c3aed;}
.good .mk{color:#a855f7;}
.vsMid{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:88px;height:88px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-weight:900;font-size:30px;color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);box-shadow:0 12px 34px rgba(124,58,237,.55);z-index:2;}
/* faq */
.faq{display:flex;flex-direction:column;gap:24px;}
.qrow{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:34px;border-radius:20px;font-size:31px;font-weight:500;}
.dark .qrow{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08);}
.light .qrow{background:#faf8ff;border:1px solid #eee6fb;box-shadow:0 10px 30px rgba(124,58,237,.05);}
.yes{flex:0 0 auto;display:flex;align-items:center;gap:9px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:24px;letter-spacing:1px;padding:13px 26px;border-radius:999px;color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);}
.yes svg{width:24px;height:24px;}
/* process */
.steps{display:flex;flex-direction:column;}
.step{display:flex;gap:30px;align-items:flex-start;padding-bottom:38px;position:relative;}
.steps.tight .step{padding-bottom:30px;}
.step:last-child{padding-bottom:0;}
.step .num{flex:0 0 auto;width:74px;height:74px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-weight:800;font-size:33px;color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);z-index:1;}
.step:not(:last-child)::before{content:'';position:absolute;left:37px;top:74px;bottom:0;width:3px;}
.dark .step:not(:last-child)::before{background:linear-gradient(#a855f7,rgba(168,85,247,.12));}
.light .step:not(:last-child)::before{background:linear-gradient(#7c3aed,#e6d8fb);}
.stxt{padding-top:8px;display:flex;flex-direction:column;}
.stitle{font-family:'Montserrat',sans-serif;font-weight:700;font-size:40px;letter-spacing:-.5px;}
.sdesc{font-size:27px;margin-top:4px;font-weight:300;}
.dark .sdesc{color:rgba(255,255,255,.62);} .light .sdesc{color:#6b6276;}
/* grid */
.grid{display:grid;gap:22px;}
.grid.c2{grid-template-columns:1fr 1fr;}
.grid.c1{grid-template-columns:1fr;}
.cell{display:flex;align-items:center;gap:22px;padding:30px 32px;border-radius:20px;font-size:31px;font-weight:600;}
.dark .cell{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08);}
.light .cell{background:#faf8ff;border:1px solid #eee6fb;box-shadow:0 10px 30px rgba(124,58,237,.05);}
.ctext{display:flex;flex-direction:column;}
.cdesc{font-size:23px;font-weight:300;margin-top:3px;}
.dark .cdesc{color:rgba(255,255,255,.6);} .light .cdesc{color:#6b6276;}
/* poll */
.pollOpts{display:flex;gap:24px;margin-top:52px;}
.opt{flex:1;text-align:center;padding:44px 20px;border-radius:22px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:48px;}
.dark .opt{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);}
.light .opt{background:#faf8ff;border:1px solid #eae0fb;}
.opt.y2{color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);border:none;box-shadow:0 16px 40px rgba(124,58,237,.4);}
.pollInput{display:flex;align-items:center;justify-content:space-between;margin-top:50px;padding:30px 30px 30px 36px;border-radius:18px;font-size:31px;}
.dark .pollInput{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.45);}
.light .pollInput{background:#fff;border:1px solid #e7dcf9;color:#9a90ab;box-shadow:0 12px 34px rgba(124,58,237,.07);}
.sendBtn{width:64px;height:64px;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);}
.sendBtn svg{width:30px;height:30px;}
.pollNote{margin-top:40px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:36px;letter-spacing:-.5px;}
.dark .pollNote{color:#e879f9;} .light .pollNote{color:#7c3aed;}
/* offer */
.offerBadge{align-self:flex-start;font-family:'Montserrat',sans-serif;font-weight:800;font-size:22px;letter-spacing:3px;padding:14px 28px;border-radius:999px;}
.dark .offerBadge{background:rgba(217,70,239,.16);color:#f0abfc;border:1px solid rgba(217,70,239,.4);}
.light .offerBadge{background:#fbe9fe;color:#c026d3;border:1px solid #f3cffb;}
.count{display:flex;gap:18px;align-items:stretch;margin:48px 0;}
.seg{flex:1;display:flex;flex-direction:column;align-items:center;padding:40px 8px;border-radius:24px;}
.dark .seg{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);}
.light .seg{background:#faf8ff;border:1px solid #eee6fb;}
.seg b{font-family:'Montserrat',sans-serif;font-weight:900;font-size:116px;line-height:1;background:linear-gradient(120deg,#a855f7,#d946ef);-webkit-background-clip:text;background-clip:text;color:transparent;}
.seg span{margin-top:16px;font-size:24px;letter-spacing:3px;opacity:.6;}
.colon{display:flex;align-items:center;font-family:'Montserrat',sans-serif;font-weight:900;font-size:84px;opacity:.28;}
`;

/* ---------- 30-day content ---------- */
const POSTS = [
  { day: 1, kind: "hook", theme: "dark", tag: "REEL", mascot: "wave", title: "Still replying to customers {{manually}}?", sub: "Let AI chatbots reply instantly, 24/7 — so you never lose another lead.", cta: 'DM "CHATBOT" to automate' },
  { day: 2, kind: "list", theme: "light", tag: "CAROUSEL", title: "5 signs your business {{needs}} an AI chatbot", items: [{ i: "messageSquare", t: "You're missing messages" }, { i: "clock", t: "Your replies are too slow" }, { i: "trend", t: "You're losing leads daily" }, { i: "refresh", t: "You repeat the same answers" }, { i: "users", t: "Customers wait too long" }] },
  { day: 3, kind: "poll", theme: "dark", tag: "STORY", title: "Do you reply to customers {{after hours}}?", sub: "How many leads do you lose every week?", options: ["Yes", "No"], foot2: "AI chatbots reply 24/7 — even while you sleep." },
  { day: 4, kind: "hook", theme: "light", tag: "STORY", mascot: "phone", title: "Imagine waking up to {{new bookings}}", sub: "Your AI chatbot books appointments while you sleep.", cta: "Let AI handle it" },
  { day: 5, kind: "hook", theme: "dark", tag: "STATIC POST", title: "Your business shouldn't {{stop}} when you sleep", sub: "We build AI systems that work for you around the clock.", chips: [{ i: "clock", t: "24/7" }, { i: "messageSquare", t: "Reply" }, { i: "target", t: "Capture" }, { i: "trend", t: "Convert" }] },
  { day: 6, kind: "list", theme: "light", tag: "CAROUSEL", title: "What an AI chatbot {{can do}} for you", items: [{ i: "messageSquare", t: "Answer FAQs instantly" }, { i: "calendar", t: "Book appointments" }, { i: "target", t: "Qualify your leads" }, { i: "mail", t: "Capture emails" }, { i: "refresh", t: "Follow up automatically" }] },
  { day: 7, kind: "hook", theme: "dark", tag: "CAROUSEL", title: "This AI chatbot {{never}} takes a break", big: "24/7", sub: "Your customers get instant replies, day and night." },
  { day: 8, kind: "hook", theme: "light", tag: "REEL", mascot: "phone", title: "Missed calls are {{lost money}}", sub: "AI phone bots answer missed calls and follow up instantly.", cta: "Let AI handle it" },
  { day: 9, kind: "vs", theme: "dark", tag: "CAROUSEL", title: "Without vs with {{automation}}", bad: ["Slow replies", "Missed leads", "Burnout", "Messy systems"], good: ["Instant replies", "More bookings", "Organised", "More sales"], strap: "Automate. Grow. Scale." },
  { day: 10, kind: "hook", theme: "light", tag: "STATIC POST", title: "AI chatbots don't replace humans.", punch: "They replace {{repetitive work}}." },
  { day: 11, kind: "hook", theme: "dark", tag: "STATIC POST", mascot: "phone", title: "This AI answers your business calls {{24/7}}", sub: "Never miss a call — or a customer — again." },
  { day: 12, kind: "poll", theme: "light", tag: "STORY", input: true, title: "What task wastes {{most of your time}}?", sub: "Tell us — we can probably automate it.", inputPlaceholder: "Type something…", foot2: "If it's repetitive, we can automate it." },
  { day: 13, kind: "grid", theme: "dark", tag: "CAROUSEL", cols: 2, title: "Industries that {{need}} AI chatbots", cells: [{ i: "wrench", t: "Tradies" }, { i: "scissors", t: "Salons" }, { i: "activity", t: "NDIS Providers" }, { i: "dumbbell", t: "Gyms" }, { i: "utensils", t: "Restaurants" }, { i: "home", t: "Real Estate" }, { i: "cap", t: "Coaches" }, { i: "cart", t: "E-commerce" }] },
  { day: 14, kind: "hook", theme: "light", tag: "REEL", mascot: "wave", title: "POV: your AI assistant runs it all while you {{sleep}}", chips: [{ i: "trend", t: "New lead!" }, { i: "calendar", t: "Appointment booked!" }, { i: "dollar", t: "Payment received!" }] },
  { day: 15, kind: "list", theme: "dark", tag: "CAROUSEL", title: "How AI chatbots {{increase sales}}", items: [{ i: "zap", t: "Faster replies" }, { i: "trend", t: "More conversions" }, { i: "refresh", t: "Better follow-up" }, { i: "clock", t: "24/7 lead capture" }, { i: "target", t: "Instant engagement" }], strap: "More leads. More sales." },
  { day: 16, kind: "vs", theme: "light", tag: "REEL", title: "Before vs after {{automation}}", badH: "Before", goodH: "After", bad: ["Drowning in admin", "Working late", "Chasing leads", "Stressed & stuck"], good: ["Admin on autopilot", "Free evenings", "Leads come to you", "Calm & scaling"], strap: "Work smarter, not harder." },
  { day: 17, kind: "hook", theme: "dark", tag: "STATIC POST", title: "Small businesses using AI {{now}} will {{dominate}} later." },
  { day: 18, kind: "process", theme: "light", tag: "REEL", title: "Every lead, {{followed up}} instantly", steps: [{ t: "Lead messages you", d: "Any channel, any time" }, { t: "AI replies in seconds", d: "Friendly and on-brand" }, { t: "Details captured", d: "Straight into your CRM" }, { t: "You get notified", d: "Deal-ready leads only" }], strap: "That's the power of AI automation." },
  { day: 19, kind: "process", theme: "dark", tag: "CAROUSEL", title: "What happens after someone {{messages you}}", steps: [{ t: "Instant reply" }, { t: "Capture details" }, { t: "Qualify the lead" }, { t: "Send reminders" }, { t: "Notify you" }] },
  { day: 20, kind: "faq", theme: "light", tag: "STORY", title: "AI chatbot {{FAQ}} time", qs: ["Can chatbots answer real questions?", "Can they book appointments?", "Can they connect to my site & CRM?"], cta: "Learn more" },
  { day: 21, kind: "grid", theme: "dark", tag: "STATIC POST", cols: 2, title: "This is what an {{automated business}} looks like", cells: [{ i: "bot", t: "Chatbot" }, { i: "phone", t: "Calls" }, { i: "calendar", t: "Bookings" }, { i: "users", t: "Support" }] },
  { day: 22, kind: "grid", theme: "light", tag: "CAROUSEL", cols: 1, title: "Our AI chatbot {{packages}}", cells: [{ i: "messageSquare", t: "Standard Chatbot", d: "Website & socials" }, { i: "phone", t: "AI Phone Bot", d: "Answers every call" }, { i: "refresh", t: "CRM Automation", d: "Hands-free pipeline" }, { i: "target", t: "Lead Generation", d: "More qualified leads" }, { i: "gear", t: "AI Custom Systems", d: "Built around you" }], cta: "DM us for pricing" },
  { day: 23, kind: "hook", theme: "dark", tag: "REEL", mascot: "thumbsup", title: "Stop losing leads {{after hours}}", sub: "Your AI assistant is always on — 24/7.", cta: "Switch it on" },
  { day: 24, kind: "hook", theme: "light", tag: "STATIC POST", title: "Every missed enquiry is", punch: "potential {{lost revenue}}." },
  { day: 25, kind: "process", theme: "dark", tag: "CAROUSEL", title: "The AI automation {{setup process}}", steps: [{ t: "Discovery", d: "We learn your business" }, { t: "Build", d: "Custom-built for you" }, { t: "Integrate", d: "Connect your tools" }, { t: "Test", d: "Refined & reliable" }, { t: "Launch", d: "Live & automating" }], strap: "We handle it all." },
  { day: 26, kind: "hook", theme: "light", tag: "REEL", mascot: "phone", title: "Customers think this is a {{real assistant}}…", sub: "(It's your AI chatbot.)", chips: [{ i: "messageSquare", t: "“Can I book an appointment?”" }, { i: "calendar", t: "“Friday 10am — you're booked!”" }] },
  { day: 27, kind: "offer", theme: "dark", tag: "STORY", badge: "LIMITED TIME", title: "Free setup offer {{ending soon}}", countdown: ["03", "14", "22"], cta: "Don't miss out" },
  { day: 28, kind: "grid", theme: "light", tag: "CAROUSEL", cols: 2, title: "What can we {{automate}}?", cells: [{ i: "target", t: "Leads" }, { i: "mail", t: "Emails" }, { i: "phone", t: "Calls" }, { i: "file", t: "Invoices" }, { i: "refresh", t: "Follow-ups" }, { i: "gear", t: "CRM updates" }, { i: "calendar", t: "Bookings" }, { i: "messageSquare", t: "FAQs" }] },
  { day: 29, kind: "hook", theme: "dark", tag: "REEL", mascot: "thumbsup", title: "Your competitors are already {{automating}}", punch: "Don't get {{left behind}}." },
  { day: 30, kind: "hook", theme: "light", tag: "REEL", mascot: "wave", title: "Ready to {{automate}} your business?", sub: "DM us for a free strategy chat — let's build your AI advantage.", cta: 'DM us "AUTOMATE"' },
];

let count = 0;
for (const p of POSTS) {
  const name = `day-${String(p.day).padStart(2, "0")}.html`;
  fs.writeFileSync(path.join(OUT, name), page(p));
  count++;
}
console.log(`Wrote ${count} posts to ${OUT}`);
