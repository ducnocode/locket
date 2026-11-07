// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V10.0 — PART 1 OF 6)
// ============================================================================
// TÍCH HỢP TOÀN DIỆN 4 TRONG 1 (ZERO CONFLICTS - FULL WEB UI CUSTOMIZER):
//   1. locket_25_05_2026 20.js (Apple Scrollytelling 60fps, DoH 40 miền, Admin)
//   2. forceGold4.3.js         (140+ Custom Captions, Camera 30s, Feature Gates)
//   3. header7.js              (NightmarketServer X-RevenueCat-ETag Header Engine)
//   4. locketfix8.js           (NMS Subscription & Gold/Pro Mapping Engine)
// ============================================================================

const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";
const ADMIN_API_URL = "";

const HEADER7_ENGINE_META = {
    name: "deleteHeader by NightmarketServer",
    version: "V1.0.2",
    targetHeader: "X-RevenueCat-ETag",
    replacementValue: "",
    stripAllCacheValidators: true
};

const LOCKETFIX8_MAPPING_ENGINE = {
    mapping: {
        "Locket": [
            "Gold",
            "locket_1600_1y"
        ],
        "com.locket.Locket": [
            "Gold",
            "locket_1600_1y"
        ],
        "CFNetwork": [
            "Gold",
            "locket_1600_1y"
        ]
    },
    defaultAttention: "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!",
    nmsTemplate: {
        auto_resume_date: null,
        display_name: "locket_1600_1y",
        is_sandbox: false,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: {
            amount: 399000.0,
            currency: "VND"
        },
        expires_date: "9999-01-09T10:10:14Z",
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: "2026-05-25T08:30:00Z",
        purchase_date: "2026-05-25T08:30:00Z",
        store: "app_store",
        store_transaction_id: "2000001108724193"
    },
    locketGoldTemplate: {
        grace_period_expires_date: null,
        purchase_date: "2026-05-25T08:30:00Z",
        original_purchase_date: "2026-05-25T08:30:00Z",
        product_identifier: "locket_1600_1y",
        expires_date: "9999-01-09T10:10:14Z",
        ownership_type: "PURCHASED",
        store: "app_store"
    }
};

const THAY_PRODUCT_NAME = "LOCKET GOLD PRO";
const THAY_SLOGAN = "Thiết kế tối giản. Hiệu ứng cuộn điện ảnh 60fps. Quyền năng thuần khiết.";
const THAY_USP_LEFT = "Khóa cứng mốc đăng ký gốc và đồng bộ huy hiệu Locket Gold theo thời gian thực.";
const THAY_USP_RIGHT = "Chip Locket H2 & Lõi DoH UpLocket 40 miền mới. Mở khóa trọn bộ Photobooth, 140+ Caption VIP, Camera 30s & 999.999 lượt Tạo diện mạo AI.";

const THAY_FEATURES = [
    {
        title: "Mở khóa toàn diện Photobooth, 140+ Caption & AI Looks",
        desc: "Gỡ bỏ hoàn toàn rào cản Paywall, kích hoạt trọn bộ Khung & Photobooth (4 ô, Cute, Polaroid, 2-3 ảnh), 140+ Caption nghệ thuật, Camera 30s Ultra-Wide/Telephoto và 999.999 lượt Tạo diện mạo AI.",
        badge: "FULL PHOTOBOOTH & 140+ CAPTIONS",
        stat: "999K+"
    },
    {
        title: "Auto-Discovery & Kiểm soát Chặn Mất Gold Thật",
        desc: "Tự động quét UID, Username, Ảnh đại diện bạn bè. Khi Admin bấm Chặn UID, lập tức thu hồi sạch Locket Gold, xóa huy hiệu, khóa Photobooth/AI và đẩy thông báo thu hồi trực tiếp trong App Locket.",
        badge: "HARD REVOKE ENGINE",
        stat: "100%"
    },
    {
        title: "Định tuyến DoH UpLocket 40 Miền & Root CA 2036",
        desc: "Tích hợp sâu cấu hình UpLocket Network DoH HTTPS (dns.uplocket.io.vn), 40 miền chặn quảng cáo & giải mã RevenueCat/Firebase/Spotify/YouTube cùng chứng chỉ UpLocket Custom Root CA.",
        badge: "40-DOMAIN DOH ENGINE",
        stat: "9999"
    }
];

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
    <text x="450" y="496" text-anchor="middle" fill="#a1a1a6" font-size="12" font-weight="700" letter-spacing="0.26em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">LOCKET SILICON</text>
    <text x="450" y="536" text-anchor="middle" fill="url(#goldLiquid)" font-size="36" font-weight="800" letter-spacing="-0.02em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">GOLD H2</text>
    <text x="450" y="564" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600" letter-spacing="0.22em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">PRO EDITION</text>
    <circle cx="450" cy="676" r="6" fill="#10b981"/>
    <circle cx="450" cy="676" r="13" fill="none" stroke="#10b981" stroke-width="1.6" stroke-opacity="0.4"/>
  </g>
