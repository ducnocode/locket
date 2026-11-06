// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 1/3 — LÕI HỆ THỐNG & APPLE PRODUCT SPEC)
// Runtime: Shadowrocket / Loon / Surge / Quantumult X
// Kiến trúc: Apple.com Scrollytelling 60fps Clone (800vh) + Full Core Locket V6
// ============================================================================

const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";
const ADMIN_API_URL = ""; // Khai báo chống lỗi ReferenceError khi đồng bộ Realtime

// ============================================================================
// 1. CẤU HÌNH 6 BIẾN SẢN PHẨM CHUẨN APPLE.COM SCROLL CLONE (DỄ DÀNG CHỈNH SỬA)
// ============================================================================
const THAY_PRODUCT_NAME = "Locket Gold Pro";
const THAY_SLOGAN = "Hiệu ứng thích ứng. Quyền năng thuần khiết.";
const THAY_USP_LEFT = "Thiết kế tối giản. Đồng bộ hoàn hảo từng khoảnh khắc trực tiếp trên màn hình chính của bạn.";
const THAY_USP_RIGHT = "Chip Locket H2 & DoH Engine mới. Mở khoá 999.999 lượt AI Looks và khử trễ mạng gấp đôi thế hệ trước.";
const THAY_FEATURES = [
    {
        title: "Mở khoá toàn diện Hiệu ứng & AI",
        desc: "Gỡ bỏ hoàn toàn lớp mờ Paywall, kích hoạt trọn bộ Filter ngày lễ và cấp phát 999.999 lượt tạo diện mạo AI mỗi ngày.",
        badge: "999.999 AI QUOTA"
    },
    {
        title: "Huy hiệu Bạn bè cá nhân hoá",
        desc: "Kiểm soát độc lập trạng thái hiển thị huy hiệu Locket Gold cho từng người bạn trong danh sách mà vẫn giữ cứng Gold cho riêng bạn.",
        badge: "INDEPENDENT BADGE"
    },
    {
        title: "Định tuyến DoH & Khóa cứng 24/7",
        desc: "Tích hợp trực tiếp máy chủ DNS-over-HTTPS (172.67.146.35 / 104.21.10.172) và Cron KeepAlive duy trì quyền lợi vĩnh viễn tới 2099.",
        badge: "DOH HTTPS ENGINE"
    }
];

// Đồ họa Studio Vector 8K mô phỏng thiết bị Locket Gold H2 & Hộp Mạch Quang Học trên nền #fbfbfd chuẩn Apple Studio Photography
const DEFAULT_GOLD_POPUP_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <radialGradient id="studioBg" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="65%" stop-color="#fbfbfd"/>
      <stop offset="100%" stop-color="#f2f2f7"/>
    </radialGradient>
    <linearGradient id="ceramicBody" x1="15%" y1="5%" x2="85%" y2="95%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="52%" stop-color="#f5f5f7"/>
      <stop offset="88%" stop-color="#e5e5ea"/>
      <stop offset="100%" stop-color="#d1d1d6"/>
    </linearGradient>
    <linearGradient id="titaniumRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#d2d2d7"/>
      <stop offset="70%" stop-color="#86868b"/>
      <stop offset="100%" stop-color="#1d1d1f"/>
    </linearGradient>
    <linearGradient id="h2Silicon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2c2c2e"/>
      <stop offset="50%" stop-color="#1d1d1f"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="45%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <radialGradient id="ambientDrop" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1d1d1f" stop-opacity="0.18"/>
      <stop offset="55%" stop-color="#1d1d1f" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#1d1d1f" stop-opacity="0"/>
    </radialGradient>
    <filter id="appleStudioShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="24" flood-color="#1d1d1f" flood-opacity="0.10"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#1d1d1f" flood-opacity="0.05"/>
    </filter>
  </defs>

  <!-- Nền Studio trắng tinh khiết -->
  <rect width="800" height="800" rx="160" fill="url(#studioBg)"/>

  <!-- Bóng đổ mặt bàn Studio -->
  <ellipse cx="400" cy="650" rx="250" ry="42" fill="url(#ambientDrop)"/>

  <!-- Thân vỏ Ceramic trắng mở nắp chuẩn Apple -->
  <g filter="url(#appleStudioShadow)">
    <!-- Nắp trên mở hé -->
    <rect x="170" y="115" width="460" height="175" rx="86" fill="url(#ceramicBody)" stroke="url(#titaniumRim)" stroke-width="2"/>
    <path d="M 215 288 L 585 288" stroke="#d2d2d7" stroke-width="3" stroke-linecap="round"/>
    <!-- Khớp bản lề kim loại -->
    <rect x="355" y="280" width="90" height="16" rx="8" fill="url(#titaniumRim)"/>

    <!-- Thân dưới chứa Lõi quang học Locket H2 -->
    <rect x="150" y="290" width="500" height="340" rx="110" fill="url(#ceramicBody)" stroke="url(#titaniumRim)" stroke-width="2.5"/>
    <rect x="172" y="310" width="456" height="300" rx="92" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.9"/>

    <!-- Cụm ống kính & Chip H2 trung tâm -->
    <circle cx="400" cy="460" r="118" fill="url(#h2Silicon)" stroke="url(#titaniumRim)" stroke-width="4"/>
    <circle cx="400" cy="460" r="98" fill="none" stroke="url(#goldFoil)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.85"/>

    <!-- Đế Silicon H2 -->
    <rect x="336" y="396" width="128" height="128" rx="28" fill="#141416" stroke="url(#goldFoil)" stroke-width="2.2"/>

    <!-- Chân tiếp xúc mạ vàng -->
    <g stroke="url(#goldFoil)" stroke-width="2" stroke-linecap="round" opacity="0.75">
      <line x1="364" y1="396" x2="364" y2="376"/>
      <line x1="388" y1="396" x2="388" y2="376"/>
      <line x1="412" y1="396" x2="412" y2="376"/>
      <line x1="436" y1="396" x2="436" y2="376"/>
      <line x1="364" y1="524" x2="364" y2="544"/>
      <line x1="388" y1="524" x2="388" y2="544"/>
      <line x1="412" y1="524" x2="412" y2="544"/>
      <line x1="436" y1="524" x2="436" y2="544"/>
    </g>

    <!-- Chữ khắc Laser trên mặt Chip -->
    <text x="400" y="442" text-anchor="middle" fill="#86868b" font-size="11" font-weight="700" letter-spacing="0.22em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">APPLE SILICON</text>
    <text x="400" y="474" text-anchor="middle" fill="url(#goldFoil)" font-size="30" font-weight="800" letter-spacing="-0.02em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">GOLD H2</text>
    <text x="400" y="498" text-anchor="middle" fill="#f5f5f7" font-size="10" font-weight="600" letter-spacing="0.18em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">PRO ENGINE V6</text>

    <!-- Đèn báo trạng thái kích hoạt xanh ngọc -->
    <circle cx="400" cy="596" r="5" fill="#10b981"/>
    <circle cx="400" cy="596" r="11" fill="none" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.35"/>
  </g>
</svg>`);

const THAY_IMAGE_PATH = DEFAULT_GOLD_POPUP_SVG;

// ============================================================================
// 2. CẤU HÌNH TÍNH NĂNG TRÍCH XUẤT TỪ FILE MOBILECONFIG (CHẠY TRỰC TIẾP TRONG JS)
// ============================================================================
const INTEGRATED_NET_ENGINE = {
    profileName: "locket.com",
    profileIdentifier: "com.camsitup.locket.dns_profile.nguyenvanquan2005",
    profileUUID: "99096d98-2a7b-4398-aa9a-900079ebc9f5",
    caDisplayName: "LocketGold Root CA",
    caIdentifier: "com.apple.security.root.dcbbd2a2-6610-4134-ab33-b4a60262c7f4",
    caUUID: "dcbbd2a2-6610-4134-ab33-b4a60262c7f4",
    caValidFrom: "2026-09-30T14:29:08Z",
    caValidTo: "2036-09-27T14:29:08Z",
    caSerialHex: "390A98914EF258F88858C35DBDC439BCCD4D2A04",
    caFingerprintBrief: "F9:75:07:E6:E8:4B:B9:98:DC:F9:39:DF:5C:72:1E:D4:96:2C:C7:FA",
    dnsDisplayName: "LocketGold DNS",
    dnsIdentifier: "com.apple.dnsSettings.managed.2e4f2586-c69c-4291-a5b5-f1c535e9c4c6",
    dnsUUID: "2e4f2586-c69c-4291-a5b5-f1c535e9c4c6",
    dnsProtocol: "HTTPS",
    dohServerUrl: "https://doh.2707226.xyz/dns-query/common",
    dohBaseHost: "https://doh.2707226.xyz",
    serverAddresses: ["172.67.146.35", "104.21.10.172"],
    supplementalMatchDomains: [
        "api.revenuecat.com",
        "firebaseremoteconfig.googleapis.com",
        "us-central1-locket-4252a.cloudfunctions.net"
    ]
};

const DEFAULT_CONFIG = {
    lockDate: "2026-05-25",
    lockTime: "T08:30:00Z",
    expireDate: "2099-12-31",
    expireTime: "T23:59:59Z",
    productId: "locket_1600_1y",
    ownershipType: "PURCHASED",
    periodType: "normal",
    store: "app_store",
    storeTransactionId: "490001234567893",
    priceAmount: 399000,
    priceCurrency: "VND",
    appVersion: "1.0",
    forceSandboxFalse: true,
    alwaysForceBadge: true,
    friendsBadgeDefault: true,
    cronKeepAlive: true,
    notifyOnSync: true,
    unlockAllCameraEffects: true,
    aiFilterEnabled: true,
    aiFilterQuota: 999999,
    aiFilterDailyLimit: 999999,
    aiFilterUsed: 0,
    aiFilterUnlimited: true,
    dohEnabled: true,
    dohServerUrl: INTEGRATED_NET_ENGINE.dohServerUrl,
    dohPrimaryIp: INTEGRATED_NET_ENGINE.serverAddresses[0],
    dohSecondaryIp: INTEGRATED_NET_ENGINE.serverAddresses[1],
    interceptCloudFunctions: true,
    bypassSslPinningHeaders: true,
    // Tuỳ chọn bật Canvas 360 Sequence Mode nếu người dùng truyền 72 frames
    canvasSequenceEnabled: false,
    canvasFrameBaseUrl: "",
    popupEnabled: true,
    popupAutoShow: false,
    popupBadge: "LOCKET GOLD",
    popupHeader: "Đã Kích Hoạt",
    popupTitle: "Youtube @NightmarketServer",
    popupSubtitle: "Nhớ Follow Kênh Ủng Hộ Mình Nhé",
    popupImage: THAY_IMAGE_PATH,
    popupBtnText: "Hoàn tất",
    pushNotifyOnActivate: true,
    pushCooldownSeconds: 12,
    pushTitle: "LOCKET GOLD — Đã Kích Hoạt",
    pushSubtitle: "Youtube @NightmarketServer",
    pushBody: "Nhớ Follow Kênh Ủng Hộ Mình Nhé"
};

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V6";
const USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
const USERNAME_CACHE_KEY = "LOCKET_LAST_USERNAME";
const AVATAR_CACHE_KEY = "LOCKET_LAST_AVATAR";
const AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
const RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
const REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";
const LOCAL_ADMIN_DB_KEY = "LOCKET_BENTO_USERS_DB_V4";
const ADMIN_SESSION_KEY = "LOCKET_BENTO_ADMIN_SESSION_V4";
const LAST_INAPP_ALERT_TS_KEY = "LOCKET_INAPP_ALERT_TS_V4";
const LAST_GOLD_PUSH_TS_KEY = "LOCKET_GOLD_OPEN_ALERT_TS_V6";
const DOH_STATUS_CACHE_KEY = "LOCKET_DOH_HEALTH_STATUS_V6";
const FRIENDS_BADGE_DB_KEY = "LOCKET_FRIENDS_BADGE_MAP_V6";

// ============================================================================
// 3. LỚP TƯƠNG THÍCH MÔI TRƯỜNG (SHADOWROCKET / LOON / SURGE / QUANTUMULT X)
// ============================================================================
const Env = (() => {
    const isQuanX = typeof $prefs !== "undefined";
    const isSurgeLoon = typeof $persistentStore !== "undefined";

    return {
        read(key) {
            try {
                if (isSurgeLoon) return $persistentStore.read(key);
                if (isQuanX) return $prefs.valueForKey(key);
            } catch (e) {}
            return null;
        },
        write(val, key) {
            try {
                if (isSurgeLoon) return $persistentStore.write(String(val), key);
                if (isQuanX) return $prefs.setValueForKey(String(val), key);
            } catch (e) {}
            return false;
        },
        notify(title, subtitle, body) {
            try {
                const t = String(title || "LOCKET GOLD — Đã Kích Hoạt");
                const s = String(subtitle || "");
                const b = String(body || "");
                if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
                    $notification.post(t, s, b);
                } else if (typeof $notify === "function") {
                    $notify(t, s, b);
                }
            } catch (e) {}
        },
        httpGet(options, callback) {
            try {
                if (typeof $httpClient !== "undefined" && typeof $httpClient.get === "function") {
                    $httpClient.get(options, callback);
                } else if (typeof $task !== "undefined" && typeof $task.fetch === "function") {
                    $task.fetch({ method: "GET", ...options }).then(
                        (resp) => callback(null, resp, resp.body),
                        (err) => callback(err, null, null)
                    );
                } else {
                    callback(new Error("No HTTP client"), null, null);
                }
            } catch (e) {
                callback(e, null, null);
            }
        },
        httpPost(options, callback) {
            try {
                if (typeof $httpClient !== "undefined" && typeof $httpClient.post === "function") {
                    $httpClient.post(options, callback);
                } else if (typeof $task !== "undefined" && typeof $task.fetch === "function") {
                    $task.fetch({ method: "POST", ...options }).then(
                        (resp) => callback(null, resp, resp.body),
                        (err) => callback(err, null, null)
                    );
                } else {
                    callback(new Error("No HTTP client"), null, null);
                }
            } catch (e) {
                callback(e, null, null);
            }
        },
        done(val = {}) {
            if (typeof $done === "function") $done(val);
        }
    };
})();

function escapeHtml(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function sanitizeQuotaNumber(val, fallback = 999999) {
    const n = parseInt(String(val || "").replace(/[^\d]/g, ""), 10);
    if (isNaN(n) || n < 0) return fallback;
    if (n > 999999999) return 999999999;
    return n;
}

function toIsoDate(raw, fallbackDate, timeSuffix = "T08:30:00Z") {
    if (!raw || typeof raw !== "string") return fallbackDate + timeSuffix;
    const s = raw.trim();
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(s)) {
        return s.endsWith("Z") ? s : s + "Z";
    }
    const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmy) {
        return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}${timeSuffix}`;
    }
    const ymd = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
    if (ymd) {
        return `${ymd[1]}-${ymd[2].padStart(2, "0")}-${ymd[3].padStart(2, "0")}${timeSuffix}`;
    }
    return fallbackDate + timeSuffix;
}

// ============================================================================
// 4. CƠ CHẾ QUẢN LÝ BẬT / TẮT HUY HIỆU LOCKET GOLD CHO TỪNG BẠN BÈ
// ============================================================================
let _runtimeFriendsDirty = false;
let _runtimeFriendsCache = null;

function getFriendsBadgeMap() {
    if (_runtimeFriendsCache) return _runtimeFriendsCache;
    try {
        const raw = Env.read(FRIENDS_BADGE_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                _runtimeFriendsCache = parsed;
                return _runtimeFriendsCache;
            }
        }
    } catch (e) {}
    _runtimeFriendsCache = {};
    return _runtimeFriendsCache;
}

function saveFriendsBadgeMap(map) {
    _runtimeFriendsCache = map || {};
    Env.write(JSON.stringify(_runtimeFriendsCache), FRIENDS_BADGE_DB_KEY);
    _runtimeFriendsDirty = false;
}

function flushFriendsBadgeMapIfNeeded() {
    if (_runtimeFriendsDirty && _runtimeFriendsCache) {
        Env.write(JSON.stringify(_runtimeFriendsCache), FRIENDS_BADGE_DB_KEY);
        _runtimeFriendsDirty = false;
    }
}

function resolveFriendBadgeState(friendUid, meta, cfg) {
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";
    if (!friendUid || friendUid.includes("RCAnonymousID")) return true;
    if (selfUid && friendUid === selfUid) return true;

    const map = getFriendsBadgeMap();
    const defaultEnabled = cfg && cfg.friendsBadgeDefault !== false;
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

    if (!map[friendUid]) {
        const uName = (meta && meta.username) || friendUid.slice(0, 10);
        const fName = (meta && meta.full_name) || uName;
        const avatar = (meta && meta.avatar) || `https://cdn2.locketcamera.com/v0/b/locket-img/o/users%2F${encodeURIComponent(friendUid)}%2Fpublic%2Fprofile_pic.webp?alt=media`;
        map[friendUid] = {
            uid: friendUid,
            username: uName,
            full_name: fName,
            avatar: avatar,
            badge_enabled: defaultEnabled,
            updated_at: nowStr
        };
        _runtimeFriendsDirty = true;
    } else {
        let changed = false;
        if (meta && meta.username && meta.username !== map[friendUid].username) {
            map[friendUid].username = meta.username;
            changed = true;
        }
        if (meta && meta.full_name && meta.full_name !== map[friendUid].full_name) {
            map[friendUid].full_name = meta.full_name;
            changed = true;
        }
        if (meta && meta.avatar && meta.avatar !== map[friendUid].avatar) {
            map[friendUid].avatar = meta.avatar;
            changed = true;
        }
        if (changed) _runtimeFriendsDirty = true;
    }

    return map[friendUid].badge_enabled !== false;
}

function setSingleFriendBadgeState(friendUid, enabled, extraMeta = {}) {
    if (!friendUid) return null;
    const map = getFriendsBadgeMap();
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);
    const existing = map[friendUid] || {};
    const uName = extraMeta.username || existing.username || friendUid.slice(0, 10);
    const fName = extraMeta.full_name || existing.full_name || uName;
    const avatar = extraMeta.avatar || existing.avatar || `https://cdn2.locketcamera.com/v0/b/locket-img/o/users%2F${encodeURIComponent(friendUid)}%2Fpublic%2Fprofile_pic.webp?alt=media`;

    map[friendUid] = {
        uid: friendUid,
        username: uName,
        full_name: fName,
        avatar: avatar,
        badge_enabled: !!enabled,
        updated_at: nowStr
    };
    saveFriendsBadgeMap(map);
    return map[friendUid];
}

function setAllFriendsBadgeState(enabled) {
    const map = getFriendsBadgeMap();
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);
    for (const k of Object.keys(map)) {
        map[k].badge_enabled = !!enabled;
        map[k].updated_at = nowStr;
    }
    saveFriendsBadgeMap(map);
}

// ============================================================================
// 5. BỘ XỬ LÝ TÍNH NĂNG MẠNG TÍCH HỢP TỪ MOBILECONFIG (DOH + CLOUDFUNCTIONS + CA)
// ============================================================================
function isSupplementalMatchedDomain(url) {
    if (!url || typeof url !== "string") return false;
    const low = url.toLowerCase();
    for (const domain of INTEGRATED_NET_ENGINE.supplementalMatchDomains) {
        if (low.includes(domain.toLowerCase())) return true;
    }
    return (
        low.includes("revenuecat.com") ||
        low.includes("rc-backup.com") ||
        low.includes("firebaseremoteconfig.googleapis.com") ||
        low.includes("us-central1-locket-4252a.cloudfunctions.net") ||
        low.includes("locketcamera.com")
    );
}

