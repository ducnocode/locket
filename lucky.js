/**
 * Free Fire Lucky Royale & Web Event Spoofer (All-In-One Request/Response)
 * Repo: https://github.com/ducnocode/locket/blob/main/lucky.js
 * Raw:  https://raw.githubusercontent.com/ducnocode/locket/main/lucky.js
 */

const MAX_LUCK = 100;

function save(k, v) {
  if (!v) return;
  if (typeof $persistentStore !== "undefined") $persistentStore.write(String(v), k);
  else if (typeof $prefs !== "undefined") $prefs.setValueForKey(String(v), k);
}

function load(k) {
  if (typeof $persistentStore !== "undefined") return $persistentStore.read(k);
  if (typeof $prefs !== "undefined") return $prefs.valueForKey(k);
  return null;
}

function deepPatchLuck(n, d = 0) {
  if (!n || typeof n !== "object" || d > 8) return n;
  if (Array.isArray(n)) {
    for (let i = 0; i < n.length; i++) deepPatchLuck(n[i], d + 1);
    return n;
  }

  const luckKeys = [
    "luck", "lucky", "lucky_value", "luck_value",
    "lucky_point", "luck_point", "pity", "pity_count",
    "spin_luck", "royale_luck", "current_luck", "user_luck"
  ];
  const rateKeys = [
    "rate", "prob", "probability", "drop_rate",
    "win_rate", "chance", "grand_prize_rate"
  ];

  for (const k of Object.keys(n)) {
    const lk = k.toLowerCase();
    if (luckKeys.includes(lk) && typeof n[k] === "number") {
      n[k] = MAX_LUCK;
    } else if (rateKeys.includes(lk) && typeof n[k] === "number") {
      n[k] = MAX_LUCK;
    } else if (
      (lk === "is_lucky" || lk === "guaranteed" || lk === "is_grand_prize" || lk === "win_grand") &&
      typeof n[k] === "boolean"
    ) {
      n[k] = true;
    } else if (typeof n[k] === "object" && n[k] !== null) {
      deepPatchLuck(n[k], d + 1);
    }
  }
  return n;
}

const isReq = typeof $request !== "undefined" && typeof $response === "undefined";
const isRes = typeof $response !== "undefined";

if (isReq) {
  const url = $request.url || "";
  const h = Object.assign({}, $request.headers || {});

  for (const k of Object.keys(h)) {
    const l = k.toLowerCase();
    if (l.includes("etag") || l.includes("if-none-match") || l.includes("if-modified-since")) {
      delete h[k];
    }
  }
  h["Cache-Control"] = "no-cache, no-store";

  if (url.includes("ff.lucky")) {
    const hits = load("FF_LUCKY_HITS") || "0";
    const lastUrl = load("FF_LAST_URL") || "Chưa bắt được gói sự kiện nào";
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FF Lucky Spoofer (ducnocode)</title><style>body{background:#09090b;color:#f4f4f5;font-family:-apple-system,sans-serif;padding:20px;margin:0}.card{background:#18181b;border:1px solid #fbbf24;border-radius:16px;padding:20px;max-width:480px;margin:20px auto;box-shadow:0 10px 30px rgba(251,191,36,0.15)}h2{color:#fbbf24;margin-top:0}.row{margin:10px 0;font-size:14px;word-break:break-all}.tag{color:#a1a1aa}</style></head><body><div class="card"><h2>FF Lucky Spoofer (lucky.js)</h2><div class="row"><span class="tag">Repo:</span> ducnocode/locket/main/lucky.js</div><div class="row"><span class="tag">Chỉ số Luck khoá cứng:</span> ${MAX_LUCK}</div><div class="row"><span class="tag">Số gói Event đã Patch:</span> ${hits}</div><div class="row"><span class="tag">Endpoint gần nhất:</span> ${lastUrl}</div></div></body></html>`;
    $done({
      response: {
        status: 200,
        headers: { "Content-Type": "text/html;charset=utf-8" },
        body: html
      }
    });
  } else {
    let b = $request.body;
    if (typeof b === "string" && b.trim().startsWith("{")) {
      try {
        let j = JSON.parse(b);
        j = deepPatchLuck(j);
        b = JSON.stringify(j);
      } catch (e) {}
    }
    $done({ headers: h, body: b });
  }
} else if (isRes) {
  const url = typeof $request !== "undefined" && $request.url ? $request.url : "";
  let body = $response.body;
  const rh = Object.assign({}, $response.headers || {});

  for (const k of Object.keys(rh)) {
    const l = k.toLowerCase();
    if (l.includes("etag") || l === "content-length") delete rh[k];
  }
  rh["Cache-Control"] = "no-store, no-cache, must-revalidate";

  if (typeof body === "string" && body.trim().startsWith("{")) {
    try {
      let obj = JSON.parse(body);
      obj = deepPatchLuck(obj);
      body = JSON.stringify(obj);
      const c = Number(load("FF_LUCKY_HITS") || 0) + 1;
      save("FF_LUCKY_HITS", String(c));
      if (url) save("FF_LAST_URL", url);
    } catch (e) {}
  }
  $done({ headers: rh, body: body });
} else {
  $done({});
}