</svg>`);

const THAY_IMAGE_PATH = DEFAULT_GOLD_POPUP_SVG;

const INTEGRATED_NET_ENGINE = {
    profileName: "Ngô Minh Đức",
    profileDescription: "Cấu hình DNS-over-HTTPS (DoH) UpLocket cho tài khoản @ngominhduc",
    profileOrganization: "UpLocket Network",
    profileIdentifier: "com.locketgold.doh.L3esH9rUE9d6YqSuApe1amEzOAO2",
    profileUUID: "6037CCDF-12FA-4251-9DAB-7C9A0F030DBD",
    legacyProfileIdentifier: "com.camsitup.locket.dns_profile.nguyenvanquan2005",
    legacyProfileUUID: "99096d98-2a7b-4398-aa9a-900079ebc9f5",
    caDisplayName: "UpLocket Custom Root CA",
    caIdentifier: "com.locketgold.root.ca",
    caUUID: "8F4C2B1A-6D3E-4A90-9C17-2B5E7A0D4F61",
    caDescription: "Sau khi cài hồ sơ, vào Cài đặt > Giới thiệu > Tin cậy chứng chỉ và bật chứng chỉ UpLocket Custom Root CA.",
    caSubjectCommonName: "LocketGold Custom Root CA",
    caSubjectOrg: "LocketGold Server 2026",
    caValidFrom: "2026-09-29T19:32:12Z",
    caValidTo: "2036-09-26T19:32:12Z",
    caSerialHex: "55594E6CF8F6E9196754223F405F43ADFBCE586E",
    caFingerprintBrief: "05:C5:42:3D:26:9F:53:A3:79:AA:59:37:15:7F:D4:9F:4C:A8:A1:C7",
    appleSignerTeamId: "4NS5GGY57A",
    appleSignerName: "Apple Distribution: Jarrett Samuels (4NS5GGY57A)",
    caCertBase64:
        "MIIF1zCCA7+gAwIBAgIUVVlObPj26RlnVCI/QF9DrfvPWG4wDQYJKoZIhvcNAQELBQAwezELMAkGA1UEBhMCVk4xDDAKBgNVBAgMA0hDTTEMMAoGA1UEBwwDSENNMR8wHQYDVQQKDBZMb2NrZXRHb2xkIFNlcnZlciAyMDI2MQswCQYDVQQLDAJDQTEiMCAGA1UEAwwZTG9ja2V0R29sZCBDdXN0b20gUm9vdCBDQTAeFw0yNjA5MjkxOTMyMTJaFw0zNjA5MjYxOTMyMTJaMHsxCzAJBgNVBAYTAlZOMQwwCgYDVQQIDANIT00xDDAKBgNVBAcMA0hDTTEfMB0GA1UECgwWTG9ja2V0R29sZCBTZXJ2ZXIgMjAyNjELMAkGA1UECwwCQ0ExIjAgBgNVBAMMGUxvY2tldEdvbGQgQ3VzdG9tIFJvb3QgQ0EwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDF4hivMi0x1lY9U9nXpHvcbEisthJYcNvt0s7pY/50DBejpw3VkYI0qDXGE0cbgB3gd+rDrlEXJHs60qmSfDDvlDfhqKgFqLiJhZjdQ3NnkPBPZKy4UBgCpDqSBbFxmSqnl1vf45qx8ZpUbDcCdR+4BoFCji9cmCmpPWfYc6ddClqKNOkB/a3MV+Buh0EHcLfP3ksf2DvUHIPlMA4IVJKCBkUUG/T++NL+4HvG/hgfgtosBF7QMT/HR55f1vC9EJQcanXqwGaNYfeXR41/GzfzMA5Q8mcNu5ISsCW3Wyv4uDy7WPMTmeuUnpp7FkEJpC202iN9vxi/l8M7qahI/3zkDUPJF2Yt0JmouvHZbuErSzpTko7nxBeBBcdClwHbdUNSSelvBeYlZUCReuaOKLj5t2CIxAx5tIUifeGrnlsRanS9CkApFVDdVTjpPGlVgXHo3U407OXLlX72uYzrDy62seUTQkaovqQRUPjfldgHP93UVzB2H3bmMotDn6bOCRUsuyZtbZxjEKYK4N2wiv9RyqaSRcFOdHG0jPXf3dRxGR85BQTWwCsIp37OKPM8KUSJUUmZnGE3GyOMUhUmTBvbzTIiAlMPld1+0mzqNDsPwaboAfWtz5y7BwryzORiblfGgOkkPEvx2hl3w4g7G8DGl7I5JV/kp+roeJZd95RTSwIDAQABo1MwUTAdBgNVHQ4EFgQUBcVCPSafU6N5qlk3FX/Un0yooccwHwYDVR0jBBgwFoAUBcVCPSafU6N5qlk3FX/Un0yooccwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAv5z8N+g6haH0tFNIeyxGyQoUDiJNsw1Hm4HlX54G600miS9C2cXrROiEtjOIZkvaIsgC5PeUytZ04a63Ra9uPdcqCz1B0eILEamLvwS65VLi08fGefXoAs4iNYc17CK3ib8Hjefb8h7ylW46vIBdmJbgmEidaWID7SQDgPfsao6EoUi2EM9kEg8l9qAbossN4ooeZM6pCwZAoMSk7WihS1thGftgW2H68RM/NnqKxQ7X+NbsW8I+CP6SHvWP1qCd8aO0Cx8KEJanS5XWzk06Jmx39u4c+J5pBqpR+53H2QHoKAHXATjpjoSsg2/Z/EHFULbjgsCPIWm2CGDuKCX9mwgpk2WS1woC7FG4ES1R3tvCCoaFgjeJ+t+fUfspZ3xB2X+tAOBqnWqreZg8gv3l0cgqALNyeo/lAhU3rcuEu5BY6j5XiNg8L5pJKYjrKgg1+7cQ8sr0dIkVmaMNC1ilHlG6UnnUzIF2psHK3eCWt6kSpAKSs/jUCin67urRT7zLB2IdE/8r7r1XhXRSDa2QDWk8x5JqnZ7JZCUg4E1HgHeSA0vinIIHNtlAmj8i6Yh4GBh7aCo8AwQ/P+6eSP1BlF9x5WECNz/spmHk0hAapA+zmP+PWf9Jcp//p2+VfoHuA2VmsokR0IAsqH/T3QHJFfUC8I42i2CZCyhCl0wl5S8=",
    dnsDisplayName: "Locket Gold DNS Configuration",
    dnsDescription: "DNS-over-HTTPS (DoH) cấu hình cho tài khoản Locket Gold",
    dnsIdentifier: "com.locketgold.doh.settings.L3esH9rUE9d6YqSuApe1amEzOAO2",
    dnsUUID: "CF1FDB89-C5B5-401D-8544-D1347E278A10",
    dnsProtocol: "HTTPS",
    dohServerUrl: "https://dns.uplocket.io.vn/dns-query/71558e5ad9a1bc362511ed5e2b773b0d4a39471cd9d884f8bfcc4ac649e2186b",
    fallbackDohServerUrl: "https://doh.2707226.xyz/dns-query/common",
    dohBaseHost: "https://dns.uplocket.io.vn",
    dohTokenHash: "71558e5ad9a1bc362511ed5e2b773b0d4a39471cd9d884f8bfcc4ac649e2186b",
    serverAddresses: [
        "172.67.146.35",
        "104.21.10.172"
    ],
    supplementalMatchDomains: [
        "api.revenuecat.com",
        "revenuecat.com",
        "analytics.revenuecat.com",
        "rc-cdn.revenuecat.com",
        "sdk.revenuecat.com",
        "gateway.revenuecat.com",
        "errors.revenuecat.com",
        "identity.revenuecat.com",
        "customer.revenuecat.com",
        "subscriptions.revenuecat.com",
        "firebaseremoteconfig.googleapis.com",
        "firebaseremoteconfigrealtime.googleapis.com",
        "us-central1-locket-4252a.cloudfunctions.net",
        "cloudfunctions.net",
        "spclient.wg.spotify.com",
        "spclient.spotify.com",
        "gae2-spclient.spotify.com",
        "gew4-spclient.spotify.com",
        "guc3-spclient.spotify.com",
        "apresolve.spotify.com",
        "youtubei.googleapis.com",
        "googlevideo.com",
        "firebaselogging.googleapis.com",
        "firebaselogging-pa.googleapis.com",
        "googleads.g.doubleclick.net",
        "pagead2.googlesyndication.com",
        "ad.doubleclick.net",
        "pubads.g.doubleclick.net",
        "securepubads.g.doubleclick.net",
        "imasdk.googleapis.com",
        "ads.youtube.com",
        "ad.youtube.com",
        "audio-ak-spotify-com.akamaized.net",
        "gads.current.spotify.com",
        "crashdump.spotify.com",
        "adclick.g.doubleclick.net",
        "adeventtracker.spotify.com",
        "log.spotify.com",
        "amplitude.com",
        "spotify.com"
    ]
};

// ============================================================================
// DANH MỤC HIỆU ỨNG CAMERA, PHOTOBOOTH & 35 BỘ LỌC TỪ FORCEGOLD 4.3
// ============================================================================
const LOCKET_CAMERA_EFFECTS_CATALOG = {
    sections: [
        {
            id: "khung_photobooth",
            title: "Khung & Photobooth 📸",
            type: "photobooth_frames",
            unlocked: true,
            items: [
                {
                    id: "photobooth_4_grid",
                    effect_id: "photobooth_4_grid",
                    title: "Photobooth 4 ô",
                    layout: "grid_2x2",
                    shots_count: 4,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "photobooth_cute",
                    effect_id: "photobooth_cute",
                    title: "Photobooth Cute",
                    layout: "cute_frame",
                    shots_count: 1,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "polaroid_1_shot",
                    effect_id: "polaroid_1_shot",
                    title: "Polaroid 1 ảnh",
                    layout: "polaroid_single",
                    shots_count: 1,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "photobooth_2_shot",
                    effect_id: "photobooth_2_shot",
                    title: "Photobooth 2 ảnh",
                    layout: "strip_2",
                    shots_count: 2,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "photobooth_3_shot",
                    effect_id: "photobooth_3_shot",
                    title: "Photobooth 3 ảnh",
                    layout: "strip_3",
                    shots_count: 3,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                }
            ]
        },
        {
            id: "su_kien",
            title: "Sự kiện",
            type: "event_effects",
            unlocked: true,
            items: [
                {
                    id: "practical_magic_2",
                    effect_id: "practical_magic_2",
                    title: "Practical Magic 2",
                    category: "event",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                }
            ]
        },
        {
            id: "tinh_nghich",
            title: "Tinh nghịch (Goofy)",
            type: "playful_ai_looks",
            unlocked: true,
            items: [
                {
                    id: "looks_maxxing",
                    look_id: "looks_maxxing",
                    title: "Looks-Maxxing",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "influencer",
                    look_id: "influencer",
                    title: "Influencer",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "toothless",
                    look_id: "toothless",
                    title: "Toothless",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "okay_wig",
                    look_id: "okay_wig",
                    title: "Okay Wig",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "bye_brows",
                    look_id: "bye_brows",
                    title: "Bye Brows",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                }
            ]
        },
        {
            id: "ngoai_hinh",
            title: "Ngoại hình (Looks)",
            type: "appearance_ai_looks",
            unlocked: true,
            items: [
                {
                    id: "bowling_ball",
                    look_id: "bowling_ball",
                    title: "Bowling Ball",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "blonde_bleached",
                    look_id: "blonde_bleached",
                    title: "Blonde Bleached",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "beard",
                    look_id: "beard",
                    title: "Beard",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "bob_cut",
                    look_id: "bob_cut",
                    title: "Bob Cut",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "buns",
                    look_id: "buns",
                    title: "Buns",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "tatted",
                    look_id: "tatted",
                    title: "Tatted",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "mohawk",
                    look_id: "mohawk",
                    title: "Mohawk",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "braces",
                    look_id: "braces",
                    title: "Braces",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                }
            ]
        },
        {
            id: "an_mung",
            title: "Ăn mừng (Celebrate)",
            type: "celebration_effects",
            unlocked: true,
            items: [
                {
                    id: "slimed",
                    effect_id: "slimed",
                    title: "Slimed",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "princess",
                    effect_id: "princess",
                    title: "Princess",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "disco_lights",
                    effect_id: "disco_lights",
                    title: "Disco Lights",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "cash_money",
                    effect_id: "cash_money",
                    title: "Cash Money",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "happy_birthday",
                    effect_id: "happy_birthday",
                    title: "Happy Birthday",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "party_confetti",
                    effect_id: "party_confetti",
                    title: "Confetti Gold",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "birthday_crown",
                    effect_id: "birthday_crown",
                    title: "Birthday Crown",
                    category: "celebration",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                }
            ]
        },
        {
            id: "de_thuong_le_hoi",
            title: "Cute, Costumes & Holidays",
            type: "cute_costumes_holidays",
            unlocked: true,
            items: [
                {
                    id: "cutesy",
                    effect_id: "cutesy",
                    title: "Cutesy",
                    category: "cute",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "sticker_face",
                    effect_id: "sticker_face",
                    title: "Sticker Face",
                    category: "cute",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "flower_crown",
                    effect_id: "flower_crown",
                    title: "Flower Crown",
                    category: "cute",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "love_bug",
                    effect_id: "love_bug",
                    title: "Love Bug",
                    category: "cute",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "wedding",
                    effect_id: "wedding",
                    title: "Wedding",
                    category: "costumes",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "cowboy_cowgirl",
                    effect_id: "cowboy_cowgirl",
                    title: "Cowboy / Cowgirl",
                    category: "costumes",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "giraffe",
                    effect_id: "giraffe",
                    title: "Giraffe",
                    category: "costumes",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "clown",
                    effect_id: "clown",
                    title: "Clown",
                    category: "costumes",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "easter_bunney_cutout",
                    effect_id: "easter_bunney_cutout",
                    title: "Easter Bunny Cutout",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "easter_chick_cutout",
                    effect_id: "easter_chick_cutout",
                    title: "Easter Chick Cutout",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "bearded",
                    effect_id: "bearded",
                    title: "Bearded",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "leprechaun",
                    effect_id: "leprechaun",
                    title: "Leprechaun",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "lucky_face",
                    effect_id: "lucky_face",
                    title: "Lucky Face",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "sweet_hearts",
                    effect_id: "sweet_hearts",
                    title: "Sweet Hearts",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "elf_cutout",
                    effect_id: "elf_cutout",
                    title: "Elf Cutout",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "santa_cutout",
                    effect_id: "santa_cutout",
                    title: "Santa Cutout",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "frosty",
                    effect_id: "frosty",
                    title: "Frosty",
                    category: "holidays",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                }
            ]
        }
    ],
    create_look_cta: {
        enabled: true,
        title: "+ Tạo diện mạo",
        button_color: "#f59e0b",
        text_color: "#000000",
        unlocked: true,
        remaining_uses: 999999
    }
};

// ============================================================================
// BỘ LỌC CAMERA SHEET & PICKER CHÍNH HÃNG TỪ FORCEGOLD 4.3
// ============================================================================
const FORCEGOLD_CAMERA_FILTER_CONFIG = {
    allows_custom_filters: true,
    show_filter_button: true,
    sheet_enabled: true,
    open_sheet_immediately: true,
    sheet_filters: [
        {
            title: {
                en: "Goofy"
            },
            filter_ids: [
                "okay_wig",
                "influencer",
                "looks_maxxing",
                "toothless",
                "bye_brows"
            ]
        },
        {
            title: {
                en: "Looks"
            },
            filter_ids: [
                "bowling_ball",
                "blonde_bleached",
                "beard",
                "bob_cut",
                "buns",
                "tatted",
                "mohawk",
                "braces",
                "bye_brows"
            ]
        },
        {
            title: {
                en: "Celebrate"
            },
            filter_ids: [
                "slimed",
                "princess",
                "disco_lights",
                "cash_money",
                "happy_birthday"
            ]
        },
        {
            title: {
                en: "Cute"
            },
            filter_ids: [
                "cutesy",
                "sticker_face",
                "flower_crown",
                "love_bug"
            ]
        },
        {
            title: {
                en: "Costumes"
            },
            filter_ids: [
                "wedding",
                "cowboy_cowgirl",
                "giraffe",
                "clown"
            ]
        },
        {
            title: {
                en: "Holidays"
            },
            filter_ids: [
                "easter_bunney_cutout",
                "easter_chick_cutout",
                "bearded",
                "leprechaun",
                "lucky_face",
                "sweet_hearts",
                "elf_cutout",
                "santa_cutout",
                "frosty"
            ]
        }
    ],
    picker_filters: [
        "okay_wig",
        "influencer",
        "looks_maxxing",
        "toothless",
        "bye_brows",
        "bowling_ball",
        "blonde_bleached",
        "beard",
        "bob_cut",
        "buns",
        "tatted",
        "mohawk",
        "braces",
        "slimed",
        "princess",
        "disco_lights",
        "cash_money",
        "happy_birthday",
        "cutesy",
        "sticker_face",
        "flower_crown",
        "love_bug",
        "wedding",
        "cowboy_cowgirl",
        "giraffe",
        "clown",
        "easter_bunney_cutout",
        "easter_chick_cutout",
        "bearded",
        "leprechaun",
        "lucky_face",
        "sweet_hearts",
        "elf_cutout",
        "santa_cutout",
        "frosty"
    ]
};

// ============================================================================
// CẤU HÌNH CẤP BẬC TIM LOCKET BẠN BÈ (TỪ FORCEGOLD 4.3)
// ============================================================================
const FORCEGOLD_FRIENDS_SHEET_LOCKET_COUNT_CONFIG = {
    items: [
        {
            threshold: 0,
            icon_name: "heart"
        },
        {
            threshold: 1,
            icon_name: "heart.fill"
        },
        {
            threshold: 10,
            emoji: "🤍"
        },
        {
            threshold: 100,
            emoji: "💛"
        },
        {
            threshold: 500,
            emoji: "❤️‍🔥"
        },
        {
            threshold: 1000,
            emoji: "🌟🫶🌟"
        },
        {
            threshold: 2000,
            emoji: "✨💟✨"
        },
        {
            threshold: 5000,
            emoji: "⚡️😵‍💫⚡"
        },
        {
            threshold: 10000,
            emoji: "✨⚡️😱⚡✨"
        }
    ]
};

const FORCEGOLD_FRIEND_LOCKET_COUNT_CONFIG = {
    items: [
        {
            threshold: 0,
            icon_name: "heart"
        },
        {
            threshold: 1,
            icon_name: "heart.fill"
        },
        {
            threshold: 10,
            emoji: "🤍"
        },
        {
            threshold: 100,
            emoji: "💛"
        },
        {
            threshold: 500,
            emoji: "❤️‍🔥"
        },
        {
            threshold: 1000,
            emoji: "✨💗✨"
        },
        {
            threshold: 2000,
            emoji: "✨️⭐️✨"
        },
        {
            threshold: 5000,
            emoji: "✨💎✨"
        },
        {
            threshold: 10000,
            emoji: "✨🔐💛✨"
        }
    ]
};

const FORCEGOLD_DYNAMIC_CAPTION_TYPES = [
    "standard",
    "poll",
    "color_palette",
    "review",
    "music",
    "location",
    "weather",
    "time",
    "streak",
    "star_sign",
    "party_time",
    "locket_count",
    "good_morning",
    "goodnight",
    "ootd",
    "miss_you",
    "custom",
    "phunu_2010",
    "halloween_2026"
];

// ============================================================================
// KHO DỮ LIỆU 140+ CUSTOM CAPTIONS & OVERLAY ITEMS (PHẦN ĐẦU — SECTIONS 1..4)
// (Có thể thêm, sửa màu nền, đổi icon, đổi chữ trực tiếp trên giao diện Web UI)
// ============================================================================
const FORCEGOLD_OVERLAY_SECTIONS_PART_A = [
    {
        section: "🎨 General",
        items: [
            {
                overlay_id: "caption:standard",
                source: "local",
                caption: {
                    type: "standard"
                }
            },
            {
                overlay_id: "caption:review",
                source: "local",
                caption: {
                    type: "review"
                }
            },
            {
                overlay_id: "caption:music",
                source: "local",
                caption: {
                    type: "music"
                }
            },
            {
                overlay_id: "caption:location",
                source: "local",
                caption: {
                    type: "location"
                }
            },
            {
                overlay_id: "caption:weather",
                source: "local",
                caption: {
                    type: "weather"
                }
            },
            {
                overlay_id: "caption:time",
                source: "local",
                caption: {
                    type: "time"
                }
            },
            {
                overlay_id: "caption:streak",
                source: "local",
                caption: {
                    type: "streak"
                }
            },
            {
                overlay_id: "caption:star_sign",
                source: "local",
                caption: {
                    type: "star_sign"
                }
            },
            {
                overlay_id: "caption:poll",
                source: "local",
                caption: {
                    type: "poll"
                }
            },
            {
                overlay_id: "caption:color_palette",
                source: "local",
                caption: {
                    type: "color_palette"
                }
            },
            {
                overlay_id: "caption:locket_count",
                source: "local",
                caption: {
                    type: "locket_count"
                }
            }
        ]
    },
    {
        section: "🎨 Holiday Caption",
        items: [
            {
                overlay_id: "caption:halloween_2026",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#150804",
                            "#C8540D"
                        ]
                    },
                    icon: {
                        data: "🎃",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Halloween",
                    localized_text: {
                        en: "Halloween",
                        vn: "Halloween"
                    },
                    text_color: "#FFB182",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:autumn_2026",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFE0A0",
                            "#F6A53A"
                        ]
                    },
                    icon: {
                        data: "🍂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xin chào Mùa Thu",
                    localized_text: {
                        en: "Xin chào Mùa Thu",
                        vn: "Xin chào Mùa Thu"
                    },
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:christmas_eve_2026",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2FA85F",
                            "#176B3A"
                        ]
                    },
                    icon: {
                        data: "🕯️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Giáng sinh an lành",
                    localized_text: {
                        en: "Giáng sinh an lành",
                        vn: "Giáng sinh an lành"
                    },
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:christmas_day_2026",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E53935",
                            "#A81818"
                        ]
                    },
                    icon: {
                        data: "🎄",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Giáng sinh an lành",
                    localized_text: {
                        en: "Giáng sinh an lành",
                        vn: "Giáng sinh an lành"
                    },
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:new_years_eve_2026",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFC64B",
                            "#FFEDBF"
                        ]
                    },
                    icon: {
                        data: "🥂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xin chào 2027!",
                    localized_text: {
                        en: "Xin chào 2027!",
                        vn: "Xin chào 2027!"
                    },
                    text_color: "#643F00",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:new_years_day_2027",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#3B00EC",
                            "#823FFF"
                        ]
                    },
                    icon: {
                        data: "💫",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xin chào 2027!",
                    localized_text: {
                        en: "Xin chào 2027!",
                        vn: "Xin chào 2027!"
                    },
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:new_years_day_2027_alternate",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF0062",
                            "#FF783F"
                        ]
                    },
                    max_lines: 1,
                    text: "2027",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Decorative by Duy Vinh & Minh Đức",
        items: [
            {
                overlay_id: "caption:NMS",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8E7FF",
                            "#A8F5D0",
                            "#DCCBFF"
                        ]
                    },
                    max_lines: 1,
                    text: "💻 NMS",
                    text_color: "#183153",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ngominhduc_vip",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFD700",
                            "#F59E0B",
                            "#B45309"
                        ]
                    },
                    icon: {
                        data: "👑",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ngô Minh Đức VIP",
                    text_color: "#000000",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFD6A5",
                            "#FFF1A8",
                            "#FFC4D6"
                        ]
                    },
                    max_lines: 1,
                    text: "Cu 🐎",
                    text_color: "#633B24",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tuat",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2C1A0E",
                            "#5D4037",
                            "#D7A86E"
                        ]
                    },
                    icon: {
                        data: "🐕",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tuất",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:snake_vibes",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2E7D32",
                            "#66BB6A"
                        ]
                    },
                    icon: {
                        data: "🐍",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Snake Vibes",
                    localized_text: {
                        en: "Snake Vibes",
                        vn: "Chất rắn"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:du_an_ma",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#263238",
                            "#455A64"
                        ]
                    },
                    icon: {
                        data: "👻",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "dự án ma",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Tình yêu & Cơm chó 💕",
        items: [
            {
                overlay_id: "caption:toi_nho_em",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFFFFF",
                            "#6D9EEB"
                        ]
                    },
                    max_lines: 1,
                    text: "보고 싶어 🥺",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:miss_you",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#EC0C00",
                            "#FF493F"
                        ]
                    },
                    icon: {
                        data: "🥰",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Miss you",
                    text_color: "#FFFFFFDB",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:em_nho_anhh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F2B8CF",
                            "#E8C8EE",
                            "#D7C9F5"
                        ]
                    },
                    icon: {
                        data: "🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "em nhớ anhh",
                    text_color: "#69465F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nho_anh_phien",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0B5CB",
                            "#F6D0DF",
                            "#DCCAF0"
                        ]
                    },
                    icon: {
                        data: "🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "nhớ anh tới mức hơi phiền",
                    text_color: "#70445A",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:i_love_you",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F4BFD3",
                            "#F9D9CF",
                            "#DCCDF5"
                        ]
                    },
                    icon: {
                        data: "💗",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "i love you",
                    text_color: "#70465F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:yeu_cuc_dang",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F2B5C8",
                            "#F8D5D9",
                            "#F6E5D2"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "yêu cục dàng",
                    text_color: "#754454",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:yeu_emmm",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F2AFC6",
                            "#F7C9D9",
                            "#E5CFF4"
                        ]
                    },
                    icon: {
                        data: "💗",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Yeu Emmm",
                    text_color: "#70445C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:yeu_anhhh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8C9F2",
                            "#D5DDF8",
                            "#E8CFF0"
                        ]
                    },
                    icon: {
                        data: "🫶",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Yeu Anhhh",
                    text_color: "#414C72",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:baby_love",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFB6C1",
                            "#FF69B4",
                            "#FF1493"
                        ]
                    },
                    icon: {
                        data: "🧸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Baby Love 💖",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:muon_duoc_om",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF9A9E",
                            "#FECFEF"
                        ]
                    },
                    icon: {
                        data: "🫂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Muốn được ôm",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cho_hun_mieng",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F3AFC7",
                            "#F8D0D8",
                            "#F4C9BB"
                        ]
                    },
                    icon: {
                        data: "😘",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "cho hun miếng coi",
                    text_color: "#754252",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:me_anh_me_ngu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C4C8EF",
                            "#DED3F4",
                            "#EBCDE4"
                        ]
                    },
                    icon: {
                        data: "💤",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "mê anh hơn mê ngủ",
                    text_color: "#4F4770",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:be_be_can_do",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F4C2D5",
                            "#F9E1E8",
                            "#E9D4F5"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "em bé cần được dỗ",
                    text_color: "#75495F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:iu_thi_noi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F4BFD0",
                            "#E9C7EF",
                            "#D7D0F4"
                        ]
                    },
                    icon: {
                        data: "🤭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "iu thì nói, đừng có ngại",
                    text_color: "#68465F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:iu_hong_thi_bao",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F1B5CE",
                            "#F8D6E4",
                            "#E8C8F0"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "iu hong thì bảo",
                    text_color: "#70445E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:anh_thuong_em",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E9B9CF",
                            "#F5D5DF",
                            "#D8C8F0"
                        ]
                    },
                    icon: {
                        data: "🥹",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "anh có thương em thiệt hong",
                    text_color: "#70465D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:yeu_em_nhiem_vu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E9B7CD",
                            "#F3D0DD",
                            "#E4C6F1"
                        ]
                    },
                    icon: {
                        data: "🫡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "yêu em là nhiệm vụ cả đời",
                    text_color: "#71455F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:crush_nhin",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0C0D5",
                            "#E0C8EF",
                            "#C8D5F3"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "crush nhìn em một cái là xong",
                    text_color: "#594664",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ngoai_le_cua_em",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E7B8D0",
                            "#E4D0F2",
                            "#C8D8F2"
                        ]
                    },
                    icon: {
                        data: "🫶",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "anh là ngoại lệ của em",
                    text_color: "#584762",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dang_ban_tuong_tu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1A2980",
                            "#26D0CE"
                        ]
                    },
                    icon: {
                        data: "💭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Đang bận tương tư",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:mac_bay_tinh_yeu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#EE9CA7",
                            "#FFDDE1"
                        ]
                    },
                    icon: {
                        data: "💘",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Mắc bẫy tình yêu",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:minh_cuoi_nhau",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0B8CD",
                            "#F7D4DF",
                            "#E7C9EF"
                        ]
                    },
                    icon: {
                        data: "💍",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hông ấy mình cưới nhau đi",
                    text_color: "#70465B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:wedding_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFE4E1",
                            "#E73C7E"
                        ]
                    },
                    icon: {
                        data: "💍",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Wedding Time!",
                    localized_text: {
                        en: "Wedding Time!",
                        vn: "Đám cưới nè!"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dating_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E91E63",
                            "#F44336"
                        ]
                    },
                    icon: {
                        data: "💕",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Dating Time!",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cam_thay_hanh_phuc",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#EC407A",
                            "#F8BBD0"
                        ]
                    },
                    icon: {
                        data: "🇻🇳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cảm thấy hạnh phúc",
                    localized_text: {
                        en: "Feeling Happy",
                        vn: "Cảm thấy hạnh phúc"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            }
        ]
    }
];
// === KẾT THÚC PHẦN 1 / 6 — GÕ "2" ĐỂ NHẬN TIẾP PHẦN 2 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V10.0 — PART 2 OF 6)
// ============================================================================

// KHO DỮ LIỆU 140+ CUSTOM CAPTIONS & OVERLAY ITEMS (PHẦN TIẾP THEO — SECTIONS 5..6)
const FORCEGOLD_OVERLAY_SECTIONS_PART_B = [
    {
        section: "🎨 Gen Z & Xéo xắt 💅",
        items: [
            {
                overlay_id: "caption:feeling_cute",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F8BBD0",
                            "#E91E63"
                        ]
                    },
                    icon: {
                        data: "🌷",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Feeling Cute",
                    localized_text: {
                        en: "Feeling Cute",
                        vn: "Cảm thấy dthw"
                    },
                    text_color: "#FFFFFFE5",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cutie_pie",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFDEE9",
                            "#FFB6C1",
                            "#FF9AA2"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cutie Pie 🌸",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hello_kitty",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFD1DC",
                            "#FFB7C5",
                            "#FFC0CB"
                        ]
                    },
                    icon: {
                        data: "🌸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hello Kitty 🐱",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ngoan_xinh_iu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F3C1D4",
                            "#F8DDE5",
                            "#E8CFF0"
                        ]
                    },
                    icon: {
                        data: "💗",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ngoan xinh iu của ai đây",
                    text_color: "#71465D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xinh_dep_tuyet_voi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FC5C7D",
                            "#6A82FB"
                        ]
                    },
                    icon: {
                        data: "💅",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xinh đẹp tuyệt vời",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hom_nay_slay",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C5B5E8",
                            "#DDD0F2",
                            "#F0C9DD"
                        ]
                    },
                    icon: {
                        data: "✨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hôm nay cũng slay",
                    text_color: "#514368",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tinh_hoa_hoi_tu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFD700",
                            "#FF8C00"
                        ]
                    },
                    icon: {
                        data: "✨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tinh hoa hội tụ",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xinh_gai_an_phim_1",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F77062",
                            "#FE5196"
                        ]
                    },
                    icon: {
                        data: "💅",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xinh gái ấn phím 1",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xinh_la_tai_nang",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0B5CA",
                            "#F5D2DD",
                            "#EAD1F0"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "xinh là một loại tài năng",
                    text_color: "#70435B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dep_trai_co_gi_sai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF5722",
                            "#FFC107"
                        ]
                    },
                    icon: {
                        data: "😎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Đẹp trai có gì sai",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dep_khong_ly_do",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E5B7CD",
                            "#F0D0DC",
                            "#DCCCF0"
                        ]
                    },
                    icon: {
                        data: "🪞",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đẹp không cần lý do",
                    text_color: "#67455C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cha_nay_tu_luyen_ghe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFDEE9",
                            "#B5FFFC",
                            "#FAD0C4",
                            "#FFD1FF"
                        ]
                    },
                    icon: {
                        data: "🪞",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cha này tự luyến ghê",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:phu_tinh_khong_phu_ban",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#8E2DE2",
                            "#4A00E0"
                        ]
                    },
                    icon: {
                        data: "🕶️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Phụ tình không phụ bản",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:main_character",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D6B8E8",
                            "#E8CDEB",
                            "#F3D2D9"
                        ]
                    },
                    icon: {
                        data: "🎬",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "main character của cuộc đời mình",
                    text_color: "#5A4366",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:vibe_khong_phai_ai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C5B6E5",
                            "#DAD1F0",
                            "#C7D8F0"
                        ]
                    },
                    icon: {
                        data: "🪩",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "vibe này không phải ai cũng có",
                    text_color: "#4A4569",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khi_chat",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#A7B9D5",
                            "#C8D4E8",
                            "#DCCCEB"
                        ]
                    },
                    icon: {
                        data: "😎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "không hoàn hảo nhưng có khí chất",
                    text_color: "#3E4B64",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:sieu_cap_ba_khi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#EC407A",
                            "#F44336"
                        ]
                    },
                    icon: {
                        data: "🐉",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "siêu cấp bá khí",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ba_khi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#8EACCD",
                            "#B5C8DE",
                            "#D7C7E6"
                        ]
                    },
                    icon: {
                        data: "😎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "bá khí ngang ngược",
                    text_color: "#35475D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:du_ba_khi_chua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#CBB4DE",
                            "#DFCBEA",
                            "#F2E3F7"
                        ]
                    },
                    icon: {
                        data: "👑",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Đủ bá khí chưa?",
                    text_color: "#4C385C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:oach_xa_lach",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    icon: {
                        data: "🥬",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "oách xà lách",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cung_cung_di",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFC107",
                            "#FFA000"
                        ]
                    },
                    icon: {
                        data: "🚀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cũng cứng đi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ra_duong_ne_moi_anh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#BCC5D6",
                            "#D7DEEA",
                            "#EDE8F5"
                        ]
                    },
                    icon: {
                        data: "🕶️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ra đường nể mỗi anh",
                    text_color: "#384358",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nhin_la_biet_uy_tin",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2980B9",
                            "#2C3E50"
                        ]
                    },
                    icon: {
                        data: "👌",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Nhìn là biết uy tín",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:flex_den_hoi_tho_cuoi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F7971E",
                            "#FFD200"
                        ]
                    },
                    icon: {
                        data: "💎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Flex đến hơi thở cuối",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hon_hom_qua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B9D7D0",
                            "#D6E6D7",
                            "#E8DFC6"
                        ]
                    },
                    icon: {
                        data: "🫶",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "tui không hơn ai, tui hơn hôm qua",
                    text_color: "#3F554E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_phai_gu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D7B5D4",
                            "#E9CDE1",
                            "#F1D8D0"
                        ]
                    },
                    icon: {
                        data: "💅",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "không phải gu của tất cả, may quá",
                    text_color: "#61445C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:quan_trong_lam",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D4B7D9",
                            "#E8C7D5",
                            "#F1D9D0"
                        ]
                    },
                    icon: {
                        data: "💅",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ủa tưởng mình quan trọng lắm?",
                    text_color: "#63435B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cai_net_ky",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C6B8D9",
                            "#D9C8D8",
                            "#E8C4C9"
                        ]
                    },
                    icon: {
                        data: "😒",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "cái nết kỳ ghê",
                    text_color: "#514052",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ghet_dua_kia_ghe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#A9A4C8",
                            "#C7A6BE",
                            "#E0B9C3"
                        ]
                    },
                    icon: {
                        data: "😒",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ghét đứa kia ghê 😒",
                    text_color: "#493F55",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_ghet_khong_ua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8B6D2",
                            "#D1C4DA",
                            "#E5C5CF"
                        ]
                    },
                    icon: {
                        data: "😒",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "không ghét, chỉ không ưa",
                    text_color: "#4D4358",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:che_manh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF4E50",
                            "#F9D423"
                        ]
                    },
                    icon: {
                        data: "👎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chê mạnh",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:chua_du_wow",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFD1DC",
                            "#FFB7C5",
                            "#FFE4E1"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chưa đủ wow",
                    text_color: "#6E4254",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:roi_let_luon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF9A9E",
                            "#FECFEF",
                            "#FBC2EB",
                            "#A6C1EE"
                        ]
                    },
                    icon: {
                        data: "💅",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "rồi lét luôn",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:roi_gay_luon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF6EC7",
                            "#7873F5",
                            "#4ADEDE",
                            "#FFE66D"
                        ]
                    },
                    icon: {
                        data: "🌈",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "rồi gay luôn",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Meme & Hài hước 🤡",
        items: [
            {
                overlay_id: "caption:cuoi_vcl_m_oi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F7971E",
                            "#FFD200",
                            "#FFEE58"
                        ]
                    },
                    icon: {
                        data: "😂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cười vcl m oi",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cuoi_xiu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFEB3B",
                            "#FF9800"
                        ]
                    },
                    icon: {
                        data: "😎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cười xỉu",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:luon_vui_tuoi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#00F2FE",
                            "#4FACFE"
                        ]
                    },
                    icon: {
                        data: "🤡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Luôn vui tươi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:con_vien_la_lan",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#A8C3A0",
                            "#DCE5D1"
                        ]
                    },
                    icon: {
                        data: "🍂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "côn viên lá làn",
                    text_color: "#344536",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:gian_dang_iu_hong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F3C6D8",
                            "#F8E1E8",
                            "#E7B8D0"
                        ]
                    },
                    icon: {
                        data: "🪳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Gián đáng iu hong🎀",
                    text_color: "#704458",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nau_xoi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E9B8C8",
                            "#F6D4C8",
                            "#D9C9EF"
                        ]
                    },
                    icon: {
                        data: "🙀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Nấu xói",
                    text_color: "#62445C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:am_cha_hui",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F1C0D2",
                            "#F5D9E1",
                            "#E7D1F2"
                        ]
                    },
                    icon: {
                        data: "🎀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ăm chã húi, bà chã hơm",
                    text_color: "#70475C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hong_drama",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#8A2387",
                            "#E94057",
                            "#F27121"
                        ]
                    },
                    icon: {
                        data: "🍿",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hóng drama",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ke_chuyen_nghe_choi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#8A2387",
                            "#E94057"
                        ]
                    },
                    icon: {
                        data: "🍿",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Kể chuyện nghe chơi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:drama_ai_hong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0C4A8",
                            "#F3D8B8",
                            "#D8C6E5"
                        ]
                    },
                    icon: {
                        data: "🍿",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "thân ai nấy lo, drama ai nấy hóng",
                    text_color: "#624736",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:check_var",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    icon: {
                        data: "📺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Check VAR liền",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:co_bien_co_bien",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF512F",
                            "#F09819",
                            "#FFD200"
                        ]
                    },
                    icon: {
                        data: "🚨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Có biến có biến",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:so_ho_la_bao",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F5B8A9",
                            "#F6D0B2",
                            "#E8BFCB"
                        ]
                    },
                    icon: {
                        data: "🚨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "sơ hở là báo",
                    text_color: "#713F40",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:bot_bao",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0B5B5",
                            "#F2D0C4",
                            "#E4C5DB"
                        ]
                    },
                    icon: {
                        data: "🚨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "bớt báo giùm cái",
                    text_color: "#693F4B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ai_so_thi_di_ve",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B71C1C",
                            "#FF5722"
                        ]
                    },
                    icon: {
                        data: "🏃",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ai sợ thì đi về",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:chay_ngay_di",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D31027",
                            "#EA384D"
                        ]
                    },
                    icon: {
                        data: "🏃💨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chạy ngay đi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:len_chua_khong_biet_lay_ai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D7CCC8",
                            "#EFEBE9",
                            "#F5F5F0"
                        ]
                    },
                    icon: {
                        data: "🙏🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "lên chùa không biết lạy ai",
                    text_color: "#5D4037",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dam_nhau_khong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E53935",
                            "#FF7043"
                        ]
                    },
                    icon: {
                        data: "🥊",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đấm nhau không",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hao_han",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#114357",
                            "#F29492"
                        ]
                    },
                    icon: {
                        data: "🗡️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hảo hán",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:mong_ton_hoa_sen",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D8B4E2",
                            "#F8BBD0"
                        ]
                    },
                    icon: {
                        data: "🪷",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Mong tôn hoa sen thấy cảnh này",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:con_cai_nit",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D7CCC8",
                            "#8D6E63"
                        ]
                    },
                    icon: {
                        data: "🧶",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "còn cái nịt",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:minh_la_lop",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#263238",
                            "#455A64"
                        ]
                    },
                    icon: {
                        data: "🛞",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Mình là lốp",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hay_ra_de_qua_a",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFF59D",
                            "#80DEEA"
                        ]
                    },
                    icon: {
                        data: "🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hay ra dẻ quá à!",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:mac_co_qua_hai_oi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFB74D",
                            "#F8BBD0"
                        ]
                    },
                    icon: {
                        data: "😭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Mắc cỡ quá hai ơi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:than_chua_ma_don",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#607D8B",
                            "#37474F"
                        ]
                    },
                    icon: {
                        data: "😔",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Thân chưa mà dỡn",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ai_muon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C5C9E8",
                            "#DFD1F0",
                            "#F0D1DB"
                        ]
                    },
                    icon: {
                        data: "🤨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ủa rồi ai mượn?",
                    text_color: "#49435E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:he_dieu_hanh_la",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8C8DC",
                            "#D1D5E7",
                            "#E6CBE1"
                        ]
                    },
                    icon: {
                        data: "🤨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "bạn mình nhưng hệ điều hành lạ",
                    text_color: "#414B62",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ai_cung_khac",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B6B2D5",
                            "#D6C5DF",
                            "#E8BFC8"
                        ]
                    },
                    icon: {
                        data: "🤡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ai rồi cũng khác, riêng bạn thì lạ",
                    text_color: "#4C4058",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tuong_tuong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C1B6D9",
                            "#D8C5E3",
                            "#E8C1D1"
                        ]
                    },
                    icon: {
                        data: "🤡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "tưởng gì, hóa ra tưởng tượng",
                    text_color: "#51405C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:be_hong_sai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D4BCE8",
                            "#E8D0F0",
                            "#F1D0D9"
                        ]
                    },
                    icon: {
                        data: "😌",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "bé hông có sai, tại đời sai",
                    text_color: "#5D4667",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_vua_long",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D1C8E5",
                            "#E8D4DF",
                            "#E8D7BC"
                        ]
                    },
                    icon: {
                        data: "😌",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "sống sao cho vừa lòng thiên hạ? thôi khỏi",
                    text_color: "#51465E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:boc_trung_sit_rit",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#9C27B0",
                            "#7B1FA2"
                        ]
                    },
                    icon: {
                        data: "🎁",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Bóc trúng sít rịt",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hen_lam_moi_xui_duoc_vay_a",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#00BCD4",
                            "#0097A7"
                        ]
                    },
                    icon: {
                        data: "😅",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hên lắm mới xui được vậy á",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:giam_suc_manh_con_tuong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#4CAF50",
                            "#00BCD4"
                        ]
                    },
                    icon: {
                        data: "🎮",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Giảm sức mạnh con tướng",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:phu_huynh_dung_xem",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF0844",
                            "#FFB199"
                        ]
                    },
                    icon: {
                        data: "🙈",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Phụ huynh đừng xem",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xin_vinh_biet_cu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#232526",
                            "#414345"
                        ]
                    },
                    icon: {
                        data: "🕯️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xin vĩnh biệt cụ",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            }
        ]
    }
];
// === KẾT THÚC PHẦN 2 / 6 — GÕ "3" ĐỂ NHẬN TIẾP PHẦN 3 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V10.0 — PART 3 OF 6)
// ============================================================================

// KHO DỮ LIỆU 140+ CUSTOM CAPTIONS & OVERLAY ITEMS (PHẦN C — SECTIONS 7..9)
const FORCEGOLD_OVERLAY_SECTIONS_PART_C = [
    {
        section: "🎨 Bất ổn & Hết cứu 🫠",
        items: [
            {
                overlay_id: "caption:bat_on_that_su",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#636363",
                            "#A2AB58"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Bất ổn thật sự",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nay_la_het_cuu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#607D8B",
                            "#455A64"
                        ]
                    },
                    icon: {
                        data: "❌",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Này là hết cứu",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:het_cuu_thiet",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8C9E8",
                            "#D5D5F0",
                            "#E9CDE0"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hết cứu thiệt chứ",
                    text_color: "#454660",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:toi_cong_chuyen",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F2B5A7",
                            "#F6D1B5",
                            "#E9C2D5"
                        ]
                    },
                    icon: {
                        data: "💀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "tới công chuyện nữa rồi",
                    text_color: "#634044",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:toang_that_roi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F44336",
                            "#B71C1C"
                        ]
                    },
                    icon: {
                        data: "🐉",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Toang thật rồi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:toi_roi_toi_roi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#673AB7",
                            "#512DA8"
                        ]
                    },
                    icon: {
                        data: "❗",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tới rồi tới rồi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:goi_xong_lun",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F3B6AF",
                            "#F6D2C2",
                            "#EAC8D9"
                        ]
                    },
                    icon: {
                        data: "😭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "gòi xong lun á",
                    text_color: "#6A4549",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xiu_ngang",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C0B7E5",
                            "#D8D0F0",
                            "#EACDE2"
                        ]
                    },
                    icon: {
                        data: "💀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "xĩu ngang xĩu dọc",
                    text_color: "#504567",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:guc_nga",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#3A1C71",
                            "#D76D77"
                        ]
                    },
                    icon: {
                        data: "📉",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Gục ngã",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:bat_luc",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2C3E50",
                            "#3498DB"
                        ]
                    },
                    icon: {
                        data: "🏳️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Bất lực",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:rot_nuoc_mat",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1CB5E0",
                            "#000046"
                        ]
                    },
                    icon: {
                        data: "😭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Rớt nước mắt",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tien_dinh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C33764",
                            "#1D2671"
                        ]
                    },
                    icon: {
                        data: "🌪️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tiền đình",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nao_bao_tri",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8E0D2",
                            "#D8EAD8",
                            "#C9D9F0"
                        ]
                    },
                    icon: {
                        data: "🧠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "não đang bảo trì",
                    text_color: "#35564F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:overthinking_vai_chuong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2C3E50",
                            "#4CA1AF"
                        ]
                    },
                    icon: {
                        data: "🤯",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Overthinking vai chưởng",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tram_cam_nhe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1F1C2C",
                            "#928DAB"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Trầm cảm nhẹ",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_cam_xuc",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#434343",
                            "#000000"
                        ]
                    },
                    icon: {
                        data: "🗿",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Không cảm xúc",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:mieng_cuoi_long_khong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C5C8D8",
                            "#D9CBDD",
                            "#E7C9CE"
                        ]
                    },
                    icon: {
                        data: "🙂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "miệng cười nhưng lòng thì không",
                    text_color: "#4F4B5B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hom_nay_toi_buon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#141E30",
                            "#243B55"
                        ]
                    },
                    icon: {
                        data: "🥀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hôm nay tôi buồn",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dem_nay_noi_buon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#929FC8",
                            "#B5B6D8",
                            "#D4C7E4"
                        ]
                    },
                    icon: {
                        data: "🌙",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đêm nay ai ôm nỗi buồn",
                    text_color: "#3D4668",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:em_on_ap_luc",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#AEBBD3",
                            "#C8C9E1",
                            "#E0C9D9"
                        ]
                    },
                    icon: {
                        data: "🥲",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "em ổn, ổn áp lực",
                    text_color: "#45475F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:mot_minh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#AEB8D1",
                            "#C7C7DF",
                            "#DED0E0"
                        ]
                    },
                    icon: {
                        data: "🫂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "thôi thì mình lại một mình",
                    text_color: "#45475F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nan_nhan",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F3C7D9",
                            "#F6D9D0",
                            "#E5CFF0"
                        ]
                    },
                    icon: {
                        data: "🥹",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "tui là nạn nhân",
                    text_color: "#70495D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ai_cuu_tui",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0B6B6",
                            "#F5D0C3",
                            "#E8C6DE"
                        ]
                    },
                    icon: {
                        data: "🆘",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "òi ai cứu tui",
                    text_color: "#6A4248",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:song_gio_phu_doi_trai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#3A1C71",
                            "#D76D77"
                        ]
                    },
                    icon: {
                        data: "🌪️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Sóng gió phủ đời trai",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:thuong_nguoi_khong_thuong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C8A6C4",
                            "#D9B9D0",
                            "#E7C8D6"
                        ]
                    },
                    icon: {
                        data: "💔",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "thương người không thương mình",
                    text_color: "#5D3F59",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tu_da_tinh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B9B7DC",
                            "#D2C9EA",
                            "#E6CADF"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "lại tự mình đa tình",
                    text_color: "#4D4567",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_du_tot",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#AFC6D8",
                            "#C8D5E2",
                            "#E0D1DE"
                        ]
                    },
                    icon: {
                        data: "🌧️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "chắc tại mình không đủ tốt",
                    text_color: "#455467",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hy_vong_that_vong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C5B8D8",
                            "#D8C8DF",
                            "#E7CBD2"
                        ]
                    },
                    icon: {
                        data: "🥀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "một chút hy vọng, một đống thất vọng",
                    text_color: "#52445B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:het_duyen_het_thuong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B9B9D9",
                            "#D2CBE5",
                            "#E8D2E0"
                        ]
                    },
                    icon: {
                        data: "💭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hết duyên hay hết thương?",
                    text_color: "#4E4968",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nguoi_vui_nho",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#ADB9CB",
                            "#C7C9D8",
                            "#DED0D9"
                        ]
                    },
                    icon: {
                        data: "🩶",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "người vui có nhớ người buồn không",
                    text_color: "#464D5B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:da_xem_chua_rep",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B9C6E3",
                            "#D0D4ED",
                            "#E9CFE1"
                        ]
                    },
                    icon: {
                        data: "📱",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đã xem, chưa rep, đã đau",
                    text_color: "#444C69",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dung_im_lang",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E0B9D2",
                            "#E9CFE4",
                            "#D3CFF0"
                        ]
                    },
                    icon: {
                        data: "🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đừng im lặng với em mà",
                    text_color: "#62445F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nho_thi_nho",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D0B8D9",
                            "#E2CBE5",
                            "#E8D0D6"
                        ]
                    },
                    icon: {
                        data: "🙂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "nhớ thì nhớ, quay lại thì thôi",
                    text_color: "#57445F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:em_hong_doi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D7C1E8",
                            "#E9D6EF",
                            "#F2C9D5"
                        ]
                    },
                    icon: {
                        data: "🥲",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "em hong có dỗi, em chỉ buồn",
                    text_color: "#624966",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:doi_roi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF5F6D",
                            "#FFC371"
                        ]
                    },
                    icon: {
                        data: "😤",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Dỗi rồi",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dung_choc_be",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F1BDD0",
                            "#F8DCE5",
                            "#E8D1F2"
                        ]
                    },
                    icon: {
                        data: "🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "thui mừ đừng có chọc bé",
                    text_color: "#70475D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dung_lam_be_quao",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E8B7D2",
                            "#E9C9EA",
                            "#D0D1F0"
                        ]
                    },
                    icon: {
                        data: "😾",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đừng có làm bé quạo",
                    text_color: "#62445F",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xin_lui_duoc_chua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F6D365",
                            "#FDA085"
                        ]
                    },
                    icon: {
                        data: "🥺",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xin lũi được chưa",
                    text_color: "#000000",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:biet_roi_kho",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0C5D6",
                            "#F4D8E2",
                            "#DED0F0"
                        ]
                    },
                    icon: {
                        data: "🥲",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "bíc gòi khổ lém",
                    text_color: "#704A60",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hong_be_oi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F3B9D0",
                            "#F8D9E5",
                            "#E8D0F2"
                        ]
                    },
                    icon: {
                        data: "🥹",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hong bé ơi",
                    text_color: "#70465E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khum_biet_nua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C4B9E6",
                            "#DDD0F1",
                            "#EBD1E4"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "khum có bíc nữa",
                    text_color: "#514766",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cai_deo_ma",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF6B6B",
                            "#FF8E53",
                            "#FFD166"
                        ]
                    },
                    icon: {
                        data: "🤬",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "cái đéo má ??",
                    text_color: "#542323",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cai_gi_vay_troi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F44336",
                            "#D32F2F"
                        ]
                    },
                    icon: {
                        data: "❗",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cái gì vậy trời",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_the_tin_noi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#00BCD4",
                            "#0097A7"
                        ]
                    },
                    icon: {
                        data: "❓",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Không thể tin nổi",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:vl_m_oi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1F1C2C",
                            "#928DAB",
                            "#C9D6FF"
                        ]
                    },
                    icon: {
                        data: "😳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "vl m ơi?",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ua_alo",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C9CBE8",
                            "#E2D9F3",
                            "#F5E9F7"
                        ]
                    },
                    icon: {
                        data: "🐱",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ủa alo❓",
                    text_color: "#463E5E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:alo_gi_da",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8D8E8",
                            "#D8C9F0",
                            "#F3D2DF"
                        ]
                    },
                    icon: {
                        data: "😭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ủa alo, gì dạ?",
                    text_color: "#39485E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ho",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#BFD4E8",
                            "#D6D9F0",
                            "#EACFE4"
                        ]
                    },
                    icon: {
                        data: "🤨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "hỏ?",
                    text_color: "#45506A",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:noi_chuyen_met",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C0B9D9",
                            "#D8C9E3",
                            "#E9CDD6"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "nói chuyện nghe mắc mệt",
                    text_color: "#50445D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:het_noi_noi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B9B5D6",
                            "#D4C7E2",
                            "#E6C9D4"
                        ]
                    },
                    icon: {
                        data: "🙄",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đúng là hết nói nổi",
                    text_color: "#4B435C",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:chan_bo_may_di",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#870000",
                            "#190A05"
                        ]
                    },
                    icon: {
                        data: "🙄",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chan bố mày đi",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:lai_phai_lo",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#A8B9D0",
                            "#C9BDE8",
                            "#F0C6D8"
                        ]
                    },
                    icon: {
                        data: "🫠",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "lại phải lọ",
                    text_color: "#49445E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tuyet_doi_khong_nghe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF416C",
                            "#FF4B2B"
                        ]
                    },
                    icon: {
                        data: "🙉",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tuyệt đối không nghe",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_thay_khong_nghe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C4D9CB",
                            "#E5E6D0",
                            "#F3D9C5"
                        ]
                    },
                    icon: {
                        data: "🙈",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "không biết, không thấy, không nghe",
                    text_color: "#425348",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:noi_it_lo",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B9AFD5",
                            "#D5BED4",
                            "#E8C5CE"
                        ]
                    },
                    icon: {
                        data: "🤫",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "nói ít thôi, lộ hết bây giờ",
                    text_color: "#4E4058",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nguoi_im_lang_gap_nguoi_hay_noi",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#232526",
                            "#414345",
                            "#6C7A89",
                            "#B0BEC5"
                        ]
                    },
                    icon: {
                        data: "🤐",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Người im lặng gặp người hay nói",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:noi_het_bi_mat_thi_co_yeu_hong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D8B4E2",
                            "#EAC7D8",
                            "#C4D7F2"
                        ]
                    },
                    icon: {
                        data: "🤫",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Nói hết bí mật thì có yêu hong",
                    text_color: "#55415F",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Deadline & Tiền bạc 💸",
        items: [
            {
                overlay_id: "caption:deadline_ruot",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#ED213A",
                            "#93291E"
                        ]
                    },
                    icon: {
                        data: "🔥",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Deadline dí tụt quần",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:doi_tru_deadline",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0D1A4",
                            "#F5E2BD",
                            "#D5D9EF"
                        ]
                    },
                    icon: {
                        data: "📚",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đời cho gì nhận nấy, trừ deadline",
                    text_color: "#5B4A35",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:di_lam_vi_dam_me",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FDC830",
                            "#F37335"
                        ]
                    },
                    icon: {
                        data: "🤡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Đi làm vì đam mê",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ca_o_ran_doc",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F2027",
                            "#1B5E20",
                            "#66BB6A"
                        ]
                    },
                    icon: {
                        data: "🐍",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cả ổ rắn độc",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nghien_cuu_khoa_hoc",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F2027",
                            "#2C5364"
                        ]
                    },
                    icon: {
                        data: "☕",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cần nạp cafein gấp",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tien_dau_ma_tieu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    icon: {
                        data: "💸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tiền đâu mà tiêu",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:luc_nao_co_tien_thi_moi_di_a",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F2027",
                            "#203A43",
                            "#2C5364"
                        ]
                    },
                    icon: {
                        data: "💸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Lúc nào có tiền thì mới đi á",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:doc_so_tai_khoan",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1E90FF",
                            "#00D4FF"
                        ]
                    },
                    icon: {
                        data: "💳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "đọc số tài khoản",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:co_tien_lam_phien_thien_ha",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#BFA06A",
                            "#E8D5AD",
                            "#F6EBDD"
                        ]
                    },
                    icon: {
                        data: "💰",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Có tiền làm phiền thiên hạ",
                    text_color: "#493824",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:co_tien_noi_tiep",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#BFA06A",
                            "#E8D5AD",
                            "#F6EBDD"
                        ]
                    },
                    icon: {
                        data: "💸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "có tiền thì nói chuyện tiếp",
                    text_color: "#493824",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:doc_lap_tai_chinh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8C8B3",
                            "#D9DFC5",
                            "#EAD9B7"
                        ]
                    },
                    icon: {
                        data: "💰",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "độc lập tài chính, độc thân tình cảm",
                    text_color: "#405340",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cu_tu_tu_khoai_se_nhu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#56AB2F",
                            "#A8E063"
                        ]
                    },
                    icon: {
                        data: "🥔",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cứ từ từ khoai sẽ nhừ",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:kiem_tra_nhan_pham",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#654EA3",
                            "#EAAFC8"
                        ]
                    },
                    icon: {
                        data: "🎲",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Kiểm tra nhân phẩm",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Daily & Đời sống ☕",
        items: [
            {
                overlay_id: "caption:good_morning",
                source: "remote",
                daily_start_hour: 5,
                daily_end_hour: 10,
                caption: {
                    background: {
                        colors: [
                            "#EF7402",
                            "#EABF0F"
                        ]
                    },
                    icon: {
                        data: "☀️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Good morning",
                    text_color: "#FFFFFFE5",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ngay_moi_vui_ve",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#4CAF50",
                            "#2E7D32"
                        ]
                    },
                    icon: {
                        data: "☀️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ngày mới vui vẻ",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:coffee_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#4E342E",
                            "#8D6E63"
                        ]
                    },
                    icon: {
                        data: "☕",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Coffee Time!",
                    localized_text: {
                        en: "Coffee Time!",
                        vn: "Giờ uống cà phê!"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:matcha_latte",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#C8E6C9",
                            "#A5D6A7",
                            "#81C784"
                        ]
                    },
                    icon: {
                        data: "🍃",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Matcha Latte 🍵",
                    text_color: "#1B5E20E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:mixue_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFF9C4",
                            "#F8BBD0"
                        ]
                    },
                    icon: {
                        data: "🍦",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Mixue Time!",
                    localized_text: {
                        en: "Mixue Time!",
                        vn: "Giờ Mixue!"
                    },
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tien_mua_tra_sua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D7B77D",
                            "#EAD6AA",
                            "#F5E7CC"
                        ]
                    },
                    icon: {
                        data: "🧋",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "tiền không mua được tất cả, nhưng mua được trà sữa",
                    text_color: "#5D472B",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:an_com_chua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF9800",
                            "#F57C00"
                        ]
                    },
                    icon: {
                        data: "🍽️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ăn cơm chưa?",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dinner_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFCCBC",
                            "#FF8A80"
                        ]
                    },
                    icon: {
                        data: "🍽️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Dinner Time!",
                    localized_text: {
                        en: "Dinner Time!",
                        vn: "Giờ ăn tối!"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:di_choi_khong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E91E63",
                            "#C2185B"
                        ]
                    },
                    icon: {
                        data: "✈️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Đi chơi không?",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:party_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#5EFFF5",
                            "#FCFF57"
                        ]
                    },
                    icon: {
                        data: "🪩",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Party Time!",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tuyet_voi_uong_nao",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F0C58E",
                            "#F5D9A9",
                            "#EBC6B8"
                        ]
                    },
                    icon: {
                        data: "🥂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "tuyệt vời, uống nào!",
                    text_color: "#65462D",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:shopping_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B3E5FC",
                            "#FFFFFF"
                        ]
                    },
                    icon: {
                        data: "🛍️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Shopping Time!",
                    localized_text: {
                        en: "Shopping Time!",
                        vn: "Giờ mua sắm!"
                    },
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cinema_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1A237E",
                            "#455A64"
                        ]
                    },
                    icon: {
                        data: "🎬",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cinema Time!",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tuyet_doi_dien_anh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#455A64",
                            "#263238"
                        ]
                    },
                    icon: {
                        data: "📷",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tuyệt đối điện ảnh",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:qua_la_dien_anh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#26A69A",
                            "#00897B"
                        ]
                    },
                    icon: {
                        data: "📷",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Quá là điện ảnh",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:locket_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#ECEFF1",
                            "#B3E5FC"
                        ]
                    },
                    icon: {
                        data: "📷",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Locket Time!",
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ootd",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FFFFFF",
                            "#DBDBDB"
                        ]
                    },
                    icon: {
                        data: "🕶",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "OOTD",
                    text_color: "#101010E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:chilling_time",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#E1BEE7",
                            "#F8BBD0"
                        ]
                    },
                    icon: {
                        data: "🌴",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chilling Time!",
                    localized_text: {
                        en: "Chilling Time!",
                        vn: "Giờ thư giãn!"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:graduation_day",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1A237E",
                            "#283593"
                        ]
                    },
                    icon: {
                        data: "🎓",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Happy Graduation Day!",
                    localized_text: {
                        en: "Happy Graduation Day!",
                        vn: "Chúc mừng tốt nghiệp!"
                    },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hoi_chieu_troi_mua",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#546E7A",
                            "#263238"
                        ]
                    },
                    icon: {
                        data: "🌧️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hồi chiều trời mưa...",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:rainy_day",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#6D4C41",
                            "#8D6E63",
                            "#BCAAA4"
                        ]
                    },
                    icon: {
                        data: "☕",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Rainy Day ☕🌧️",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cam_lanh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#2193B0",
                            "#6DD5ED"
                        ]
                    },
                    icon: {
                        data: "🤧",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cảm lạnh",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:bau_troi_da_ly_huong",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B8A1D9",
                            "#D8C6E8",
                            "#A9B8E8"
                        ]
                    },
                    icon: {
                        data: "🌌",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "nhìn bầu trời màu dạ lý hương",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:night_vibes",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B993D6",
                            "#8CA6DB",
                            "#C9B1FF"
                        ]
                    },
                    icon: {
                        data: "🪐",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Night Vibes 🌌",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:2am_thoughts",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F2027",
                            "#203A43",
                            "#2C5364"
                        ]
                    },
                    icon: {
                        data: "💭",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "2:00 AM Thoughts 🌙",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:goodnight",
                source: "remote",
                daily_start_hour: 19.5,
                daily_end_hour: 24,
                caption: {
                    background: {
                        colors: [
                            "#370C6F",
                            "#575CD4"
                        ]
                    },
                    icon: {
                        data: "🌙",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Goodnight",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ngu_ngon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#3F51B5",
                            "#1A237E"
                        ]
                    },
                    icon: {
                        data: "🌙",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ngủ ngon",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:sweet_dream",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#A1C4FD",
                            "#C2E9FB",
                            "#E0F7FA"
                        ]
                    },
                    icon: {
                        data: "☁️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Sweet Dream 🧊",
                    text_color: "#1A237EE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nhiem_vu_di_ngu",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#AEBDE0",
                            "#C8D0EA",
                            "#DCD1E9"
                        ]
                    },
                    icon: {
                        data: "🫡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "nhiệm vụ hệ thống: đi ngủ",
                    text_color: "#3F4B6A",
                    type: "static_content"
                }
            }
        ]
    }
];

const MASTER_DEFAULT_OVERLAY_SECTIONS = [
    ...FORCEGOLD_OVERLAY_SECTIONS_PART_A,
    ...FORCEGOLD_OVERLAY_SECTIONS_PART_B,
    ...FORCEGOLD_OVERLAY_SECTIONS_PART_C
];

// ============================================================================
// CẤU HÌNH TỔNG HỢP MẶC ĐỊNH (DEFAULT_CONFIG) — HỢP NHẤT CẢ 4 FILE
// (Toàn bộ các thông số dưới đây đều có thể chỉnh sửa trực tiếp trên Web UI)
// ============================================================================
const DEFAULT_CONFIG = {
    // 1. Gói đăng ký & Thời gian (locket_25_05_2026 + locketfix8.js)
    lockDate: "2026-05-25",
    lockTime: "T08:30:00Z",
    expireDate: "9999-01-09",
    expireTime: "T10:10:14Z",
    productId: "locket_1600_1y",
    ownershipType: "PURCHASED",
    periodType: "normal",
    store: "app_store",
    storeTransactionId: "2000001108724193",
    priceAmount: 399000,
    priceCurrency: "VND",
    appVersion: "1.0",
    forceSandboxFalse: true,
    alwaysForceBadge: true,
    friendsBadgeDefault: true,
    cronKeepAlive: true,
    notifyOnSync: true,
    enableNmsMapping: true,
    enableHeader7StripEtag: true,

    // 2. Camera, Photobooth & AI Looks
    unlockAllCameraEffects: true,
    photoboothEnabled: true,
    eventEffectsEnabled: true,
    playfulLooksEnabled: true,
    appearanceLooksEnabled: true,
    celebrationEffectsEnabled: true,
    createLookButtonEnabled: true,
    aiFilterEnabled: true,
    aiFilterQuota: 999999,
    aiFilterDailyLimit: 999999,
    aiFilterUsed: 0,
    aiFilterUnlimited: true,

    // 3. Thông số Camera & Video từ forceGold4.3.js (Chỉnh được trên Web UI)
    videoMaxDuration: 30.0,
    goldMaxDuration: 30.0,
    cameraRollMaxDuration: 30.0,
    videoQualityMbps: 0.9,
    uploadMainImageQuality: 1.0,
    uploadMainImageSize: 1440,
    uploadThumbnailQuality: 1.0,
    uploadThumbnailSize: 1020,
    ultraWideEnabled: true,
    telephotoEnabled: true,
    volumeButtonShutter: true,
    flashButtonEnabled: true,
    srgbColorSpace: true,
    lanczosResampling: true,
    livePhotosEnabled: true,
    livePhotoLoopMode: "never",
    openFilterSheetImmediately: true,

    // 4. Feature Gates, Bạn bè, Streak, Chat & Moments (Chỉnh được trên Web UI)
    fgAppIconPicker: true,
    fgCameraRoll: true,
    fgCameraTheme: true,
    fgLocketViews: true,
    fgLongCaptions: true,
    fgLongerVideo: true,
    fgUnlimitedFriends: true,
    fgPrioritySupport: true,
    fgProfileBadge: true,
    fgRemoveAds: true,
    fgCustomWidgetFrames: true,
    fgStreakRecovery: true,
    lunarNewYearIconEnabled: true,
    maxFriendsCount: 999999,
    streakMinRecoveryCount: 0,
    streakMinDisplayCount: 0,
    streakVisualizationStyle: "gradient",
    momentViewsV2Enabled: true,
    momentReactionsV2Enabled: true,
    chatReactionsEnabled: true,
    typingIndicatorsEnabled: true,
    unsendMessageEnabled: true,
    timeTravelRewindEnabled: true,
    rollcallEnabled: true,

    // 5. Widget Frame Event & CDN / Cache (Chỉnh được trên Web UI)
    widgetEventEnabled: true,
    widgetEventUid: "midautumn_2026",
    widgetEventUrl: "https://i.postimg.cc/fbY7MGdR/hlw.png",
    widgetEventPlacement: "below",
    widgetEventMaxImages: 5,
    cdnReplacementEnabled: true,
    cdnSourceDomain: "firebasestorage.googleapis.com",
    cdnTargetDomain: "cdn.locketcamera.com",
    historyCacheAgeDays: 1000,
    imageCacheMaxAgeSec: 157680000,
    disableHistoryAds: true,
    disableSentryTracking: true,

    // 6. DoH Network Engine
    dohEnabled: true,
    dohServerUrl: INTEGRATED_NET_ENGINE.dohServerUrl,
    dohPrimaryIp: INTEGRATED_NET_ENGINE.serverAddresses[0],
    dohSecondaryIp: INTEGRATED_NET_ENGINE.serverAddresses[1],
    interceptCloudFunctions: true,
    bypassSslPinningHeaders: true,
    blockAdsAndTelemetry: true,
    canvasSequenceEnabled: true,
    canvasFrameBaseUrl: "",
    canvasTotalFrames: 147,
    scrollDampingFactor: 0.08,

    // 7. In-App Welcome Popup & Feature Discovery Popup (forceGold4.3 + V9)
    popupEnabled: true,
    popupAutoShow: false,
    popupStyle: "bottom_sheet_dark_gold",
    popupBadge: "LOCKET GOLD",
    popupHeader: "Đã mở khoá GOLD thành công!",
    popupTitle: "Ngô Minh Đức",
    popupSubtitle: "Anh Yêu Tất Cả Các Em",
    popupImage: THAY_IMAGE_PATH,
    popupBtnText: "Hoàn tất",
    discoveryPopupTag: "LOCKET GOLD NMS",
    discoveryPopupTitle: "Đã Kích Hoạt 💛",
    discoveryPopupFeatureTitle: "Ngô Minh Đức · Locket Gold Pro ✨",
    discoveryPopupFeatureBody: "Đã mở khoá toàn bộ 140+ Caption, Photobooth & Camera 30s 💛",
    discoveryPopupImageUrl: "https://i.postimg.cc/15BPkqNN/173376ce-0cb2-411c-80db-fe9adc931718.png",
    discoveryPopupBtnText: "Xong",
    revokedPopupBadge: "THÔNG BÁO HỆ THỐNG",
    revokedPopupHeader: "Đã thu hồi LOCKET GOLD!",
    revokedPopupTitle: "Tài khoản đã bị Admin chặn & thu hồi Gold",
    revokedPopupSubtitle: "Toàn bộ huy hiệu Locket Gold, Khung Photobooth và Tạo diện mạo AI đã bị khoá.",
    revokedPopupBtnText: "Đã hiểu",
    pushNotifyOnActivate: true,
    pushCooldownSeconds: 12,
    pushTitle: "LOCKET GOLD — Đã mở khoá GOLD thành công!",
    pushSubtitle: "Ngô Minh Đức",
    pushBody: "Anh Yêu Tất Cả Các Em"
};

// ============================================================================
// KHOÁ LƯU TRỮ BỘ NHỚ ĐỆM ($persistentStore / $prefs)
// ============================================================================
const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V10";
const USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
const USERNAME_CACHE_KEY = "LOCKET_LAST_USERNAME";
const AVATAR_CACHE_KEY = "LOCKET_LAST_AVATAR";
const AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
const RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
const REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";
const LOCAL_ADMIN_DB_KEY = "LOCKET_BENTO_USERS_DB_V4";
const ADMIN_SESSION_KEY = "LOCKET_BENTO_ADMIN_SESSION_V4";
const LAST_INAPP_ALERT_TS_KEY = "LOCKET_INAPP_ALERT_TS_V4";
const LAST_GOLD_PUSH_TS_KEY = "LOCKET_GOLD_OPEN_ALERT_TS_V8";
const DOH_STATUS_CACHE_KEY = "LOCKET_DOH_HEALTH_STATUS_V8";
const FRIENDS_BADGE_DB_KEY = "LOCKET_FRIENDS_BADGE_MAP_V6";
const CUSTOM_CAPTIONS_DB_KEY = "LOCKET_CUSTOM_CAPTIONS_STUDIO_V10";

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
        notify(title, subtitle, body, mediaUrl) {
            try {
                const t = String(title || "LOCKET GOLD — Đã mở khoá GOLD thành công!");
                const s = String(subtitle || "");
                const b = String(body || "");
                if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
                    if (mediaUrl && /^https?:\/\//i.test(mediaUrl)) {
                        $notification.post(t, s, b, { "media-url": mediaUrl });
                    } else {
                        $notification.post(t, s, b);
                    }
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

// ============================================================================
// BỘ MÁY STUDIO QUẢN LÝ CAPTION: THÊM CAP MỚI, SỬA CAP & XOÁ CAP TRÊN WEB UI
// ============================================================================
function getCustomCaptionsDb() {
    try {
        const raw = Env.read(CUSTOM_CAPTIONS_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                return {
                    added: Array.isArray(parsed.added) ? parsed.added : [],
                    deletedIds: parsed.deletedIds && typeof parsed.deletedIds === "object" ? parsed.deletedIds : {},
                    overrides: parsed.overrides && typeof parsed.overrides === "object" ? parsed.overrides : {}
                };
            }
        }
    } catch (e) {}
    return {
        added: [],
        deletedIds: {},
        overrides: {}
    };
}

function saveCustomCaptionsDb(db) {
    const cleanDb = {
        added: Array.isArray(db.added) ? db.added : [],
        deletedIds: db.deletedIds && typeof db.deletedIds === "object" ? db.deletedIds : {},
        overrides: db.overrides && typeof db.overrides === "object" ? db.overrides : {}
    };
    Env.write(JSON.stringify(cleanDb), CUSTOM_CAPTIONS_DB_KEY);
    return cleanDb;
}

function createOrUpdateCaptionInStudio(params) {
    const db = getCustomCaptionsDb();
    const rawId = String(params.overlay_id || "").trim();
    const cleanSlug = rawId
        ? (rawId.startsWith("caption:") ? rawId : "caption:" + rawId.replace(/[^a-zA-Z0-9_.-]/g, "_"))
        : ("caption:custom_" + Date.now());

    const textVal = String(params.text || "Caption VIP").trim();
    const emojiVal = String(params.emoji || "").trim();
    const sectionVal = String(params.section || "✨ Caption Tự Chế (Custom Studio)").trim();
    const c1 = String(params.color1 || "#FFD700").trim();
    const c2 = String(params.color2 || "#F59E0B").trim();
    const c3 = String(params.color3 || "").trim();
    const textColorVal = String(params.textColor || "#000000E6").trim();

    const colorsArr = [c1, c2];
    if (c3 && /^#[0-9A-Fa-f]{3,8}$/.test(c3)) {
        colorsArr.push(c3);
    }

    const captionPayload = {
        background: {
            colors: colorsArr
        },
        max_lines: 1,
        text: textVal,
        localized_text: {
            en: textVal,
            vn: textVal
        },
        text_color: textColorVal,
        type: "static_content"
    };

    if (emojiVal) {
        captionPayload.icon = {
            data: emojiVal,
            type: "emoji"
        };
    }

    const itemObj = {
        overlay_id: cleanSlug,
        section: sectionVal,
        source: "remote",
        caption: captionPayload,
        is_custom_added: true,
        updated_at: new Date().toISOString().replace("T", " ").slice(0, 19)
    };

    // Nếu trùng ID với 1 caption gốc có sẵn -> lưu vào bảng ghi đè (overrides) và gỡ khỏi danh sách xoá
    let isBuiltIn = false;
    for (const sec of MASTER_DEFAULT_OVERLAY_SECTIONS) {
        for (const it of sec.items) {
            if (it.overlay_id === cleanSlug) {
                isBuiltIn = true;
                break;
            }
        }
        if (isBuiltIn) break;
    }

    delete db.deletedIds[cleanSlug];

    if (isBuiltIn) {
        db.overrides[cleanSlug] = itemObj;
    } else {
        const existingIdx = db.added.findIndex(x => x && x.overlay_id === cleanSlug);
        if (existingIdx >= 0) {
            db.added[existingIdx] = itemObj;
        } else {
            db.added.unshift(itemObj);
        }
    }

    saveCustomCaptionsDb(db);
    return itemObj;
}

function deleteCaptionFromStudio(overlayId) {
    const id = String(overlayId || "").trim();
    if (!id) return false;
    const db = getCustomCaptionsDb();

    // Xoá khỏi danh sách tự thêm nếu có
    db.added = db.added.filter(x => x && x.overlay_id !== id);
    // Xoá khỏi danh sách sửa đổi nếu có
    delete db.overrides[id];
    // Đánh dấu đã xoá đối với caption mặc định
    db.deletedIds[id] = true;

    saveCustomCaptionsDb(db);
    return true;
}

function restoreSingleDeletedCaption(overlayId) {
    const id = String(overlayId || "").trim();
    if (!id) return false;
    const db = getCustomCaptionsDb();
    delete db.deletedIds[id];
    saveCustomCaptionsDb(db);
    return true;
}

function resetAllStudioCaptionsToDefault() {
    saveCustomCaptionsDb({
        added: [],
        deletedIds: {},
        overrides: {}
    });
}

// Hợp nhất các Caption tự thêm + đã sửa và loại bỏ các Caption đã bị người dùng bấm Xoá
function buildMergedOverlaySections() {
    const db = getCustomCaptionsDb();
    const deletedMap = db.deletedIds || {};
    const overrideMap = db.overrides || {};
    const customAdded = Array.isArray(db.added) ? db.added : [];

    const finalSections = [];

    // 1. Đưa các Caption do người dùng tự thêm lên đầu tiên (hoặc ghép vào đúng nhóm)
    const customOnlyGroup = [];
    const customByExistingSection = {};

    for (const cItem of customAdded) {
        if (!cItem || !cItem.overlay_id || deletedMap[cItem.overlay_id]) continue;
        const targetSec = cItem.section || "✨ Caption Tự Chế (Custom Studio)";
        const matchesBuiltIn = MASTER_DEFAULT_OVERLAY_SECTIONS.some(s => s.section === targetSec);
        if (matchesBuiltIn) {
            if (!customByExistingSection[targetSec]) customByExistingSection[targetSec] = [];
            customByExistingSection[targetSec].push({
                overlay_id: cItem.overlay_id,
                source: "remote",
                caption: cItem.caption
            });
        } else {
            customOnlyGroup.push({
                overlay_id: cItem.overlay_id,
                source: "remote",
                caption: cItem.caption
            });
        }
    }

    if (customOnlyGroup.length > 0) {
        finalSections.push({
            section: "✨ Caption Tự Chế (Custom Studio)",
            items: customOnlyGroup
        });
    }

    // 2. Duyệt qua toàn bộ các Section mặc định, lọc bỏ các ID đã xoá và áp dụng bản ghi đè
    for (const sec of MASTER_DEFAULT_OVERLAY_SECTIONS) {
        const mergedItems = [];
        if (customByExistingSection[sec.section]) {
            for (const prepended of customByExistingSection[sec.section]) {
                mergedItems.push(prepended);
            }
        }
        for (const it of sec.items) {
            if (!it || !it.overlay_id) continue;
            if (deletedMap[it.overlay_id]) continue;
            if (overrideMap[it.overlay_id] && overrideMap[it.overlay_id].caption) {
                mergedItems.push({
                    overlay_id: it.overlay_id,
                    source: "remote",
                    caption: overrideMap[it.overlay_id].caption
                });
            } else {
                mergedItems.push(it);
            }
        }
        if (mergedItems.length > 0) {
            finalSections.push({
                section: sec.section,
                items: mergedItems
            });
        }
    }

    return finalSections;
}

// === KẾT THÚC PHẦN 3 / 6 — GÕ "4" ĐỂ NHẬN TIẾP PHẦN 4 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V10.0 — PART 4 OF 6)
// ============================================================================

function escapeHtml(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function sanitizeQuotaNumber(val, fallback = 999999) {
    const n = parseInt(String(val ?? "").replace(/[^\d]/g, ""), 10);
    if (isNaN(n) || n < 0) return fallback;
    if (n > 999999999) return 999999999;
    return n;
}

function sanitizeFloatNumber(val, fallback = 30.0, min = 1.0, max = 300.0) {
    const n = parseFloat(String(val ?? "").replace(/[^\d.]/g, ""));
    if (isNaN(n)) return fallback;
    return Math.max(min, Math.min(max, n));
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
// TÍCH HỢP HEADER7.JS: HÀM SETHEADERVALUE XOÁ ETAG NIGHTMARKETSERVER (V1.0.2)
// ============================================================================
function setHeaderValue(headersObj, headerName, headerVal) {
    if (!headersObj || typeof headersObj !== "object") return headersObj;
    const lowerKey = String(headerName || "").toLowerCase();
    if (lowerKey in headersObj) {
        headersObj[lowerKey] = headerVal;
    } else {
        headersObj[headerName] = headerVal;
    }
    return headersObj;
}

function isActualLocketAppTraffic(url, headers) {
    const u = String(url || "").toLowerCase();
    if (u.includes("/setdate") || u.includes("locket.gold")) return false;
    if (/^https?:\/\/(api|rc-backup)\.revenuecat\.com\/?(\?.*)?$/i.test(u)) return false;

    if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            const val = String(headers[k] || "");
            if (low === "user-agent") {
                if (val.includes("Mozilla/") && val.includes("Safari/") && !val.includes("Locket")) {
                    return false;
                }
                if (val.includes("Locket") || val.includes("RevenueCat") || val.includes("CFNetwork")) {
                    return true;
                }
            }
            if (low === "x-client-version" || low === "x-revenuecat-user-id" || low === "x-firebase-gmpid") {
                return true;
            }
        }
    }

    return (
        u.includes("/v1/subscribers/") ||
        u.includes("/v1/receipts") ||
        u.includes("api.locketcamera.com") ||
        u.includes("firebaseremoteconfig.googleapis.com") ||
        u.includes("firebaseremoteconfigrealtime.googleapis.com") ||
        u.includes("us-central1-locket-4252a.cloudfunctions.net")
    );
}

function isBlockedAdOrTelemetryDomain(url) {
    if (!url || typeof url !== "string") return false;
    const low = url.toLowerCase();
    const adDomains = [
        "firebaselogging.googleapis.com",
        "firebaselogging-pa.googleapis.com",
        "googleads.g.doubleclick.net",
        "pagead2.googlesyndication.com",
        "ad.doubleclick.net",
        "pubads.g.doubleclick.net",
        "securepubads.g.doubleclick.net",
        "imasdk.googleapis.com",
        "ads.youtube.com",
        "ad.youtube.com",
        "gads.current.spotify.com",
        "crashdump.spotify.com",
        "adclick.g.doubleclick.net",
        "adeventtracker.spotify.com",
        "log.spotify.com",
        "amplitude.com"
    ];
    for (const d of adDomains) {
        if (low.includes(d)) return true;
    }
    return false;
}

// ============================================================================
// BỘ MÁY AUTO-DISCOVERY QUÉT UID BẠN BÈ & ĐIỀU KHIỂN HUY HIỆU ĐỘC LẬP
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
    if (selfUid && friendUid === selfUid) {
        return !(cfg && cfg.isBlockedByAdmin);
    }

    const db = getLocalStore();
    if (db && db.users && db.users[friendUid]) {
        const uRec = db.users[friendUid];
        if (uRec.status === "blocked" || uRec.blocked === true || uRec.gold_active === false) {
            return false;
        }
    }

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
// ĐỘNG CƠ MẠNG DOH 40 MIỀN, CHỨNG CHỈ ROOT CA & HEADER REWRITE
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
        low.includes("firebaseremoteconfigrealtime.googleapis.com") ||
        low.includes("us-central1-locket-4252a.cloudfunctions.net") ||
        low.includes("locketcamera.com") ||
        low.includes("firestore.googleapis.com")
    );
}

function generateIntegratedMobileconfigXml(cfg) {
    const dohUrl = (cfg && cfg.dohServerUrl) || INTEGRATED_NET_ENGINE.dohServerUrl;
    const domainsXml = INTEGRATED_NET_ENGINE.supplementalMatchDomains
        .map(d => `          <string>${escapeHtml(d)}</string>`)
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>PayloadDisplayName</key>
  <string>${escapeHtml(INTEGRATED_NET_ENGINE.profileName)}</string>
  <key>PayloadDescription</key>
  <string>${escapeHtml(INTEGRATED_NET_ENGINE.profileDescription)}</string>
  <key>PayloadIdentifier</key>
  <string>${escapeHtml(INTEGRATED_NET_ENGINE.profileIdentifier)}</string>
  <key>PayloadOrganization</key>
  <string>${escapeHtml(INTEGRATED_NET_ENGINE.profileOrganization)}</string>
  <key>PayloadType</key>
  <string>Configuration</string>
  <key>PayloadUUID</key>
  <string>${escapeHtml(INTEGRATED_NET_ENGINE.profileUUID)}</string>
  <key>PayloadVersion</key>
  <integer>1</integer>
  <key>PayloadRemovalDisallowed</key>
  <false/>
  <key>PayloadContent</key>
  <array>
    <dict>
      <key>PayloadType</key>
      <string>com.apple.dnsSettings.managed</string>
      <key>PayloadIdentifier</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.dnsIdentifier)}</string>
      <key>PayloadUUID</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.dnsUUID)}</string>
      <key>PayloadVersion</key>
      <integer>1</integer>
      <key>PayloadDisplayName</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.dnsDisplayName)}</string>
      <key>PayloadDescription</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.dnsDescription)}</string>
      <key>DNSSettings</key>
      <dict>
        <key>DNSProtocol</key>
        <string>HTTPS</string>
        <key>ServerURL</key>
        <string>${escapeHtml(dohUrl)}</string>
        <key>SupplementalMatchDomains</key>
        <array>
${domainsXml}
        </array>
      </dict>
    </dict>
    <dict>
      <key>PayloadType</key>
      <string>com.apple.security.root</string>
      <key>PayloadIdentifier</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.caIdentifier)}</string>
      <key>PayloadUUID</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.caUUID)}</string>
      <key>PayloadVersion</key>
      <integer>1</integer>
      <key>PayloadDisplayName</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)}</string>
      <key>PayloadDescription</key>
      <string>${escapeHtml(INTEGRATED_NET_ENGINE.caDescription)}</string>
      <key>PayloadContent</key>
      <data>${INTEGRATED_NET_ENGINE.caCertBase64}</data>
    </dict>
  </array>
</dict>
</plist>`;
}