function probeIntegratedDohEndpoint(cfg, callback) {
    const dohUrl = (cfg && cfg.dohServerUrl) || INTEGRATED_NET_ENGINE.dohServerUrl;
    const probeTarget = `${dohUrl}?name=api.revenuecat.com&type=A`;
    const startTs = Date.now();

    Env.httpGet({
        url: probeTarget,
        headers: {
            "Accept": "application/dns-json",
            "X-LocketGold-DoH-IP-Primary": (cfg && cfg.dohPrimaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[0],
            "X-LocketGold-DoH-IP-Secondary": (cfg && cfg.dohSecondaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[1],
            "Cache-Control": "no-store, no-cache"
        },
        timeout: 3
    }, (err) => {
        const latencyMs = Math.max(1, Date.now() - startTs);
        const statusObj = {
            ok: !err,
            serverUrl: dohUrl,
            primaryIp: (cfg && cfg.dohPrimaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[0],
            secondaryIp: (cfg && cfg.dohSecondaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[1],
            latencyMs: latencyMs,
            checkedAt: new Date().toISOString().replace("T", " ").slice(0, 19),
            domains: INTEGRATED_NET_ENGINE.supplementalMatchDomains
        };
        Env.write(JSON.stringify(statusObj), DOH_STATUS_CACHE_KEY);
        if (callback) callback(statusObj);
    });
}

function getCachedDohStatus(cfg) {
    try {
        const raw = Env.read(DOH_STATUS_CACHE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") return parsed;
        }
    } catch (e) {}
    return {
        ok: true,
        serverUrl: (cfg && cfg.dohServerUrl) || INTEGRATED_NET_ENGINE.dohServerUrl,
        primaryIp: (cfg && cfg.dohPrimaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[0],
        secondaryIp: (cfg && cfg.dohSecondaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[1],
        latencyMs: 16,
        checkedAt: "Sẵn sàng 24/7",
        domains: INTEGRATED_NET_ENGINE.supplementalMatchDomains
    };
}

function applyIntegratedNetworkHeaders(url, headers, cfg) {
    if (!headers || typeof headers !== "object") return headers;
    if (!isSupplementalMatchedDomain(url)) return headers;

    for (const k of Object.keys(headers)) {
        const low = k.toLowerCase();
        if (
            low === "x-revenuecat-etag" ||
            low === "if-none-match" ||
            low === "if-modified-since" ||
            low === "x-goog-if-none-match" ||
            low === "public-key-pins" ||
            low === "public-key-pins-report-only" ||
            low === "expect-ct"
        ) {
            delete headers[k];
        }
    }

    headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    headers["Pragma"] = "no-cache";

    if (cfg && cfg.dohEnabled !== false) {
        headers["X-LocketGold-DNS-Protocol"] = INTEGRATED_NET_ENGINE.dnsProtocol;
        headers["X-LocketGold-DoH-Endpoint"] = cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl;
        headers["X-LocketGold-Edge-IPs"] = `${cfg.dohPrimaryIp || INTEGRATED_NET_ENGINE.serverAddresses[0]},${cfg.dohSecondaryIp || INTEGRATED_NET_ENGINE.serverAddresses[1]}`;
        headers["X-LocketGold-CA-UUID"] = INTEGRATED_NET_ENGINE.caUUID;
    }

    return headers;
}

function patchCloudFunctionResponsePayload(obj, cfg, reqUrl, resolvedUserId) {
    if (!obj || typeof obj !== "object") return obj;
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);

    if (obj.error && typeof obj.error === "object") {
        const errMsg = String(obj.error.message || obj.error.status || "").toLowerCase();
        if (
            errMsg.includes("quota") ||
            errMsg.includes("limit") ||
            errMsg.includes("gold") ||
            errMsg.includes("permission") ||
            errMsg.includes("unauthenticated") ||
            errMsg.includes("resource-exhausted")
        ) {
            delete obj.error;
        }
    }

    if (!obj.result || typeof obj.result !== "object") {
        obj.result = {};
    }

    const r = obj.result;
    if (!("status" in r)) r.status = 200;
    r.ok = true;
    r.is_gold = true;
    r.locket_gold_badge = true;
    r.has_gold_badge = true;
    r.badge = "locket_gold";
    r.can_use = true;
    r.can_generate = true;
    r.unlocked = true;
    r.remaining = quotaNum;
    r.remaining_uses = quotaNum;
    r.ai_filter_quota = quotaNum;
    r.ai_filter_remaining = quotaNum;
    r.ai_looks_remaining = quotaNum;

    if (r.data && typeof r.data === "object" && !Array.isArray(r.data)) {
        const targetUid = r.data.uid || r.data.user_uid || "";
        const selfUid = Env.read(USER_ID_CACHE_KEY) || "";
        const isFriendObj = targetUid && selfUid && targetUid !== selfUid;
        if (!isFriendObj) {
            r.data.badge = "locket_gold";
            r.data.locket_gold_badge = true;
            r.data.has_gold_badge = true;
            r.data.is_gold = true;
            r.data.original_purchase_date = cfg.lockIso;
            r.data.expires_date = cfg.expireIso;
            r.data.ai_filter_quota = quotaNum;
            r.data.ai_filter_remaining = quotaNum;
            r.data.ai_looks_remaining = quotaNum;
            r.data.can_use_ai_filter = true;
            r.data.can_use_holiday_effects = true;
        }
    }

    const res = deepForceBadgeAndAiQuotaInObject(obj, cfg, 0);
    flushFriendsBadgeMapIfNeeded();
    return res;
}

function triggerShadowrocketPush(cfg, customTitle, customSub, customBody) {
    const title = customTitle || `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt"}`;
    const sub = customSub || cfg.popupTitle || "Youtube @NightmarketServer";
    const body = customBody || cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé";
    Env.write(String(Date.now()), LAST_GOLD_PUSH_TS_KEY);
    Env.notify(title, sub, body);
}

function triggerInAppGoldWelcomeAlert(uid, cfg, forceImmediate = false) {
    if (cfg.isBlockedByAdmin) return;
    if (!forceImmediate && cfg.pushNotifyOnActivate === false) return;

    const now = Date.now();
    const lastPush = parseInt(Env.read(LAST_GOLD_PUSH_TS_KEY) || "0", 10);
    const cooldownMs = Math.max(5, parseInt(cfg.pushCooldownSeconds || 12, 10)) * 1000;

    if (forceImmediate || isNaN(lastPush) || (now - lastPush > cooldownMs)) {
        Env.write(String(now), LAST_GOLD_PUSH_TS_KEY);
        const title = `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt"}`;
        const sub = cfg.popupTitle || "Youtube @NightmarketServer";
        const body = cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé";
        Env.notify(title, sub, body);
    }
}

function triggerInAppLocketBlockAlert(uid, reason, isBlocked, forceImmediate = false) {
    if (!isBlocked) {
        Env.write("0", LAST_INAPP_ALERT_TS_KEY);
        return;
    }
    const now = Date.now();
    const lastAlert = parseInt(Env.read(LAST_INAPP_ALERT_TS_KEY) || "0", 10);
    if (forceImmediate || (now - lastAlert > 8000)) {
        Env.write(String(now), LAST_INAPP_ALERT_TS_KEY);
        Env.notify(
            "Locket Gold — Thông Báo Từ Admin",
            `Tài khoản (${uid || "UID"}) đang bị Admin chặn`,
            `${reason || "Tài khoản của bạn đang bị Admin tạm khoá bảng điều khiển (Huy hiệu Locket Gold vẫn được giữ nguyên)."}`
        );
    }
}

function getLocalStore() {
    try {
        const raw = Env.read(LOCAL_ADMIN_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object" && parsed.users) {
                if (!parsed.cf_url) parsed.cf_url = INTEGRATED_NET_ENGINE.dohBaseHost;
                if (!parsed.doh_query_url) parsed.doh_query_url = INTEGRATED_NET_ENGINE.dohServerUrl;
                return parsed;
            }
        }
    } catch (e) {}
    return {
        cf_url: INTEGRATED_NET_ENGINE.dohBaseHost,
        doh_query_url: INTEGRATED_NET_ENGINE.dohServerUrl,
        server_ips: INTEGRATED_NET_ENGINE.serverAddresses,
        users: {}
    };
}

function saveLocalStore(db) {
    Env.write(JSON.stringify(db), LOCAL_ADMIN_DB_KEY);
}

function upsertUserRecord(uid, extra = {}) {
    if (!uid || uid.includes("RCAnonymousID")) return null;
    const db = getLocalStore();
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);
    const cachedName = extra.username || Env.read(USERNAME_CACHE_KEY) || uid.slice(0, 10);
    const cachedAvatar = extra.avatar || Env.read(AVATAR_CACHE_KEY) || `https://cdn2.locketcamera.com/v0/b/locket-img/o/users%2F${encodeURIComponent(uid)}%2Fpublic%2Fprofile_pic.webp?alt=media`;
    const token = uid.slice(0, 12).toLowerCase();

    if (!db.users[uid]) {
        db.users[uid] = {
            uid: uid,
            username: cachedName,
            full_name: extra.full_name || cachedName,
            avatar: cachedAvatar,
            token: token,
            status: "approved",
            gold_active: true,
            blocked: false,
            note: extra.note || "Đã kích hoạt Locket Gold & Mở khoá Full Hiệu Ứng AI",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
            product_id: extra.productId || DEFAULT_CONFIG.productId,
            ai_quota: extra.aiQuota !== undefined ? sanitizeQuotaNumber(extra.aiQuota, DEFAULT_CONFIG.aiFilterQuota) : DEFAULT_CONFIG.aiFilterQuota,
            activated_at: nowStr,
            updated_at: nowStr,
            reason: ""
        };
        saveLocalStore(db);
    } else {
        if (extra.username) db.users[uid].username = extra.username;
        if (extra.full_name) db.users[uid].full_name = extra.full_name;
        if (extra.avatar) db.users[uid].avatar = extra.avatar;
        if (extra.lockDate) db.users[uid].lock_date = extra.lockDate;
        if (extra.productId) db.users[uid].product_id = extra.productId;
        if (extra.aiQuota !== undefined) {
            db.users[uid].ai_quota = sanitizeQuotaNumber(extra.aiQuota, db.users[uid].ai_quota || DEFAULT_CONFIG.aiFilterQuota);
        }
        if (extra.touch) db.users[uid].updated_at = nowStr;
        saveLocalStore(db);
    }
    return db.users[uid];
}

function evaluateRealtimeState(uid) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    const db = getLocalStore();
    const localUser = (cleanUid && db.users[cleanUid]) ? db.users[cleanUid] : null;

    let remoteCache = null;
    try {
        const raw = Env.read(REMOTE_AUTH_CACHE_KEY);
        if (raw) remoteCache = JSON.parse(raw);
    } catch (e) {}

    if (localUser) {
        const isBlocked = localUser.status === "blocked" || localUser.blocked === true;
        return {
            uid: cleanUid,
            approved: localUser.status === "approved" || localUser.gold_active !== false,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : (localUser.status || "approved"),
            force_lock_date: localUser.force_lock_date || localUser.lock_date || null,
            ai_quota: localUser.ai_quota !== undefined ? sanitizeQuotaNumber(localUser.ai_quota, DEFAULT_CONFIG.aiFilterQuota) : null,
            reason: isBlocked
                ? (localUser.reason || "Tài khoản đang bị Admin chặn tạm thời (Vẫn giữ huy hiệu Locket Gold).")
                : ""
        };
    }

    if (remoteCache && (!cleanUid || remoteCache.uid === cleanUid)) {
        const isBlocked = remoteCache.status === "blocked" || !!remoteCache.blocked;
        return {
            uid: cleanUid,
            approved: true,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : (remoteCache.status || "approved"),
            force_lock_date: remoteCache.force_lock_date || null,
            ai_quota: remoteCache.ai_quota !== undefined ? sanitizeQuotaNumber(remoteCache.ai_quota, DEFAULT_CONFIG.aiFilterQuota) : null,
            reason: isBlocked ? (remoteCache.reason || "Tài khoản đang bị Admin chặn.") : ""
        };
    }

    return {
        uid: cleanUid,
        approved: true,
        blocked: false,
        status: "approved",
        force_lock_date: null,
        ai_quota: null,
        reason: ""
    };
}

function syncRealtimeWithServer(uid, cfg, actionName, callback) {
    const cleanUid = uid || Env.read(USER_ID_CACHE_KEY) || "";
    if (cleanUid && !cleanUid.includes("RCAnonymousID")) {
        upsertUserRecord(cleanUid, {
            lockDate: cfg.lockDate,
            productId: cfg.productId,
            aiQuota: cfg.aiFilterQuota
        });
    }

    const remoteEndpoint = typeof ADMIN_API_URL !== "undefined" ? ADMIN_API_URL : "";
    if (!remoteEndpoint || remoteEndpoint.includes("your-domain.com") || !cleanUid || cleanUid.includes("RCAnonymousID")) {
        const st = evaluateRealtimeState(cleanUid);
        triggerInAppLocketBlockAlert(cleanUid, st.reason, st.blocked, false);
        if (callback) callback(st);
        return;
    }

    const syncUrl = remoteEndpoint + (remoteEndpoint.includes("?") ? "&" : "?") + "api=realtime_sync&t=" + Date.now();
    const db = getLocalStore();
    const userRec = db.users[cleanUid] || {};

    Env.httpPost({
        url: syncUrl,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, no-cache"
        },
        body: JSON.stringify({
            uid: cleanUid,
            username: userRec.username || Env.read(USERNAME_CACHE_KEY) || cleanUid.slice(0, 10),
            full_name: userRec.full_name || "",
            avatar: userRec.avatar || "",
            action: actionName || "sync",
            status: userRec.status || "approved",
            note: userRec.note || "",
            lockDate: cfg.lockDate,
            productId: cfg.productId,
            aiFilterQuota: cfg.aiFilterQuota,
            dohServerUrl: cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl,
            popupTitle: cfg.popupTitle,
            popupSubtitle: cfg.popupSubtitle,
            ts: Date.now()
        }),
        timeout: 3
    }, (err, resp, body) => {
        if (!err && body) {
            try {
                const parsed = JSON.parse(body);
                if (parsed && typeof parsed === "object" && parsed.ok) {
                    const localDb = getLocalStore();
                    if (parsed.users && typeof parsed.users === "object") {
                        for (const [k, v] of Object.entries(parsed.users)) {
                            localDb.users[k] = { ...(localDb.users[k] || {}), ...v };
                        }
                    }
                    if (parsed.user && cleanUid) {
                        localDb.users[cleanUid] = {
                            ...(localDb.users[cleanUid] || {}),
                            ...parsed.user
                        };
                    }
                    saveLocalStore(localDb);

                    const rState = {
                        uid: cleanUid,
                        approved: true,
                        blocked: !!parsed.blocked || parsed.status === "blocked",
                        status: parsed.status || "approved",
                        force_lock_date: parsed.force_lock_date || null,
                        ai_quota: parsed.ai_quota !== undefined ? sanitizeQuotaNumber(parsed.ai_quota, cfg.aiFilterQuota) : null,
                        reason: parsed.reason || ""
                    };
                    Env.write(JSON.stringify(rState), REMOTE_AUTH_CACHE_KEY);
                }
            } catch (e) {}
        }

        const currentSt = evaluateRealtimeState(cleanUid);
        triggerInAppLocketBlockAlert(cleanUid, currentSt.reason, currentSt.blocked, false);
        if (callback) callback(currentSt);
    });
}

function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    try {
        const raw =
            Env.read(STORE_KEY) ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V5") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V4");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    cfg.aiFilterQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
    cfg.aiFilterDailyLimit = sanitizeQuotaNumber(cfg.aiFilterDailyLimit || cfg.aiFilterQuota, cfg.aiFilterQuota);
    cfg.aiFilterUsed = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);
    cfg.friendsBadgeDefault = cfg.friendsBadgeDefault !== false;

    if (!cfg.dohServerUrl) cfg.dohServerUrl = INTEGRATED_NET_ENGINE.dohServerUrl;
    if (!cfg.dohPrimaryIp) cfg.dohPrimaryIp = INTEGRATED_NET_ENGINE.serverAddresses[0];
    if (!cfg.dohSecondaryIp) cfg.dohSecondaryIp = INTEGRATED_NET_ENGINE.serverAddresses[1];

    if (!cfg.popupBadge) cfg.popupBadge = DEFAULT_CONFIG.popupBadge;
    if (!cfg.popupHeader) cfg.popupHeader = DEFAULT_CONFIG.popupHeader;
    if (!cfg.popupTitle) cfg.popupTitle = DEFAULT_CONFIG.popupTitle;
    if (!cfg.popupSubtitle) cfg.popupSubtitle = DEFAULT_CONFIG.popupSubtitle;
    if (!cfg.popupImage) cfg.popupImage = DEFAULT_CONFIG.popupImage;
    if (!cfg.popupBtnText) cfg.popupBtnText = DEFAULT_CONFIG.popupBtnText;

    const uid = Env.read(USER_ID_CACHE_KEY) || "";
    const rt = evaluateRealtimeState(uid);
    if (rt && rt.force_lock_date) {
        cfg.lockDate = rt.force_lock_date.slice(0, 10);
    }
    if (rt && rt.ai_quota !== null && rt.ai_quota !== undefined) {
        cfg.aiFilterQuota = sanitizeQuotaNumber(rt.ai_quota, cfg.aiFilterQuota);
        cfg.aiFilterDailyLimit = cfg.aiFilterQuota;
    }

    cfg.alwaysForceBadge = true;
    cfg.unlockAllCameraEffects = true;
    cfg.interceptCloudFunctions = true;
    cfg.isBlockedByAdmin = !!rt.blocked;
    cfg.approvalStatus = rt.status || "approved";
    cfg.blockReason = rt.reason || "Tài khoản đang bị Admin chặn tạm thời (Vẫn giữ huy hiệu Locket Gold).";
    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T23:59:59Z");
    return cfg;
}

