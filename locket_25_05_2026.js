// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 1 OF 6)
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
    stripAllCacheValidators: true,
    stripIfNoneMatch: true,
    stripIfModifiedSince: true,
    forceFreshSubscriberPayload: true
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
        ],
        "Darwin": [
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

const UPLOCKET_INAPP_POPUP_PRESET = {
    pillBadgeText: "UpLocket",
    pillGradientStart: "#FDE047",
    pillGradientEnd: "#F59E0B",
    pillTextColor: "#111111",
    sheetBackground: "#1C1C1E",
    cardStageBackground: "#141415",
    handleBarColor: "#52525B",
    headlineText: "Đã mở khoá GOLD thành công!",
    bodyText: "Bạn đã mở khoá GOLD thành công, hãy tận hưởng những tính năng cao cấp của Locket nhé!",
    primaryButtonText: "Đã hiểu",
    primaryButtonGradientStart: "#FBBF24",
    primaryButtonGradientEnd: "#F59E0B",
    primaryButtonTextColor: "#111111",
    ambientGlowColor: "rgba(245, 158, 11, 0.22)",
    forceTriggerOnNextAppOpen: true,
    allowDirectImageUpload: true
};

const THAY_PRODUCT_NAME = "LOCKET GOLD PRO";
const THAY_SLOGAN = "Thiết kế tối giản. Hiệu ứng cuộn điện ảnh 60fps. Quyền năng thuần khiết.";
const THAY_USP_LEFT = "Khóa cứng mốc đăng ký gốc và đồng bộ huy hiệu Locket Gold theo thời gian thực.";
const THAY_USP_RIGHT = "Chip Locket H2 & Lõi DoH UpLocket 40 miền mới. Mở khóa trọn bộ Photobooth, 350+ Caption VIP, Camera 30s & 999.999 lượt Tạo diện mạo AI.";

const THAY_FEATURES = [
    {
        title: "Mở khóa toàn diện Photobooth, 350+ Caption & AI Looks",
        desc: "Gỡ bỏ hoàn toàn rào cản Paywall, kích hoạt trọn bộ Khung & Photobooth (4 ô, Cute, Polaroid, 2-3 ảnh), 350+ Caption nghệ thuật, Camera 30s Ultra-Wide/Telephoto và 999.999 lượt Tạo diện mạo AI.",
        badge: "FULL PHOTOBOOTH & 350+ CAPTIONS",
        stat: "999K+"
    },
    {
        title: "Auto-Discovery, Ô Cuộn Gọn Gàng & Bắn Popup UpLocket",
        desc: "Tự động quét UID, Username, Ảnh đại diện bạn bè vào ô cuộn thông minh. Tích hợp nút Bắn Thông Báo Popup trực tiếp lên màn hình App Locket và tải ảnh trực tiếp từ máy.",
        badge: "UPLOCKET POPUP & UPLOAD ENGINE",
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
      <stop offset="0%" stop-color="#27272a"/>
      <stop offset="60%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
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
      <feDropShadow dx="0" dy="34" stdDeviation="28" flood-color="#000000" flood-opacity="0.35"/>
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="900" height="900" rx="190" fill="url(#studioStage)"/>
  <ellipse cx="450" cy="740" rx="280" ry="44" fill="#000000" opacity="0.35"/>
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
    <text x="450" y="564" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600" letter-spacing="0.22em" font-family="-apple-system, SF Pro Display, Helvetica Neue, sans-serif">UPLOCKET EDITION</text>
    <circle cx="450" cy="676" r="6" fill="#10b981"/>
    <circle cx="450" cy="676" r="13" fill="none" stroke="#10b981" stroke-width="1.6" stroke-opacity="0.4"/>
  </g>
</svg>`);

const DEFAULT_WIDGET_FRAME_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <linearGradient id="wgGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <rect x="14" y="14" width="572" height="572" rx="118" fill="none" stroke="url(#wgGold)" stroke-width="18"/>
  <rect x="28" y="28" width="544" height="544" rx="104" fill="none" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="3"/>
  <rect x="210" y="544" width="180" height="38" rx="19" fill="url(#wgGold)"/>
  <text x="300" y="569" text-anchor="middle" fill="#111111" font-size="17" font-weight="800" font-family="-apple-system, SF Pro Display, sans-serif">LOCKET GOLD</text>
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
                },
                {
                    id: "photobooth_film_roll",
                    effect_id: "photobooth_film_roll",
                    title: "Film Roll 35mm",
                    layout: "film_strip",
                    shots_count: 4,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "photobooth_gold_vip",
                    effect_id: "photobooth_gold_vip",
                    title: "Khung Locket Gold 24K",
                    layout: "gold_luxury",
                    shots_count: 2,
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
                },
                {
                    id: "uplocket_special_2026",
                    effect_id: "uplocket_special_2026",
                    title: "UpLocket Special 2026",
                    category: "event",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "midautumn_lantern",
                    effect_id: "midautumn_lantern",
                    title: "Lễ Hội Ánh Trăng",
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
                },
                {
                    id: "gigachad_jaw",
                    look_id: "gigachad_jaw",
                    title: "GigaChad Jaw",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "anime_blush",
                    look_id: "anime_blush",
                    title: "Anime Blush",
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
                },
                {
                    id: "silver_wolf_cut",
                    look_id: "silver_wolf_cut",
                    title: "Silver Wolf Cut",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "cyber_glasses",
                    look_id: "cyber_glasses",
                    title: "Cyber Glasses",
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
                },
                {
                    id: "vip_fireworks",
                    effect_id: "vip_fireworks",
                    title: "Pháo Hoa VIP",
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
                "bye_brows",
                "gigachad_jaw",
                "anime_blush"
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
                "bye_brows",
                "silver_wolf_cut",
                "cyber_glasses"
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
                "happy_birthday",
                "party_confetti",
                "birthday_crown",
                "vip_fireworks"
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
        "gigachad_jaw",
        "anime_blush",
        "bowling_ball",
        "blonde_bleached",
        "beard",
        "bob_cut",
        "buns",
        "tatted",
        "mohawk",
        "braces",
        "silver_wolf_cut",
        "cyber_glasses",
        "slimed",
        "princess",
        "disco_lights",
        "cash_money",
        "happy_birthday",
        "party_confetti",
        "birthday_crown",
        "vip_fireworks",
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
        },
        {
            threshold: 25000,
            emoji: "👑💎🔥💎👑"
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
        },
        {
            threshold: 25000,
            emoji: "👑💛🔐💛👑"
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
    "halloween_2026",
    "uplocket_gold_vip"
];

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
            },
            {
                overlay_id: "caption:tet_binh_ngo_vip",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#B71C1C",
                            "#F59E0B",
                            "#FDE047"
                        ]
                    },
                    icon: {
                        data: "🧧",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Vạn Sự Như Ý · Phát Tài",
                    localized_text: {
                        en: "Happy Lunar New Year",
                        vn: "Vạn Sự Như Ý · Phát Tài"
                    },
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:valentine_sweet_2027",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF416C",
                            "#FF4B2B"
                        ]
                    },
                    icon: {
                        data: "💝",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Happy Valentine's Day",
                    localized_text: {
                        en: "Happy Valentine's Day",
                        vn: "Mùa Yêu Thương"
                    },
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
                overlay_id: "caption:uplocket_gold_edition",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#18181B",
                            "#F59E0B",
                            "#FDE047"
                        ]
                    },
                    icon: {
                        data: "✨",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "UpLocket Gold Edition",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ngominhduc_author",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F172A",
                            "#1E293B",
                            "#3B82F6"
                        ]
                    },
                    icon: {
                        data: "💎",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ngô Minh Đức · Master V12.5",
                    text_color: "#F8FAFC",
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
            },
            {
                overlay_id: "caption:chi_yeu_minh_em",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF758C",
                            "#FF7EB3"
                        ]
                    },
                    icon: {
                        data: "💖",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "chỉ yêu mình em thôi",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:om_anh_mot_cai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FBC2EB",
                            "#A6C1EE"
                        ]
                    },
                    icon: {
                        data: "🫂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "ôm anh một cái đi",
                    text_color: "#3F3D56",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nguoi_yeu_so_1",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#FF9A9E",
                            "#FAD0C4"
                        ]
                    },
                    icon: {
                        data: "🥇",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "người yêu tui số 1",
                    text_color: "#5C2A35",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Gaming, Công Nghệ & Tốc Độ 🔥",
        items: [
            {
                overlay_id: "caption:booyah_top_1",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#F59E0B",
                            "#EA580C",
                            "#991B1B"
                        ]
                    },
                    icon: {
                        data: "🏆",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "BOOYAH! Top 1 Gánh Team",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:full_do_auto_headshot",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#DC2626",
                            "#7F1D1D"
                        ]
                    },
                    icon: {
                        data: "🎯",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Full Đỏ Tâm Khóa Đầu",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:coding_all_night",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#09090B",
                            "#1E293B",
                            "#10B981"
                        ]
                    },
                    icon: {
                        data: "💻",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "12.000+ Lines · No Bugs",
                    text_color: "#ECFDF5",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:server_uplocket_online",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#064E3B",
                            "#059669"
                        ]
                    },
                    icon: {
                        data: "⚡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "UpLocket DoH 40 Miền: 12ms",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:leo_rank_xuyen_dem",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#311B92",
                            "#512DA8",
                            "#673AB7"
                        ]
                    },
                    icon: {
                        data: "🎮",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Leo Rank Xuyên Đêm",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:iphone_16_pro_max_vibe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#27272A",
                            "#52525B",
                            "#D4AF37"
                        ]
                    },
                    icon: {
                        data: "📱",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Shot on iPhone 16 Pro Max",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:dslr_canon_bokeh",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1F2937",
                            "#B91C1C"
                        ]
                    },
                    icon: {
                        data: "📸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Canon EOS · 50mm f/1.8",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:danang_mykhe_chill",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0284C7",
                            "#38BDF8",
                            "#BAE6FD"
                        ]
                    },
                    icon: {
                        data: "🌊",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Mỹ Khê Beach Vibes",
                    text_color: "#0C4A6E",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:lop_11c1_forever",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1D4ED8",
                            "#3B82F6",
                            "#93C5FD"
                        ]
                    },
                    icon: {
                        data: "🎓",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "11C1 Mãi Đỉnh",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            }
        ]
    }
];
// === KẾT THÚC PHẦN 1 / 6 — GÕ "2" ĐỂ NHẬN TIẾP PHẦN 2 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 2 OF 6)
// DÁN NỐI TIẾP NGAY DƯỚI PHẦN 1/6
// ============================================================================

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
            },
            {
                overlay_id: "caption:plus_1000_aura",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#111827",
                            "#4F46E5",
                            "#EC4899"
                        ]
                    },
                    icon: {
                        data: "⚡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "+10.000 Aura Không Nói Nhiều",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:out_trinh_hoan_toan",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F172A",
                            "#334155",
                            "#F59E0B"
                        ]
                    },
                    icon: {
                        data: "👑",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Out Trình Hoàn Toàn",
                    text_color: "#FEF08A",
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
            },
            {
                overlay_id: "caption:absolute_cinema_meme",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#09090B",
                            "#27272A",
                            "#52525B"
                        ]
                    },
                    icon: {
                        data: "🙌",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Absolute Cinema",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:let_him_cook_meme",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#7C2D12",
                            "#EA580C",
                            "#FACC15"
                        ]
                    },
                    icon: {
                        data: "👨‍🍳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Let Him Cook 🔥",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Học Tập, Trường Lớp & Thi Cử 📚",
        items: [
            {
                overlay_id: "caption:on_thi_xuyen_man_dem",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1E3A8A",
                            "#3B82F6"
                        ]
                    },
                    icon: {
                        data: "📖",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ôn thi xuyên màn đêm",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:vat_ly_khong_kho",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F172A",
                            "#0284C7"
                        ]
                    },
                    icon: {
                        data: "⚛️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Hệ tâm linh Vật Lý & Hóa Học",
                    text_color: "#E0F2FE",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:xin_via_10_diem",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#DC2626",
                            "#F59E0B"
                        ]
                    },
                    icon: {
                        data: "💯",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Xin vía 10 điểm full môn",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cup_hoc_di_net",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#374151",
                            "#111827"
                        ]
                    },
                    icon: {
                        data: "🤫",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Đang ngồi trong lớp nhưng hồn ở quán",
                    text_color: "#F9FAFB",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:chua_thuoc_bai",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#7F1D1D",
                            "#EF4444"
                        ]
                    },
                    icon: {
                        data: "😰",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cô đừng gọi tên em...",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tiet_5_doi_bung",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#D97706",
                            "#FDE047"
                        ]
                    },
                    icon: {
                        data: "🍜",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tiết 5 rồi đói bụng quá cứu",
                    text_color: "#451A03",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:full_stack_student",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#065F46",
                            "#10B981"
                        ]
                    },
                    icon: {
                        data: "🚀",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ngày đi học · Đêm viết Bot & Code",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Âm Nhạc, Chill Đêm & Lo-Fi 🎧",
        items: [
            {
                overlay_id: "caption:lofi_chill_midnight",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1E1B4B",
                            "#312E81",
                            "#4338CA"
                        ]
                    },
                    icon: {
                        data: "🎧",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Lo-Fi Chill Beats · 02:00 AM",
                    text_color: "#E0E7FF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:spotify_repeat_1",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#064E3B",
                            "#10B981",
                            "#34D399"
                        ]
                    },
                    icon: {
                        data: "🎵",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Nghe đi nghe lại bài này 100 lần",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tai_nghe_chong_on",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#18181B",
                            "#3F3F46",
                            "#71717A"
                        ]
                    },
                    icon: {
                        data: "🔇",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Bật chống ồn · Tắt thế giới",
                    text_color: "#FAFAFA",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:nhac_suy_dem_muon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F172A",
                            "#1E293B",
                            "#475569"
                        ]
                    },
                    icon: {
                        data: "🌧️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "List nhạc suy lúc nửa đêm",
                    text_color: "#E2E8F0",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Thể Thao, Gym & Sân Cỏ ⚽",
        items: [
            {
                overlay_id: "caption:keo_bong_da_chieu_nay",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#14532D",
                            "#16A34A",
                            "#4ADE80"
                        ]
                    },
                    icon: {
                        data: "⚽",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Cháy hết mình trên sân cỏ",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:gym_no_pain_no_gain",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#111827",
                            "#B91C1C",
                            "#EF4444"
                        ]
                    },
                    icon: {
                        data: "💪",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "No Pain No Gain · Độ Body",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:badminton_smash_vip",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0C4A6E",
                            "#0284C7",
                            "#38BDF8"
                        ]
                    },
                    icon: {
                        data: "🏸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Kèo Cầu Lông Chiều Nay",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:night_run_5km",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1E293B",
                            "#0F766E",
                            "#14B8A6"
                        ]
                    },
                    icon: {
                        data: "👟",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chạy bộ 5km giải tỏa áp lực",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            }
        ]
    }
];
// === KẾT THÚC PHẦN 2 / 6 — GÕ "3" ĐỂ NHẬN TIẾP PHẦN 3 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 3 OF 6)
// DÁN NỐI TIẾP NGAY DƯỚI PHẦN 2/6
// ============================================================================

const NMS_PB_WORKER_HOST = "https://locket-vip.mhiep20077.workers.dev";
const NMS_VIP_COMMUNITY_STORE_KEY = "LOCKET_VIP_COMMUNITY";
const NMS_SELF_UID_KEY = "LOCKET_SELF_UID";
const NMS_SELF_USERNAME_KEY = "LOCKET_SELF_USERNAME";

const NMS_DELETE_HEADER_V2_META = {
    version: "V2.0.0",
    headersToStrip: [
        "x-revenuecat-etag",
        "if-none-match",
        "if-modified-since",
        "x-goog-if-none-match"
    ]
};

const NMS_BASE_VIP_USERS = [
    "ngominhduc",
    "mhhiep",
    "2c7dlquxuqulknrwgpcqsqlw0sk2",
    "th_quang08",
    "th_quang",
    "nln9pozfecsccxhuqpiwvkhfwsi2",
    "mhhuyz",
    "7tulqjjxb0srwqbbp3euildiqfe3",
    "nguyentuankietne",
    "blgpf4fdvbbnlmfllziy4hnbjjn1",
    "d4vy8lqpxevoi7yw0etjagd8ihm1",
    "duuxx",
    "nin1qotyjmnywtrmudubinmywwt1",
    "kienvin",
    "ovqinfsvsud70wk1zzamju8cxrf1",
    "nightmarketserver",
    "qudekzvkzif2oaox79fnh1fodxf3",
    "nightmarket",
    "j5n7ioiufeymskpmcohjjjswrxa2",
    "7ghwealmlhxvkdvhp11vwwwciie2",
    "hjmbhnrxstco62kjojgojtc8ddn2",
    "dualato",
    "g8mrjoobvcfgo6pomplyvmqfet92",
    "12tsoagygjyx6xdmvqj7d5phsv93",
    "6fbwotlsq5ojnd7azlrcuousv5k2",
    "v6nunol4iiacnmfnrxsfoko5dxn2",
    "khoia",
    "zhuudjqjnatlsn350x4w0wnnnwn1",
    "ak24",
    "b09lwjxdn3ublwbgtjaqwwnvxcs1",
    "ak2703",
    "t5fvkfp994fywhgwfkwsikscleg1",
    "duyvinh09",
    "729ckhper7p0lnynwp0fsrtktng2",
    "4a5e1hpej5zgxeaii5z2kdbmolf2",
    "mpqza6lcmoxwtnwqn7jz2yi7vi22",
    "ghfpj4icughbjhtrqt8hvfqiwmg2",
    "zg1dvwmntaq2jmdvuwqel8fxhei2",
    "tzxpq8rmhrsq70zyr0wwytnk5t33",
    "enil4j1rdjfwzvkz4y5bxvcnv4k2",
    "jfv4gmq9gie6g2capflgnozrwhg2",
    "leanhminh2104",
    "utjvlg8fbfx12lz0qp2c3n5qgay1",
    "talaquaivat",
    "eufsqtikwsre05wdktcibpcxvhi3",
    "sarhlywj6doce6yybr0z3vx23ef1",
    "tduc",
    "znoppo16aanvdi2g9dswximmhrl2",
    "8acssqcce7gwhfzxtkgdczgmjte2",
    "daokinnn",
    "4njw4uo7tusl1huh39dy03sl6xf1",
    "tr.duck",
    "2u96nqywrdeopjwhn4tvtivpeyh2",
    "nguyenhoangtulinh",
    "wphe1l0fp9g1wuifi0xrdv3zeqv1",
    "6mvzl2stbafos0v8wwuujalumel1",
    "gzbnnaurnib6no8ow5yz9cvtwct2",
    "ann203",
    "hkcgcbmndwve1uvnlcceu9gbscw1",
    "q5yk3p7jd5qqqwth6aqaohcjvvl1",
    "wvkrbhbs58zn9xp1oalb732uh922",
    "nlidzrbg3sylny3hursjov5co8t2",
    "effh2jtjanha5uhmx9mkhbw2kgw2",
    "1zkaxildwlc54iqvpfvc0xshch93",
    "nviitxuxhmypiq9crffclxbzj7v2",
    "hunglaoshi",
    "om2esk68dfxqfzryveblf1znoxx1",
    "miubaby",
    "mzuspertjfsfbfxhllmvrhzifx62",
    "khaido1117",
    "obu5ilvrknwrrtu1vyefp8odol43",
    "1fcncwgripguvtx8hpjw10bsrzh3",
    "pvaheohbr4v01cfg9hai1iwxdkt2",
    "duonganhky",
    "8kiu9dwtuicniutzojhr6kf0qyp1",
    "o9ac9wcvwqgfxaw2hmdkbyluqkb2",
    "ptan.01",
    "vlrlnbb1esmdut8ch4bepfckkdk2",
    "tloc0088",
    "hso9tm4a6cpkcpgxjohxiqu6dhi1",
    "yi9tybjdfzg0kbonhqjb516sbzw2",
    "baoconcu",
    "rhm8b6rlv1d3snxdfj1jxg1qcrc2",
    "ho_ann",
    "e11r1kxh4ezehcbglv0zun6dndn2",
    "bichna14",
    "w733f9quh4gceczqhipvtvmkqpk2",
    "taikhoantest1",
    "supfr8xxdkdph6rkcftz0lgsu6q1",
    "ccc",
    "onwh7iehjvgylmnsyu9ljuwp4a82",
    "ntnmedia",
    "gvneomp84yuw8znzpyyqhwwasiy2",
    "6bsfuqrk1zw8yvqanhnvwndvqql1",
    "nguyentankietne",
    "oeg7utzfdff5kppub7vcfiqmlli2",
    "phw_naw",
    "grtrogz4xcdhznd8kzdrkdl66md2",
    "bn_sii",
    "f7ugzfhyc7xrikjvee8wbrcmt0k1",
    "oahn2309",
    "fuokhow1rxuvugyb0bz7xl3wcku2",
    "mhhieuz",
    "igxfmpws63dt7zpaqp0irtruyj72",
    "canh.quang",
    "t9inecetx2dje9n36vvyb9xomxy2",
    "kienviet",
    "htthao",
    "nguyencongquan29",
    "vanluu"
];

const NMS_STICKER_ID_MAP = {
    "stk_rose_flower": "rose_flower",
    "rose_flower": "rose_flower",
    "stk_shrek_ogre": "shrek_ogre",
    "shrek_ogre": "shrek_ogre",
    "stk_superhero_cape": "superhero_cape",
    "superhero_cape": "superhero_cape",
    "stk_spooky_ghost": "spooky_ghost",
    "spooky_ghost": "spooky_ghost",
    "stk_pirate_hat": "pirate_hat",
    "pirate_hat": "pirate_hat",
    "stk_volcano_lava": "volcano_lava",
    "volcano_lava": "volcano_lava",
    "stk_rain_storm": "rain_storm",
    "rain_storm": "rain_storm",
    "stk_fortnite_llama": "fortnite_llama",
    "fortnite_llama": "fortnite_llama",
    "stk_watercolor_art": "watercolor_art",
    "watercolor_art": "watercolor_art",
    "stk_golden_hour": "golden_hour",
    "golden_hour": "golden_hour",
    "stk_jungle_leaf": "jungle_leaf",
    "jungle_leaf": "jungle_leaf",
    "stk_cute_zombie": "cute_zombie",
    "cute_zombie": "cute_zombie",
    "stk_fireworks": "fireworks",
    "fireworks": "fireworks",
    "stk_new_year_2026": "new_year_2026",
    "new_year_2026": "new_year_2026",
    "stk_harry_potter": "harry_potter",
    "harry_potter": "harry_potter",
    "stk_minecraft": "minecraft",
    "minecraft": "minecraft",
    "stk_fire_flame": "fire_flame",
    "fire_flame": "fire_flame",
    "stk_giant_spider": "giant_spider",
    "giant_spider": "giant_spider",
    "stk_ocean_underwater": "ocean_underwater",
    "ocean_underwater": "ocean_underwater",
    "stk_ufo_alien": "ufo_alien",
    "ufo_alien": "ufo_alien",
    "stk_dio_disco": "disco_lights",
    "disco": "disco_lights",
    "stk_dio_pm2": "locket",
    "stk_dio_cash": "cash_money",
    "cash": "cash_money",
    "stk_dio_wedding": "wedding",
    "wedding": "wedding",
    "stk_dio_cowboy": "cowboy_cowgirl",
    "cowboy": "cowboy_cowgirl",
    "stk_dio_looksmaxing": "looks_maxxing",
    "looksmaxing": "looks_maxxing",
    "stk_dio_orange_wig": "okay_wig",
    "orange_wig": "okay_wig",
    "stk_dio_bleached_hair": "blonde_bleached",
    "bleached_hair": "blonde_bleached",
    "stk_dio_bob": "bob_cut",
    "bob": "bob_cut",
    "stk_dio_bearded": "beard",
    "bearded": "beard",
    "stk_dio_bearded_holiday": "bearded",
    "stk_dio_sweat_hearts": "sweet_hearts",
    "sweat_hearts": "sweet_hearts",
    "stk_dio_elf": "elf_cutout",
    "elf": "elf_cutout",
    "stk_dio_santa": "santa_cutout",
    "santa": "santa_cutout",
    "stk_dio_easter_bunny": "easter_bunney_cutout",
    "easter_bunny": "easter_bunney_cutout",
    "stk_dio_easter_chick": "easter_chick_cutout",
    "easter_chick": "easter_chick_cutout",
    "stk_dio_toothless": "toothless",
    "toothless": "toothless",
    "stk_dio_bye_brows": "bye_brows",
    "bye_brows": "bye_brows",
    "stk_dio_bowling_ball": "bowling_ball",
    "bowling_ball": "bowling_ball",
    "stk_dio_buns": "buns",
    "buns": "buns",
    "stk_dio_tatted": "tatted",
    "tatted": "tatted",
    "stk_dio_mohawk": "mohawk",
    "mohawk": "mohawk",
    "stk_dio_braces": "braces",
    "braces": "braces",
    "stk_dio_slimed": "slimed",
    "slimed": "slimed",
    "stk_dio_princess": "princess",
    "princess": "princess",
    "stk_dio_happy_birthday": "happy_birthday",
    "happy_birthday": "happy_birthday",
    "stk_dio_cutesy": "cutesy",
    "cutesy": "cutesy",
    "stk_dio_sticker_face": "sticker_face",
    "sticker_face": "sticker_face",
    "stk_dio_flower_crown": "flower_crown",
    "flower_crown": "flower_crown",
    "stk_dio_love_bug": "love_bug",
    "love_bug": "love_bug",
    "stk_dio_giraffe": "giraffe",
    "giraffe": "giraffe",
    "stk_dio_clown": "clown",
    "clown": "clown",
    "stk_dio_leprechaun": "leprechaun",
    "leprechaun": "leprechaun",
    "stk_dio_lucky_face": "lucky_face",
    "lucky_face": "lucky_face",
    "stk_dio_frosty": "frosty",
    "frosty": "frosty",
    "stk_dio_influencer": "influencer",
    "influencer": "influencer"
};

const NMS_AI_PROMPTS = {
    "rose_flower": "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
    "stk_rose_flower": "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
    "shrek_ogre": "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
    "stk_shrek_ogre": "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
    "superhero_cape": "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
    "stk_superhero_cape": "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
    "spooky_ghost": "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
    "stk_spooky_ghost": "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
    "pirate_hat": "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
    "stk_pirate_hat": "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
    "volcano_lava": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "stk_volcano_lava": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
    "rain_storm": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.\n\nFor Men: Dress them in the Jacob Elordi style with matching hair and outfit.\n\nFor Women: Dress them in the Margot Robbie style: A dramatic, historical-inspired red gown with a high-gloss, lacquered red skirt that is extremely voluminous and structured, forming a full bell shape from the waist down if that part is visible in the initial image.",
    "stk_rain_storm": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.",
    "fortnite_llama": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite. Show no extra overlays or text on top of the photo. If no person is present, do not add any people to the output.",
    "stk_fortnite_llama": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite.",
    "watercolor_art": "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes. If no person is present, do not add any people to the output.",
    "stk_watercolor_art": "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes.",
    "golden_hour": "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows.",
    "stk_golden_hour": "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows.",
    "jungle_leaf": "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way.",
    "stk_jungle_leaf": "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way.",
    "cute_zombie": "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
    "stk_cute_zombie": "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
    "fireworks": "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject.",
    "stk_fireworks": "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject.",
    "new_year_2026": "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026.",
    "stk_new_year_2026": "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026.",
    "harry_potter": "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houses.",
    "stk_harry_potter": "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houses.",
    "minecraft": "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters.",
    "stk_minecraft": "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters.",
    "fire_flame": "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, captured with a modern iPhone camera look.",
    "stk_fire_flame": "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, captured with a modern iPhone camera look.",
    "giant_spider": "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head.",
    "stk_giant_spider": "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head.",
    "ocean_underwater": "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater.",
    "stk_ocean_underwater": "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater.",
    "ufo_alien": "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien hidden somewhere in the background.",
    "stk_ufo_alien": "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien hidden somewhere in the background.",
    "disco_lights": "Show the persons in the photo with the exact same pose and background, but with disco-style lighting effects cast across the scene, captured with a modern iPhone camera look.",
    "influencer": "Show the persons in the photo with the exact same pose and background, but with a hyperbolic influencer makeup look applied to the face, captured with a modern iPhone camera look.",
    "princess": "Show the person in the photo with the exact same pose and background, but portray them as a prince charming or a beautiful princess from a fairytale.",
    "looks_maxxing": "Show the persons in the photo with the exact same pose and background, but with a full, full-length beard added to the face, captured with a modern iPhone camera look.",
    "beard": "Show the persons in the photo with the exact same pose and background, but with a full, full-length beard added to the face, captured with a modern iPhone camera look.",
    "slimed": "Show the persons in the photo with the exact same pose and background, but with thick green Nickelodeon-style slime being poured and splashing throughout the scene, captured with a modern iPhone camera look.",
    "cowboy_cowgirl": "Show the persons in the photo with the exact same pose and background, but with subjects dressed in Western cowboy/cowgirl attire, captured with a modern iPhone camera look.",
    "clown": "Show the persons in the photo with the exact same pose and background, but styled as clowns with a multicolored curly wig and bright red nose, captured with a modern iPhone camera look.",
    "tatted": "Show the persons in the photo with the exact same pose and background, but with a forehead tattoo that reads Locket in Old English font and a small heart cheek tattoo.",
    "bye_brows": "Show the persons in the photo with the exact same pose and background, but with only the eyebrow hair removed.",
    "bowling_ball": "Show the persons in the photo with the exact same pose and background, but with a completely bald head while preserving the exact skull contour.",
    "blonde_bleached": "Show the persons in the photo with the exact same pose and background, but with a buzzed and bleached blonde hairstyle.",
    "bob_cut": "Show the persons in the photo with the exact same pose and background, but with their hair cut into a chin-length bob hairstyle.",
    "mohawk": "Show the persons in the photo with the exact same pose and background, but with a mohawk hairstyle featuring shaved sides and a raised center strip.",
    "braces": "Show the persons in the photo with the exact same pose and background, but with multicolored orthodontic braces visible on their teeth.",
    "flower_crown": "Show the persons in the photo with the exact same pose and background, but wearing a mixed wildflower crown resting naturally on top of the head.",
    "giraffe": "Show the persons in the photo with the exact same pose and background, but with the subject wearing a plush giraffe costume onesie.",
    "leprechaun": "Show the person in the photo with the exact same pose, framing, expression, and background, but dress them in leprechaun costume with a green top hat.",
    "lucky_face": "Show the person in the photo with the exact same pose and background, but add cute subtle freckles and small green clover sticker decals on both cheeks.",
    "elf_cutout": "Show the person in the photo with the exact same pose and background, but dressed up as an Elf.",
    "santa_cutout": "Show the person in the photo with the exact same pose and background, but dressed up as Santa Claus.",
    "easter_chick_cutout": "Show the persons in the photo with the exact same pose and background, but put them in a bright yellow Easter chick costume onesie.",
    "photobooth": "Show the persons in the photo with the exact same pose and background, captured with a Korean photobooth 4-cut aesthetic, vintage soft lighting, clear facial features, 8k resolution, modern iPhone camera look.",
    "photobooth_4cut": "Show the persons in the photo with the exact same pose and background, captured with a Korean photobooth 4-cut aesthetic, vintage soft lighting, clear facial features, 8k resolution, modern iPhone camera look.",
    "photobooth_cute": "Show the persons in the photo with the exact same pose and background, captured with a cute pastel aesthetic, soft lighting, 8k resolution, modern iPhone camera look.",
    "pb_strawberry": "Show the persons in the photo with the exact same pose and background, captured with a cute pastel strawberry photobooth aesthetic, soft lighting, 8k resolution, modern iPhone camera look.",
    "pb_vintage": "Show the persons in the photo with the exact same pose and background, captured with vintage 90s film aesthetic, warm nostalgic lighting, 8k resolution, modern iPhone camera look.",
    "pb_galaxy": "Show the persons in the photo with the exact same pose and background, captured with dreamy galaxy stars lighting, soft ambient glow, 8k resolution, modern iPhone camera look.",
    "pb_holo_4cut": "Show the persons in the photo with the exact same pose and background, captured with holographic Y2K aesthetic, iridescent chrome shine, 8k resolution, modern iPhone camera look.",
    "pb_scrapbook_ripped_4cut": "Show the persons in the photo with the exact same pose and background, captured with scrapbook vintage paper aesthetic, warm film texture, 8k resolution, modern iPhone camera look.",
    "pb_ripped_paper_4cut": "Show the persons in the photo with the exact same pose and background, captured with artistic ripped paper collage aesthetic, soft shadows, 8k resolution, modern iPhone camera look.",
    "pb_denim_ripped_2x2": "Show the persons in the photo with the exact same pose and background, captured with stylish 90s denim aesthetic, cool tone lighting, 8k resolution, modern iPhone camera look.",
    "frame_classic_pb": "Show the persons in the photo with the exact same pose and background, captured with classic black and white film photobooth aesthetic, dramatic soft lighting, 8k resolution, modern iPhone camera look."
};

function isNmsPhotoboothFilter(fid) {
    if (!fid) return false;
    const lower = String(fid).toLowerCase();
    if (lower.startsWith("pb_single_") || lower.startsWith("khung_")) return false;
    return /photobooth_4cut|photobooth_cute|pb_holo_4cut|pb_scrapbook_ripped_4cut|pb_ripped_paper_4cut|pb_denim_ripped_2x2|frame_classic_pb|frame_berry_days|frame_happy_snap|frame_sky_diary|pb_strawberry|pb_vintage|pb_galaxy|photoboot|4cut/i.test(lower);
}

function isNmsOverlayFrameFilter(fid) {
    if (!fid) return false;
    if (isNmsPhotoboothFilter(fid)) return false;
    const lower = String(fid).toLowerCase();
    return /^khung_|^frame_|pb_single_|cmt_locket|custom_frame|sticker_b_nh_lu_n/i.test(lower);
}

function buildNmsMock200FilterResponse(outputUrl) {
    return {
        status: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            result: {
                outputUrl: outputUrl,
                output_url: outputUrl,
                url: outputUrl,
                imageUrl: outputUrl,
                image_url: outputUrl,
                status: 200,
                data: {
                    outputUrl: outputUrl,
                    output_url: outputUrl,
                    url: outputUrl,
                    imageUrl: outputUrl,
                    image_url: outputUrl
                }
            }
        })
    };
}

function applyNmsCommunityGoldBadge(target) {
    if (!target || typeof target !== "object") return;
    target.badge = "locket_gold";
    target.badge_tier = "gold";
    target.show_badge = true;
    target.is_gold = true;
    target.has_gold = true;
    target.gold = true;
    target.gold_subscription = true;
    target.has_gold_subscription = true;
    target.tier = "gold";
    target.subscription_status = "active";
    if (target.user && typeof target.user === "object" && target.user !== target) {
        applyNmsCommunityGoldBadge(target.user);
    }
    if (target.friend && typeof target.friend === "object" && target.friend !== target) {
        applyNmsCommunityGoldBadge(target.friend);
    }
    if (target.profile && typeof target.profile === "object" && target.profile !== target) {
        applyNmsCommunityGoldBadge(target.profile);
    }
}

function isNmsNodeCommunityVip(target, vSet) {
    if (!target || typeof target !== "object" || !vSet) return false;
    const uid = String(target.uid || target.user_id || target.id || target.friend_uid || target.friend_id || target.friendId || target.userId || "").toLowerCase().trim();
    if (uid && vSet.has(uid)) return true;

    const uname = String(target.username || target.friend_username || "").toLowerCase().trim();
    if (uname && vSet.has(uname)) return true;

    if (target.user && typeof target.user === "object") {
        const uUid = String(target.user.uid || target.user.id || target.user.user_id || "").toLowerCase().trim();
        if (uUid && vSet.has(uUid)) return true;
        const uUname = String(target.user.username || target.user.friend_username || "").toLowerCase().trim();
        if (uUname && vSet.has(uUname)) return true;
    }

    if (target.friend && typeof target.friend === "object") {
        const fUid = String(target.friend.uid || target.friend.id || "").toLowerCase().trim();
        if (fUid && vSet.has(fUid)) return true;
        const fUname = String(target.friend.username || "").toLowerCase().trim();
        if (fUname && vSet.has(fUname)) return true;
    }

    const dName = String(target.display_name || target.first_name || target.name || (target.user && (target.user.display_name || target.user.first_name)) || "").toLowerCase().trim();
    if (dName && vSet.has(dName)) return true;
    return false;
}

const FORCEGOLD_OVERLAY_SECTIONS_PART_C = [
    {
        section: "🎨 Bất ổn & Hết cứu 🫠",
        items: [
            {
                overlay_id: "caption:bat_on_that_su",
                source: "remote",
                caption: {
                    background: { colors: ["#636363", "#A2AB58"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#607D8B", "#455A64"] },
                    icon: { data: "❌", type: "emoji" },
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
                    background: { colors: ["#B8C9E8", "#D5D5F0", "#E9CDE0"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#F2B5A7", "#F6D1B5", "#E9C2D5"] },
                    icon: { data: "💀", type: "emoji" },
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
                    background: { colors: ["#F44336", "#B71C1C"] },
                    icon: { data: "🐉", type: "emoji" },
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
                    background: { colors: ["#673AB7", "#512DA8"] },
                    icon: { data: "❗", type: "emoji" },
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
                    background: { colors: ["#F3B6AF", "#F6D2C2", "#EAC8D9"] },
                    icon: { data: "😭", type: "emoji" },
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
                    background: { colors: ["#C0B7E5", "#D8D0F0", "#EACDE2"] },
                    icon: { data: "💀", type: "emoji" },
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
                    background: { colors: ["#3A1C71", "#D76D77"] },
                    icon: { data: "📉", type: "emoji" },
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
                    background: { colors: ["#2C3E50", "#3498DB"] },
                    icon: { data: "🏳️", type: "emoji" },
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
                    background: { colors: ["#1CB5E0", "#000046"] },
                    icon: { data: "😭", type: "emoji" },
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
                    background: { colors: ["#C33764", "#1D2671"] },
                    icon: { data: "🌪️", type: "emoji" },
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
                    background: { colors: ["#B8E0D2", "#D8EAD8", "#C9D9F0"] },
                    icon: { data: "🧠", type: "emoji" },
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
                    background: { colors: ["#2C3E50", "#4CA1AF"] },
                    icon: { data: "🤯", type: "emoji" },
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
                    background: { colors: ["#1F1C2C", "#928DAB"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#434343", "#000000"] },
                    icon: { data: "🗿", type: "emoji" },
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
                    background: { colors: ["#C5C8D8", "#D9CBDD", "#E7C9CE"] },
                    icon: { data: "🙂", type: "emoji" },
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
                    background: { colors: ["#141E30", "#243B55"] },
                    icon: { data: "🥀", type: "emoji" },
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
                    background: { colors: ["#929FC8", "#B5B6D8", "#D4C7E4"] },
                    icon: { data: "🌙", type: "emoji" },
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
                    background: { colors: ["#AEBBD3", "#C8C9E1", "#E0C9D9"] },
                    icon: { data: "🥲", type: "emoji" },
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
                    background: { colors: ["#AEB8D1", "#C7C7DF", "#DED0E0"] },
                    icon: { data: "🫂", type: "emoji" },
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
                    background: { colors: ["#F3C7D9", "#F6D9D0", "#E5CFF0"] },
                    icon: { data: "🥹", type: "emoji" },
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
                    background: { colors: ["#F0B6B6", "#F5D0C3", "#E8C6DE"] },
                    icon: { data: "🆘", type: "emoji" },
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
                    background: { colors: ["#3A1C71", "#D76D77"] },
                    icon: { data: "🌪️", type: "emoji" },
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
                    background: { colors: ["#C8A6C4", "#D9B9D0", "#E7C8D6"] },
                    icon: { data: "💔", type: "emoji" },
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
                    background: { colors: ["#B9B7DC", "#D2C9EA", "#E6CADF"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#AFC6D8", "#C8D5E2", "#E0D1DE"] },
                    icon: { data: "🌧️", type: "emoji" },
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
                    background: { colors: ["#C5B8D8", "#D8C8DF", "#E7CBD2"] },
                    icon: { data: "🥀", type: "emoji" },
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
                    background: { colors: ["#B9B9D9", "#D2CBE5", "#E8D2E0"] },
                    icon: { data: "💭", type: "emoji" },
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
                    background: { colors: ["#ADB9CB", "#C7C9D8", "#DED0D9"] },
                    icon: { data: "🩶", type: "emoji" },
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
                    background: { colors: ["#B9C6E3", "#D0D4ED", "#E9CFE1"] },
                    icon: { data: "📱", type: "emoji" },
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
                    background: { colors: ["#E0B9D2", "#E9CFE4", "#D3CFF0"] },
                    icon: { data: "🥺", type: "emoji" },
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
                    background: { colors: ["#D0B8D9", "#E2CBE5", "#E8D0D6"] },
                    icon: { data: "🙂", type: "emoji" },
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
                    background: { colors: ["#D7C1E8", "#E9D6EF", "#F2C9D5"] },
                    icon: { data: "🥲", type: "emoji" },
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
                    background: { colors: ["#FF5F6D", "#FFC371"] },
                    icon: { data: "😤", type: "emoji" },
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
                    background: { colors: ["#F1BDD0", "#F8DCE5", "#E8D1F2"] },
                    icon: { data: "🥺", type: "emoji" },
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
                    background: { colors: ["#E8B7D2", "#E9C9EA", "#D0D1F0"] },
                    icon: { data: "😾", type: "emoji" },
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
                    background: { colors: ["#F6D365", "#FDA085"] },
                    icon: { data: "🥺", type: "emoji" },
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
                    background: { colors: ["#F0C5D6", "#F4D8E2", "#DED0F0"] },
                    icon: { data: "🥲", type: "emoji" },
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
                    background: { colors: ["#F3B9D0", "#F8D9E5", "#E8D0F2"] },
                    icon: { data: "🥹", type: "emoji" },
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
                    background: { colors: ["#C4B9E6", "#DDD0F1", "#EBD1E4"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#FF6B6B", "#FF8E53", "#FFD166"] },
                    icon: { data: "🤬", type: "emoji" },
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
                    background: { colors: ["#F44336", "#D32F2F"] },
                    icon: { data: "❗", type: "emoji" },
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
                    background: { colors: ["#00BCD4", "#0097A7"] },
                    icon: { data: "❓", type: "emoji" },
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
                    background: { colors: ["#1F1C2C", "#928DAB", "#C9D6FF"] },
                    icon: { data: "😳", type: "emoji" },
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
                    background: { colors: ["#C9CBE8", "#E2D9F3", "#F5E9F7"] },
                    icon: { data: "🐱", type: "emoji" },
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
                    background: { colors: ["#B8D8E8", "#D8C9F0", "#F3D2DF"] },
                    icon: { data: "😭", type: "emoji" },
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
                    background: { colors: ["#BFD4E8", "#D6D9F0", "#EACFE4"] },
                    icon: { data: "🤨", type: "emoji" },
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
                    background: { colors: ["#C0B9D9", "#D8C9E3", "#E9CDD6"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#B9B5D6", "#D4C7E2", "#E6C9D4"] },
                    icon: { data: "🙄", type: "emoji" },
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
                    background: { colors: ["#870000", "#190A05"] },
                    icon: { data: "🙄", type: "emoji" },
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
                    background: { colors: ["#A8B9D0", "#C9BDE8", "#F0C6D8"] },
                    icon: { data: "🫠", type: "emoji" },
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
                    background: { colors: ["#FF416C", "#FF4B2B"] },
                    icon: { data: "🙉", type: "emoji" },
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
                    background: { colors: ["#C4D9CB", "#E5E6D0", "#F3D9C5"] },
                    icon: { data: "🙈", type: "emoji" },
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
                    background: { colors: ["#B9AFD5", "#D5BED4", "#E8C5CE"] },
                    icon: { data: "🤫", type: "emoji" },
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
                    background: { colors: ["#232526", "#414345", "#6C7A89", "#B0BEC5"] },
                    icon: { data: "🤐", type: "emoji" },
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
                    background: { colors: ["#D8B4E2", "#EAC7D8", "#C4D7F2"] },
                    icon: { data: "🤫", type: "emoji" },
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
                    background: { colors: ["#ED213A", "#93291E"] },
                    icon: { data: "🔥", type: "emoji" },
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
                    background: { colors: ["#F0D1A4", "#F5E2BD", "#D5D9EF"] },
                    icon: { data: "📚", type: "emoji" },
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
                    background: { colors: ["#FDC830", "#F37335"] },
                    icon: { data: "🤡", type: "emoji" },
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
                    background: { colors: ["#0F2027", "#1B5E20", "#66BB6A"] },
                    icon: { data: "🐍", type: "emoji" },
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
                    background: { colors: ["#0F2027", "#2C5364"] },
                    icon: { data: "☕", type: "emoji" },
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
                    background: { colors: ["#11998E", "#38EF7D"] },
                    icon: { data: "💸", type: "emoji" },
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
                    background: { colors: ["#0F2027", "#203A43", "#2C5364"] },
                    icon: { data: "💸", type: "emoji" },
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
                    background: { colors: ["#1E90FF", "#00D4FF"] },
                    icon: { data: "💳", type: "emoji" },
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
                    background: { colors: ["#BFA06A", "#E8D5AD", "#F6EBDD"] },
                    icon: { data: "💰", type: "emoji" },
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
                    background: { colors: ["#BFA06A", "#E8D5AD", "#F6EBDD"] },
                    icon: { data: "💸", type: "emoji" },
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
                    background: { colors: ["#B8C8B3", "#D9DFC5", "#EAD9B7"] },
                    icon: { data: "💰", type: "emoji" },
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
                    background: { colors: ["#56AB2F", "#A8E063"] },
                    icon: { data: "🥔", type: "emoji" },
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
                    background: { colors: ["#654EA3", "#EAAFC8"] },
                    icon: { data: "🎲", type: "emoji" },
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
                    background: { colors: ["#EF7402", "#EABF0F"] },
                    icon: { data: "☀️", type: "emoji" },
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
                    background: { colors: ["#4CAF50", "#2E7D32"] },
                    icon: { data: "☀️", type: "emoji" },
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
                    background: { colors: ["#4E342E", "#8D6E63"] },
                    icon: { data: "☕", type: "emoji" },
                    max_lines: 1,
                    text: "Coffee Time!",
                    localized_text: { en: "Coffee Time!", vn: "Giờ uống cà phê!" },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:matcha_latte",
                source: "remote",
                caption: {
                    background: { colors: ["#C8E6C9", "#A5D6A7", "#81C784"] },
                    icon: { data: "🍃", type: "emoji" },
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
                    background: { colors: ["#FFF9C4", "#F8BBD0"] },
                    icon: { data: "🍦", type: "emoji" },
                    max_lines: 1,
                    text: "Mixue Time!",
                    localized_text: { en: "Mixue Time!", vn: "Giờ Mixue!" },
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:tien_mua_tra_sua",
                source: "remote",
                caption: {
                    background: { colors: ["#D7B77D", "#EAD6AA", "#F5E7CC"] },
                    icon: { data: "🧋", type: "emoji" },
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
                    background: { colors: ["#FF9800", "#F57C00"] },
                    icon: { data: "🍽️", type: "emoji" },
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
                    background: { colors: ["#FFCCBC", "#FF8A80"] },
                    icon: { data: "🍽️", type: "emoji" },
                    max_lines: 1,
                    text: "Dinner Time!",
                    localized_text: { en: "Dinner Time!", vn: "Giờ ăn tối!" },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:di_choi_khong",
                source: "remote",
                caption: {
                    background: { colors: ["#E91E63", "#C2185B"] },
                    icon: { data: "✈️", type: "emoji" },
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
                    background: { colors: ["#5EFFF5", "#FCFF57"] },
                    icon: { data: "🪩", type: "emoji" },
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
                    background: { colors: ["#F0C58E", "#F5D9A9", "#EBC6B8"] },
                    icon: { data: "🥂", type: "emoji" },
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
                    background: { colors: ["#B3E5FC", "#FFFFFF"] },
                    icon: { data: "🛍️", type: "emoji" },
                    max_lines: 1,
                    text: "Shopping Time!",
                    localized_text: { en: "Shopping Time!", vn: "Giờ mua sắm!" },
                    text_color: "#000000E6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cinema_time",
                source: "remote",
                caption: {
                    background: { colors: ["#1A237E", "#455A64"] },
                    icon: { data: "🎬", type: "emoji" },
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
                    background: { colors: ["#455A64", "#263238"] },
                    icon: { data: "📷", type: "emoji" },
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
                    background: { colors: ["#26A69A", "#00897B"] },
                    icon: { data: "📷", type: "emoji" },
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
                    background: { colors: ["#ECEFF1", "#B3E5FC"] },
                    icon: { data: "📷", type: "emoji" },
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
                    background: { colors: ["#FFFFFF", "#DBDBDB"] },
                    icon: { data: "🕶", type: "emoji" },
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
                    background: { colors: ["#E1BEE7", "#F8BBD0"] },
                    icon: { data: "🌴", type: "emoji" },
                    max_lines: 1,
                    text: "Chilling Time!",
                    localized_text: { en: "Chilling Time!", vn: "Giờ thư giãn!" },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:graduation_day",
                source: "remote",
                caption: {
                    background: { colors: ["#1A237E", "#283593"] },
                    icon: { data: "🎓", type: "emoji" },
                    max_lines: 1,
                    text: "Happy Graduation Day!",
                    localized_text: { en: "Happy Graduation Day!", vn: "Chúc mừng tốt nghiệp!" },
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:hoi_chieu_troi_mua",
                source: "remote",
                caption: {
                    background: { colors: ["#546E7A", "#263238"] },
                    icon: { data: "🌧️", type: "emoji" },
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
                    background: { colors: ["#6D4C41", "#8D6E63", "#BCAAA4"] },
                    icon: { data: "☕", type: "emoji" },
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
                    background: { colors: ["#2193B0", "#6DD5ED"] },
                    icon: { data: "🤧", type: "emoji" },
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
                    background: { colors: ["#B8A1D9", "#D8C6E8", "#A9B8E8"] },
                    icon: { data: "🌌", type: "emoji" },
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
                    background: { colors: ["#B993D6", "#8CA6DB", "#C9B1FF"] },
                    icon: { data: "🪐", type: "emoji" },
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
                    background: { colors: ["#0F2027", "#203A43", "#2C5364"] },
                    icon: { data: "💭", type: "emoji" },
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
                    background: { colors: ["#370C6F", "#575CD4"] },
                    icon: { data: "🌙", type: "emoji" },
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
                    background: { colors: ["#3F51B5", "#1A237E"] },
                    icon: { data: "🌙", type: "emoji" },
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
                    background: { colors: ["#A1C4FD", "#C2E9FB", "#E0F7FA"] },
                    icon: { data: "☁️", type: "emoji" },
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
                    background: { colors: ["#AEBDE0", "#C8D0EA", "#DCD1E9"] },
                    icon: { data: "🫡", type: "emoji" },
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

const DEFAULT_CONFIG = {
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
    appVersion: "2.70.0",
    forceSandboxFalse: true,
    alwaysForceBadge: true,
    friendsBadgeDefault: true,
    cronKeepAlive: true,
    notifyOnSync: true,
    enableNmsMapping: true,
    enableHeader7StripEtag: true,

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
    enablePb4ShotWorker: true,
    enableCommunityVipSync: true,

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

    widgetEventEnabled: true,
    widgetEventUid: "midautumn_2026",
    widgetEventUrl: DEFAULT_WIDGET_FRAME_SVG,
    widgetEventPlacement: "below",
    widgetEventMaxImages: 5,
    cdnReplacementEnabled: true,
    cdnSourceDomain: "firebasestorage.googleapis.com",
    cdnTargetDomain: "cdn.locketcamera.com",
    historyCacheAgeDays: 1000,
    imageCacheMaxAgeSec: 157680000,
    disableHistoryAds: true,
    disableSentryTracking: true,

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

    popupEnabled: true,
    popupAutoShow: false,
    popupStyle: "uplocket_inapp_dark",
    popupBadge: UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText,
    popupHeader: UPLOCKET_INAPP_POPUP_PRESET.headlineText,
    popupTitle: "Ngô Minh Đức",
    popupSubtitle: UPLOCKET_INAPP_POPUP_PRESET.bodyText,
    popupImage: THAY_IMAGE_PATH,
    popupBtnText: UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText,
    discoveryPopupTag: "LOCKET GOLD NMS",
    discoveryPopupTitle: "Đã Kích Hoạt 💛",
    discoveryPopupFeatureTitle: "Ngô Minh Đức · Locket Gold Pro ✨",
    discoveryPopupFeatureBody: "Đã mở khoá toàn bộ 350+ Caption, Photobooth & Camera 30s 💛",
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
    pushBody: UPLOCKET_INAPP_POPUP_PRESET.bodyText
};
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5.1 — PART 4 OF 6)
// DÁN NỐI TIẾP NGAY DƯỚI PHẦN 3/6
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

function renderIosSwitchCard(inputName, isChecked, titleText, subText = "Đang kích hoạt 24/7", isGoldStyle = false) {
    return `
    <label class="ios-switch-card">
      <div class="ios-switch-info">
        <span class="ios-switch-title">${escapeHtml(titleText)}</span>
        <span class="ios-switch-sub">${escapeHtml(subText)}</span>
      </div>
      <div class="ios-switch-control ${isGoldStyle ? "gold-switch" : ""}">
        <input type="checkbox" name="${escapeHtml(inputName)}" value="1" ${isChecked ? "checked" : ""}>
        <span class="ios-switch-slider"></span>
      </div>
    </label>`;
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
    --apple-emerald: #10b981;
    --apple-rose: #f43f5e;
    --apple-card-radius: 28px;
    --apple-pill-radius: 999px;
    --apple-shadow: 0 14px 48px rgba(0, 0, 0, 0.08), 0 2px 12px rgba(0, 0, 0, 0.04);
    --apple-ease: cubic-bezier(0.28, 0.11, 0.32, 1);
    --apple-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

  html, body {
    background-color: #fbfbfd;
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
  .apple-bento-card { background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: var(--apple-card-radius); box-shadow: var(--apple-shadow); border: 1px solid rgba(29, 29, 31, 0.07); padding: 34px 30px; }
  .bento-card-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid rgba(29, 29, 31, 0.07); margin-bottom: 22px; }
  .bento-eyebrow { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--apple-text-secondary); margin-bottom: 6px; }
  .bento-heading { font-size: 23px; font-weight: 700; letter-spacing: -0.025em; color: var(--apple-text-primary); }
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

  .field-label { display: block; font-size: 12px; font-weight: 600; color: var(--apple-text-primary); margin-bottom: 8px; }
  .apple-field { width: 100%; padding: 13px 16px; border-radius: 14px; background: var(--apple-bg-light); border: 1px solid rgba(29, 29, 31, 0.14); color: var(--apple-text-primary); font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
  .apple-field:focus { border-color: var(--apple-blue); box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15); }
  .chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .preset-pill { padding: 6px 14px; border-radius: var(--apple-pill-radius); background: var(--apple-bg-light); border: 1px solid rgba(29, 29, 31, 0.1); font-size: 12px; font-weight: 600; color: var(--apple-text-primary); cursor: pointer; font-family: inherit; transition: all 0.2s ease; }
  .preset-pill:hover { background: #e8e8ed; }
  .btn-action-primary { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: var(--apple-text-primary); color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; transition: transform 0.15s ease, opacity 0.2s ease; }
  .btn-action-primary:active { transform: scale(0.985); }
  .btn-action-blue { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: var(--apple-blue); color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }
  .btn-action-gold { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%); color: #111111; font-size: 14.5px; font-weight: 700; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; box-shadow: 0 8px 24px rgba(245, 158, 11, 0.28); }
  .btn-action-soft { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: #f2f2f7; color: var(--apple-text-primary); font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }
  .apple-pill { display: inline-block; padding: 3px 11px; border-radius: var(--apple-pill-radius); font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; }
  .pill-gold { background: rgba(245, 158, 11, 0.16); color: #92400e; }
  .pill-blue { background: rgba(0, 113, 227, 0.12); color: #0051a8; }
  .pill-emerald { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .pill-rose { background: rgba(244, 63, 94, 0.14); color: #9f1239; }

  .apple-pill-btn { display: inline-flex; align-items: center; justify-content: center; padding: 7px 15px; border-radius: var(--apple-pill-radius); font-size: 12px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; font-family: inherit; transition: opacity 0.2s ease; }
  .btn-dark-soft { background: #1d1d1f; color: #fff; }
  .btn-blue-soft { background: rgba(0, 113, 227, 0.12); color: #0071e3; }
  .btn-emerald-soft { background: rgba(16, 185, 129, 0.14); color: #065f46; }
  .btn-amber-soft { background: rgba(245, 158, 11, 0.16); color: #92400e; }
  .btn-rose-soft { background: rgba(244, 63, 94, 0.14); color: #9f1239; }

  .spec-tile { padding: 22px; border-radius: 22px; background: var(--apple-bg-light); border: 1px solid rgba(29, 29, 31, 0.07); }
  .spec-mono-val { font-family: "SF Mono", monospace; font-size: 12px; font-weight: 600; color: var(--apple-text-primary); word-break: break-all; margin-top: 4px; }
  .empty-state-box { padding: 28px 16px; text-align: center; font-size: 13.5px; color: var(--apple-text-secondary); grid-column: 1 / -1; }
  .toast-alert-bar { padding: 16px 22px; border-radius: 20px; background: #1d1d1f; color: #fff; font-size: 13.5px; font-weight: 500; box-shadow: var(--apple-shadow); display: ${statusMsg ? "block" : "none"}; }
  .admin-block-alert { padding: 22px 26px; border-radius: var(--apple-card-radius); background: #fff1f2; border: 1px solid rgba(244, 63, 94, 0.3); color: #881337; display: ${cfg.isBlockedByAdmin ? "flex" : "none"}; flex-direction: column; gap: 6px; }

  .ios-switch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(265px, 1fr)); gap: 12px; }
  .ios-switch-card { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; border-radius: 18px; background: #ffffff; border: 1px solid rgba(29, 29, 31, 0.08); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.025); cursor: pointer; user-select: none; transition: transform 0.18s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
  .ios-switch-card:hover { border-color: rgba(0, 113, 227, 0.28); box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05); transform: translateY(-1px); }
  .ios-switch-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .ios-switch-title { font-size: 13.5px; font-weight: 600; color: var(--apple-text-primary); line-height: 1.3; }
  .ios-switch-sub { font-size: 11px; color: var(--apple-text-secondary); }
  .ios-switch-control { position: relative; width: 50px; height: 30px; flex-shrink: 0; }
  .ios-switch-control input { opacity: 0; width: 0; height: 0; position: absolute; }
  .ios-switch-slider { position: absolute; inset: 0; background-color: #e5e5ea; border-radius: 30px; transition: background-color 0.28s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .ios-switch-slider::before { position: absolute; content: ""; height: 26px; width: 26px; left: 2px; bottom: 2px; background-color: #ffffff; border-radius: 50%; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.12); transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .ios-switch-control input:checked + .ios-switch-slider { background: linear-gradient(135deg, #34d399 0%, #10b981 100%); }
  .ios-switch-control.gold-switch input:checked + .ios-switch-slider { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); }
  .ios-switch-control input:checked + .ios-switch-slider::before { transform: translateX(20px); }

  .cap-preview-chip { display: inline-flex; align-items: center; gap: 6px; padding: 7px 15px; border-radius: 999px; font-size: 13px; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06); max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .cap-studio-grid, .scroll-box-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 12px; max-height: 490px; overflow-y: auto; padding: 12px; border-radius: 22px; background: rgba(242, 242, 247, 0.65); border: 1px solid rgba(29, 29, 31, 0.08); box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.03); -webkit-overflow-scrolling: touch; }
  .cap-studio-grid::-webkit-scrollbar, .scroll-box-grid::-webkit-scrollbar { width: 6px; }
  .cap-studio-grid::-webkit-scrollbar-thumb, .scroll-box-grid::-webkit-scrollbar-thumb { background: rgba(29, 29, 31, 0.22); border-radius: 999px; }
  .cap-card-item, .scroll-user-card { padding: 16px; border-radius: 18px; background: #ffffff; border: 1px solid rgba(29, 29, 31, 0.08); box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03); display: flex; flex-direction: column; justify-content: space-between; gap: 12px; transition: transform 0.16s ease, box-shadow 0.16s ease; }
  .cap-card-item:hover, .scroll-user-card:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06); }
  .user-card-top { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .user-card-avatar { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(245, 158, 11, 0.45); flex-shrink: 0; background: #1d1d1f; }
  .user-card-meta { min-width: 0; flex: 1; }
  .user-card-name-row { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .user-card-fullname { font-size: 14px; font-weight: 700; color: var(--apple-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .user-card-handle { font-size: 12px; color: var(--apple-text-secondary); }
  .user-card-uid { font-family: "SF Mono", monospace; font-size: 10.5px; color: var(--apple-text-secondary); margin-top: 3px; word-break: break-all; }
  .user-card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-top: 10px; border-top: 1px solid rgba(29, 29, 31, 0.06); flex-wrap: wrap; }

  .direct-upload-zone { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 18px; background: #ffffff; border: 1.5px dashed rgba(0, 113, 227, 0.35); margin-top: 8px; }
  .direct-upload-thumb { width: 64px; height: 64px; border-radius: 14px; object-fit: cover; background: #141415; border: 1px solid rgba(29, 29, 31, 0.1); flex-shrink: 0; }
  .direct-upload-controls { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
  .file-upload-btn-label { display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 14px; border-radius: 12px; background: rgba(0, 113, 227, 0.12); color: #0071e3; font-size: 12.5px; font-weight: 700; cursor: pointer; width: fit-content; }
  .file-upload-btn-label input[type="file"] { display: none; }

  .apple-modal-backdrop { position: fixed; inset: 0; z-index: 10001; background: rgba(0, 0, 0, 0.68); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); display: flex; align-items: flex-end; justify-content: center; }
  .uplocket-bottom-sheet { position: relative; width: 100%; max-width: 470px; background: radial-gradient(circle at 50% 95%, rgba(245, 158, 11, 0.20) 0%, #1c1c1e 62%, #18181a 100%); border-top-left-radius: 38px; border-top-right-radius: 38px; box-shadow: 0 -24px 64px rgba(0, 0, 0, 0.65); border-top: 1px solid rgba(255, 255, 255, 0.12); padding: 14px 22px 34px; text-align: center; color: #ffffff; }
  .uplocket-sheet-handle { width: 42px; height: 5px; border-radius: 999px; background: #52525b; margin: 0 auto 16px; }
  .uplocket-pill-badge { display: inline-flex; align-items: center; justify-content: center; padding: 6px 20px; border-radius: 13px; background: linear-gradient(180deg, #fde047 0%, #f59e0b 100%); color: #111111; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35); margin-bottom: 18px; }
  .uplocket-stage-card { width: 100%; height: 220px; border-radius: 26px; background: #121214; border: 1px solid rgba(255, 255, 255, 0.06); margin: 0 auto 22px; overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: inset 0 2px 18px rgba(0, 0, 0, 0.6); }
  .uplocket-stage-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .uplocket-headline { font-size: 23px; font-weight: 800; letter-spacing: -0.025em; color: #ffffff; margin-bottom: 10px; }
  .uplocket-subtext { font-size: 15px; font-weight: 500; line-height: 1.45; color: #a1a1aa; max-width: 360px; margin: 0 auto 24px; }
  .uplocket-cta-btn { display: inline-flex; align-items: center; justify-content: center; width: 100%; height: 54px; border-radius: 999px; background: linear-gradient(180deg, #fbbf24 0%, #d97706 100%); color: #111111; font-size: 17px; font-weight: 800; border: none; cursor: pointer; box-shadow: 0 10px 28px rgba(245, 158, 11, 0.32); }
  .hidden { display: none !important; }

  @media (max-width: 860px) {
    .scrub-stage-1320 { flex-direction: column; justify-content: center; gap: 14px; padding: 54px 18px 18px; }
    .scrub-canvas-wrap { width: 260px; }
    .scrub-card-glass { position: static; width: 100%; max-width: 440px; padding: 20px; }
    .td-layer-card { width: 320px; height: 420px; padding: 24px 22px; }
    .morph-grid-metrics, .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .apple-nav-link.hide-mobile { display: none; }
  }
`;
}

function buildAppleScrollySectionsHtml(cfg, activeFriendsBadgeCount, friendsListCount, isAdminLogged, shouldShowPopup) {
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const popupBadge = isRevoked ? (cfg.revokedPopupBadge || "THÔNG BÁO HỆ THỐNG") : (cfg.popupBadge || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText);
    const popupHeader = isRevoked ? (cfg.revokedPopupHeader || "Đã thu hồi LOCKET GOLD!") : (cfg.popupHeader || UPLOCKET_INAPP_POPUP_PRESET.headlineText);
    const popupSubtitle = isRevoked ? (cfg.revokedPopupSubtitle || cfg.blockReason) : (cfg.popupSubtitle || UPLOCKET_INAPP_POPUP_PRESET.bodyText);
    const popupImage = resolveEffectivePopupImage(cfg);
    const popupBtnText = isRevoked ? (cfg.revokedPopupBtnText || "Đã hiểu") : (cfg.popupBtnText || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText);

    const revealSentence1 = buildAppleWordRevealHtml("Mọi chuyển động đều được điều khiển trực tiếp bằng ngón tay của bạn. Không autoplay. Không rào cản Paywall. Mở khóa trọn bộ Khung Photobooth, 350+ Caption VIP, Camera 30s và Tạo diện mạo AI ở tốc độ 60 khung hình/giây.");
    const revealSentence2 = buildAppleWordRevealHtml(" Tự động bắt giữ UID bạn bè vào ô cuộn thông minh, tải ảnh trực tiếp từ máy cho Popup & Widget, bắn thông báo Popup UpLocket thẳng vào Locket và duy trì kết nối DoH UpLocket 40 miền bảo mật tuyệt đối.");

    return `
  <div class="apple-bg-stack" aria-hidden="true">
    <div id="bgLayerLight" class="apple-bg-layer-light"></div>
    <div id="bgLayerDark" class="apple-bg-layer-dark"></div>
  </div>

  <div id="globalProgressBar" class="apple-global-progress"></div>

  <div id="locketGoldModal" onclick="if(event.target===this){this.classList.add('hidden');this.style.display='none';}" class="apple-modal-backdrop ${shouldShowPopup ? "" : "hidden"}" style="display:${shouldShowPopup ? "flex" : "none"};">
    <div class="uplocket-bottom-sheet">
      <div class="uplocket-sheet-handle"></div>
      <div id="modalPillBadge" class="uplocket-pill-badge" style="${isRevoked ? "background:#f43f5e;color:#fff;" : ""}">${escapeHtml(popupBadge)}</div>
      <div class="uplocket-stage-card">
        <img id="modalArtImg" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" alt="UpLocket Popup Image">
      </div>
      <h2 id="modalHeadlineText" class="uplocket-headline">${escapeHtml(popupHeader)}</h2>
      <p id="modalSubText" class="uplocket-subtext">${escapeHtml(popupSubtitle)}</p>
      <button type="button" id="modalDoneBtn" onclick="var m=document.getElementById('locketGoldModal');if(m){m.classList.add('hidden');m.style.display='none';}" class="uplocket-cta-btn" style="${isRevoked ? "background:#f43f5e;color:#fff;" : ""}">${escapeHtml(popupBtnText)}</button>
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
        <button type="button" onclick="openGoldModal()" class="apple-nav-link">Xem mẫu Popup</button>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-nav-link">${isAdminLogged ? "Root Admin" : "Quản trị"}</button>
        <a href="#consoleSection" class="apple-buy-pill">Bảng điều khiển</a>
      </div>
    </div>
  </header>

  <main>

    <section id="secHeroZoom" class="sec-hero-zoom-200">
      <div class="apple-sticky-viewport">
        <div id="elHeroKicker" class="hero-kicker-clean gpu-layer">THẾ HỆ LOCKET GOLD UPLOCKET V12.5 MASTER</div>
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
              Mốc đăng ký gốc ${escapeHtml(cfg.lockDate)} được khóa cứng ở tầng giao thức, đồng bộ Popup UpLocket trực tiếp trong App Locket.
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
              Kết hợp định tuyến DoH UpLocket (${escapeHtml(cfg.dohPrimaryIp)}) cùng bộ giải mã 40 miền và mở khóa trọn bộ Photobooth 4 ô, Cute, Polaroid, 350+ Caption & AI Looks.
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
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 2: Khung Photobooth, 350+ Caption & AI</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Mở khóa Khung & Photobooth, Sự kiện (Practical Magic 2), 350+ Caption tự chế, Camera 30s và 999.999 lượt Tạo diện mạo AI.
              </p>
            </div>
          </article>

          <article id="elTdFront" class="td-layer-card td-layer-front gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill pill-gold">LỚP 01 · REVENUECAT & POPUP</span>
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
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 1: Khóa Cứng Thuê Bao & Bắn Popup Locket</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Ghi đè gói locket_1600_1y tới năm 9999, điều khiển huy hiệu bạn bè bằng công tắc và bắn thông báo Popup UpLocket trực tiếp vào ứng dụng.
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
// === KẾT THÚC PHẦN 4 / 6 — GÕ "5" ĐỂ NHẬN TIẾP PHẦN 5 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 5 OF 6)
// DÁN NỐI TIẾP NGAY DƯỚI PHẦN 4/6
// ============================================================================

function buildAppleBentoConsoleHtml(cfg, statusMsg, openAdminDrawer) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "";
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const currentAiQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const dohStatus = getCachedDohStatus(cfg);

    const popupBadge = cfg.popupBadge || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText;
    const popupHeader = cfg.popupHeader || UPLOCKET_INAPP_POPUP_PRESET.headlineText;
    const popupTitle = cfg.popupTitle || "Ngô Minh Đức";
    const popupSubtitle = cfg.popupSubtitle || UPLOCKET_INAPP_POPUP_PRESET.bodyText;
    const popupImage = resolveEffectivePopupImage(cfg);
    const widgetImage = resolveEffectiveWidgetImage(cfg);
    const popupBtnText = cfg.popupBtnText || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText;

    const db = getLocalStore();
    const usersList = Object.values(db.users || {});
    const goldUsersList = usersList.filter(u => u.gold_active !== false && u.status !== "blocked" && !u.blocked);

    const friendsMap = getFriendsBadgeMap();
    const friendsList = Object.values(friendsMap).filter(f => f && f.uid && f.uid !== cachedUid);
    const activeFriendsBadgeCount = friendsList.filter(f => f.badge_enabled !== false).length;

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

    let friendsBadgeListHtml = "";
    if (friendsList.length === 0) {
        friendsBadgeListHtml = `
        <div class="empty-state-box">
            Đang chờ tự động quét UID bạn bè... Hãy nhấn nút <strong>"Tự Động Quét & Lấy UID Bạn Bè Ngay"</strong> phía trên hoặc mở ứng dụng Locket 1 lần, toàn bộ danh sách bạn bè sẽ tự động hiện gọn trong ô cuộn này.
        </div>`;
    } else {
        for (const f of friendsList) {
            const isBadgeOn = f.badge_enabled !== false;
            const fUser = f.username || (f.uid ? f.uid.slice(0, 10) : "friend");
            const fFull = f.full_name || fUser;
            const fAvatar = f.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(fFull)}&background=1d1d1f&color=fff`;

            friendsBadgeListHtml += `
            <div class="scroll-user-card friend-badge-item" data-friend-search="${escapeHtml((fUser + " " + fFull + " " + f.uid).toLowerCase())}">
                <div class="user-card-top">
                    <img src="${escapeHtml(fAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(fFull)}&background=1d1d1f&color=fff'" class="user-card-avatar" alt="avatar" loading="lazy">
                    <div class="user-card-meta">
                        <div class="user-card-name-row">
                            <span class="user-card-fullname">${escapeHtml(fFull)}</span>
                            <span class="user-card-handle">@${escapeHtml(fUser)}</span>
                        </div>
                        <div class="user-card-uid">UID: ${escapeHtml(f.uid)}</div>
                    </div>
                </div>
                <div class="user-card-bottom">
                    <span id="friendBadgePill_${escapeHtml(f.uid)}" class="apple-pill ${isBadgeOn ? "pill-gold" : "pill-rose"}">
                        ${isBadgeOn ? "👑 ĐANG BẬT GOLD" : "ĐÃ TẮT GOLD"}
                    </span>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <label class="ios-switch-control gold-switch" title="Bật/Tắt huy hiệu Gold cho bạn bè này">
                            <input type="checkbox" id="friendSwitch_${escapeHtml(f.uid)}" ${isBadgeOn ? "checked" : ""} onchange="toggleSingleFriendBadge('${escapeHtml(f.uid)}', this.checked)">
                            <span class="ios-switch-slider"></span>
                        </label>
                        <a href="/setdate?friend_action=delete&friend_uid=${encodeURIComponent(f.uid)}#friendsBadgeSection" class="apple-pill-btn btn-rose-soft">Xoá</a>
                    </div>
                </div>
            </div>`;
        }
    }

    let goldDirectoryHtml = "";
    if (usersList.length === 0) {
        goldDirectoryHtml = `
        <div class="empty-state-box">
            Chưa có tài khoản nào trong danh sách. Mở Locket hoặc nhấn nút Kích hoạt để ghi nhận tự động vào ô cuộn này.
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
            <div class="scroll-user-card gold-user-item" data-search="${escapeHtml((uName + " " + fName + " " + u.uid).toLowerCase())}">
                <div class="user-card-top">
                    <img src="${escapeHtml(uAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=1d1d1f&color=fff'" class="user-card-avatar" alt="avatar" loading="lazy">
                    <div class="user-card-meta">
                        <div class="user-card-name-row">
                            <span class="user-card-fullname">${escapeHtml(fName)}</span>
                            <span class="user-card-handle">@${escapeHtml(uName)}</span>
                        </div>
                        <div class="user-card-uid">UID: ${escapeHtml(u.uid)} · Mốc: ${escapeHtml(lockD)}</div>
                    </div>
                </div>
                <div class="user-card-bottom">
                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                        ${isBlk ? `<span class="apple-pill pill-rose">ĐÃ THU HỒI GOLD</span>` : `<span class="apple-pill pill-gold">👑 LOCKET GOLD</span>`}
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-blue"}">AI: ${escapeHtml(userAiQuota.toLocaleString("vi-VN"))}</span>
                        ${isBlk ? `<span class="apple-pill pill-rose">BỊ CHẶN</span>` : `<span class="apple-pill pill-emerald">ONLINE 24/7</span>`}
                    </div>
                    <code style="font-size:10.5px;color:#6e6e73;background:#f5f5f7;padding:4px 8px;border-radius:8px;">${escapeHtml(isBlk ? "REVOKED" : (u.product_id || cfg.productId || "locket_1600_1y"))}</code>
                </div>
            </div>`;
        }
    }

    let adminTableHtml = "";
    if (usersList.length === 0) {
        adminTableHtml = `<div class="empty-state-box">Chưa có người dùng nào được ghi nhận trong hệ thống.</div>`;
    } else {
        for (const u of usersList) {
            const isBlk = u.status === "blocked" || u.blocked === true || u.gold_active === false;
            const uName = u.username || (u.uid ? u.uid.slice(0, 10) : "user");
            const uAiQuota = isBlk ? 0 : sanitizeQuotaNumber(u.ai_quota !== undefined ? u.ai_quota : currentAiQuota, currentAiQuota);
            adminTableHtml += `
            <div class="scroll-user-card">
                <div>
                    <div class="user-card-name-row">
                        <span class="user-card-fullname">@${escapeHtml(uName)}</span>
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-gold"}">${isBlk ? "ĐÃ MẤT GOLD" : "GOLD 24/7"}</span>
                        <span class="apple-pill ${isBlk ? "pill-rose" : "pill-blue"}">AI: ${escapeHtml(String(uAiQuota))}</span>
                    </div>
                    <div class="user-card-uid" style="margin-top:6px;">
                        UID: ${escapeHtml(u.uid)} · Mốc: ${escapeHtml(u.force_lock_date || u.lock_date || "2026-05-25")}
                    </div>
                </div>
                <div class="user-card-bottom">
                    <a href="/setdate?admin_drawer=1&admin_action=push_user_gold&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-dark-soft">Bắn Popup</a>
                    ${isBlk ? `
                        <a href="/setdate?admin_drawer=1&admin_action=unblock&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-emerald-soft">Cấp lại Gold</a>
                    ` : `
                        <a href="/setdate?admin_drawer=1&admin_action=block&target_uid=${encodeURIComponent(u.uid)}" class="apple-pill-btn btn-rose-soft">Chặn Gold</a>
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

      <section id="uplocketPopupStudioSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">UPLOCKET IN-APP POPUP & DIRECT IMAGE UPLOAD STUDIO</span>
            <h2 class="bento-heading">Bắn Thông Báo Popup Lên App Locket & Tải File Ảnh Trực Tiếp Từ Máy</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Thiết kế chuẩn giao diện <strong>UpLocket</strong>: Chỉnh chữ, chọn file ảnh trực tiếp từ thư viện điện thoại (đã tích hợp Smart Canvas Downscaler chống lỗi dung lượng) cho cả <strong>Thông báo Popup</strong> lẫn <strong>Khung Widget</strong>.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="openGoldModal()" class="apple-pill-btn btn-amber-soft" style="padding:10px 16px;">Xem Trước Popup Như Ảnh</button>
            <button type="button" onclick="firePopupToLocketAppNow()" class="apple-pill-btn btn-dark-soft" style="padding:10px 18px;background:linear-gradient(135deg,#fbbf24,#d97706);color:#111;font-weight:800;">
              🚀 Bắn Thông Báo Popup Lên App Locket Ngay
            </button>
          </div>
        </div>

        <form method="GET" action="/setdate#uplocketPopupStudioSection" style="display:flex;flex-direction:column;gap:18px;">
          <input type="hidden" name="save_popup_and_widget_studio" value="1">

          <div class="grid-2">
            <div class="spec-tile">
              <span class="bento-eyebrow">1. ẢNH TRONG THÔNG BÁO POPUP LOCKET (UP FILE TRỰC TIẾP)</span>
              <div class="direct-upload-zone">
                <img id="popupUploadPreviewThumb" src="${escapeHtml(popupImage)}" onerror="this.src='${THAY_IMAGE_PATH}'" class="direct-upload-thumb" alt="Popup Preview">
                <div class="direct-upload-controls">
                  <div style="font-size:13px;font-weight:700;color:#1d1d1f;">Chọn ảnh từ máy cho Popup Locket</div>
                  <div id="popupUploadStatusText" style="font-size:11.5px;color:#10b981;font-weight:600;">Sẵn sàng tải ảnh trực tiếp (Smart Canvas Downscaler active)</div>
                  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:2px;">
                    <label class="file-upload-btn-label">
                      📁 Chọn File Ảnh Từ Máy
                      <input type="file" accept="image/*" onchange="handleDirectFileUpload(this, 'popup')">
                    </label>
                    <button type="button" onclick="resetUploadedImageSlot('popup')" class="preset-pill">Khôi phục ảnh gốc</button>
                  </div>
                </div>
              </div>
              <div style="margin-top:14px;">
                <label class="field-label">Nhãn Pill Vàng trên cùng (Mặc định: UpLocket)</label>
                <input type="text" id="studioPopupBadgeInput" name="popupBadge" value="${escapeHtml(popupBadge)}" oninput="syncLivePopupModalPreview()" class="apple-field">
              </div>
              <div style="margin-top:12px;">
                <label class="field-label">Tiêu đề lớn trong Popup (Mặc định: Đã mở khoá GOLD thành công!)</label>
                <input type="text" id="studioPopupHeaderInput" name="popupHeader" value="${escapeHtml(popupHeader)}" oninput="syncLivePopupModalPreview()" class="apple-field">
              </div>
            </div>

            <div class="spec-tile">
              <span class="bento-eyebrow">2. ẢNH VIỀN KHUNG WIDGET LOCKET (UP FILE TRỰC TIẾP)</span>
              <div class="direct-upload-zone">
                <img id="widgetUploadPreviewThumb" src="${escapeHtml(widgetImage)}" onerror="this.src='${DEFAULT_WIDGET_FRAME_SVG}'" class="direct-upload-thumb" alt="Widget Preview">
                <div class="direct-upload-controls">
                  <div style="font-size:13px;font-weight:700;color:#1d1d1f;">Chọn ảnh viền cho Widget trực tiếp từ máy</div>
                  <div id="widgetUploadStatusText" style="font-size:11.5px;color:#10b981;font-weight:600;">Hỗ trợ ảnh PNG viền trong suốt / JPG nạp thẳng vào Widget</div>
                  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:2px;">
                    <label class="file-upload-btn-label">
                      🖼️ Tải Ảnh Widget Từ Máy
                      <input type="file" accept="image/*" onchange="handleDirectFileUpload(this, 'widget')">
                    </label>
                    <button type="button" onclick="resetUploadedImageSlot('widget')" class="preset-pill">Khôi phục viền gốc</button>
                  </div>
                </div>
              </div>
              <div style="margin-top:14px;">
                <label class="field-label">Nội dung mô tả dưới tiêu đề Popup</label>
                <input type="text" id="studioPopupSubInput" name="popupSubtitle" value="${escapeHtml(popupSubtitle)}" oninput="syncLivePopupModalPreview()" class="apple-field">
              </div>
              <div style="margin-top:12px;">
                <label class="field-label">Chữ trên nút bấm vàng (Mặc định: Đã hiểu) & Tên chủ sở hữu</label>
                <div class="grid-2">
                  <input type="text" id="studioPopupBtnInput" name="popupBtnText" value="${escapeHtml(popupBtnText)}" oninput="syncLivePopupModalPreview()" class="apple-field" placeholder="Đã hiểu">
                  <input type="text" name="popupTitle" value="${escapeHtml(popupTitle)}" class="apple-field" placeholder="Ngô Minh Đức">
                </div>
              </div>
            </div>
          </div>

          <div class="grid-2">
            <button type="submit" class="btn-action-primary">Lưu Nội Dung Popup & Cấu Hình Ảnh Widget</button>
            <button type="button" onclick="firePopupToLocketAppNow()" class="btn-action-gold">🔥 Bắn Thông Báo Popup Này Lên App Locket Ngay</button>
          </div>
        </form>
      </section>

      <section id="adminCommandCenter" class="apple-bento-card ${openAdminDrawer ? "" : "hidden"}">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">ROOT ADMIN CONSOLE</span>
            <h2 class="bento-heading">Quản trị Thu hồi/Cấp Gold & Điều khiển Hệ thống</h2>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="openGoldModal()" class="preset-pill">Xem trước Popup UpLocket</button>
            <button type="button" onclick="firePopupToLocketAppNow()" class="preset-pill">Bắn Popup lên App Locket</button>
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
          <div style="display:flex;flex-direction:column;gap:24px;">
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
              <div class="scroll-box-grid">
                ${adminTableHtml}
              </div>
            </div>
          </div>
        `}
      </section>

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
            <a href="/setdate?caption_action=reset_all#captionStudioSection" class="apple-pill-btn btn-amber-soft">Khôi phục toàn bộ 350+ Caption gốc</a>
          </div>
        </div>

        <form method="GET" action="/setdate#captionStudioSection" class="spec-tile" style="margin-bottom:22px;">
          <input type="hidden" name="caption_action" value="upsert">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px;">
            <span class="bento-eyebrow" style="margin:0;">TẠO CAPTION MỚI HOẶC CHỈNH SỬA CAPTION ĐANG CHỌN</span>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:12px;color:#6e6e73;">Xem trước trực tiếp:</span>
              <div id="liveCaptionPreviewChip" class="cap-preview-chip" style="background:linear-gradient(135deg,#FFD700,#F59E0B);color:#000000E6;">
                <span id="liveCapEmoji">👑</span>
                <span id="liveCapText">Ngô Minh Đức VIP</span>
              </div>
            </div>
          </div>

          <div class="grid-3">
            <div>
              <label class="field-label">Nội dung chữ hiển thị trên Caption</label>
              <input type="text" id="capTextInput" name="cap_text" value="Ngô Minh Đức VIP" oninput="updateLiveCaptionPreview()" class="apple-field" placeholder="Nhập chữ hiển thị..." required>
            </div>
            <div>
              <label class="field-label">Icon / Emoji đi kèm (Để trống nếu không dùng)</label>
              <input type="text" id="capEmojiInput" name="cap_emoji" value="👑" oninput="updateLiveCaptionPreview()" class="apple-field" placeholder="VD: 👑, 🔥, 💗, 🎀">
            </div>
            <div>
              <label class="field-label">Mã định danh (Overlay ID — Tự tạo nếu để trống)</label>
              <input type="text" id="capIdInput" name="overlay_id" value="" class="apple-field" placeholder="VD: caption:my_vip_cap">
            </div>
          </div>

          <div class="grid-4" style="margin-top:14px;">
            <div>
              <label class="field-label">Màu nền Gradient 1 (Hex)</label>
              <input type="text" id="capColor1Input" name="cap_c1" value="#FFD700" oninput="updateLiveCaptionPreview()" class="apple-field" placeholder="#FFD700">
            </div>
            <div>
              <label class="field-label">Màu nền Gradient 2 (Hex)</label>
              <input type="text" id="capColor2Input" name="cap_c2" value="#F59E0B" oninput="updateLiveCaptionPreview()" class="apple-field" placeholder="#F59E0B">
            </div>
            <div>
              <label class="field-label">Màu nền Gradient 3 (Tuỳ chọn)</label>
              <input type="text" id="capColor3Input" name="cap_c3" value="" oninput="updateLiveCaptionPreview()" class="apple-field" placeholder="#B45309">
            </div>
            <div>
              <label class="field-label">Màu chữ (Text Hex)</label>
              <input type="text" id="capTextColorInput" name="cap_tc" value="#000000E6" oninput="updateLiveCaptionPreview()" class="apple-field" placeholder="#FFFFFF">
            </div>
          </div>

          <div class="grid-2" style="margin-top:14px;align-items:end;">
            <div>
              <label class="field-label">Nhóm danh mục hiển thị trên Locket</label>
              <select id="capSectionInput" name="cap_section" class="apple-field">
                <option value="✨ Caption Tự Chế (Custom Studio)">✨ Caption Tự Chế (Custom Studio)</option>
                <option value="🎨 Decorative by Duy Vinh & Minh Đức">🎨 Decorative by Duy Vinh & Minh Đức</option>
                <option value="🎨 Holiday Caption">🎨 Holiday Caption</option>
                <option value="🎨 Tình yêu & Cơm chó 💕">🎨 Tình yêu & Cơm chó 💕</option>
                <option value="🎨 Gen Z & Xéo xắt 💅">🎨 Gen Z & Xéo xắt 💅</option>
                <option value="🎨 Meme & Hài hước 🤡">🎨 Meme & Hài hước 🤡</option>
                <option value="🎨 Bất ổn & Hết cứu 🫠">🎨 Bất ổn & Hết cứu 🫠</option>
                <option value="🎨 Deadline & Tiền bạc 💸">🎨 Deadline & Tiền bạc 💸</option>
                <option value="🎨 Daily & Đời sống ☕">🎨 Daily & Đời sống ☕</option>
                <option value="🎨 Gaming, Công Nghệ & Tốc Độ 🔥">🎨 Gaming, Công Nghệ & Tốc Độ 🔥</option>
                <option value="🎨 Học Tập, Trường Lớp & Thi Cử 📚">🎨 Học Tập, Trường Lớp & Thi Cử 📚</option>
                <option value="🎨 Photobooth & Aesthetic Hàn Quốc 📸">🎨 Photobooth & Aesthetic Hàn Quốc 📸</option>
                <option value="🎨 Cung Hoàng Đạo & Tarot 🔮">🎨 Cung Hoàng Đạo & Tarot 🔮</option>
                <option value="🎨 Ẩm Thực, Trà Sữa & Ăn Đêm 🍜">🎨 Ẩm Thực, Trà Sữa & Ăn Đêm 🍜</option>
              </select>
            </div>
            <button type="submit" class="btn-action-blue">+ Lưu / Thêm Caption Vào Locket Ngay</button>
          </div>
        </form>

        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;">
          <span class="bento-eyebrow" style="margin:0;">DANH SÁCH TOÀN BỘ CAPTION ĐANG HOẠT ĐỘNG (${totalActiveCaptionsCount})</span>
          <div style="width:100%;max-width:300px;">
            <input type="text" id="searchCaptionStudioInput" oninput="filterCaptionStudioCards()" class="apple-field" style="padding:9px 14px;font-size:13px;" placeholder="Tìm nội dung Caption, mã ID hoặc nhóm...">
          </div>
        </div>

        <div id="captionStudioGridList" class="cap-studio-grid">
          ${captionCardsHtml}
        </div>
      </section>

      <section id="cameraCatalogSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">LOCKET CAMERA EFFECTS & 45 AI LOOKS STUDIO</span>
            <h2 class="bento-heading">Trọn bộ Khung & Photobooth, Sự kiện, Tinh nghịch, Ngoại hình & Tạo diện mạo AI</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Đồng bộ trực tiếp vào Camera Locket: Mở khóa toàn bộ 6 nhóm hiệu ứng (45 Filter IDs) và nút vàng <strong>"+ Tạo diện mạo"</strong> với ${escapeHtml(currentAiQuota.toLocaleString("vi-VN"))} lượt.
            </p>
          </div>
          <span class="apple-pill ${cfg.isBlockedByAdmin ? "pill-rose" : "pill-gold"}" style="padding:8px 14px;font-size:12px;">
            ${cfg.isBlockedByAdmin ? "ĐANG BỊ CHẶN — ĐÃ THU HỒI TOÀN BỘ HIỆU ỨNG" : "+ TẠO DIỆN MẠO & 45 FILTER: ĐÃ MỞ KHOÁ 100%"}
          </span>
        </div>
        <div class="grid-3">
          ${cameraCatalogTilesHtml}
        </div>
      </section>

      <section id="featureEngineSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">FORCEGOLD 4.3 CAMERA, WIDGET & FEATURE GATES ENGINE</span>
            <h2 class="bento-heading">Tuỳ chỉnh Thời lượng Video, Chất lượng Ảnh, Khung Tiện ích & Công tắc Tính năng</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Điều khiển bằng công tắc trượt iOS trực quan: Thời lượng quay Video (30s/60s/90s), Bitrate Mbps, Khung sự kiện Widget và 22 cổng tính năng cao cấp.
            </p>
          </div>
        </div>

        <form method="GET" action="/setdate#featureEngineSection" style="display:flex;flex-direction:column;gap:20px;">
          <input type="hidden" name="save_advanced_features" value="1">

          <div class="grid-3">
            <div class="spec-tile">
              <label class="field-label">Thời lượng quay & đăng Video tối đa (Giây)</label>
              <input type="number" step="1" id="videoMaxDurInput" name="videoMaxDuration" value="${escapeHtml(String(cfg.videoMaxDuration || 30))}" class="apple-field">
              <div class="chip-row">
                <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='15'">15 giây</button>
                <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='30'">30 giây (Chuẩn Gold)</button>
                <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='60'">60 giây</button>
                <button type="button" class="preset-pill" onclick="document.getElementById('videoMaxDurInput').value='90'">90 giây</button>
              </div>
            </div>

            <div class="spec-tile">
              <label class="field-label">Bitrate Video (Mbps) & Kích thước Ảnh chính (px)</label>
              <div class="grid-2">
                <input type="number" step="0.1" name="videoQualityMbps" value="${escapeHtml(String(cfg.videoQualityMbps || 0.9))}" class="apple-field" placeholder="0.9 Mbps">
                <input type="number" step="10" name="uploadMainImageSize" value="${escapeHtml(String(cfg.uploadMainImageSize || 1440))}" class="apple-field" placeholder="1440 px">
              </div>
              <div style="font-size:11.5px;color:#6e6e73;margin-top:8px;">
                Chuẩn ForceGold 4.3: 0.9 Mbps & 1440px giúp gửi ảnh/video siêu nét không bị lỗi nén.
              </div>
            </div>

            <div class="spec-tile">
              <label class="field-label">Giới hạn Bạn bè tối đa & Số ngày lưu Lịch sử</label>
              <div class="grid-2">
                <input type="number" name="maxFriendsCount" value="${escapeHtml(String(cfg.maxFriendsCount || 999999))}" class="apple-field" placeholder="999999">
                <input type="number" name="historyCacheAgeDays" value="${escapeHtml(String(cfg.historyCacheAgeDays || 1000))}" class="apple-field" placeholder="1000 ngày">
              </div>
              <div style="font-size:11.5px;color:#6e6e73;margin-top:8px;">
                Mở khóa kết bạn không giới hạn (999.999) & lưu đệm lịch sử 1.000 ngày.
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div class="spec-tile">
              <span class="bento-eyebrow">CẤU HÌNH KHUNG TIỆN ÍCH SỰ KIỆN (WIDGET FRAME EVENT)</span>
              <div class="grid-2" style="margin-top:10px;">
                <div>
                  <label class="field-label">Mã sự kiện Widget (UID)</label>
                  <input type="text" name="widgetEventUid" value="${escapeHtml(cfg.widgetEventUid || "midautumn_2026")}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Vị trí hiển thị & Số ảnh tối đa</label>
                  <div class="grid-2">
                    <select name="widgetEventPlacement" class="apple-field">
                      <option value="below" ${cfg.widgetEventPlacement === "below" ? "selected" : ""}>below (Dưới)</option>
                      <option value="above" ${cfg.widgetEventPlacement === "above" ? "selected" : ""}>above (Trên)</option>
                      <option value="overlay" ${cfg.widgetEventPlacement === "overlay" ? "selected" : ""}>overlay (Đè viền)</option>
                    </select>
                    <input type="number" name="widgetEventMaxImages" value="${escapeHtml(String(cfg.widgetEventMaxImages || 5))}" class="apple-field">
                  </div>
                </div>
              </div>
              <div style="margin-top:10px;font-size:12px;color:#059669;font-weight:600;">
                💡 Để đổi ảnh viền Widget trực tiếp từ máy mà không cần link, hãy dùng ô <strong>"2. Ảnh Viền Khung Widget Locket"</strong> ở đầu trang!
              </div>
            </div>

            <div class="spec-tile">
              <span class="bento-eyebrow">CẤU HÌNH TĂNG TỐC CDN & KHÔI PHỤC CHUỖI STREAK</span>
              <div class="grid-2" style="margin-top:10px;">
                <div>
                  <label class="field-label">Miền Storage gốc</label>
                  <input type="text" name="cdnSourceDomain" value="${escapeHtml(cfg.cdnSourceDomain || "firebasestorage.googleapis.com")}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Miền CDN thay thế tốc độ cao</label>
                  <input type="text" name="cdnTargetDomain" value="${escapeHtml(cfg.cdnTargetDomain || "cdn.locketcamera.com")}" class="apple-field">
                </div>
              </div>
              <div class="grid-2" style="margin-top:12px;">
                <div>
                  <label class="field-label">Mốc tối thiểu khôi phục Streak</label>
                  <input type="number" name="streakMinRecoveryCount" value="${escapeHtml(String(cfg.streakMinRecoveryCount ?? 0))}" class="apple-field">
                </div>
                <div>
                  <label class="field-label">Kiểu hiệu ứng hiển thị Streak</label>
                  <select name="streakVisualizationStyle" class="apple-field">
                    <option value="gradient" ${cfg.streakVisualizationStyle === "gradient" ? "selected" : ""}>gradient (Dải màu Gold)</option>
                    <option value="solid" ${cfg.streakVisualizationStyle === "solid" ? "selected" : ""}>solid (Đơn sắc)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="spec-tile">
            <span class="bento-eyebrow" style="margin-bottom:12px;">BẢNG CÔNG TẮC GẠT TÍNH NĂNG CAO CẤP (iOS TOGGLE SWITCHES — BẬT/TẮT TRỰC TIẾP)</span>
            <div class="ios-switch-grid">
              ${renderIosSwitchCard("fgAppIconPicker", cfg.fgAppIconPicker !== false, "Đổi Icon Ứng Dụng", "App Icon Picker + Icon Tết", true)}
              ${renderIosSwitchCard("fgCameraRoll", cfg.fgCameraRoll !== false, "Đăng Ảnh/Video Thư Viện", "Camera Roll Upload 30s", true)}
              ${renderIosSwitchCard("fgCameraTheme", cfg.fgCameraTheme !== false, "Giao Diện Camera Gold", "Camera Theme Customizer", true)}
              ${renderIosSwitchCard("fgLocketViews", cfg.fgLocketViews !== false, "Xem Ai Đã Xem Ảnh", "Locket Views V2 Realtime", true)}
              ${renderIosSwitchCard("fgLongCaptions", cfg.fgLongCaptions !== false, "Viết Caption Dài", "Long Captions Unlimited", false)}
              ${renderIosSwitchCard("fgLongerVideo", cfg.fgLongerVideo !== false, "Quay Video Dài 30s+", "Longer Video Recording", false)}
              ${renderIosSwitchCard("fgUnlimitedFriends", cfg.fgUnlimitedFriends !== false, "Kết Bạn Không Giới Hạn", "Unlimited Friends 999.999", false)}
              ${renderIosSwitchCard("fgCustomWidgetFrames", cfg.fgCustomWidgetFrames !== false, "Khung Viền Widget", "Custom Widget Frames", true)}
              ${renderIosSwitchCard("fgStreakRecovery", cfg.fgStreakRecovery !== false, "Khôi Phục Chuỗi Streak", "Streak Recovery Miễn Phí", true)}
              ${renderIosSwitchCard("ultraWideEnabled", cfg.ultraWideEnabled !== false, "Ống Kính Góc Siêu Rộng", "Camera 0.5x Ultra-Wide", false)}
              ${renderIosSwitchCard("telephotoEnabled", cfg.telephotoEnabled !== false, "Ống Kính Telephoto", "Zoom Quang Học Sắc Nét", false)}
              ${renderIosSwitchCard("livePhotosEnabled", cfg.livePhotosEnabled !== false, "Chụp & Xem Live Photos", "Live Photos Capture", false)}
              ${renderIosSwitchCard("timeTravelRewindEnabled", cfg.timeTravelRewindEnabled !== false, "Tua Ngược Thời Gian", "Time Travel Rewind V2", false)}
              ${renderIosSwitchCard("unsendMessageEnabled", cfg.unsendMessageEnabled !== false, "Thu Hồi Tin Nhắn Chat", "Unsend Message Enabled", false)}
              ${renderIosSwitchCard("rollcallEnabled", cfg.rollcallEnabled !== false, "Tính Năng Rollcall Mới", "Rollcall & Tagging", false)}
              ${renderIosSwitchCard("disableHistoryAds", cfg.disableHistoryAds !== false, "Chặn Sạch Quảng Cáo", "History Ads & Telemetry Off", true)}
            </div>
          </div>

          <button type="submit" class="btn-action-primary">Lưu Toàn Bộ Cấu Hình Camera, Khung Widget & Công Tắc Tính Năng</button>
        </form>
      </section>

      <section id="friendsBadgeSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">AUTO-DISCOVERY & SCROLLABLE FRIEND BADGE BOX</span>
            <h2 class="bento-heading">Ô Cuộn Tự Động Get UID & Công Tắc Huy Hiệu Bạn Bè (${activeFriendsBadgeCount}/${friendsList.length})</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Toàn bộ bạn bè được gom gọn vào <strong>khung cuộn thông minh</strong> bên dưới. Bạn có thể lướt tìm và gạt công tắc Bật/Tắt huy hiệu Gold cho từng người.
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

        <form method="GET" action="/setdate#friendsBadgeSection" class="spec-tile" style="margin-bottom:20px;">
          <input type="hidden" name="friend_action" value="upsert_friend">
          <span class="bento-eyebrow">THÊM THỦ CÔNG HOẶC GHI ĐÈ TRẠNG THÁI HUY HIỆU BẠN BÈ THEO UID</span>
          <div class="grid-4" style="margin-top:10px;">
            <input type="text" name="friend_uid" class="apple-field" placeholder="Nhập UID bạn bè..." required>
            <input type="text" name="friend_user" class="apple-field" placeholder="Tên hoặc @username...">
            <select name="friend_badge" class="apple-field">
              <option value="1">Bật huy hiệu Locket Gold</option>
              <option value="0">Tắt huy hiệu Locket Gold</option>
            </select>
            <button type="submit" class="btn-action-primary">Lưu vào ô cuộn</button>
          </div>
        </form>

        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;">
          <span class="bento-eyebrow" style="margin:0;">KHUNG CUỘN DANH SÁCH BẠN BÈ ĐÃ GHI NHẬN (${friendsList.length})</span>
          <div style="width:100%;max-width:280px;">
            <input type="text" id="searchFriendBadgeInput" oninput="filterFriendsBadgeList()" class="apple-field" style="padding:9px 14px;font-size:13px;" placeholder="Tìm tên bạn bè hoặc UID...">
          </div>
        </div>

        <div id="friendsBadgeDirectoryList" class="scroll-box-grid">
          ${friendsBadgeListHtml}
        </div>
      </section>

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
                <button type="button" class="preset-pill" onclick="setD('25/11/2027')">25/11/2027 (NMS)</button>
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

      <section class="apple-bento-card">
        <div class="bento-card-head" style="margin-bottom:14px;">
          <div>
            <span class="bento-eyebrow">SCROLLABLE GOLD ACCOUNTS DIRECTORY</span>
            <h3 class="bento-heading">Ô Cuộn Danh Sách Tài Khoản Locket Gold (${goldUsersList.length} đang hoạt động / ${usersList.length} tổng)</h3>
          </div>
          <div style="width:100%;max-width:280px;">
            <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-field" style="padding:10px 14px;font-size:13px;" placeholder="Tìm @username hoặc UID...">
          </div>
        </div>
        <div id="goldDirectoryList" class="scroll-box-grid">
          ${goldDirectoryHtml}
        </div>
      </section>

    </div>
  </main>`;
}
// === KẾT THÚC PHẦN 5 / 6 — GÕ "6" ĐỂ NHẬN TIẾP PHẦN 6 / 6 (ĐÓNG FILE HOÀN CHỈNH) ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 6 OF 6)
// DÁN NỐI TIẾP NGAY DƯỚI PHẦN 5/6 ĐỂ ĐÓNG FILE HOÀN CHỈNH 100%
// ============================================================================

const Env = (() => {
    const isSurgeLoonShadowrocket = typeof $persistentStore !== "undefined";
    return {
        read(key) {
            try {
                if (isSurgeLoonShadowrocket) return $persistentStore.read(key);
                if (typeof $prefs !== "undefined") return $prefs.valueForKey(key);
            } catch (e) {}
            return null;
        },
        write(val, key) {
            try {
                if (isSurgeLoonShadowrocket) return $persistentStore.write(String(val), key);
                if (typeof $prefs !== "undefined") return $prefs.setValueForKey(String(val), key);
            } catch (e) {}
            return false;
        },
        notify(title, subtitle, body, mediaUrl) {
            try {
                const t = String(title || "LOCKET GOLD — Đã mở khoá GOLD thành công!");
                const s = String(subtitle || "");
                const b = String(body || "");
                if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
                    if (mediaUrl && (/^https?:\/\//i.test(mediaUrl) || /^data:image\//i.test(mediaUrl))) {
                        $notification.post(t, s, b, { "media-url": mediaUrl });
                    } else {
                        $notification.post(t, s, b);
                    }
                } else if (typeof $notify === "function") {
                    if (mediaUrl) $notify(t, s, b, { "media-url": mediaUrl });
                    else $notify(t, s, b);
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
                if (val.includes("Locket") || val.includes("RevenueCat") || val.includes("CFNetwork") || val.includes("Darwin")) {
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
        "amplitude.com",
        "sentry.io",
        "ingest.sentry.io"
    ];
    for (const d of adDomains) {
        if (low.includes(d)) return true;
    }
    return false;
}

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
    if (selfUid && friendUid === selfUid) return !(cfg && cfg.isBlockedByAdmin);

    const db = getLocalStore();
    if (db && db.users && db.users[friendUid]) {
        const uRec = db.users[friendUid];
        if (uRec.status === "blocked" || uRec.blocked === true || uRec.gold_active === false) return false;
    }

    const map = getFriendsBadgeMap();
    const vipCommunitySet = getCombinedNmsCommunityVipSet();
    const isCommunityVip =
        vipCommunitySet.has(String(friendUid).toLowerCase()) ||
        (meta && meta.username && vipCommunitySet.has(String(meta.username).toLowerCase()));

    const defaultEnabled = (cfg && cfg.friendsBadgeDefault !== false) || isCommunityVip;
    const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19);

    if (!map[friendUid]) {
        const uName = (meta && meta.username) || friendUid.slice(0, 10);
        const fName = (meta && meta.full_name) || uName;
        const avatar = (meta && meta.avatar) || `https://cdn2.locketcamera.com/v0/b/locket-img/o/users%2F${encodeURIComponent(friendUid)}\%2Fpublic\%2Fprofile_pic.webp?alt=media`; map[friendUid] = { uid: friendUid, username: uName, full_name: fName, avatar: avatar, badge_enabled: defaultEnabled, updated_at: nowStr }; _runtimeFriendsDirty = true; } else { let changed = false; const defaultShort = friendUid.slice(0, 10); if (meta && meta.username && meta.username !== defaultShort && meta.username !== map[friendUid].username) { map[friendUid].username = meta.username; changed = true; } if (meta && meta.full_name && meta.full_name !== defaultShort && meta.full_name !== map[friendUid].full_name) { map[friendUid].full_name = meta.full_name; changed = true; } if (meta && meta.avatar && meta.avatar !== map[friendUid].avatar) { map[friendUid].avatar = meta.avatar; changed = true; } if (changed) { map[friendUid].updated_at = nowStr; _runtimeFriendsDirty = true; } } return map[friendUid].badge_enabled !== false; }  function setSingleFriendBadgeState(friendUid, enabled, extraMeta = {}) { if (!friendUid) return null; const map = getFriendsBadgeMap(); const nowStr = new Date().toISOString().replace("T", " ").slice(0, 19); const existing = map[friendUid] \vert{}\vert{} {}; const uName = extraMeta.username \vert{}\vert{} existing.username \vert{}\vert{} friendUid.slice(0, 10); const fName = extraMeta.full_name \vert{}\vert{} existing.full_name \vert{}\vert{} uName; const avatar = extraMeta.avatar \vert{}\vert{} existing.avatar \vert{}\vert{} `https://cdn2.locketcamera.com/v0/b/locket-img/o/users\%2F${encodeURIComponent(friendUid)}%2Fpublic%2Fprofile_pic.webp?alt=media`;

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
            for (let i = 0; i < node.length; i++) walkHarvester(node[i], depth + 1);
            return;
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
        for (const k of Object.keys(node)) {
            if (typeof node[k] === "object" && node[k] !== null) walkHarvester(node[k], depth + 1);
        }
    };

    if (parsedObj && typeof parsedObj === "object") walkHarvester(parsedObj, 0);
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
        "User-Agent": "Locket/2.70.0 iOS/27.0"
    };

    Env.httpPost({
        url: "https://api.locketcamera.com/getLatestMomentV2",
        headers: commonHeaders,
        body: JSON.stringify({ data: { excluded_users: [], sync_token: null } }),
        timeout: 4
    }, (err, resp, body) => {
        if (!err && body) {
            let parsed = null;
            try { parsed = JSON.parse(body); } catch (e) {}
            autoHarvestFriendsFromRawPayload(body, parsed, cfg);
        }
        const afterCount = Object.keys(getFriendsBadgeMap()).filter(k => k !== selfUid).length;
        if (callback) {
            callback({
                ok: true,
                total: afterCount,
                added: Math.max(0, afterCount - beforeCount),
                msg: `Đã tự động quét & đồng bộ thành công ${afterCount} bạn bè từ máy chủ Locket!` }); } }); }  function isSupplementalMatchedDomain(url) { if (!url \vert{}\vert{} typeof url !== "string") return false; const low = url.toLowerCase(); for (const domain of INTEGRATED_NET_ENGINE.supplementalMatchDomains) { if (low.includes(domain.toLowerCase())) return true; } return ( low.includes("revenuecat.com") \vert{}\vert{} low.includes("rc-backup.com") \vert{}\vert{} low.includes("firebaseremoteconfig.googleapis.com") \vert{}\vert{} low.includes("firebaseremoteconfigrealtime.googleapis.com") \vert{}\vert{} low.includes("us-central1-locket-4252a.cloudfunctions.net") \vert{}\vert{} low.includes("locketcamera.com") \vert{}\vert{} low.includes("firestore.googleapis.com") ); }  function generateIntegratedMobileconfigXml(cfg) { const dohUrl = (cfg && cfg.dohServerUrl) \vert{}\vert{} INTEGRATED_NET_ENGINE.dohServerUrl; const domainsXml = INTEGRATED_NET_ENGINE.supplementalMatchDomains .map(d => `          <string>${escapeHtml(d)}</string>`)
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
      <string>${escapeHtml(INTEGRATED_NET_