function probeIntegratedDohEndpoint(cfg, callback) {
    const dohUrl = (cfg && cfg.dohServerUrl) || INTEGRATED_NET_ENGINE.dohServerUrl;
    const sep = dohUrl.includes("?") ? "&" : "?";
    const probeTarget = `${dohUrl}${sep}name=api.revenuecat.com&type=A`;
    const startTs = Date.now();

    Env.httpGet({
        url: probeTarget,
        headers: {
            "Accept": "application/dns-json",
            "X-LocketGold-DoH-IP-Primary": (cfg && cfg.dohPrimaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[0],
            "X-LocketGold-DoH-IP-Secondary": (cfg && cfg.dohSecondaryIp) || INTEGRATED_NET_ENGINE.serverAddresses[1],
            "X-UpLocket-Profile-UUID": INTEGRATED_NET_ENGINE.profileUUID,
            "X-UpLocket-CA-UUID": INTEGRATED_NET_ENGINE.caUUID,
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
            domainsCount: INTEGRATED_NET_ENGINE.supplementalMatchDomains.length,
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
        latencyMs: 12,
        checkedAt: "Sẵn sàng 24/7 (40 miền)",
        domainsCount: INTEGRATED_NET_ENGINE.supplementalMatchDomains.length,
        domains: INTEGRATED_NET_ENGINE.supplementalMatchDomains
    };
}

function applyIntegratedNetworkHeaders(url, headers, cfg) {
    if (!headers || typeof headers !== "object") return headers;
    if (!isSupplementalMatchedDomain(url)) return headers;

    // 1. Áp dụng hàm setHeaderValue từ header7.js trước
    if (!cfg || cfg.enableHeader7StripEtag !== false) {
        setHeaderValue(headers, "X-RevenueCat-ETag", "");
    }

    // 2. Xoá triệt để các trường ETag & Cache Validator để ép server trả full JSON
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
        headers["X-UpLocket-Profile-ID"] = INTEGRATED_NET_ENGINE.profileIdentifier;
        headers["X-UpLocket-DNS-UUID"] = INTEGRATED_NET_ENGINE.dnsUUID;
    }

    return headers;
}

// ============================================================================
// CẤU TRÚC MODAL IN-APP, CAMERA EFFECTS & CLOUD FUNCTIONS PATCHER
// ============================================================================
function buildInAppLocketModalStruct(cfg) {
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    if (isRevoked) {
        const revBadge = (cfg && cfg.revokedPopupBadge) || "THÔNG BÁO HỆ THỐNG";
        const revHeader = (cfg && cfg.revokedPopupHeader) || "Đã thu hồi LOCKET GOLD!";
        const revTitle = (cfg && cfg.revokedPopupTitle) || "Tài khoản đã bị Admin chặn & mất quyền Gold";
        const revSub = (cfg && cfg.revokedPopupSubtitle) || (cfg && cfg.blockReason) || "Huy hiệu Locket Gold, Photobooth & AI Looks đã bị thu hồi.";
        const revBtn = (cfg && cfg.revokedPopupBtnText) || "Đã hiểu";
        return {
            id: "locket_gold_revoked_sheet_" + Date.now(),
            enabled: true,
            auto_show: true,
            presentation_style: "bottom_sheet",
            sheet_theme: "dark_alert",
            handle_bar_color: "#F43F5E",
            background_color: "#1C1C1E",
            dismissible: true,
            show_close_button: true,
            action: "dismiss",
            status: "revoked_gold",
            is_gold_active: false,
            badge: revBadge,
            header: revHeader,
            title: revTitle,
            subtitle: revSub,
            message: `${revHeader}\n${revTitle}\n${revSub}`,
            image_url: (cfg && cfg.popupImage) || THAY_IMAGE_PATH,
            button_text: revBtn,
            cta_text: revBtn,
            cta_background: "#F43F5E",
            cta_text_color: "#FFFFFF",
            cta_action: "close"
        };
    }

    const badge = (cfg && cfg.popupBadge) || "LOCKET GOLD";
    const header = (cfg && cfg.popupHeader) || "Đã mở khoá GOLD thành công!";
    const title = (cfg && cfg.popupTitle) || "Ngô Minh Đức";
    const subtitle = (cfg && cfg.popupSubtitle) || "Anh Yêu Tất Cả Các Em";
    const btnText = (cfg && cfg.popupBtnText) || "Hoàn tất";

    return {
        id: "locket_gold_welcome_sheet_" + Date.now(),
        enabled: cfg.popupEnabled !== false,
        auto_show: true,
        presentation_style: "bottom_sheet",
        sheet_theme: "dark_gold",
        handle_bar_color: "#F59E0B",
        background_color: "#1C1C1E",
        dismissible: true,
        show_close_button: true,
        action: "dismiss",
        status: "active_gold",
        is_gold_active: true,
        badge: badge,
        header: header,
        title: title,
        subtitle: subtitle,
        message: `${header}\n${title}\n${subtitle}`,
        image_url: cfg.popupImage || THAY_IMAGE_PATH,
        button_text: btnText,
        cta_text: btnText,
        cta_background: "#F59E0B",
        cta_text_color: "#000000",
        cta_action: "close"
    };
}

function buildCameraEffectsPayloadStruct(cfg) {
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const quotaNum = isRevoked ? 0 : sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const sections = LOCKET_CAMERA_EFFECTS_CATALOG.sections.map(sec => ({
        id: sec.id,
        title: sec.title,
        type: sec.type,
        unlocked: !isRevoked,
        is_locked: isRevoked,
        requires_gold: isRevoked,
        items: sec.items.map(it => ({
            ...it,
            is_free: !isRevoked,
            unlocked: !isRevoked,
            is_unlocked: !isRevoked,
            is_locked: isRevoked,
            locked: isRevoked,
            requires_gold: isRevoked,
            is_gold_only: isRevoked,
            can_use: !isRevoked,
            blur: isRevoked,
            show_paywall: isRevoked
        }))
    }));

    return {
        unlocked: !isRevoked,
        is_gold: !isRevoked,
        photobooth_enabled: !isRevoked && cfg.photoboothEnabled !== false,
        event_effects_enabled: !isRevoked && cfg.eventEffectsEnabled !== false,
        playful_looks_enabled: !isRevoked && cfg.playfulLooksEnabled !== false,
        appearance_looks_enabled: !isRevoked && cfg.appearanceLooksEnabled !== false,
        celebration_effects_enabled: !isRevoked && cfg.celebrationEffectsEnabled !== false,
        create_look_button: {
            ...LOCKET_CAMERA_EFFECTS_CATALOG.create_look_cta,
            enabled: !isRevoked && cfg.createLookButtonEnabled !== false,
            unlocked: !isRevoked,
            remaining_uses: quotaNum
        },
        ai_filter_quota: quotaNum,
        ai_looks_remaining: quotaNum,
        sections: sections
    };
}

function patchCloudFunctionResponsePayload(obj, cfg, reqUrl, resolvedUserId) {
    if (!obj || typeof obj !== "object") return obj;
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const quotaNum = isRevoked ? 0 : sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const inAppModal = buildInAppLocketModalStruct(cfg);
    const effectsCatalog = buildCameraEffectsPayloadStruct(cfg);

    if (isRevoked) {
        if (!obj.result || typeof obj.result !== "object") {
            obj.result = {};
        }
        const r = obj.result;
        r.status = 200;
        r.ok = false;
        r.is_gold = false;
        r.locket_gold_badge = false;
        r.has_gold_badge = false;
        r.badge = null;
        r.can_use = false;
        r.can_generate = false;
        r.unlocked = false;
        r.remaining = 0;
        r.remaining_uses = 0;
        r.ai_filter_quota = 0;
        r.ai_filter_remaining = 0;
        r.ai_looks_remaining = 0;
        r.gold_modal = inAppModal;
        r.in_app_modal = inAppModal;
        r.bottom_sheet = inAppModal;
        r.camera_effects_catalog = effectsCatalog;
        r.alert_message = `${inAppModal.header} — ${inAppModal.subtitle}`;

        if (r.data && typeof r.data === "object" && !Array.isArray(r.data)) {
            r.data.badge = null;
            r.data.locket_gold_badge = false;
            r.data.has_gold_badge = false;
            r.data.is_gold = false;
            r.data.ai_filter_quota = 0;
            r.data.ai_filter_remaining = 0;
            r.data.ai_looks_remaining = 0;
            r.data.can_use_ai_filter = false;
            r.data.can_use_holiday_effects = false;
            r.data.can_use_photobooth = false;
            r.data.gold_welcome_modal = inAppModal;
            r.data.in_app_bottom_sheet = inAppModal;
            r.data.camera_effects_catalog = effectsCatalog;
        }

        const resRevoked = deepForceBadgeAndAiQuotaInObject(obj, cfg, 0);
        flushFriendsBadgeMapIfNeeded();
        return resRevoked;
    }

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
    r.photobooth_unlocked = true;
    r.create_look_unlocked = true;
    r.remaining = quotaNum;
    r.remaining_uses = quotaNum;
    r.ai_filter_quota = quotaNum;
    r.ai_filter_remaining = quotaNum;
    r.ai_looks_remaining = quotaNum;
    r.camera_effects_catalog = effectsCatalog;
    if (cfg.popupEnabled !== false) {
        r.gold_modal = inAppModal;
        r.in_app_modal = inAppModal;
        r.bottom_sheet = inAppModal;
    }

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
            r.data.can_use_photobooth = true;
            r.data.camera_effects_catalog = effectsCatalog;
            if (cfg.popupEnabled !== false) {
                r.data.gold_welcome_modal = inAppModal;
                r.data.in_app_bottom_sheet = inAppModal;
            }
        }
    }

    const res = deepForceBadgeAndAiQuotaInObject(obj, cfg, 0);
    flushFriendsBadgeMapIfNeeded();
    return res;
}