function saveConfig(newCfg) {
    Env.write(JSON.stringify(newCfg), STORE_KEY);
    Env.write(toIsoDate(newCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z"), "locket_custom_date_lock");
}

function extractRequestedRcUserId(url) {
    if (!url) return null;
    const m = url.match(/\/subscribers\/([^/?#]+)/i);
    if (m && m[1]) {
        try {
            return decodeURIComponent(m[1]);
        } catch (e) {
            return m[1];
        }
    }
    return null;
}

function extractAndCacheCredentials(url, headers, bodyStr) {
    let foundUid = null;
    let foundUsername = null;
    let foundAvatar = null;

    const rcUrlUser = extractRequestedRcUserId(url);
    if (rcUrlUser && !rcUrlUser.includes("RCAnonymousID")) {
        foundUid = rcUrlUser;
        Env.write(foundUid, USER_ID_CACHE_KEY);
    }

    if (typeof bodyStr === "string" && bodyStr.includes("{")) {
        try {
            const parsed = JSON.parse(bodyStr);
            const uData = (parsed.result && parsed.result.data) || parsed.data || parsed;
            const candidate =
                (parsed.subscriber && parsed.subscriber.original_app_user_id) ||
                uData.uid ||
                uData.user_uid ||
                uData.user_id ||
                parsed.app_user_id ||
                parsed.localId;
            if (candidate && typeof candidate === "string" && !candidate.includes("RCAnonymousID")) {
                if (!url || (!url.includes("fetchUser") && !url.includes("getUser") && !url.includes("friends"))) {
                    foundUid = candidate;
                    Env.write(foundUid, USER_ID_CACHE_KEY);
                }
            }
            if (uData && typeof uData === "object" && !url.includes("fetchUser") && !url.includes("getUser")) {
                if (uData.username && typeof uData.username === "string") {
                    foundUsername = uData.username;
                    Env.write(foundUsername, USERNAME_CACHE_KEY);
                }
                if (uData.profile_picture_url && typeof uData.profile_picture_url === "string") {
                    foundAvatar = uData.profile_picture_url;
                    Env.write(foundAvatar, AVATAR_CACHE_KEY);
                }
            }
        } catch (e) {}
    }

    if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            const val = headers[k];
            if (!val) continue;
            if (low === "authorization") {
                if (/^Bearer\s+eyJ/i.test(val)) {
                    Env.write(val, AUTH_TOKEN_CACHE_KEY);
                    if (!foundUid) {
                        try {
                            const parts = val.replace(/^Bearer\s+/i, "").split(".");
                            if (parts.length >= 2 && typeof atob === "function") {
                                const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
                                const jsonPayload = JSON.parse(atob(b64));
                                const jwtUid = jsonPayload.user_id || jsonPayload.sub;
                                if (jwtUid && typeof jwtUid === "string") {
                                    foundUid = jwtUid;
                                    Env.write(foundUid, USER_ID_CACHE_KEY);
                                }
                            }
                        } catch (e) {}
                    }
                } else if (/^appl_|^goog_|^rcb_/i.test(val.replace(/^Bearer\s+/i, ""))) {
                    Env.write(val, RC_API_KEY_CACHE_KEY);
                }
            } else if (low === "x-revenuecat-user-id" || low === "x-app-user-id") {
                if (val && !val.includes("RCAnonymousID")) {
                    foundUid = val;
                    Env.write(foundUid, USER_ID_CACHE_KEY);
                }
            }
        }
    }

    const finalUid = foundUid || Env.read(USER_ID_CACHE_KEY) || rcUrlUser || "$RCAnonymousID:locket_hard_lock";
    if (finalUid && !finalUid.includes("RCAnonymousID")) {
        upsertUserRecord(finalUid, {
            username: foundUsername,
            avatar: foundAvatar
        });
    }
    return finalUid;
}

function parseQuery(url) {
    const q = {};
    const idx = url.indexOf("?");
    if (idx === -1) return q;
    const pairs = url.slice(idx + 1).split("&");
    for (const p of pairs) {
        if (!p) continue;
        const eq = p.indexOf("=");
        if (eq === -1) {
            try { q[decodeURIComponent(p)] = ""; } catch (e) { q[p] = ""; }
        } else {
            try {
                const k = decodeURIComponent(p.slice(0, eq));
                const v = decodeURIComponent(p.slice(eq + 1).replace(/\+/g, " "));
                q[k] = v;
            } catch (e) {}
        }
    }
    return q;
}

// ============================================================================
// 6. BỘ BƠM GÓI REVENUECAT, OFFERINGS PAYWALL V2 & FIREBASE REMOTE CONFIG
// ============================================================================
function buildSubscriberPayload(existingObj, cfg, resolvedUserId, requestedUrlUserId) {
    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        triggerInAppLocketBlockAlert(resolvedUserId, "", false, false);
        triggerInAppGoldWelcomeAlert(resolvedUserId, cfg, false);
    }

    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();

    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    obj.Attention = cfg.isBlockedByAdmin
        ? `LOCKET GOLD KEPT — ${cfg.blockReason}`
        : `${cfg.popupBadge} | ${cfg.popupHeader} | ${cfg.popupTitle}`;
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    const uid = requestedUrlUserId || obj.subscriber.original_app_user_id || resolvedUserId || "$RCAnonymousID:locket_hard_lock";
    obj.subscriber.original_app_user_id = uid;
    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.last_seen = nowIso;
    obj.subscriber.original_application_version = cfg.appVersion || "1.0";
    obj.subscriber.original_purchase_date = LOCK_DATE;
    obj.subscriber.management_url = "https://locket.gold/setdate?gold_popup=1";
    obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};
    obj.subscriber.non_subscriptions = obj.subscriber.non_subscriptions || {};

    if (!obj.subscriber.subscriptions || typeof obj.subscriber.subscriptions !== "object") {
        obj.subscriber.subscriptions = {};
    }
    if (!obj.subscriber.entitlements || typeof obj.subscriber.entitlements !== "object") {
        obj.subscriber.entitlements = {};
    }
    if (!obj.subscriber.subscriber_attributes || typeof obj.subscriber.subscriber_attributes !== "object") {
        obj.subscriber.subscriber_attributes = {};
    }

    const forcedAttributes = {
        "locket_gold_badge": "true",
        "badge": "locket_gold",
        "has_gold_badge": "true",
        "gold_badge_enabled": "true",
        "is_gold": "true",
        "membership_badge": "gold",
        "holiday_effects_unlocked": "true",
        "camera_effects_unlocked": "true",
        "lut_filters_unlocked": "true",
        "ai_looks_unlocked": "true",
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining": quotaStr,
        "ai_looks_remaining": quotaStr,
        "ai_generation_limit": quotaStr,
        "doh_dns_endpoint": cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl,
        "locket_ca_uuid": INTEGRATED_NET_ENGINE.caUUID,
        "gold_popup_header": cfg.popupHeader,
        "gold_popup_title": cfg.popupTitle,
        "gold_popup_subtitle": cfg.popupSubtitle,
        "admin_realtime_status": cfg.isBlockedByAdmin ? "blocked_keep_gold" : "active_gold"
    };

    for (const [attrKey, attrVal] of Object.entries(forcedAttributes)) {
        obj.subscriber.subscriber_attributes[attrKey] = {
            value: String(attrVal),
            updated_at_ms: nowMs
        };
    }

    const buildSubEntry = (pid) => ({
        auto_resume_date: null,
        display_name: pid,
        is_sandbox: false,
        ownership_type: cfg.ownershipType || "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://locket.gold/setdate?gold_popup=1",
        period_type: cfg.periodType || "normal",
        price: {
            amount: cfg.priceAmount || 399000,
            currency: cfg.priceCurrency || "VND"
        },
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: LOCK_DATE,
        purchase_date: LOCK_DATE,
        store: cfg.store || "app_store",
        store_transaction_id: cfg.storeTransactionId || "490001234567893"
    });

    const buildEntEntry = (pid) => ({
        grace_period_expires_date: null,
        purchase_date: LOCK_DATE,
        original_purchase_date: LOCK_DATE,
        product_identifier: pid,
        expires_date: EXPIRE_DATE,
        ownership_type: cfg.ownershipType || "PURCHASED",
        store: cfg.store || "app_store"
    });

    for (const existingPid of Object.keys(obj.subscriber.subscriptions)) {
        obj.subscriber.subscriptions[existingPid] = buildSubEntry(existingPid);
    }

    const allProductIds = [
        PRIMARY_PID,
        "locket_1600_1y",
        "locket_3600_1y",
        "locket_399_1m",
        "locket_199_1m",
        "gold",
        "locket_gold",
        "locket_gold_v2",
        "locket_gold_1y",
        "locket_gold_1m",
        "locket_gold_weekly",
        "locket_gold_lifetime",
        "locket_sub_1y",
        "locket_sub_1m",
        "locket_ai_looks_pack",
        "locket_ai_unlimited",
        "locket_holiday_effects"
    ];

    for (const pid of allProductIds) {
        obj.subscriber.subscriptions[pid] = buildSubEntry(pid);
    }

    for (const existingEnt of Object.keys(obj.subscriber.entitlements)) {
        obj.subscriber.entitlements[existingEnt] = buildEntEntry(PRIMARY_PID);
    }

    const allEntitlements = [
        "Gold", "gold", "pro", "Pro", "locket_gold", "LocketGold", "locket_gold_v2",
        "premium", "Premium", "plus", "Plus", "vip", "all_access", "unlimited",
        "ai_filters", "ai_looks", "ai_camera", "unlimited_ai", "camera_effects",
        "holiday_effects", "festive_effects", "seasonal_effects", "lut_filters", "filters", "effects"
    ];
    for (const entKey of allEntitlements) {
        obj.subscriber.entitlements[entKey] = buildEntEntry(PRIMARY_PID);
    }

    return obj;
}

function patchRevenueCatOfferings(obj, cfg) {
    if (!obj || typeof obj !== "object") return obj;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);
    const baseUrl = hasHttpImg ? cfg.popupImage.replace(/\/[^\/]+$/, "/") : "https://cdn2.locketcamera.com/";
    const imgFile = hasHttpImg ? cfg.popupImage.split("/").pop() : "gold_activated.png";

    const locData = {
        title: cfg.popupHeader || "Đã Kích Hoạt",
        subtitle: `${cfg.popupTitle || "Youtube @NightmarketServer"}\n${cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé"}`,
        call_to_action: cfg.popupBtnText || "Hoàn tất",
        offer_badge: cfg.popupBadge || "LOCKET GOLD",
        feature_1: cfg.popupTitle || "Youtube @NightmarketServer",
        feature_2: cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé"
    };

    if (Array.isArray(obj.offerings)) {
        for (const off of obj.offerings) {
            if (!off || typeof off !== "object") continue;
            off.metadata = {
                ...(off.metadata || {}),
                badge: cfg.popupBadge,
                header: cfg.popupHeader,
                title: cfg.popupTitle,
                subtitle: cfg.popupSubtitle,
                image_url: hasHttpImg ? cfg.popupImage : "",
                button_text: cfg.popupBtnText || "Hoàn tất",
                is_gold_activated: true
            };
            off.paywall = {
                template_name: "2",
                asset_base_url: baseUrl,
                revision: 1,
                config: {
                    packages: ["$rc_annual"],
                    default_package: "$rc_annual",
                    images: { header: imgFile, background: imgFile, icon: imgFile },
                    colors: {
                        light: {
                            background: "#FBFBFD", text_1: "#1D1D1F", text_2: "#6E6E73", text_3: "#0071E3",
                            call_to_action_background: "#0071E3", call_to_action_foreground: "#FFFFFF",
                            accent_1: "#0071E3", accent_2: "#1D1D1F"
                        },
                        dark: {
                            background: "#1D1D1F", text_1: "#FBFBFD", text_2: "#86868B", text_3: "#0071E3",
                            call_to_action_background: "#0071E3", call_to_action_foreground: "#FFFFFF",
                            accent_1: "#0071E3", accent_2: "#86868B"
                        }
                    },
                    blurred_background_image: false,
                    display_restore_purchases: false
                },
                localized_strings: { vi: locData, vi_VN: locData, en: locData, en_US: locData }
            };
            if (Array.isArray(off.packages)) {
                for (const pkg of off.packages) {
                    if (pkg && !pkg.platform_product_identifier) {
                        pkg.platform_product_identifier = PRIMARY_PID;
                    }
                }
            }
        }
    }
    return obj;
}

function injectFirebaseRemoteConfig(obj, cfg) {
    if (!obj || typeof obj !== "object") obj = {};
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    if (!obj.entries || typeof obj.entries !== "object") {
        obj.entries = {};
    }

    const popupPayloadJson = JSON.stringify({
        enabled: true,
        badge: cfg.popupBadge,
        header: cfg.popupHeader,
        title: cfg.popupTitle,
        subtitle: cfg.popupSubtitle,
        image_url: cfg.popupImage,
        button_text: cfg.popupBtnText || "Hoàn tất"
    });

    const forcedEntries = {
        "locket_gold_enabled": "true",
        "is_gold_user": "true",
        "bypass_gold_paywall": "true",
        "disable_gold_paywall": "true",
        "show_gold_paywall": "false",
        "enable_gold_paywall": "false",
        "force_gold_for_effects": "false",
        "require_gold_for_effects": "false",
        "require_gold_for_holiday_effects": "false",
        "require_gold_for_filters": "false",
        "require_gold_for_lut_filters": "false",
        "require_gold_for_ai_looks": "false",
        "require_gold_for_camera_effects": "false",
        "lock_holiday_effects": "false",
        "lock_camera_effects": "false",
        "lock_lut_filters": "false",
        "lock_ai_filters": "false",
        "blur_locked_effects": "false",
        "blur_gold_effects": "false",
        "effect_preview_blur_enabled": "false",
        "holiday_effects_gold_only": "false",
        "camera_effects_gold_only": "false",
        "filters_gold_only": "false",
        "lut_filters_gold_only": "false",
        "ai_looks_gold_only": "false",
        "all_effects_free": "true",
        "free_holiday_effects": "true",
        "free_camera_effects": "true",
        "free_lut_filters": "true",
        "unlock_all_effects": "true",
        "unlock_all_filters": "true",
        "holiday_effects_enabled": "true",
        "seasonal_effects_enabled": "true",
        "festive_effects_enabled": "true",
        "style_effects_enabled": "true",
        "funny_effects_enabled": "true",
        "cute_effects_enabled": "true",
        "lut_filter_enabled": "true",
        "enable_lut_filters": "true",
        "camera_effects_enabled": "true",
        "ai_filter_enabled": "true",
        "ai_filters_enabled": "true",
        "enable_ai_filters": "true",
        "enable_ai_looks": "true",
        "ai_looks_enabled": "true",
        "create_look_enabled": "true",
        "ai_filter_free_uses": quotaStr,
        "ai_filter_daily_limit": quotaStr,
        "ai_filter_weekly_limit": quotaStr,
        "ai_filter_monthly_limit": quotaStr,
        "ai_filter_max_uses": quotaStr,
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining_uses": quotaStr,
        "ai_looks_free_uses": quotaStr,
        "ai_looks_daily_limit": quotaStr,
        "ai_looks_max_uses": quotaStr,
        "ai_looks_quota": quotaStr,
        "ai_generation_limit": quotaStr,
        "ai_generation_daily_limit": quotaStr,
        "ai_generation_quota": quotaStr,
        "ai_prompt_max_uses": quotaStr,
        "custom_look_daily_limit": quotaStr,
        "custom_look_max_uses": quotaStr,
        "max_ai_generations_per_day": quotaStr,
        "max_ai_filters_per_day": quotaStr,
        "gold_ai_filter_limit": quotaStr,
        "free_ai_filter_limit": quotaStr,
        "ai_filter_cooldown_seconds": "0",
        "ai_looks_cooldown_seconds": "0",
        "locket_doh_endpoint": cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl,
        "gold_activated_modal": popupPayloadJson,
        "gold_welcome_modal": popupPayloadJson,
        "gold_celebration_title": cfg.popupTitle,
        "gold_celebration_subtitle": cfg.popupSubtitle,
        "gold_celebration_header": cfg.popupHeader,
        "gold_celebration_image": cfg.popupImage
    };

    for (const existingKey of Object.keys(obj.entries)) {
        const low = existingKey.toLowerCase();
        const rawVal = obj.entries[existingKey];

        if (typeof rawVal === "string" && (rawVal.trim().startsWith("{") || rawVal.trim().startsWith("["))) {
            try {
                let parsedEntry = JSON.parse(rawVal);
                parsedEntry = deepForceBadgeAndAiQuotaInObject(parsedEntry, cfg, 0);
                obj.entries[existingKey] = JSON.stringify(parsedEntry);
                continue;
            } catch (e) {}
        }

        if (low.includes("ai") || low.includes("filter") || low.includes("look") || low.includes("effect") || low.includes("lut") || low.includes("holiday") || low.includes("seasonal") || low.includes("festive")) {
            if (low.includes("limit") || low.includes("quota") || low.includes("max") || low.includes("count") || low.includes("remaining") || low.includes("uses") || low.includes("credits")) {
                obj.entries[existingKey] = quotaStr;
            } else if (low.includes("gold_only") || low.includes("require_gold") || low.includes("requires_gold") || low.includes("is_locked") || low.includes("locked") || low.includes("paywall") || low.includes("blur") || low.includes("premium_only") || low.includes("is_gold_effect")) {
                obj.entries[existingKey] = "false";
            } else if (low.includes("enable") || low.includes("allow") || low.includes("active") || low.includes("show") || low.includes("free") || low.includes("unlock")) {
                obj.entries[existingKey] = "true";
            } else if (low.includes("disable") || low.includes("block") || low.includes("cooldown")) {
                obj.entries[existingKey] = low.includes("cooldown") ? "0" : "false";
            }
        }
    }

    for (const [k, v] of Object.entries(forcedEntries)) {
        if (!(k in obj.entries) || typeof obj.entries[k] !== "string" || (!obj.entries[k].startsWith("{") && !obj.entries[k].startsWith("["))) {
            obj.entries[k] = v;
        }
    }

    obj.state = "UPDATE";
    return obj;
}

function deepForceBadgeAndAiQuotaInObject(node, cfg, depth = 0) {
    if (!node || typeof node !== "object" || depth > 12) return node;

    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const usedNum = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";

    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
            deepForceBadgeAndAiQuotaInObject(node[i], cfg, depth + 1);
        }
        return node;
    }

    const isEffectOrFilterItem = (
        "effect_id" in node || "effectId" in node || "filter_id" in node || "filterId" in node ||
        "look_id" in node || "lookId" in node || "lens_id" in node || "lut_url" in node ||
        "lutUrl" in node || "overlay_url" in node || "shader_url" in node || "is_gold_only" in node ||
        "isGoldOnly" in node || "requires_gold" in node || "requiresGold" in node ||
        "gold_only" in node || "goldOnly" in node ||
        ("id" in node && !("uid" in node) && !("username" in node) && (
            "category" in node || "icon_url" in node || "thumbnail_url" in node ||
            "preview_url" in node || "asset_url" in node || "filter_type" in node || "effect_type" in node
        ))
    );

    const hasUserShape = !isEffectOrFilterItem && (
        "locket_gold_badge" in node ||
        ("uid" in node && ("username" in node || "first_name" in node || "last_name" in node || "profile_picture_url" in node || "badge" in node))
    );

    let isFriendWithBadgeOff = false;

    if (hasUserShape) {
        const nodeUid = String(node.uid || node.user_uid || "");
        const isFriend = Boolean(nodeUid && (!selfUid || nodeUid !== selfUid));
        let shouldShowBadge = true;

        if (isFriend) {
            const fullName = [node.first_name, node.last_name].filter(Boolean).join(" ").trim() || node.username || nodeUid.slice(0, 10);
            shouldShowBadge = resolveFriendBadgeState(nodeUid, {
                username: node.username || fullName,
                full_name: fullName,
                avatar: node.profile_picture_url || ""
            }, cfg);
        }

        if (shouldShowBadge) {
            node.badge = "locket_gold";
            node.locket_gold_badge = true;
            node.has_gold_badge = true;
            node.gold_badge = true;
            node.is_gold = true;
            node.isGold = true;
            node.has_gold = true;
            node.hasGold = true;
            node.gold_subscription = true;
            node.subscription_status = "active";
            node.original_purchase_date = cfg.lockIso;
            node.expires_date = cfg.expireIso;
            node.ai_filter_quota = quotaNum;
            node.ai_filter_remaining = quotaNum;
            node.ai_looks_remaining = quotaNum;
            node.remaining_ai_uses = quotaNum;
            node.can_use_ai_filter = true;
            node.can_use_holiday_effects = true;
        } else {
            isFriendWithBadgeOff = true;
            node.badge = null;
            node.locket_gold_badge = false;
            node.has_gold_badge = false;
            node.gold_badge = false;
            node.is_gold = false;
            node.isGold = false;
            node.has_gold = false;
            node.hasGold = false;
            node.gold_subscription = false;
        }
    }

    if (isEffectOrFilterItem) {
        node.is_gold = false; node.isGold = false; node.gold = false;
        node.is_gold_only = false; node.isGoldOnly = false; node.gold_only = false; node.goldOnly = false;
        node.requires_gold = false; node.requiresGold = false; node.require_gold = false; node.requireGold = false;
        node.is_locked = false; node.isLocked = false; node.locked = false;
        node.is_premium = false; node.isPremium = false; node.premium_only = false; node.premiumOnly = false;
        node.is_free = true; node.isFree = true; node.free = true;
        node.unlocked = true; node.is_unlocked = true; node.isUnlocked = true;
        node.can_use = true; node.canUse = true; node.has_access = true; node.hasAccess = true;
        node.blur = false; node.is_blurred = false; node.isBlurred = false;
        node.blur_preview = false; node.blurPreview = false;
        node.show_paywall = false; node.showPaywall = false; node.paywall = false;
        if ("tier" in node) node.tier = "free";
        if ("access_level" in node) node.access_level = "free";
        if ("accessLevel" in node) node.accessLevel = "free";
        if ("entitlement" in node) node.entitlement = null;
        if ("required_entitlement" in node) node.required_entitlement = null;
        if ("requiredEntitlement" in node) node.requiredEntitlement = null;
    }

    const hasQuotaOrAccessShape = !isEffectOrFilterItem && (
        "remaining" in node || "remaining_uses" in node || "remainingUses" in node ||
        "remaining_count" in node || "remainingCount" in node || "quota" in node ||
        "daily_limit" in node || "dailyLimit" in node || "max_uses" in node || "maxUses" in node ||
        "credits" in node || "ai_credits" in node || "filter_quota" in node ||
        "can_generate" in node || "canGenerate" in node || "is_allowed" in node || "isAllowed" in node
    );

    if (hasQuotaOrAccessShape) {
        node.remaining = quotaNum; node.remaining_uses = quotaNum; node.remainingUses = quotaNum;
        node.remaining_count = quotaNum; node.remainingCount = quotaNum; node.quota = quotaNum;
        node.daily_limit = quotaNum; node.dailyLimit = quotaNum; node.max_uses = quotaNum; node.maxUses = quotaNum;
        node.limit = quotaNum; node.total_limit = quotaNum; node.credits = quotaNum; node.ai_credits = quotaNum;
        node.used = usedNum; node.used_count = usedNum; node.usedCount = usedNum; node.uses_today = usedNum;
        node.is_unlimited = true; node.unlimited = true; node.can_generate = true; node.canGenerate = true;
        node.can_use = true; node.canUse = true; node.allowed = true; node.is_allowed = true; node.isAllowed = true;
        node.has_access = true; node.hasAccess = true; node.is_locked = false; node.isLocked = false;
        node.locked = false; node.requires_gold = false; node.requiresGold = false;
        node.paywall = false; node.show_paywall = false; node.blur = false;
    }

    if (node.fields && typeof node.fields === "object") {
        if (node.fields.uid || node.fields.username || node.fields.badge || node.fields.profile_picture_url) {
            const fUid = (node.fields.uid && node.fields.uid.stringValue) || "";
            const fUsername = (node.fields.username && node.fields.username.stringValue) || "";
            const fFirst = (node.fields.first_name && node.fields.first_name.stringValue) || "";
            const fLast = (node.fields.last_name && node.fields.last_name.stringValue) || "";
            const fAvatar = (node.fields.profile_picture_url && node.fields.profile_picture_url.stringValue) || "";
            const isFriendDoc = Boolean(fUid && (!selfUid || fUid !== selfUid));
            let docBadgeOn = true;

            if (isFriendDoc) {
                const fullDocName = [fFirst, fLast].filter(Boolean).join(" ").trim() || fUsername || fUid.slice(0, 10);
                docBadgeOn = resolveFriendBadgeState(fUid, {
                    username: fUsername || fullDocName,
                    full_name: fullDocName,
                    avatar: fAvatar
                }, cfg);
            }

            if (docBadgeOn) {
                node.fields.badge = { stringValue: "locket_gold" };
                node.fields.locket_gold_badge = { booleanValue: true };
                node.fields.has_gold_badge = { booleanValue: true };
                node.fields.is_gold = { booleanValue: true };
                node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
                node.fields.ai_filter_quota = { integerValue: String(quotaNum) };
                node.fields.ai_filter_remaining = { integerValue: String(quotaNum) };
                node.fields.ai_looks_remaining = { integerValue: String(quotaNum) };
                node.fields.remaining_ai_uses = { integerValue: String(quotaNum) };
            } else {
                node.fields.badge = { nullValue: null };
                node.fields.locket_gold_badge = { booleanValue: false };
                node.fields.has_gold_badge = { booleanValue: false };
                node.fields.is_gold = { booleanValue: false };
            }
        }
        for (const fk of Object.keys(node.fields)) {
            const flow = fk.toLowerCase();
            if (flow.includes("remaining") || flow.includes("quota") || flow.includes("limit") || flow.includes("credit")) {
                node.fields[fk] = { integerValue: String(quotaNum) };
            } else if (flow === "used" || flow === "used_count" || flow === "uses_today") {
                node.fields[fk] = { integerValue: String(usedNum) };
            } else if (flow.includes("gold_only") || flow.includes("requires_gold") || flow.includes("locked") || flow.includes("blur") || flow.includes("paywall")) {
                node.fields[fk] = { booleanValue: false };
            } else if (flow === "unlocked" || flow === "can_use" || flow === "is_free") {
                node.fields[fk] = { booleanValue: true };
            }
        }
    }

    for (const k of Object.keys(node)) {
        const low = k.toLowerCase();
        const val = node[k];

        if (hasUserShape && !isFriendWithBadgeOff && k === "badge" && (val === null || val === "" || val === false || val === "none")) {
            node[k] = "locket_gold";
        } else if (hasUserShape && !isFriendWithBadgeOff && (k === "locket_gold_badge" || k === "has_gold_badge" || k === "show_gold_badge" || k === "is_gold" || k === "isGold" || k === "has_gold" || k === "hasGold") && val === false) {
            node[k] = true;
        } else if (
            typeof val === "boolean" &&
            (
                low === "is_gold_only" || low === "isgoldonly" || low === "gold_only" || low === "goldonly" ||
                low === "requires_gold" || low === "requiresgold" || low === "require_gold" || low === "requiregold" ||
                low === "is_locked" || low === "islocked" || low === "locked" || low === "is_premium" ||
                low === "ispremium" || low === "premium_only" || low === "premiumonly" ||
                low === "requires_subscription" || low === "requiressubscription" || low === "limit_reached" ||
                low === "limitreached" || low === "quota_exceeded" || low === "quotaexceeded" ||
                low === "blur" || low === "is_blurred" || low === "isblurred" || low === "blur_preview" ||
                low === "blurpreview" || low === "should_blur" || low === "shouldblur" ||
                low === "show_paywall" || low === "showpaywall" || low === "paywall" ||
                low === "is_paywalled" || low === "ispaywalled"
            )
        ) {
            node[k] = false;
        } else if (
            typeof val === "boolean" &&
            (
                low === "can_generate" || low === "cangenerate" || low === "can_use_ai" || low === "canuseai" ||
                low === "can_use" || low === "canuse" || low === "ai_enabled" || low === "aienabled" ||
                low === "ai_filter_enabled" || low === "is_unlocked" || low === "isunlocked" ||
                low === "unlocked" || low === "is_free" || low === "isfree" || low === "has_access" ||
                low === "hasaccess" || low === "allowed" || low === "is_allowed" || low === "isallowed" ||
                low === "holiday_effects_enabled" || low === "camera_effects_enabled"
            )
        ) {
            node[k] = true;
        } else if (
            typeof val === "string" &&
            (low === "tier" || low === "access_level" || low === "accesslevel" || low === "lock_type" || low === "locktype" || low === "paywall_type") &&
            (val.toLowerCase().includes("gold") || val.toLowerCase().includes("pro") || val.toLowerCase().includes("premium") || val.toLowerCase().includes("lock"))
        ) {
            node[k] = "free";
        } else if (
            typeof val === "number" &&
            (
                low === "remaining" || low === "remaining_uses" || low === "remaininguses" ||
                low === "remaining_count" || low === "remainingcount" || low === "remaining_generations" ||
                low === "remaininggenerations" || low === "ai_filter_quota" || low === "ai_filter_remaining" ||
                low === "ai_looks_remaining" || low === "ai_credits" || low === "filter_credits" ||
                low === "free_uses_remaining" || low === "daily_remaining" || low === "max_generations" ||
                low === "generation_limit" || low === "free_uses" || low === "freeuses"
            )
        ) {
            node[k] = quotaNum;
        } else if (
            typeof val === "number" &&
            (low === "used_count" || low === "usedcount" || low === "uses_today" || low === "usestoday" || low === "generations_used" || low === "ai_uses_count")
        ) {
            node[k] = usedNum;
        } else if (typeof val === "object" && val !== null) {
            deepForceBadgeAndAiQuotaInObject(val, cfg, depth + 1);
        }
    }

    if (depth === 0) {
        flushFriendsBadgeMapIfNeeded();
    }
    return node;
}

