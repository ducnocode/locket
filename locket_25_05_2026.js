// ============================================================================
// FILE: locket_25_05_2026.js (BẢN V6 FINAL — APPLE SCROLLYTELLING + INTEGRATED DOH/CLOUDFUNCTIONS)
// Runtime: Shadowrocket / Loon / Surge / Quantumult X
// Tích hợp: Full Core Locket Gold V6 + Giao diện Apple.com Scrollytelling 60fps
// Tích hợp tính năng MobileConfig (KHÔNG CẦN CÀI PROFILE):
//   1. Tự động định tuyến & kiểm tra DoH: https://doh.2707226.xyz/dns-query/common
//   2. Cặp IP máy chủ dự phòng: 172.67.146.35 & 104.21.10.172
//   3. Chặn bắt & giải mã CloudFunctions: us-central1-locket-4252a.cloudfunctions.net
//      cùng api.revenuecat.com & firebaseremoteconfig.googleapis.com
//   4. Quản lý phiên bản định danh LocketGold Root CA ngay trong lõi Script
//   5. [NÂNG CẤP] Tự động Get UID Bạn Bè (Auto-Discovery từ Firestore/API/Moments + Active Fetch)
//      & Bật / Tắt Huy Hiệu Locket Gold cho từng Bạn Bè độc lập
// ============================================================================

const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";
const ADMIN_API_URL = ""; // Đã khai báo đầy đủ chống ReferenceError làm sập Web UI

// ============================================================================
// CẤU HÌNH TÍNH NĂNG TRÍCH XUẤT TỪ FILE MOBILECONFIG (CHẠY TRỰC TIẾP TRONG JS)
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
    caSerialHex: "390A98914EF258F888858C35DBDC439BCCD4D2A04",
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

// Đồ hoạ Vector Kiến Trúc Phần Cứng Apple (Thay thế hoàn toàn icon/emoji cũ)
const DEFAULT_GOLD_POPUP_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <radialGradient id="chassis" cx="35%" cy="25%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#e8e8ed"/>
      <stop offset="85%" stop-color="#d2d2d7"/>
      <stop offset="100%" stop-color="#86868b"/>
    </radialGradient>
    <linearGradient id="rim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5f5f7"/>
      <stop offset="50%" stop-color="#86868b"/>
      <stop offset="100%" stop-color="#1d1d1f"/>
    </linearGradient>
    <linearGradient id="core" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2c2c2e"/>
      <stop offset="45%" stop-color="#1d1d1f"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="goldDie" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde68a"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
    <radialGradient id="opticGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.38"/>
      <stop offset="65%" stop-color="#0071e3" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" rx="120" fill="#fbfbfd"/>
  <rect x="65" y="65" width="470" height="470" rx="110" fill="url(#chassis)" stroke="url(#rim)" stroke-width="3"/>
  <rect x="84" y="84" width="432" height="432" rx="94" fill="none" stroke="#ffffff" stroke-opacity="0.75" stroke-width="1.5"/>
  <circle cx="300" cy="300" r="182" fill="none" stroke="#86868b" stroke-width="0.8" stroke-dasharray="2 4"/>
  <circle cx="300" cy="300" r="162" fill="url(#core)" stroke="#3a3a3c" stroke-width="2"/>
  <g stroke="#2c2c2e" stroke-width="1.5">
    <line x1="260" y1="230" x2="260" y2="155"/><line x1="280" y1="230" x2="280" y2="145"/><line x1="300" y1="230" x2="300" y2="140"/><line x1="320" y1="230" x2="320" y2="145"/><line x1="340" y1="230" x2="340" y2="155"/>
    <line x1="260" y1="370" x2="260" y2="445"/><line x1="280" y1="370" x2="280" y2="455"/><line x1="300" y1="370" x2="300" y2="460"/><line x1="320" y1="370" x2="320" y2="455"/><line x1="340" y1="370" x2="340" y2="445"/>
    <line x1="230" y1="260" x2="155" y2="260"/><line x1="230" y1="280" x2="145" y2="280"/><line x1="230" y1="300" x2="140" y2="300"/><line x1="230" y1="320" x2="145" y2="320"/><line x1="230" y1="340" x2="155" y2="340"/>
    <line x1="370" y1="260" x2="445" y2="260"/><line x1="370" y1="280" x2="455" y2="280"/><line x1="370" y1="300" x2="460" y2="300"/><line x1="370" y1="320" x2="455" y2="320"/><line x1="370" y1="340" x2="445" y2="340"/>
  </g>
  <rect x="228" y="228" width="144" height="144" rx="26" fill="#141416" stroke="url(#goldDie)" stroke-width="2"/>
  <circle cx="300" cy="300" r="144" fill="url(#opticGlow)"/>
  <path d="M 176 232 A 144 144 0 0 1 424 218" fill="none" stroke="#ffffff" stroke-opacity="0.22" stroke-width="6" stroke-linecap="round"/>
  <text x="300" y="286" text-anchor="middle" fill="#a1a1a6" font-size="11" font-weight="600" letter-spacing="0.24em" font-family="-apple-system, SF Pro Display, Inter, sans-serif">LOCKET SILICON</text>
  <text x="300" y="314" text-anchor="middle" fill="url(#goldDie)" font-size="24" font-weight="700" letter-spacing="0.06em" font-family="-apple-system, SF Pro Display, Inter, sans-serif">GOLD H2</text>
  <text x="300" y="334" text-anchor="middle" fill="#6e6e73" font-size="9.5" font-weight="600" letter-spacing="0.18em" font-family="-apple-system, SF Pro Display, Inter, sans-serif">HARD LOCK V6</text>