// ============================================================================
// THÔNG BÁO ĐẨY NATIVE TRONG APP & QUẢN LÝ CƠ SỞ DỮ LIỆU ADMIN REALTIME
// ============================================================================
function fireNativeAppNotification(cfg, forceImmediate = false) {
    if (cfg.isBlockedByAdmin) {
        const selfUid = Env.read(USER_ID_CACHE_KEY) || "UID";
        triggerInAppLocketBlockAlert(selfUid, cfg.blockReason, true, forceImmediate);
        return;
    }
    if (!forceImmediate && cfg.pushNotifyOnActivate === false) return;

    const now = Date.now();
    const lastPush = parseInt(Env.read(LAST_GOLD_PUSH_TS_KEY) || "0", 10);
    const cooldownMs = Math.max(5, parseInt(cfg.pushCooldownSeconds || 12, 10)) * 1000;

    if (!forceImmediate && !isNaN(lastPush) && (now - lastPush <= cooldownMs)) {
        return;
    }

    Env.write(String(now), LAST_GOLD_PUSH_TS_KEY);

    const title = `${cfg.popupBadge || "LOCKET GOLD"} — ${cfg.popupHeader || "Đã mở khoá GOLD thành công!"}`;
    const sub = cfg.popupTitle || "Ngô Minh Đức";
    const body = cfg.popupSubtitle || "Anh Yêu Tất Cả Các Em";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);

    Env.notify(title, sub, body, hasHttpImg ? cfg.popupImage : null);
}

function triggerInAppGoldWelcomeAlert(uid, cfg, forceImmediate = false) {
    fireNativeAppNotification(cfg, forceImmediate);
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
            "LOCKET GOLD — Đã thu hồi LOCKET GOLD!",
            `Tài khoản (${uid || "UID"}) đã bị chặn & mất Gold`,
            `${reason || "Admin đã chặn tài khoản này. Toàn bộ huy hiệu Locket Gold, Khung Photobooth và AI Looks đã bị thu hồi."}`
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
            note: extra.note || "Đã mở khoá GOLD thành công (Full Photobooth, 140+ Captions & AI Looks)",
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
        if (extra.aiQuota !== undefined && !db.users[uid].blocked && db.users[uid].status !== "blocked") {
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
        const isBlocked = localUser.status === "blocked" || localUser.blocked === true || localUser.gold_active === false;
        return {
            uid: cleanUid,
            approved: !isBlocked && (localUser.status === "approved" || localUser.gold_active !== false),
            gold_active: !isBlocked,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : (localUser.status || "approved"),
            force_lock_date: localUser.force_lock_date || localUser.lock_date || null,
            ai_quota: isBlocked ? 0 : (localUser.ai_quota !== undefined ? sanitizeQuotaNumber(localUser.ai_quota, DEFAULT_CONFIG.aiFilterQuota) : null),
            reason: isBlocked
                ? (localUser.reason || "Tài khoản đã bị Admin chặn — Đã thu hồi Locket Gold, huy hiệu và khoá toàn bộ Photobooth/AI Looks.")
                : ""
        };
    }

    if (remoteCache && (!cleanUid || remoteCache.uid === cleanUid)) {
        const isBlocked = remoteCache.status === "blocked" || !!remoteCache.blocked || remoteCache.gold_active === false;
        return {
            uid: cleanUid,
            approved: !isBlocked,
            gold_active: !isBlocked,
            blocked: isBlocked,
            status: isBlocked ? "blocked" : (remoteCache.status || "approved"),
            force_lock_date: remoteCache.force_lock_date || null,
            ai_quota: isBlocked ? 0 : (remoteCache.ai_quota !== undefined ? sanitizeQuotaNumber(remoteCache.ai_quota, DEFAULT_CONFIG.aiFilterQuota) : null),
            reason: isBlocked ? (remoteCache.reason || "Tài khoản đã bị Admin chặn & thu hồi Locket Gold.") : ""
        };
    }

    return {
        uid: cleanUid,
        approved: true,
        gold_active: true,
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
            gold_active: userRec.gold_active !== false,
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

                    const isBlk = !!parsed.blocked || parsed.status === "blocked" || parsed.gold_active === false;
                    const rState = {
                        uid: cleanUid,
                        approved: !isBlk,
                        gold_active: !isBlk,
                        blocked: isBlk,
                        status: isBlk ? "blocked" : (parsed.status || "approved"),
                        force_lock_date: parsed.force_lock_date || null,
                        ai_quota: isBlk ? 0 : (parsed.ai_quota !== undefined ? sanitizeQuotaNumber(parsed.ai_quota, cfg.aiFilterQuota) : null),
                        reason: parsed.reason || ""
                    };
                    Env.write(JSON.stringify(rState), REMOTE_AUTH_CACHE_KEY);
                }
            } catch (e) {}
        }

        const currentSt = evaluateRealtimeState(cleanUid);
        if (callback) callback(currentSt);
    });
}

function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    try {
        const raw =
            Env.read(STORE_KEY) ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V9") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V8") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V6");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    cfg.aiFilterQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
    cfg.aiFilterDailyLimit = sanitizeQuotaNumber(cfg.aiFilterDailyLimit || cfg.aiFilterQuota, cfg.aiFilterQuota);
    cfg.aiFilterUsed = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);
    cfg.videoMaxDuration = sanitizeFloatNumber(cfg.videoMaxDuration, 30.0, 5.0, 300.0);
    cfg.goldMaxDuration = sanitizeFloatNumber(cfg.goldMaxDuration || cfg.videoMaxDuration, 30.0, 5.0, 300.0);
    cfg.cameraRollMaxDuration = sanitizeFloatNumber(cfg.cameraRollMaxDuration || cfg.videoMaxDuration, 30.0, 5.0, 300.0);
    cfg.videoQualityMbps = sanitizeFloatNumber(cfg.videoQualityMbps, 0.9, 0.1, 25.0);
    cfg.uploadMainImageQuality = sanitizeFloatNumber(cfg.uploadMainImageQuality, 1.0, 0.1, 1.0);
    cfg.uploadMainImageSize = sanitizeQuotaNumber(cfg.uploadMainImageSize, 1440);
    cfg.uploadThumbnailSize = sanitizeQuotaNumber(cfg.uploadThumbnailSize, 1020);
    cfg.maxFriendsCount = sanitizeQuotaNumber(cfg.maxFriendsCount, 999999);
    cfg.friendsBadgeDefault = cfg.friendsBadgeDefault !== false;

    if (!cfg.dohServerUrl || cfg.dohServerUrl.includes("doh.2707226.xyz")) {
        cfg.dohServerUrl = INTEGRATED_NET_ENGINE.dohServerUrl;
    }
    if (!cfg.dohPrimaryIp) cfg.dohPrimaryIp = INTEGRATED_NET_ENGINE.serverAddresses[0];
    if (!cfg.dohSecondaryIp) cfg.dohSecondaryIp = INTEGRATED_NET_ENGINE.serverAddresses[1];

    if (!cfg.popupBadge) cfg.popupBadge = DEFAULT_CONFIG.popupBadge;
    if (!cfg.popupHeader || cfg.popupHeader === "Đã Kích Hoạt") {
        cfg.popupHeader = DEFAULT_CONFIG.popupHeader;
    }
    if (!cfg.popupTitle) cfg.popupTitle = DEFAULT_CONFIG.popupTitle;
    if (!cfg.popupSubtitle) cfg.popupSubtitle = DEFAULT_CONFIG.popupSubtitle;
    if (!cfg.popupImage) cfg.popupImage = DEFAULT_CONFIG.popupImage;
    if (!cfg.popupBtnText) cfg.popupBtnText = DEFAULT_CONFIG.popupBtnText;

    const uid = Env.read(USER_ID_CACHE_KEY) || "";
    const rt = evaluateRealtimeState(uid);
    if (rt && rt.force_lock_date) {
        cfg.lockDate = rt.force_lock_date.slice(0, 10);
    }

    cfg.isBlockedByAdmin = !!rt.blocked;
    cfg.approvalStatus = rt.status || (cfg.isBlockedByAdmin ? "blocked" : "approved");
    cfg.blockReason = rt.reason || "Tài khoản đã bị Admin chặn — Đã thu hồi Locket Gold, huy hiệu và khoá toàn bộ Photobooth/AI Looks.";

    if (cfg.isBlockedByAdmin) {
        cfg.alwaysForceBadge = false;
        cfg.unlockAllCameraEffects = false;
        cfg.aiFilterEnabled = false;
        cfg.aiFilterQuota = 0;
        cfg.aiFilterDailyLimit = 0;
    } else {
        cfg.alwaysForceBadge = true;
        cfg.unlockAllCameraEffects = true;
        cfg.aiFilterEnabled = true;
        if (rt && rt.ai_quota !== null && rt.ai_quota !== undefined) {
            cfg.aiFilterQuota = sanitizeQuotaNumber(rt.ai_quota, cfg.aiFilterQuota);
            cfg.aiFilterDailyLimit = cfg.aiFilterQuota;
        }
    }

    cfg.interceptCloudFunctions = true;
    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T10:10:14Z");
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
// HỢP NHẤT REVENUECAT SUBSCRIBER BUILDER + LOCKETFIX8.JS (NMS & LOCKETGOLD)
// ============================================================================
function buildSubscriberPayload(existingObj, cfg, resolvedUserId, requestedUrlUserId, reqHeaders) {
    const nowIso = new Date().toISOString();
    const nowMs = Date.now();
    const obj = (existingObj && typeof existingObj === "object") ? existingObj : {};
    const uid = requestedUrlUserId || (obj.subscriber && obj.subscriber.original_app_user_id) || resolvedUserId || "$RCAnonymousID:locket_hard_lock";
    const inAppModal = buildInAppLocketModalStruct(cfg);

    if (cfg.isBlockedByAdmin) {
        triggerInAppLocketBlockAlert(resolvedUserId || uid, cfg.blockReason, true, false);
        obj.Attention = `LOCKET GOLD REVOKED — ${cfg.blockReason}`;
        obj.request_date = nowIso;
        obj.request_date_ms = nowMs;
        obj.in_app_bottom_sheet = inAppModal;
        obj.subscriber = {
            original_app_user_id: uid,
            first_seen: cfg.lockIso,
            last_seen: nowIso,
            original_application_version: cfg.appVersion || "1.0",
            original_purchase_date: null,
            management_url: null,
            other_purchases: {},
            non_subscriptions: {},
            subscriptions: {},
            entitlements: {},
            subscriber_attributes: {
                "locket_gold_badge": { value: "false", updated_at_ms: nowMs },
                "badge": { value: "none", updated_at_ms: nowMs },
                "has_gold_badge": { value: "false", updated_at_ms: nowMs },
                "gold_badge_enabled": { value: "false", updated_at_ms: nowMs },
                "is_gold": { value: "false", updated_at_ms: nowMs },
                "membership_badge": { value: "none", updated_at_ms: nowMs },
                "photobooth_unlocked": { value: "false", updated_at_ms: nowMs },
                "holiday_effects_unlocked": { value: "false", updated_at_ms: nowMs },
                "camera_effects_unlocked": { value: "false", updated_at_ms: nowMs },
                "lut_filters_unlocked": { value: "false", updated_at_ms: nowMs },
                "ai_looks_unlocked": { value: "false", updated_at_ms: nowMs },
                "ai_filter_quota": { value: "0", updated_at_ms: nowMs },
                "ai_filter_remaining": { value: "0", updated_at_ms: nowMs },
                "ai_looks_remaining": { value: "0", updated_at_ms: nowMs },
                "ai_generation_limit": { value: "0", updated_at_ms: nowMs },
                "gold_popup_header": { value: inAppModal.header, updated_at_ms: nowMs },
                "gold_popup_title": { value: inAppModal.title, updated_at_ms: nowMs },
                "gold_popup_subtitle": { value: inAppModal.subtitle, updated_at_ms: nowMs },
                "admin_realtime_status": { value: "revoked_no_gold", updated_at_ms: nowMs }
            }
        };
        return obj;
    }

    triggerInAppLocketBlockAlert(resolvedUserId || uid, "", false, false);
    triggerInAppGoldWelcomeAlert(resolvedUserId || uid, cfg, false);

    const LOCK_DATE = cfg.lockIso;
    const EXPIRE_DATE = cfg.expireIso || "9999-01-09T10:10:14Z";
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    obj.Attention = `${LOCKETFIX8_MAPPING_ENGINE.defaultAttention} | ${cfg.popupBadge} — ${cfg.popupHeader}`;
    obj.request_date = nowIso;
    obj.request_date_ms = nowMs;
    obj.in_app_bottom_sheet = inAppModal;

    if (!obj.subscriber || typeof obj.subscriber !== "object") {
        obj.subscriber = {};
    }

    obj.subscriber.original_app_user_id = uid;
    obj.subscriber.first_seen = LOCK_DATE;
    obj.subscriber.last_seen = nowIso;
    obj.subscriber.original_application_version = cfg.appVersion || "1.0";
    obj.subscriber.original_purchase_date = LOCK_DATE;
    obj.subscriber.management_url = "https://apps.apple.com/account/subscriptions";
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
        "show_gold_badge": "true",
        "is_gold": "true",
        "membership_badge": "gold",
        "photobooth_unlocked": "true",
        "event_effects_unlocked": "true",
        "playful_looks_unlocked": "true",
        "appearance_looks_unlocked": "true",
        "celebration_effects_unlocked": "true",
        "holiday_effects_unlocked": "true",
        "camera_effects_unlocked": "true",
        "lut_filters_unlocked": "true",
        "ai_looks_unlocked": "true",
        "create_look_unlocked": "true",
        "ai_filter_quota": quotaStr,
        "ai_filter_remaining": quotaStr,
        "ai_looks_remaining": quotaStr,
        "ai_generation_limit": quotaStr,
        "doh_dns_endpoint": cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl,
        "uplocket_profile_id": INTEGRATED_NET_ENGINE.profileIdentifier,
        "locket_ca_uuid": INTEGRATED_NET_ENGINE.caUUID,
        "gold_popup_header": cfg.popupHeader,
        "gold_popup_title": cfg.popupTitle,
        "gold_popup_subtitle": cfg.popupSubtitle,
        "admin_realtime_status": "active_gold"
    };

    for (const [attrKey, attrVal] of Object.entries(forcedAttributes)) {
        obj.subscriber.subscriber_attributes[attrKey] = {
            value: String(attrVal),
            updated_at_ms: nowMs
        };
    }

    // Hợp nhất cấu trúc NMS và locketGold từ locketfix8.js + locket_25_05_2026.js
    const buildSubEntry = (pid) => ({
        auto_resume_date: null,
        display_name: pid,
        is_sandbox: !cfg.forceSandboxFalse,
        ownership_type: cfg.ownershipType || "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: cfg.periodType || "normal",
        price: {
            amount: Number(cfg.priceAmount || 399000.0),
            currency: cfg.priceCurrency || "VND"
        },
        expires_date: EXPIRE_DATE,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: LOCK_DATE,
        purchase_date: LOCK_DATE,
        store: cfg.store || "app_store",
        store_transaction_id: cfg.storeTransactionId || "2000001108724193"
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

    // Áp dụng cơ chế ánh xạ User-Agent từ locketfix8.js
    if (cfg.enableNmsMapping !== false) {
        const ua = (reqHeaders && (reqHeaders["User-Agent"] || reqHeaders["user-agent"])) || "Locket";
        const matchKey = Object.keys(LOCKETFIX8_MAPPING_ENGINE.mapping).find(k => ua.includes(k));
        if (matchKey) {
            const [entKey, prodKey] = LOCKETFIX8_MAPPING_ENGINE.mapping[matchKey];
            const finalProd = prodKey || PRIMARY_PID;
            obj.subscriber.subscriptions[finalProd] = buildSubEntry(finalProd);
            obj.subscriber.entitlements[entKey] = buildEntEntry(finalProd);
        } else {
            obj.subscriber.subscriptions[PRIMARY_PID] = buildSubEntry(PRIMARY_PID);
            obj.subscriber.entitlements.pro = buildEntEntry(PRIMARY_PID);
        }
    }

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
        "locket_photobooth_pro",
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
        "photobooth", "photobooth_frames", "event_effects", "playful_looks", "appearance_looks",
        "celebration_effects", "create_look", "ai_filters", "ai_looks", "ai_camera",
        "unlimited_ai", "camera_effects", "holiday_effects", "festive_effects",
        "seasonal_effects", "lut_filters", "filters", "effects"
    ];
    for (const entKey of allEntitlements) {
        obj.subscriber.entitlements[entKey] = buildEntEntry(PRIMARY_PID);
    }

    return obj;
}