function fireNativeAppNotification(cfg, forceImmediate = false) {
    if (cfg.isBlockedByAdmin) return;
    if (!forceImmediate && cfg.pushNotifyOnActivate === false) return;

    const now = Date.now();
    const lastPush = parseInt(Env.read(LAST_GOLD_PUSH_TS_KEY) || "0", 10);
    const cooldownMs = Math.max(5, parseInt(cfg.pushCooldownSeconds || 12, 10)) * 1000;

    if (!forceImmediate && !isNaN(lastPush) && (now - lastPush <= cooldownMs)) {
        return;
    }

    Env.write(String(now), LAST_GOLD_PUSH_TS_KEY);

    const title = `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã Kích Hoạt"}`;
    const sub = cfg.popupTitle || "Youtube @NightmarketServer";
    const body = cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);

    try {
        if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
            if (hasHttpImg) {
                $notification.post(title, sub, body, {
                    "media-url": cfg.popupImage,
                    "open-url": "https://locket.gold/setdate?gold_popup=1"
                });
            } else {
                $notification.post(title, sub, body);
            }
            return;
        }
    } catch (e) {}

    Env.notify(title, sub, body);
}
// === HẾT PHẦN 1/3 — GÕ 2 ĐỂ LẤY TIẾP PHẦN 2/3 ===
// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 2/3 — DÁN NỐI TIẾP VÀO DƯỚI PHẦN 1/3)
// Thiết kế: Apple.com Scroll Animation Clone (750-900vh) + Full Bento Console
// ============================================================================

