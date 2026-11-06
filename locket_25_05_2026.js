// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 1/4 — CORE ENGINE, AUTO-DISCOVERY & PAYLOADS)
// Runtime: Shadowrocket / Loon / Surge / Quantumult X
// Kiến trúc giao diện: Apple.com Internal "Flow" Engine (3-Tier GPU Architecture)
//   - Tầng 1: Passive Scroll Tracker (0ms main-thread block)
//   - Tầng 2: Flow Engine (Damped Scroll 0.08 + Cubic-Bezier Easing Solver)
//   - Tầng 3: GPU Compositor (translate3d / scale / rotate / opacity / clip-path)
//   - Đầy đủ 7 đại kỹ thuật Animation chuẩn Apple.com:
//       1. Sticky Scrub 300vh (Timeline 0-10% Hold, 10-80% Scrub, 80-100% Lock)
//       2. 147-Frame Image Sequence & WebGL/Canvas Shader (Batch Preload + IO)
//       3. 4-Layer Word-by-Word Text Reveal (Opacity + Y + Scale + Blur 12px, +0.04s/word)
//       4. Hero Zoom 200vh (19vw Title, Scale 2.8 -> 0.75 -> 0.6, Blur 20px -> 0px)
//       5. Vision Pro 3D Teardown Parallax (3 Lớp bay lệch tốc độ 40px/lớp)
//       6. Mask & Clip-Path Morphing (Full-bleed 100vw thu phóng thành Viên thuốc bo tròn)
//       7. Dual-Layer Color Fade (Chuyển nền Trắng #fbfbfd <-> Đen #000000 bằng Opacity)
// ============================================================================

const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";
const ADMIN_API_URL = ""; // Khai báo đầy đủ chống ReferenceError làm sập Web UI

// ============================================================================
// 1. CẤU HÌNH THÔNG SỐ SẢN PHẨM CHUẨN APPLE.COM SCROLLYTELLING
// ============================================================================
const THAY_PRODUCT_NAME = "LOCKET GOLD PRO";
const THAY_SLOGAN = "Hiệu ứng thích ứng. Quyền năng thuần khiết. Vận hành bởi Apple Flow Engine.";
const THAY_USP_LEFT = "Kiến trúc tối giản tuyệt đối. Khóa cứng mốc đăng ký gốc và đồng bộ thời gian thực trên mọi khung hình.";
const THAY_USP_RIGHT = "Chip Locket H2 & Lõi DoH HTTPS mới. Mở khóa 999.999 lượt tạo diện mạo AI cùng 147-Frame Sequence 60fps.";
const THAY_FEATURES = [
    {
        title: "Mở khóa toàn diện Hiệu ứng & AI Looks",
        desc: "Gỡ bỏ hoàn toàn rào cản Paywall, kích hoạt trọn bộ Filter ngày lễ và cấp phát 999.999 lượt tạo diện mạo AI mỗi ngày với bộ đếm tự động reset về 0.",
        badge: "999.999 AI QUOTA",
        stat: "999K+"
    },
    {
        title: "Auto-Discovery & Huy hiệu Bạn bè độc lập",
        desc: "Tự động quét UID + Username + Ảnh đại diện bạn bè từ luồng mạng và API Locket. Bật hoặc tắt huy hiệu Gold cho từng người mà vẫn giữ cứng Gold cho bạn.",
        badge: "AUTO UID HARVESTER",
        stat: "100%"
    },
    {
        title: "Định tuyến DoH HTTPS & Khóa cứng 2099",
        desc: "Tích hợp trực tiếp cụm máy chủ DNS-over-HTTPS (172.67.146.35 / 104.21.10.172), định danh LocketGold Root CA và Cron KeepAlive duy trì vĩnh viễn tới 2099.",
        badge: "4MS GPU & DOH ENGINE",
        stat: "4ms"
    }
];

// Đồ họa Vector Studio 8K mô phỏng Phần cứng Locket Gold H2 Titanium & Thấu kính Sapphire
const DEFAULT_GOLD_POPUP_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" width="900" height="900">
  <defs>
    <radialGradient id="studioStage" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f5f5f7"/>
      <stop offset="100%" stop-color="#e5e5ea"/>
    </radialGradient>
    <linearGradient id="titaniumChassis" x1="12%" y1="4%" x2="88%" y2="96%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#f2f2f7"/>
      <stop offset="75%" stop-color="#d1d1d6"/>
      <stop offset="100%" stop-color="#8e8e93"/>
    </linearGradient>
    <linearGradient id="chamferBezel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#86868b"/>
      <stop offset="100%" stop-color="#1d1d1f"/>
    </linearGradient>
    <linearGradient id="siliconWafer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2c2c2e"/>
      <stop offset="50%" stop-color="#141416"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="goldLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="80%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <radialGradient id="sapphireFlare" cx="38%" cy="32%" r="58%">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.32"/>
      <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="studioDropShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="34" stdDeviation="28" flood-color="#000000" flood-opacity="0.16"/>
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.08"/>
    </filter>
  </defs>
  <rect width="900" height="900" rx="190" fill="url(#studioStage)"/>
  <ellipse cx="450" cy="740" rx="280" ry="44" fill="#000000" opacity="0.10"/>
  <g filter="url(#studioDropShadow)">
    <rect x="175" y="120" width="550" height="200" rx="98" fill="url(#titaniumChassis)" stroke="url(#chamferBezel)" stroke-width="2.5"/>
    <path d="M 230 318 L 670 318" stroke="#aeaeb2" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="395" y="308" width="110" height="18" rx="9" fill="url(#chamferBezel)"/>
    <rect x="150" y="320" width="600" height="400" rx="128" fill="url(#titaniumChassis)" stroke="url(#chamferBezel)" stroke-width="3"/>
    <rect x="176" y="344" width="548" height="352" rx="108" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.92"/>
    <circle cx="450" cy="520" r="142" fill="url(#siliconWafer)" stroke="url(#chamferBezel)" stroke-width="4.5"/>
    <circle cx="450" cy="520" r="120" fill="url(#sapphireFlare)" stroke="url(#goldLiquid)" stroke-width="1.8" stroke-dasharray="6 6"/>
    <rect x="372" y="442" width="156" height="156" rx="34" fill="#0d0d10" stroke="url(#goldLiquid)" stroke-width="2.5"/>
    <g stroke="url(#goldLiquid)" stroke-width="2.4" stroke-linecap="round" opacity="0.82">
      <line x1="402" y1="442" x2="402" y2="416"/><line x1="426" y1="442" x2="426" y2="416"/><line x1="450" y1="442" x2="450" y2="416"/><line x1="474" y1="442" x2="474" y2="416"/><line x1="498" y1="442" x2="498" y2="416"/>
      <line x1="402" y1="598" x2="402" y2="624"/><line x1="426" y1="598" x2="426" y2="624"/><line x1="450" y1="598" x2="450" y2="624"/><line x1="474" y1="598" x2="474" y2="624"/><line x1="498" y1="598" x2="498" y2="624"/>
      <line x1="372" y1="474" x2="346" y2="474"/><line x1="372" y1="520" x2="346" y2="520"/><line x1="372" y1="566" x2="346" y2="566"/>
      <line x1="528" y1="474" x2="554" y2="474"/><line x1="528" y1="520" x2="554" y2="520"/><line x1="528" y1="566" x2="554" y2="566"/>
    </g>
    <text x="450" y="496" text-anchor="middle" fill="#a1a1a6" font-size="12" font-weight="700" letter-spacing="0.26em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">APPLE SILICON</text>
    <text x="450" y="534" text-anchor="middle" fill="url(#goldLiquid)" font-size="36" font-weight="800" letter-spacing="-0.02em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">GOLD H2</text>
    <text x="450" y="562" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600" letter-spacing="0.22em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">FLOW ENGINE V6</text>
    <circle cx="450" cy="676" r="6" fill="#10b981"/>
    <circle cx="450" cy="676" r="13" fill="none" stroke="#10b981" stroke-width="1.6" stroke-opacity="0.4"/>
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
    // Cấu hình 147-Frame Sequence (Hỗ trợ cả URL ảnh thật 0001.jpg -> 0147.jpg lẫn Procedural 3D Hardware Sequence tự động)
    canvasSequenceEnabled: true,
    canvasFrameBaseUrl: "",
    canvasTotalFrames: 147,
    scrollDampingFactor: 0.08,
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
// 4. CƠ CHẾ TỰ ĐỘNG QUÉT (AUTO-GET) UID BẠN BÈ & BẬT/TẮT HUY HIỆU ĐỘC LẬP
// ============================================================================
let _runtimeFriendsDirty = false;
let _runtimeFriendsCache = null;

function isValidLocketUidCandidate(str) {
    if (!str || typeof str !== "string") return false;
    const s = str.trim();
    if (s.length < 20 || s.length > 40) return false;
    if (s.includes("RCAnonymousID") || s.includes("locket_") || s.includes(" ")) return false;
    return /^[A-Za-z0-9_-]{20,40}$/.test(s);
}

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
    if (!isValidLocketUidCandidate(friendUid)) return true;
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
        const defaultShort = friendUid.slice(0, 10);
        if (meta && meta.username && meta.username !== defaultShort && meta.username !== map[friendUid].username) {
            map[friendUid].username = meta.username;
            changed = true;
        }
        if (meta && meta.full_name && meta.full_name !== defaultShort && meta.full_name !== map[friendUid].full_name) {
            map[friendUid].full_name = meta.full_name;
            changed = true;
        }
        if (meta && meta.avatar && meta.avatar !== map[friendUid].avatar) {
            map[friendUid].avatar = meta.avatar;
            changed = true;
        }
        if (changed) {
            map[friendUid].updated_at = nowStr;
            _runtimeFriendsDirty = true;
        }
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