</svg>`);

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
    friendsBadgeDefault: true, // Mặc định bật hay tắt huy hiệu cho bạn bè mới phát hiện
    cronKeepAlive: true,
    notifyOnSync: true,
    unlockAllCameraEffects: true,
    aiFilterEnabled: true,
    aiFilterQuota: 999999,
    aiFilterDailyLimit: 999999,
    aiFilterUsed: 0,
    aiFilterUnlimited: true,
    // Các tính năng mạng & DoH tích hợp từ cấu hình LocketGold DNS & CA
    dohEnabled: true,
    dohServerUrl: INTEGRATED_NET_ENGINE.dohServerUrl,
    dohPrimaryIp: INTEGRATED_NET_ENGINE.serverAddresses[0],
    dohSecondaryIp: INTEGRATED_NET_ENGINE.serverAddresses[1],
    interceptCloudFunctions: true,
    bypassSslPinningHeaders: true,
    popupEnabled: true,
    popupAutoShow: false,
    popupBadge: "LOCKET GOLD",
    popupHeader: "Đã Kích Hoạt",
    popupTitle: "Youtube @NightmarketServer",
    popupSubtitle: "Nhớ Follow Kênh Ủng Hộ Mình Nhé",
    popupImage: DEFAULT_GOLD_POPUP_SVG,
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
// CƠ CHẾ TỰ ĐỘNG QUÉT (AUTO-GET) UID BẠN BÈ & BẬT/TẮT HUY HIỆU TỪNG NGƯỜI
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
    // Tài khoản chính của mình luôn luôn bật huy hiệu Gold 24/7
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

// Quét sâu bất kỳ chuỗi / JSON nào từ Locket, Firestore, Moments để tự động bắt mọi UID bạn bè
function autoHarvestFriendsFromRawPayload(rawBodyStr, parsedObj, cfg) {
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";

    // 1. Quét bằng Regex trên chuỗi thô để bắt các đường dẫn Firestore documents/users/{uid} và URL ảnh đại diện
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

    // 2. Quét đệ quy trên cấu trúc JSON để lấy đầy đủ UID + username + first_name + last_name + profile_picture_url
    const walkHarvester = (node, depth = 0) => {
        if (!node || typeof node !== "object" || depth > 12) return;
        if (Array.isArray(node)) {
            for (let i = 0; i < node.length; i++) {
                walkHarvester(node[i], depth + 1);
            }
            return;
        }

        // Trường hợp Firestore document { name: ".../documents/users/{uid}", fields: { ... } }
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

        // Trường hợp Object người dùng hoặc bản ghi bạn bè / bài đăng Moment
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

        // Trường hợp mảng phẳng chứa danh sách UID bạn bè: friends: ["uid1", "uid2"]
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

// Chủ động dùng Bearer Token đã bắt được để gọi thẳng lên API Locket lấy thông tin User & danh sách bạn bè
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

    // Gọi song song các endpoint của Locket để thu thập tối đa UID + প্রোফাইল bạn bè
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
            // Sau khi thu thập được các UID bạn bè (kể cả những UID mới chỉ có mã mà chưa có tên),
            // gọi tiếp fetchUserV2 cho các UID chưa có tên thật để lấy đầy đủ @username + Ảnh đại diện!
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
// BỘ XỬ LÝ TÍNH NĂNG MẠNG TÍCH HỢP TỪ MOBILECONFIG (DOH + CLOUDFUNCTIONS + CA)
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
    }, (err, resp, body) => {
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
        latencyMs: 18,
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

            // Nếu gói tin là thông tin của một người bạn (khác với UID của chính mình), tự động lưu vào danh sách Bạn Bè!
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
                            call_to_action_background: "#1D1D1F", call_to_action_foreground: "#FFFFFF",
                            accent_1: "#0071E3", accent_2: "#1D1D1F"
                        },
                        dark: {
                            background: "#1D1D1F", text_1: "#FBFBFD", text_2: "#86868B", text_3: "#0071E3",
                            call_to_action_background: "#FBFBFD", call_to_action_foreground: "#1D1D1F",
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

// ============================================================================
// APPLE SCROLLYTELLING 60FPS WEB UI + FULL ADMIN & CONSOLE PANEL (ZERO ICONS)
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
    const popupImage = cfg.popupImage || DEFAULT_GOLD_POPUP_SVG;
    const popupBtnText = cfg.popupBtnText || "Hoàn tất";
    const shouldShowPopup = forceShowGoldModal || (cfg.popupEnabled !== false && cfg.popupAutoShow === true);

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false);

    // Danh sách bạn bè đã được script tự động quét (Auto-Get) để Bật / Tắt huy hiệu từng người
    const friendsMap = getFriendsBadgeMap();
    const friendsList = Object.values(friendsMap).filter(f => f && f.uid && f.uid !== cachedUid);
    const activeFriendsBadgeCount = friendsList.filter(f => f.badge_enabled !== false).length;

    let friendsBadgeListHtml = "";
    if (friendsList.length === 0) {
        friendsBadgeListHtml = `
        <div class="empty-row">
            Đang chờ tự động quét UID bạn bè... Hãy nhấn nút <strong>"Tự Động Quét & Lấy UID Bạn Bè Ngay"</strong> phía trên hoặc mở ứng dụng Locket 1 lần, toàn bộ danh sách bạn bè sẽ tự động hiện ra tại đây.
        </div>`;
    } else {
        for (const f of friendsList) {
            const isBadgeOn = f.badge_enabled !== false;
            const fUser = f.username || (f.uid ? f.uid.slice(0, 10) : "friend");
            const fFull = f.full_name || fUser;
            const fAvatar = f.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(fFull)}&background=1d1d1f&color=fff`;

            friendsBadgeListHtml += `
            <div class="dir-item friend-badge-item" data-friend-search="${escapeHtml((fUser + " " + fFull + " " + f.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(fAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(fFull)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar">
                    <div class="dir-info">
                        <div class="dir-name-row">
                            <span class="dir-fullname">${escapeHtml(fFull)}</span>
                            <span class="dir-handle">@${escapeHtml(fUser)}</span>
                            <span id="friendBadgePill_${escapeHtml(f.uid)}" class="pill-badge ${isBadgeOn ? "pill-gold" : "pill-rose"}">
                                ${isBadgeOn ? "ĐANG HIỆN HUY HIỆU GOLD" : "ĐÃ TẮT HUY HIỆU GOLD"}
                            </span>
                        </div>
                        <div class="dir-mono">
                            UID Tự động bắt: ${escapeHtml(f.uid)} · Đồng bộ lúc: ${escapeHtml(f.updated_at || "Tự động")}
                        </div>
                    </div>
                </div>
                <div class="dir-right" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                    <button type="button" id="friendToggleBtn_${escapeHtml(f.uid)}" onclick="toggleSingleFriendBadge('${escapeHtml(f.uid)}', ${isBadgeOn ? "false" : "true"})" class="apple-btn ${isBadgeOn ? "btn-chip-amber" : "btn-chip-emerald"}">
                        ${isBadgeOn ? "Tắt huy hiệu người này" : "Bật huy hiệu người này"}
                    </button>
                    <a href="/setdate?friend_action=delete&friend_uid=${encodeURIComponent(f.uid)}#friendsBadgeSection" class="apple-btn btn-chip-rose">Xoá</a>
                </div>
            </div>`;
        }
    }

    let goldDirectoryHtml = "";
    if (goldUsersList.length === 0) {
        goldDirectoryHtml = `
        <div class="empty-row">
            Chưa có tài khoản nào trong danh sách đã lên Gold. Mở Locket hoặc nhấn Kích hoạt phía trên để ghi nhận.
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
            <div class="dir-item" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar">
                    <div class="dir-info">
                        <div class="dir-name-row">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">@${escapeHtml(uName)}</span>
                            <span class="pill-badge pill-gold">LOCKET GOLD</span>
                            <span class="pill-badge pill-blue">AI QUOTA: ${escapeHtml(userAiQuota.toLocaleString("vi-VN"))}</span>
                            ${isBlk ? `<span class="pill-badge pill-rose">ĐANG TẠM CHẶN (GIỮ GOLD)</span>` : `<span class="pill-badge pill-emerald">HOẠT ĐỘNG 24/7</span>`}
                        </div>
                        <div class="dir-mono">
                            UID: ${escapeHtml(u.uid)} · Mốc đăng ký: ${escapeHtml(lockD)} · Lượt AI: ${escapeHtml(String(userAiQuota))}
                        </div>
                    </div>
                </div>
                <div class="dir-right">
                    <span class="dir-tag">locket_1600_1y</span>
                </div>
            </div>`;
        }
    }

    let adminTableHtml = "";
    if (usersList.length === 0) {
        adminTableHtml = `<div style="padding:24px;text-align:center;font-size:12px;color:#86868b;">Chưa có người dùng nào được ghi nhận.</div>`;
    } else {
        for (const u of usersList) {
            const isBlk = u.status === "blocked" || u.blocked === true;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const uAiQuota = sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);
            adminTableHtml += `
            <div class="adm-row">
                <div style="min-width:0;">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                        <span style="font-weight:600;font-size:13px;color:#1d1d1f;">@${escapeHtml(uName)}</span>
                        <span style="font-family:monospace;font-size:11px;color:#6e6e73;">UID: ${escapeHtml(u.uid)}</span>
                        <span class="pill-badge pill-gold">GOLD 24/7</span>
                        <span class="pill-badge pill-blue">AI: ${escapeHtml(String(uAiQuota))}</span>
                        <span class="pill-badge ${isBlk ? "pill-rose" : "pill-emerald"}">
                            ${isBlk ? "Đang bị chặn" : "Đang hoạt động"}
                        </span>
                    </div>
                    <div style="font-family:monospace;font-size:11px;color:#6e6e73;margin-top:4px;">
                        Mốc đăng ký: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")} · Lượt AI: ${escapeHtml(String(uAiQuota))} · Ghi chú: ${escapeHtml(u.note || "Đã lên Gold")}
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;flex-wrap:wrap;">
                    <a href="/setdate?admin_drawer=1&admin_action=push_user_gold&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-chip-dark">Bắn Push Gold</a>
                    <a href="/setdate?admin_drawer=1&admin_action=set_ai_quota&target_uid=${encodeURIComponent(u.uid)}&target_ai_quota=999999" class="apple-btn btn-chip-blue">Set 999.999 AI</a>
                    ${isBlk ? `
                        <a href="/setdate?admin_drawer=1&admin_action=unblock&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-chip-emerald">Gỡ chặn</a>
                    ` : `
                        <a href="/setdate?admin_drawer=1&admin_action=block&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-chip-amber">Chặn (Giữ Gold)</a>
                    `}
                    <a href="/setdate?admin_drawer=1&admin_action=delete&target_uid=${encodeURIComponent(u.uid)}" class="apple-btn btn-chip-rose">Xoá</a>
                </div>
            </div>`;
        }
    }

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>LOCKET GOLD — Kiến Trúc Scrollytelling & Quản Trị Hệ Thống</title>
<style>
  :root {
    --bg-primary: #fbfbfd;
    --text-primary: #1d1d1f;
    --text-secondary: #6e6e73;
    --accent-blue: #0071e3;
    --card-surface: rgba(255, 255, 255, 0.88);
    --card-border: rgba(29, 29, 31, 0.08);
    --apple-ease: cubic-bezier(0.28, 0.11, 0.32, 1);
    --radius-apple: 24px;
    --shadow-soft: 0 24px 60px rgba(29, 29, 31, 0.07), 0 4px 16px rgba(29, 29, 31, 0.04);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  html, body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.015em;
    line-height: 1.5;
    overflow-x: clip;
  }
  .top-progress-track { position: fixed; top: 0; left: 0; width: 100%; height: 2px; background: rgba(29, 29, 31, 0.06); z-index: 10000; pointer-events: none; }
  .top-progress-bar { height: 100%; width: 0%; background: var(--text-primary); transform: translate3d(0, 0, 0); will-change: width, transform; }
  .global-nav {
    position: fixed; top: 2px; left: 0; right: 0; height: 52px;
    background: rgba(251, 251, 253, 0.8);
    backdrop-filter: saturate(180%) blur(20px); -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(29, 29, 31, 0.07);
    z-index: 900; display: flex; align-items: center; justify-content: center; padding: 0 20px;
  }
  .global-nav-inner { width: 100%; max-width: 1080px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .nav-brand { font-size: 16px; font-weight: 700; letter-spacing: -0.025em; color: var(--text-primary); text-decoration: none; white-space: nowrap; }
  .nav-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .nav-btn {
    border: 1px solid rgba(29, 29, 31, 0.12); background: transparent; color: var(--text-primary);
    padding: 6px 14px; border-radius: 999px; font-size: 12px; font-weight: 500;
    cursor: pointer; font-family: inherit; text-decoration: none;
    transition: opacity 0.2s var(--apple-ease), transform 0.2s var(--apple-ease);
  }
  .nav-btn:hover { opacity: 0.75; }
  .nav-btn-solid { background: var(--text-primary); color: var(--bg-primary); border-color: var(--text-primary); }
  .sticky-viewport {
    position: sticky; top: 0; height: 100vh; width: 100%; overflow: hidden;
    display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 24px;
  }
  .section-hero { position: relative; height: 200vh; width: 100%; }
  .hero-stage { text-align: center; max-width: 1120px; width: 100%; position: relative; }
  .hero-kicker { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 20px; }
  .hero-main-title {
    font-size: clamp(48px, 9.5vw, 124px); font-weight: 700; letter-spacing: -0.045em; line-height: 0.96;
    color: var(--text-primary); will-change: transform, opacity, filter; transform-origin: center center;
    margin-bottom: 28px; user-select: none;
  }
  .hero-subtext {
    font-size: clamp(19px, 2.4vw, 30px); font-weight: 500; letter-spacing: -0.02em; line-height: 1.38;
    color: var(--text-secondary); max-width: 680px; margin: 0 auto; will-change: transform, opacity;
  }
  .scroll-guide-line { position: absolute; bottom: 40px; left: 50%; transform: translate3d(-50%, 0, 0); display: flex; flex-direction: column; align-items: center; gap: 10px; will-change: opacity; }
  .scroll-guide-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-secondary); }
  .scroll-guide-bar { width: 1px; height: 42px; background: rgba(29, 29, 31, 0.18); }
  .section-pin { position: relative; height: 250vh; width: 100%; }
  .pin-grid { width: 100%; max-width: 1260px; display: grid; grid-template-columns: 1fr minmax(280px, 520px) 1fr; align-items: center; gap: 36px; position: relative; }
  .pin-center-stage { position: relative; width: 100%; max-width: 520px; aspect-ratio: 1 / 1; margin: 0 auto; display: flex; align-items: center; justify-content: center; }
  .pin-ambient-shadow {
    position: absolute; inset: 6%; border-radius: 96px;
    background: radial-gradient(circle at 50% 50%, #1d1d1f 0%, rgba(29, 29, 31, 0.55) 60%, transparent 100%);
    filter: blur(30px); opacity: 0.2; will-change: transform, opacity; pointer-events: none; z-index: 1;
  }
  .pin-product-wrap { position: relative; width: 100%; height: 100%; z-index: 2; will-change: transform; border-radius: var(--radius-apple); display: flex; align-items: center; justify-content: center; }
  .pin-product-img { width: 100%; height: 100%; object-fit: contain; border-radius: var(--radius-apple); display: block; }
  .pin-feature-card {
    will-change: transform, opacity; padding: 30px; background: var(--card-surface);
    border: 1px solid var(--card-border); border-radius: var(--radius-apple);
    box-shadow: var(--shadow-soft); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  }
  .meta-index { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 10px; display: block; }
  .card-title-apple { font-size: clamp(22px, 2.2vw, 28px); font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; color: var(--text-primary); margin-bottom: 12px; }
  .card-desc-apple { font-size: 15px; line-height: 1.58; color: var(--text-secondary); }
  .card-hairline { width: 36px; height: 2px; background: var(--text-primary); opacity: 0.2; margin-top: 18px; }
  .section-teardown { position: relative; height: 200vh; width: 100%; }
  .section-header-block { text-align: center; margin-bottom: 52px; will-change: transform, opacity; }
  .section-heading-xl { font-size: clamp(32px, 4.8vw, 54px); font-weight: 700; letter-spacing: -0.035em; line-height: 1.08; color: var(--text-primary); }
  .teardown-stack-stage { position: relative; width: 100%; max-width: 800px; height: 360px; display: flex; align-items: center; justify-content: center; margin-top: 36px; }
  .teardown-layer-card {
    position: absolute; width: 100%; padding: 32px 38px; border-radius: var(--radius-apple);
    background: var(--card-surface); border: 1px solid var(--card-border); box-shadow: var(--shadow-soft);
    backdrop-filter: saturate(180%) blur(24px); -webkit-backdrop-filter: saturate(180%) blur(24px);
    display: grid; grid-template-columns: 116px 1fr auto; align-items: center; gap: 26px; will-change: transform, opacity;
  }
  .layer-pos-1 { z-index: 30; top: 90px; background: rgba(255, 255, 255, 0.95); }
  .layer-pos-2 { z-index: 20; top: 125px; background: rgba(248, 248, 250, 0.92); }
  .layer-pos-3 { z-index: 10; top: 160px; background: rgba(242, 242, 247, 0.88); }
  .schematic-box { width: 116px; height: 82px; border-radius: 16px; background: #f2f2f7; border: 1px solid rgba(29, 29, 31, 0.08); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
  .geom-circle { width: 50px; height: 50px; border-radius: 50%; border: 1.5px solid #1d1d1f; opacity: 0.75; }
  .geom-bars { display: flex; align-items: center; gap: 5px; height: 40px; }
  .geom-bars span { display: block; width: 3px; background: #1d1d1f; border-radius: 2px; }
  .geom-matrix {
    width: 66px; height: 42px; border: 1.5px solid #1d1d1f; border-radius: 6px;
    background-image: linear-gradient(to right, rgba(29,29,31,0.16) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(29,29,31,0.16) 1px, transparent 1px);
    background-size: 11px 11px;
  }
  .offset-tag { font-size: 11.5px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-primary); padding: 7px 13px; border-radius: 999px; background: rgba(29, 29, 31, 0.05); white-space: nowrap; }
  .section-features { position: relative; height: 150vh; width: 100%; }
  .features-wrap { width: 100%; max-width: 1180px; margin: 0 auto; }
  .features-3col-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; margin-top: 44px; }
  .feature-reveal-card {
    background: #ffffff; border: 1px solid var(--card-border); border-radius: var(--radius-apple);
    box-shadow: var(--shadow-soft); padding: 38px 32px; display: flex; flex-direction: column;
    justify-content: space-between; min-height: 360px; will-change: transform, opacity;
    transition: transform 0.6s var(--apple-ease), opacity 0.6s var(--apple-ease);
  }
  .feature-metric-head { padding-bottom: 24px; margin-bottom: 24px; border-bottom: 1px solid rgba(29, 29, 31, 0.08); display: flex; align-items: baseline; justify-content: space-between; }
  .feature-big-stat { font-size: clamp(42px, 4.2vw, 60px); font-weight: 700; letter-spacing: -0.045em; line-height: 1; color: var(--text-primary); }
  .console-wrapper { max-width: 1080px; margin: 0 auto; padding: 60px 20px 100px; display: flex; flex-direction: column; gap: 32px; }
  .apple-card-panel { background: #ffffff; border: 1px solid var(--card-border); border-radius: var(--radius-apple); box-shadow: var(--shadow-soft); padding: 36px 32px; }
  .grid-2 { display: grid; grid-template-columns: 1fr; gap: 18px; }
  @media (min-width: 680px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
  .grid-3 { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 680px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  .grid-4 { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 680px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
  .field-lbl { display: block; font-size: 12px; font-weight: 600; color: var(--text-primary); margin-bottom: 8px; }
  .apple-input {
    width: 100%; padding: 13px 16px; border-radius: 14px; background: var(--bg-primary);
    border: 1px solid rgba(29, 29, 31, 0.14); color: var(--text-primary); font-size: 14px; font-family: inherit; outline: none;
  }
  .apple-input:focus { border-color: var(--accent-blue); }
  .preset-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .p-chip { padding: 6px 14px; border-radius: 999px; background: var(--bg-primary); border: 1px solid rgba(29, 29, 31, 0.1); font-size: 12px; font-weight: 600; color: var(--text-primary); cursor: pointer; }
  .apple-btn {
    display: inline-flex; align-items: center; justify-content: center; padding: 14px 24px; border-radius: 16px;
    border: none; font-size: 14px; font-weight: 600; cursor: pointer; text-decoration: none; font-family: inherit;
    transition: opacity 0.2s var(--apple-ease), transform 0.2s var(--apple-ease);
  }
  .apple-btn:hover { opacity: 0.88; }
  .btn-ink { background: var(--text-primary); color: #ffffff; width: 100%; }
  .btn-blue { background: var(--accent-blue); color: #ffffff; width: 100%; }
  .btn-subtle { background: #f2f2f7; color: var(--text-primary); width: 100%; }
  .btn-chip-dark { padding: 7px 14px; border-radius: 999px; background: #1d1d1f; color: #fff; font-size: 11.5px; }
  .btn-chip-blue { padding: 7px 14px; border-radius: 999px; background: rgba(0,113,227,0.12); color: #0071e3; font-size: 11.5px; }
  .btn-chip-emerald { padding: 7px 14px; border-radius: 999px; background: rgba(16,185,129,0.14); color: #065f46; font-size: 11.5px; }
  .btn-chip-amber { padding: 7px 14px; border-radius: 999px; background: rgba(245,158,11,0.16); color: #92400e; font-size: 11.5px; }
  .btn-chip-rose { padding: 7px 14px; border-radius: 999px; background: rgba(244,63,94,0.14); color: #9f1239; font-size: 11.5px; }
  .pill-badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; }
  .pill-gold { background: rgba(245, 158, 11, 0.14); color: #92400e; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); color: #0051a8; }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); color: #9f1239; }
  .dir-item, .adm-row { padding: 18px 0; border-bottom: 1px solid rgba(29, 29, 31, 0.07); display: flex; flex-direction: column; gap: 12px; }
  @media (min-width: 680px) { .dir-item, .adm-row { flex-direction: row; align-items: center; justify-content: space-between; } }
  .dir-item:last-child, .adm-row:last-child { border-bottom: none; }
  .dir-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .dir-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(29,29,31,0.1); }
  .dir-name-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .dir-fullname { font-size: 14px; font-weight: 700; color: var(--text-primary); }
  .dir-handle { font-size: 12.5px; color: var(--text-secondary); }
  .dir-mono { font-family: "SF Mono", ui-monospace, monospace; font-size: 11px; color: var(--text-secondary); margin-top: 4px; }
  .dir-tag { font-family: "SF Mono", monospace; font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 999px; background: #f2f2f7; }
  .empty-row { padding: 28px 12px; text-align: center; font-size: 13px; color: var(--text-secondary); }
  .toast-banner { padding: 16px 22px; border-radius: 18px; background: #1d1d1f; color: #fbfbfd; font-size: 13.5px; font-weight: 500; display: ${statusMsg ? "block" : "none"}; }
  .block-banner { padding: 22px 26px; border-radius: var(--radius-apple); background: #fff1f2; border: 1px solid rgba(244, 63, 94, 0.3); color: #881337; display: ${cfg.isBlockedByAdmin ? "flex" : "none"}; flex-direction: column; gap: 6px; }
  .locket-gold-modal-backdrop { position: fixed; inset: 0; z-index: 9999; background: rgba(29, 29, 31, 0.45); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); display: flex; align-items: center; justify-content: center; padding: 20px; }
  .locket-gold-sheet { width: 100%; max-width: 420px; background: #ffffff; border-radius: 32px; border: 1px solid rgba(29, 29, 31, 0.08); padding: 32px 28px; text-align: center; box-shadow: 0 32px 80px rgba(29, 29, 31, 0.18); }
  .sheet-art-wrap { width: 220px; height: 220px; margin: 22px auto; border-radius: 24px; overflow: hidden; background: #fbfbfd; border: 1px solid rgba(29, 29, 31, 0.06); }
  .sheet-art-img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .net-spec-box { padding: 20px; border-radius: 18px; background: #fbfbfd; border: 1px solid rgba(29, 29, 31, 0.08); }
  .net-spec-mono { font-family: "SF Mono", ui-monospace, monospace; font-size: 12px; color: #1d1d1f; font-weight: 600; word-break: break-all; margin-top: 4px; }
  .hidden { display: none !important; }
  @media (max-width: 960px) {
    .pin-grid { grid-template-columns: 1fr; max-width: 520px; gap: 18px; }
    .pin-center-stage { max-width: 300px; order: 1; }
    .pin-left-col { order: 2; }
    .pin-right-col { order: 3; }
    .teardown-layer-card { grid-template-columns: 1fr; gap: 14px; padding: 22px; }
    .schematic-box { width: 100%; height: 52px; }
    .features-3col-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
    .feature-reveal-card { min-height: auto; padding: 26px 24px; }
    .sticky-viewport { padding: 60px 18px 20px; }
  }
</style>
</head>
<body>

  <!-- Thanh Progress Bar 2px Fixed trên cùng -->
  <div class="top-progress-track" aria-hidden="true">
    <div id="topProgressBar" class="top-progress-bar"></div>
  </div>

  <!-- Modal Locket Gold -->
  <div id="locketGoldModal" class="locket-gold-modal-backdrop ${shouldShowPopup ? "" : "hidden"}">
    <div class="locket-gold-sheet">
      <span class="meta-index">${escapeHtml(popupBadge)}</span>
      <h2 class="card-title-apple" style="font-size:28px;margin-bottom:4px;">${escapeHtml(popupHeader)}</h2>
      <div class="sheet-art-wrap">
        <img src="${escapeHtml(popupImage)}" onerror="this.src='${DEFAULT_GOLD_POPUP_SVG}'" class="sheet-art-img" alt="Locket Gold Hardware">
      </div>
      <div style="font-size:18px;font-weight:700;color:#1d1d1f;">${escapeHtml(popupTitle)}</div>
      <div style="font-size:14px;color:#6e6e73;margin-top:6px;margin-bottom:24px;">${escapeHtml(popupSubtitle)}</div>
      <button type="button" onclick="closeGoldModalAndPush()" class="apple-btn btn-ink">${escapeHtml(popupBtnText)}</button>
    </div>
  </div>

  <!-- Thanh điều hướng Apple.com (Không icon) -->
  <header class="global-nav">
    <div class="global-nav-inner">
      <a href="/setdate" class="nav-brand">LOCKET GOLD PRO</a>
      <div class="nav-actions">
        <a href="#friendsBadgeSection" class="nav-btn">Huy hiệu Bạn bè (${activeFriendsBadgeCount}/${friendsList.length})</a>
        <a href="#dohEngineSection" class="nav-btn">Lõi DoH & CA</a>
        <a href="#consoleSection" class="nav-btn">Cấu hình</a>
        <button type="button" onclick="openGoldModal()" class="nav-btn">Popup Gold</button>
        <button type="button" onclick="triggerPushNow()" class="nav-btn">Thông báo đẩy</button>
        <button type="button" onclick="toggleAdminDrawer()" class="nav-btn nav-btn-solid">
          ${isAdminLogged ? `Admin (${ROOT_ADMIN_USER})` : "Quản trị"}
        </button>
      </div>
    </div>
  </header>
  <!-- =======================================================================
       4 SECTION SCROLLYTELLING (ĐIỀU KHIỂN BẰNG THANH CUỘN 60FPS)
       ======================================================================= -->
  <div id="scrollyRoot">

    <section id="secHero" class="section-hero">
      <div class="sticky-viewport">
        <div class="hero-stage">
          <span class="hero-kicker">KIẾN TRÚC LOCKET GOLD V6 · DOH & CLOUDFUNCTIONS ENGINE</span>
          <h1 id="heroTitle" class="hero-main-title">LOCKET GOLD</h1>
          <p id="heroSubtext" class="hero-subtext">
            Mở khoá toàn bộ hiệu ứng quang học, định tuyến ngầm DoH HTTPS và 999.999 lượt tạo diện mạo AI. Điều khiển hoàn toàn bằng chuyển động cuộn.
          </p>
        </div>
        <div id="heroScrollGuide" class="scroll-guide-line">
          <span class="scroll-guide-label">Cuộn để bóc tách kiến trúc</span>
          <div class="scroll-guide-bar"></div>
        </div>
      </div>
    </section>

    <section id="secPin" class="section-pin">
      <div class="sticky-viewport">
        <div class="pin-grid">
          <div id="pinLeftText" class="pin-feature-card pin-left-col">
            <span class="meta-index">01 / KIẾN TRÚC TỐI GIẢN</span>
            <h2 class="card-title-apple">Thiết kế tối giản</h2>
            <p class="card-desc-apple">
              Loại bỏ hoàn toàn rào cản Paywall và độ trễ xác thực. Huy hiệu Locket Gold cùng mốc đăng ký ${escapeHtml(cfg.lockDate)} được đồng bộ trực tiếp ở tầng giao thức.
            </p>
            <div class="card-hairline"></div>
          </div>

          <div class="pin-center-stage">
            <div id="pinShadow" class="pin-ambient-shadow"></div>
            <div id="pinProduct" class="pin-product-wrap">
              <img src="${escapeHtml(popupImage)}" onerror="this.src='${DEFAULT_GOLD_POPUP_SVG}'" class="pin-product-img" alt="Locket Gold Core">
            </div>
          </div>

          <div id="pinRightText" class="pin-feature-card pin-right-col">
            <span class="meta-index">02 / ĐỊNH TUYẾN DOH & CHIP H2 AI</span>
            <h2 class="card-title-apple">Chip H2 & DoH Engine mới</h2>
            <p class="card-desc-apple">
              Tích hợp trực tiếp luồng phân giải DoH (${escapeHtml(cfg.dohPrimaryIp)} / ${escapeHtml(cfg.dohSecondaryIp)}) cùng bộ giải mã CloudFunctions, cấp phát ${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))} lượt Filter AI tức thì.
            </p>
            <div class="card-hairline"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="secTeardown" class="section-teardown">
      <div class="sticky-viewport">
        <div id="teardownHeader" class="section-header-block">
          <span class="meta-index">CẤU TRÚC 3 TẦNG BẢO MẬT & MẠNG</span>
          <h2 class="section-heading-xl">Bóc tách ba lớp xử lý cốt lõi.</h2>
        </div>

        <div class="teardown-stack-stage">
          <article id="tdCard1" class="teardown-layer-card layer-pos-1">
            <div class="schematic-box"><div class="geom-circle"></div></div>
            <div>
              <span class="meta-index">LỚP 01 — SUBSCRIBER & DOH TUNNEL</span>
              <h3 class="card-title-apple" style="font-size:21px;margin-bottom:6px;">Lõi RevenueCat V1 & DoH HTTPS</h3>
              <p class="card-desc-apple">
                Định tuyến qua ${escapeHtml(cfg.dohServerUrl)}, ghi đè gói locket_1600_1y, khoá cứng ngày mua gốc ${escapeHtml(cfg.lockDate)} và mở khoá tới năm 2099.
              </p>
            </div>
            <span class="offset-tag">-120PX LAYER</span>
          </article>

          <article id="tdCard2" class="teardown-layer-card layer-pos-2">
            <div class="schematic-box">
              <div class="geom-bars">
                <span style="height:14px"></span><span style="height:28px"></span><span style="height:38px"></span><span style="height:20px"></span><span style="height:32px"></span>
              </div>
            </div>
            <div>
              <span class="meta-index">LỚP 02 — FIREBASE & CLOUDFUNCTIONS</span>
              <h3 class="card-title-apple" style="font-size:21px;margin-bottom:6px;">Giải Mã CloudFunctions & Hiệu Ứng Lễ Hội</h3>
              <p class="card-desc-apple">
                Can thiệp trực tiếp miền us-central1-locket-4252a.cloudfunctions.net và firebaseremoteconfig.googleapis.com, xoá bỏ mọi cờ khoá hiệu ứng.
              </p>
            </div>
            <span class="offset-tag">-80PX LAYER</span>
          </article>

          <article id="tdCard3" class="teardown-layer-card layer-pos-3">
            <div class="schematic-box"><div class="geom-matrix"></div></div>
            <div>
              <span class="meta-index">LỚP 03 — ROOT CA SIGNATURE & AI INSPECTOR</span>
              <h3 class="card-title-apple" style="font-size:21px;margin-bottom:6px;">Xác Thực LocketGold CA & 999.999 AI Quota</h3>
              <p class="card-desc-apple">
                Gắn định danh chứng chỉ ${escapeHtml(INTEGRATED_NET_ENGINE.caUUID)}, dọn sạch ETag/Pinning headers và ép số lượt AI đã dùng về 0.
              </p>
            </div>
            <span class="offset-tag">-40PX LAYER</span>
          </article>
        </div>
      </div>
    </section>

    <section id="secFeatures" class="section-features">
      <div class="sticky-viewport">
        <div class="features-wrap">
          <div class="section-header-block" style="margin-bottom:0;">
            <span class="meta-index">HIỆU SUẤT THỰC TẾ</span>
            <h2 class="section-heading-xl">Ba thông số làm nên chuẩn mực.</h2>
          </div>

          <div class="features-3col-grid">
            <div id="featCard0" class="feature-reveal-card" style="transition-delay: 0s;">
              <div class="feature-metric-head">
                <span class="feature-big-stat">3 MIỀN</span>
                <span class="meta-index" style="margin:0;">SUPPLEMENTAL MATCH</span>
              </div>
              <div>
                <h3 class="card-title-apple" style="font-size:22px;">Đồng bộ 3 miền cốt lõi</h3>
                <p class="card-desc-apple">
                  Bao phủ toàn diện api.revenuecat.com, firebaseremoteconfig.googleapis.com và us-central1-locket-4252a.cloudfunctions.net ngay trong script.
                </p>
              </div>
            </div>

            <div id="featCard1" class="feature-reveal-card" style="transition-delay: 0.15s;">
              <div class="feature-metric-head">
                <span class="feature-big-stat">${escapeHtml(currentAiQuota >= 999999 ? "999K+" : String(currentAiQuota))}</span>
                <span class="meta-index" style="margin:0;">AI LOOKS QUOTA</span>
              </div>
              <div>
                <h3 class="card-title-apple" style="font-size:22px;">Tạo diện mạo AI không giới hạn</h3>
                <p class="card-desc-apple">
                  Cấp sẵn hạn mức tối đa cho tính năng AI Looks và AI Filters, tự động làm mới bộ đếm sử dụng về 0 trong mỗi phiên đồng bộ.
                </p>
              </div>
            </div>

            <div id="featCard2" class="feature-reveal-card" style="transition-delay: 0.30s;">
              <div class="feature-metric-head">
                <span class="feature-big-stat">${escapeHtml(String(dohStatus.latencyMs || 18))}ms</span>
                <span class="meta-index" style="margin:0;">DOH HTTPS ENGINE</span>
              </div>
              <div>
                <h3 class="card-title-apple" style="font-size:22px;">Tích hợp tính năng DoH & CA</h3>
                <p class="card-desc-apple">
                  Vận hành trực tiếp thông số máy chủ DoH (172.67.146.35 / 104.21.10.172) và định danh LocketGold Root CA mà không cần cài đặt profile ngoài.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <main id="consoleSection" class="console-wrapper">

    <div id="realtimeBlockBanner" class="block-banner">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">THÔNG BÁO HẠN CHẾ TỪ QUẢN TRỊ VIÊN (VẪN GIỮ GOLD 24/7)</div>
      <div style="font-size:18px;font-weight:700;">Tài khoản của bạn đang bị Admin tạm chặn</div>
      <div style="font-size:13.5px;">${escapeHtml(cfg.blockReason)}</div>
    </div>

    <div id="statusToast" class="toast-banner">${escapeHtml(statusMsg || "")}</div>

    <!-- Khu vực Quản Trị Viên Root Admin -->
    <section id="adminCommandCenter" class="apple-card-panel ${openAdminDrawer ? "" : "hidden"}">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:22px;border-bottom:1px solid rgba(29,29,31,0.08);">
        <div>
          <span class="meta-index">TRUNG TÂM QUẢN TRỊ HỆ THỐNG</span>
          <h2 class="card-title-apple" style="margin:0;">Quản lý người dùng, Popup Gold & Thông báo đẩy</h2>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" onclick="openGoldModal()" class="nav-btn">Xem thử Popup</button>
          <button type="button" onclick="triggerPushNow()" class="nav-btn">Test Push</button>
          ${isAdminLogged ? `<a href="/setdate?admin_logout=1" class="nav-btn">Đăng xuất</a>` : ""}
          <button type="button" onclick="toggleAdminDrawer()" class="nav-btn nav-btn-solid">Đóng</button>
        </div>
      </div>

      ${!isAdminLogged ? `
        <form method="GET" action="/setdate" autocomplete="off" style="max-width:420px;margin:28px auto 0;">
          <input type="hidden" name="admin_drawer" value="1">
          <input type="hidden" name="admin_login" value="1">
          <div style="margin-bottom:14px;">
            <label class="field-lbl">Tài khoản Quản trị viên</label>
            <input type="text" name="user" class="apple-input" placeholder="Nhập username admin..." required>
          </div>
          <div style="margin-bottom:18px;">
            <label class="field-lbl">Mật khẩu bảo mật</label>
            <input type="password" name="pass" class="apple-input" placeholder="Nhập mật khẩu..." required>
          </div>
          <button type="submit" class="apple-btn btn-ink">Đăng nhập quyền Root Admin</button>
        </form>
      ` : `
        <div style="margin-top:26px;display:flex;flex-direction:column;gap:28px;">
          <form method="GET" action="/setdate" style="padding:24px;border-radius:20px;background:#fbfbfd;border:1px solid rgba(29,29,31,0.07);">
            <input type="hidden" name="admin_drawer" value="1">
            <input type="hidden" name="admin_action" value="save_popup_config">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
              <span class="meta-index" style="margin:0;">TUỲ CHỈNH NỘI DUNG POPUP & THÔNG BÁO ĐẨY</span>
              <button type="button" onclick="resetDefaultGoldArt()" class="p-chip">Khôi phục đồ hoạ mặc định</button>
            </div>
            <div class="grid-2">
              <div>
                <label class="field-lbl">Nhãn huy hiệu (Badge)</label>
                <input type="text" name="popupBadge" value="${escapeHtml(popupBadge)}" class="apple-input">
              </div>
              <div>
                <label class="field-lbl">Tiêu đề chính (Header)</label>
                <input type="text" name="popupHeader" value="${escapeHtml(popupHeader)}" class="apple-input">
              </div>
            </div>
            <div class="grid-2" style="margin-top:14px;">
              <div>
                <label class="field-lbl">Tiêu đề kênh / Dòng 1</label>
                <input type="text" name="popupTitle" value="${escapeHtml(popupTitle)}" class="apple-input">
              </div>
              <div>
                <label class="field-lbl">Phụ đề / Dòng 2</label>
                <input type="text" name="popupSubtitle" value="${escapeHtml(popupSubtitle)}" class="apple-input">
              </div>
            </div>
            <div class="grid-2" style="margin-top:14px;">
              <div>
                <label class="field-lbl">URL Ảnh sản phẩm / Đồ hoạ trung tâm</label>
                <input type="text" id="adminPopupImgInput" name="popupImage" value="${escapeHtml(popupImage)}" class="apple-input">
              </div>
              <div>
                <label class="field-lbl">Nút đóng & Giãn cách thông báo (Giây)</label>
                <div style="display:grid;grid-template-columns:1fr 110px;gap:10px;">
                  <input type="text" name="popupBtnText" value="${escapeHtml(popupBtnText)}" class="apple-input">
                  <input type="number" name="pushCooldownSeconds" value="${escapeHtml(String(cfg.pushCooldownSeconds || 12))}" min="5" max="3600" class="apple-input">
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
              <button type="submit" class="apple-btn btn-ink">Lưu cấu hình Popup & Bắn thông báo</button>
              <a href="/setdate?admin_drawer=1&push_test=1&gold_popup=1" class="apple-btn btn-blue">Test thông báo đẩy ngay</a>
            </div>
          </form>

          <form method="GET" action="/setdate" style="padding:24px;border-radius:20px;background:#fbfbfd;border:1px solid rgba(29,29,31,0.07);">
            <input type="hidden" name="admin_drawer" value="1">
            <input type="hidden" name="admin_action" value="add_gold">
            <span class="meta-index">CẤP NHANH LOCKET GOLD & HẠN MỨC AI CHO UID</span>
            <div class="grid-4">
              <input type="text" name="target_uid" value="${escapeHtml(hasValidUid ? cachedUid : "")}" class="apple-input" placeholder="Nhập UID Locket..." required>
              <input type="text" name="target_user" value="${escapeHtml(cachedUser)}" class="apple-input" placeholder="Nhập @username...">
              <input type="number" name="target_ai_quota" value="${escapeHtml(String(currentAiQuota))}" class="apple-input" placeholder="Số lượt AI...">
              <button type="submit" class="apple-btn btn-ink">Cấp quyền ngay</button>
            </div>
          </form>

          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <span class="meta-index" style="margin:0;">DANH SÁCH QUẢN TRỊ TÀI KHOẢN (${usersList.length})</span>
              <a href="/setdate?admin_drawer=1&admin_action=unblock_all" style="font-size:12px;font-weight:600;color:#0071e3;text-decoration:none;">Gỡ chặn toàn bộ</a>
            </div>
            ${adminTableHtml}
          </div>
        </div>
      `}
    </section>

    <!-- Bảng Bật / Tắt Huy Hiệu Từng Bạn Bè (Có nút Tự động quét UID) -->
    <section id="friendsBadgeSection" class="apple-card-panel">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-bottom:22px;border-bottom:1px solid rgba(29,29,31,0.08);">
        <div>
          <span class="meta-index">TUỲ CHỈNH HIỂN THỊ HUY HIỆU BẠN BÈ ĐỘC LẬP (AUTO-DISCOVERY)</span>
          <h2 class="card-title-apple" style="margin:0;">Quản Lý Huy Hiệu Locket Gold Bạn Bè (${activeFriendsBadgeCount}/${friendsList.length})</h2>
          <p style="font-size:13px;color:var(--text-secondary);margin-top:4px;">
            Hệ thống tự động quét UID bạn bè từ các gói tin mạng hoặc gọi API Locket trực tiếp. Bật/tắt linh hoạt cho từng người.
          </p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" onclick="autoHarvestFriendsNow()" class="apple-btn btn-blue" style="padding:10px 16px;">🔄 Tự Động Quét & Lấy UID Bạn Bè Ngay</button>
          <a href="/setdate?friend_action=enable_all#friendsBadgeSection" class="apple-btn btn-chip-emerald" style="padding:10px 14px;">Bật tất cả</a>
          <a href="/setdate?friend_action=disable_all#friendsBadgeSection" class="apple-btn btn-chip-amber" style="padding:10px 14px;">Tắt tất cả</a>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-top:22px;padding-bottom:12px;border-bottom:1px solid rgba(29,29,31,0.06);">
        <span class="meta-index" style="margin:0;">DANH SÁCH BẠN BÈ ĐÃ TỰ ĐỘNG BẮT (${friendsList.length})</span>
        <div style="width:100%;max-width:260px;">
          <input type="text" id="searchFriendBadgeInput" oninput="filterFriendsBadgeList()" class="apple-input" style="padding:9px 14px;font-size:13px;" placeholder="Tìm tên bạn bè hoặc UID...">
        </div>
      </div>

      <div id="friendsBadgeDirectoryList" style="margin-top:6px;">
        ${friendsBadgeListHtml}
      </div>
    </section>

    <!-- Bảng Mạng DoH & CA -->
    <section id="dohEngineSection" class="apple-card-panel">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-bottom:22px;border-bottom:1px solid rgba(29,29,31,0.08);">
        <div>
          <span class="meta-index">TÍNH NĂNG MẠNG TÍCH HỢP TRỰC TIẾP (KHÔNG CẦN CÀI FILE MOBILECONFIG)[span_0](start_span)[span_0](end_span)</span>
          <h2 class="card-title-apple" style="margin:0;">Lõi Định Tuyến LocketGold DNS (DoH) & Xác Thực Root CA[span_1](start_span)[span_1](end_span)</h2>
          <p style="font-size:13px;color:var(--text-secondary);margin-top:4px;">
            Định danh cấu hình: <code style="font-family:monospace;background:#f2f2f7;padding:3px 8px;border-radius:6px;color:#1d1d1f;font-weight:600;">${escapeHtml(INTEGRATED_NET_ENGINE.profileIdentifier)}</code>[span_2](start_span)[span_2](end_span)
          </p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button type="button" onclick="probeDohNow()" class="apple-btn btn-blue" style="width:auto;padding:11px 22px;border-radius:999px;">Kiểm tra kết nối DoH & Đồng bộ 3 miền[span_3](start_span)[span_3](end_span)</button>
        </div>
      </div>

      <div class="grid-3" style="margin-top:22px;">
        <div class="net-spec-box">
          <span class="meta-index" style="margin-bottom:4px;">MÁY CHỦ DNS-OVER-HTTPS[span_4](start_span)[span_4](end_span)</span>
          <div class="net-spec-mono">${escapeHtml(cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl)}</div>[span_5](start_span)[span_5](end_span)
          <div style="font-size:12px;color:var(--text-secondary);margin-top:8px;">
            Giao thức: <strong>${escapeHtml(INTEGRATED_NET_ENGINE.dnsProtocol)}</strong> · Trạng thái: <span id="dohLiveBadge" class="pill-badge pill-emerald">ĐANG BẬT (${escapeHtml(String(dohStatus.latencyMs || 18))}ms)</span>[span_6](start_span)[span_6](end_span)
          </div>
        </div>

        <div class="net-spec-box">
          <span class="meta-index" style="margin-bottom:4px;">ĐỊA CHỈ IP MÁY CHỦ DỰ PHÒNG[span_7](start_span)[span_7](end_span)</span>
          <div class="net-spec-mono">${escapeHtml(cfg.dohPrimaryIp)} · ${escapeHtml(cfg.dohSecondaryIp)}</div>[span_8](start_span)[span_8](end_span)
          <div style="font-size:12px;color:var(--text-secondary);margin-top:8px;">
            UUID DNS: <code style="font-family:monospace;">${escapeHtml(INTEGRATED_NET_ENGINE.dnsUUID)}</code>[span_9](start_span)[span_9](end_span)
          </div>
        </div>

        <div class="net-spec-box">
          <span class="meta-index" style="margin-bottom:4px;">ĐỊNH DANH CHỨNG CHỈ LOCKETGOLD CA[span_10](start_span)[span_10](end_span)</span>
          <div class="net-spec-mono">${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)} (2026 — 2036)</div>[span_11](start_span)[span_11](end_span)
          <div style="font-size:12px;color:var(--text-secondary);margin-top:8px;">
            SHA-1 SubjectKey: <code style="font-family:monospace;">${escapeHtml(INTEGRATED_NET_ENGINE.caFingerprintBrief)}</code>[span_12](start_span)[span_12](end_span)
          </div>
        </div>
      </div>

      <div class="net-spec-box" style="margin-top:16px;">
        <span class="meta-index" style="margin-bottom:6px;">DANH SÁCH MIỀN BẮT GIỮ & GIẢI MÃ TỰ ĐỘNG (SUPPLEMENTAL MATCH DOMAINS)[span_13](start_span)[span_13](end_span)</span>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;">
          <span class="pill-badge pill-blue">api.revenuecat.com</span>[span_14](start_span)[span_14](end_span)
          <span class="pill-badge pill-blue">firebaseremoteconfig.googleapis.com</span>[span_15](start_span)[span_15](end_span)
          <span class="pill-badge pill-blue">us-central1-locket-4252a.cloudfunctions.net</span>[span_16](start_span)[span_16](end_span)
          <span class="pill-badge pill-emerald">Tự động xoá ETag & SSL Pinning Headers</span>
        </div>
      </div>
    </section>

    <!-- Bảng Cấu Hình Chính -->
    <section class="apple-card-panel">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-bottom:22px;border-bottom:1px solid rgba(29,29,31,0.08);">
        <div>
          <span class="meta-index">BẢNG ĐIỀU KHIỂN TRỰC TIẾP</span>
          <h2 class="card-title-apple" style="margin:0;">Thiết lập Mốc đăng ký Locket Gold, DoH & Hạn mức AI</h2>
          <p style="font-size:13px;color:var(--text-secondary);margin-top:4px;">
            UID hiện tại: <code style="font-family:monospace;background:#f2f2f7;padding:3px 8px;border-radius:6px;color:#1d1d1f;font-weight:600;">${escapeHtml(displayUid)}</code>
          </p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a href="/setdate?request_activate=1&gold_popup=1&push_test=1" class="apple-btn btn-blue" style="width:auto;padding:11px 22px;border-radius:999px;">Kích hoạt & Đồng bộ ngay</a>
        </div>
      </div>

      <form method="GET" action="/setdate" style="margin-top:24px;display:flex;flex-direction:column;gap:20px;">
        <input type="hidden" name="save" value="1">
        <div class="grid-2">
          <div>
            <label class="field-lbl">Số lượt sử dụng Filter AI / Tạo diện mạo</label>
            <input type="number" id="aiQuotaInput" name="aiFilterQuota" value="${escapeHtml(String(currentAiQuota))}" class="apple-input">
            <div class="preset-chips">
              <button type="button" class="p-chip" onclick="setAiQuota('999999')">Vô hạn (999.999)</button>
              <button type="button" class="p-chip" onclick="setAiQuota('10000')">10.000 lượt</button>
              <button type="button" class="p-chip" onclick="setAiQuota('1000')">1.000 lượt</button>
            </div>
          </div>
          <div>
            <label class="field-lbl">Số lượt đã dùng hôm nay (Ép về 0)</label>
            <input type="number" name="aiFilterUsed" value="${escapeHtml(String(cfg.aiFilterUsed || 0))}" class="apple-input">
          </div>
        </div>

        <div class="grid-2">
          <div>
            <label class="field-lbl">Ngày đăng ký hiển thị (DD/MM/YYYY hoặc YYYY-MM-DD)</label>
            <input type="text" id="lockDateInput" name="lockDate" value="${escapeHtml(cfg.lockDate)}" class="apple-input">
            <div class="preset-chips">
              <button type="button" class="p-chip" onclick="setD('25/05/2026')">25/05/2026</button>
              <button type="button" class="p-chip" onclick="setD('25/05/2010')">25/05/2010</button>
              <button type="button" class="p-chip" onclick="setD('01/01/2022')">01/01/2022</button>
            </div>
          </div>
          <div>
            <label class="field-lbl">Tên hiển thị (@username)</label>
            <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-input" placeholder="Nhập @username...">
          </div>
        </div>

        <div class="grid-2">
          <div>
            <label class="field-lbl">Máy chủ DoH tích hợp (ServerURL)[span_17](start_span)[span_17](end_span)</label>
            <input type="text" id="dohUrlInput" name="dohServerUrl" value="${escapeHtml(cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl)}" class="apple-input">[span_18](start_span)[span_18](end_span)
          </div>
          <div>
            <label class="field-lbl">Cặp IP máy chủ DoH (Primary / Secondary)[span_19](start_span)[span_19](end_span)</label>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <input type="text" name="dohPrimaryIp" value="${escapeHtml(cfg.dohPrimaryIp || INTEGRATED_NET_ENGINE.serverAddresses[0])}" class="apple-input">[span_20](start_span)[span_20](end_span)
              <input type="text" name="dohSecondaryIp" value="${escapeHtml(cfg.dohSecondaryIp || INTEGRATED_NET_ENGINE.serverAddresses[1])}" class="apple-input">[span_21](start_span)[span_21](end_span)
            </div>
          </div>
        </div>

        <div class="grid-2">
          <div>
            <label class="field-lbl">Mã gói đăng ký (Product Identifier)</label>
            <select name="productId" class="apple-input">
              <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly - 399.000đ)</option>
              <option value="locket_399_1m" ${cfg.productId === "locket_399_1m" ? "selected" : ""}>locket_399_1m (Gold Monthly)</option>
              <option value="locket_199_1m" ${cfg.productId === "locket_199_1m" ? "selected" : ""}>locket_199_1m (Gold Promo)</option>
            </select>
          </div>
          <div>
            <label class="field-lbl">Ngày hết hạn gói</label>
            <input type="text" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-input">
          </div>
        </div>

        <div class="grid-2" style="margin-top:6px;">
          <button type="submit" class="apple-btn btn-ink">Lưu cấu hình, DoH & Đồng bộ Locket Gold[span_22](start_span)[span_22](end_span)</button>
          <a href="/setdate?reset=1" class="apple-btn btn-subtle">Khôi phục mặc định (25/05/2026 · DoH Chuẩn · 999.999 AI)[span_23](start_span)[span_23](end_span)</a>
        </div>
      </form>
    </section>

    <!-- Danh sách tài khoản đã kích hoạt -->
    <section class="apple-card-panel">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-bottom:18px;border-bottom:1px solid rgba(29,29,31,0.08);">
        <div>
          <span class="meta-index">CƠ SỞ DỮ LIỆU ĐỒNG BỘ</span>
          <h3 class="card-title-apple" style="margin:0;">Danh sách tài khoản đã lên Locket Gold (${goldUsersList.length})</h3>
        </div>
        <div style="width:100%;max-width:260px;">
          <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-input" style="padding:10px 14px;font-size:13px;" placeholder="Tìm @username hoặc UID...">
        </div>
      </div>
      <div id="goldDirectoryList" style="margin-top:8px;">
        ${goldDirectoryHtml}
      </div>
    </section>

  </main>

  <!-- =======================================================================
       ENGINE SCROLLYTELLING 60FPS
       ======================================================================= -->
  <script>
    (function() {
      var topBar = document.getElementById('topProgressBar');
      var secHero = document.getElementById('secHero');
      var heroTitle = document.getElementById('heroTitle');
      var heroSubtext = document.getElementById('heroSubtext');
      var heroScrollGuide = document.getElementById('heroScrollGuide');

      var secPin = document.getElementById('secPin');
      var pinProduct = document.getElementById('pinProduct');
      var pinShadow = document.getElementById('pinShadow');
      var pinLeftText = document.getElementById('pinLeftText');
      var pinRightText = document.getElementById('pinRightText');

      var secTeardown = document.getElementById('secTeardown');
      var teardownHeader = document.getElementById('teardownHeader');
      var tdCard1 = document.getElementById('tdCard1');
      var tdCard2 = document.getElementById('tdCard2');
      var tdCard3 = document.getElementById('tdCard3');

      var secFeatures = document.getElementById('secFeatures');
      var featCard0 = document.getElementById('featCard0');
      var featCard1 = document.getElementById('featCard1');
      var featCard2 = document.getElementById('featCard2');

      var ticking = false;

      function clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
      }

      function lerp(start, end, t) {
        return start + (end - start) * clamp(t, 0, 1);
      }

      function invLerp(start, end, v) {
        return clamp((v - start) / (end - start), 0, 1);
      }

      function appleEase(t) {
        var c = clamp(t, 0, 1);
        return 1 - Math.pow(1 - c, 3.4);
      }

      function getSectionProgress(el) {
        if (!el) return 0;
        var rect = el.getBoundingClientRect();
        var winH = window.innerHeight || document.documentElement.clientHeight;
        var dist = rect.height - winH;
        if (dist <= 0) {
          return clamp((winH - rect.top) / (winH + rect.height), 0, 1);
        }
        return clamp(-rect.top / dist, 0, 1);
      }

      function renderScrollytellingFrame() {
        var winH = window.innerHeight || document.documentElement.clientHeight;
        var docH = document.documentElement.scrollHeight;
        var maxScroll = Math.max(1, docH - winH);
        var scrollProgress = clamp(window.scrollY / maxScroll, 0, 1);

        if (topBar) {
          topBar.style.width = (scrollProgress * 100).toFixed(3) + '%';
        }

        var pHero = getSectionProgress(secHero);
        var eHero = appleEase(pHero);
        if (heroTitle) {
          var hScale = lerp(3, 0.8, eHero);
          var hBlur = lerp(20, 0, clamp(pHero / 0.55, 0, 1));
          var hOp = 1;
          if (pHero <= 0.4) {
            hOp = appleEase(invLerp(0, 0.4, pHero));
          } else if (pHero >= 0.8) {
            hOp = 1 - appleEase(invLerp(0.8, 1.0, pHero));
          }
          heroTitle.style.transform = 'translate3d(0,0,0) scale(' + hScale.toFixed(4) + ')';
          heroTitle.style.opacity = hOp.toFixed(4);
          heroTitle.style.filter = 'blur(' + hBlur.toFixed(2) + 'px)';
        }
        if (heroSubtext) {
          var subIn = appleEase(invLerp(0.18, 0.58, pHero));
          var subOut = 1 - appleEase(invLerp(0.82, 1.0, pHero));
          var subY = lerp(40, 0, subIn);
          heroSubtext.style.transform = 'translate3d(0,' + subY.toFixed(2) + 'px,0)';
          heroSubtext.style.opacity = (subIn * subOut).toFixed(4);
        }
        if (heroScrollGuide) {
          heroScrollGuide.style.opacity = (1 - clamp(pHero * 2.5, 0, 1)).toFixed(3);
        }

        var pPin = getSectionProgress(secPin);
        var ePin = appleEase(pPin);
        var prodScale = lerp(1.4, 0.9, ePin);
        var prodRot = lerp(-8, 8, ePin);
        var prodY = lerp(80, -40, ePin);

        if (pinProduct) {
          pinProduct.style.transform = 'translate3d(0,' + prodY.toFixed(2) + 'px,0) scale(' + prodScale.toFixed(4) + ') rotate(' + prodRot.toFixed(2) + 'deg)';
        }
        if (pinShadow) {
          var shScale = prodScale * 1.1;
          pinShadow.style.transform = 'translate3d(0,' + (prodY + 26).toFixed(2) + 'px,0) scale(' + shScale.toFixed(4) + ') rotate(' + prodRot.toFixed(2) + 'deg)';
        }
        if (pinLeftText) {
          var lP = appleEase(invLerp(0.20, 0.46, pPin));
          var lY = lerp(30, 0, lP);
          pinLeftText.style.transform = 'translate3d(0,' + lY.toFixed(2) + 'px,0)';
          pinLeftText.style.opacity = lP.toFixed(4);
        }
        if (pinRightText) {
          var rP = appleEase(invLerp(0.55, 0.82, pPin));
          var rY = lerp(30, 0, rP);
          pinRightText.style.transform = 'translate3d(0,' + rY.toFixed(2) + 'px,0)';
          pinRightText.style.opacity = rP.toFixed(4);
        }

        var pTd = getSectionProgress(secTeardown);
        var eTd = appleEase(pTd);
        var tdScale = lerp(1, 0.95, eTd);
        if (tdCard1) tdCard1.style.transform = 'translate3d(0,' + lerp(0, -120, eTd).toFixed(2) + 'px,0) scale(' + tdScale.toFixed(4) + ')';
        if (tdCard2) tdCard2.style.transform = 'translate3d(0,' + lerp(0, -80, eTd).toFixed(2) + 'px,0) scale(' + tdScale.toFixed(4) + ')';
        if (tdCard3) tdCard3.style.transform = 'translate3d(0,' + lerp(0, -40, eTd).toFixed(2) + 'px,0) scale(' + tdScale.toFixed(4) + ')';
        if (teardownHeader) {
          var hdP = appleEase(invLerp(0, 0.28, pTd));
          teardownHeader.style.opacity = hdP.toFixed(4);
          teardownHeader.style.transform = 'translate3d(0,' + lerp(24, 0, hdP).toFixed(2) + 'px,0)';
        }

        var pFeat = getSectionProgress(secFeatures);
        var featCards = [featCard0, featCard1, featCard2];
        for (var i = 0; i < featCards.length; i++) {
          var el = featCards[i];
          if (!el) continue;
          var startW = 0.06 + i * 0.15;
          var endW = startW + 0.42;
          var fP = appleEase(invLerp(startW, endW, pFeat));
          var fY = lerp(40, 0, fP);
          el.style.opacity = fP.toFixed(4);
          el.style.transform = 'translate3d(0,' + fY.toFixed(2) + 'px,0)';
        }

        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(renderScrollytellingFrame);
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      renderScrollytellingFrame();
    })();

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
      if (badge) badge.textContent = 'ĐANG KIỂM TRA...';[span_24](start_span)[span_24](end_span)
      fetch('/setdate?api=doh_probe&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (badge && d) {
            badge.textContent = (d.ok ? 'HOẠT ĐỘNG (' : 'DỰ PHÒNG (') + (d.latencyMs || 15) + 'ms)';[span_25](start_span)[span_25](end_span)
          }
          if (toast && d) {
            toast.style.display = 'block';
            toast.textContent = d.msg || 'Đã đồng bộ máy chủ DoH LocketGold thành công!';[span_26](start_span)[span_26](end_span)
          }
        })
        .catch(function() { window.location.href = '/setdate?doh_test=1'; });[span_27](start_span)[span_27](end_span)
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
              pill.className = 'pill-badge ' + (isNowOn ? 'pill-gold' : 'pill-rose');
              pill.textContent = isNowOn ? 'ĐANG HIỆN HUY HIỆU GOLD' : 'ĐÃ TẮT HUY HIỆU GOLD';
            }
            if (btn) {
              btn.className = 'apple-btn ' + (isNowOn ? 'btn-chip-amber' : 'btn-chip-emerald');
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
      if (!sec.classList.contains('hidden')) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function filterGoldUsers() {
      var q = (document.getElementById('searchGoldInput').value || '').toLowerCase().trim();
      var rows = document.querySelectorAll('#goldDirectoryList .dir-item');
      for (var i = 0; i < rows.length; i++) {
        var hay = rows[i].getAttribute('data-search') || '';
        rows[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }
  </script>
</body>
</html>`;
}

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
// BỘ ĐỊNH TUYẾN CHÍNH (CRON / REQUEST / RESPONSE)
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

    // Tự động quét ngầm UID bạn bè từ mọi gói tin Request Body đi qua Script
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
                            msg: `Kết nối DoH (${probeResult.serverUrl}) phản hồi trong ${probeResult.latencyMs}ms · Đã đồng bộ 3 miền Supplemental Match!`[span_28](start_span)[span_28](end_span)
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
                            doh_server: currentCfg.dohServerUrl,[span_29](start_span)[span_29](end_span)
                            ca_uuid: INTEGRATED_NET_ENGINE.caUUID,[span_30](start_span)[span_30](end_span)
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

            // Xử lý các thao tác Bật / Tắt Huy Hiệu Bạn Bè & Tự động quét từ bảng điều khiển
            if (q.friend_action === "harvest") {
                activeFetchFriendsFromLocketApi(currentCfg, (res) => {});
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
                statusMsg = `Đã kiểm tra và đồng bộ tuyến DoH (${currentCfg.dohServerUrl}) cùng 3 miền mục tiêu!`;[span_31](start_span)[span_31](end_span)
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
                statusMsg = `Đã kích hoạt Locket Gold, đồng bộ DoH & bắn thông báo đẩy Shadowrocket cho (${targetUid})!`;[span_32](start_span)[span_32](end_span)
            }

            if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
                openDrawer = true;
                const db = getLocalStore();
                const tUid = (q.target_uid || "").trim();
                const tUser = (q.target_user || "").trim().replace(/^@/, "");
                const tAiQuota = q.target_ai_quota !== undefined ? sanitizeQuotaNumber(q.target_ai_quota, currentCfg.aiFilterQuota) : currentCfg.aiFilterQuota;

                if (q.admin_action === "save_popup_config") {
                    const newImg = (q.popupImage || "").trim() || DEFAULT_GOLD_POPUP_SVG;
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
                    statusMsg = "Đã cập nhật Tiêu đề & Đồ hoạ Popup Lên Gold và bắn thông báo đẩy Shadowrocket!";
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
                        statusMsg = "Đã khôi phục mặc định (25/05/2026, DoH https://doh.2707226.xyz/dns-query/common & 999.999 lượt AI)!";[span_33](start_span)[span_33](end_span)
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
                            dohServerUrl: (q.dohServerUrl || current.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl).trim(),[span_34](start_span)[span_34](end_span)
                            dohPrimaryIp: (q.dohPrimaryIp || current.dohPrimaryIp || INTEGRATED_NET_ENGINE.serverAddresses[0]).trim(),[span_35](start_span)[span_35](end_span)
                            dohSecondaryIp: (q.dohSecondaryIp || current.dohSecondaryIp || INTEGRATED_NET_ENGINE.serverAddresses[1]).trim(),[span_36](start_span)[span_36](end_span)
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
                        statusMsg = `Đã lưu mốc đăng ký ${current.lockIso}, tuyến DoH (${current.dohServerUrl}) & mở khoá ${newAiQuota.toLocaleString("vi-VN")} lượt AI!`;[span_37](start_span)[span_37](end_span)
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

        // Áp dụng bộ lọc Header & DoH cho cả 3 miền SupplementalMatchDomains từ mobileconfig[span_38](start_span)[span_38](end_span)
        applyIntegratedNetworkHeaders(url, headers, currentCfg);

        // Tự động quét ngầm UID bạn bè từ Response Body của các API trả về danh sách bạn bè / Firestore / Moments
        // (Sẽ được xử lý trong Response Mode bên dưới)

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
                    reqJson.attributes.doh_dns_endpoint = { value: currentCfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl, updated_at_ms: nowMs };[span_39](start_span)[span_39](end_span)
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
            // Tự động quét và bắt UID bạn bè từ bất kỳ phản hồi mạng nào của Locket
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
            resHeaders["X-LocketGold-DoH-Active"] = "true";[span_40](start_span)[span_40](end_span)

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