function renderBentoWebPanel(cfg, statusMsg, openAdminDrawer = false, forceShowGoldModal = false) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const currentAiQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const dohStatus = getCachedDohStatus(cfg);

    const popupBadge = cfg.popupBadge || "LOCKET GOLD";
    const popupHeader = cfg.popupHeader || "Đã Kích Hoạt";
    const popupTitle = cfg.popupTitle || "Youtube @NightmarketServer";
    const popupSubtitle = cfg.popupSubtitle || "Nhớ Follow Kênh Ủng Hộ Mình Nhé";
    const popupImage = cfg.popupImage || THAY_IMAGE_PATH;
    const popupBtnText = cfg.popupBtnText || "Hoàn tất";
    const shouldShowPopup = forceShowPopupModal(forceShowGoldModal, cfg);

    function forceShowPopupModal(forceFlag, conf) {
        return Boolean(forceFlag || (conf.popupEnabled !== false && conf.popupAutoShow === true));
    }

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);

    // Danh sách bạn bè để Bật / Tắt huy hiệu Locket Gold từng người độc lập
    const friendsMap = getFriendsBadgeMap();
    const friendsList = Object.values(friendsMap).filter(f => f && f.uid && f.uid !== cachedUid);
    const activeFriendsBadgeCount = friendsList.filter(f => f.badge_enabled !== false).length;

    // SVG Noise Data-URI cho lớp phủ hạt mịn (Grain Texture opacity 0.015) chuẩn Apple
    const grainSvgDataUri = "data:image/svg+xml;utf8," + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(#n)" opacity="1"/></svg>`
    );

    let friendsBadgeListHtml = "";
    if (friendsList.length === 0) {
        friendsBadgeListHtml = `
        <div class="empty-state-box">
            Chưa ghi nhận bạn bè nào trong bộ nhớ đệm. Hãy mở ứng dụng Locket và lướt danh sách bạn bè 1 lần (hoặc thêm thủ công bằng khung bên trên) để điều khiển huy hiệu từng người.
        </div>`;
    } else {
        for (const f of friendsList) {
            const isBadgeOn = f.badge_enabled !== false;
            const fUser = f.username || (f.uid ? f.uid.slice(0, 10) : "friend");
            const fFull = f.full_name || fUser;
            const fAvatar = f.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(fFull)}&background=1d1d1f&color=fff`;

            friendsBadgeListHtml += `
            <div class="dir-row friend-badge-item" data-friend-search="${escapeHtml((fUser + " " + fFull + " " + f.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(fAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(fFull)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar" loading="lazy">
                    <div class="dir-meta">
                        <div class="dir-title-line">
                            <span class="dir-fullname">${escapeHtml(fFull)}</span>
                            <span class="dir-handle">@${escapeHtml(fUser)}</span>
                            <span id="friendBadgePill_${escapeHtml(f.uid)}" class="apple-pill ${isBadgeOn ? "pill-gold" : "pill-rose"}">
                                ${isBadgeOn ? "HIỆN HUY HIỆU GOLD" : "ĐÃ TẮT HUY HIỆU"}
                            </span>
                        </div>
                        <div class="dir-mono">
                            UID: ${escapeHtml(f.uid)} · Cập nhật: ${escapeHtml(f.updated_at || "Mới ghi nhận")}
                        </div>
                    </div>
                </div>
                <div class="dir-actions">
                    <button type="button" id="friendToggleBtn_${escapeHtml(f.uid)}" onclick="toggleSingleFriendBadge('${escapeHtml(f.uid)}', ${isBadgeOn ? "false" : "true"})" class="apple-pill-btn ${isBadgeOn ? "btn-amber-soft" : "btn-emerald-soft"}">
                        ${isBadgeOn ? "Tắt huy hiệu" : "Bật huy hiệu"}
                    </button>
                    <a href="/setdate?friend_action=delete&friend_uid=${encodeURIComponent(f.uid)}#friendsBadgeSection" class="apple-pill-btn btn-rose-soft">Xoá</a>
                </div>
            </div>`;
        }
    }

    let goldDirectoryHtml = "";
    if (goldUsersList.length === 0) {
        goldDirectoryHtml = `
        <div class="empty-state-box">
            Chưa có tài khoản nào trong danh sách đã kích hoạt. Mở Locket hoặc nhấn nút Kích hoạt để ghi nhận tự động.
        </div>`;
    } else {
        for (const u of goldUsersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const fName = u.full_name || uName;
            const uAvatar = u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff`;
            const lockD = u.force_lock_date || u.lock_date || cfg.lockDate;
            const userAiQuota = sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);

            goldDirectoryHtml += `
            <div class="dir-row" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar" loading="lazy">
                    <div class="dir-meta">
                        <div class="dir-title-line">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">@${escapeHtml(uName)}</span>
                            <span class="apple-pill pill-gold">LOCKET GOLD</span>
                            <span class="apple-pill pill-blue">AI QUOTA: ${escapeHtml(userAiQuota.toLocaleString("vi-VN"))}</span>
                            ${isBlk ? `<span class="apple-pill pill-rose">TẠM CHẶN (GIỮ GOLD)</span>` : `<span class="apple-pill pill-emerald">HOẠT ĐỘNG 24/7</span>`}
                        </div>
                        <div class="dir-mono">
                            UID: ${escapeHtml(u.uid)} · Mốc đăng ký: ${escapeHtml(lockD)} · Hạn mức AI: ${escapeHtml(String(userAiQuota))}
                        </div>
                    </div>
                </div>
                <div class="dir-actions">
                    <span class="dir-sku-tag">${escapeHtml(u.product_id || cfg.productId || "locket_1600_1y")}</span>
                </div>
            </div>`;
        }
    }

    let adminTableHtml = "";
    if (usersList.length === 0) {
        adminTableHtml = `<div class="empty-state-box">Chưa có người dùng nào được ghi nhận trong hệ thống.</div>`;
    } else {
        for (const u of usersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const uAiQuota = sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);
            adminTableHtml += `
            <div class="dir-row">
                <div class="dir-meta">
                    <div class="dir-title-line">
                        <span class="dir-fullname">@${escapeHtml(uName)}</span>
                        <span class="dir-mono" style="margin:0;">UID: ${escapeHtml(u.uid)}</span>
                        <span class="apple-pill pill-gold">GOLD 24/7</span>
                        <span class="apple-pill pill-blue">AI: ${escapeHtml(String(uAiQuota))}</span>
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-emerald"}">
                            ${isBlk ? "Đang bị chặn" : "Đang hoạt động"}
                        </span>
                    </div>
                    <div class="dir-mono">
                        Mốc đăng ký: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")} · Lượt AI: ${escapeHtml(String(uAiQuota))} · Ghi chú: ${escapeHtml(u.note || "Đã kích hoạt Gold")}
                    </div>
                </div>
                <div class="dir-actions">
                    <a href="/setdate?admin_drawer=1&admin_action=push_user_gold&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-dark-soft">Bắn Push Gold</a>
                    <a href="/setdate?admin_drawer=1&admin_action=set_ai_quota&target_uid=${encodeURIComponent(u.uid)}&target_ai_quota=999999" class="apple-pill-btn btn-blue-soft">Set 999.999 AI</a>
                    ${isBlk ? `
                        <a href="/setdate?admin_drawer=1&admin_action=unblock&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-emerald-soft">Gỡ chặn</a>
                    ` : `
                        <a href="/setdate?admin_drawer=1&admin_action=block&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-amber-soft">Chặn (Giữ Gold)</a>
                    `}
                    <a href="/setdate?admin_drawer=1&admin_action=delete&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-rose-soft">Xoá</a>
                </div>
            </div>`;
        }
    }

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>${escapeHtml(THAY_PRODUCT_NAME)} — Apple.com Scrollytelling & Hệ Thống Quản Trị V6</title>
<style>
  :root {
    --apple-bg: #fbfbfd;
    --apple-text-primary: #1d1d1f;
    --apple-text-secondary: #6e6e73;
    --apple-blue: #0071e3;
    --apple-card-radius: 28px;
    --apple-pill-radius: 18px;
    --apple-shadow: 0 8px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
    --apple-ease: cubic-bezier(0.28, 0.11, 0.32, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    background-color: var(--apple-bg);
    color: var(--apple-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.015em;
    line-height: 1.47059;
    overflow-x: hidden;
  }

  /* Lớp phủ Grain Texture 0.015 bằng SVG Noise chuẩn Apple.com */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: 0.015;
    background-image: url("${grainSvgDataUri}");
    background-repeat: repeat;
    background-size: 180px 180px;
  }

  /* Thanh Fixed Progress Bar 2px trên đỉnh */
  .apple-global-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: #1d1d1f;
    width: 0%;
    z-index: 9999;
    transform-origin: left center;
    will-change: transform, width;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  /* SECTION 0: NAV HEADER (height 44px, sticky top 0, blur 20px, bg rgba(251,251,253,0.8)) */
  .apple-sticky-nav {
    position: sticky;
    top: 0;
    height: 44px;
    width: 100%;
    z-index: 950;
    background: rgba(251, 251, 253, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(29, 29, 31, 0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 22px;
  }

  .apple-nav-container {
    width: 100%;
    max-width: 1020px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .apple-nav-left {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--apple-text-primary);
  }

  .apple-logo-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--apple-text-primary);
    display: inline-block;
    position: relative;
  }
  .apple-logo-dot::after {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 1px solid rgba(29, 29, 31, 0.22);
  }

  .apple-nav-center {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--apple-text-primary);
    white-space: nowrap;
  }

  .apple-nav-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .apple-nav-link {
    font-size: 12px;
    font-weight: 400;
    color: var(--apple-text-secondary);
    text-decoration: none;
    padding: 4px 10px;
    border-radius: var(--apple-pill-radius);
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
  .apple-nav-link:hover {
    color: var(--apple-text-primary);
  }

  .apple-buy-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--apple-blue);
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 13px;
    height: 26px;
    border-radius: var(--apple-pill-radius);
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
  }

  /* GPU Acceleration Rule cho mọi phần tử chuyển động theo cuộn */
  .gpu-scroll-layer {
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  /* Khung Sticky 100vh chuẩn cho các Section Scrollytelling */
  .scrolly-sticky-inner {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0 24px;
  }

  /* SECTION 1: HERO ZOOM (wrapper 200vh, inner sticky 100vh flex center column) */
  .sec-1-hero-wrapper {
    position: relative;
    width: 100%;
    height: 200vh;
  }

  .hero-kicker-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: var(--apple-pill-radius);
    background: rgba(29, 29, 31, 0.04);
    border: 1px solid rgba(29, 29, 31, 0.08);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--apple-text-secondary);
    margin-bottom: 22px;
  }

  .hero-title-80 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.04;
    color: var(--apple-text-primary);
    text-align: center;
    max-width: 980px;
    margin-bottom: 20px;
    transform-origin: center center;
  }

  .hero-slogan-28 {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.015em;
    line-height: 1.28;
    color: var(--apple-text-secondary);
    text-align: center;
    max-width: 680px;
  }

  /* Mouse Scroll Indicator tự thiết kế bằng Vector/CSS (không icon rác) */
  .scroll-mouse-indicator {
    position: absolute;
    bottom: 38px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .mouse-shell {
    width: 24px;
    height: 38px;
    border-radius: 12px;
    border: 1.8px solid rgba(29, 29, 31, 0.42);
    display: flex;
    justify-content: center;
    padding-top: 7px;
  }

  .mouse-wheel-dot {
    width: 3px;
    height: 7px;
    border-radius: 999px;
    background: var(--apple-text-primary);
    animation: appleWheelBounce 1.8s cubic-bezier(0.28, 0.11, 0.32, 1) infinite;
  }

  .scroll-caption-tiny {
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--apple-text-secondary);
  }

  @keyframes appleWheelBounce {
    0% { transform: translate3d(0, 0, 0); opacity: 1; }
    65% { transform: translate3d(0, 10px, 0); opacity: 0.15; }
    100% { transform: translate3d(0, 0, 0); opacity: 1; }
  }

  /* SECTION 2: PIN & SCRUB PRODUCT (wrapper 250vh, inner sticky 100vh position relative) */
  .sec-2-pin-wrapper {
    position: relative;
    width: 100%;
    height: 250vh;
  }

  .pin-stage-relative {
    position: relative;
    width: 100%;
    height: 100vh;
    max-width: 1320px;
    margin: 0 auto;
  }

  .pin-product-main {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 520px;
    max-width: 85vw;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    z-index: 2;
    pointer-events: none;
  }

  .pin-product-shadow-duplicate {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 520px;
    max-width: 85vw;
    height: auto;
    object-fit: contain;
    filter: blur(40px);
    z-index: 1;
    pointer-events: none;
  }

  .pin-canvas-360 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 560px;
    max-width: 88vw;
    height: auto;
    z-index: 3;
    pointer-events: none;
  }

  .usp-block-left {
    position: absolute;
    left: 8%;
    top: 50%;
    width: 310px;
    z-index: 4;
    padding: 28px;
    border-radius: var(--apple-card-radius);
    background: rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.06);
  }

  .usp-block-right {
    position: absolute;
    right: 8%;
    top: 50%;
    width: 310px;
    z-index: 4;
    padding: 28px;
    border-radius: var(--apple-card-radius);
    background: rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.06);
  }

  .usp-index-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--apple-blue);
    margin-bottom: 10px;
  }

  .usp-title-24 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.22;
    color: var(--apple-text-primary);
    margin-bottom: 10px;
  }

  .usp-sub-15 {
    font-size: 15px;
    line-height: 1.5;
    color: var(--apple-text-secondary);
  }

  /* SECTION 3: TEARDOWN / BÓC TÁCH (wrapper 200vh, sticky 100vh, perspective 1000px) */
  .sec-3-teardown-wrapper {
    position: relative;
    width: 100%;
    height: 200vh;
  }

  .teardown-perspective-stage {
    position: relative;
    width: 100%;
    height: 100vh;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .teardown-card-360 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    max-width: 88vw;
    height: 520px;
    border-radius: var(--apple-card-radius);
    box-shadow: var(--apple-shadow);
    padding: 34px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(29, 29, 31, 0.08);
    transform-style: preserve-3d;
  }

  .td-card-outer {
    background: #ffffff;
    color: var(--apple-text-primary);
    z-index: 3;
  }

  .td-card-middle {
    background: #f5f5f7;
    color: var(--apple-text-primary);
    z-index: 2;
  }

  .td-card-inner {
    background: #1d1d1f;
    color: #ffffff;
    z-index: 1;
    border-color: rgba(255, 255, 255, 0.14);
  }

  .td-card-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .td-layer-pill {
    padding: 5px 14px;
    border-radius: var(--apple-pill-radius);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: rgba(29, 29, 31, 0.06);
  }

  .td-card-inner .td-layer-pill {
    background: rgba(255, 255, 255, 0.12);
    color: #f5f5f7;
  }

  .td-vector-diagram {
    width: 100%;
    height: 190px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(29, 29, 31, 0.03);
    border: 1px solid rgba(29, 29, 31, 0.06);
  }

  .td-card-inner .td-vector-diagram {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .teardown-bottom-caption {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    text-align: center;
    max-width: 580px;
    width: 90%;
    z-index: 10;
    padding: 16px 24px;
    border-radius: var(--apple-pill-radius);
    background: rgba(251, 251, 253, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.07);
  }

  /* SECTION 4: FEATURES STAGGERED REVEAL (wrapper 150vh, sticky 100vh) */
  .sec-4-features-wrapper {
    position: relative;
    width: 100%;
    height: 150vh;
  }

  .features-container-1020 {
    width: 100%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .features-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    margin-top: 48px;
  }

  .feature-stagger-card {
    background: #ffffff;
    border-radius: var(--apple-card-radius);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.06);
    padding: 34px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .feature-circle-56 {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #f5f5f7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    border: 1px solid rgba(29, 29, 31, 0.06);
  }

  .feature-title-21 {
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.24;
    color: var(--apple-text-primary);
    margin-bottom: 12px;
  }

  .feature-desc-17 {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.52;
    color: var(--apple-text-secondary);
  }

  /* SECTION 5: FOOTER CTA (height 80vh, non-sticky) */
  .sec-5-footer-cta {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 24px 40px;
    border-top: 1px solid rgba(29, 29, 31, 0.07);
  }

  .cta-headline-big {
    font-size: clamp(34px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.08;
    max-width: 780px;
    color: var(--apple-text-primary);
    margin-bottom: 18px;
  }

  .cta-sub-copy {
    font-size: 19px;
    color: var(--apple-text-secondary);
    max-width: 560px;
    margin-bottom: 32px;
  }

  .cta-button-44 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 28px;
    border-radius: 999px;
    background: var(--apple-blue);
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 26px rgba(0, 113, 227, 0.25);
  }

  /* BẢNG QUẢN TRỊ & CẤU HÌNH BENTO CONSOLE PHÍA DƯỚI */
  .bento-console-main {
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 24px 110px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .apple-bento-card {
    background: #ffffff;
    border-radius: var(--apple-card-radius);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.06);
    padding: 36px 32px;
  }

  .bento-card-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 22px;
    border-bottom: 1px solid rgba(29, 29, 31, 0.07);
    margin-bottom: 24px;
  }

  .bento-eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--apple-text-secondary);
    margin-bottom: 6px;
  }

  .bento-heading {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: var(--apple-text-primary);
  }

  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

  .field-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: var(--apple-text-primary);
    margin-bottom: 8px;
  }

  .apple-field {
    width: 100%;
    padding: 13px 16px;
    border-radius: 14px;
    background: var(--apple-bg);
    border: 1px solid rgba(29, 29, 31, 0.14);
    color: var(--apple-text-primary);
    font-size: 14px;
    font-family: inherit;
    outline: none;
  }
  .apple-field:focus {
    border-color: var(--apple-blue);
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
  }

  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .preset-pill {
    padding: 6px 14px;
    border-radius: var(--apple-pill-radius);
    background: var(--apple-bg);
    border: 1px solid rgba(29, 29, 31, 0.1);
    font-size: 12px;
    font-weight: 600;
    color: var(--apple-text-primary);
    cursor: pointer;
    font-family: inherit;
  }

  .btn-action-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 0 24px;
    border-radius: 16px;
    background: var(--apple-text-primary);
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    font-family: inherit;
  }

  .btn-action-blue {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 0 24px;
    border-radius: 16px;
    background: var(--apple-blue);
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    font-family: inherit;
  }

  .btn-action-soft {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 0 24px;
    border-radius: 16px;
    background: #f2f2f7;
    color: var(--apple-text-primary);
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    font-family: inherit;
  }

  .apple-pill {
    display: inline-block;
    padding: 3px 11px;
    border-radius: var(--apple-pill-radius);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
  .pill-gold { background: rgba(245, 158, 11, 0.14); color: #92400e; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); color: #0051a8; }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); color: #9f1239; }

  .apple-pill-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 15px;
    border-radius: var(--apple-pill-radius);
    font-size: 12px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-family: inherit;
  }
  .btn-dark-soft { background: #1d1d1f; color: #ffffff; }
  .btn-blue-soft { background: rgba(0, 113, 227, 0.12); color: #0071e3; }
  .btn-emerald-soft { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .btn-amber-soft { background: rgba(245, 158, 11, 0.16); color: #92400e; }
  .btn-rose-soft { background: rgba(244, 63, 94, 0.14); color: #9f1239; }

  .dir-row {
    padding: 18px 0;
    border-bottom: 1px solid rgba(29, 29, 31, 0.07);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .dir-row:last-child { border-bottom: none; }
  .dir-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .dir-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(29, 29, 31, 0.08); flex-shrink: 0; }
  .dir-meta { min-width: 0; }
  .dir-title-line { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .dir-fullname { font-size: 14px; font-weight: 700; color: var(--apple-text-primary); }
  .dir-handle { font-size: 12.5px; color: var(--apple-text-secondary); }
  .dir-mono { font-family: "SF Mono", ui-monospace, monospace; font-size: 11px; color: var(--apple-text-secondary); margin-top: 4px; word-break: break-all; }
  .dir-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; flex-shrink: 0; }
  .dir-sku-tag { font-family: "SF Mono", monospace; font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: var(--apple-pill-radius); background: #f5f5f7; }

  .spec-tile {
    padding: 20px;
    border-radius: 20px;
    background: var(--apple-bg);
    border: 1px solid rgba(29, 29, 31, 0.07);
  }
  .spec-mono-val {
    font-family: "SF Mono", ui-monospace, monospace;
    font-size: 12px;
    font-weight: 600;
    color: var(--apple-text-primary);
    word-break: break-all;
    margin-top: 4px;
  }

  .empty-state-box {
    padding: 28px 16px;
    text-align: center;
    font-size: 13.5px;
    color: var(--apple-text-secondary);
  }

  .toast-alert-bar {
    padding: 16px 22px;
    border-radius: 20px;
    background: #1d1d1f;
    color: #ffffff;
    font-size: 13.5px;
    font-weight: 500;
    box-shadow: var(--apple-shadow);
    display: ${statusMsg ? "block" : "none"};
  }

  .admin-block-alert {
    padding: 22px 26px;
    border-radius: var(--apple-card-radius);
    background: #fff1f2;
    border: 1px solid rgba(244, 63, 94, 0.3);
    color: #881337;
    display: ${cfg.isBlockedByAdmin ? "flex" : "none"};
    flex-direction: column;
    gap: 6px;
  }

  .apple-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(29, 29, 31, 0.42);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .apple-modal-dialog {
    width: 100%;
    max-width: 420px;
    background: #ffffff;
    border-radius: var(--apple-card-radius);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(29, 29, 31, 0.08);
    padding: 34px 28px;
    text-align: center;
  }

  .apple-modal-art {
    width: 210px;
    height: 210px;
    margin: 20px auto;
    border-radius: 24px;
    overflow: hidden;
    background: var(--apple-bg);
    border: 1px solid rgba(29, 29, 31, 0.06);
  }
  .apple-modal-art img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .hidden { display: none !important; }

  /* RESPONSIVE RULES CHUẨN SPEC (Breakpoint 768px) */
  @media (max-width: 768px) {
    .hero-title-80 { font-size: 40px; }
    .hero-slogan-28 { font-size: 19px; }
    .pin-stage-relative {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 54px 20px 20px;
    }
    .pin-product-main, .pin-product-shadow-duplicate, .pin-canvas-360 {
      position: relative;
      left: auto;
      top: auto;
      width: 280px;
      max-width: 75vw;
    }
    .pin-product-shadow-duplicate {
      display: none;
    }
    .usp-block-left, .usp-block-right {
      position: static;
      width: 100%;
      max-width: 420px;
      text-align: center;
      padding: 20px;
    }
    .teardown-card-360 {
      width: 320px;
      height: 440px;
      padding: 24px 22px;
    }
    .features-grid-3 {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 24px;
    }
    .sec-4-features-wrapper .scrolly-sticky-inner {
      height: auto;
      min-height: 100vh;
      position: relative;
      padding: 80px 20px;
    }
    .sec-4-features-wrapper {
      height: auto;
    }
    .grid-2, .grid-3, .grid-4 {
      grid-template-columns: 1fr;
    }
    .dir-row {
      flex-direction: column;
      align-items: flex-start;
    }
    .apple-nav-link.hide-mobile {
      display: none;
    }
  }

  /* PERFORMANCE BUDGET: Tắt hiệu ứng khi bật chế độ Giảm chuyển động (prefers-reduced-motion) */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }
</style>
</head>
<body>

  <!-- FIXED PROGRESS BAR 2PX TRÊN CÙNG -->
  <div id="globalProgressBar" class="apple-global-progress"></div>

  <!-- MODAL LOCKET GOLD (HIỂN THỊ KHI NHẤN XEM POPUP HOẶC KÍCH HOẠT) -->
  <div id="locketGoldModal" class="apple-modal-backdrop ${shouldShowPopup ? "" : "hidden"}">
    <div class="apple-modal-dialog">
      <span class="bento-eyebrow">${escapeHtml(popupBadge)}</span>
      <h2 class="bento-heading" style="font-size:28px;">${escapeHtml(popupHeader)}</h2>
      <div class="apple-modal-art">
        <img id="modalArtImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" alt="Product Studio">
      </div>
      <div style="font-size:18px;font-weight:700;color:#1d1d1f;">${escapeHtml(popupTitle)}</div>
      <div style="font-size:14px;color:#6e6e73;margin:6px 0 24px;">${escapeHtml(popupSubtitle)}</div>
      <button type="button" onclick="closeGoldModalAndPush()" class="btn-action-blue">${escapeHtml(popupBtnText)}</button>
    </div>
  </div>

  <!-- SECTION 0: NAV HEADER (44px, sticky top 0, blur 20px, bg rgba(251,251,253,0.8)) -->
  <header class="apple-sticky-nav">
    <div class="apple-nav-container">
      <a href="/setdate" class="apple-nav-left" aria-label="Apple Studio Home">
        <span class="apple-logo-dot"></span>
        <span style="font-size:12px;font-weight:600;color:#6e6e73;">Studio V6</span>
      </a>
      <div class="apple-nav-center">${escapeHtml(THAY_PRODUCT_NAME)}</div>
      <div class="apple-nav-right">
        <a href="#friendsBadgeSection" class="apple-nav-link hide-mobile">Bạn bè (${activeFriendsBadgeCount}/${friendsList.length})</a>
        <a href="#dohEngineSection" class="apple-nav-link hide-mobile">DoH & CA</a>
        <button type="button" onclick="openGoldModal()" class="apple-nav-link">Popup</button>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-nav-link">${isAdminLogged ? "Root Admin" : "Quản trị"}</button>
        <a href="#consoleSection" class="apple-buy-pill">Kích hoạt</a>
      </div>
    </div>
  </header>

  <main style="background:#fbfbfd;overflow-x:hidden;">

    <!-- =====================================================================
         SECTION 1: HERO ZOOM (wrapper 200vh, inner sticky 100vh flex center)
         ===================================================================== -->
    <section id="sec1Hero" class="sec-1-hero-wrapper">
      <div class="scrolly-sticky-inner">
        <div class="hero-kicker-pill">APPLE SCROLLYTELLING ARCHITECTURE · 60FPS GPU</div>
        <h1 id="elHeroTitle" class="hero-title-80 gpu-scroll-layer">${escapeHtml(THAY_PRODUCT_NAME)}</h1>
        <p id="elHeroSlogan" class="hero-slogan-28 gpu-scroll-layer">${escapeHtml(THAY_SLOGAN)}</p>

        <!-- Scroll Indicator: Mouse Vector với hiệu ứng lăn chuột mượt -->
        <div id="elScrollIndicator" class="scroll-mouse-indicator gpu-scroll-layer">
          <div class="mouse-shell">
            <div class="mouse-wheel-dot"></div>
          </div>
          <span class="scroll-caption-tiny">Cuộn để tương tác timeline</span>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 2: PIN & SCRUB PRODUCT (wrapper 250vh, inner sticky 100vh)
         ===================================================================== -->
    <section id="sec2Pin" class="sec-2-pin-wrapper">
      <div class="scrolly-sticky-inner">
        <div class="pin-stage-relative">
          <!-- B) Shadow Layer: Duplicate image behind, blur 40px, scale 1.5 -> 1.0, opacity 0.25 -> 0 -->
          <img id="elPinShadowImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" class="pin-product-shadow-duplicate gpu-scroll-layer" alt="" aria-hidden="true" loading="eager">

          <!-- A) Product Image Main: 520px, y: 80 -> -40, scale: 1.4 -> 0.9, rotate: -8 -> 8 deg -->
          <img id="elPinMainImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" class="pin-product-main gpu-scroll-layer" alt="${escapeHtml(THAY_PRODUCT_NAME)}" loading="eager">

          <!-- Optional 72-Frame 360° Canvas Sequence (1200x800) -->
          <canvas id="elPinCanvas360" width="1200" height="800" class="pin-canvas-360 gpu-scroll-layer ${cfg.canvasSequenceEnabled && cfg.canvasFrameBaseUrl ? "" : "hidden"}"></canvas>

          <!-- C) Left Text Block THAY_USP_LEFT (progress 0.1 - 0.55) -->
          <div id="elUspLeft" class="usp-block-left gpu-scroll-layer">
            <span class="usp-index-tag"> KIẾN TRÚC ĐỒNG BỘ 01</span>
            <h2 class="usp-title-24">${escapeHtml(THAY_USP_LEFT)}</h2>
            <p class="usp-sub-15">
              Khóa cứng mốc đăng ký gốc ${escapeHtml(cfg.lockDate)} và duy trì trạng thái thuê bao Locket Gold vĩnh viễn tới năm 2099 mà không phát sinh độ trễ khung hình.
            </p>
          </div>

          <!-- D) Right Text Block THAY_USP_RIGHT (progress 0.5 - 0.95) -->
          <div id="elUspRight" class="usp-block-right gpu-scroll-layer">
            <span class="usp-index-tag">LÕI SILICON H2 & DOH 02</span>
            <h2 class="usp-title-24">${escapeHtml(THAY_USP_RIGHT)}</h2>
            <p class="usp-sub-15">
              Kết nối trực tiếp cụm máy chủ DoH (${escapeHtml(cfg.dohPrimaryIp)} · ${escapeHtml(cfg.dohSecondaryIp)}) cùng hạn mức ${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))} lượt tạo diện mạo AI.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 3: TEARDOWN / BÓC TÁCH (wrapper 200vh, sticky 100vh, 3D 1000px)
         ===================================================================== -->
    <section id="sec3Teardown" class="sec-3-teardown-wrapper">
      <div class="scrolly-sticky-inner">
        <div class="teardown-perspective-stage">

          <!-- Card 3 (Inner): bg #1d1d1f text white, z1, y: 0 -> -40, scale: 1 -> 0.98 -->
          <article id="elTdCard3" class="teardown-card-360 td-card-inner gpu-scroll-layer">
            <div class="td-card-top-bar">
              <span class="td-layer-pill">Driver</span>
              <span style="font-family:monospace;font-size:11px;color:#86868b;">LAYER 03 · Z-INDEX 1</span>
            </div>
            <div class="td-vector-diagram">
              <!-- Sơ đồ Vector Ma trận Hạt nhân Driver -->
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="16" width="188" height="88" rx="14" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/>
                <line x1="16" y1="45" x2="204" y2="45" stroke="#ffffff" stroke-opacity="0.14"/>
                <line x1="16" y1="75" x2="204" y2="75" stroke="#ffffff" stroke-opacity="0.14"/>
                <line x1="78" y1="16" x2="78" y2="104" stroke="#ffffff" stroke-opacity="0.14"/>
                <line x1="142" y1="16" x2="142" y2="104" stroke="#ffffff" stroke-opacity="0.14"/>
                <circle cx="110" cy="60" r="18" stroke="#f59e0b" stroke-width="2"/>
                <circle cx="110" cy="60" r="5" fill="#f59e0b"/>
              </svg>
            </div>
            <div>
              <h3 class="usp-title-24" style="color:#ffffff;margin-bottom:8px;">Driver Định Tuyến DoH & Root CA</h3>
              <p class="usp-sub-15" style="color:#a1a1a6;">
                Xác thực chữ ký số ${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)}, dọn sạch ETag/Pinning và đồng bộ Cron KeepAlive mỗi 5 phút.
              </p>
            </div>
          </article>

          <!-- Card 2 (Middle): bg #f5f5f7, z2, y: 0 -> -80, scale: 1 -> 0.95 -->
          <article id="elTdCard2" class="teardown-card-360 td-card-middle gpu-scroll-layer">
            <div class="td-card-top-bar">
              <span class="td-layer-pill">Lõi H2</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">LAYER 02 · Z-INDEX 2</span>
            </div>
            <div class="td-vector-diagram">
              <!-- Sơ đồ Vector Vi xử lý Lõi H2 -->
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="65" y="15" width="90" height="90" rx="20" fill="#1d1d1f" stroke="#0071e3" stroke-width="2"/>
                <rect x="83" y="33" width="54" height="54" rx="10" stroke="#ffffff" stroke-opacity="0.4" stroke-width="1.5"/>
                <path d="M40 40 H65 M40 60 H65 M40 80 H65 M155 40 H180 M155 60 H180 M155 80 H180" stroke="#1d1d1f" stroke-width="2" stroke-linecap="round"/>
                <text x="110" y="65" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700" font-family="-apple-system, sans-serif">H2 AI</text>
              </svg>
            </div>
            <div>
              <h3 class="usp-title-24" style="margin-bottom:8px;">Lõi H2 Giải Mã CloudFunctions</h3>
              <p class="usp-sub-15">
                Bóc tách trực tiếp luồng us-central1-locket-4252a.cloudfunctions.net và Firebase Remote Config, cấp 999.999 lượt AI Looks.
              </p>
            </div>
          </article>

          <!-- Card 1 (Outer): bg white, z3, y: 0 -> -120, scale: 1 -> 0.92, rotateX: 0 -> 5deg -->
          <article id="elTdCard1" class="teardown-card-360 td-card-outer gpu-scroll-layer">
            <div class="td-card-top-bar">
              <span class="td-layer-pill">Lớp ngoài</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">LAYER 01 · Z-INDEX 3</span>
            </div>
            <div class="td-vector-diagram">
              <!-- Sơ đồ Vector Thấu kính Quang học Lớp ngoài -->
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="110" cy="60" r="44" stroke="#1d1d1f" stroke-width="2"/>
                <circle cx="110" cy="60" r="30" stroke="#0071e3" stroke-width="1.5" stroke-dasharray="4 4"/>
                <circle cx="110" cy="60" r="14" fill="#1d1d1f"/>
                <path d="M40 60 H60 M160 60 H180" stroke="#6e6e73" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <h3 class="usp-title-24" style="margin-bottom:8px;">Lớp Ngoài Giao Diện & Huy Hiệu</h3>
              <p class="usp-sub-15">
                Khóa cứng gói thuê bao locket_1600_1y trên RevenueCat V1 và cho phép bật/tắt huy hiệu độc lập cho từng bạn bè.
              </p>
            </div>
          </article>

          <!-- Center Caption (bottom 15%, opacity remap p 0.2 -> 0.5) -->
          <div id="elTdCaption" class="teardown-bottom-caption gpu-scroll-layer">
            <span class="bento-eyebrow" style="margin-bottom:2px;">CẤU TRÚC TÁCH LỚP 3D VISION PRO</span>
            <div style="font-size:15px;font-weight:600;color:#1d1d1f;">
              Ba tầng xử lý độc lập vận hành đồng thời ở tốc độ 60 khung hình/giây.
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 4: FEATURES STAGGERED REVEAL (wrapper 150vh, sticky 100vh)
         ===================================================================== -->
    <section id="sec4Features" class="sec-4-features-wrapper">
      <div class="scrolly-sticky-inner">
        <div class="features-container-1020">
          <div style="text-align:center;">
            <span class="bento-eyebrow">CHUẨN MỰC KỸ THUẬT</span>
            <h2 class="cta-headline-big" style="font-size:clamp(32px,4.2vw,48px);margin:0 auto;">
              Sức mạnh kiến trúc ẩn sau sự tối giản.
            </h2>
          </div>

          <div class="features-grid-3">
            <!-- Feature 1: progress range 0.0 - 0.3 -->
            <div id="elFeatItem0" class="feature-stagger-card gpu-scroll-layer">
              <div class="feature-circle-56">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="20" height="20" rx="6" stroke="#1d1d1f" stroke-width="2"/>
                  <circle cx="13" cy="13" r="4" fill="#0071e3"/>
                </svg>
              </div>
              <span class="bento-eyebrow" style="color:#0071e3;">${escapeHtml(THAY_FEATURES[0].badge)}</span>
              <h3 class="feature-title-21">${escapeHtml(THAY_FEATURES[0].title)}</h3>
              <p class="feature-desc-17">${escapeHtml(THAY_FEATURES[0].desc)}</p>
            </div>

            <!-- Feature 2: progress range 0.15 - 0.45 -->
            <div id="elFeatItem1" class="feature-stagger-card gpu-scroll-layer">
              <div class="feature-circle-56">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="13" r="5" stroke="#1d1d1f" stroke-width="2"/>
                  <circle cx="17" cy="13" r="5" stroke="#0071e3" stroke-width="2"/>
                </svg>
              </div>
              <span class="bento-eyebrow" style="color:#0071e3;">${escapeHtml(THAY_FEATURES[1].badge)}</span>
              <h3 class="feature-title-21">${escapeHtml(THAY_FEATURES[1].title)}</h3>
              <p class="feature-desc-17">${escapeHtml(THAY_FEATURES[1].desc)}</p>
            </div>

            <!-- Feature 3: progress range 0.30 - 0.60 -->
            <div id="elFeatItem2" class="feature-stagger-card gpu-scroll-layer">
              <div class="feature-circle-56">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 13 H22 M13 4 V22" stroke="#1d1d1f" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="13" cy="13" r="9" stroke="#0071e3" stroke-width="1.8"/>
                </svg>
              </div>
              <span class="bento-eyebrow" style="color:#0071e3;">${escapeHtml(THAY_FEATURES[2].badge)}</span>
              <h3 class="feature-title-21">${escapeHtml(THAY_FEATURES[2].title)}</h3>
              <p class="feature-desc-17">${escapeHtml(THAY_FEATURES[2].desc)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 5: FOOTER CTA (height 80vh, non-sticky)
         ===================================================================== -->
    <section class="sec-5-footer-cta">
      <span class="hero-kicker-pill">SẴN SÀNG KÍCH HOẠT TRỰC TIẾP</span>
      <h2 class="cta-headline-big">Trải nghiệm ${escapeHtml(THAY_PRODUCT_NAME)} ngay hôm nay.</h2>
      <p class="cta-sub-copy">
        Đồng bộ hóa tức thì mốc thời gian đăng ký, hạn mức 999.999 lượt tạo diện mạo AI và quyền kiểm soát huy hiệu bạn bè ngay bên dưới.
      </p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <a href="/setdate?request_activate=1&gold_popup=1&push_test=1" class="cta-button-44">Kích hoạt & Đồng bộ ngay</a>
        <button type="button" onclick="triggerPushNow()" class="cta-button-44" style="background:#1d1d1f;box-shadow:none;">Bắn thông báo đẩy</button>
      </div>
    </section>

    <!-- =====================================================================
         BẢNG ĐIỀU KHIỂN TRỰC TIẾP BENTO CONSOLE (ADMIN / BẠN BÈ / DOH / CẤU HÌNH)
         ===================================================================== -->
    <div id="consoleSection" class="bento-console-main">

      <div id="realtimeBlockBanner" class="admin-block-alert">
        <span class="bento-eyebrow" style="color:#9f1239;margin:0;">THÔNG BÁO HẠN CHẾ TỪ QUẢN TRỊ VIÊN (VẪN GIỮ GOLD 24/7)</span>
        <div style="font-size:18px;font-weight:700;">Tài khoản của bạn đang bị Admin tạm chặn</div>
        <div style="font-size:14px;">${escapeHtml(cfg.blockReason)}</div>
      </div>

      <div id="statusToast" class="toast-alert-bar">${escapeHtml(statusMsg || "")}</div>

      <!-- KHU VỰC 1: TRUNG TÂM QUẢN TRỊ VIÊN ROOT ADMIN -->
      <section id="adminCommandCenter" class="apple-bento-card ${openAdminDrawer ? "" : "hidden"}">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">ROOT ADMIN CONSOLE</span>
            <h2 class="bento-heading">Trung tâm Quản trị Hệ thống & Tuỳ chỉnh Popup</h2>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="openGoldModal()" class="preset-pill">Xem thử Popup</button>
            <button type="button" onclick="triggerPushNow()" class="preset-pill">Test Push</button>
            ${isAdminLogged ? `<a href="/setdate?admin_logout=1" class="preset-pill" style="text-decoration:none;">Đăng xuất</a>` : ""}
            <button type="button" onclick="toggleAdminDrawer()" class="apple-pill-btn btn-dark-soft">Đóng</button>
          </div>
        </div>

        ${!isAdminLogged ? `
          <form method="GET" action="/setdate" autocomplete="off" style="max-width:420px;margin:12px auto 0;">
            <input type="hidden" name="admin_drawer" value="1">
            <input type="hidden" name="admin_login" value="1">
            <div style="margin-bottom:14px;">
              <label class="field-label">Tài khoản Quản trị viên</label>
              <input type="text" name="user" class="apple-field" placeholder="Nhập username admin..." required>
            </div>
            <div style="margin-bottom:18px;">
              <label class="field-label">Mật khẩu bảo mật</label>
              <input type="password" name="pass" class="apple-field" placeholder="Nhập mật khẩu..." required>
            </div>
            <button type="submit" class="btn-action-primary">Đăng nhập quyền Root Admin</button>
          </form>
        ` : `
          <div style="display:flex;flex-direction:column;gap:28px;">
            <form method="GET" action="/setdate" class="spec-tile">
              <input type="hidden" name="admin_drawer" value="1">
              <input type="hidden" name="admin_action" value="save_popup_config">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
                <span class="bento-eyebrow" style="margin:0;">TUỲ CHỈNH NỘI DUNG POPUP & THÔNG BÁO ĐẨY</span>
                <button type="button" onclick="resetDefaultGoldArt()" class="preset-pill">Khôi phục đồ hoạ Studio mặc định</button>
              </div>
              <div class="grid-2">
                <div>
                  <label class="field-label">Nhãn huy hiệu (Badge)</label>
                  <input type="text" name="popupBadge" value="${escapeHtml(popupBadge)}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Tiêu đề chính (Header)</label>
                  <input type="text" name="popupHeader" value="${escapeHtml(popupHeader)}" class="apple-field">
                </div>
              </div>
              <div class="grid-2" style="margin-top:14px;">
                <div>
                  <label class="field-label">Tiêu đề kênh / Dòng 1</label>
                  <input type="text" name="popupTitle" value="${escapeHtml(popupTitle)}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Phụ đề / Dòng 2</label>
                  <input type="text" name="popupSubtitle" value="${escapeHtml(popupSubtitle)}" class="apple-field">
                </div>
              </div>
              <div class="grid-2" style="margin-top:14px;">
                <div>
                  <label class="field-label">URL Ảnh sản phẩm trung tâm (Hoặc để trống dùng Studio Vector 8K)</label>
                  <input type="text" id="adminPopupImgInput" name="popupImage" value="${escapeHtml(popupImage)}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Nút đóng & Giãn cách thông báo (Giây)</label>
                  <div style="display:grid;grid-template-columns:1fr 110px;gap:10px;">
                    <input type="text" name="popupBtnText" value="${escapeHtml(popupBtnText)}" class="apple-field">
                    <input type="number" name="pushCooldownSeconds" value="${escapeHtml(String(cfg.pushCooldownSeconds || 12))}" min="5" max="3600" class="apple-field">
                  </div>
                  <div style="margin-top:10px;display:flex;gap:16px;flex-wrap:wrap;font-size:12.5px;color:#6e6e73;">
                    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                      <input type="checkbox" name="popupAutoShow" value="1" ${cfg.popupAutoShow === true ? "checked" : ""}> Tự mở Popup khi vào trang
                    </label>
                    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                      <input type="checkbox" name="pushNotifyOnActivate" value="1" ${cfg.pushNotifyOnActivate !== false ? "checked" : ""}> Tự bắn Push khi mở Locket
                    </label>
                  </div>
                </div>
              </div>
              <div class="grid-2" style="margin-top:18px;">
                <button type="submit" class="btn-action-primary">Lưu cấu hình Popup & Bắn thông báo</button>
                <a href="/setdate?admin_drawer=1&push_test=1&gold_popup=1" class="btn-action-blue">Test thông báo đẩy ngay</a>
              </div>
            </form>

            <form method="GET" action="/setdate" class="spec-tile">
              <input type="hidden" name="admin_drawer" value="1">
              <input type="hidden" name="admin_action" value="add_gold">
              <span class="bento-eyebrow">CẤP NHANH LOCKET GOLD & HẠN MỨC AI CHO UID</span>
              <div class="grid-4" style="margin-top:10px;">
                <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-field" placeholder="Nhập UID Locket..." required>
                <input type="text" name="target_user" value="${escapeHtml(cachedUser)}" class="apple-field" placeholder="Nhập @username...">
                <input type="number" name="target_ai_quota" value="${escapeHtml(String(currentAiQuota))}" class="apple-field" placeholder="Số lượt AI...">
                <button type="submit" class="btn-action-primary">Cấp quyền ngay</button>
              </div>
            </form>

            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span class="bento-eyebrow" style="margin:0;">DANH SÁCH QUẢN TRỊ TÀI KHOẢN (${usersList.length})</span>
                <a href="/setdate?admin_drawer=1&admin_action=unblock_all" style="font-size:12px;font-weight:600;color:#0071e3;text-decoration:none;">Gỡ chặn toàn bộ</a>
              </div>
              ${adminTableHtml}
            </div>
          </div>
        `}
      </section>

      <!-- KHU VỰC 2: ĐIỀU KHIỂN BẬT / TẮT HUY HIỆU LOCKET GOLD CHO TỪNG BẠN BÈ -->
      <section id="friendsBadgeSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">TUỲ CHỈNH HIỂN THỊ HUY HIỆU BẠN BÈ ĐỘC LẬP</span>
            <h2 class="bento-heading">Bật / Tắt Huy hiệu Locket Gold từng Bạn bè (${activeFriendsBadgeCount}/${friendsList.length})</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Tài khoản chính của bạn luôn giữ cứng huy hiệu Gold. Bạn có thể bật hoặc tắt huy hiệu của từng người bạn bên dưới.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <a href="/setdate?friend_action=enable_all#friendsBadgeSection" class="apple-pill-btn btn-emerald-soft">Bật tất cả bạn bè</a>
            <a href="/setdate?friend_action=disable_all#friendsBadgeSection" class="apple-pill-btn btn-amber-soft">Tắt tất cả bạn bè</a>
            <a href="/setdate?friend_action=toggle_default&default_val=${cfg.friendsBadgeDefault !== false ? "0" : "1"}#friendsBadgeSection" class="apple-pill-btn btn-dark-soft">
              Mặc định bạn mới: ${cfg.friendsBadgeDefault !== false ? "ĐANG BẬT" : "ĐANG TẮT"}
            </a>
          </div>
        </div>

        <form method="GET" action="/setdate#friendsBadgeSection" class="spec-tile" style="margin-bottom:22px;">
          <input type="hidden" name="friend_action" value="upsert_friend">
          <span class="bento-eyebrow">THÊM HOẶC GÁN TRẠNG THÁI HUY HIỆU BẠN BÈ THEO UID / USERNAME</span>
          <div class="grid-4" style="margin-top:10px;">
            <input type="text" name="friend_uid" class="apple-field" placeholder="Nhập UID bạn bè..." required>
            <input type="text" name="friend_user" class="apple-field" placeholder="Tên hoặc @username...">
            <select name="friend_badge" class="apple-field">
              <option value="1">Bật huy hiệu Locket Gold</option>
              <option value="0">Tắt huy hiệu Locket Gold</option>
            </select>
            <button type="submit" class="btn-action-primary">Lưu trạng thái</button>
          </div>
        </form>

        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:12px;border-bottom:1px solid rgba(29,29,31,0.06);">
          <span class="bento-eyebrow" style="margin:0;">DANH SÁCH BẠN BÈ ĐÃ GHI NHẬN TỪ LOCKET (${friendsList.length})</span>
          <div style="width:100%;max-width:260px;">
            <input type="text" id="searchFriendBadgeInput" oninput="filterFriendsBadgeList()" class="apple-field" style="padding:9px 14px;font-size:13px;" placeholder="Tìm tên bạn bè hoặc UID...">
          </div>
        </div>

        <div id="friendsBadgeDirectoryList" style="margin-top:6px;">
          ${friendsBadgeListHtml}
        </div>
      </section>

      <!-- KHU VỰC 3: LÕI ĐỊNH TUYẾN DOH & XÁC THỰC ROOT CA TÍCH HỢP -->
      <section id="dohEngineSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">INTEGRATED MOBILECONFIG ENGINE</span>
            <h2 class="bento-heading">Lõi Định tuyến LocketGold DNS (DoH) & Xác thực Root CA</h2>
            <p style="font-size:13px;color:var(--apple-text-secondary);margin-top:4px;">
              Định danh: <code style="font-family:monospace;background:#f5f5f7;padding:3px 8px;border-radius:8px;color:#1d1d1f;font-weight:600;">${escapeHtml(INTEGRATED_NET_ENGINE.profileIdentifier)}</code>
            </p>
          </div>
          <button type="button" onclick="probeDohNow()" class="apple-pill-btn btn-blue-soft" style="padding:10px 18px;">Kiểm tra kết nối DoH & Đồng bộ 3 miền</button>
        </div>

        <div class="grid-3">
          <div class="spec-tile">
            <span class="bento-eyebrow">MÁY CHỦ DNS-OVER-HTTPS</span>
            <div class="spec-mono-val">${escapeHtml(cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl)}</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:8px;">
              Giao thức: <strong>${escapeHtml(INTEGRATED_NET_ENGINE.dnsProtocol)}</strong> · <span id="dohLiveBadge" class="apple-pill pill-emerald">ĐANG BẬT (${escapeHtml(String(dohStatus.latencyMs || 16))}ms)</span>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow">ĐỊA CHỈ IP MÁY CHỦ DỰ PHÒNG</span>
            <div class="spec-mono-val">${escapeHtml(cfg.dohPrimaryIp)} · ${escapeHtml(cfg.dohSecondaryIp)}</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:8px;">
              UUID DNS: <code style="font-family:monospace;">${escapeHtml(INTEGRATED_NET_ENGINE.dnsUUID)}</code>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow">CHỨNG CHỈ LOCKETGOLD CA</span>
            <div class="spec-mono-val">${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)} (2026 — 2036)</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:8px;">
              SHA-1: <code style="font-family:monospace;">${escapeHtml(INTEGRATED_NET_ENGINE.caFingerprintBrief)}</code>
            </div>
          </div>
        </div>
      </section>

      <!-- KHU VỰC 4: THIẾT LẬP MỐC ĐĂNG KÝ, LƯỢT AI & CANVAS 360 SEQUENCE -->
      <section class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">CONFIGURATION STUDIO</span>
            <h2 class="bento-heading">Thiết lập Mốc đăng ký Locket Gold, DoH & Hạn mức AI</h2>
            <p style="font-size:13px;color:var(--apple-text-secondary);margin-top:4px;">
              UID hiện tại: <code style="font-family:monospace;background:#f5f5f7;padding:3px 8px;border-radius:8px;color:#1d1d1f;font-weight:600;">${escapeHtml(displayUid)}</code>
            </p>
          </div>
          <a href="/setdate?request_activate=1&gold_popup=1&push_test=1" class="apple-pill-btn btn-blue-soft" style="padding:10px 18px;">Kích hoạt & Đồng bộ ngay</a>
        </div>

        <form method="GET" action="/setdate" style="display:flex;flex-direction:column;gap:20px;">
          <input type="hidden" name="save" value="1">
          <div class="grid-2">
            <div>
              <label class="field-label">Số lượt sử dụng Filter AI / Tạo diện mạo</label>
              <input type="number" id="aiQuotaInput" name="aiFilterQuota" value="${escapeHtml(String(currentAiQuota))}" class="apple-field">
              <div class="chip-row">
                <button type="button" class="preset-pill" onclick="setAiQuota('999999')">Vô hạn (999.999)</button>
                <button type="button" class="preset-pill" onclick="setAiQuota('10000')">10.000 lượt</button>
                <button type="button" class="preset-pill" onclick="setAiQuota('1000')">1.000 lượt</button>
              </div>
            </div>
            <div>
              <label class="field-label">Số lượt đã dùng hôm nay (Ép về 0)</label>
              <input type="number" name="aiFilterUsed" value="${escapeHtml(String(cfg.aiFilterUsed || 0))}" class="apple-field">
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Ngày đăng ký hiển thị (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
              <input type="text" id="lockDateInput" name="lockDate" value="${escapeHtml(cfg.lockDate)}" class="apple-field">
              <div class="chip-row">
                <button type="button" class="preset-pill" onclick="setD('25/05/2026')">25/05/2026</button>
                <button type="button" class="preset-pill" onclick="setD('25/05/2010')">25/05/2010</button>
                <button type="button" class="preset-pill" onclick="setD('01/01/2022')">01/01/2022</button>
              </div>
            </div>
            <div>
              <label class="field-label">Tên hiển thị (@username)</label>
              <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-field" placeholder="Nhập @username...">
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Máy chủ DoH tích hợp (ServerURL)</label>
              <input type="text" id="dohUrlInput" name="dohServerUrl" value="${escapeHtml(cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl)}" class="apple-field">
            </div>
            <div>
              <label class="field-label">Cặp IP máy chủ DoH (Primary / Secondary)</label>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <input type="text" name="dohPrimaryIp" value="${escapeHtml(cfg.dohPrimaryIp || INTEGRATED_NET_ENGINE.serverAddresses[0])}" class="apple-field">
                <input type="text" name="dohSecondaryIp" value="${escapeHtml(cfg.dohSecondaryIp || INTEGRATED_NET_ENGINE.serverAddresses[1])}" class="apple-field">
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Mã gói đăng ký (Product Identifier)</label>
              <select name="productId" class="apple-field">
                <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly - 399.000đ)</option>
                <option value="locket_399_1m" ${cfg.productId === "locket_399_1m" ? "selected" : ""}>locket_399_1m (Gold Monthly)</option>
                <option value="locket_199_1m" ${cfg.productId === "locket_199_1m" ? "selected" : ""}>locket_199_1m (Gold Promo)</option>
              </select>
            </div>
            <div>
              <label class="field-label">Ngày hết hạn gói</label>
              <input type="text" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-field">
            </div>
          </div>

          <div class="grid-2" style="margin-top:6px;">
            <button type="submit" class="btn-action-primary">Lưu cấu hình, DoH & Đồng bộ Locket Gold</button>
            <a href="/setdate?reset=1" class="btn-action-soft">Khôi phục mặc định (25/05/2026 · DoH Chuẩn · 999.999 AI)</a>
          </div>
        </form>
      </section>

      <!-- KHU VỰC 5: DANH SÁCH TÀI KHOẢN ĐÃ LÊN LOCKET GOLD -->
      <section class="apple-bento-card">
        <div class="bento-card-head" style="margin-bottom:10px;">
          <div>
            <span class="bento-eyebrow">CƠ SỞ DỮ LIỆU ĐỒNG BỘ</span>
            <h3 class="bento-heading">Danh sách tài khoản đã lên Locket Gold (${goldUsersList.length})</h3>
          </div>
          <div style="width:100%;max-width:260px;">
            <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-field" style="padding:10px 14px;font-size:13px;" placeholder="Tìm @username hoặc UID...">
          </div>
        </div>
        <div id="goldDirectoryList">
          ${goldDirectoryHtml}
        </div>
      </section>

    </div>
  </main>
