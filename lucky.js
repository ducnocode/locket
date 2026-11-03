// ============================================================================
// 1. FF LUCKY REQUEST HOOK (ff_lucky_req.js)
// ============================================================================
const url = $request.url || "";
const h = Object.assign({}, $request.headers || {});

if (url.includes("ff.lucky")) {
  $done({
    response: {
      status: 200,
      headers: { "Content-Type": "text/html;charset=utf-8" },
      body: "<div style='background:#09090b;color:#fbbf24;padding:24px;font-family:sans-serif'><h2>Free Fire Lucky Interceptor Active</h2><p>Status: Hooking Web Events & Client Luck Payload (Max Luck = 100)</p></div>"
    }
  });
} else {
  let b = $request.body;
  if (typeof b === "string" && b.trim().startsWith("{")) {
    try {
      const j = JSON.parse(b);
      if ("luck" in j) j.luck = 100;
      if ("lucky" in j) j.lucky = 100;
      if ("lucky_value" in j) j.lucky_value = 100;
      if ("pity" in j) j.pity = 100;
      b = JSON.stringify(j);
    } catch (e) {}
  }
  $done({ headers: h, body: b });
}

// ============================================================================
// 2. FF LUCKY RESPONSE PATCHER (ff_lucky_res.js)
// ============================================================================
function patchLuck(n, d = 0) {
  if (!n || typeof n !== "object" || d > 8) return n;
  if (Array.isArray(n)) {
    for (let i = 0; i < n.length; i++) patchLuck(n[i], d + 1);
    return n;
  }
  const luckKeys = [
    "luck", "lucky", "lucky_value", "luck_value",
    "lucky_point", "luck_point", "pity", "pity_count",
    "spin_luck", "royale_luck"
  ];
  const rateKeys = [
    "rate", "prob", "probability", "drop_rate", "win_rate", "chance"
  ];
  for (const k of Object.keys(n)) {
    const lk = k.toLowerCase();
    if (luckKeys.includes(lk) && typeof n[k] === "number") {
      n[k] = 100;
    } else if (rateKeys.includes(lk) && typeof n[k] === "number") {
      n[k] = 100;
    } else if (
      (lk === "is_lucky" || lk === "guaranteed" || lk === "is_grand_prize") &&
      typeof n[k] === "boolean"
    ) {
      n[k] = true;
    } else if (typeof n[k] === "object" && n[k] !== null) {
      patchLuck(n[k], d + 1);
    }
  }
  return n;
}

let body = $response.body;
if (typeof body === "string" && body.trim().startsWith("{")) {
  try {
    let obj = JSON.parse(body);
    obj = patchLuck(obj);
    body = JSON.stringify(obj);
  } catch (e) {}
}
$done({ body: body });