function patchRevenueCatOfferings(obj, cfg) {
    if (!obj || typeof obj !== "object") return obj;
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const inAppModal = buildInAppLocketModalStruct(cfg);
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const hasHttpImg = cfg.popupImage && /^https?:\/\//i.test(cfg.popupImage);
    const baseUrl = hasHttpImg ? cfg.popupImage.replace(/\/[^\/]+$/, "/") : "https://cdn2.locketcamera.com/";
    const imgFile = hasHttpImg ? cfg.popupImage.split("/").pop() : "gold_activated.png";

    const locData = {
        title: inAppModal.header,
        subtitle: `${inAppModal.title}\n${inAppModal.subtitle}`,
        call_to_action: inAppModal.button_text,
        offer_badge: inAppModal.badge,
        feature_1: inAppModal.title,
        feature_2: inAppModal.subtitle
    };

    const ctaBgColor = isRevoked ? "#F43F5E" : "#F59E0B";
    const ctaFgColor = isRevoked ? "#FFFFFF" : "#000000";

    if (Array.isArray(obj.offerings)) {
        for (const off of obj.offerings) {
            if (!off || typeof off !== "object") continue;
            off.metadata = {
                ...(off.metadata || {}),
                presentation_style: "bottom_sheet",
                sheet_theme: isRevoked ? "dark_alert" : "dark_gold",
                badge: inAppModal.badge,
                header: inAppModal.header,
                title: inAppModal.title,
                subtitle: inAppModal.subtitle,
                image_url: hasHttpImg ? cfg.popupImage : "",
                button_text: inAppModal.button_text,
                action: "dismiss",
                dismissible: true,
                is_gold_activated: !isRevoked,
                is_gold_revoked: isRevoked
            };
            off.paywall = {
                template_name: "2",
                asset_base_url: baseUrl,
                revision: 2,
                config: {
                    packages: ["$rc_annual"],
                    default_package: "$rc_annual",
                    display_close_button: true,
                    dismiss_on_cta: true,
                    images: { header: imgFile, background: imgFile, icon: imgFile },
                    colors: {
                        light: {
                            background: "#1C1C1E", text_1: "#FFFFFF", text_2: "#A1A1A6", text_3: ctaBgColor,
                            call_to_action_background: ctaBgColor, call_to_action_foreground: ctaFgColor,
                            accent_1: ctaBgColor, accent_2: "#2C2C2E"
                        },
                        dark: {
                            background: "#1C1C1E", text_1: "#FFFFFF", text_2: "#A1A1A6", text_3: ctaBgColor,
                            call_to_action_background: ctaBgColor, call_to_action_foreground: ctaFgColor,
                            accent_1: ctaBgColor, accent_2: "#2C2C2E"
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

// ============================================================================
// HỢP NHẤT TOÀN BỘ 8 PHÂN KHU FORCEGOLD 4.3 + LOCKET V9 VÀO FIREBASE CONFIG
// (Mọi thông số đều đọc động từ cfg & Kho Caption Studio có thể Thêm/Sửa/Xoá)
// ============================================================================
function injectFirebaseRemoteConfig(obj, cfg) {
    if (!obj || typeof obj !== "object") obj = {};
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const quotaNum = isRevoked ? 0 : sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    obj.Attention = LOCKETFIX8_MAPPING_ENGINE.defaultAttention;
    if (!obj.entries || typeof obj.entries !== "object") {
        obj.entries = {};
    }

    const inAppModal = buildInAppLocketModalStruct(cfg);
    const popupPayloadJson = JSON.stringify(inAppModal);
    const effectsCatalogJson = JSON.stringify(buildCameraEffectsPayloadStruct(cfg));

    if (isRevoked) {
        const revokedEntries = {
            "locket_gold_enabled": "false",
            "is_gold_user": "false",
            "bypass_gold_paywall": "false",
            "disable_gold_paywall": "false",
            "show_gold_paywall": "true",
            "enable_gold_paywall": "true",
            "force_gold_for_effects": "true",
            "require_gold_for_effects": "true",
            "require_gold_for_photobooth": "true",
            "require_gold_for_holiday_effects": "true",
            "require_gold_for_filters": "true",
            "require_gold_for_ai_looks": "true",
            "lock_photobooth_effects": "true",
            "lock_holiday_effects": "true",
            "lock_camera_effects": "true",
            "lock_ai_filters": "true",
            "all_effects_free": "false",
            "unlock_all_effects": "false",
            "unlock_all_filters": "false",
            "photobooth_enabled": "false",
            "ai_filter_enabled": "false",
            "ai_looks_enabled": "false",
            "create_look_enabled": "false",
            "ai_filter_free_uses": "0",
            "ai_filter_daily_limit": "0",
            "ai_filter_quota": "0",
            "ai_filter_remaining_uses": "0",
            "ai_looks_quota": "0",
            "camera_effects_catalog": effectsCatalogJson,
            "gold_activated_modal": popupPayloadJson,
            "gold_welcome_modal": popupPayloadJson,
            "in_app_welcome_modal": popupPayloadJson,
            "in_app_bottom_sheet": popupPayloadJson
        };
        for (const [k, v] of Object.entries(revokedEntries)) {
            obj.entries[k] = v;
        }
        obj.state = "UPDATE";
        return obj;
    }

    const vidDurNum = sanitizeFloatNumber(cfg.videoMaxDuration, 30.0, 5.0, 300.0);
    const vidDurStr = vidDurNum.toFixed(1);
    const vidMbpsNum = sanitizeFloatNumber(cfg.videoQualityMbps, 0.9, 0.1, 25.0);
    const vidMbpsStr = String(vidMbpsNum);
    const maxFriendsStr = String(sanitizeQuotaNumber(cfg.maxFriendsCount, 999999));
    const mergedOverlaySections = buildMergedOverlaySections();

    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL (TỪ FORCEGOLD 4.3 + TUỲ CHỈNH WEB UI)
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: cfg.fgAppIconPicker !== false ? "enabled" : "disabled",
            camera_roll: cfg.fgCameraRoll !== false ? "enabled" : "disabled",
            camera_theme: cfg.fgCameraTheme !== false ? "enabled" : "disabled",
            locket_views: cfg.fgLocketViews !== false ? "enabled" : "disabled",
            long_captions: cfg.fgLongCaptions !== false ? "enabled" : "disabled",
            longer_video: cfg.fgLongerVideo !== false ? "enabled" : "disabled",
            unlimited_friends: cfg.fgUnlimitedFriends !== false ? "enabled" : "disabled",
            priority_support: cfg.fgPrioritySupport !== false ? "enabled" : "disabled",
            profile_badge: cfg.fgProfileBadge !== false ? "enabled" : "disabled",
            remove_ads: cfg.fgRemoveAds !== false ? "enabled" : "disabled",
            video: "enabled",
            custom_widget_frames: cfg.fgCustomWidgetFrames !== false ? "enabled" : "disabled",
            streak_recovery: cfg.fgStreakRecovery !== false ? "enabled" : "disabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: cfg.fgAppIconPicker !== false,
            camera_roll: cfg.fgCameraRoll !== false,
            camera_theme: cfg.fgCameraTheme !== false,
            locket_views: cfg.fgLocketViews !== false,
            remove_ads: cfg.fgRemoveAds !== false,
            custom_widget_frames: cfg.fgCustomWidgetFrames !== false
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: cfg.discoveryPopupTag || "LOCKET GOLD NMS",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: cfg.discoveryPopupTitle || "Đã Kích Hoạt 💛",
            feature_set: [
                {
                    title: cfg.discoveryPopupFeatureTitle || "Ngô Minh Đức · Locket Gold Pro ✨",
                    body: cfg.discoveryPopupFeatureBody || "Đã mở khoá toàn bộ 140+ Caption, Photobooth & Camera 30s 💛",
                    imageURL: cfg.discoveryPopupImageUrl || "https://i.postimg.cc/15BPkqNN/173376ce-0cb2-411c-80db-fe9adc931718.png"
                }
            ],
            primary_button_title: cfg.discoveryPopupBtnText || "Xong",
            campaign: "locket_gold_welcome_v3",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: cfg.lunarNewYearIconEnabled !== false ? "true" : "false"
    });

    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING SENTRY (TỪ FORCEGOLD 4.3)
    if (cfg.disableHistoryAds !== false) {
        Object.assign(obj.entries, {
            history_ads_mode: "off",
            history_ads_prefetch_count: "0",
            history_ads_prefetch_immediate: "false",
            history_ads_prefetch_reroute: "false",
            history_ads_dynamic_insertion: "false",
            history_ads_refresh_prefetch_on_foreground: "false",
            history_ads_floor_price: "0",
            history_ads_floor_price_att: "0",
            history_ad_log_displayed_on_background: "false",
            history_ads_debug_menu: "false"
        });
    }
    if (cfg.disableSentryTracking !== false) {
        Object.assign(obj.entries, {
            sentry_sample_rate: "0",
            sentry_network_tracing: "false",
            sentry_performance_tracking: "false",
            sentry_trace_sample_rate: "0",
            sentry_profiles_sample_rate: "0"
        });
    }

    // 3. CAMERA, VIDEO DURATION (30s/60s/90s), FILTERS & UPLOAD QUALITY (TỪ FORCEGOLD 4.3)
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: vidDurNum,
            goldMaxDuration: vidDurNum,
            max_duration: vidDurNum,
            maxDuration: vidDurNum,
            ultra_wide: cfg.ultraWideEnabled !== false,
            ultraWide: cfg.ultraWideEnabled !== false,
            volume_button: cfg.volumeButtonShutter !== false,
            volumeButton: cfg.volumeButtonShutter !== false,
            flash_button: cfg.flashButtonEnabled !== false,
            telephoto: cfg.telephotoEnabled !== false,
            srgb: cfg.srgbColorSpace !== false,
            lanczos: cfg.lanczosResampling !== false,
            quality_mbps: vidMbpsNum,
            qualityMbps: vidMbpsNum
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: vidDurNum,
            goldMaxDuration: vidDurNum,
            video_max_duration: vidDurNum,
            videoMaxDuration: vidDurNum,
            max_duration: vidDurNum,
            maxDuration: vidDurNum,
            trim_max_duration: vidDurNum,
            trimMaxDuration: vidDurNum,
            camera_roll_max_duration: vidDurNum,
            quality_mbps: vidMbpsNum,
            qualityMbps: vidMbpsNum,
            flash_button: cfg.flashButtonEnabled !== false
        }),
        live_photos: JSON.stringify({
            capture: cfg.livePhotosEnabled !== false,
            viewing: cfg.livePhotosEnabled !== false,
            catch_up: true,
            widget_looping_mode: cfg.livePhotoLoopMode || "never"
        }),
        camera_filter_config: JSON.stringify({
            ...FORCEGOLD_CAMERA_FILTER_CONFIG,
            open_sheet_immediately: cfg.openFilterSheetImmediately !== false
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: vidDurStr,
        camera_roll_max_duration: vidDurStr,
        camera_roll_duration: vidDurStr,
        max_video_duration: vidDurStr,
        video_max_duration: vidDurStr,
        video_trim_max_duration: vidDurStr,
        trim_max_duration: vidDurStr,
        gold_max_duration: vidDurStr,
        goldMaxDuration: vidDurStr,
        video_quality_mbps: vidMbpsStr,
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: String(cfg.uploadMainImageQuality || "1.0"),
        upload_main_image_size: String(cfg.uploadMainImageSize || "1440"),
        upload_thumbnail_image_quality: String(cfg.uploadThumbnailQuality || "1.0"),
        upload_thumbnail_image_size: String(cfg.uploadThumbnailSize || "1020")
    });

    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN (TỪ FORCEGOLD 4.3)
    Object.assign(obj.entries, {
        max_friends_count: maxFriendsStr,
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: maxFriendsStr,
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: maxFriendsStr,
        celebrity_inbox_limit: maxFriendsStr,
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify(FORCEGOLD_FRIENDS_SHEET_LOCKET_COUNT_CONFIG),
        friend_locket_count_config: JSON.stringify(FORCEGOLD_FRIEND_LOCKET_COUNT_CONFIG),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC (TỪ FORCEGOLD 4.3)
    try {
        const streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = sanitizeQuotaNumber(cfg.streakMinRecoveryCount, 0);
        streak.minimum_display_count = sanitizeQuotaNumber(cfg.streakMinDisplayCount, 0);
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {
        obj.entries.streak_config = JSON.stringify({
            minimum_recovery_count: sanitizeQuotaNumber(cfg.streakMinRecoveryCount, 0),
            minimum_display_count: sanitizeQuotaNumber(cfg.streakMinDisplayCount, 0)
        });
    }

    Object.assign(obj.entries, {
        moment_views_enabled: cfg.momentViewsV2Enabled !== false ? "true" : "false",
        moment_views_v2: cfg.momentViewsV2Enabled !== false ? "true" : "false",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: cfg.momentReactionsV2Enabled !== false ? "true" : "false",
        chat_reactions_enabled: cfg.chatReactionsEnabled !== false ? "true" : "false",
        conversation_reactions: "true",
        typing_indicators_enabled: cfg.typingIndicatorsEnabled !== false ? "true" : "false",
        unsend_message_enabled: cfg.unsendMessageEnabled !== false ? "true" : "false",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: cfg.timeTravelRewindEnabled !== false ? "true" : "false",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: cfg.rollcallEnabled !== false ? "true" : "false",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN JOURNAL / PROFILE (TỪ FORCEGOLD 4.3)
    Object.assign(obj.entries, {
        widget_frame_event_max_images: String(cfg.widgetEventMaxImages || 5),
        android_widget_frame_event_enabled: cfg.widgetEventEnabled !== false ? "true" : "false",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        widget_frame_event: JSON.stringify({
            uid: cfg.widgetEventUid || "midautumn_2026",
            url: cfg.widgetEventUrl || "https://i.postimg.cc/fbY7MGdR/hlw.png",
            use_local_time_zone: true,
            placement: cfg.widgetEventPlacement || "below",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59"
        }),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: true,
            compact_header: true,
            friends_button: true,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: cfg.streakVisualizationStyle || "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // 7. HỆ THỐNG, CACHE & STORAGE CDN (TỪ FORCEGOLD 4.3)
    const cdnMap = {};
    cdnMap[cfg.cdnSourceDomain || "firebasestorage.googleapis.com"] = cfg.cdnTargetDomain || "cdn.locketcamera.com";
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify(cdnMap),
        cdn_domain_replacements_video: cfg.cdnReplacementEnabled !== false ? "true" : "false",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: String(cfg.imageCacheMaxAgeSec || 157680000),
        image_cache_max_size: "400000000",
        history_cache_age_days: String(cfg.historyCacheAgeDays || 1000),
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // 8. OVERLAY & CUSTOM CAPTIONS STUDIO (TÍCH HỢP THÊM / SỬA / XOÁ TRỰC TIẾP)
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify(FORCEGOLD_DYNAMIC_CAPTION_TYPES),
        overlay_items: JSON.stringify(mergedOverlaySections)
    });

    // 9. CÁC KHOÁ MỞ KHOÁ PHOTOBOOTH, AI LOOKS & MODAL TỪ LOCKET V9
    const forcedEntries = {
        "locket_gold_enabled": "true",
        "is_gold_user": "true",
        "bypass_gold_paywall": "true",
        "disable_gold_paywall": "true",
        "show_gold_paywall": "false",
        "enable_gold_paywall": "false",
        "force_gold_for_effects": "false",
        "require_gold_for_effects": "false",
        "require_gold_for_photobooth": "false",
        "require_gold_for_holiday_effects": "false",
        "require_gold_for_filters": "false",
        "require_gold_for_lut_filters": "false",
        "require_gold_for_ai_looks": "false",
        "require_gold_for_camera_effects": "false",
        "lock_photobooth_effects": "false",
        "lock_holiday_effects": "false",
        "lock_camera_effects": "false",
        "lock_lut_filters": "false",
        "lock_ai_filters": "false",
        "blur_locked_effects": "false",
        "blur_gold_effects": "false",
        "effect_preview_blur_enabled": "false",
        "photobooth_gold_only": "false",
        "holiday_effects_gold_only": "false",
        "camera_effects_gold_only": "false",
        "filters_gold_only": "false",
        "lut_filters_gold_only": "false",
        "ai_looks_gold_only": "false",
        "all_effects_free": "true",
        "free_photobooth_effects": "true",
        "free_holiday_effects": "true",
        "free_camera_effects": "true",
        "free_lut_filters": "true",
        "unlock_all_effects": "true",
        "unlock_all_filters": "true",
        "photobooth_enabled": cfg.photoboothEnabled !== false ? "true" : "false",
        "photobooth_frames_enabled": cfg.photoboothEnabled !== false ? "true" : "false",
        "photobooth_4_grid_enabled": "true",
        "photobooth_cute_enabled": "true",
        "polaroid_1_shot_enabled": "true",
        "photobooth_2_shot_enabled": "true",
        "photobooth_3_shot_enabled": "true",
        "event_effects_enabled": cfg.eventEffectsEnabled !== false ? "true" : "false",
        "practical_magic_2_enabled": "true",
        "playful_effects_enabled": cfg.playfulLooksEnabled !== false ? "true" : "false",
        "looks_maxxing_enabled": "true",
        "influencer_look_enabled": "true",
        "toothless_look_enabled": "true",
        "okay_wig_look_enabled": "true",
        "appearance_effects_enabled": cfg.appearanceLooksEnabled !== false ? "true" : "false",
        "bye_brows_look_enabled": "true",
        "braces_look_enabled": "true",
        "tatted_look_enabled": "true",
        "beard_look_enabled": "true",
        "buns_look_enabled": "true",
        "celebration_effects_enabled": cfg.celebrationEffectsEnabled !== false ? "true" : "false",
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
        "create_look_enabled": cfg.createLookButtonEnabled !== false ? "true" : "false",
        "create_look_cta_text": "+ Tạo diện mạo",
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
        "camera_effects_catalog": effectsCatalogJson,
        "gold_activated_modal": popupPayloadJson,
        "gold_welcome_modal": popupPayloadJson,
        "in_app_welcome_modal": popupPayloadJson,
        "in_app_bottom_sheet": popupPayloadJson,
        "gold_celebration_title": cfg.popupTitle,
        "gold_celebration_subtitle": cfg.popupSubtitle,
        "gold_celebration_header": cfg.popupHeader,
        "gold_celebration_image": cfg.popupImage
    };

    for (const [k, v] of Object.entries(forcedEntries)) {
        obj.entries[k] = v;
    }

    obj.state = "UPDATE";
    return obj;
}

function deepForceBadgeAndAiQuotaInObject(node, cfg, depth = 0) {
    if (!node || typeof node !== "object" || depth > 12) return node;

    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const quotaNum = isRevoked ? 0 : sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const usedNum = isRevoked ? 999999 : sanitizeQuotaNumber(cfg.aiFilterUsed, 0);
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
            "preview_url" in node || "asset_url" in node || "filter_type" in node || "effect_type" in node ||
            "photobooth" in node || "frame" in node
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
        let shouldShowBadge = !isRevoked;

        if (isFriend) {
            const fullName = [node.first_name, node.last_name].filter(Boolean).join(" ").trim() || node.full_name || node.username || candidateUserUid.slice(0, 10);
            shouldShowBadge = resolveFriendBadgeState(candidateUserUid, {
                username: node.username || fullName,
                full_name: fullName,
                avatar: node.profile_picture_url || node.avatar || ""
            }, cfg);
        } else if (isRevoked) {
            shouldShowBadge = false;
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
            node.photobooth_unlocked = true;
            node.ai_filter_quota = quotaNum;
            node.ai_filter_remaining = quotaNum;
            node.ai_looks_remaining = quotaNum;
            node.remaining_ai_uses = quotaNum;
            node.can_use_ai_filter = true;
            node.can_use_holiday_effects = true;
            node.can_use_photobooth = true;
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
            node.photobooth_unlocked = false;
        }
    }

    if (isEffectOrFilterItem) {
        node.is_gold = !isRevoked; node.isGold = !isRevoked; node.gold = !isRevoked;
        node.is_gold_only = isRevoked; node.isGoldOnly = isRevoked; node.gold_only = isRevoked; node.goldOnly = isRevoked;
        node.requires_gold = isRevoked; node.requiresGold = isRevoked; node.require_gold = isRevoked; node.requireGold = isRevoked;
        node.is_locked = isRevoked; node.isLocked = isRevoked; node.locked = isRevoked;
        node.is_premium = isRevoked; node.isPremium = isRevoked; node.premium_only = isRevoked; node.premiumOnly = isRevoked;
        node.is_free = !isRevoked; node.isFree = !isRevoked; node.free = !isRevoked;
        node.unlocked = !isRevoked; node.is_unlocked = !isRevoked; node.isUnlocked = !isRevoked;
        node.can_use = !isRevoked; node.canUse = !isRevoked; node.has_access = !isRevoked; node.hasAccess = !isRevoked;
        node.blur = isRevoked; node.is_blurred = isRevoked; node.isBlurred = isRevoked;
        node.blur_preview = isRevoked; node.blurPreview = isRevoked;
        node.show_paywall = isRevoked; node.showPaywall = isRevoked; node.paywall = isRevoked;
        if ("tier" in node) node.tier = isRevoked ? "gold" : "free";
        if ("access_level" in node) node.access_level = isRevoked ? "locked" : "free";
        if ("accessLevel" in node) node.accessLevel = isRevoked ? "locked" : "free";
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
        node.is_unlimited = !isRevoked; node.unlimited = !isRevoked; node.can_generate = !isRevoked; node.canGenerate = !isRevoked;
        node.can_use = !isRevoked; node.canUse = !isRevoked; node.allowed = !isRevoked; node.is_allowed = !isRevoked; node.isAllowed = !isRevoked;
        node.has_access = !isRevoked; node.hasAccess = !isRevoked; node.is_locked = isRevoked; node.isLocked = isRevoked;
        node.locked = isRevoked; node.requires_gold = isRevoked; node.requiresGold = isRevoked;
        node.paywall = isRevoked; node.show_paywall = isRevoked; node.blur = isRevoked;
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
            let docBadgeOn = !isRevoked;

            if (isFriendDoc && isValidLocketUidCandidate(fUid)) {
                const fullDocName = [fFirst, fLast].filter(Boolean).join(" ").trim() || fUsername || fUid.slice(0, 10);
                docBadgeOn = resolveFriendBadgeState(fUid, {
                    username: fUsername || fullDocName,
                    full_name: fullDocName,
                    avatar: fAvatar
                }, cfg);
            } else if (isRevoked) {
                docBadgeOn = false;
            }

            if (docBadgeOn) {
                node.fields.badge = { stringValue: "locket_gold" };
                node.fields.locket_gold_badge = { booleanValue: true };
                node.fields.has_gold_badge = { booleanValue: true };
                node.fields.is_gold = { booleanValue: true };
                node.fields.gold_subscription_since = { timestampValue: cfg.lockIso };
                node.fields.photobooth_unlocked = { booleanValue: true };
                node.fields.ai_filter_quota = { integerValue: String(quotaNum) };
                node.fields.ai_filter_remaining = { integerValue: String(quotaNum) };
                node.fields.ai_looks_remaining = { integerValue: String(quotaNum) };
                node.fields.remaining_ai_uses = { integerValue: String(quotaNum) };
            } else {
                node.fields.badge = { nullValue: null };
                node.fields.locket_gold_badge = { booleanValue: false };
                node.fields.has_gold_badge = { booleanValue: false };
                node.fields.is_gold = { booleanValue: false };
                node.fields.photobooth_unlocked = { booleanValue: false };
            }
        }
        for (const fk of Object.keys(node.fields)) {
            const flow = fk.toLowerCase();
            if (flow.includes("remaining") || flow.includes("quota") || flow.includes("limit") || flow.includes("credit")) {
                node.fields[fk] = { integerValue: String(quotaNum) };
            } else if (flow === "used" || flow === "used_count" || flow === "uses_today") {
                node.fields[fk] = { integerValue: String(usedNum) };
            } else if (flow.includes("gold_only") || flow.includes("requires_gold") || flow.includes("locked") || flow.includes("blur") || flow.includes("paywall")) {
                node.fields[fk] = { booleanValue: isRevoked };
            } else if (flow === "unlocked" || flow === "can_use" || flow === "is_free") {
                node.fields[fk] = { booleanValue: !isRevoked };
            }
        }
    }

    for (const k of Object.keys(node)) {
        const low = k.toLowerCase();
        const val = node[k];

        if (hasUserShape && !isFriendWithBadgeOff && k === "badge" && (val === null || val === "" || val === false || val === "none") && !isRevoked) {
            node[k] = "locket_gold";
        } else if (hasUserShape && (k === "locket_gold_badge" || k === "has_gold_badge" || k === "show_gold_badge" || k === "is_gold" || k === "isGold" || k === "has_gold" || k === "hasGold") && !isFriendWithBadgeOff) {
            node[k] = !isRevoked;
        } else if (typeof val === "object" && node[k] !== null) {
            deepForceBadgeAndAiQuotaInObject(val, cfg, depth + 1);
        }
    }

    if (depth === 0) {
        flushFriendsBadgeMapIfNeeded();
    }
    return node;
}

// === KẾT THÚC PHẦN 4 / 6 — GÕ "5" ĐỂ NHẬN TIẾP PHẦN 5 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V10.0 — PART 5 OF 6)
// ============================================================================

function buildAppleWordRevealHtml(textStr, customClass = "") {
    const words = String(textStr || "").trim().split(/\s+/).filter(Boolean);
    let out = "";
    for (let i = 0; i < words.length; i++) {
        const delaySec = (i * 0.04).toFixed(2);
        out += `<span class="apple-word-unit ${customClass}" data-word-idx="${i}" style="--w-idx:${i};--w-delay:${delaySec}s;">${escapeHtml(words[i])}</span> `;
    }
    return out.trim();
}

function buildAppleScrollyCss(cfg, statusMsg) {
    const grainSvgDataUri = "data:image/svg+xml;utf8," + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(#n)" opacity="1"/></svg>`
    );

    return `
  :root {
    --apple-bg-light: #fbfbfd;
    --apple-bg-dark: #000000;
    --apple-text-primary: #1d1d1f;
    --apple-text-secondary: #6e6e73;
    --apple-blue: #0071e3;
    --apple-gold: #f59e0b;
    --apple-rose: #f43f5e;
    --apple-card-radius: 28px;
    --apple-pill-radius: 999px;
    --apple-shadow: 0 14px 48px rgba(0, 0, 0, 0.08), 0 2px 12px rgba(0, 0, 0, 0.04);
    --apple-ease: cubic-bezier(0.28, 0.11, 0.32, 1);
    --apple-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

  html, body {
    background-color: transparent;
    color: var(--apple-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.015em;
    line-height: 1.47059;
    overflow-x: clip;
  }

  .apple-bg-stack { position: fixed; inset: 0; z-index: -2; pointer-events: none; overflow: hidden; }
  .apple-bg-layer-light { position: absolute; inset: 0; background-color: var(--apple-bg-light); opacity: 1; will-change: opacity; }
  .apple-bg-layer-dark { position: absolute; inset: 0; background: radial-gradient(circle at 50% 25%, #161618 0%, #050507 60%, #000000 100%); opacity: 0; will-change: opacity; }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 9990;
    pointer-events: none;
    opacity: 0.015;
    background-image: url("${grainSvgDataUri}");
    background-repeat: repeat;
    background-size: 180px 180px;
  }

  .apple-global-progress {
    position: fixed;
    top: 0; left: 0; height: 2px;
    background: linear-gradient(90deg, #0071e3 0%, #f59e0b 50%, #10b981 100%);
    width: 100%; z-index: 10000;
    transform-origin: left center; will-change: transform; transform: scaleX(0);
  }

  .apple-sticky-nav {
    position: sticky; top: 0; height: 48px; width: 100%; z-index: 950;
    background: rgba(251, 251, 253, 0.82);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(29, 29, 31, 0.08);
    display: flex; align-items: center; justify-content: center; padding: 0 20px;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }
  .apple-sticky-nav.nav-dark-mode {
    background: rgba(18, 18, 20, 0.82);
    border-bottom-color: rgba(255, 255, 255, 0.12);
  }
  .apple-sticky-nav.nav-dark-mode .apple-nav-center,
  .apple-sticky-nav.nav-dark-mode .apple-nav-left span { color: #f5f5f7 !important; }
  .apple-sticky-nav.nav-dark-mode .apple-nav-link { color: #a1a1a6; }
  .apple-sticky-nav.nav-dark-mode .apple-logo-dot { background: #f5f5f7; }

  .apple-nav-container { width: 100%; max-width: 1040px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .apple-nav-left { display: flex; align-items: center; gap: 8px; text-decoration: none; color: var(--apple-text-primary); }
  .apple-logo-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--apple-text-primary); display: inline-block; }
  .apple-nav-center { font-size: 14px; font-weight: 700; color: var(--apple-text-primary); white-space: nowrap; }
  .apple-nav-right { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .apple-nav-link { font-size: 12px; font-weight: 500; color: var(--apple-text-secondary); text-decoration: none; padding: 5px 10px; border-radius: var(--apple-pill-radius); background: transparent; border: none; cursor: pointer; font-family: inherit; }
  .apple-nav-link:hover { opacity: 0.7; }
  .apple-buy-pill { display: inline-flex; align-items: center; justify-content: center; background: var(--apple-blue); color: #fff; font-size: 12px; font-weight: 600; padding: 0 14px; height: 28px; border-radius: var(--apple-pill-radius); text-decoration: none; border: none; cursor: pointer; white-space: nowrap; }

  .gpu-layer { will-change: transform, opacity; transform: translate3d(0, 0, 0); backface-visibility: hidden; }

  .apple-sticky-viewport { position: sticky; top: 0; width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; padding: 0 24px; }

  .sec-hero-zoom-200 { position: relative; width: 100%; height: 200vh; }
  .hero-kicker-clean { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--apple-text-secondary); margin-bottom: 20px; text-align: center; }
  .hero-mega-h1 { font-size: clamp(54px, 14vw, 185px); font-weight: 800; letter-spacing: -0.055em; line-height: 0.94; color: var(--apple-text-primary); text-align: center; white-space: nowrap; margin-bottom: 26px; user-select: none; }
  .hero-sub-lead { font-size: clamp(19px, 2.3vw, 28px); font-weight: 500; letter-spacing: -0.02em; line-height: 1.38; color: var(--apple-text-secondary); text-align: center; max-width: 680px; }
  .scroll-cue-wrap { position: absolute; bottom: 38px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .scroll-cue-line { width: 1.5px; height: 40px; background: linear-gradient(180deg, rgba(29,29,31,0.5) 0%, rgba(29,29,31,0.05) 100%); }
  .scroll-cue-label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--apple-text-secondary); }

  .sec-text-reveal-220 { position: relative; width: 100%; height: 210vh; color: #f5f5f7; }
  .text-reveal-stage { max-width: 940px; width: 100%; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
  .apple-word-paragraph { font-size: clamp(26px, 4.2vw, 50px); font-weight: 700; letter-spacing: -0.035em; line-height: 1.18; color: #f5f5f7; display: flex; flex-wrap: wrap; gap: 0.26em; }
  .apple-word-paragraph.sub-paragraph { font-size: clamp(19px, 2.4vw, 28px); font-weight: 500; color: #a1a1a6; line-height: 1.4; }
  .apple-word-unit { display: inline-block; will-change: transform, opacity, filter; transform: translate3d(0, 36px, 0) scale(0.95); opacity: 0.08; }

  .sec-sticky-scrub-300 { position: relative; width: 100%; height: 280vh; color: #f5f5f7; }
  .scrub-stage-1320 { position: relative; width: 100%; height: 100vh; max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: center; }
  .scrub-canvas-wrap { position: relative; width: 520px; max-width: 84vw; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; z-index: 2; }
  .scrub-webgl-canvas { width: 100%; height: 100%; display: block; border-radius: 36px; will-change: transform, opacity; }
  .scrub-fallback-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; opacity: 0; }
  .scrub-card-glass { position: absolute; width: 330px; padding: 30px; border-radius: var(--apple-card-radius); background: rgba(28, 28, 30, 0.78); backdrop-filter: saturate(180%) blur(24px); -webkit-backdrop-filter: saturate(180%) blur(24px); border: 1px solid rgba(255, 255, 255, 0.14); box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45); color: #f5f5f7; z-index: 4; }
  .scrub-card-left { left: 5%; top: 50%; }
  .scrub-card-right { right: 5%; top: 50%; }

  .sec-teardown-240 { position: relative; width: 100%; height: 230vh; }
  .teardown-stage-3d { position: relative; width: 100%; height: 100vh; perspective: 1100px; display: flex; align-items: center; justify-content: center; }
  .td-layer-card { position: absolute; left: 50%; top: 50%; width: 380px; max-width: 90vw; height: 470px; border-radius: var(--apple-card-radius); box-shadow: var(--apple-shadow); padding: 32px 28px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(29, 29, 31, 0.08); transform-style: preserve-3d; }
  .td-layer-front { background: rgba(255, 255, 255, 0.96); color: var(--apple-text-primary); z-index: 30; }
  .td-layer-mid { background: rgba(245, 245, 247, 0.94); color: var(--apple-text-primary); z-index: 20; }
  .td-layer-back { background: #1d1d1f; color: #fff; z-index: 10; border-color: rgba(255, 255, 255, 0.14); }
  .td-diagram-box { width: 100%; height: 170px; border-radius: 20px; display: flex; align-items: center; justify-content: center; background: rgba(29, 29, 31, 0.03); border: 1px solid rgba(29, 29, 31, 0.07); }
  .td-layer-back .td-diagram-box { background: rgba(255, 255, 255, 0.04); border-color: rgba(255, 255, 255, 0.12); }

  .sec-clip-morph-220 { position: relative; width: 100%; height: 210vh; }
  .clip-morph-viewport { position: relative; width: 100vw; height: 100vh; background: radial-gradient(120% 100% at 50% 15%, #1d1d22 0%, #09090b 55%, #000000 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 28px; color: #fff; will-change: clip-path; box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25); }
  .morph-grid-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 980px; width: 100%; margin-top: 42px; }
  .morph-metric-card { padding: 28px 24px; border-radius: 24px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); text-align: left; }
  .morph-stat-big { font-size: clamp(36px, 4vw, 54px); font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(135deg, #fef08a 0%, #f59e0b 55%, #fbbf24 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px; }

  .bento-console-main { max-width: 1040px; margin: 0 auto; padding: 50px 20px 110px; display: flex; flex-direction: column; gap: 28px; }
  .apple-bento-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: var(--apple-card-radius); box-shadow: var(--apple-shadow); border: 1px solid rgba(29, 29, 31, 0.07); padding: 34px 30px; }
  .bento-card-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid rgba(29, 29, 31, 0.07); margin-bottom: 22px; }
  .bento-eyebrow { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--apple-text-secondary); margin-bottom: 6px; }
  .bento-heading { font-size: 23px; font-weight: 700; letter-spacing: -0.025em; color: var(--apple-text-primary); }
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

  .field-label { display: block; font-size: 12px; font-weight: 600; color: var(--apple-text-primary); margin-bottom: 8px; }
  .apple-field { width: 100%; padding: 13px 16px; border-radius: 14px; background: var(--apple-bg-light); border: 1px solid rgba(29, 29, 31, 0.14); color: var(--apple-text-primary); font-size: 14px; font-family: inherit; outline: none; }
  .apple-field:focus { border-color: var(--apple-blue); box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15); }
  .chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .preset-pill { padding: 6px 14px; border-radius: var(--apple-pill-radius); background: var(--apple-bg-light); border: 1px solid rgba(29, 29, 31, 0.1); font-size: 12px; font-weight: 600; color: var(--apple-text-primary); cursor: pointer; font-family: inherit; }
  .btn-action-primary { display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 16px; background: var(--apple-text-primary); color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }
  .btn-action-blue { display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 16px; background: var(--apple-blue); color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }
  .btn-action-soft { display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 16px; background: #f2f2f7; color: var(--apple-text-primary); font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }
  .apple-pill { display: inline-block; padding: 3px 11px; border-radius: var(--apple-pill-radius); font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; }
  .pill-gold { background: rgba(245, 158, 11, 0.14); color: #92400e; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); color: #0051a8; }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); color: #9f1239; }

  .apple-pill-btn { display: inline-flex; align-items: center; justify-content: center; padding: 7px 15px; border-radius: var(--apple-pill-radius); font-size: 12px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; font-family: inherit; }
  .btn-dark-soft { background: #1d1d1f; color: #fff; }
  .btn-blue-soft { background: rgba(0, 113, 227, 0.12); color: #0071e3; }
  .btn-emerald-soft { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .btn-amber-soft { background: rgba(245, 158, 11, 0.16); color: #92400e; }
  .btn-rose-soft { background: rgba(244, 63, 94, 0.14); color: #9f1239; }

  .dir-row { padding: 18px 0; border-bottom: 1px solid rgba(29, 29, 31, 0.07); display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .dir-row:last-child { border-bottom: none; }
  .dir-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .dir-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1px solid rgba(29, 29, 31, 0.08); flex-shrink: 0; }
  .dir-meta { min-width: 0; }
  .dir-title-line { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .dir-fullname { font-size: 14px; font-weight: 700; color: var(--apple-text-primary); }
  .dir-handle { font-size: 12.5px; color: var(--apple-text-secondary); }
  .dir-mono { font-family: "SF Mono", monospace; font-size: 11px; color: var(--apple-text-secondary); margin-top: 4px; word-break: break-all; }
  .dir-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; flex-shrink: 0; }
  .dir-sku-tag { font-family: "SF Mono", monospace; font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: var(--apple-pill-radius); background: #f5f5f7; }

  .spec-tile { padding: 20px; border-radius: 20px; background: var(--apple-bg-light); border: 1px solid rgba(29, 29, 31, 0.07); }
  .spec-mono-val { font-family: "SF Mono", monospace; font-size: 12px; font-weight: 600; color: var(--apple-text-primary); word-break: break-all; margin-top: 4px; }
  .empty-state-box { padding: 28px 16px; text-align: center; font-size: 13.5px; color: var(--apple-text-secondary); }
  .toast-alert-bar { padding: 16px 22px; border-radius: 20px; background: #1d1d1f; color: #fff; font-size: 13.5px; font-weight: 500; box-shadow: var(--apple-shadow); display: ${statusMsg ? "block" : "none"}; }
  .admin-block-alert { padding: 22px 26px; border-radius: var(--apple-card-radius); background: #fff1f2; border: 1px solid rgba(244, 63, 94, 0.3); color: #881337; display: ${cfg.isBlockedByAdmin ? "flex" : "none"}; flex-direction: column; gap: 6px; }

  /* Caption Studio Live Pill Preview */
  .cap-preview-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 15px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    border: 1px solid rgba(0,0,0,0.06);
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cap-studio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 12px;
    max-height: 520px;
    overflow-y: auto;
    padding-right: 4px;
  }
  .cap-card-item {
    padding: 14px;
    border-radius: 18px;
    background: var(--apple-bg-light);
    border: 1px solid rgba(29, 29, 31, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
  .check-pill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 10px;
  }
  .check-pill-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 14px;
    border-radius: 14px;
    background: #ffffff;
    border: 1px solid rgba(29, 29, 31, 0.09);
    font-size: 13px;
    font-weight: 600;
    color: var(--apple-text-primary);
    cursor: pointer;
  }
  .check-pill-item input { width: 17px; height: 17px; accent-color: var(--apple-blue); }

  .apple-modal-backdrop { position: fixed; inset: 0; z-index: 10001; background: rgba(29, 29, 31, 0.55); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); display: flex; align-items: flex-end; justify-content: center; }
  .apple-bottom-sheet { position: relative; width: 100%; max-width: 480px; background: #1c1c1e; border-top-left-radius: 32px; border-top-right-radius: 32px; box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.45); border: 1px solid rgba(255, 255, 255, 0.12); padding: 18px 24px 38px; text-align: center; color: #fff; }
  .apple-sheet-handle { width: 40px; height: 5px; border-radius: 3px; background: ${cfg.isBlockedByAdmin ? "#f43f5e" : "#f59e0b"}; margin: 0 auto 18px; }
  .apple-modal-close-x { position: absolute; top: 16px; right: 20px; width: 30px; height: 30px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); color: #fff; border: none; font-size: 16px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; }
  .apple-modal-art { width: 175px; height: 175px; margin: 12px auto 18px; border-radius: 24px; overflow: hidden; background: #000; border: 1px solid rgba(255, 255, 255, 0.1); }
  .apple-modal-art img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .hidden { display: none !important; }

  @media (max-width: 860px) {
    .scrub-stage-1320 { flex-direction: column; justify-content: center; gap: 14px; padding: 54px 18px 18px; }
    .scrub-canvas-wrap { width: 260px; }
    .scrub-card-glass { position: static; width: 100%; max-width: 440px; padding: 20px; }
    .td-layer-card { width: 320px; height: 420px; padding: 24px 22px; }
    .morph-grid-metrics, .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .dir-row { flex-direction: column; align-items: flex-start; }
    .apple-nav-link.hide-mobile { display: none; }
  }
`;
}

function buildAppleScrollySectionsHtml(cfg, activeFriendsBadgeCount, friendsListCount, isAdminLogged, shouldShowPopup) {
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const popupBadge = isRevoked ? (cfg.revokedPopupBadge || "THÔNG BÁO HỆ THỐNG") : (cfg.popupBadge || "LOCKET GOLD");
    const popupHeader = isRevoked ? (cfg.revokedPopupHeader || "Đã thu hồi LOCKET GOLD!") : (cfg.popupHeader || "Đã mở khoá GOLD thành công!");
    const popupTitle = isRevoked ? (cfg.revokedPopupTitle || "Tài khoản đã bị Admin chặn & thu hồi Gold") : (cfg.popupTitle || "Ngô Minh Đức");
    const popupSubtitle = isRevoked ? (cfg.revokedPopupSubtitle || cfg.blockReason) : (cfg.popupSubtitle || "Anh Yêu Tất Cả Các Em");
    const popupImage = cfg.popupImage || THAY_IMAGE_PATH;
    const popupBtnText = isRevoked ? (cfg.revokedPopupBtnText || "Đã hiểu") : (cfg.popupBtnText || "Hoàn tất");
    const ctaBtnStyle = isRevoked
        ? "background:#f43f5e;color:#ffffff;font-weight:700;"
        : "background:#f59e0b;color:#000000;font-weight:700;";

    const revealSentence1 = buildAppleWordRevealHtml("Mọi chuyển động đều được điều khiển trực tiếp bằng ngón tay của bạn. Không autoplay. Không rào cản Paywall. Mở khóa trọn bộ Khung Photobooth, 140+ Caption VIP, Camera 30s và Tạo diện mạo AI ở tốc độ 60 khung hình/giây.");
    const revealSentence2 = buildAppleWordRevealHtml(" Tự động bắt giữ UID bạn bè từ luồng mạng, tuỳ chỉnh thêm/xoá Caption trực tiếp trên giao diện, chặn thu hồi Gold tức thì và duy trì kết nối DoH UpLocket 40 miền bảo mật tuyệt đối.");

    return `
  <div class="apple-bg-stack" aria-hidden="true">
    <div id="bgLayerLight" class="apple-bg-layer-light"></div>
    <div id="bgLayerDark" class="apple-bg-layer-dark"></div>
  </div>

  <div id="globalProgressBar" class="apple-global-progress"></div>

  <div id="locketGoldModal" onclick="if(event.target===this){this.classList.add('hidden');this.style.display='none';}" class="apple-modal-backdrop ${shouldShowPopup ? "" : "hidden"}" style="display:${shouldShowPopup ? "flex" : "none"};">
    <div class="apple-bottom-sheet">
      <div class="apple-sheet-handle"></div>
      <button type="button" onclick="var m=document.getElementById('locketGoldModal');if(m){m.classList.add('hidden');m.style.display='none';}" class="apple-modal-close-x" aria-label="Đóng">×</button>
      <span class="bento-eyebrow" style="color:${isRevoked ? "#f43f5e" : "#f59e0b"};">${escapeHtml(popupBadge)}</span>
      <h2 class="bento-heading" style="font-size:25px;color:#ffffff;">${escapeHtml(popupHeader)}</h2>
      <div class="apple-modal-art">
        <img id="modalArtImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" alt="Product Studio">
      </div>
      <div style="font-size:18px;font-weight:700;color:#ffffff;">${escapeHtml(popupTitle)}</div>
      <div style="font-size:14px;color:#a1a1a6;margin:6px 0 22px;">${escapeHtml(popupSubtitle)}</div>
      <button type="button" id="modalDoneBtn" onclick="var m=document.getElementById('locketGoldModal');if(m){m.classList.add('hidden');m.style.display='none';}" class="btn-action-blue" style="${ctaBtnStyle}">${escapeHtml(popupBtnText)}</button>
    </div>
  </div>

  <header id="appleStickyNav" class="apple-sticky-nav">
    <div class="apple-nav-container">
      <a href="/setdate" class="apple-nav-left">
        <span class="apple-logo-dot"></span>
        <span style="font-size:13px;font-weight:700;">${escapeHtml(THAY_PRODUCT_NAME)}</span>
      </a>
      <div class="apple-nav-right">
        <a href="#captionStudioSection" class="apple-nav-link hide-mobile">Caption Studio</a>
        <a href="#featureEngineSection" class="apple-nav-link hide-mobile">Camera & Tính năng</a>
        <a href="#friendsBadgeSection" class="apple-nav-link hide-mobile">Bạn bè (${activeFriendsBadgeCount}/${friendsListCount})</a>
        <a href="#dohEngineSection" class="apple-nav-link hide-mobile">DoH (40 miền)</a>
        <button type="button" onclick="openGoldModal()" class="apple-nav-link">Xem mẫu In-App</button>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-nav-link">${isAdminLogged ? "Root Admin" : "Quản trị"}</button>
        <a href="#consoleSection" class="apple-buy-pill">Bảng điều khiển</a>
      </div>
    </div>
  </header>

  <main>

    <section id="secHeroZoom" class="sec-hero-zoom-200">
      <div class="apple-sticky-viewport">
        <div id="elHeroKicker" class="hero-kicker-clean gpu-layer">THẾ HỆ LOCKET GOLD UPLOCKET V10 MASTER</div>
        <h1 id="elHeroMegaH1" class="hero-mega-h1 gpu-layer">LOCKET H2</h1>
        <p id="elHeroSubLead" class="hero-sub-lead gpu-layer">${escapeHtml(THAY_SLOGAN)}</p>

        <div id="elScrollCue" class="scroll-cue-wrap gpu-layer">
          <span class="scroll-cue-label">Cuộn để khám phá</span>
          <div class="scroll-cue-line"></div>
        </div>
      </div>
    </section>

    <section id="secTextReveal" class="sec-text-reveal-220">
      <div class="apple-sticky-viewport">
        <div class="text-reveal-stage">
          <span class="bento-eyebrow" style="color:#f59e0b;">CHUYỂN ĐỘNG THEO THANH CUỘN</span>
          <div id="elWordGroup1" class="apple-word-paragraph">
            ${revealSentence1}
          </div>
          <div id="elWordGroup2" class="apple-word-paragraph sub-paragraph">
            ${revealSentence2}
          </div>
        </div>
      </div>
    </section>

    <section id="secStickyScrub" class="sec-sticky-scrub-300">
      <div class="apple-sticky-viewport">
        <div class="scrub-stage-1320">
          <div id="elScrubLeftCard" class="scrub-card-glass scrub-card-left gpu-layer">
            <span class="bento-eyebrow" style="color:#60a5fa;">01 / THIẾT KẾ TỐI GIẢN</span>
            <h2 class="bento-heading" style="color:#ffffff;font-size:22px;margin-bottom:10px;">${escapeHtml(THAY_USP_LEFT)}</h2>
            <p style="font-size:14.5px;color:#a1a1a6;line-height:1.55;">
              Mốc đăng ký gốc ${escapeHtml(cfg.lockDate)} được khóa cứng ở tầng giao thức, đồng bộ Bottom-Sheet thông báo trực tiếp trong App Locket.
            </p>
          </div>

          <div id="elScrubCenterWrap" class="scrub-canvas-wrap gpu-layer">
            <canvas id="elSequenceCanvas" width="900" height="900" class="scrub-webgl-canvas"></canvas>
            <img id="elSequenceSourceImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" class="scrub-fallback-img" alt="Sequence Source" crossorigin="anonymous">
          </div>

          <div id="elScrubRightCard" class="scrub-card-glass scrub-card-right gpu-layer">
            <span class="bento-eyebrow" style="color:#fbbf24;">02 / VI XỬ LÝ H2 & PHOTOBOOTH</span>
            <h2 class="bento-heading" style="color:#ffffff;font-size:22px;margin-bottom:10px;">${escapeHtml(THAY_USP_RIGHT)}</h2>
            <p style="font-size:14.5px;color:#a1a1a6;line-height:1.55;">
              Kết hợp định tuyến DoH UpLocket (${escapeHtml(cfg.dohPrimaryIp)}) cùng bộ giải mã 40 miền và mở khóa trọn bộ Photobooth 4 ô, Cute, Polaroid, 140+ Caption & AI Looks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="secTeardown" class="sec-teardown-240">
      <div class="apple-sticky-viewport">
        <div class="teardown-stage-3d">

          <article id="elTdBack" class="td-layer-card td-layer-back gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill" style="background:rgba(255,255,255,0.14);color:#fff;">LỚP 03 · UPLOCKET ROOT CA</span>
              <span style="font-family:monospace;font-size:11px;color:#86868b;">-40PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <rect x="18" y="18" width="184" height="84" rx="14" stroke="#ffffff" stroke-opacity="0.3" stroke-width="1.5"/>
                <circle cx="110" cy="60" r="22" stroke="#f59e0b" stroke-width="2"/>
                <circle cx="110" cy="60" r="6" fill="#f59e0b"/>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="color:#ffffff;font-size:21px;margin-bottom:8px;">Tầng 3: UpLocket Root CA & 40 Miền DoH</h3>
              <p style="font-size:14px;color:#a1a1a6;">
                Gắn định danh chứng chỉ ${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)} (2026–2036) và định tuyến 40 miền RevenueCat, Firebase, Spotify, YouTube.
              </p>
            </div>
          </article>

          <article id="elTdMid" class="td-layer-card td-layer-mid gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill pill-blue">LỚP 02 · PHOTOBOOTH, CAPTIONS & AI</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">-80PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <rect x="65" y="15" width="90" height="90" rx="20" fill="#1d1d1f" stroke="#0071e3" stroke-width="2"/>
                <text x="110" y="65" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">H2 AI</text>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 2: Khung Photobooth, 140+ Caption & AI</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Mở khóa Khung & Photobooth, Sự kiện (Practical Magic 2), 140+ Caption tự chế, Camera 30s và 999.999 lượt Tạo diện mạo AI.
              </p>
            </div>
          </article>

          <article id="elTdFront" class="td-layer-card td-layer-front gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill pill-gold">LỚP 01 · REVENUECAT & REVOKE</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">-120PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <circle cx="110" cy="60" r="42" stroke="#1d1d1f" stroke-width="2"/>
                <circle cx="110" cy="60" r="26" stroke="#0071e3" stroke-width="1.5" stroke-dasharray="4 4"/>
                <circle cx="110" cy="60" r="12" fill="#1d1d1f"/>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 1: Khóa Cứng Thuê Bao & Chặn Mất Gold</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Ghi đè gói locket_1600_1y tới năm 9999, điều khiển huy hiệu bạn bè và thu hồi sạch quyền Gold ngay khi Admin bấm Chặn.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>

    <section id="secClipMorph" class="sec-clip-morph-220">
      <div class="apple-sticky-viewport" style="padding:0;">
        <div id="elClipMorphBox" class="clip-morph-viewport">
          <span class="apple-pill pill-gold" style="margin-bottom:16px;">KIẾN TRÚC HIỆU NĂNG CAO</span>
          <h2 style="font-size:clamp(32px,5vw,58px);font-weight:800;letter-spacing:-0.035em;max-width:820px;line-height:1.06;">
            Ba trụ cột làm nên quyền năng Locket Gold Pro.
          </h2>
          <p style="font-size:17.5px;color:#a1a1a6;max-width:620px;margin-top:14px;">
            Mọi thông số đều được đồng bộ tự động ngay khi bạn mở ứng dụng Locket.
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
`;
}

function buildAppleBentoConsoleHtml(cfg, statusMsg, openAdminDrawer) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const currentAiQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const dohStatus = getCachedDohStatus(cfg);

    const popupBadge = cfg.popupBadge || "LOCKET GOLD";
    const popupHeader = cfg.popupHeader || "Đã mở khoá GOLD thành công!";
    const popupTitle = cfg.popupTitle || "Ngô Minh Đức";
    const popupSubtitle = cfg.popupSubtitle || "Anh Yêu Tất Cả Các Em";
    const popupImage = cfg.popupImage || THAY_IMAGE_PATH;
    const popupBtnText = cfg.popupBtnText || "Hoàn tất";

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false && u.status !== "blocked" && !u.blocked);

    const friendsMap = getFriendsBadgeMap();
    const friendsList = Object.values(friendsMap).filter(f => f && f.uid && f.uid !== cachedUid);
    const activeFriendsBadgeCount = friendsList.filter(f => f.badge_enabled !== false).length;

    // 1. Render Danh sách Hiệu ứng Camera & Photobooth
    let cameraCatalogTilesHtml = "";
    for (const sec of LOCKET_CAMERA_EFFECTS_CATALOG.sections) {
        const itemNames = sec.items.map(i => i.title).join(" · ");
        cameraCatalogTilesHtml += `
        <div class="spec-tile">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                <span class="bento-eyebrow" style="margin:0;">${escapeHtml(sec.title)}</span>
                <span class="apple-pill ${cfg.isBlockedByAdmin ? "pill-rose" : "pill-emerald"}">
                    ${cfg.isBlockedByAdmin ? "ĐÃ THU HỒI (KHOÁ)" : `ĐÃ MỞ KHOÁ (${sec.items.length})`}
                </span>
            </div>
            <div style="font-size:13px;font-weight:600;color:#1d1d1f;margin-top:8px;">${escapeHtml(itemNames)}</div>
        </div>`;
    }

    // 2. Render Kho Caption Studio (Thêm / Sửa / Xoá trực tiếp)
    const mergedCaptionSections = buildMergedOverlaySections();
    const customCapDb = getCustomCaptionsDb();
    const deletedCapIds = Object.keys(customCapDb.deletedIds || {});
    let totalActiveCaptionsCount = 0;
    let captionCardsHtml = "";

    for (const sec of mergedCaptionSections) {
        const secName = sec.section || "🎨 Captions";
        const itemsArr = Array.isArray(sec.items) ? sec.items : [];
        for (const it of itemsArr) {
            if (!it || !it.overlay_id) continue;
            const capObj = it.caption || {};
            if (capObj.type !== "static_content" && !capObj.text) continue;
            totalActiveCaptionsCount++;

            const cId = it.overlay_id;
            const cText = capObj.text || cId;
            const cEmoji = (capObj.icon && capObj.icon.data) ? capObj.icon.data : "";
            const colors = (capObj.background && Array.isArray(capObj.background.colors) && capObj.background.colors.length > 0)
                ? capObj.background.colors
                : ["#1d1d1f", "#434343"];
            const c1 = colors[0] || "#FFD700";
            const c2 = colors[1] || c1;
            const c3 = colors[2] || "";
            const gradCss = colors.length >= 3
                ? `linear-gradient(135deg, ${c1}, ${c2}, ${c3})`
                : `linear-gradient(135deg, ${c1}, ${c2})`;
            const txtColor = capObj.text_color || "#FFFFFF";

            captionCardsHtml += `
            <div class="cap-card-item" data-cap-search="${escapeHtml((cId + " " + cText + " " + secName).toLowerCase())}">
                <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:8px;">
                        <span style="font-size:10.5px;font-weight:700;color:#6e6e73;">${escapeHtml(secName)}</span>
                        <code style="font-size:10px;color:#86868b;">${escapeHtml(cId)}</code>
                    </div>
                    <div class="cap-preview-chip" style="background:${escapeHtml(gradCss)};color:${escapeHtml(txtColor)};">
                        ${cEmoji ? `<span>${escapeHtml(cEmoji)}</span>` : ""}
                        <span>${escapeHtml(cText)}</span>
                    </div>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-top:4px;">
                    <button type="button"
                            onclick="loadCaptionIntoEditor('${escapeHtml(cId)}', '${escapeHtml(cText)}', '${escapeHtml(cEmoji)}', '${escapeHtml(secName)}', '${escapeHtml(c1)}', '${escapeHtml(c2)}', '${escapeHtml(c3)}', '${escapeHtml(txtColor)}')"
                            class="apple-pill-btn btn-blue-soft" style="flex:1;">
                        Sửa Cap này
                    </button>
                    <a href="/setdate?caption_action=delete&overlay_id=${encodeURIComponent(cId)}#captionStudioSection"
                       class="apple-pill-btn btn-rose-soft">
                        Xoá
                    </a>
                </div>
            </div>`;
        }
    }

    // 3. Render Danh sách Bạn bè
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
                            UID: ${escapeHtml(f.uid)} · Đồng bộ: ${escapeHtml(f.updated_at || "Tự động")}
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

    // 4. Render Danh sách người đã lên Gold
    let goldDirectoryHtml = "";
    if (usersList.length === 0) {
        goldDirectoryHtml = `
        <div class="empty-state-box">
            Chưa có tài khoản nào trong danh sách. Mở Locket hoặc nhấn nút Kích hoạt để ghi nhận tự động.
        </div>`;
    } else {
        for (const u of usersList) {
            const isBlk = u.status === "blocked" || u.blocked === true || u.gold_active === false;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const fName = u.full_name || uName;
            const uAvatar = u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff`;
            const lockD = u.force_lock_date || u.lock_date || cfg.lockDate;
            const userAiQuota = isBlk ? 0 : sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);

            goldDirectoryHtml += `
            <div class="dir-row" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="dir-left">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="dir-avatar" alt="avatar" loading="lazy">
                    <div class="dir-meta">
                        <div class="dir-title-line">
                            <span class="dir-fullname">${escapeHtml(fName)}</span>
                            <span class="dir-handle">@${escapeHtml(uName)}</span>
                            ${isBlk ? `<span class="apple-pill pill-rose">ĐÃ THU HỒI GOLD (MẤT GOLD)</span>` : `<span class="apple-pill pill-gold">LOCKET GOLD</span>`}
                            <span class="apple-pill ${isBlk ? "pill-rose" : "pill-blue"}">AI QUOTA: ${escapeHtml(userAiQuota.toLocaleString("vi-VN"))}</span>
                            ${isBlk ? `<span class="apple-pill pill-rose">ĐANG BỊ CHẶN</span>` : `<span class="apple-pill pill-emerald">HOẠT ĐỘNG 24/7</span>`}
                        </div>
                        <div class="dir-mono">
                            UID: ${escapeHtml(u.uid)} · Mốc đăng ký: ${escapeHtml(lockD)}
                        </div>
                    </div>
                </div>
                <div class="dir-actions">
                    <span class="dir-sku-tag">${escapeHtml(isBlk ? "REVOKED_NO_GOLD" : (u.product_id || cfg.productId || "locket_1600_1y"))}</span>
                </div>
            </div>`;
        }
    }

    // 5. Render Bảng Admin
    let adminTableHtml = "";
    if (usersList.length === 0) {
        adminTableHtml = `<div class="empty-state-box">Chưa có người dùng nào được ghi nhận trong hệ thống.</div>`;
    } else {
        for (const u of usersList) {
            const isBlk = u.status === "blocked" || u.blocked === true || u.gold_active === false;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const uAiQuota = isBlk ? 0 : sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);
            adminTableHtml += `
            <div class="dir-row">
                <div class="dir-meta">
                    <div class="dir-title-line">
                        <span class="dir-fullname">@${escapeHtml(uName)}</span>
                        <span class="dir-mono" style="margin:0;">UID: ${escapeHtml(u.uid)}</span>
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-gold"}">${isBlk ? "ĐÃ MẤT GOLD" : "GOLD 24/7"}</span>
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-blue"}">AI: ${escapeHtml(String(uAiQuota))}</span>
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-emerald"}">
                            ${isBlk ? "Đã chặn & Thu hồi Gold" : "Đang hoạt động"}
                        </span>
                    </div>
                    <div class="dir-mono">
                        Mốc đăng ký: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")} · Lượt AI: ${escapeHtml(String(uAiQuota))} · Ghi chú: ${escapeHtml(u.note || (isBlk ? "Đã bị Admin thu hồi Locket Gold" : "Đã mở khoá GOLD thành công"))}
                    </div>
                </div>
                <div class="dir-actions">
                    <a href="/setdate?admin_drawer=1&admin_action=push_user_gold&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-dark-soft">Bắn Push In-App</a>
                    <a href="/setdate?admin_drawer=1&admin_action=set_ai_quota&target_uid=${encodeURIComponent(u.uid)}&target_ai_quota=999999" class="apple-pill-btn btn-blue-soft">Set 999.999 AI</a>
                    ${isBlk ? `
                        <a href="/setdate?admin_drawer=1&admin_action=unblock&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-emerald-soft">Gỡ chặn & Cấp lại Gold</a>
                    ` : `
                        <a href="/setdate?admin_drawer=1&admin_action=block&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-rose-soft">Chặn & Thu hồi Gold</a>
                    `}
                    <a href="/setdate?admin_drawer=1&admin_action=delete&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-amber-soft">Xoá</a>
                </div>
            </div>`;
        }
    }

    return `
    <div id="consoleSection" class="bento-console-main">

      <div id="realtimeBlockBanner" class="admin-block-alert">
        <span class="bento-eyebrow" style="color:#9f1239;margin:0;">THÔNG BÁO THU HỒI QUYỀN LOCKET GOLD TỪ QUẢN TRỊ VIÊN</span>
        <div style="font-size:18px;font-weight:700;">Đã thu hồi LOCKET GOLD — Tài khoản của bạn đã bị chặn & mất Gold!</div>
        <div style="font-size:14px;">${escapeHtml(cfg.blockReason)}</div>
      </div>

      <div id="statusToast" class="toast-alert-bar">${escapeHtml(statusMsg || "")}</div>

      <!-- BẢNG QUẢN TRỊ ROOT ADMIN -->
      <section id="adminCommandCenter" class="apple-bento-card ${openAdminDrawer ? "" : "hidden"}">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">ROOT ADMIN CONSOLE</span>
            <h2 class="bento-heading">Quản trị Thu hồi/Cấp Gold & Tuỳ chỉnh Bottom-Sheet TRONG APP LOCKET</h2>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="openGoldModal()" class="preset-pill">Xem trước Bottom-Sheet In-App</button>
            <button type="button" onclick="triggerPushNow()" class="preset-pill">Bắn thử thông báo iOS</button>
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
                <span class="bento-eyebrow" style="margin:0;">CẤU HÌNH BOTTOM-SHEET & THÔNG BÁO KHI MỞ APP LOCKET</span>
                <button type="button" onclick="resetDefaultGoldArt()" class="preset-pill">Khôi phục đồ hoạ Studio mặc định</button>
              </div>
              <div class="grid-2">
                <div>
                  <label class="field-label">Nhãn huy hiệu trong Locket (Badge)</label>
                  <input type="text" name="popupBadge" value="${escapeHtml(popupBadge)}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Tiêu đề chính khi mở Locket (Header)</label>
                  <input type="text" name="popupHeader" value="${escapeHtml(popupHeader)}" class="apple-field">
                </div>
              </div>
              <div class="grid-2" style="margin-top:14px;">
                <div>
                  <label class="field-label">Tên / Tiêu đề dòng 1 trong Locket</label>
                  <input type="text" name="popupTitle" value="${escapeHtml(popupTitle)}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Lời nhắn dòng 2 trong Locket</label>
                  <input type="text" name="popupSubtitle" value="${escapeHtml(popupSubtitle)}" class="apple-field">
                </div>
              </div>
              <div class="grid-2" style="margin-top:14px;">
                <div>
                  <label class="field-label">URL Ảnh trung tâm (Để trống dùng Studio Vector 8K)</label>
                  <input type="text" id="adminPopupImgInput" name="popupImage" value="${escapeHtml(popupImage)}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Chữ trên nút đóng & Giãn cách báo khi mở Locket (Giây)</label>
                  <div style="display:grid;grid-template-columns:1fr 110px;gap:10px;">
                    <input type="text" name="popupBtnText" value="${escapeHtml(popupBtnText)}" class="apple-field">
                    <input type="number" name="pushCooldownSeconds" value="${escapeHtml(String(cfg.pushCooldownSeconds || 12))}" min="5" max="3600" class="apple-field">
                  </div>
                </div>
              </div>
              <div style="margin-top:14px;display:flex;gap:18px;flex-wrap:wrap;font-size:13px;color:#6e6e73;">
                <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                  <input type="checkbox" name="pushNotifyOnActivate" value="1" ${cfg.pushNotifyOnActivate !== false ? "checked" : ""}> Tự nổ thông báo khi mở App Locket
                </label>
              </div>
              <div class="grid-2" style="margin-top:18px;">
                <button type="submit" class="btn-action-primary">Lưu cấu hình Thông báo In-App Locket</button>
                <button type="button" onclick="openGoldModal()" class="btn-action-blue">Xem trước mẫu Bottom-Sheet trên màn hình</button>
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
                <a href="/setdate?admin_drawer=1&admin_action=unblock_all" style="font-size:12px;font-weight:600;color:#0071e3;text-decoration:none;">Gỡ chặn & Cấp lại Gold toàn bộ</a>
              </div>
              ${adminTableHtml}
            </div>
          </div>
        `}
      </section>

      <!-- STUDIO 01: THÊM, SỬA & XOÁ CUSTOM CAPTIONS TRỰC TIẾP -->
      <section id="captionStudioSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">LOCKET CAPTION STUDIO (ADD / EDIT / DELETE CAPTIONS)</span>
            <h2 class="bento-heading">Trình Quản Lý, Thêm Mới & Xoá Caption Locket (${totalActiveCaptionsCount} đang bật / ${deletedCapIds.length} đã xoá)</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Tự tạo Caption mang tên riêng của bạn với dải màu Gradient tuỳ chọn, sửa lại bất kỳ Caption nào có sẵn hoặc bấm <strong>Xoá</strong> những Caption không dùng tới.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <a href="/setdate?caption_action=reset_all#captionStudioSection" class="apple-pill-btn btn-amber-soft">Khôi phục toàn bộ 140+ Caption gốc</a>
          </div>
        </div>

        <form method="GET" action="/setdate#captionStudioSection" class="spec-tile" style="margin-bottom:24px;">
          <input type="hidden" name="caption_action" value="upsert">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px;">
            <span class="bento-eyebrow" style="margin:0;">TẠO CAPTION MỚI HOẶC CHỈNH SỬA CAPTION ĐANG CHỌN</span>
            <div>
              <span style="font-size:11px;font-weight:600;color:#6e6e73;margin-right:8px;">Xem trước trực tiếp:</span>
              <span id="liveCapStudioPreview" class="cap-preview-chip" style="background:linear-gradient(135deg,#FFD700,#F59E0B);color:#000000;">
                <span id="liveCapEmojiSpan">👑</span>
                <span id="liveCapTextSpan">Ngô Minh Đức VIP</span>
              </span>
            </div>
          </div>

          <div class="grid-3">
            <div>
              <label class="field-label">Nội dung chữ hiển thị trên Caption</label>
              <input type="text" id="capEditorText" name="cap_text" value="Ngô Minh Đức VIP" oninput="updateCapStudioPreview()" class="apple-field" placeholder="Nhập chữ hiển thị..." required>
            </div>
            <div>
              <label class="field-label">Icon / Emoji đi kèm (Để trống nếu không dùng)</label>
              <input type="text" id="capEditorEmoji" name="cap_emoji" value="👑" oninput="updateCapStudioPreview()" class="apple-field" placeholder="VD: 👑, 💗, 🔥, 🎀...">
            </div>
            <div>
              <label class="field-label">Mã định danh (Overlay ID — Tự tạo nếu để trống)</label>
              <input type="text" id="capEditorId" name="overlay_id" value="" class="apple-field" placeholder="VD: caption:my_vip_cap">
            </div>
          </div>

          <div class="grid-4" style="margin-top:14px;">
            <div>
              <label class="field-label">Màu nền Gradient 1 (Hex)</label>
              <input type="text" id="capEditorC1" name="cap_c1" value="#FFD700" oninput="updateCapStudioPreview()" class="apple-field" placeholder="#FFD700">
            </div>
            <div>
              <label class="field-label">Màu nền Gradient 2 (Hex)</label>
              <input type="text" id="capEditorC2" name="cap_c2" value="#F59E0B" oninput="updateCapStudioPreview()" class="apple-field" placeholder="#F59E0B">
            </div>
            <div>
              <label class="field-label">Màu nền Gradient 3 (Tuỳ chọn)</label>
              <input type="text" id="capEditorC3" name="cap_c3" value="" oninput="updateCapStudioPreview()" class="apple-field" placeholder="#B45309 (Có thể để trống)">
            </div>
            <div>
              <label class="field-label">Màu chữ (Text Hex)</label>
              <input type="text" id="capEditorTextColor" name="cap_text_color" value="#000000E6" oninput="updateCapStudioPreview()" class="apple-field" placeholder="#FFFFFFE6 hoặc #000000">
            </div>
          </div>

          <div class="grid-2" style="margin-top:14px;">
            <div>
              <label class="field-label">Nhóm danh mục hiển thị trong Locket</label>
              <select id="capEditorSection" name="cap_section" class="apple-field">
                <option value="✨ Caption Tự Chế (Custom Studio)">✨ Caption Tự Chế (Custom Studio)</option>
                <option value="🎨 Decorative by Duy Vinh & Minh Đức">🎨 Decorative by Duy Vinh & Minh Đức</option>
                <option value="🎨 Tình yêu & Cơm chó 💕">🎨 Tình yêu & Cơm chó 💕</option>
                <option value="🎨 Gen Z & Xéo xắt 💅">🎨 Gen Z & Xéo xắt 💅</option>
                <option value="🎨 Meme & Hài hước 🤡">🎨 Meme & Hài hước 🤡</option>
                <option value="🎨 Bất ổn & Hết cứu 🫠">🎨 Bất ổn & Hết cứu 🫠</option>
                <option value="🎨 Deadline & Tiền bạc 💸">🎨 Deadline & Tiền bạc 💸</option>
                <option value="🎨 Daily & Đời sống ☕">🎨 Daily & Đời sống ☕</option>
                <option value="🎨 Holiday Caption">🎨 Holiday Caption</option>
              </select>
            </div>
            <div style="display:flex;align-items:flex-end;gap:10px;">
              <button type="submit" class="btn-action-blue">+ Lưu / Thêm Caption Vào Locket Ngay</button>
            </div>
          </div>
        </form>

        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;">
          <span class="bento-eyebrow" style="margin:0;">DANH SÁCH TOÀN BỘ CAPTION ĐANG HOẠT ĐỘNG (${totalActiveCaptionsCount}) — BẤM "SỬA" ĐỂ NẠP LÊN FORM HOẶC "XOÁ"</span>
          <div style="width:100%;max-width:300px;">
            <input type="text" id="searchCaptionStudioInput" oninput="filterCaptionStudioCards()" class="apple-field" style="padding:9px 14px;font-size:13px;" placeholder="Tìm nội dung Caption, nhóm hoặc mã ID...">
          </div>
        </div>

        <div id="captionStudioCardsGrid" class="cap-studio-grid">
          ${captionCardsHtml}
        </div>
      </section>

      <!-- STUDIO 02: CHỈNH SỬA TOÀN BỘ TÍNH NĂNG TRONG FILE (CAMERA 30S/60S/90S, FEATURE GATES, STREAK, WIDGET, CDN) -->
      <section id="featureEngineSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">FULL ENGINE PARAMETERS & FEATURE GATES CUSTOMIZER</span>
            <h2 class="bento-heading">Tuỳ Chỉnh Toàn Diện Thông Số Camera, Video, Feature Gates, Streak & Widget</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Mọi tính năng từ <code>forceGold4.3.js</code>, <code>locketfix8.js</code> và <code>header7.js</code> đều có thể bật/tắt và chỉnh thông số trực tiếp tại đây.
            </p>
          </div>
          <span class="apple-pill pill-blue" style="padding:8px 14px;font-size:12px;">
            VIDEO MAX: ${escapeHtml(String(cfg.videoMaxDuration || 30))}S · ${escapeHtml(String(cfg.videoQualityMbps || 0.9))} MBPS
          </span>
        </div>

        <form method="GET" action="/setdate#featureEngineSection" style="display:flex;flex-direction:column;gap:22px;">
          <input type="hidden" name="save_engine_features" value="1">

          <div class="spec-tile">
            <span class="bento-eyebrow">1. THÔNG SỐ CAMERA, ĐỘ DÀI VIDEO (30S / 60S / 90S) & CHẤT LƯỢNG TẢI LÊN</span>
            <div class="grid-4" style="margin-top:12px;">
              <div>
                <label class="field-label">Độ dài Video tối đa (Giây)</label>
                <input type="number" step="0.5" id="videoMaxDurInput" name="videoMaxDuration" value="${escapeHtml(String(cfg.videoMaxDuration || 30.0))}" class="apple-field">
                <div class="chip-row">
                  <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='30'">30s</button>
                  <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='60'">60s</button>
                  <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='90'">90s</button>
                </div>
              </div>
              <div>
                <label class="field-label">Bitrate Video (Mbps)</label>
                <input type="number" step="0.1" name="videoQualityMbps" value="${escapeHtml(String(cfg.videoQualityMbps || 0.9))}" class="apple-field">
              </div>
              <div>
                <label class="field-label">Kích thước Ảnh chính (px)</label>
                <input type="number" name="uploadMainImageSize" value="${escapeHtml(String(cfg.uploadMainImageSize || 1440))}" class="apple-field">
              </div>
              <div>
                <label class="field-label">Kích thước Thumbnail (px)</label>
                <input type="number" name="uploadThumbnailSize" value="${escapeHtml(String(cfg.uploadThumbnailSize || 1020))}" class="apple-field">
              </div>
            </div>

            <div class="check-pill-grid" style="margin-top:14px;">
              <label class="check-pill-item"><input type="checkbox" name="ultraWideEnabled" value="1" ${cfg.ultraWideEnabled !== false ? "checked" : ""}> Camera Góc Siêu Rộng (0.5x)</label>
              <label class="check-pill-item"><input type="checkbox" name="telephotoEnabled" value="1" ${cfg.telephotoEnabled !== false ? "checked" : ""}> Camera Telephoto (Zoom quang)</label>
              <label class="check-pill-item"><input type="checkbox" name="volumeButtonShutter" value="1" ${cfg.volumeButtonShutter !== false ? "checked" : ""}> Chụp bằng nút Âm lượng</label>
              <label class="check-pill-item"><input type="checkbox" name="srgbColorSpace" value="1" ${cfg.srgbColorSpace !== false ? "checked" : ""}> Hệ màu chuẩn sRGB & Lanczos</label>
              <label class="check-pill-item"><input type="checkbox" name="livePhotosEnabled" value="1" ${cfg.livePhotosEnabled !== false ? "checked" : ""}> Bật chụp & xem Live Photos</label>
              <label class="check-pill-item"><input type="checkbox" name="openFilterSheetImmediately" value="1" ${cfg.openFilterSheetImmediately !== false ? "checked" : ""}> Mở khay 35 Filter ngay lập tức</label>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow">2. BẬT / TẮT CÁC CỔNG TÍNH NĂNG VIP (FEATURE GATES & INTERACTION)</span>
            <div class="check-pill-grid" style="margin-top:12px;">
              <label class="check-pill-item"><input type="checkbox" name="fgAppIconPicker" value="1" ${cfg.fgAppIconPicker !== false ? "checked" : ""}> Đổi biểu tượng ứng dụng (App Icon)</label>
              <label class="check-pill-item"><input type="checkbox" name="fgCameraRoll" value="1" ${cfg.fgCameraRoll !== false ? "checked" : ""}> Đăng ảnh/video từ Thư viện máy</label>
              <label class="check-pill-item"><input type="checkbox" name="fgCameraTheme" value="1" ${cfg.fgCameraTheme !== false ? "checked" : ""}> Chủ đề máy ảnh (Camera Theme)</label>
              <label class="check-pill-item"><input type="checkbox" name="fgLocketViews" value="1" ${cfg.fgLocketViews !== false ? "checked" : ""}> Xem ai đã xem Locket (Views V2)</label>
              <label class="check-pill-item"><input type="checkbox" name="fgLongCaptions" value="1" ${cfg.fgLongCaptions !== false ? "checked" : ""}> Viết Caption dài không giới hạn</label>
              <label class="check-pill-item"><input type="checkbox" name="fgUnlimitedFriends" value="1" ${cfg.fgUnlimitedFriends !== false ? "checked" : ""}> Kết bạn vô hạn (999.999 bạn)</label>
              <label class="check-pill-item"><input type="checkbox" name="fgCustomWidgetFrames" value="1" ${cfg.fgCustomWidgetFrames !== false ? "checked" : ""}> Khung sự kiện Widget (Frames)</label>
              <label class="check-pill-item"><input type="checkbox" name="fgStreakRecovery" value="1" ${cfg.fgStreakRecovery !== false ? "checked" : ""}> Khôi phục chuỗi Streak miễn phí</label>
              <label class="check-pill-item"><input type="checkbox" name="unsendMessageEnabled" value="1" ${cfg.unsendMessageEnabled !== false ? "checked" : ""}> Thu hồi tin nhắn Chat (Unsend)</label>
              <label class="check-pill-item"><input type="checkbox" name="timeTravelRewindEnabled" value="1" ${cfg.timeTravelRewindEnabled !== false ? "checked" : ""}> Du hành thời gian (Time Travel)</label>
              <label class="check-pill-item"><input type="checkbox" name="rollcallEnabled" value="1" ${cfg.rollcallEnabled !== false ? "checked" : ""}> Tính năng Điểm danh (Rollcall)</label>
              <label class="check-pill-item"><input type="checkbox" name="lunarNewYearIconEnabled" value="1" ${cfg.lunarNewYearIconEnabled !== false ? "checked" : ""}> Icon Locket Tết Nguyên Đán</label>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow">3. KHUNG WIDGET SỰ KIỆN, POPUP KHÁM PHÁ, STREAK & TỐI ƯU CDN/ETAG</span>
            <div class="grid-3" style="margin-top:12px;">
              <div>
                <label class="field-label">Mã sự kiện Widget (Widget Event UID)</label>
                <input type="text" name="widgetEventUid" value="${escapeHtml(cfg.widgetEventUid || "midautumn_2026")}" class="apple-field">
              </div>
              <div>
                <label class="field-label">Link ảnh viền Widget (URL PNG)</label>
                <input type="text" name="widgetEventUrl" value="${escapeHtml(cfg.widgetEventUrl || "https://i.postimg.cc/fbY7MGdR/hlw.png")}" class="apple-field">
              </div>
              <div>
                <label class="field-label">Số chuỗi tối thiểu để Khôi phục Streak</label>
                <input type="number" name="streakMinRecoveryCount" value="${escapeHtml(String(cfg.streakMinRecoveryCount ?? 0))}" class="apple-field">
              </div>
            </div>

            <div class="grid-3" style="margin-top:14px;">
              <div>
                <label class="field-label">Nhãn Discovery Popup (Tag)</label>
                <input type="text" name="discoveryPopupTag" value="${escapeHtml(cfg.discoveryPopupTag || "LOCKET GOLD NMS")}" class="apple-field">
              </div>
              <div>
                <label class="field-label">Tiêu đề Discovery Popup</label>
                <input type="text" name="discoveryPopupFeatureTitle" value="${escapeHtml(cfg.discoveryPopupFeatureTitle || "Ngô Minh Đức · Locket Gold Pro ✨")}" class="apple-field">
              </div>
              <div>
                <label class="field-label">Máy chủ CDN tăng tốc ảnh/video</label>
                <input type="text" name="cdnTargetDomain" value="${escapeHtml(cfg.cdnTargetDomain || "cdn.locketcamera.com")}" class="apple-field">
              </div>
            </div>

            <div class="check-pill-grid" style="margin-top:14px;">
              <label class="check-pill-item"><input type="checkbox" name="enableNmsMapping" value="1" ${cfg.enableNmsMapping !== false ? "checked" : ""}> Bật ánh xạ NMS (locketfix8.js)</label>
              <label class="check-pill-item"><input type="checkbox" name="enableHeader7StripEtag" value="1" ${cfg.enableHeader7StripEtag !== false ? "checked" : ""}> Xoá ETag (header7.js V1.0.2)</label>
              <label class="check-pill-item"><input type="checkbox" name="disableHistoryAds" value="1" ${cfg.disableHistoryAds !== false ? "checked" : ""}> Chặn sạch Quảng cáo Lịch sử</label>
              <label class="check-pill-item"><input type="checkbox" name="disableSentryTracking" value="1" ${cfg.disableSentryTracking !== false ? "checked" : ""}> Tắt theo dõi ngầm Sentry</label>
            </div>
          </div>

          <button type="submit" class="btn-action-primary">Lưu Toàn Bộ Thông Số Camera, Feature Gates, Streak & Widget</button>
        </form>
      </section>

      <!-- DANH MỤC HIỆU ỨNG CAMERA & PHOTOBOOTH -->
      <section id="cameraCatalogSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">LOCKET CAMERA EFFECTS & AI LOOKS STUDIO</span>
            <h2 class="bento-heading">Trọn bộ Khung & Photobooth, Sự kiện, Tinh nghịch, Ngoại hình & Tạo diện mạo AI</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Đồng bộ trực tiếp vào Camera Locket: Mở khóa toàn bộ 6 nhóm hiệu ứng (gồm 35 filter <code>forceGold4.3</code>) và nút vàng <strong>"+ Tạo diện mạo"</strong> với ${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))} lượt.
            </p>
          </div>
          <span class="apple-pill ${cfg.isBlockedByAdmin ? "pill-rose" : "pill-gold"}" style="padding:8px 14px;font-size:12px;">
            ${cfg.isBlockedByAdmin ? "ĐANG BỊ CHẶN — ĐÃ THU HỒI TOÀN BỘ HIỆU ỨNG" : "+ TẠO DIỆN MẠO: ĐÃ MỞ KHOÁ 100%"}
          </span>
        </div>
        <div class="grid-3">
          ${cameraCatalogTilesHtml}
        </div>
      </section>

      <!-- QUẢN LÝ HUY HIỆU BẠN BÈ -->
      <section id="friendsBadgeSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">AUTO-DISCOVERY & INDEPENDENT FRIEND BADGE CONTROL</span>
            <h2 class="bento-heading">Tự động Get UID & Bật/Tắt Huy hiệu Bạn bè (${activeFriendsBadgeCount}/${friendsList.length})</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Hệ thống tự động bắt mọi UID, Tên và Ảnh đại diện bạn bè khi bạn lướt Locket, hoặc bấm nút <strong>"Tự Động Quét & Lấy UID Bạn Bè Ngay"</strong> để gọi thẳng lên máy chủ Locket.
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

      <!-- LÕI ĐỊNH TUYẾN DOH 40 MIỀN -->
      <section id="dohEngineSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">INTEGRATED UPLOCKET MOBILECONFIG ENGINE (40 MIỀN + ROOT CA)</span>
            <h2 class="bento-heading">Lõi Định tuyến UpLocket DNS-over-HTTPS (DoH) & Chứng chỉ Root CA</h2>
            <p style="font-size:13px;color:var(--apple-text-secondary);margin-top:4px;">
              Định danh: <code style="font-family:monospace;background:#f5f5f7;padding:3px 8px;border-radius:8px;color:#1d1d1f;font-weight:600;">${escapeHtml(INTEGRATED_NET_ENGINE.profileIdentifier)}</code>
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="probeDohNow()" class="apple-pill-btn btn-blue-soft" style="padding:10px 18px;">Kiểm tra DoH & Đồng bộ 40 miền</button>
            <a href="/setdate?download_mobileconfig=1" class="apple-pill-btn btn-dark-soft" style="padding:10px 18px;">Tải cấu hình .mobileconfig</a>
          </div>
        </div>

        <div class="grid-3">
          <div class="spec-tile">
            <span class="bento-eyebrow">MÁY CHỦ DOH UPLOCKET</span>
            <div class="spec-mono-val">${escapeHtml(cfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl)}</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:8px;">
              Giao thức: <strong>${escapeHtml(INTEGRATED_NET_ENGINE.dnsProtocol)}</strong> · <span id="dohLiveBadge" class="apple-pill pill-emerald">ĐANG BẬT (${escapeHtml(String(dohStatus.latencyMs || 12))}ms · 40 miền)</span>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow">ĐỊA CHỈ IP & UUID CẤU HÌNH</span>
            <div class="spec-mono-val">${escapeHtml(cfg.dohPrimaryIp)} · ${escapeHtml(cfg.dohSecondaryIp)}</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:8px;">
              UUID DNS: <code style="font-family:monospace;">${escapeHtml(INTEGRATED_NET_ENGINE.dnsUUID)}</code>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow">CHỨNG CHỈ UPLOCKET CUSTOM ROOT CA</span>
            <div class="spec-mono-val">${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)} (2026 — 2036)</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:8px;">
              UUID CA: <code style="font-family:monospace;">${escapeHtml(INTEGRATED_NET_ENGINE.caUUID)}</code>
            </div>
          </div>
        </div>
      </section>

      <!-- THIẾT LẬP MỐC ĐĂNG KÝ GỐC & AI QUOTA -->
      <section class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">CONFIGURATION STUDIO</span>
            <h2 class="bento-heading">Thiết lập Mốc đăng ký Locket Gold, DoH & Hạn mức AI</h2>
            <p style="font-size:13px;color:var(--apple-text-secondary);margin-top:4px;">
              UID hiện tại: <code style="font-family:monospace;background:#f5f5f7;padding:3px 8px;border-radius:8px;color:#1d1d1f;font-weight:600;">${escapeHtml(displayUid)}</code>
            </p>
          </div>
          <a href="/setdate?request_activate=1" class="apple-pill-btn btn-blue-soft" style="padding:10px 18px;">Kích hoạt & Đồng bộ ngay</a>
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
                <button type="button" class="preset-pill" onclick="setD('25/11/2027')">25/11/2027 (NMS)</button>
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
              <label class="field-label">Ngày hết hạn gói (Mặc định 9999-01-09)</label>
              <input type="text" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-field">
            </div>
          </div>

          <div class="grid-2" style="margin-top:6px;">
            <button type="submit" class="btn-action-primary">Lưu cấu hình, DoH & Đồng bộ Locket Gold</button>
            <a href="/setdate?reset=1" class="btn-action-soft">Khôi phục mặc định (25/05/2026 · DoH UpLocket · 999.999 AI)</a>
          </div>
        </form>
      </section>

      <!-- DANH SÁCH TÀI KHOẢN ĐÃ LÊN GOLD -->
      <section class="apple-bento-card">
        <div class="bento-card-head" style="margin-bottom:10px;">
          <div>
            <span class="bento-eyebrow">CƠ SỞ DỮ LIỆU ĐỒNG BỘ</span>
            <h3 class="bento-heading">Danh sách tài khoản Locket Gold (${goldUsersList.length} đang hoạt động / ${usersList.length} tổng)</h3>
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
  </main>`;
}

// === KẾT THÚC PHẦN 5 / 6 — GÕ "6" ĐỂ NHẬN TIẾP PHẦN 6 / 6 (PHẦN CUỐI) ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V10.0 — PART 6 OF 6)
// ============================================================================

function buildAppleFlowClientScript() {
    return `
  <script>
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
      if (m) {
        m.classList.remove('hidden');
        m.style.display = 'flex';
      }
    }
    function closeGoldModal() {
      var m = document.getElementById('locketGoldModal');
      if (m) {
        m.classList.add('hidden');
        m.style.display = 'none';
      }
    }

    // CAPTION STUDIO LIVE PREVIEW & EDITOR LOADER
    function updateCapStudioPreview() {
      var txtEl = document.getElementById('capEditorText');
      var emoEl = document.getElementById('capEditorEmoji');
      var c1El = document.getElementById('capEditorC1');
      var c2El = document.getElementById('capEditorC2');
      var c3El = document.getElementById('capEditorC3');
      var tcEl = document.getElementById('capEditorTextColor');
      var chip = document.getElementById('liveCapStudioPreview');
      var emoSpan = document.getElementById('liveCapEmojiSpan');
      var txtSpan = document.getElementById('liveCapTextSpan');
      if (!chip) return;

      var txt = (txtEl && txtEl.value) ? txtEl.value : 'Caption VIP';
      var emo = (emoEl && emoEl.value) ? emoEl.value.trim() : '';
      var c1 = (c1El && c1El.value) ? c1El.value.trim() : '#FFD700';
      var c2 = (c2El && c2El.value) ? c2El.value.trim() : '#F59E0B';
      var c3 = (c3El && c3El.value) ? c3El.value.trim() : '';
      var tc = (tcEl && tcEl.value) ? tcEl.value.trim() : '#000000';

      chip.style.background = c3
        ? ('linear-gradient(135deg, ' + c1 + ', ' + c2 + ', ' + c3 + ')')
        : ('linear-gradient(135deg, ' + c1 + ', ' + c2 + ')');
      chip.style.color = tc;
      if (emoSpan) {
        emoSpan.textContent = emo;
        emoSpan.style.display = emo ? 'inline' : 'none';
      }
      if (txtSpan) {
        txtSpan.textContent = txt;
      }
    }

    function loadCaptionIntoEditor(id, text, emoji, section, c1, c2, c3, textColor) {
      var idEl = document.getElementById('capEditorId');
      var txtEl = document.getElementById('capEditorText');
      var emoEl = document.getElementById('capEditorEmoji');
      var secEl = document.getElementById('capEditorSection');
      var c1El = document.getElementById('capEditorC1');
      var c2El = document.getElementById('capEditorC2');
      var c3El = document.getElementById('capEditorC3');
      var tcEl = document.getElementById('capEditorTextColor');

      if (idEl) idEl.value = id || '';
      if (txtEl) txtEl.value = text || '';
      if (emoEl) emoEl.value = emoji || '';
      if (secEl && section) secEl.value = section;
      if (c1El) c1El.value = c1 || '#FFD700';
      if (c2El) c2El.value = c2 || '#F59E0B';
      if (c3El) c3El.value = c3 || '';
      if (tcEl) tcEl.value = textColor || '#FFFFFFE6';

      updateCapStudioPreview();
      var studioSec = document.getElementById('captionStudioSection');
      if (studioSec) {
        studioSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function filterCaptionStudioCards() {
      var q = (document.getElementById('searchCaptionStudioInput').value || '').toLowerCase().trim();
      var cards = document.querySelectorAll('#captionStudioCardsGrid .cap-card-item');
      for (var i = 0; i < cards.length; i++) {
        var hay = cards[i].getAttribute('data-cap-search') || '';
        cards[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }

    function triggerPushNow() {
      var toast = document.getElementById('statusToast');
      fetch('/setdate?api=trigger_push&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (toast) {
            toast.style.display = 'block';
            toast.textContent = (d && d.msg) ? d.msg : 'Đã bắn thử thông báo thành công!';
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
            badge.textContent = (d.ok ? 'ĐANG BẬT (' : 'DỰ PHÒNG (') + (d.latencyMs || 12) + 'ms · 40 miền)';
          }
          if (toast && d) {
            toast.style.display = 'block';
            toast.textContent = d.msg || 'Đã đồng bộ máy chủ DoH UpLocket 40 miền thành công!';
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

    // APPLE 60FPS SCROLLYTELLING ENGINE
    (function() {
      var clamp = function(v, min, max) { return Math.max(min, Math.min(max, v)); };
      var lerp = function(a, b, t) { return a + (b - a) * clamp(t, 0, 1); };
      var invLerp = function(a, b, v) { return clamp((v - a) / (b - a), 0, 1); };
      var appleEase = function(t) {
        var c = clamp(t, 0, 1);
        return 1 - Math.pow(1 - c, 3.2);
      };
      var appleEaseOut = function(t) {
        var c = clamp(t, 0, 1);
        return 1 - Math.pow(1 - c, 2.4);
      };

      var bgLayerLight = document.getElementById('bgLayerLight');
      var bgLayerDark = document.getElementById('bgLayerDark');
      var globalProgressBar = document.getElementById('globalProgressBar');
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
      var elScrubLeftCard = document.getElementById('elScrubLeftCard');
      var elScrubRightCard = document.getElementById('elScrubRightCard');
      var elScrubCenterWrap = document.getElementById('elScrubCenterWrap');
      var elSequenceCanvas = document.getElementById('elSequenceCanvas');
      var elSequenceSourceImg = document.getElementById('elSequenceSourceImg');

      var secTeardown = document.getElementById('secTeardown');
      var elTdFront = document.getElementById('elTdFront');
      var elTdMid = document.getElementById('elTdMid');
      var elTdBack = document.getElementById('elTdBack');

      var secClipMorph = document.getElementById('secClipMorph');
      var elClipMorphBox = document.getElementById('elClipMorphBox');

      var TOTAL_FRAMES = 147;
      var currentRenderedFrame = -1;
      var seqCtx = elSequenceCanvas ? elSequenceCanvas.getContext('2d') : null;
      var ticking = false;

      function getSectionProgress(el) {
        if (!el) return 0;
        var rect = el.getBoundingClientRect();
        var winH = window.innerHeight || document.documentElement.clientHeight || 800;
        var dist = rect.height - winH;
        if (dist <= 0) {
          return clamp((winH - rect.top) / (winH + rect.height), 0, 1);
        }
        return clamp(-rect.top / dist, 0, 1);
      }

      function renderSequenceFrame(frameIdx) {
        if (!seqCtx || !elSequenceCanvas) return;
        if (frameIdx === currentRenderedFrame) return;
        currentRenderedFrame = frameIdx;

        var w = elSequenceCanvas.width;
        var h = elSequenceCanvas.height;
        var cx = w * 0.5;
        var cy = h * 0.5;

        seqCtx.clearRect(0, 0, w, h);

        var t = frameIdx / (TOTAL_FRAMES - 1);
        var angleRad = lerp(-0.55, 0.55, t);
        var lidOpenOffset = Math.sin(t * Math.PI) * 65;
        var ringExpand = 1 + Math.sin(t * Math.PI) * 0.16;
        var glowRadius = lerp(180, 320, Math.sin(t * Math.PI));

        seqCtx.save();
        seqCtx.translate(cx, cy);

        var radGrad = seqCtx.createRadialGradient(0, 0, 20, 0, 0, glowRadius);
        radGrad.addColorStop(0, 'rgba(245, 158, 11, 0.38)');
        radGrad.addColorStop(0.5, 'rgba(0, 113, 227, 0.16)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        seqCtx.fillStyle = radGrad;
        seqCtx.beginPath();
        seqCtx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        seqCtx.fill();

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

        var cosA = Math.cos(angleRad * 0.65);
        var sinA = Math.sin(angleRad * 0.65);
        seqCtx.save();
        seqCtx.transform(cosA, sinA * 0.18, -sinA * 0.18, 1, 0, -lidOpenOffset * 0.25);
        if (elSequenceSourceImg && elSequenceSourceImg.complete && elSequenceSourceImg.naturalWidth > 0) {
          seqCtx.drawImage(elSequenceSourceImg, -330, -330, 660, 660);
        }
        seqCtx.restore();

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

      function renderScrollytellingFrame() {
        var winH = window.innerHeight || document.documentElement.clientHeight || 800;
        var vw = window.innerWidth || document.documentElement.clientWidth || 1024;
        var docH = document.documentElement.scrollHeight || 4000;
        var maxScroll = Math.max(1, docH - winH);
        var scrollY = window.scrollY || window.pageYOffset || 0;
        var globalProg = clamp(scrollY / maxScroll, 0, 1);

        if (globalProgressBar) {
          globalProgressBar.style.transform = 'translate3d(0,0,0) scaleX(' + globalProg.toFixed(4) + ')';
        }

        var pHero = getSectionProgress(secHeroZoom);
        var pReveal = getSectionProgress(secTextReveal);
        var pScrub = getSectionProgress(secStickyScrub);
        var pTd = getSectionProgress(secTeardown);
        var pMorph = getSectionProgress(secClipMorph);

        var darkWeight = 0;
        if (pHero > 0.62 && pTd < 0.18) {
          var fadeInDark = appleEase(invLerp(0.62, 0.96, pHero));
          var fadeOutDark = 1 - appleEase(invLerp(0.80, 0.99, pScrub));
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

        if (elHeroMegaH1) {
          var hScale = 1;
          var hBlur = 0;
          var hOp = 1;
          var hY = 0;

          if (pHero <= 0.6) {
            var t1 = invLerp(0.0, 0.6, pHero);
            hScale = lerp(2.4, 0.82, appleEase(t1));
            hBlur = lerp(16, 0, appleEaseOut(t1));
            hOp = lerp(0.15, 1, appleEaseOut(invLerp(0.0, 0.3, pHero)));
          } else if (pHero > 0.6 && pHero < 0.75) {
            hScale = 0.82;
            hBlur = 0;
            hOp = 1;
          } else {
            var t2 = invLerp(0.75, 1.0, pHero);
            hScale = lerp(0.82, 0.64, appleEase(t2));
            hOp = lerp(1, 0, appleEase(t2));
            hY = lerp(0, -70, appleEase(t2));
          }

          elHeroMegaH1.style.transform = 'translate3d(0,' + hY.toFixed(2) + 'px,0) scale(' + hScale.toFixed(4) + ')';
          elHeroMegaH1.style.opacity = hOp.toFixed(4);
          elHeroMegaH1.style.filter = hBlur > 0.2 ? ('blur(' + hBlur.toFixed(2) + 'px)') : 'none';
        }

        if (elHeroSubLead) {
          var subIn = appleEaseOut(invLerp(0.08, 0.48, pHero));
          var subOut = 1 - appleEase(invLerp(0.75, 0.98, pHero));
          var subY = lerp(36, 0, subIn);
          elHeroSubLead.style.transform = 'translate3d(0,' + subY.toFixed(2) + 'px,0)';
          elHeroSubLead.style.opacity = Math.max(0.1, subIn * subOut).toFixed(4);
        }

        if (elHeroKicker) {
          elHeroKicker.style.opacity = (1 - appleEase(invLerp(0.68, 0.95, pHero))).toFixed(4);
        }
        if (elScrollCue) {
          elScrollCue.style.opacity = (1 - invLerp(0.0, 0.28, pHero)).toFixed(4);
        }

        function animateWordGroup(nodeList, startP, endP) {
          if (!nodeList || !nodeList.length) return;
          var totalWords = nodeList.length;
          var spanRange = endP - startP;
          var wordWindow = Math.min(0.24, spanRange * 0.48);
          var stepPerWord = totalWords > 1 ? (spanRange - wordWindow) / (totalWords - 1) : 0;

          for (var w = 0; w < totalWords; w++) {
            var wStart = startP + w * stepPerWord;
            var wEnd = wStart + wordWindow;
            var wProg = appleEaseOut(invLerp(wStart, wEnd, pReveal));

            var wOp = lerp(0.12, 1.0, wProg);
            var wY = lerp(32, 0, wProg);
            var wScale = lerp(0.95, 1.0, wProg);
            var wBlur = lerp(8, 0, wProg);

            var wordEl = nodeList[w];
            wordEl.style.opacity = wOp.toFixed(3);
            wordEl.style.transform = 'translate3d(0,' + wY.toFixed(1) + 'px,0) scale(' + wScale.toFixed(3) + ')';
            wordEl.style.filter = wBlur > 0.25 ? ('blur(' + wBlur.toFixed(1) + 'px)') : 'none';
          }
        }

        animateWordGroup(wordUnits1, 0.02, 0.54);
        animateWordGroup(wordUnits2, 0.36, 0.88);

        var activeScrubT = 0;
        if (pScrub < 0.08) {
          activeScrubT = 0;
        } else if (pScrub <= 0.85) {
          activeScrubT = invLerp(0.08, 0.85, pScrub);
        } else {
          activeScrubT = 1;
        }

        var seqFrameIdx = Math.round(lerp(0, TOTAL_FRAMES - 1, activeScrubT));
        renderSequenceFrame(seqFrameIdx);

        if (elScrubCenterWrap) {
          var cScale = lerp(1.22, 0.92, appleEase(activeScrubT));
          var cRot = lerp(-8, 8, appleEase(activeScrubT));
          var cY = lerp(50, -30, appleEase(activeScrubT));
          elScrubCenterWrap.style.transform = 'translate3d(0,' + cY.toFixed(2) + 'px,0) scale(' + cScale.toFixed(4) + ') rotate(' + cRot.toFixed(2) + 'deg)';
        }

        if (elScrubLeftCard) {
          var lIn = appleEaseOut(invLerp(0.12, 0.36, pScrub));
          var lY = lerp(30, 0, lIn);
          var isMob = vw <= 860;
          elScrubLeftCard.style.opacity = lIn.toFixed(4);
          elScrubLeftCard.style.transform = isMob
            ? ('translate3d(0,' + lY.toFixed(1) + 'px,0)')
            : ('translate3d(0, calc(-50% + ' + lY.toFixed(1) + 'px), 0)');
        }

        if (elScrubRightCard) {
          var rIn = appleEaseOut(invLerp(0.46, 0.72, pScrub));
          var rY = lerp(30, 0, rIn);
          var isMobR = vw <= 860;
          elScrubRightCard.style.opacity = rIn.toFixed(4);
          elScrubRightCard.style.transform = isMobR
            ? ('translate3d(0,' + rY.toFixed(1) + 'px,0)')
            : ('translate3d(0, calc(-50% + ' + rY.toFixed(1) + 'px), 0)');
        }

        var eTd = appleEase(invLerp(0.05, 0.88, pTd));
        if (elTdFront) {
          var yFront = lerp(0, -120, eTd);
          var sFront = lerp(1.0, 0.95, eTd);
          elTdFront.style.transform = 'translate3d(-50%, calc(-50% + ' + yFront.toFixed(2) + 'px), 0) scale(' + sFront.toFixed(4) + ')';
        }
        if (elTdMid) {
          var yMid = lerp(0, -80, eTd);
          var sMid = lerp(1.0, 0.96, eTd);
          elTdMid.style.transform = 'translate3d(-50%, calc(-50% + ' + yMid.toFixed(2) + 'px), 0) scale(' + sMid.toFixed(4) + ')';
        }
        if (elTdBack) {
          var yBack = lerp(0, -40, eTd);
          var sBack = lerp(1.0, 0.97, eTd);
          elTdBack.style.transform = 'translate3d(-50%, calc(-50% + ' + yBack.toFixed(2) + 'px), 0) scale(' + sBack.toFixed(4) + ')';
        }

        if (elClipMorphBox) {
          var mT = appleEase(invLerp(0.08, 0.85, pMorph));
          var insetV = lerp(0, 5.5, mT);
          var insetH = lerp(0, vw <= 860 ? 3.5 : 5.5, mT);
          var pillRadius = lerp(0, 44, mT);
          var clipStr = 'inset(' + insetV.toFixed(2) + '% ' + insetH.toFixed(2) + '% round ' + pillRadius.toFixed(1) + 'px)';
          elClipMorphBox.style.clipPath = clipStr;
          elClipMorphBox.style.webkitClipPath = clipStr;
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
      if (elSequenceSourceImg) {
        elSequenceSourceImg.addEventListener('load', function() {
          currentRenderedFrame = -1;
          renderSequenceFrame(0);
        });
      }
      renderSequenceFrame(0);
      renderScrollytellingFrame();
    })();
  </script>`;
}

function renderBentoWebPanel(cfg, statusMsg, openAdminDrawer = false, forceShowGoldModal = false) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const friendsMap = getFriendsBadgeMap();
    const friendsList = Object.values(friendsMap).filter(f => f && f.uid && f.uid !== cachedUid);
    const activeFriendsBadgeCount = friendsList.filter(f => f.badge_enabled !== false).length;

    const shouldShowPopup = Boolean(forceShowGoldModal === true);

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>${escapeHtml(THAY_PRODUCT_NAME)} — Quản Trị Locket Gold Pro V10</title>
<style>${buildAppleScrollyCss(cfg, statusMsg)}</style>
</head>
<body>
${buildAppleScrollySectionsHtml(cfg, activeFriendsBadgeCount, friendsList.length, isAdminLogged, shouldShowPopup)}
${buildAppleBentoConsoleHtml(cfg, statusMsg, openAdminDrawer)}
${buildAppleFlowClientScript()}
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
    const nowMs = Date.now();

    probeIntegratedDohEndpoint(cfg, () => {
        syncRealtimeWithServer(uid, cfg, "sync", (rtState) => {
            const isRevoked = !!(rtState && rtState.blocked) || !!cfg.isBlockedByAdmin;
            const quotaStr = isRevoked ? "0" : String(sanitizeQuotaNumber(cfg.aiFilterQuota, 999999));

            triggerInAppLocketBlockAlert(uid, rtState.reason || cfg.blockReason, isRevoked, false);

            if (!uid && !bearer) {
                Env.done();
                return;
            }

            let pending = 0;
            const finishOne = () => {
                pending--;
                if (pending <= 0) {
                    Env.done();
                }
            };

            if (uid && rcKey) {
                pending++;
                const attrUrl = `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(uid)}/attributes`;
                const attrBody = JSON.stringify({
                    attributes: {
                        locket_gold_badge: { value: isRevoked ? "false" : "true", updated_at_ms: nowMs },
                        badge: { value: isRevoked ? "none" : "locket_gold", updated_at_ms: nowMs },
                        show_gold_badge: { value: isRevoked ? "false" : "true", updated_at_ms: nowMs },
                        is_gold: { value: isRevoked ? "false" : "true", updated_at_ms: nowMs },
                        photobooth_unlocked: { value: isRevoked ? "false" : "true", updated_at_ms: nowMs },
                        holiday_effects_unlocked: { value: isRevoked ? "false" : "true", updated_at_ms: nowMs },
                        camera_effects_unlocked: { value: isRevoked ? "false" : "true", updated_at_ms: nowMs },
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
                    body: JSON.stringify({
                        data: {
                            badge: isRevoked ? null : "locket_gold",
                            locket_gold_badge: !isRevoked,
                            show_gold_badge: !isRevoked,
                            is_gold: !isRevoked
                        }
                    })
                }, () => finishOne());
            }

            if (pending === 0) Env.done();
        });
    });
}

// ============================================================================
// BỘ ĐIỀU HƯỚNG THỰC THI CHÍNH (CRON / HTTP-REQUEST / HTTP-RESPONSE 0MS)
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

    if (currentCfg.blockAdsAndTelemetry !== false && isBlockedAdOrTelemetryDomain(url)) {
        Env.done({
            response: {
                status: 204,
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "no-store, no-cache",
                    "X-UpLocket-AdBlock": "blocked_by_40_domain_doh"
                },
                body: ""
            }
        });
    } else {
        if (typeof $request.body === "string" && $request.body.length > 10) {
            let parsedReq = null;
            try { parsedReq = JSON.parse($request.body); } catch (e) {}
            autoHarvestFriendsFromRawPayload($request.body, parsedReq, currentCfg);
        }

        const isRootRevenueCatWeb = /^https?:\/\/(api|rc-backup)\.revenuecat\.com\/?(\?.*)?$/i.test(url) && !url.includes("/v1/") && !url.includes("/subscribers");
        const isWebPanelUrl = url.includes("/setdate") || url.includes("locket.gold") || isRootRevenueCatWeb;

        if (isWebPanelUrl) {
            const q = parseQuery(url);

            if (q.download_mobileconfig === "1" || q.api === "mobileconfig") {
                const xmlBody = generateIntegratedMobileconfigXml(currentCfg);
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/x-apple-aspen-config; charset=utf-8",
                            "Content-Disposition": "attachment; filename=\"UpLocket_ngominhduc.mobileconfig\"",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: xmlBody
                    }
                });
            } else if (q.api === "captions_studio") {
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: JSON.stringify({
                            ok: true,
                            sections: buildMergedOverlaySections(),
                            custom_db: getCustomCaptionsDb()
                        })
                    }
                });
            } else if (q.api === "camera_catalog") {
                Env.done({
                    response: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            "Cache-Control": "no-store, no-cache, must-revalidate"
                        },
                        body: JSON.stringify({
                            ok: true,
                            catalog: buildCameraEffectsPayloadStruct(currentCfg),
                            in_app_bottom_sheet: buildInAppLocketModalStruct(currentCfg)
                        })
                    }
                });
            } else if (q.api === "trigger_push") {
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
                            msg: currentCfg.isBlockedByAdmin
                                ? "Đã bắn thử thông báo iOS: \"LOCKET GOLD — Đã thu hồi LOCKET GOLD!\"!"
                                : `Đã bắn thử thông báo iOS: "${currentCfg.popupBadge} — ${currentCfg.popupHeader}"!`
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
                                domainsCount: probeResult.domainsCount,
                                domains: probeResult.domains,
                                msg: `Kết nối DoH UpLocket (${probeResult.serverUrl}) phản hồi trong ${probeResult.latencyMs}ms · Đã đồng bộ ${probeResult.domainsCount} miền Supplemental Match!`
                            })
                        }
                    });
                });
            } else if (q.api === "realtime_status") {
                syncRealtimeWithServer(uid, currentCfg, "sync", (st) => {
                    const isRevoked = !!(st && st.blocked) || !!currentCfg.isBlockedByAdmin;
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
                                blocked: isRevoked,
                                status: st.status,
                                gold_active: !isRevoked,
                                gold_kept: !isRevoked,
                                ai_quota: isRevoked ? 0 : sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999),
                                doh_server: currentCfg.dohServerUrl,
                                ca_uuid: INTEGRATED_NET_ENGINE.caUUID,
                                profile_id: INTEGRATED_NET_ENGINE.profileIdentifier,
                                popup_header: isRevoked ? currentCfg.revokedPopupHeader : currentCfg.popupHeader,
                                popup_title: isRevoked ? currentCfg.revokedPopupTitle : currentCfg.popupTitle,
                                popup_subtitle: isRevoked ? currentCfg.revokedPopupSubtitle : currentCfg.popupSubtitle,
                                reason: st.reason || ""
                            })
                        }
                    });
                });
            } else {
                let openDrawer = q.admin_drawer === "1";
                let forcePopup = q.preview_modal === "1";
                let statusMsg = "";
                const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

                // 1. XỬ LÝ THÊM / SỬA / XOÁ CAPTION TRONG CAPTION STUDIO
                if (q.caption_action) {
                    if (q.caption_action === "upsert") {
                        const savedCap = createOrUpdateCaptionInStudio({
                            overlay_id: q.overlay_id || "",
                            text: q.cap_text || "Caption VIP",
                            emoji: q.cap_emoji || "",
                            section: q.cap_section || "✨ Caption Tự Chế (Custom Studio)",
                            color1: q.cap_c1 || "#FFD700",
                            color2: q.cap_c2 || "#F59E0B",
                            color3: q.cap_c3 || "",
                            textColor: q.cap_text_color || "#000000E6"
                        });
                        statusMsg = `Đã lưu Caption "${savedCap.caption.text}" (${savedCap.overlay_id}) vào nhóm ${savedCap.section}!`;
                    } else if (q.caption_action === "delete" && q.overlay_id) {
                        deleteCaptionFromStudio(q.overlay_id);
                        statusMsg = `Đã xoá Caption (${q.overlay_id}) khỏi danh sách hiển thị trong Locket!`;
                    } else if (q.caption_action === "restore" && q.overlay_id) {
                        restoreSingleDeletedCaption(q.overlay_id);
                        statusMsg = `Đã khôi phục lại Caption (${q.overlay_id})!`;
                    } else if (q.caption_action === "reset_all") {
                        resetAllStudioCaptionsToDefault();
                        statusMsg = "Đã khôi phục lại nguyên bản toàn bộ 140+ Caption gốc!";
                    }
                }

                // 2. XỬ LÝ LƯU TOÀN BỘ THÔNG SỐ CAMERA 30S/60S/90S, FEATURE GATES, STREAK, WIDGET & CDN
                if (q.save_engine_features === "1") {
                    const baseCfg = loadConfig();
                    const updatedEngineCfg = {
                        ...baseCfg,
                        videoMaxDuration: sanitizeFloatNumber(q.videoMaxDuration, 30.0, 5.0, 300.0),
                        goldMaxDuration: sanitizeFloatNumber(q.videoMaxDuration, 30.0, 5.0, 300.0),
                        cameraRollMaxDuration: sanitizeFloatNumber(q.videoMaxDuration, 30.0, 5.0, 300.0),
                        videoQualityMbps: sanitizeFloatNumber(q.videoQualityMbps, 0.9, 0.1, 25.0),
                        uploadMainImageSize: sanitizeQuotaNumber(q.uploadMainImageSize, 1440),
                        uploadThumbnailSize: sanitizeQuotaNumber(q.uploadThumbnailSize, 1020),
                        ultraWideEnabled: q.ultraWideEnabled === "1",
                        telephotoEnabled: q.telephotoEnabled === "1",
                        volumeButtonShutter: q.volumeButtonShutter === "1",
                        srgbColorSpace: q.srgbColorSpace === "1",
                        lanczosResampling: q.srgbColorSpace === "1",
                        livePhotosEnabled: q.livePhotosEnabled === "1",
                        openFilterSheetImmediately: q.openFilterSheetImmediately === "1",
                        fgAppIconPicker: q.fgAppIconPicker === "1",
                        fgCameraRoll: q.fgCameraRoll === "1",
                        fgCameraTheme: q.fgCameraTheme === "1",
                        fgLocketViews: q.fgLocketViews === "1",
                        fgLongCaptions: q.fgLongCaptions === "1",
                        fgUnlimitedFriends: q.fgUnlimitedFriends === "1",
                        fgCustomWidgetFrames: q.fgCustomWidgetFrames === "1",
                        fgStreakRecovery: q.fgStreakRecovery === "1",
                        unsendMessageEnabled: q.unsendMessageEnabled === "1",
                        timeTravelRewindEnabled: q.timeTravelRewindEnabled === "1",
                        rollcallEnabled: q.rollcallEnabled === "1",
                        lunarNewYearIconEnabled: q.lunarNewYearIconEnabled === "1",
                        widgetEventUid: (q.widgetEventUid || "midautumn_2026").trim(),
                        widgetEventUrl: (q.widgetEventUrl || "https://i.postimg.cc/fbY7MGdR/hlw.png").trim(),
                        streakMinRecoveryCount: sanitizeQuotaNumber(q.streakMinRecoveryCount, 0),
                        discoveryPopupTag: (q.discoveryPopupTag || "LOCKET GOLD NMS").trim(),
                        discoveryPopupFeatureTitle: (q.discoveryPopupFeatureTitle || "Ngô Minh Đức · Locket Gold Pro ✨").trim(),
                        cdnTargetDomain: (q.cdnTargetDomain || "cdn.locketcamera.com").trim(),
                        enableNmsMapping: q.enableNmsMapping === "1",
                        enableHeader7StripEtag: q.enableHeader7StripEtag === "1",
                        disableHistoryAds: q.disableHistoryAds === "1",
                        disableSentryTracking: q.disableSentryTracking === "1"
                    };
                    saveConfig(updatedEngineCfg);
                    statusMsg = `Đã lưu thông số Camera (Video ${updatedEngineCfg.videoMaxDuration}s · ${updatedEngineCfg.videoQualityMbps}Mbps), Feature Gates, Streak & Widget Event!`;
                }

                // 3. XỬ LÝ BẠN BÈ
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
                    statusMsg = currentCfg.isBlockedByAdmin
                        ? "Đã bắn thử thông báo thu hồi Gold iOS!"
                        : `Đã bắn thử thông báo: "${currentCfg.popupBadge} — ${currentCfg.popupHeader}"!`;
                }

                if (q.doh_test === "1") {
                    probeIntegratedDohEndpoint(currentCfg, () => {});
                    statusMsg = `Đã kiểm tra và đồng bộ tuyến DoH UpLocket (${currentCfg.dohServerUrl}) cùng 40 miền mục tiêu!`;
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
                    statusMsg = `Đã kích hoạt & đồng bộ Locket Gold cho (${targetUid})!`;
                }

                // 4. XỬ LÝ THAO TÁC QUẢN TRỊ ADMIN
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
                            ...loadConfig(),
                            popupBadge: (q.popupBadge || "").trim() || DEFAULT_CONFIG.popupBadge,
                            popupHeader: (q.popupHeader || "").trim() || DEFAULT_CONFIG.popupHeader,
                            popupTitle: (q.popupTitle || "").trim() || DEFAULT_CONFIG.popupTitle,
                            popupSubtitle: (q.popupSubtitle || "").trim() || DEFAULT_CONFIG.popupSubtitle,
                            popupImage: newImg,
                            popupBtnText: (q.popupBtnText || "").trim() || "Hoàn tất",
                            pushCooldownSeconds: newCooldown,
                            popupAutoShow: false,
                            pushNotifyOnActivate: q.pushNotifyOnActivate === "1"
                        };
                        updatedPopupCfg.pushTitle = `${updatedPopupCfg.popupBadge} — ${updatedPopupCfg.popupHeader}`;
                        updatedPopupCfg.pushSubtitle = updatedPopupCfg.popupTitle;
                        updatedPopupCfg.pushBody = updatedPopupCfg.popupSubtitle;
                        saveConfig(updatedPopupCfg);
                        statusMsg = "Đã lưu cấu hình Bottom-Sheet & Thông báo chào mừng trong Locket!";
                    } else if (q.admin_action === "push_user_gold" && tUid) {
                        fireNativeAppNotification(currentCfg, true);
                        statusMsg = `Đã bắn thông báo Locket Gold cho UID: ${tUid}!`;
                    } else if (q.admin_action === "unblock_all") {
                        for (const k of Object.keys(db.users)) {
                            db.users[k].status = "approved";
                            db.users[k].gold_active = true;
                            db.users[k].blocked = false;
                            db.users[k].ai_quota = DEFAULT_CONFIG.aiFilterQuota;
                            db.users[k].note = "Đã mở khoá GOLD thành công (Full Photobooth, 140+ Captions & AI Looks)";
                            db.users[k].reason = "";
                            db.users[k].updated_at = nowStr;
                        }
                        saveLocalStore(db);
                        triggerInAppLocketBlockAlert("", "", false, true);
                        statusMsg = "Đã gỡ chặn & cấp lại Locket Gold cho toàn bộ người dùng theo thời gian thực!";
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
                                note: "Đã mở khoá GOLD thành công (Full Photobooth, 140+ Captions & AI Looks)",
                                reason: "",
                                updated_at: nowStr
                            };
                            saveLocalStore(db);
                            setSingleFriendBadgeState(tUid, true, {
                                username: db.users[tUid].username,
                                full_name: db.users[tUid].full_name
                            });
                            if (tUid === uid || !uid || uid.includes("RCAnonymousID")) {
                                const updatedSelfCfg = {
                                    ...loadConfig(),
                                    isBlockedByAdmin: false,
                                    alwaysForceBadge: true,
                                    unlockAllCameraEffects: true,
                                    aiFilterEnabled: true,
                                    aiFilterQuota: tAiQuota,
                                    aiFilterDailyLimit: tAiQuota
                                };
                                saveConfig(updatedSelfCfg);
                            }
                            triggerInAppLocketBlockAlert(tUid, "", false, true);
                            fireNativeAppNotification(loadConfig(), true);
                            statusMsg = `Đã mở khoá Gold & cấp ${tAiQuota.toLocaleString("vi-VN")} lượt Filter AI cho UID: ${tUid}!`;
                        } else if (q.admin_action === "block") {
                            const blkMsg = "Tài khoản đã bị Admin chặn — Đã thu hồi Locket Gold, xóa huy hiệu và khoá toàn bộ Photobooth/AI Looks.";
                            db.users[tUid] = {
                                ...(db.users[tUid] || {}),
                                uid: tUid,
                                status: "blocked",
                                gold_active: false,
                                blocked: true,
                                ai_quota: 0,
                                note: "Đã bị Admin chặn & thu hồi Locket Gold",
                                reason: blkMsg,
                                updated_at: nowStr
                            };
                            saveLocalStore(db);
                            setSingleFriendBadgeState(tUid, false, {
                                username: db.users[tUid].username,
                                full_name: db.users[tUid].full_name
                            });
                            if (tUid === uid || !uid || uid.includes("RCAnonymousID")) {
                                const revokedSelfCfg = {
                                    ...loadConfig(),
                                    isBlockedByAdmin: true,
                                    alwaysForceBadge: false,
                                    unlockAllCameraEffects: false,
                                    aiFilterEnabled: false,
                                    aiFilterQuota: 0,
                                    aiFilterDailyLimit: 0
                                };
                                saveConfig(revokedSelfCfg);
                            }
                            triggerInAppLocketBlockAlert(tUid, blkMsg, true, true);
                            statusMsg = `Đã chặn & THU HỒI SẠCH LOCKET GOLD của UID: ${tUid}!`;
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
                            statusMsg = "Đã khôi phục mặc định (25/05/2026, DoH UpLocket 40 miền & 999.999 lượt AI)!";
                        } else if (q.save === "1" || q.d || q.lockDate || q.aiFilterQuota !== undefined || q.dohServerUrl !== undefined) {
                            const rawLock = q.lockDate || q.d || current.lockDate;
                            const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
                            const rawExp = q.expireDate || current.expireDate;
                            const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate, "T10:10:14Z");
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
                                unlockAllCameraEffects: !current.isBlockedByAdmin,
                                aiFilterEnabled: !current.isBlockedByAdmin,
                                aiFilterQuota: current.isBlockedByAdmin ? 0 : newAiQuota,
                                aiFilterDailyLimit: current.isBlockedByAdmin ? 0 : newAiQuota,
                                aiFilterUsed: newAiUsed,
                                aiFilterUnlimited: !current.isBlockedByAdmin,
                                preferWebOverArg: true
                            };
                            saveConfig(updated);
                            if (uid && !uid.includes("RCAnonymousID")) {
                                upsertUserRecord(uid, {
                                    username: q.username ? q.username.trim().replace(/^@/, "") : undefined,
                                    lockDate: updated.lockDate,
                                    productId: updated.productId,
                                    aiQuota: updated.aiFilterQuota,
                                    touch: true
                                });
                            }
                            current = loadConfig();
                            statusMsg = `Đã lưu mốc đăng ký ${current.lockIso}, tuyến DoH UpLocket 40 miền & mở khoá ${current.aiFilterQuota.toLocaleString("vi-VN")} lượt AI!`;
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
            // LUỒNG LƯU LƯỢNG THỰC CỦA ỨNG DỤNG LOCKET (PHẢN HỒI 0MS GIỮ CỨNG HUY HIỆU)
            if (isActualLocketAppTraffic(url, headers)) {
                if (currentCfg.isBlockedByAdmin) {
                    triggerInAppLocketBlockAlert(uid, currentCfg.blockReason, true, false);
                } else {
                    fireNativeAppNotification(currentCfg, false);
                }
            }

            applyIntegratedNetworkHeaders(url, headers, currentCfg);

            let modifiedBody = $request.body;
            if (
                typeof modifiedBody === "string" &&
                modifiedBody.trim().startsWith("{") &&
                (
                    url.includes("revenuecat.com") ||
                    url.includes("changeProfileInfo") ||
                    url.includes("updateUser") ||
                    url.includes("us-central1-locket-4252a.cloudfunctions.net")
                )
            ) {
                try {
                    const reqJson = JSON.parse(modifiedBody);
                    let touched = false;
                    const nowMs = Date.now();
                    const isRevoked = !!currentCfg.isBlockedByAdmin;
                    const quotaStr = isRevoked ? "0" : String(sanitizeQuotaNumber(currentCfg.aiFilterQuota, 999999));

                    if (reqJson.attributes && typeof reqJson.attributes === "object") {
                        reqJson.attributes.locket_gold_badge = { value: isRevoked ? "false" : "true", updated_at_ms: nowMs };
                        reqJson.attributes.badge = { value: isRevoked ? "none" : "locket_gold", updated_at_ms: nowMs };
                        reqJson.attributes.show_gold_badge = { value: isRevoked ? "false" : "true", updated_at_ms: nowMs };
                        reqJson.attributes.is_gold = { value: isRevoked ? "false" : "true", updated_at_ms: nowMs };
                        reqJson.attributes.photobooth_unlocked = { value: isRevoked ? "false" : "true", updated_at_ms: nowMs };
                        reqJson.attributes.holiday_effects_unlocked = { value: isRevoked ? "false" : "true", updated_at_ms: nowMs };
                        reqJson.attributes.camera_effects_unlocked = { value: isRevoked ? "false" : "true", updated_at_ms: nowMs };
                        reqJson.attributes.ai_filter_quota = { value: quotaStr, updated_at_ms: nowMs };
                        reqJson.attributes.ai_filter_remaining = { value: quotaStr, updated_at_ms: nowMs };
                        reqJson.attributes.doh_dns_endpoint = { value: currentCfg.dohServerUrl || INTEGRATED_NET_ENGINE.dohServerUrl, updated_at_ms: nowMs };
                        touched = true;
                    }
                    if ((url.includes("changeProfileInfo") || url.includes("updateUser") || url.includes("us-central1-locket-4252a.cloudfunctions.net")) && reqJson.data && typeof reqJson.data === "object") {
                        reqJson.data.badge = isRevoked ? null : "locket_gold";
                        reqJson.data.locket_gold_badge = !isRevoked;
                        reqJson.data.show_gold_badge = !isRevoked;
                        reqJson.data.is_gold = !isRevoked;
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
    }
} else if (isResponseMode) {
    // PHẢN HỒI TỨC THÌ 0MS NGAY KHI MỞ LOCKET ĐỂ KHÔNG BỊ NHÁY MẤT GOLD VÀ KHÔNG TẮT CÔNG TẮC HUY HIỆU
    const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
    const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? $request.headers : {};
    const requestedUrlUserId = extractRequestedRcUserId(reqUrl);
    const resolvedUserId = extractAndCacheCredentials(reqUrl, reqHeaders, $response.body);
    const cfg = loadConfig();

    const isRootRcFallback = /^https?:\/\/(api|rc-backup)\.revenuecat\.com\/?(\?.*)?$/i.test(reqUrl) && !reqUrl.includes("/v1/") && !reqUrl.includes("/subscribers");
    if (reqUrl.includes("/setdate") || reqUrl.includes("locket.gold") || isRootRcFallback || (($response.body || "").includes("7117") && ($response.body || "").includes("Page not found"))) {
        Env.done({
            status: 200,
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "Cache-Control": "no-store, no-cache, must-revalidate"
            },
            body: renderBentoWebPanel(cfg, "", false, false)
        });
    } else {
        if (isActualLocketAppTraffic(reqUrl, reqHeaders)) {
            if (cfg.isBlockedByAdmin) {
                triggerInAppLocketBlockAlert(resolvedUserId, cfg.blockReason, true, false);
            } else {
                fireNativeAppNotification(cfg, false);
            }
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
                    reqUrl.includes("firebaseremoteconfigrealtime.googleapis.com") ||
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
                    obj = buildSubscriberPayload(obj, cfg, resolvedUserId, requestedUrlUserId, reqHeaders);
                } else if (isLocketCloudFunctions) {
                    obj = patchCloudFunctionResponsePayload(obj, cfg, reqUrl, resolvedUserId);
                } else {
                    if (!cfg.isBlockedByAdmin && obj.error && typeof obj.error === "object") {
                        const errMsg = String(obj.error.message || obj.error.status || "").toLowerCase();
                        if (errMsg.includes("quota") || errMsg.includes("limit") || errMsg.includes("gold") || errMsg.includes("permission")) {
                            delete obj.error;
                            obj.result = obj.result || { ok: true, can_use: true, remaining: sanitizeQuotaNumber(cfg.aiFilterQuota, 999999) };
                        }
                    }
                    obj = deepForceBadgeAndAiQuotaInObject(obj, cfg);
                    if (obj.subscriber && typeof obj.subscriber === "object") {
                        obj = buildSubscriberPayload(obj, cfg, resolvedUserId, requestedUrlUserId, reqHeaders);
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
                resHeaders["X-UpLocket-Gold-Status"] = cfg.isBlockedByAdmin ? "revoked" : "active";

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
// === HOÀN TẤT TRỌN BỘ 6/6 PHẦN CỦA FILE LOCKET_25_05_2026.JS (MASTER V10.0) ===