// === HẾT PHẦN 2/3 — GÕ 3 ĐỂ LẤY TIẾP PHẦN 3/3 ===
// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 3/3 — DÁN NỐI TIẾP VÀO DƯỚI PHẦN 2/3)
// Nội dung: Core Apple Scroll Engine 60fps + Canvas 72 Frames + Main Router V6
// ============================================================================
  <script>
    (function() {
      // 1. MATH HELPERS CHUẨN APPLE.COM SPEC (MANDATORY)
      var clamp = function(v, min, max) {
        return Math.max(min, Math.min(max, v));
      };
      var lerp = function(a, b, t) {
        return a + (b - a) * t;
      };
      var invLerp = function(a, b, v) {
        return clamp((v - a) / (b - a), 0, 1);
      };
      var remap = function(v, inMin, inMax, outMin, outMax) {
        return lerp(outMin, outMax, invLerp(inMin, inMax, v));
      };

      // Phát hiện thiết bị cấu hình thấp hoặc prefers-reduced-motion để tối ưu Blur 60fps
      var prefersReducedMotion = false;
      var isLowEndDevice = false;
      try {
        prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        isLowEndDevice = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || prefersReducedMotion;
      } catch (e) {}

      // Tham chiếu DOM các Section & Phần tử chuyển động
      var globalProgressBar = document.getElementById('globalProgressBar');

      var sec1Hero = document.getElementById('sec1Hero');
      var elHeroTitle = document.getElementById('elHeroTitle');
      var elHeroSlogan = document.getElementById('elHeroSlogan');
      var elScrollIndicator = document.getElementById('elScrollIndicator');

      var sec2Pin = document.getElementById('sec2Pin');
      var elPinMainImg = document.getElementById('elPinMainImg');
      var elPinShadowImg = document.getElementById('elPinShadowImg');
      var elPinCanvas360 = document.getElementById('elPinCanvas360');
      var elUspLeft = document.getElementById('elUspLeft');
      var elUspRight = document.getElementById('elUspRight');

      var sec3Teardown = document.getElementById('sec3Teardown');
      var elTdCard1 = document.getElementById('elTdCard1');
      var elTdCard2 = document.getElementById('elTdCard2');
      var elTdCard3 = document.getElementById('elTdCard3');
      var elTdCaption = document.getElementById('elTdCaption');

      var sec4Features = document.getElementById('sec4Features');
      var elFeatItem0 = document.getElementById('elFeatItem0');
      var elFeatItem1 = document.getElementById('elFeatItem1');
      var elFeatItem2 = document.getElementById('elFeatItem2');

      // 2. OPTIONAL CANVAS 72-FRAME 360 SEQUENCE MODE (1200x800)
      var canvasEnabled = ${cfg.canvasSequenceEnabled && cfg.canvasFrameBaseUrl ? "true" : "false"};
      var canvasBaseUrl = "${escapeHtml(cfg.canvasFrameBaseUrl || "")}";
      var canvasImages = [];
      var canvasCtx = null;
      var lastDrawnFrame = -1;

      if (canvasEnabled && elPinCanvas360 && canvasBaseUrl) {
        try {
          canvasCtx = elPinCanvas360.getContext('2d');
          for (var fIdx = 1; fIdx <= 72; fIdx++) {
            var imgObj = new Image();
            var numStr = String(fIdx).padStart(4, '0');
            imgObj.src = canvasBaseUrl.replace(/\/$/, '') + '/frame_' + numStr + '.jpg';
            canvasImages.push(imgObj);
          }
        } catch (e) {}
      }

      // Công thức tính Section Progress chuẩn Apple: raw = (vh - rect.top) / (vh + sectionHeight)
      function computeSectionProgress(sectionEl) {
        if (!sectionEl) return 0;
        var rect = sectionEl.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight || 1;
        var sectionHeight = rect.height || 1;
        var raw = (vh - rect.top) / (vh + sectionHeight);
        return clamp(raw, 0, 1);
      }

      var rafId = null;

      function updateAllScrollAnimations() {
        rafId = null;
        if (prefersReducedMotion) return;

        var vh = window.innerHeight || document.documentElement.clientHeight || 1;
        var vw = window.innerWidth || document.documentElement.clientWidth || 1024;
        var isMobileView = vw <= 768;

        // A) GLOBAL PROGRESS HOOK
        var docHeight = Math.max(1, document.documentElement.scrollHeight - vh);
        var globalProgress = clamp(window.scrollY / docHeight, 0, 1);
        if (globalProgressBar) {
          globalProgressBar.style.width = (globalProgress * 100).toFixed(3) + '%';
        }

        // B) SECTION 1: HERO ZOOM
        // progress 0.0-0.6: scale 3.0 -> 0.8, blur 20 -> 0px, opacity 0 -> 1 (0.0-0.4)
        // progress 0.6-1.0: opacity 1 -> 0, translateY 0 -> -80px
        if (sec1Hero) {
          var p1 = computeSectionProgress(sec1Hero);
          if (elHeroTitle) {
            var hScale = p1 <= 0.6
              ? remap(p1, 0.0, 0.6, isMobileView ? 1.8 : 3.0, 0.88)
              : 0.88;
            var hBlur = (!isLowEndDevice && p1 <= 0.6)
              ? remap(p1, 0.0, 0.6, 20, 0)
              : 0;
            var hOpacity = p1 <= 0.6
              ? remap(p1, 0.0, 0.4, 0, 1)
              : remap(p1, 0.6, 1.0, 1, 0);
            var hTransY = p1 > 0.6
              ? remap(p1, 0.6, 1.0, 0, -80)
              : 0;

            elHeroTitle.style.transform = 'translate3d(0, ' + hTransY.toFixed(2) + 'px, 0) scale(' + hScale.toFixed(4) + ')';
            elHeroTitle.style.opacity = hOpacity.toFixed(4);
            elHeroTitle.style.filter = hBlur > 0.15 ? ('blur(' + hBlur.toFixed(2) + 'px)') : 'none';
          }

          if (elHeroSlogan) {
            var sTransY = p1 <= 0.5 ? remap(p1, 0.2, 0.5, 40, 0) : 0;
            var sOpacity = p1 <= 0.6
              ? remap(p1, 0.2, 0.5, 0, 1)
              : remap(p1, 0.7, 1.0, 1, 0);
            elHeroSlogan.style.transform = 'translate3d(0, ' + sTransY.toFixed(2) + 'px, 0)';
            elHeroSlogan.style.opacity = sOpacity.toFixed(4);
          }

          if (elScrollIndicator) {
            var indOp = remap(p1, 0.0, 0.28, 1, 0);
            elScrollIndicator.style.opacity = indOp.toFixed(4);
          }
        }

        // C) SECTION 2: PIN & SCRUB PRODUCT
        // y: 80 -> -40, scale: 1.4 -> 0.9, rotate: -8 -> 8 deg
        // Shadow layer: opacity 0.25 -> 0, scale 1.5 -> 1.0
        // Left USP: 0.1-0.3 x: -60 -> 0, op: 0 -> 1 | 0.35-0.55 op: 1 -> 0
        // Right USP: 0.5-0.7 x: 60 -> 0, op: 0 -> 1 | 0.75-0.95 op: 1 -> 0
        if (sec2Pin) {
          var sProgress = computeSectionProgress(sec2Pin);
          var prodY = remap(sProgress, 0, 1, isMobileView ? 30 : 80, isMobileView ? -15 : -40);
          var prodScale = remap(sProgress, 0, 1, isMobileView ? 1.12 : 1.4, isMobileView ? 0.95 : 0.9);
          var prodRot = remap(sProgress, 0, 1, -8, 8);

          if (elPinMainImg) {
            if (isMobileView) {
              elPinMainImg.style.transform = 'translate3d(0, ' + prodY.toFixed(2) + 'px, 0) scale(' + prodScale.toFixed(4) + ') rotate(' + prodRot.toFixed(2) + 'deg)';
            } else {
              elPinMainImg.style.transform = 'translate3d(-50%, calc(-50% + ' + prodY.toFixed(2) + 'px), 0) scale(' + prodScale.toFixed(4) + ') rotate(' + prodRot.toFixed(2) + 'deg)';
            }
          }

          if (elPinShadowImg && !isMobileView) {
            var shScale = remap(sProgress, 0, 1, 1.5, 1.0);
            var shOp = remap(sProgress, 0, 1, 0.25, 0);
            elPinShadowImg.style.transform = 'translate3d(-50%, calc(-50% + ' + (prodY + 24).toFixed(2) + 'px), 0) scale(' + shScale.toFixed(4) + ')';
            elPinShadowImg.style.opacity = shOp.toFixed(4);
          }

          if (canvasEnabled && canvasCtx && canvasImages.length === 72) {
            var frameIndex = Math.floor(remap(sProgress, 0, 1, 0, 71));
            if (frameIndex !== lastDrawnFrame && canvasImages[frameIndex] && canvasImages[frameIndex].complete) {
              lastDrawnFrame = frameIndex;
              canvasCtx.clearRect(0, 0, elPinCanvas360.width, elPinCanvas360.height);
              canvasCtx.drawImage(canvasImages[frameIndex], 0, 0, elPinCanvas360.width, elPinCanvas360.height);
            }
          }

          if (elUspLeft) {
            var leftX = sProgress <= 0.3 ? remap(sProgress, 0.1, 0.3, isMobileView ? 0 : -60, 0) : 0;
            var leftOp = sProgress <= 0.32
              ? remap(sProgress, 0.1, 0.3, 0, 1)
              : remap(sProgress, 0.35, 0.55, 1, 0);
            if (isMobileView) {
              elUspLeft.style.transform = 'translate3d(0, 0, 0)';
              elUspLeft.style.opacity = clamp(leftOp + 0.35, 0, 1).toFixed(4);
            } else {
              elUspLeft.style.transform = 'translate3d(' + leftX.toFixed(2) + 'px, -50%, 0)';
              elUspLeft.style.opacity = leftOp.toFixed(4);
            }
          }

          if (elUspRight) {
            var rightX = sProgress <= 0.7 ? remap(sProgress, 0.5, 0.7, isMobileView ? 0 : 60, 0) : 0;
            var rightOp = sProgress <= 0.72
              ? remap(sProgress, 0.5, 0.7, 0, 1)
              : remap(sProgress, 0.75, 0.95, 1, 0);
            if (isMobileView) {
              elUspRight.style.transform = 'translate3d(0, 0, 0)';
              elUspRight.style.opacity = clamp(rightOp + 0.35, 0, 1).toFixed(4);
            } else {
              elUspRight.style.transform = 'translate3d(' + rightX.toFixed(2) + 'px, -50%, 0)';
              elUspRight.style.opacity = rightOp.toFixed(4);
            }
          }
        }

        // D) SECTION 3: TEARDOWN / BÓC TÁCH (Vision Pro 3D Cards)
        // Card1 (outer): y: 0 -> -120, scale: 1 -> 0.92, rotateX: 0 -> 5deg
        // Card2 (middle): y: 0 -> -80, scale: 1 -> 0.95
        // Card3 (inner): y: 0 -> -40, scale: 1 -> 0.98
        // Center caption: opacity remap(p, 0.2, 0.5, 0, 1)
        if (sec3Teardown) {
          var p3 = computeSectionProgress(sec3Teardown);
          if (elTdCard1) {
            var c1Y = remap(p3, 0.15, 0.85, 0, -120);
            var c1S = remap(p3, 0.15, 0.85, 1, 0.92);
            var c1Rx = remap(p3, 0.15, 0.85, 0, 5);
            elTdCard1.style.transform = 'translate3d(-50%, calc(-50% + ' + c1Y.toFixed(2) + 'px), 0) scale(' + c1S.toFixed(4) + ') rotateX(' + c1Rx.toFixed(2) + 'deg)';
          }
          if (elTdCard2) {
            var c2Y = remap(p3, 0.15, 0.85, 0, -40);
            var c2S = remap(p3, 0.15, 0.85, 1, 0.95);
            elTdCard2.style.transform = 'translate3d(-50%, calc(-50% + ' + c2Y.toFixed(2) + 'px), 0) scale(' + c2S.toFixed(4) + ')';
          }
          if (elTdCard3) {
            var c3Y = remap(p3, 0.15, 0.85, 0, 55);
            var c3S = remap(p3, 0.15, 0.85, 1, 0.98);
            elTdCard3.style.transform = 'translate3d(-50%, calc(-50% + ' + c3Y.toFixed(2) + 'px), 0) scale(' + c3S.toFixed(4) + ')';
          }
          if (elTdCaption) {
            var capOp = remap(p3, 0.2, 0.5, 0, 1);
            elTdCaption.style.opacity = capOp.toFixed(4);
          }
        }

        // E) SECTION 4: FEATURES STAGGERED REVEAL
        // item1: 0.0-0.3 | item2: 0.15-0.45 | item3: 0.30-0.60
        // translateY: 60 -> 0, opacity: 0 -> 1, scale: 0.9 -> 1
        if (sec4Features) {
          var p4 = computeSectionProgress(sec4Features);
          var featArr = [
            { el: elFeatItem0, s: 0.0, e: 0.35 },
            { el: elFeatItem1, s: 0.15, e: 0.50 },
            { el: elFeatItem2, s: 0.30, e: 0.65 }
          ];
          for (var k = 0; k < featArr.length; k++) {
            var item = featArr[k];
            if (!item.el) continue;
            var fY = remap(p4, item.s, item.e, 60, 0);
            var fOp = remap(p4, item.s, item.e, 0, 1);
            var fSc = remap(p4, item.s, item.e, 0.9, 1);
            item.el.style.transform = 'translate3d(0, ' + fY.toFixed(2) + 'px, 0) scale(' + fSc.toFixed(4) + ')';
            item.el.style.opacity = fOp.toFixed(4);
          }
        }
      }

      function onScrollRaf() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateAllScrollAnimations);
      }

      window.addEventListener('scroll', onScrollRaf, { passive: true });
      window.addEventListener('resize', onScrollRaf, { passive: true });
      updateAllScrollAnimations();
    })();

    // CÁC HÀM TƯƠNG TÁC BẢNG ĐIỀU KHIỂN BENTO CONSOLE & ADMIN
    function setD(v) {
      var el = document.getElementById('lockDateInput');
      if (el) el.value = v;
    }
    function setAiQuota(v) {
      var el = document.getElementById('aiQuotaInput');
      if (el) el.value = v;
    }
    function openGoldModal() {
      var m = document.getElementById('locketGoldModal');
      if (m) m.classList.remove('hidden');
    }
    function closeGoldModal() {
      var m = document.getElementById('locketGoldModal');
      if (m) m.classList.add('hidden');
    }
    function closeGoldModalAndPush() {
      closeGoldModal();
      fetch('/setdate?api=trigger_push&t=' + Date.now(), { cache: 'no-store' }).catch(function() {});
    }
    function triggerPushNow() {
      var toast = document.getElementById('statusToast');
      fetch('/setdate?api=trigger_push&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (toast) {
            toast.style.display = 'block';
            toast.textContent = (d && d.msg) ? d.msg : 'Đã bắn thông báo đẩy Shadowrocket thành công!';
          }
        })
        .catch(function() { window.location.href = '/setdate?push_test=1'; });
    }
    function probeDohNow() {
      var toast = document.getElementById('statusToast');
      var badge = document.getElementById('dohLiveBadge');
      if (badge) badge.textContent = 'ĐANG KIỂM TRA...';
      fetch('/setdate?api=doh_probe&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (badge && d) {
            badge.textContent = (d.ok ? 'ĐANG BẬT (' : 'DỰ PHÒNG (') + (d.latencyMs || 15) + 'ms)';
          }
          if (toast && d) {
            toast.style.display = 'block';
            toast.textContent = d.msg || 'Đã đồng bộ máy chủ DoH LocketGold thành công!';
          }
        })
        .catch(function() { window.location.href = '/setdate?doh_test=1'; });
    }
    function toggleSingleFriendBadge(fUid, nextStateBool) {
      var toast = document.getElementById('statusToast');
      var pill = document.getElementById('friendBadgePill_' + fUid);
      var btn = document.getElementById('friendToggleBtn_' + fUid);
      var enableVal = nextStateBool ? '1' : '0';

      fetch('/setdate?api=toggle_friend_badge&friend_uid=' + encodeURIComponent(fUid) + '&enable=' + enableVal + '&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d && d.ok) {
            var isNowOn = !!d.badge_enabled;
            if (pill) {
              pill.className = 'apple-pill ' + (isNowOn ? 'pill-gold' : 'pill-rose');
              pill.textContent = isNowOn ? 'HIỆN HUY HIỆU GOLD' : 'ĐÃ TẮT HUY HIỆU';
            }
            if (btn) {
              btn.className = 'apple-pill-btn ' + (isNowOn ? 'btn-amber-soft' : 'btn-emerald-soft');
              btn.textContent = isNowOn ? 'Tắt huy hiệu' : 'Bật huy hiệu';
              btn.setAttribute('onclick', "toggleSingleFriendBadge('" + fUid + "', " + (isNowOn ? "false" : "true") + ")");
            }
            if (toast) {
              toast.style.display = 'block';
              toast.textContent = d.msg || 'Đã cập nhật trạng thái huy hiệu bạn bè!';
            }
          }
        })
        .catch(function() {
          window.location.href = '/setdate?friend_action=toggle&friend_uid=' + encodeURIComponent(fUid) + '&enable=' + enableVal + '#friendsBadgeSection';
        });
    }
    function filterFriendsBadgeList() {
      var q = (document.getElementById('searchFriendBadgeInput').value || '').toLowerCase().trim();
      var rows = document.querySelectorAll('#friendsBadgeDirectoryList .friend-badge-item');
      for (var i = 0; i < rows.length; i++) {
        var hay = rows[i].getAttribute('data-friend-search') || '';
        rows[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }
    function resetDefaultGoldArt() {
      var inp = document.getElementById('adminPopupImgInput');
      if (inp) inp.value = '';
    }
    function toggleAdminDrawer() {
      var sec = document.getElementById('adminCommandCenter');
      if (!sec) return;
      sec.classList.toggle('hidden');
      if (!sec.classList.contains('hidden')) {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    function filterGoldUsers() {
      var q = (document.getElementById('searchGoldInput').value || '').toLowerCase().trim();
      var rows = document.querySelectorAll('#goldDirectoryList .dir-row');
      for (var i = 0; i < rows.length; i++) {
        var hay = rows[i].getAttribute('data-search') || '';
        rows[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }
  </script>
</body>
</html>`;
}

// ============================================================================
// 7. ĐỒNG BỘ LỆNH QUẢN TRỊ & CRON HEARTBEAT KEEPALIVE (5 PHÚT/LẦN)
// ============================================================================
function pushAdminCmdToServer(action, targetUid, targetUser, targetAiQuota, callback) {
    const remoteEndpoint = typeof ADMIN_API_URL !== "undefined" ? ADMIN_API_URL : "";
    if (!remoteEndpoint || remoteEndpoint.includes("your-domain.com") || !targetUid) {
        if (callback) callback();
        return;
    }
    const apiUrl = remoteEndpoint + (remoteEndpoint.includes("?") ? "&" : "?") + "api=realtime_admin_cmd";
    Env.httpPost({
        url: apiUrl,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            admin_user: ROOT_ADMIN_USER,
            admin_pass: ROOT_ADMIN_PASS_1,
            action: action,
            target_uid: targetUid,
            target_user: targetUser || "",
            target_ai_quota: targetAiQuota,
            ts: Date.now()
        }),
        timeout: 3
    }, () => {
        if (callback) callback();
    });
}

function runCronBadgeSync() {
    const cfg = loadConfig();
    const uid = Env.read(USER_ID_CACHE_KEY);
    const rcKey = Env.read(RC_API_KEY_CACHE_KEY);
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY);
    const quotaStr = String(sanitizeQuotaNumber(cfg.aiFilterQuota, 999999));
    const nowMs = Date.now();

    probeIntegratedDohEndpoint(cfg, () => {
        syncRealtimeWithServer(uid, cfg, "sync", (rtState) => {
            triggerInAppLocketBlockAlert(uid, rtState.reason, rtState.blocked, false);

            if (!uid && !bearer) {
                if (cfg.notifyOnSync) fireNativeAppNotification(cfg, true);
                Env.done();
                return;
            }

            let pending = 0;
            const finishOne = () => {
                pending--;
                if (pending <= 0) {
                    if (cfg.notifyOnSync && !rtState.blocked) fireNativeAppNotification(cfg, true);
                    Env.done();
                }
            };

            if (uid && rcKey) {
                pending++;
                const attrUrl = `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}/attributes`;
                const attrBody = JSON.stringify({
                    attributes: {
                        locket_gold_badge: { value: "true", updated_at_ms: nowMs },
                        badge: { value: "locket_gold", updated_at_ms: nowMs },
                        is_gold: { value: "true", updated_at_ms: nowMs },
                        holiday_effects_unlocked: { value: "true", updated_at_ms: nowMs },
                        camera_effects_unlocked: { value: "true", updated_at_ms: nowMs },
                        ai_filter_quota: { value: quotaStr, updated_at_ms: nowMs },
                        ai_filter_remaining: { value: quotaStr, updated_at_ms: nowMs },
                        ai_looks_remaining: { value: quotaStr, updated_at_ms: nowMs },
                        doh_dns_endpoint: { value: cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl, updated_at_ms: nowMs }
                    }
                });
                Env.httpPost({
                    url: attrUrl,
                    headers: { "Authorization": rcKey, "Content-Type": "application/json", "X-Platform": "iOS" },
                    body: attrBody
                }, () => finishOne());
            }

            if (bearer) {
                pending++;
                Env.httpPost({
                    url: "https://api.locketcamera.com/changeProfileInfo",
                    headers: { "Authorization": bearer, "Content-Type": "application/json" },
                    body: JSON.stringify({ data: { badge: "locket_gold", locket_gold_badge: true } })
                }, () => finishOne());
            }

            if (pending === 0) Env.done();
        });
    });
}

// ============================================================================
// 8. BỘ ĐỊNH TUYẾN CHÍNH (CRON / REQUEST / RESPONSE)
// ============================================================================
const isCronMode = typeof $request === "undefined" && typeof $response === "undefined";
const isRequestMode = typeof $request !== "undefined" && typeof $response === "undefined";
const isResponseMode = typeof $response !== "undefined";

if (isCronMode) {
    runCronBadgeSync();
} else if (isRequestMode) {
    const url = $request.url || "";
    const headers = $request.headers || {};
    const uid = extractAndCacheCredentials(url, headers, $request.body);
    const currentCfg = loadConfig();

    const isRootRevenueCatWeb = /^https?:\/\/(api|rc-backup)\.revenuecat\.com\/?(\?.*)?$/i.test(url);
    const isWebPanelUrl = url.includes("/setdate") || url.includes("locket.gold") || isRootRevenueCatWeb;

    if (isWebPanelUrl) {
        const q = parseQuery(url);

        if (q.api === "trigger_push") {
            fireNativeAppNotification(currentCfg, true);
            Env.done({
                response: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Cache-Control": "no-store, no-cache, must-revalidate"
                    },
                    body: JSON.stringify({
                        ok: true,
                        msg: `Đã bắn thông báo đẩy Shadowrocket: "${currentCfg.popupBadge} — ${currentCfg.popupHeader}"!`
                    })
                }
            });
        } else if (q.api === "toggle_friend_badge") {
            const fUid = (q.friend_uid || "").trim();
            const enableFlag = q.enable === "1" || q.enable === "true";
            const updatedFriend = setSingleFriendBadgeState(fUid, enableFlag);
            Env.done({
                response: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Cache-Control": "no-store, no-cache, must-revalidate"
                    },
                    body: JSON.stringify({
                        ok: !!updatedFriend,
                        friend_uid: fUid,
                        badge_enabled: enableFlag,
                        msg: `Đã ${enableFlag ? "BẬT" : "TẮT"} huy hiệu Locket Gold cho bạn bè (${updatedFriend ? updatedFriend.username : fUid})! Mở lại Locket để áp dụng.`
                    })
                }
            });
        } else if (q.api === "doh_probe") {
            probeIntegratedDohEndpoint(currentCfg, (probeResult) => {
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: JSON.stringify({
                            ok: probeResult.ok,
                            latencyMs: probeResult.latencyMs,
                            serverUrl: probeResult.serverUrl,
                            primaryIp: probeResult.primaryIp,
                            secondaryIp: probeResult.secondaryIp,
                            domains: probeResult.domains,
                            msg: `Kết nối DoH (${probeResult.serverUrl}) phản hồi trong ${probeResult.latencyMs}ms · Đã đồng bộ 3 miền Supplemental Match!`
                        })
                    }
                });
            });
        } else if (q.api === "realtime_status") {
            syncRealtimeWithServer(uid, currentCfg, "sync", (st) => {
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: JSON.stringify({
                            ok: true,
                            uid: uid,
                            blocked: !!st.blocked,
                            status: st.status,
                            gold_kept: true,
                            ai_quota: sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999),
                            doh_server: currentCfg.dohServerUrl,
                            ca_uuid: INTEGRATED_NET_ENGINE.caUUID,
                            popup_header: currentCfg.popupHeader,
                            popup_title: currentCfg.popupTitle,
                            popup_subtitle: currentCfg.popupSubtitle,
                            reason: st.reason || ""
                        })
                    }
                });
            });
        } else {
            let openDrawer = q.admin_drawer === "1";
            let forcePopup = q.gold_popup === "1";
            let statusMsg = "";
            const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

            if (q.friend_action) {
                const fUid = (q.friend_uid || "").trim();
                const fUser = (q.friend_user || "").trim().replace(/^@/, "");
                if (q.friend_action === "toggle" && fUid) {
                    const en = q.enable === "1";
                    const rec = setSingleFriendBadgeState(fUid, en);
                    statusMsg = `Đã ${en ? "BẬT" : "TẮT"} huy hiệu Locket Gold cho bạn bè (${rec ? rec.username : fUid})!`;
                } else if (q.friend_action === "upsert_friend" && fUid) {
                    const en = q.friend_badge !== "0";
                    const rec = setSingleFriendBadgeState(fUid, en, {
                        username: fUser || fUid.slice(0, 10),
                        full_name: fUser || fUid.slice(0, 10)
                    });
                    statusMsg = `Đã lưu bạn bè @${rec.username} (${fUid}) — Trạng thái huy hiệu: ${en ? "ĐANG BẬT" : "ĐÃ TẮT"}!`;
                } else if (q.friend_action === "enable_all") {
                    setAllFriendsBadgeState(true);
                    const updatedDefault = { ...loadConfig(), friendsBadgeDefault: true };
                    saveConfig(updatedDefault);
                    statusMsg = "Đã BẬT huy hiệu Locket Gold cho toàn bộ danh sách bạn bè!";
                } else if (q.friend_action === "disable_all") {
                    setAllFriendsBadgeState(false);
                    const updatedDefault = { ...loadConfig(), friendsBadgeDefault: false };
                    saveConfig(updatedDefault);
                    statusMsg = "Đã TẮT huy hiệu Locket Gold của toàn bộ bạn bè (Chỉ giữ huy hiệu cho riêng bạn)!";
                } else if (q.friend_action === "toggle_default") {
                    const newDef = q.default_val === "1";
                    const updatedDefault = { ...loadConfig(), friendsBadgeDefault: newDef };
                    saveConfig(updatedDefault);
                    statusMsg = `Đã đặt mặc định cho bạn bè mới phát hiện: ${newDef ? "TỰ ĐỘNG BẬT GOLD" : "TỰ ĐỘNG TẮT GOLD"}!`;
                } else if (q.friend_action === "delete" && fUid) {
                    const map = getFriendsBadgeMap();
                    delete map[fUid];
                    saveFriendsBadgeMap(map);
                    statusMsg = `Đã xoá bạn bè (${fUid}) khỏi danh sách tuỳ chỉnh.`;
                }
            }

            if (q.push_test === "1") {
                fireNativeAppNotification(currentCfg, true);
                statusMsg = `Đã bắn thông báo đẩy Shadowrocket: "${currentCfg.popupBadge} — ${currentCfg.popupHeader}"!`;
            }

            if (q.doh_test === "1") {
                probeIntegratedDohEndpoint(currentCfg, () => {});
                statusMsg = `Đã kiểm tra và đồng bộ tuyến DoH (${currentCfg.dohServerUrl}) cùng 3 miền mục tiêu!`;
            }

            if (q.admin_login === "1") {
                openDrawer = true;
                if (q.user === ROOT_ADMIN_USER && (q.pass === ROOT_ADMIN_PASS_1 || q.pass === ROOT_ADMIN_PASS_2)) {
                    Env.write("1", ADMIN_SESSION_KEY);
                    statusMsg = "Đã đăng nhập quyền Root Admin tối cao (ngominhduc).";
                } else {
                    statusMsg = "Sai tài khoản hoặc mật khẩu Quản trị viên.";
                }
            } else if (q.admin_logout === "1") {
                openDrawer = false;
                Env.write("0", ADMIN_SESSION_KEY);
                statusMsg = "";
            }

            if (q.request_activate === "1") {
                const targetUid = (uid && !uid.includes("RCAnonymousID")) ? uid : (Env.read(USER_ID_CACHE_KEY) || "UID_LOCKET_GOLD");
                upsertUserRecord(targetUid, {
                    username: q.username || Env.read(USERNAME_CACHE_KEY) || targetUid.slice(0, 10),
                    lockDate: currentCfg.lockDate,
                    productId: currentCfg.productId,
                    aiQuota: currentCfg.aiFilterQuota,
                    touch: true
                });
                fireNativeAppNotification(currentCfg, true);
                forcePopup = true;
                statusMsg = `Đã kích hoạt Locket Gold, đồng bộ DoH & bắn thông báo đẩy Shadowrocket cho (${targetUid})!`;
            }

            if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
                openDrawer = true;
                const db = getLocalStore();
                const tUid = (q.target_uid || "").trim();
                const tUser = (q.target_user || "").trim().replace(/^@/, "");
                const tAiQuota = q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota;

                if (q.admin_action === "save_popup_config") {
                    const newImg = (q.popupImage || "").trim() || THAY_IMAGE_PATH;
                    const newCooldown = Math.max(5, parseInt(q.pushCooldownSeconds || "12", 10) || 12);
                    const updatedPopupCfg = {
                        ...currentCfg,
                        popupBadge: (q.popupBadge || "").trim() || DEFAULT_CONFIG.popupBadge,
                        popupHeader: (q.popupHeader || "").trim() || DEFAULT_CONFIG.popupHeader,
                        popupTitle: (q.popupTitle || "").trim() || DEFAULT_CONFIG.popupTitle,
                        popupSubtitle: (q.popupSubtitle || "").trim() || DEFAULT_CONFIG.popupSubtitle,
                        popupImage: newImg,
                        popupBtnText: (q.popupBtnText || "").trim() || "Hoàn tất",
                        pushCooldownSeconds: newCooldown,
                        popupAutoShow: q.popupAutoShow === "1",
                        pushNotifyOnActivate: q.pushNotifyOnActivate === "1"
                    };
                    updatedPopupCfg.pushTitle = `${updatedPopupCfg.popupBadge} — ${updatedPopupCfg.popupHeader}`;
                    updatedPopupCfg.pushSubtitle = updatedPopupCfg.popupTitle;
                    updatedPopupCfg.pushBody = updatedPopupCfg.popupSubtitle;
                    saveConfig(updatedPopupCfg);
                    fireNativeAppNotification(updatedPopupCfg, true);
                    forcePopup = true;
                    statusMsg = "Đã cập nhật Tiêu đề & Đồ hoạ Studio Popup Lên Gold và bắn thông báo đẩy Shadowrocket!";
                } else if (q.admin_action === "push_user_gold" && tUid) {
                    fireNativeAppNotification(currentCfg, true);
                    statusMsg = `Đã bắn thông báo đẩy Locket Gold tới thiết bị cho UID: ${tUid}!`;
                } else if (q.admin_action === "unblock_all") {
                    for (const k of Object.keys(db.users)) {
                        db.users[k].status = "approved";
                        db.users[k].blocked = false;
                        db.users[k].reason = "";
                        db.users[k].updated_at = nowStr;
                    }
                    saveLocalStore(db);
                    triggerInAppLocketBlockAlert("", "", false, true);
                    statusMsg = "Đã gỡ chặn toàn bộ người dùng theo thời gian thực!";
                } else if (tUid) {
                    if (q.admin_action === "add_gold" || q.admin_action === "unblock" || q.admin_action === "set_ai_quota") {
                        db.users[tUid] = {
                            ...(db.users[tUid] || {}),
                            uid: tUid,
                            username: tUser || (db.users[tUid] && db.users[tUid].username) || tUid.slice(0, 10),
                            full_name: tUser || (db.users[tUid] && db.users[tUid].full_name) || tUid.slice(0, 10),
                            status: "approved",
                            gold_active: true,
                            blocked: false,
                            ai_quota: tAiQuota,
                            reason: "",
                            updated_at: nowStr
                        };
                        saveLocalStore(db);
                        if (tUid === uid || !uid || uid.includes("RCAnonymousID")) {
                            const updatedSelfCfg = {
                                ...loadConfig(),
                                aiFilterQuota: tAiQuota,
                                aiFilterDailyLimit: tAiQuota
                            };
                            saveConfig(updatedSelfCfg);
                        }
                        triggerInAppLocketBlockAlert(tUid, "", false, true);
                        fireNativeAppNotification(loadConfig(), true);
                        statusMsg = `Đã cập nhật UID: ${tUid} — Đã mở khoá Gold, bắn thông báo đẩy & cấp ${tAiQuota.toLocaleString("vi-VN")} lượt Filter AI!`;
                    } else if (q.admin_action === "block") {
                        const blkMsg = "Tài khoản đang bị Admin hạn chế trong Locket (Vẫn giữ huy hiệu Locket Gold 24/7).";
                        db.users[tUid] = {
                            ...(db.users[tUid] || {}),
                            uid: tUid,
                            status: "blocked",
                            gold_active: true,
                            blocked: true,
                            reason: blkMsg,
                            updated_at: nowStr
                        };
                        saveLocalStore(db);
                        triggerInAppLocketBlockAlert(tUid, blkMsg, true, true);
                        statusMsg = `Đã chặn UID: ${tUid} — Đã bắn thông báo trong Locket & vẫn giữ nguyên Gold!`;
                    } else if (q.admin_action === "delete") {
                        delete db.users[tUid];
                        saveLocalStore(db);
                        statusMsg = `Đã xoá UID ${tUid} khỏi danh sách.`;
                    }
                }
            }

            const finishWebRender = () => {
                const latestBeforeSync = loadConfig();
                syncRealtimeWithServer(uid, latestBeforeSync, "sync", () => {
                    let current = loadConfig();
                    if (q.reset === "1") {
                        const resetCfg = { ...DEFAULT_CONFIG, preferWebOverArg: true };
                        saveConfig(resetCfg);
                        current = loadConfig();
                        fireNativeAppNotification(current, true);
                        statusMsg = "Đã khôi phục mặc định (25/05/2026, DoH https://doh.2707226.xyz/dns-query/common & 999.999 lượt AI)!";
                    } else if (q.save === "1" || q.d || q.lockDate || q.aiFilterQuota !== undefined || q.dohServerUrl !== undefined) {
                        const rawLock = q.lockDate || q.d || current.lockDate;
                        const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
                        const rawExp = q.expireDate || current.expireDate;
                        const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate, "T23:59:59Z");
                        const newAiQuota = q.aiFilterQuota !== undefined
                            ? sanitizeQuotaNumber(q.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota)
                            : sanitizeQuotaNumber(current.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
                        const newAiUsed = q.aiFilterUsed !== undefined
                            ? sanitizeQuotaNumber(q.aiFilterUsed, 0)
                            : 0;

                        if (q.username) {
                            Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);
                        }
                        const updated = {
                            ...current,
                            lockDate: isoLock.slice(0, 10),
                            expireDate: isoExp.slice(0, 10),
                            productId: q.productId || current.productId || DEFAULT_CONFIG.productId,
                            ownershipType: q.ownershipType || current.ownershipType || "PURCHASED",
                            dohServerUrl: (q.dohServerUrl || current.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl).trim(),
                            dohPrimaryIp: (q.dohPrimaryIp || current.dohPrimaryIp || INTEGRATED_NET_ENGINE.serverAddresses[0]).trim(),
                            dohSecondaryIp: (q.dohSecondaryIp || current.dohSecondaryIp || INTEGRATED_NET_ENGINE.serverAddresses[1]).trim(),
                            unlockAllCameraEffects: true,
                            aiFilterEnabled: true,
                            aiFilterQuota: newAiQuota,
                            aiFilterDailyLimit: newAiQuota,
                            aiFilterUsed: newAiUsed,
                            aiFilterUnlimited: true,
                            preferWebOverArg: true
                        };
                        saveConfig(updated);
                        if (uid && !uid.includes("RCAnonymousID")) {
                            upsertUserRecord(uid, {
                                username: q.username ? q.username.trim().replace(/^@/, "") : undefined,
                                lockDate: updated.lockDate,
                                productId: updated.productId,
                                aiQuota: newAiQuota,
                                touch: true
                            });
                        }
                        current = loadConfig();
                        fireNativeAppNotification(current, true);
                        statusMsg = `Đã lưu mốc đăng ký ${current.lockIso}, tuyến DoH (${current.dohServerUrl}) & mở khoá ${newAiQuota.toLocaleString("vi-VN")} lượt AI!`;
                    }

                    Env.done({
                        response: {
                            status: 200,
                            headers: {
                                "Content-Type": "text/html; charset=utf-8",
                                "Cache-Control": "no-store, no-cache, must-revalidate"
                            },
                            body: renderBentoWebPanel(current, statusMsg, openDrawer, forcePopup)
                        }
                    });
                });
            };

            if (q.admin_action && q.target_uid && Env.read(ADMIN_SESSION_KEY) === "1") {
                pushAdminCmdToServer(
                    q.admin_action,
                    q.target_uid.trim(),
                    q.target_user || "",
                    q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota,
                    finishWebRender
                );
            } else {
                finishWebRender();
            }
        }
    } else {
        if (currentCfg.isBlockedByAdmin) {
            triggerInAppLocketBlockAlert(uid, currentCfg.blockReason, true, false);
        } else {
            fireNativeAppNotification(currentCfg, false);
        }

        applyIntegratedNetworkHeaders(url, headers, currentCfg);

        let modifiedBody = $request.body;
        if (
            typeof modifiedBody === "string" &&
            modifiedBody.trim().startsWith("{") &&
            (
                url.includes("revenuecat.com") ||
                url.includes("changeProfileInfo") ||
                url.includes("us-central1-locket-4252a.cloudfunctions.net")
            )
        ) {
            try {
                const reqJson = JSON.parse(modifiedBody);
                let touched = false;
                const nowMs = Date.now();
                const quotaStr = String(sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999));

                if (reqJson.attributes && typeof reqJson.attributes === "object") {
                    reqJson.attributes.locket_gold_badge = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.badge = { value: "locket_gold", updated_at_ms: nowMs };
                    reqJson.attributes.is_gold = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.holiday_effects_unlocked = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.camera_effects_unlocked = { value: "true", updated_at_ms: nowMs };
                    reqJson.attributes.ai_filter_quota = { value: quotaStr, updated_at_ms: nowMs };
                    reqJson.attributes.ai_filter_remaining = { value: quotaStr, updated_at_ms: nowMs };
                    reqJson.attributes.doh_dns_endpoint = { value: currentCfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl, updated_at_ms: nowMs };
                    touched = true;
                }
                if ((url.includes("changeProfileInfo") || url.includes("us-central1-locket-4252a.cloudfunctions.net")) && reqJson.data && typeof reqJson.data === "object") {
                    reqJson.data.badge = "locket_gold";
                    reqJson.data.locket_gold_badge = true;
                    reqJson.data.is_gold = true;
                    touched = true;
                }

                if (touched) {
                    modifiedBody = JSON.stringify(reqJson);
                }
            } catch (e) {}
        }

        if (modifiedBody !== undefined && modifiedBody !== $request.body) {
            Env.done({ headers, body: modifiedBody });
        } else {
            Env.done({ headers });
        }
    }
} else if (isResponseMode) {
    const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
    const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? $request.headers : {};
    const requestedUrlUserId = extractRequestedRcUserId(reqUrl);
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const cfg = loadConfig();

    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
    } else {
        fireNativeAppNotification(cfg, false);
    }

    const rawBody = $response.body || "";
    if (typeof rawBody !== "string" || (!rawBody.trim().startsWith("{") && !rawBody.trim().startsWith("["))) {
        Env.done({});
    } else {
        let obj;
        try {
            obj = JSON.parse(rawBody);
        } catch (e) {
            Env.done({});
            obj = null;
        }

        if (obj && typeof obj === "object") {
            const isRevenueCat = (
                reqUrl.includes("revenuecat.com") ||
                reqUrl.includes("rc-backup.com") ||
                reqUrl.includes("/subscribers") ||
                reqUrl.includes("/receipts") ||
                obj.subscriber !== undefined
            );

            const isOfferings = reqUrl.includes("/offerings") || obj.offerings !== undefined;

            const isFirebaseRemoteConfig = (
                reqUrl.includes("firebaseremoteconfig.googleapis.com") ||
                (obj.entries !== undefined && typeof obj.entries === "object")
            );

            const isLocketCloudFunctions = (
                reqUrl.includes("us-central1-locket-4252a.cloudfunctions.net") ||
                reqUrl.includes("cloudfunctions.net")
            );

            if (isFirebaseRemoteConfig) {
                obj = injectFirebaseRemoteConfig(obj, cfg);
            } else if (isOfferings) {
                obj = patchRevenueCatOfferings(obj, cfg);
            } else if (isRevenueCat) {
                obj = buildSubscriberPayload(obj, cfg, resolvedUserId, requestedUrlUserId);
            } else if (isLocketCloudFunctions) {
                obj = patchCloudFunctionResponsePayload(obj, cfg, reqUrl, resolvedUserId);
            } else {
                if (obj.error && typeof obj.error === "object") {
                    const errMsg = String(obj.error.message || obj.error.status || "").toLowerCase();
                    if (errMsg.includes("quota") || errMsg.includes("limit") || errMsg.includes("gold") || errMsg.includes("permission")) {
                        delete obj.error;
                        obj.result = obj.result || { ok: true, can_use: true, remaining: sanitizeQuotaNumber(cfg.aiFilterQuota, 999999) };
                    }
                }
                obj = deepForceBadgeAndAiQuotaInObject(obj, cfg);
                if (obj.subscriber && typeof obj.subscriber === "object") {
                    obj = buildSubscriberPayload(obj, cfg, resolvedUserId, requestedUrlUserId);
                }
                if (obj.entries && typeof obj.entries === "object") {
                    obj = injectFirebaseRemoteConfig(obj, cfg);
                }
            }

            const resHeaders = { ...($response.headers || {}) };
            for (const k of Object.keys(resHeaders)) {
                const low = k.toLowerCase();
                if (
                    low === "x-revenuecat-etag" ||
                    low === "etag" ||
                    low === "x-signature" ||
                    low === "x-revenuecat-request-id" ||
                    low === "content-length" ||
                    low === "public-key-pins" ||
                    low === "expect-ct"
                ) {
                    delete resHeaders[k];
                }
            }
            resHeaders["Content-Type"] = "application/json; charset=utf-8";
            resHeaders["Cache-Control"] = "no-store, no-cache, must-revalidate";
            resHeaders["X-LocketGold-DoH-Active"] = "true";

            const origStatus = ($response && $response.status) ? $response.status : 200;
            const finalStatus = (isRevenueCat || isOfferings || isFirebaseRemoteConfig || isLocketCloudFunctions || origStatus === 304) ? 200 : origStatus;

            Env.done({
                status: finalStatus,
                headers: resHeaders,
                body: JSON.stringify(obj)
            });
        }
    }
}