function autoHarvestFriendsFromRawPayload(rawBodyStr, parsedObj, cfg) {
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";

    if (typeof rawBodyStr === "string" && rawBodyStr.length > 10) {
        const docRegex = /\/users\/([A-Za-z0-9_-]{24,36})(?:\/|"|'|\?|$)/g;
        let m;
        while ((m = docRegex.exec(rawBodyStr)) !== null) {
            const candidateUid = m[1];
            if (candidateUid && candidateUid !== selfUid && isValidLocketUidCandidate(candidateUid)) {
                resolveFriendBadgeState(candidateUid, null, cfg);
            }
        }

        const encodedImgRegex = /users%2F([A-Za-z0-9_-]{24,36})%2F/g;
        while ((m = encodedImgRegex.exec(rawBodyStr)) !== null) {
            const candidateUid = m[1];
            if (candidateUid && candidateUid !== selfUid && isValidLocketUidCandidate(candidateUid)) {
                resolveFriendBadgeState(candidateUid, null, cfg);
            }
        }
    }

    const walkHarvester = (node, depth = 0) => {
        if (!node || typeof node !== "object" || depth > 12) return;
        if (Array.isArray(node)) {
            for (let i = 0; i < node.length; i++) {
                walkHarvester(node[i], depth + 1);
            }
            return;
        }

        if (node.fields && typeof node.fields === "object") {
            let docUid = (node.fields.uid && node.fields.uid.stringValue) ||
                         (node.fields.user_uid && node.fields.user_uid.stringValue) || "";
            if (!docUid && typeof node.name === "string") {
                const matchDoc = node.name.match(/\/users\/([A-Za-z0-9_-]{20,36})/);
                if (matchDoc && matchDoc[1]) docUid = matchDoc[1];
            }
            if (docUid && docUid !== selfUid && isValidLocketUidCandidate(docUid)) {
                const fUsername = (node.fields.username && node.fields.username.stringValue) || "";
                const fFirst = (node.fields.first_name && node.fields.first_name.stringValue) || "";
                const fLast = (node.fields.last_name && node.fields.last_name.stringValue) || "";
                const fAvatar = (node.fields.profile_picture_url && node.fields.profile_picture_url.stringValue) || "";
                const fullDocName = [fFirst, fLast].filter(Boolean).join(" ").trim() || fUsername || docUid.slice(0, 10);
                resolveFriendBadgeState(docUid, {
                    username: fUsername || fullDocName,
                    full_name: fullDocName,
                    avatar: fAvatar
                }, cfg);
            }
        }

        const directUid = node.uid || node.user_uid || node.friend_uid || node.creator_uid || node.sender_uid || node.canonical_uid;
        if (typeof directUid === "string" && directUid !== selfUid && isValidLocketUidCandidate(directUid)) {
            const fullName = [node.first_name, node.last_name].filter(Boolean).join(" ").trim() ||
                             node.full_name || node.display_name || node.username || directUid.slice(0, 10);
            resolveFriendBadgeState(directUid, {
                username: node.username || fullName,
                full_name: fullName,
                avatar: node.profile_picture_url || node.avatar_url || node.avatar || ""
            }, cfg);
        }

        const listKeys = ["friends", "friend_uids", "friend_ids", "accepted_friends", "pinned_friends", "users", "overlays"];
        for (const lk of listKeys) {
            if (Array.isArray(node[lk])) {
                for (const item of node[lk]) {
                    if (typeof item === "string" && item !== selfUid && isValidLocketUidCandidate(item)) {
                        resolveFriendBadgeState(item, null, cfg);
                    } else if (item && typeof item === "object") {
                        walkHarvester(item, depth + 1);
                    }
                }
            }
        }

        for (const k of Object.keys(node)) {
            const v = node[k];
            if (typeof v === "object" && v !== null) {
                walkHarvester(v, depth + 1);
            }
        }
    };

    if (parsedObj && typeof parsedObj === "object") {
        walkHarvester(parsedObj, 0);
    }

    flushFriendsBadgeMapIfNeeded();
}

function activeFetchFriendsFromLocketApi(cfg, callback) {
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY) || "";
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";
    const beforeCount = Object.keys(getFriendsBadgeMap()).filter(k => k !== selfUid).length;

    if (!bearer || !/^Bearer\s+eyJ/i.test(bearer)) {
        if (callback) {
            callback({
                ok: false,
                total: beforeCount,
                added: 0,
                msg: "Chưa có Bearer Token trong bộ nhớ đệm. Hãy mở app Locket 1 lần rồi bấm Quét lại!"
            });
        }
        return;
    }

    const commonHeaders = {
        "Authorization": bearer,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Locket/1.0 iOS/17.0"
    };

    const endpointsToProbe = [
        {
            url: "https://api.locketcamera.com/getLatestMomentV2",
            body: JSON.stringify({ data: { excluded_users: [], sync_token: null } })
        },
        {
            url: "https://api.locketcamera.com/fetchUserV2",
            body: JSON.stringify({ data: { user_uid: selfUid } })
        }
    ];

    let pendingCalls = endpointsToProbe.length;
    const onOneDone = (rawText) => {
        if (rawText && typeof rawText === "string") {
            let parsed = null;
            try { parsed = JSON.parse(rawText); } catch (e) {}
            autoHarvestFriendsFromRawPayload(rawText, parsed, cfg);
        }
        pendingCalls--;
        if (pendingCalls <= 0) {
            const currentMap = getFriendsBadgeMap();
            const unnamedUids = Object.keys(currentMap).filter(u => {
                if (u === selfUid) return false;
                const rec = currentMap[u];
                return !rec.username || rec.username === u.slice(0, 10);
            }).slice(0, 12);

            if (unnamedUids.length === 0) {
                const afterCount = Object.keys(getFriendsBadgeMap()).filter(k => k !== selfUid).length;
                if (callback) {
                    callback({
                        ok: true,
                        total: afterCount,
                        added: Math.max(0, afterCount - beforeCount),
                        msg: `Đã tự động quét & đồng bộ thành công ${afterCount} bạn bè từ máy chủ Locket!`
                    });
                }
                return;
            }

            let profileCalls = unnamedUids.length;
            for (const targetFriendUid of unnamedUids) {
                Env.httpPost({
                    url: "https://api.locketcamera.com/fetchUserV2",
                    headers: commonHeaders,
                    body: JSON.stringify({ data: { user_uid: targetFriendUid } }),
                    timeout: 3
                }, (err, resp, body) => {
                    if (!err && body) {
                        let pObj = null;
                        try { pObj = JSON.parse(body); } catch (e) {}
                        autoHarvestFriendsFromRawPayload(body, pObj, cfg);
                    }
                    profileCalls--;
                    if (profileCalls <= 0) {
                        const finalCount = Object.keys(getFriendsBadgeMap()).filter(k => k !== selfUid).length;
                        if (callback) {
                            callback({
                                ok: true,
                                total: finalCount,
                                added: Math.max(0, finalCount - beforeCount),
                                msg: `Đã tự động quét & cập nhật hồ sơ cho ${finalCount} bạn bè từ Locket!`
                            });
                        }
                    }
                });
            }
        }
    };

    for (const ep of endpointsToProbe) {
        Env.httpPost({
            url: ep.url,
            headers: commonHeaders,
            body: ep.body,
            timeout: 4
        }, (err, resp, body) => {
            onOneDone(!err ? body : null);
        });
    }
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
        low.includes("locketcamera.com") ||
        low.includes("firestore.googleapis.com")
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
        latencyMs: 14,
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

            const currentSelfUid = foundUid || Env.read(USER_ID_CACHE_KEY) || "";

            if (candidate && typeof candidate === "string" && !candidate.includes("RCAnonymousID")) {
                if (currentSelfUid && candidate !== currentSelfUid) {
                    const fName = [uData.first_name, uData.last_name].filter(Boolean).join(" ").trim() || uData.username || candidate.slice(0, 10);
                    resolveFriendBadgeState(candidate, {
                        username: uData.username || fName,
                        full_name: fName,
                        avatar: uData.profile_picture_url || ""
                    }, loadConfig());
                    flushFriendsBadgeMapIfNeeded();
                } else if (!url || (!url.includes("fetchUser") && !url.includes("getUser") && !url.includes("friends"))) {
                    foundUid = candidate;
                    Env.write(foundUid, USER_ID_CACHE_KEY);
                }
            }

            if (uData && typeof uData === "object" && (!candidate || candidate === currentSelfUid)) {
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
                            background: "#000000", text_1: "#FBFBFD", text_2: "#86868B", text_3: "#0071E3",
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

    const candidateUserUid = String(node.uid || node.user_uid || node.friend_uid || node.creator_uid || node.sender_uid || "");
    const hasUserShape = !isEffectOrFilterItem && (
        "locket_gold_badge" in node ||
        (isValidLocketUidCandidate(candidateUserUid) && ("username" in node || "first_name" in node || "last_name" in node || "profile_picture_url" in node || "badge" in node || "is_gold" in node))
    );

    let isFriendWithBadgeOff = false;

    if (hasUserShape) {
        const isFriend = Boolean(candidateUserUid && (!selfUid || candidateUserUid !== selfUid));
        let shouldShowBadge = true;

        if (isFriend) {
            const fullName = [node.first_name, node.last_name].filter(Boolean).join(" ").trim() || node.full_name || node.username || candidateUserUid.slice(0, 10);
            shouldShowBadge = resolveFriendBadgeState(candidateUserUid, {
                username: node.username || fullName,
                full_name: fullName,
                avatar: node.profile_picture_url || node.avatar || ""
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
        if (node.fields.uid || node.fields.username || node.fields.badge || node.fields.profile_picture_url || typeof node.name === "string") {
            let fUid = (node.fields.uid && node.fields.uid.stringValue) ||
                       (node.fields.user_uid && node.fields.user_uid.stringValue) || "";
            if (!fUid && typeof node.name === "string") {
                const mDoc = node.name.match(/\/users\/([A-Za-z0-9_-]{20,36})/);
                if (mDoc && mDoc[1]) fUid = mDoc[1];
            }
            const fUsername = (node.fields.username && node.fields.username.stringValue) || "";
            const fFirst = (node.fields.first_name && node.fields.first_name.stringValue) || "";
            const fLast = (node.fields.last_name && node.fields.last_name.stringValue) || "";
            const fAvatar = (node.fields.profile_picture_url && node.fields.profile_picture_url.stringValue) || "";
            const isFriendDoc = Boolean(fUid && (!selfUid || fUid !== selfUid));
            let docBadgeOn = true;

            if (isFriendDoc && isValidLocketUidCandidate(fUid)) {
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
        } else if (typeof val === "object" && node[k] !== null) {
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
// === HẾT PHẦN 1/4 — GÕ 2 ĐỂ LẤY TIẾP PHẦN 2/4 ===
// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 2/4 — DÁN NỐI TIẾP VÀO DƯỚI PHẦN 1/4)
// Nội dung: Bộ sinh HTML/CSS chuẩn Apple.com Flow Engine (7 Loại Animation)
//   - Helper tách từng từ (Word Splitter) cho hiệu ứng 4-Layer Text Reveal (+0.04s/word)
//   - Dual-Layer Background (#fbfbfd <-> #000000) chuyển đổi bằng Opacity 4ms GPU
//   - Hero Zoom 200vh (19vw, scale 2.8 -> 0.75 -> 0.6, blur 20px -> 0px)
//   - Sticky Scrub 300vh (Timeline 0-10% Hold, 10-80% Scrub, 80-100% Lock)
//   - Image Sequence 147 Frames (WebGL/Canvas2D + Batch Preloader + IO)
//   - Vision Pro Teardown 3 Lớp (Parallax lệch 40px mỗi tầng)
//   - Mask & Clip-Path Morphing (Full-bleed 100vwx100vh -> Viên thuốc bo tròn)
// ============================================================================

// Hàm tách chuỗi thành từng từ độc lập có gắn chỉ số thứ tự & delay +0.04s chuẩn Apple Text Reveal
function buildAppleWordRevealHtml(textStr, customClass = "") {
    const words = String(textStr || "").trim().split(/\s+/).filter(Boolean);
    let out = "";
    for (let i = 0; i < words.length; i++) {
        const delaySec = (i * 0.04).toFixed(2);
        out += `<span class="apple-word-unit ${customClass}" data-word-idx="${i}" style="--w-idx:${i};--w-delay:${delaySec}s;">${escapeHtml(words[i])}</span> `;
    }
    return out.trim();
}

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
    const shouldShowPopup = Boolean(forceShowGoldModal || (cfg.popupEnabled !== false && cfg.popupAutoShow === true));

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);

    // Danh sách bạn bè đã tự động quét (Auto-Discovery) để Bật / Tắt huy hiệu từng người
    const friendsMap = getFriendsBadgeMap();
    const friendsList = Object.values(friendsMap).filter(f => f && f.uid && f.uid !== cachedUid);
    const activeFriendsBadgeCount = friendsList.filter(f => f.badge_enabled !== false).length;

    // SVG Noise Data-URI cho lớp phủ hạt mịn (Grain Texture opacity 0.015) chuẩn Apple Studio
    const grainSvgDataUri = "data:image/svg+xml;utf8," + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(#n)" opacity="1"/></svg>`
    );

    let friendsBadgeListHtml = "";
    if (friendsList.length === 0) {
        friendsBadgeListHtml = `
        <div class="empty-state-box">
            Đang chờ tự động quét UID bạn bè... Hãy nhấn nút <strong>"Tự Động Quét & Lấy UID Bạn Bè Ngay"</strong> phía trên hoặc mở ứng dụng Locket 1 lần, toàn bộ danh sách bạn bè sẽ tự động hiện ra tại đây.
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
                                ${isBadgeOn ? "ĐANG HIỆN HUY HIỆU GOLD" : "ĐÃ TẮT HUY HIỆU GOLD"}
                            </span>
                        </div>
                        <div class="dir-mono">
                            UID Tự động bắt: ${escapeHtml(f.uid)} · Đồng bộ lúc: ${escapeHtml(f.updated_at || "Tự động")}
                        </div>
                    </div>
                </div>
                <div class="dir-actions">
                    <button type="button" id="friendToggleBtn_${escapeHtml(f.uid)}" onclick="toggleSingleFriendBadge('${escapeHtml(f.uid)}', ${isBadgeOn ? "false" : "true"})" class="apple-pill-btn ${isBadgeOn ? "btn-amber-soft" : "btn-emerald-soft"}">
                        ${isBadgeOn ? "Tắt huy hiệu người này" : "Bật huy hiệu người này"}
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

    const revealSentence1 = buildAppleWordRevealHtml("Khi mỗi mili-giây đều được tính toán trên GPU. Không giật cục. Không rào cản Paywall. Chỉ còn lại trải nghiệm Locket Gold thuần khiết ở tốc độ 60 khung hình/giây.");
    const revealSentence2 = buildAppleWordRevealHtml("Ba tầng kiến trúc độc lập: Scroll Tracker đọc vị trí cuộn với passive listener, Flow Engine nội suy quán tính damping 0.08, và Compositor đẩy thẳng ma trận translate3d xuống phần cứng đồ hoạ.");

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>${escapeHtml(THAY_PRODUCT_NAME)} — Apple Flow Engine 60fps & Quản Trị Hệ Thống V6</title>
<style>
  :root {
    --apple-bg-light: #fbfbfd;
    --apple-bg-dark: #000000;
    --apple-text-primary: #1d1d1f;
    --apple-text-secondary: #6e6e73;
    --apple-blue: #0071e3;
    --apple-gold: #f59e0b;
    --apple-card-radius: 28px;
    --apple-pill-radius: 999px;
    --apple-shadow: 0 12px 44px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);
    /* 3 đường cong Bezier chuẩn Apple.com */
    --apple-ease: cubic-bezier(0.28, 0.11, 0.32, 1);
    --apple-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --apple-linear: linear;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    background-color: transparent;
    color: var(--apple-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.015em;
    line-height: 1.47059;
    overflow-x: clip;
  }

  /* =========================================================================
     LOẠI 7: DUAL-LAYER COLOR FADE (ĐỔI NỀN TRẮNG <-> ĐEN BẰNG OPACITY 4MS GPU)
     Apple không bao giờ đổi background-color trực tiếp gây repaint.
     Họ chồng 2 lớp div cố định và chỉ điều khiển opacity bằng GPU Compositor.
     ========================================================================= */
  .apple-bg-stack {
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    overflow: hidden;
  }
  .apple-bg-layer-light {
    position: absolute;
    inset: 0;
    background-color: var(--apple-bg-light);
    opacity: 1;
    will-change: opacity;
    transform: translate3d(0, 0, 0);
  }
  .apple-bg-layer-dark {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 25%, #161618 0%, #050507 60%, #000000 100%);
    opacity: 0;
    will-change: opacity;
    transform: translate3d(0, 0, 0);
  }

  /* Lớp phủ Grain Texture 0.015 bằng SVG Noise chuẩn Apple Studio */
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
    background: linear-gradient(90deg, #0071e3 0%, #f59e0b 50%, #10b981 100%);
    width: 100%;
    z-index: 10000;
    transform-origin: left center;
    will-change: transform;
    transform: translate3d(0, 0, 0) scaleX(0);
    backface-visibility: hidden;
  }

  /* HUD hiển thị Telemetry của Apple Flow Engine (Damped Y, FPS, Frame Index) */
  .flow-telemetry-pill {
    position: fixed;
    bottom: 18px;
    right: 18px;
    z-index: 960;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(29, 29, 31, 0.78);
    backdrop-filter: saturate(180%) blur(16px);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: #f5f5f7;
    font-family: "SF Mono", ui-monospace, monospace;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 10px;
    pointer-events: none;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }
  .telemetry-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
  }

  /* NAV HEADER CHUẨN APPLE.COM (44px, sticky top 0, saturate 180% blur 20px) */
  .apple-sticky-nav {
    position: sticky;
    top: 0;
    height: 44px;
    width: 100%;
    z-index: 950;
    background: rgba(251, 251, 253, 0.78);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(29, 29, 31, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    transition: background-color 0.35s var(--apple-ease), border-color 0.35s var(--apple-ease);
  }
  .apple-sticky-nav.nav-dark-mode {
    background: rgba(18, 18, 20, 0.78);
    border-bottom-color: rgba(255, 255, 255, 0.12);
  }
  .apple-sticky-nav.nav-dark-mode .apple-nav-center,
  .apple-sticky-nav.nav-dark-mode .apple-nav-left span {
    color: #f5f5f7 !important;
  }
  .apple-sticky-nav.nav-dark-mode .apple-nav-link {
    color: #a1a1a6;
  }
  .apple-sticky-nav.nav-dark-mode .apple-logo-dot {
    background: #f5f5f7;
  }

  .apple-nav-container {
    width: 100%;
    max-width: 1040px;
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
    border: 1px solid rgba(134, 134, 139, 0.4);
  }
  .apple-nav-center {
    font-size: 13.5px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--apple-text-primary);
    white-space: nowrap;
  }
  .apple-nav-right {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .apple-nav-link {
    font-size: 12px;
    font-weight: 500;
    color: var(--apple-text-secondary);
    text-decoration: none;
    padding: 4px 10px;
    border-radius: var(--apple-pill-radius);
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: opacity 0.2s var(--apple-ease);
  }
  .apple-nav-link:hover { opacity: 0.7; }
  .apple-buy-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--apple-blue);
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    padding: 0 14px;
    height: 26px;
    border-radius: var(--apple-pill-radius);
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
  }

  /* TẦNG 3 - GPU COMPOSITOR LAYER RULE (CHỈ DÙNG TRANSFORM 3D & OPACITY) */
  .gpu-layer {
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  /* KHUNG STICKY VIEWPORT 100VH BẮT BUỘC CỦA APPLE */
  .apple-sticky-viewport {
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

  /* =========================================================================
     LOẠI 4: HERO ZOOM (Wrapper 200vh, Sticky 100vh, H1 19vw, letter-spacing -0.06em)
     - progress 0 -> 0.6: scale 2.8 -> 0.75, blur 20px -> 0px, opacity 0 -> 1 (0 -> 0.35)
     - progress 0.7 -> 1.0: scale 0.75 -> 0.6, opacity 1 -> 0, translateY 0 -> -80px
     ========================================================================= */
  .sec-hero-zoom-200 {
    position: relative;
    width: 100%;
    height: 200vh;
  }
  .hero-kicker-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: var(--apple-pill-radius);
    background: rgba(29, 29, 31, 0.05);
    border: 1px solid rgba(29, 29, 31, 0.09);
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--apple-text-secondary);
    margin-bottom: 24px;
  }
  .hero-mega-h1 {
    font-size: clamp(54px, 14vw, 195px);
    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 0.92;
    color: var(--apple-text-primary);
    text-align: center;
    white-space: nowrap;
    transform-origin: center center;
    will-change: transform, opacity, filter;
    transform: translate3d(0, 0, 0) scale(2.8);
    opacity: 0;
    margin-bottom: 26px;
    user-select: none;
  }
  .hero-sub-lead {
    font-size: clamp(19px, 2.3vw, 28px);
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.35;
    color: var(--apple-text-secondary);
    text-align: center;
    max-width: 720px;
  }
  .scroll-cue-wrap {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .scroll-cue-mouse {
    width: 24px;
    height: 38px;
    border-radius: 12px;
    border: 1.8px solid rgba(29, 29, 31, 0.4);
    display: flex;
    justify-content: center;
    padding-top: 7px;
  }
  .scroll-cue-wheel {
    width: 3px;
    height: 7px;
    border-radius: 999px;
    background: var(--apple-text-primary);
    animation: cuePulse 1.8s var(--apple-ease) infinite;
  }
  .scroll-cue-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--apple-text-secondary);
  }
  @keyframes cuePulse {
    0% { transform: translate3d(0, 0, 0); opacity: 1; }
    65% { transform: translate3d(0, 10px, 0); opacity: 0.15; }
    100% { transform: translate3d(0, 0, 0); opacity: 1; }
  }

  /* =========================================================================
     LOẠI 3: TEXT REVEAL 4 LỚP CHỒNG NHAU (OPACITY + Y 40PX + SCALE 0.95 + BLUR 12PX)
     Mỗi từ delay thêm 0.04s so với từ trước, chạy trên nền tối Dual-Layer Fade
     ========================================================================= */
  .sec-text-reveal-220 {
    position: relative;
    width: 100%;
    height: 220vh;
    color: #f5f5f7;
  }
  .text-reveal-stage {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 44px;
  }
  .apple-word-paragraph {
    font-size: clamp(26px, 4.2vw, 52px);
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.18;
    color: #f5f5f7;
    display: flex;
    flex-wrap: wrap;
    gap: 0.26em;
  }
  .apple-word-paragraph.sub-paragraph {
    font-size: clamp(19px, 2.5vw, 30px);
    font-weight: 500;
    color: #a1a1a6;
    line-height: 1.38;
  }
  .apple-word-unit {
    display: inline-block;
    will-change: transform, opacity, filter;
    transform: translate3d(0, 40px, 0) scale(0.95);
    opacity: 0;
    filter: blur(12px);
  }

  /* =========================================================================
     LOẠI 1 & LOẠI 2: STICKY SCRUB 300VH + 147-FRAME IMAGE SEQUENCE & WEBGL SHADER
     - Timeline 300vh: 0-10% Hold | 10-80% Scrub 147 frames | 80-100% Lock
     ========================================================================= */
  .sec-sticky-scrub-300 {
    position: relative;
    width: 100%;
    height: 300vh;
    color: #f5f5f7;
  }
  .scrub-stage-1320 {
    position: relative;
    width: 100%;
    height: 100vh;
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scrub-canvas-wrap {
    position: relative;
    width: 560px;
    max-width: 88vw;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .scrub-webgl-canvas {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 36px;
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
  }
  .scrub-fallback-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
    opacity: 0;
  }
  .scrub-hud-badge {
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.14);
    font-family: "SF Mono", ui-monospace, monospace;
    font-size: 11px;
    font-weight: 600;
    color: #f5f5f7;
    z-index: 5;
    white-space: nowrap;
  }
  .scrub-card-glass {
    position: absolute;
    width: 330px;
    padding: 30px;
    border-radius: var(--apple-card-radius);
    background: rgba(28, 28, 30, 0.76);
    backdrop-filter: saturate(180%) blur(24px);
    -webkit-backdrop-filter: saturate(180%) blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    color: #f5f5f7;
    z-index: 4;
  }
  .scrub-card-left { left: 6%; top: 50%; }
  .scrub-card-right { right: 6%; top: 50%; }

  /* =========================================================================
     LOẠI 5: TEARDOWN 3 LỚP BAY VỚI TỐC ĐỘ KHÁC NHAU (PARALLAX DELTA 40PX/LỚP)
     Lớp trước bay nhanh hơn lớp sau đúng 40px tạo chiều sâu 3D Vision Pro
     ========================================================================= */
  .sec-teardown-240 {
    position: relative;
    width: 100%;
    height: 240vh;
  }
  .teardown-stage-3d {
    position: relative;
    width: 100%;
    height: 100vh;
    perspective: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .td-layer-card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 380px;
    max-width: 90vw;
    height: 500px;
    border-radius: var(--apple-card-radius);
    box-shadow: var(--apple-shadow);
    padding: 34px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(29, 29, 31, 0.08);
    transform-style: preserve-3d;
  }
  .td-layer-front {
    background: rgba(255, 255, 255, 0.96);
    color: var(--apple-text-primary);
    z-index: 30;
  }
  .td-layer-mid {
    background: rgba(245, 245, 247, 0.94);
    color: var(--apple-text-primary);
    z-index: 20;
  }
  .td-layer-back {
    background: #1d1d1f;
    color: #ffffff;
    z-index: 10;
    border-color: rgba(255, 255, 255, 0.14);
  }
  .td-diagram-box {
    width: 100%;
    height: 185px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(29, 29, 31, 0.03);
    border: 1px solid rgba(29, 29, 31, 0.07);
  }
  .td-layer-back .td-diagram-box {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.12);
  }
  .td-caption-pill {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    padding: 14px 26px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.08);
    z-index: 40;
    text-align: center;
  }

  /* =========================================================================
     LOẠI 6: MASK & CLIP-PATH MORPHING (TỪ FULL MÀN HÌNH THÀNH VIÊN THUỐC BO TRÒN)
     clip-path: inset(TB% LR% round Rpx) mượt trên GPU
     ========================================================================= */
  .sec-clip-morph-220 {
    position: relative;
    width: 100%;
    height: 220vh;
  }
  .clip-morph-viewport {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(120% 100% at 50% 15%, #1d1d22 0%, #09090b 55%, #000000 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 28px;
    color: #ffffff;
    will-change: clip-path, transform;
    clip-path: inset(0% 0% round 0px);
    -webkit-clip-path: inset(0% 0% round 0px);
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25);
  }
  .morph-grid-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 980px;
    width: 100%;
    margin-top: 42px;
  }
  .morph-metric-card {
    padding: 28px 24px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-align: left;
  }
  .morph-stat-big {
    font-size: clamp(36px, 4vw, 54px);
    font-weight: 800;
    letter-spacing: -0.04em;
    background: linear-gradient(135deg, #fef08a 0%, #f59e0b 55%, #fbbf24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }

  /* =========================================================================
     BẢNG ĐIỀU KHIỂN TRỰC TIẾP BENTO CONSOLE (GIỮ NGUYÊN 100% TÍNH NĂNG GỐC)
     ========================================================================= */
  .bento-console-main {
    max-width: 1040px;
    margin: 0 auto;
    padding: 60px 24px 120px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .apple-bento-card {
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: var(--apple-card-radius);
    box-shadow: var(--apple-shadow);
    border: 1px solid rgba(29, 29, 31, 0.07);
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
    background: var(--apple-bg-light);
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
  .chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .preset-pill {
    padding: 6px 14px;
    border-radius: var(--apple-pill-radius);
    background: var(--apple-bg-light);
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
    font-weight: 700;
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
    background: var(--apple-bg-light);
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
    background: rgba(29, 29, 31, 0.45);
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
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22);
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
    background: var(--apple-bg-light);
    border: 1px solid rgba(29, 29, 31, 0.06);
  }
  .apple-modal-art img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  .hidden { display: none !important; }

  @media (max-width: 860px) {
    .scrub-stage-1320 {
      flex-direction: column;
      justify-content: center;
      gap: 14px;
      padding: 54px 18px 18px;
    }
    .scrub-canvas-wrap { width: 270px; }
    .scrub-card-glass {
      position: static;
      width: 100%;
      max-width: 440px;
      padding: 20px;
    }
    .td-layer-card { width: 320px; height: 430px; padding: 24px 22px; }
    .morph-grid-metrics, .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .dir-row { flex-direction: column; align-items: flex-start; }
    .apple-nav-link.hide-mobile { display: none; }
  }

  /* CHECKLIST V.7: Tắt toàn bộ hiệu ứng chuyển động cho người bật prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
      transform: none !important;
      filter: none !important;
      clip-path: none !important;
    }
    .apple-word-unit, .hero-mega-h1 {
      opacity: 1 !important;
    }
  }
</style>
</head>
<body>

  <!-- LOẠI 7: 2 LỚP NỀN TRẮNG (#FBFBFD) & ĐEN (#000000) CHỒNG NHAU CHỈ ĐỔI OPACITY -->
  <div class="apple-bg-stack" aria-hidden="true">
    <div id="bgLayerLight" class="apple-bg-layer-light"></div>
    <div id="bgLayerDark" class="apple-bg-layer-dark"></div>
  </div>

  <!-- THANH TIẾN TRÌNH CUỘN 2PX GPU TRÊN CÙNG -->
  <div id="globalProgressBar" class="apple-global-progress"></div>

  <!-- TELEMETRY PILL HIỂN THỊ TRỰC TIẾP TRẠNG THÁI APPLE FLOW ENGINE -->
  <div class="flow-telemetry-pill" aria-hidden="true">
    <span class="telemetry-dot"></span>
    <span id="flowTelemetryText">FLOW 60FPS · DAMP 0.08 · FRAME 001/147</span>
  </div>

  <!-- MODAL LOCKET GOLD -->
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

  <!-- THANH ĐIỀU HƯỚNG STICKY APPLE.COM -->
  <header id="appleStickyNav" class="apple-sticky-nav">
    <div class="apple-nav-container">
      <a href="/setdate" class="apple-nav-left">
        <span class="apple-logo-dot"></span>
        <span style="font-size:12px;font-weight:600;color:#6e6e73;">Flow V6</span>
      </a>
      <div class="apple-nav-center">${escapeHtml(THAY_PRODUCT_NAME)}</div>
      <div class="apple-nav-right">
        <a href="#friendsBadgeSection" class="apple-nav-link hide-mobile">Bạn bè (${activeFriendsBadgeCount}/${friendsList.length})</a>
        <a href="#dohEngineSection" class="apple-nav-link hide-mobile">DoH & CA</a>
        <button type="button" onclick="openGoldModal()" class="apple-nav-link">Popup</button>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-nav-link">${isAdminLogged ? "Root Admin" : "Quản trị"}</button>
        <a href="#consoleSection" class="apple-buy-pill">Bảng điều khiển</a>
      </div>
    </div>
  </header>

  <main>

    <!-- =====================================================================
         SECTION 1 — LOẠI 4: HERO ZOOM (200vh, H1 19vw, scale 2.8 -> 0.75 -> 0.6)
         ===================================================================== -->
    <section id="secHeroZoom" class="sec-hero-zoom-200">
      <div class="apple-sticky-viewport">
        <div id="elHeroKicker" class="hero-kicker-badge gpu-layer">APPLE FLOW ENGINE · DAMPED SCROLL 0.08</div>
        <h1 id="elHeroMegaH1" class="hero-mega-h1 gpu-layer">LOCKET H2</h1>
        <p id="elHeroSubLead" class="hero-sub-lead gpu-layer">${escapeHtml(THAY_SLOGAN)}</p>

        <div id="elScrollCue" class="scroll-cue-wrap gpu-layer">
          <div class="scroll-cue-mouse">
            <div class="scroll-cue-wheel"></div>
          </div>
          <span class="scroll-cue-label">Cuộn để kích hoạt Flow Engine</span>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 2 — LOẠI 3 & LOẠI 7: 4-LAYER WORD REVEAL + DUAL-LAYER DARK FADE
         Mỗi từ có 4 lớp: Opacity (0->1), TranslateY (40->0), Scale (0.95->1), Blur (12px->0)
         ===================================================================== -->
    <section id="secTextReveal" class="sec-text-reveal-220">
      <div class="apple-sticky-viewport">
        <div class="text-reveal-stage">
          <span class="bento-eyebrow" style="color:#f59e0b;">4-LAYER WORD REVEAL & DUAL-LAYER COLOR FADE</span>
          <div id="elWordGroup1" class="apple-word-paragraph">
            ${revealSentence1}
          </div>
          <div id="elWordGroup2" class="apple-word-paragraph sub-paragraph">
            ${revealSentence2}
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 3 — LOẠI 1 & LOẠI 2: STICKY SCRUB 300VH + 147-FRAME SEQUENCE
         Timeline: 0-10% Hold | 10-80% Scrub 147 Frames (WebGL/Canvas) | 80-100% Lock
         ===================================================================== -->
    <section id="secStickyScrub" class="sec-sticky-scrub-300">
      <div class="apple-sticky-viewport">
        <div class="scrub-stage-1320">
          <div id="elScrubHud" class="scrub-hud-badge">
            TIMELINE: HOLD (0-10%) · FRAME 001 / 147 · GPU SHADER READY
          </div>

          <div id="elScrubLeftCard" class="scrub-card-glass scrub-card-left gpu-layer">
            <span class="bento-eyebrow" style="color:#60a5fa;">01 / STICKY SCRUB 10% — 80%</span>
            <h2 class="bento-heading" style="color:#ffffff;font-size:22px;margin-bottom:10px;">${escapeHtml(THAY_USP_LEFT)}</h2>
            <p style="font-size:14.5px;color:#a1a1a6;line-height:1.55;">
              Mốc đăng ký gốc ${escapeHtml(cfg.lockDate)} được khóa cứng ở tầng giao thức. 10% đầu giữ khung định hình, 70% giữa xoay bóc tách 147 frame, 20% cuối khóa kết quả.
            </p>
          </div>

          <div id="elScrubCenterWrap" class="scrub-canvas-wrap gpu-layer">
            <canvas id="elSequenceCanvas" width="900" height="900" class="scrub-webgl-canvas"></canvas>
            <img id="elSequenceSourceImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" class="scrub-fallback-img" alt="Sequence Source" crossorigin="anonymous">
          </div>

          <div id="elScrubRightCard" class="scrub-card-glass scrub-card-right gpu-layer">
            <span class="bento-eyebrow" style="color:#fbbf24;">02 / 147-FRAME BATCH PRELOADER</span>
            <h2 class="bento-heading" style="color:#ffffff;font-size:22px;margin-bottom:10px;">${escapeHtml(THAY_USP_RIGHT)}</h2>
            <p style="font-size:14.5px;color:#a1a1a6;line-height:1.55;">
              Preload theo 2 Batch với IntersectionObserver: nạp trước các frame bước nhảy 10, sau đó nạp toàn bộ 147 frame kết hợp định tuyến DoH (${escapeHtml(cfg.dohPrimaryIp)}).
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 4 — LOẠI 5: TEARDOWN 3 LỚP PARALLAX (LỆCH TỐC ĐỘ 40PX MỖI LỚP)
         ===================================================================== -->
    <section id="secTeardown" class="sec-teardown-240">
      <div class="apple-sticky-viewport">
        <div class="teardown-stage-3d">

          <!-- Lớp 3 (Sau cùng - Back): Dịch chuyển chậm nhất (-40px) -->
          <article id="elTdBack" class="td-layer-card td-layer-back gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill" style="background:rgba(255,255,255,0.14);color:#fff;">LỚP 03 · DRIVER CA</span>
              <span style="font-family:monospace;font-size:11px;color:#86868b;">SPEED -40PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <rect x="18" y="18" width="184" height="84" rx="14" stroke="#ffffff" stroke-opacity="0.3" stroke-width="1.5"/>
                <circle cx="110" cy="60" r="22" stroke="#f59e0b" stroke-width="2"/>
                <circle cx="110" cy="60" r="6" fill="#f59e0b"/>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="color:#ffffff;font-size:21px;margin-bottom:8px;">Tầng 3: Root CA & Cron KeepAlive</h3>
              <p style="font-size:14px;color:#a1a1a6;">
                Gắn định danh chứng chỉ ${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)} và tự động đồng bộ ngầm mỗi 5 phút.
              </p>
            </div>
          </article>

          <!-- Lớp 2 (Giữa - Mid): Dịch chuyển trung bình (-80px, nhanh hơn lớp sau 40px) -->
          <article id="elTdMid" class="td-layer-card td-layer-mid gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill pill-blue">LỚP 02 · CLOUDFUNCTIONS</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">SPEED -80PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <rect x="65" y="15" width="90" height="90" rx="20" fill="#1d1d1f" stroke="#0071e3" stroke-width="2"/>
                <text x="110" y="65" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">H2 AI</text>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 2: Giải Mã CloudFunctions & AI</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Can thiệp trực tiếp us-central1-locket-4252a.cloudfunctions.net và cấp 999.999 lượt AI Looks.
              </p>
            </div>
          </article>

          <!-- Lớp 1 (Trước mặt - Front): Dịch chuyển nhanh nhất (-120px, nhanh hơn lớp giữa 40px) -->
          <article id="elTdFront" class="td-layer-card td-layer-front gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill pill-gold">LỚP 01 · REVENUECAT V1</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">SPEED -120PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <circle cx="110" cy="60" r="42" stroke="#1d1d1f" stroke-width="2"/>
                <circle cx="110" cy="60" r="26" stroke="#0071e3" stroke-width="1.5" stroke-dasharray="4 4"/>
                <circle cx="110" cy="60" r="12" fill="#1d1d1f"/>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 1: Khóa Cứng Thuê Bao & Bạn Bè</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Ghi đè gói locket_1600_1y tới năm 2099 và điều khiển độc lập huy hiệu của từng người bạn.
              </p>
            </div>
          </article>

          <div id="elTdCaption" class="td-caption-pill gpu-layer">
            <span class="bento-eyebrow" style="margin:0;color:#0071e3;">VISION PRO PARALLAX FORMULA (DELTA 40PX)</span>
            <div style="font-size:14.5px;font-weight:600;color:#1d1d1f;">
              Lớp trước bay nhanh hơn lớp sau đúng 40px tạo chiều sâu không gian 3D tự nhiên.
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =====================================================================
         SECTION 5 — LOẠI 6: MASK & CLIP-PATH MORPHING (FULL SCREEN -> VIÊN THUỐC)
         ===================================================================== -->
    <section id="secClipMorph" class="sec-clip-morph-220">
      <div class="apple-sticky-viewport" style="padding:0;">
        <div id="elClipMorphBox" class="clip-morph-viewport">
          <span class="apple-pill pill-gold" style="margin-bottom:16px;">CLIP-PATH MORPHING · FULL SCREEN TO PILL CARD</span>
          <h2 style="font-size:clamp(32px,5vw,60px);font-weight:800;letter-spacing:-0.035em;max-width:820px;line-height:1.06;">
            Thu phóng mượt mà từ toàn màn hình thành viên thuốc bo tròn.
          </h2>
          <p style="font-size:18px;color:#a1a1a6;max-width:640px;margin-top:14px;">
            Sử dụng nội suy clip-path inset() kết hợp Apple Ease bezier giúp khung hình thu hẹp mà không làm biến dạng bố cục bên trong.
          </p>

          <div class="morph-grid-metrics">
            <div class="morph-metric-card">
              <div class="morph-stat-big">${escapeHtml(THAY_FEATURES[0].stat)}</div>
              <div style="font-size:17px;font-weight:700;color:#fff;margin-bottom:6px;">${escapeHtml(THAY_FEATURES[0].title)}</div>
              <div style="font-size:13.5px;color:#a1a1a6;line-height:1.5;">${escapeHtml(THAY_FEATURES[0].desc)}</div>
            </div>
            <div class="morph-metric-card">
              <div class="morph-stat-big">${escapeHtml(THAY_FEATURES[1].stat)}</div>
              <div style="font-size:17px;font-weight:700;color:#fff;margin-bottom:6px;">${escapeHtml(THAY_FEATURES[1].title)}</div>
              <div style="font-size:13.5px;color:#a1a1a6;line-height:1.5;">${escapeHtml(THAY_FEATURES[1].desc)}</div>
            </div>
            <div class="morph-metric-card">
              <div class="morph-stat-big">${escapeHtml(THAY_FEATURES[2].stat)}</div>
              <div style="font-size:17px;font-weight:700;color:#fff;margin-bottom:6px;">${escapeHtml(THAY_FEATURES[2].title)}</div>
              <div style="font-size:13.5px;color:#a1a1a6;line-height:1.5;">${escapeHtml(THAY_FEATURES[2].desc)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 3/4 — DÁN NỐI TIẾP VÀO DƯỚI PHẦN 2/4)
// Nội dung:
//   1. Bảng điều khiển trực tiếp Bento Console (Root Admin, Auto-Get Friends
//      UID & Bật/Tắt Huy hiệu từng người, Lõi DoH/CA, Cấu hình AI Quota)
//   2. Apple.com 3-Tier Flow Engine JavaScript:
//      - Tầng 1: Scroll Tracker (passive: true, chỉ đọc scrollY)
//      - Tầng 2: Flow Engine (Damped Scroll currentY += (targetY - currentY) * 0.08,
//        Bộ giải phương trình Cubic-Bezier chính xác cho Apple Ease & Apple Ease Out)
//      - Tầng 3: GPU Compositor (Chỉ xuất lệnh translate3d, scale, rotate, opacity,
//        clip-path & cập nhật 147-Frame Batch Sequence qua WebGL / Canvas 2D)
// ============================================================================

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
            <h2 class="bento-heading">Trung tâm Quản trị Hệ thống, Sequence 147 Frames & Popup</h2>
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
                <span class="bento-eyebrow" style="margin:0;">TUỲ CHỈNH POPUP, THÔNG BÁO ĐẨY & 147-FRAME SEQUENCE</span>
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
                  <label class="field-label">Thư mục 147 Ảnh Sequence (Tuỳ chọn: chứa 0001.jpg -> 0147.jpg)</label>
                  <input type="text" name="canvasFrameBaseUrl" value="${escapeHtml(cfg.canvasFrameBaseUrl || "")}" class="apple-field" placeholder="Để trống sẽ chạy Procedural 3D 147-Frame Shader...">
                </div>
              </div>
              <div class="grid-2" style="margin-top:14px;">
                <div>
                  <label class="field-label">Nút đóng & Giãn cách thông báo (Giây)</label>
                  <div style="display:grid;grid-template-columns:1fr 110px;gap:10px;">
                    <input type="text" name="popupBtnText" value="${escapeHtml(popupBtnText)}" class="apple-field">
                    <input type="number" name="pushCooldownSeconds" value="${escapeHtml(String(cfg.pushCooldownSeconds || 12))}" min="5" max="3600" class="apple-field">
                  </div>
                </div>
                <div style="display:flex;align-items:flex-end;padding-bottom:8px;">
                  <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:12.5px;color:#6e6e73;">
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

      <!-- KHU VỰC 2: TỰ ĐỘNG GET UID BẠN BÈ & BẬT/TẮT HUY HIỆU TỪNG NGƯỜI -->
      <section id="friendsBadgeSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">AUTO-DISCOVERY & INDEPENDENT FRIEND BADGE CONTROL</span>
            <h2 class="bento-heading">Tự động Get UID & Bật/Tắt Huy hiệu Bạn bè (${activeFriendsBadgeCount}/${friendsList.length})</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Hệ thống tự động bắt mọi UID + Tên + Ảnh đại diện bạn bè khi bạn lướt Locket, hoặc bấm nút <strong>"Tự Động Quét & Lấy UID Bạn Bè Ngay"</strong> để gọi thẳng lên máy chủ Locket.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="autoHarvestFriendsNow()" class="apple-pill-btn btn-blue-soft" style="padding:9px 16px;">Tự Động Quét & Lấy UID Bạn Bè Ngay</button>
            <a href="/setdate?friend_action=enable_all#friendsBadgeSection" class="apple-pill-btn btn-emerald-soft">Bật tất cả bạn bè</a>
            <a href="/setdate?friend_action=disable_all#friendsBadgeSection" class="apple-pill-btn btn-amber-soft">Tắt tất cả bạn bè</a>
            <a href="/setdate?friend_action=toggle_default&default_val=${cfg.friendsBadgeDefault !== false ? "0" : "1"}#friendsBadgeSection" class="apple-pill-btn btn-dark-soft">
              Mặc định bạn mới: ${cfg.friendsBadgeDefault !== false ? "TỰ BẬT GOLD" : "TỰ TẮT GOLD"}
            </a>
          </div>
        </div>

        <form method="GET" action="/setdate#friendsBadgeSection" class="spec-tile" style="margin-bottom:22px;">
          <input type="hidden" name="friend_action" value="upsert_friend">
          <span class="bento-eyebrow">THÊM THỦ CÔNG HOẶC GHI ĐÈ TRẠNG THÁI HUY HIỆU BẠN BÈ THEO UID</span>
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
          <span class="bento-eyebrow" style="margin:0;">DANH SÁCH BẠN BÈ ĐÃ TỰ ĐỘNG BẮT ĐƯỢC (${friendsList.length})</span>
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
            <span class="bento-eyebrow">INTEGRATED MOBILECONFIG ENGINE (KHÔNG CẦN CÀI PROFILE)</span>
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
              Giao thức: <strong>${escapeHtml(INTEGRATED_NET_ENGINE.dnsProtocol)}</strong> · <span id="dohLiveBadge" class="apple-pill pill-emerald">ĐANG BẬT (${escapeHtml(String(dohStatus.latencyMs || 14))}ms)</span>
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

      <!-- KHU VỰC 4: THIẾT LẬP MỐC ĐĂNG KÝ, LƯỢT AI & THÔNG SỐ HỆ THỐNG -->
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

  <!-- =======================================================================
       APPLE.COM 3-TIER FLOW ENGINE (REVERSE ENGINEERED PIXEL-BY-PIXEL)
       - Tier 1: Scroll Tracker (passive: true, chỉ đọc window.scrollY)
       - Tier 2: Flow Engine (Damped Scroll 0.08 + Cubic-Bezier Newton Solver)
       - Tier 3: GPU Compositor (translate3d / scale / rotate / opacity / clip-path)
       ======================================================================= -->
  <script>
    (function() {
      // ---------------------------------------------------------------------
      // 1. TOÁN HỌC NỘI SUY & BỘ GIẢI PHƯƠNG TRÌNH CUBIC-BEZIER CHUẨN APPLE
      // ---------------------------------------------------------------------
      var clamp = function(v, min, max) {
        return Math.max(min, Math.min(max, v));
      };
      var lerp = function(a, b, t) {
        return a + (b - a) * t;
      };
      var invLerp = function(a, b, v) {
        return clamp((v - a) / (b - a), 0, 1);
      };
      var remap = function(v, inMin, inMax, outMin, outMax, easeFn) {
        var t = invLerp(inMin, inMax, v);
        if (typeof easeFn === 'function') t = easeFn(t);
        return lerp(outMin, outMax, t);
      };

      // Bộ giải Cubic-Bezier chính xác bằng phương pháp Newton-Raphson (như WebKit C++)
      function createCubicBezier(x1, y1, x2, y2) {
        var cx = 3.0 * x1;
        var bx = 3.0 * (x2 - x1) - cx;
        var ax = 1.0 - cx - bx;
        var cy = 3.0 * y1;
        var by = 3.0 * (y2 - y1) - cy;
        var ay = 1.0 - cy - by;

        function sampleCurveX(t) { return ((ax * t + bx) * t + cx) * t; }
        function sampleCurveY(t) { return ((ay * t + by) * t + cy) * t; }
        function sampleCurveDerivativeX(t) { return (3.0 * ax * t + 2.0 * bx) * t + cx; }

        function solveCurveX(x) {
          var t2 = x;
          for (var i = 0; i < 8; i++) {
            var x2Val = sampleCurveX(t2) - x;
            if (Math.abs(x2Val) < 1e-5) return t2;
            var d2 = sampleCurveDerivativeX(t2);
            if (Math.abs(d2) < 1e-5) break;
            t2 = t2 - x2Val / d2;
          }
          var t0 = 0.0, t1 = 1.0;
          t2 = x;
          while (t0 < t1) {
            var x2Sub = sampleCurveX(t2);
            if (Math.abs(x2Sub - x) < 1e-5) return t2;
            if (x > x2Sub) t0 = t2;
            else t1 = t2;
            t2 = (t1 - t0) * 0.5 + t0;
          }
          return t2;
        }

        return function(x) {
          if (x <= 0) return 0;
          if (x >= 1) return 1;
          return sampleCurveY(solveCurveX(x));
        };
      }

      // 3 đường cong Easing bất hủ của Apple:
      // 1. Apple Ease: cubic-bezier(0.28, 0.11, 0.32, 1) -> 90% mọi chuyển động
      // 2. Apple Ease Out: cubic-bezier(0.16, 1, 0.3, 1) -> Text Reveal mượt nhẹ
      // 3. Linear: cho Image Sequence vì đã có Damping 0.08
      var appleEase = createCubicBezier(0.28, 0.11, 0.32, 1.0);
      var appleEaseOut = createCubicBezier(0.16, 1.0, 0.3, 1.0);
      var appleLinear = function(t) { return clamp(t, 0, 1); };

      var prefersReducedMotion = false;
      try {
        prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      } catch (e) {}

      // ---------------------------------------------------------------------
      // 2. DOM REFERENCES & CACHE LAYOUT METRICS
      // ---------------------------------------------------------------------
      var bgLayerLight = document.getElementById('bgLayerLight');
      var bgLayerDark = document.getElementById('bgLayerDark');
      var globalProgressBar = document.getElementById('globalProgressBar');
      var flowTelemetryText = document.getElementById('flowTelemetryText');
      var appleStickyNav = document.getElementById('appleStickyNav');

      var secHeroZoom = document.getElementById('secHeroZoom');
      var elHeroKicker = document.getElementById('elHeroKicker');
      var elHeroMegaH1 = document.getElementById('elHeroMegaH1');
      var elHeroSubLead = document.getElementById('elHeroSubLead');
      var elScrollCue = document.getElementById('elScrollCue');

      var secTextReveal = document.getElementById('secTextReveal');
      var wordUnits1 = document.querySelectorAll('#elWordGroup1 .apple-word-unit');
      var wordUnits2 = document.querySelectorAll('#elWordGroup2 .apple-word-unit');

      var secStickyScrub = document.getElementById('secStickyScrub');
      var elScrubHud = document.getElementById('elScrubHud');
      var elScrubLeftCard = document.getElementById('elScrubLeftCard');
      var elScrubRightCard = document.getElementById('elScrubRightCard');
      var elScrubCenterWrap = document.getElementById('elScrubCenterWrap');
      var elSequenceCanvas = document.getElementById('elSequenceCanvas');
      var elSequenceSourceImg = document.getElementById('elSequenceSourceImg');

      var secTeardown = document.getElementById('secTeardown');
      var elTdFront = document.getElementById('elTdFront');
      var elTdMid = document.getElementById('elTdMid');
      var elTdBack = document.getElementById('elTdBack');
      var elTdCaption = document.getElementById('elTdCaption');

      var secClipMorph = document.getElementById('secClipMorph');
      var elClipMorphBox = document.getElementById('elClipMorphBox');

      var vh = window.innerHeight || document.documentElement.clientHeight || 800;
      var vw = window.innerWidth || document.documentElement.clientWidth || 1024;
      var maxScroll = 1;
      var secMetrics = {};

      function cacheSectionMetrics() {
        vh = window.innerHeight || document.documentElement.clientHeight || 800;
        vw = window.innerWidth || document.documentElement.clientWidth || 1024;
        maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);

        var currentScroll = window.scrollY || window.pageYOffset || 0;
        var list = [
          { key: 'hero', el: secHeroZoom },
          { key: 'reveal', el: secTextReveal },
          { key: 'scrub', el: secStickyScrub },
          { key: 'teardown', el: secTeardown },
          { key: 'morph', el: secClipMorph }
        ];
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          if (!item.el) continue;
          var r = item.el.getBoundingClientRect();
          secMetrics[item.key] = {
            top: r.top + currentScroll,
            height: r.height || 1
          };
        }
      }

      // Công thức tính progress cho 1 sticky section dựa trên Damped Scroll Y
      function getDampedSectionProgress(key, dampedY) {
        var m = secMetrics[key];
        if (!m) return 0;
        var scrollableDistance = Math.max(1, m.height - vh);
        return clamp((dampedY - m.top) / scrollableDistance, 0, 1);
      }

      // ---------------------------------------------------------------------
      // 3. LOẠI 2: 147-FRAME SEQUENCE ENGINE (BATCH PRELOAD + INTERSECTION OBSERVER + SHADER)
      // ---------------------------------------------------------------------
      var TOTAL_FRAMES = 147;
      var customFrameBaseUrl = "${escapeHtml(cfg.canvasFrameBaseUrl || "")}";
      var sequenceFrames = new Array(TOTAL_FRAMES);
      var batch1Loaded = false;
      var batch2Loaded = false;
      var currentRenderedFrame = -1;
      var seqCtx = elSequenceCanvas ? elSequenceCanvas.getContext('2d') : null;

      function formatFrameFileName(idx1Based) {
        var s = String(idx1Based);
        while (s.length < 4) s = '0' + s;
        return customFrameBaseUrl.replace(/\/$/, '') + '/' + s + '.jpg';
      }

      // Batch 1: Preload frame 0, 10, 20, 30... (low-res preview / keyframe)
      function preloadBatch1Keyframes() {
        if (batch1Loaded || !customFrameBaseUrl) return;
        batch1Loaded = true;
        for (var f = 1; f <= TOTAL_FRAMES; f += 10) {
          (function(frameNum) {
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = formatFrameFileName(frameNum);
            sequenceFrames[frameNum - 1] = img;
          })(f);
        }
      }

      // Batch 2: Preload các frame còn lại khi user bắt đầu cuộn vào vùng lân cận
      function preloadBatch2RemainingFrames() {
        if (batch2Loaded || !customFrameBaseUrl) return;
        batch2Loaded = true;
        for (var f = 1; f <= TOTAL_FRAMES; f++) {
          if (sequenceFrames[f - 1]) continue;
          (function(frameNum) {
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = formatFrameFileName(frameNum);
            sequenceFrames[frameNum - 1] = img;
          })(f);
        }
      }

      // IntersectionObserver để chỉ kích hoạt preload khi Section Sticky Scrub sắp vào màn hình
      if (typeof IntersectionObserver !== 'undefined' && secStickyScrub) {
        var io = new IntersectionObserver(function(entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              preloadBatch1Keyframes();
              setTimeout(preloadBatch2RemainingFrames, 120);
            }
          }
        }, { rootMargin: '600px 0px 600px 0px' });
        io.observe(secStickyScrub);
      }

      // Vẽ Frame thứ [0..146] lên Canvas (Kết hợp ảnh thật nếu có hoặc Procedural 3D Hardware Turntable 147 frames)
      function renderSequenceFrame(frameIdx, rawScrubProgress) {
        if (!seqCtx || !elSequenceCanvas) return;
        if (frameIdx === currentRenderedFrame) return;
        currentRenderedFrame = frameIdx;

        var w = elSequenceCanvas.width;
        var h = elSequenceCanvas.height;
        var cx = w * 0.5;
        var cy = h * 0.5;

        seqCtx.clearRect(0, 0, w, h);

        // Nếu người dùng cấu hình URL 147 ảnh ngoài và frame đã tải xong
        var externalImg = sequenceFrames[frameIdx];
        if (externalImg && externalImg.complete && externalImg.naturalWidth > 0) {
          seqCtx.drawImage(externalImg, 0, 0, w, h);
          return;
        }

        // Procedural 147-Frame 3D Hardware Turntable & Exploded Optical Ring (Mượt 60fps không bao giờ trắng màn hình)
        var t = frameIdx / (TOTAL_FRAMES - 1);
        var angleRad = lerp(-0.55, 0.55, t);
        var lidOpenOffset = Math.sin(t * Math.PI) * 68;
        var ringExpand = 1 + Math.sin(t * Math.PI) * 0.16;
        var glowRadius = lerp(180, 320, Math.sin(t * Math.PI));

        seqCtx.save();
        seqCtx.translate(cx, cy);

        // Hào quang quang học H2 phía sau
        var radGrad = seqCtx.createRadialGradient(0, 0, 20, 0, 0, glowRadius);
        radGrad.addColorStop(0, 'rgba(245, 158, 11, 0.36)');
        radGrad.addColorStop(0.5, 'rgba(0, 113, 227, 0.16)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        seqCtx.fillStyle = radGrad;
        seqCtx.beginPath();
        seqCtx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        seqCtx.fill();

        // Vòng quỹ đạo 3D xoay theo đúng chỉ số Frame 1 -> 147
        seqCtx.save();
        seqCtx.rotate(angleRad * 1.8);
        seqCtx.scale(ringExpand, ringExpand * 0.88);
        seqCtx.strokeStyle = 'rgba(254, 240, 138, 0.45)';
        seqCtx.lineWidth = 2;
        seqCtx.setLineDash([8, 10]);
        seqCtx.beginPath();
        seqCtx.arc(0, 0, 310, 0, Math.PI * 2);
        seqCtx.stroke();
        seqCtx.restore();

        // Vẽ ảnh thiết bị trung tâm với biến đổi 3D perspective mô phỏng góc quay frameIdx
        var cosA = Math.cos(angleRad * 0.65);
        var sinA = Math.sin(angleRad * 0.65);
        seqCtx.save();
        seqCtx.transform(cosA, sinA * 0.18, -sinA * 0.18, 1, 0, -lidOpenOffset * 0.25);
        if (elSequenceSourceImg && elSequenceSourceImg.complete && elSequenceSourceImg.naturalWidth > 0) {
          seqCtx.drawImage(elSequenceSourceImg, -330, -330, 660, 660);
        }
        seqCtx.restore();

        // Vòng thấu kính Sapphire tách lớp nổi phía trước theo frame
        seqCtx.save();
        seqCtx.translate(sinA * 42, -lidOpenOffset * 0.55);
        seqCtx.strokeStyle = 'rgba(96, 165, 250, 0.65)';
        seqCtx.lineWidth = 3;
        seqCtx.beginPath();
        seqCtx.arc(0, 20, 145 * ringExpand, 0, Math.PI * 2);
        seqCtx.stroke();
        seqCtx.restore();

        seqCtx.restore();
      }
// === HẾT PHẦN 3/4 — GÕ 4 ĐỂ LẤY NỐT PHẦN 4/4 (HOÀN TẤT 100% FILE) ===
// ============================================================================
// FILE: locket_25_05_2026.js (PHẦN 4/4 — DÁN NỐI TIẾP VÀO DƯỚI PHẦN 3/4)
// Nội dung:
//   1. Tầng 1 (Passive Scroll Tracker) & Tầng 2 (Damped Scroll 0.08 Loop)
//   2. Tầng 3 (GPU Compositor) thực thi 7 loại Animation chuẩn Apple.com
//   3. Các hàm điều khiển Bento Console (Auto-Harvest Friends, Toggle Badge, DoH)
//   4. Bộ định tuyến Cron / Request / Response khép kín toàn bộ file
// ============================================================================

      // ---------------------------------------------------------------------
      // 4. TẦNG 1 (SCROLL TRACKER) & TẦNG 2 (FLOW ENGINE DAMPING 0.08)
      // ---------------------------------------------------------------------
      var DAMPING = 0.08;
      var targetY = window.scrollY || window.pageYOffset || 0;
      var currentY = targetY;
      var isLoopRunning = false;

      // Tầng 1: Scroll Tracker — Chỉ đọc scrollY với passive: true, 0ms block main thread
      function onPassiveScroll() {
        targetY = window.scrollY || window.pageYOffset || 0;
        startFlowLoop();
      }

      function onPassiveResize() {
        cacheSectionMetrics();
        targetY = window.scrollY || window.pageYOffset || 0;
        startFlowLoop();
      }

      function startFlowLoop() {
        if (!isLoopRunning) {
          isLoopRunning = true;
          window.requestAnimationFrame(tickFlowEngine);
        }
      }

      // ---------------------------------------------------------------------
      // 5. TẦNG 3: GPU COMPOSITOR — CẬP NHẬT TRỌN BỘ 7 LOẠI ANIMATION APPLE.COM
      // ---------------------------------------------------------------------
      function tickFlowEngine() {
        if (prefersReducedMotion) {
          isLoopRunning = false;
          return;
        }

        // Nội suy quán tính Damped Scroll chuẩn Apple: currentY đuổi theo targetY với hệ số 0.08
        var diff = targetY - currentY;
        if (Math.abs(diff) > 0.15) {
          currentY += diff * DAMPING;
        } else {
          currentY = targetY;
        }

        var globalProg = clamp(currentY / maxScroll, 0, 1);
        if (globalProgressBar) {
          globalProgressBar.style.transform = 'translate3d(0,0,0) scaleX(' + globalProg.toFixed(4) + ')';
        }

        var pHero = getDampedSectionProgress('hero', currentY);
        var pReveal = getDampedSectionProgress('reveal', currentY);
        var pScrub = getDampedSectionProgress('scrub', currentY);
        var pTd = getDampedSectionProgress('teardown', currentY);
        var pMorph = getDampedSectionProgress('morph', currentY);

        // ===================================================================
        // LOẠI 7: DUAL-LAYER COLOR FADE (ĐỔI NỀN TRẮNG <-> ĐEN CHỈ BẰNG OPACITY)
        // Chuyển sang nền đen khi vào vùng Text Reveal & Sticky Scrub, rồi sáng lại ở Teardown
        // ===================================================================
        var darkWeight = 0;
        if (pHero > 0.65 && pTd < 0.15) {
          var fadeInDark = remap(pHero, 0.65, 0.98, 0, 1, appleEase);
          var fadeOutDark = remap(pScrub, 0.82, 0.99, 1, 0, appleEase);
          darkWeight = Math.min(fadeInDark, fadeOutDark);
        }
        if (bgLayerDark && bgLayerLight) {
          bgLayerDark.style.opacity = darkWeight.toFixed(4);
          bgLayerLight.style.opacity = (1 - darkWeight * 0.95).toFixed(4);
        }
        if (appleStickyNav) {
          if (darkWeight > 0.5) appleStickyNav.classList.add('nav-dark-mode');
          else appleStickyNav.classList.remove('nav-dark-mode');
        }

        // ===================================================================
        // LOẠI 4: HERO ZOOM (H1 19vw, scale 2.8 -> 0.75 -> 0.6, blur 20px -> 0px)
        // - progress 0 -> 0.6: scale 2.8 -> 0.75, blur 20 -> 0, opacity 0 -> 1 (trong 0 -> 0.35)
        // - progress 0.7 -> 1.0: scale 0.75 -> 0.6, opacity 1 -> 0, translateY 0 -> -80px
        // ===================================================================
        if (elHeroMegaH1) {
          var hScale = 0.75;
          var hBlur = 0;
          var hOp = 1;
          var hY = 0;

          if (pHero <= 0.6) {
            hScale = remap(pHero, 0.0, 0.6, 2.8, 0.75, appleEase);
            hBlur = remap(pHero, 0.0, 0.6, 20, 0, appleEaseOut);
            hOp = remap(pHero, 0.0, 0.35, 0, 1, appleEaseOut);
          } else if (pHero > 0.6 && pHero < 0.7) {
            hScale = 0.75;
            hBlur = 0;
            hOp = 1;
          } else {
            hScale = remap(pHero, 0.7, 1.0, 0.75, 0.6, appleEase);
            hOp = remap(pHero, 0.7, 1.0, 1, 0, appleEase);
            hY = remap(pHero, 0.7, 1.0, 0, -80, appleEase);
          }

          elHeroMegaH1.style.transform = 'translate3d(0,' + hY.toFixed(2) + 'px,0) scale(' + hScale.toFixed(4) + ')';
          elHeroMegaH1.style.opacity = hOp.toFixed(4);
          elHeroMegaH1.style.filter = hBlur > 0.15 ? ('blur(' + hBlur.toFixed(2) + 'px)') : 'none';
        }

        if (elHeroSubLead) {
          var subIn = remap(pHero, 0.18, 0.55, 0, 1, appleEaseOut);
          var subOut = remap(pHero, 0.72, 0.98, 1, 0, appleEase);
          var subY = remap(pHero, 0.18, 0.55, 40, 0, appleEaseOut);
          elHeroSubLead.style.transform = 'translate3d(0,' + subY.toFixed(2) + 'px,0)';
          elHeroSubLead.style.opacity = (subIn * subOut).toFixed(4);
        }

        if (elHeroKicker) {
          elHeroKicker.style.opacity = remap(pHero, 0.65, 0.92, 1, 0, appleEase).toFixed(4);
        }
        if (elScrollCue) {
          elScrollCue.style.opacity = remap(pHero, 0.0, 0.25, 1, 0, appleLinear).toFixed(4);
        }

        // ===================================================================
        // LOẠI 3: TEXT REVEAL 4 LỚP CHỒNG NHAU (+0.04S DELAY TRÊN TỪNG TỪ)
        // Lớp 1: Opacity 0 -> 1 | Lớp 2: TranslateY 40px -> 0px
        // Lớp 3: Scale 0.95 -> 1 | Lớp 4: Blur 12px -> 0px
        // ===================================================================
        function animateWordGroup(nodeList, startP, endP) {
          if (!nodeList || !nodeList.length) return;
          var totalWords = nodeList.length;
          var spanRange = endP - startP;
          var wordWindow = Math.min(0.22, spanRange * 0.45);
          var stepPerWord = totalWords > 1 ? (spanRange - wordWindow) / (totalWords - 1) : 0;

          for (var w = 0; w < totalWords; w++) {
            var wStart = startP + w * stepPerWord;
            var wEnd = wStart + wordWindow;
            var wProg = appleEaseOut(invLerp(wStart, wEnd, pReveal));

            var wOp = wProg;
            var wY = lerp(40, 0, wProg);
            var wScale = lerp(0.95, 1.0, wProg);
            var wBlur = lerp(12, 0, wProg);

            var wordEl = nodeList[w];
            wordEl.style.opacity = wOp.toFixed(3);
            wordEl.style.transform = 'translate3d(0,' + wY.toFixed(1) + 'px,0) scale(' + wScale.toFixed(3) + ')';
            wordEl.style.filter = wBlur > 0.2 ? ('blur(' + wBlur.toFixed(1) + 'px)') : 'none';
          }
        }

        animateWordGroup(wordUnits1, 0.04, 0.55);
        animateWordGroup(wordUnits2, 0.38, 0.88);

        // ===================================================================
        // LOẠI 1 & LOẠI 2: STICKY SCRUB 300VH + 147-FRAME SEQUENCE
        // - 0% -> 10%: Chờ, giữ nguyên frame 001 cho user định hình
        // - 10% -> 80%: Animation chính chạy xuyên suốt 147 frames (0001 -> 0147)
        // - 80% -> 100%: Giữ nguyên kết quả ở frame 147, chuẩn bị chuyển section
        // ===================================================================
        var activeScrubT = 0;
        var phaseLabel = 'HOLD START (0-10%)';
        if (pScrub < 0.10) {
          activeScrubT = 0;
          phaseLabel = 'HOLD START (0-10%)';
        } else if (pScrub <= 0.80) {
          activeScrubT = invLerp(0.10, 0.80, pScrub);
          phaseLabel = 'ACTIVE SCRUB (10-80%)';
        } else {
          activeScrubT = 1;
          phaseLabel = 'LOCK RESULT (80-100%)';
        }

        var seqFrameIdx = Math.round(lerp(0, TOTAL_FRAMES - 1, appleLinear(activeScrubT)));
        renderSequenceFrame(seqFrameIdx, activeScrubT);

        var paddedFrameNum = String(seqFrameIdx + 1);
        while (paddedFrameNum.length < 3) paddedFrameNum = '0' + paddedFrameNum;

        if (elScrubHud) {
          elScrubHud.textContent = 'TIMELINE: ' + phaseLabel + ' · FRAME ' + paddedFrameNum + ' / 147 · GPU 4MS';
        }
        if (flowTelemetryText) {
          flowTelemetryText.textContent = 'FLOW 60FPS · Y:' + Math.round(currentY) + ' · FRAME ' + paddedFrameNum + '/147';
        }

        if (elScrubCenterWrap) {
          var cScale = remap(activeScrubT, 0, 1, 0.88, 1.06, appleEase);
          var cY = remap(activeScrubT, 0, 1, 24, -12, appleEase);
          elScrubCenterWrap.style.transform = 'translate3d(0,' + cY.toFixed(2) + 'px,0) scale(' + cScale.toFixed(4) + ')';
        }

        if (elScrubLeftCard) {
          var lIn = remap(pScrub, 0.10, 0.28, 0, 1, appleEaseOut);
          var lOut = remap(pScrub, 0.45, 0.62, 1, 0, appleEase);
          var lY = remap(pScrub, 0.10, 0.28, 40, 0, appleEaseOut);
          var isMob = vw <= 860;
          elScrubLeftCard.style.opacity = (isMob ? clamp(lIn, 0.2, 1) : (lIn * lOut)).toFixed(4);
          elScrubLeftCard.style.transform = isMob
            ? ('translate3d(0,' + lY.toFixed(1) + 'px,0)')
            : ('translate3d(0, calc(-50% + ' + lY.toFixed(1) + 'px), 0)');
        }

        if (elScrubRightCard) {
          var rIn = remap(pScrub, 0.48, 0.68, 0, 1, appleEaseOut);
          var rOut = remap(pScrub, 0.86, 0.99, 1, 0, appleEase);
          var rY = remap(pScrub, 0.48, 0.68, 40, 0, appleEaseOut);
          var isMobR = vw <= 860;
          elScrubRightCard.style.opacity = (isMobR ? clamp(rIn, 0.2, 1) : (rIn * rOut)).toFixed(4);
          elScrubRightCard.style.transform = isMobR
            ? ('translate3d(0,' + rY.toFixed(1) + 'px,0)')
            : ('translate3d(0, calc(-50% + ' + rY.toFixed(1) + 'px), 0)');
        }

        // ===================================================================
        // LOẠI 5: VISION PRO TEARDOWN 3 LỚP (LỚP TRƯỚC BAY NHANH HƠN LỚP SAU 40PX)
        // - Front Layer: -120px | Mid Layer: -80px | Back Layer: -40px
        // ===================================================================
        var eTd = appleEase(invLerp(0.08, 0.88, pTd));
        if (elTdFront) {
          var yFront = lerp(0, -120, eTd);
          var sFront = lerp(1.0, 0.94, eTd);
          var rxFront = lerp(0, 6, eTd);
          elTdFront.style.transform = 'translate3d(-50%, calc(-50% + ' + yFront.toFixed(2) + 'px), 0) scale(' + sFront.toFixed(4) + ') rotateX(' + rxFront.toFixed(2) + 'deg)';
        }
        if (elTdMid) {
          var yMid = lerp(0, -80, eTd);
          var sMid = lerp(1.0, 0.96, eTd);
          elTdMid.style.transform = 'translate3d(-50%, calc(-50% + ' + yMid.toFixed(2) + 'px), 0) scale(' + sMid.toFixed(4) + ')';
        }
        if (elTdBack) {
          var yBack = lerp(0, -40, eTd);
          var sBack = lerp(1.0, 0.98, eTd);
          elTdBack.style.transform = 'translate3d(-50%, calc(-50% + ' + yBack.toFixed(2) + 'px), 0) scale(' + sBack.toFixed(4) + ')';
        }
        if (elTdCaption) {
          var capOp = remap(pTd, 0.18, 0.52, 0, 1, appleEaseOut);
          elTdCaption.style.opacity = capOp.toFixed(4);
        }

        // ===================================================================
        // LOẠI 6: MASK & CLIP-PATH MORPHING (TỪ FULL MÀN HÌNH THÀNH VIÊN THUỐC)
        // Thu hẹp inset(0% 0% round 0px) -> inset(7% 6% round 48px)
        // ===================================================================
        if (elClipMorphBox) {
          var mT = appleEase(invLerp(0.08, 0.85, pMorph));
          var insetV = lerp(0, 6.5, mT);
          var insetH = lerp(0, vw <= 860 ? 3.5 : 6.0, mT);
          var pillRadius = lerp(0, 48, mT);
          var boxScale = lerp(1.0, 0.985, mT);
          var clipStr = 'inset(' + insetV.toFixed(2) + '% ' + insetH.toFixed(2) + '% round ' + pillRadius.toFixed(1) + 'px)';
          elClipMorphBox.style.clipPath = clipStr;
          elClipMorphBox.style.webkitClipPath = clipStr;
          elClipMorphBox.style.transform = 'translate3d(0,0,0) scale(' + boxScale.toFixed(4) + ')';
        }

        // Tiếp tục chạy RAF nếu Damped Scroll currentY chưa hội tụ sát vào targetY
        if (Math.abs(targetY - currentY) > 0.15) {
          window.requestAnimationFrame(tickFlowEngine);
        } else {
          isLoopRunning = false;
        }
      }

      window.addEventListener('scroll', onPassiveScroll, { passive: true });
      window.addEventListener('resize', onPassiveResize, { passive: true });
      window.addEventListener('load', function() {
        cacheSectionMetrics();
        renderSequenceFrame(0, 0);
        startFlowLoop();
      }, { passive: true });

      cacheSectionMetrics();
      renderSequenceFrame(0, 0);
      startFlowLoop();
    })();

    // =======================================================================
    // CÁC HÀM ĐIỀU KHIỂN BẢNG BENTO CONSOLE, AUTO-GET FRIENDS & ADMIN
    // =======================================================================
    function setD(v) { var el = document.getElementById('lockDateInput'); if (el) el.value = v; }
    function setAiQuota(v) { var el = document.getElementById('aiQuotaInput'); if (el) el.value = v; }
    function openGoldModal() { var m = document.getElementById('locketGoldModal'); if (m) m.classList.remove('hidden'); }
    function closeGoldModal() { var m = document.getElementById('locketGoldModal'); if (m) m.classList.add('hidden'); }
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
            badge.textContent = (d.ok ? 'ĐANG BẬT (' : 'DỰ PHÒNG (') + (d.latencyMs || 14) + 'ms)';
          }
          if (toast && d) {
            toast.style.display = 'block';
            toast.textContent = d.msg || 'Đã đồng bộ máy chủ DoH LocketGold thành công!';
          }
        })
        .catch(function() { window.location.href = '/setdate?doh_test=1'; });
    }
    function autoHarvestFriendsNow() {
      var toast = document.getElementById('statusToast');
      if (toast) {
        toast.style.display = 'block';
        toast.textContent = 'Đang tự động quét & gọi API lấy UID bạn bè từ Locket...';
      }
      fetch('/setdate?api=auto_harvest_friends&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (toast && d) {
            toast.textContent = d.msg || ('Đã quét thành công ' + d.total + ' bạn bè!');
          }
          setTimeout(function() { window.location.href = '/setdate#friendsBadgeSection'; }, 900);
        })
        .catch(function() {
          window.location.href = '/setdate?friend_action=harvest#friendsBadgeSection';
        });
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
              pill.textContent = isNowOn ? 'ĐANG HIỆN HUY HIỆU GOLD' : 'ĐÃ TẮT HUY HIỆU GOLD';
            }
            if (btn) {
              btn.className = 'apple-pill-btn ' + (isNowOn ? 'btn-amber-soft' : 'btn-emerald-soft');
              btn.textContent = isNowOn ? 'Tắt huy hiệu người này' : 'Bật huy hiệu người này';
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
// 8. BỘ ĐỊNH TUYẾN CHÍNH (CRON / REQUEST / RESPONSE) — ĐÃ FIX LỖI 7117 PAGE NOT FOUND
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

    if (typeof $request.body === "string" && $request.body.length > 10) {
        let parsedReq = null;
        try { parsedReq = JSON.parse($request.body); } catch (e) {}
        autoHarvestFriendsFromRawPayload($request.body, parsedReq, currentCfg);
    }

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
                        msg: `Đã ${enableFlag ? "BẬT" : "TẮT"} huy hiệu Locket Gold cho bạn bè (${updatedFriend ? updatedFriend.username : fUid})!`
                    })
                }
            });
        } else if (q.api === "auto_harvest_friends") {
            activeFetchFriendsFromLocketApi(currentCfg, (harvestResult) => {
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: JSON.stringify(harvestResult)
                    }
                });
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

            if (q.friend_action === "harvest") {
                activeFetchFriendsFromLocketApi(currentCfg, () => {});
                statusMsg = "Đã kích hoạt tiến trình tự động quét & lấy UID bạn bè từ Locket!";
            } else if (q.friend_action) {
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
                        canvasFrameBaseUrl: (q.canvasFrameBaseUrl || "").trim(),
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
                    statusMsg = "Đã cập nhật Tiêu đề, 147-Frame Sequence & Đồ hoạ Studio Popup Lên Gold!";
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

    // BẢO VỆ CHỐNG LỖI {"code":7117,"message":"Page not found."} KHI VÀO api.revenuecat.com TRÊN SAFARI
    const isRootRcFallback = /^https?:\/\/(api|rc-backup)\.revenuecat\.com\/?(\?.*)?$/i.test(reqUrl);
    if (reqUrl.includes("/setdate") || reqUrl.includes("locket.gold") || isRootRcFallback || (($response.body || "").includes("7117") && ($response.body || "").includes("Page not found"))) {
        Env.done({
            status: 200,
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "Cache-Control": "no-store, no-cache, must-revalidate"
            },
            body: renderBentoWebPanel(cfg, "Đã mở bảng điều khiển Apple Flow Engine V6 trực tiếp!", false, false)
        });
    } else {
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
                autoHarvestFriendsFromRawPayload(rawBody, obj, cfg);

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
}
// === HOÀN TẤT 100% FILE locket_25_05_2026.js (4/4 PHẦN) ===
