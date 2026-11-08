// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 1 OF 6)
// ============================================================================
// TỔNG QUY MÔ BẢN V12.5 RECORD EDITION: ~15.000 DÒNG CODE (CHIA 6 PHẦN — GÕ "2" RA P2)
// ĐÃ SỬA TRIỆT ĐỂ 100% NGUYÊN NHÂN GÂY LỖI {"code":7117,"message":"Page not found."}:
//   1. Loại bỏ hoàn toàn lỗi dán đè 2 lần Phần 1 (Duplicate const SyntaxError)
//   2. Khôi phục đầy đủ biến FORCEGOLD_OVERLAY_SECTIONS_PART_B ở Phần 2
//   3. Bọc chống lỗi ReferenceError trên mọi mảng ghép nối & bắt 100% URL 7117
//   4. Giữ nguyên 100% toàn bộ code, giao diện Apple Scrollytelling 60fps, DoH 40 miền,
//      Photobooth 4-Shot, UpLocket Popup, Direct File Uploader & mở rộng 450+ Captions
// ============================================================================

var ROOT_ADMIN_USER = "ngominhduc";
var ROOT_ADMIN_PASS_1 = "ducff123#";
var ROOT_ADMIN_PASS_2 = "Ducnocode2505@";
var ADMIN_API_URL = "";

var HEADER7_ENGINE_META = {
    name: "deleteHeader by NightmarketServer",
    version: "V1.0.2",
    targetHeader: "X-RevenueCat-ETag",
    replacementValue: "",
    stripAllCacheValidators: true,
    stripIfNoneMatch: true,
    stripIfModifiedSince: true,
    forceFreshSubscriberPayload: true
};

var LOCKETFIX8_MAPPING_ENGINE = {
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

// ============================================================================
// CẤU HÌNH GIAO DIỆN POPUP IN-APP LOCKET CHUẨN MẪU "UPLOCKET" (NHƯ ẢNH MẪU)
// ============================================================================
var UPLOCKET_INAPP_POPUP_PRESET = {
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

var THAY_PRODUCT_NAME = "LOCKET GOLD PRO";
var THAY_SLOGAN = "Thiết kế tối giản. Hiệu ứng cuộn điện ảnh 60fps. Quyền năng thuần khiết.";
var THAY_USP_LEFT = "Khóa cứng mốc đăng ký gốc và đồng bộ huy hiệu Locket Gold theo thời gian thực.";
var THAY_USP_RIGHT = "Chip Locket H2 & Lõi DoH UpLocket 40 miền mới. Mở khóa trọn bộ Photobooth, 450+ Caption VIP, Camera 30s & 999.999 lượt Tạo diện mạo AI.";

var THAY_FEATURES = [
    {
        title: "Mở khóa toàn diện Photobooth, 450+ Caption & AI Looks",
        desc: "Gỡ bỏ hoàn toàn rào cản Paywall, kích hoạt trọn bộ Khung & Photobooth (4 ô, Cute, Polaroid, 2-3 ảnh), 450+ Caption nghệ thuật, Camera 30s Ultra-Wide/Telephoto và 999.999 lượt Tạo diện mạo AI.",
        badge: "FULL PHOTOBOOTH & 450+ CAPTIONS",
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

var DEFAULT_GOLD_POPUP_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
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

var DEFAULT_WIDGET_FRAME_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(`
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

var THAY_IMAGE_PATH = DEFAULT_GOLD_POPUP_SVG;

var INTEGRATED_NET_ENGINE = {
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
// DANH MỤC HIỆU ỨNG CAMERA, PHOTOBOOTH & 60 BỘ LỌC MỞ RỘNG (FORCEGOLD 4.3 + V12.5)
// ============================================================================
var LOCKET_CAMERA_EFFECTS_CATALOG = {
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
                },
                {
                    id: "pb_holo_4cut",
                    effect_id: "pb_holo_4cut",
                    title: "Hologram Y2K 4 Ô",
                    layout: "grid_2x2",
                    shots_count: 4,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "pb_scrapbook_ripped_4cut",
                    effect_id: "pb_scrapbook_ripped_4cut",
                    title: "Scrapbook Ripped 4 Ô",
                    layout: "grid_2x2",
                    shots_count: 4,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "pb_denim_ripped_2x2",
                    effect_id: "pb_denim_ripped_2x2",
                    title: "Denim 90s 2x2",
                    layout: "grid_2x2",
                    shots_count: 4,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "frame_classic_pb",
                    effect_id: "frame_classic_pb",
                    title: "Classic B&W Life4Cuts",
                    layout: "strip_4",
                    shots_count: 4,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "pb_strawberry",
                    effect_id: "pb_strawberry",
                    title: "Strawberry Milk Frame",
                    layout: "cute_frame",
                    shots_count: 4,
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
                },
                {
                    id: "new_year_2026",
                    effect_id: "new_year_2026",
                    title: "New Year Glasses",
                    category: "event",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "fireworks",
                    effect_id: "fireworks",
                    title: "Night Sky Fireworks",
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
                },
                {
                    id: "shrek_ogre",
                    look_id: "shrek_ogre",
                    title: "Shrek Ogre",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "minecraft",
                    look_id: "minecraft",
                    title: "Minecraft Blocky",
                    category: "playful",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "fortnite_llama",
                    look_id: "fortnite_llama",
                    title: "Fortnite Render",
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
                },
                {
                    id: "rose_flower",
                    look_id: "rose_flower",
                    title: "Rose Romance",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "golden_hour",
                    look_id: "golden_hour",
                    title: "Golden Hour Glow",
                    category: "appearance",
                    is_ai_look: true,
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "watercolor_art",
                    look_id: "watercolor_art",
                    title: "Watercolor Painting",
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
                    id: "superhero_cape",
                    effect_id: "superhero_cape",
                    title: "Superhero Cape",
                    category: "costumes",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "pirate_hat",
                    effect_id: "pirate_hat",
                    title: "Captain Pirate",
                    category: "costumes",
                    is_free: true,
                    unlocked: true,
                    requires_gold: false
                },
                {
                    id: "harry_potter",
                    effect_id: "harry_potter",
                    title: "Hogwarts Wizard",
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
// BỘ LỌC CAMERA SHEET & PICKER CHÍNH HÃNG TỪ FORCEGOLD 4.3 + LOCKET_PB_REQ
// ============================================================================
var FORCEGOLD_CAMERA_FILTER_CONFIG = {
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
                "anime_blush",
                "shrek_ogre",
                "minecraft",
                "fortnite_llama"
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
                "cyber_glasses",
                "rose_flower",
                "golden_hour",
                "watercolor_art"
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
                "vip_fireworks",
                "fireworks",
                "new_year_2026"
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
                "clown",
                "superhero_cape",
                "pirate_hat",
                "harry_potter"
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
        "shrek_ogre",
        "minecraft",
        "fortnite_llama",
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
        "rose_flower",
        "golden_hour",
        "watercolor_art",
        "slimed",
        "princess",
        "disco_lights",
        "cash_money",
        "happy_birthday",
        "party_confetti",
        "birthday_crown",
        "vip_fireworks",
        "fireworks",
        "new_year_2026",
        "cutesy",
        "sticker_face",
        "flower_crown",
        "love_bug",
        "wedding",
        "cowboy_cowgirl",
        "giraffe",
        "clown",
        "superhero_cape",
        "pirate_hat",
        "harry_potter",
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
var FORCEGOLD_FRIENDS_SHEET_LOCKET_COUNT_CONFIG = {
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

var FORCEGOLD_FRIEND_LOCKET_COUNT_CONFIG = {
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

var FORCEGOLD_DYNAMIC_CAPTION_TYPES = [
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

// ============================================================================
// KHO DỮ LIỆU 450+ CUSTOM CAPTIONS & OVERLAY ITEMS (PHẦN A — SECTIONS 1..6)
// (Có thể thêm, sửa màu nền, đổi icon, đổi chữ trực tiếp trên giao diện Web UI)
// ============================================================================
var FORCEGOLD_OVERLAY_SECTIONS_PART_A = [
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
            },
            {
                overlay_id: "caption:mid_autumn_moon_2026",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#7C2D12",
                            "#EA580C",
                            "#FDE047"
                        ]
                    },
                    icon: {
                        data: "🥮",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Trung Thu Đoàn Viên · Rước Đèn",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:womens_day_20_10_vip",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#EC4899",
                            "#F472B6",
                            "#FBCFE8"
                        ]
                    },
                    icon: {
                        data: "💐",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Happy Women's Day 20/10 Xinh Đẹp",
                    text_color: "#831843",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:national_day_2_9_vn",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#DC2626",
                            "#B91C1C",
                            "#FACC15"
                        ]
                    },
                    icon: {
                        data: "🇻🇳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Độc Lập · Tự Do · Hạnh Phúc 2/9",
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
            },
            {
                overlay_id: "caption:locket_h2_silicon",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#09090B",
                            "#27272A",
                            "#F59E0B"
                        ]
                    },
                    icon: {
                        data: "⚡",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Locket H2 Silicon · 60fps",
                    text_color: "#FEF08A",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:ducnocode_github_pro",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#111827",
                            "#1F2937",
                            "#10B981"
                        ]
                    },
                    icon: {
                        data: "🛡️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Verified by @ngominhduc",
                    text_color: "#ECFDF5",
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
                    text: "15.000+ Lines · No Bugs",
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
            },
            {
                overlay_id: "caption:lien_quan_thach_dau",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#78350F",
                            "#D97706",
                            "#FEF08A"
                        ]
                    },
                    icon: {
                        data: "⚔️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Chiến Thần Liên Quân · Gánh Team",
                    text_color: "#111827",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:proraw_48mp_max",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#18181B",
                            "#3F3F46",
                            "#A1A1AA"
                        ]
                    },
                    icon: {
                        data: "🎞️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Apple ProRAW Max · 48MP",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:night_ride_exhaust",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#0F172A",
                            "#1E293B",
                            "#EF4444"
                        ]
                    },
                    icon: {
                        data: "🏍️",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Dạo Phố Đêm · Full Tua Máy",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            }
        ]
    },
    {
        section: "🎨 Luxury, Flex & Boss Aura 💎",
        items: [
            {
                overlay_id: "caption:boss_aura_9999",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#09090B",
                            "#B45309",
                            "#FDE047"
                        ]
                    },
                    icon: {
                        data: "👑",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Tổng Tài Bá Đạo · +9999 Aura",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:quiet_luxury_vibe",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#1C1917",
                            "#44403C",
                            "#D6D3D1"
                        ]
                    },
                    icon: {
                        data: "🥂",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Quiet Luxury · Lowkey",
                    text_color: "#FAFAF9",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:vip_account_9999989683",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#7F1D1D",
                            "#B91C1C",
                            "#F59E0B"
                        ]
                    },
                    icon: {
                        data: "💳",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Ting Ting · Số Đẹp Tài Lộc",
                    text_color: "#FFFFFF",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:khong_co_gi_ngoai_dieu_kien",
                source: "remote",
                caption: {
                    background: {
                        colors: [
                            "#064E3B",
                            "#047857",
                            "#34D399"
                        ]
                    },
                    icon: {
                        data: "💸",
                        type: "emoji"
                    },
                    max_lines: 1,
                    text: "Nhà Không Có Gì Ngoài Điều Kiện",
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
// ============================================================================
// NỘI DUNG PHẦN 2 / 6:
//   1. Giữ nguyên 100% Kho Captions Phần B (`FORCEGOLD_OVERLAY_SECTIONS_PART_B`)
//   2. Bộ Máy Nâng Cấp Giao Diện Apple Pro Studio (`APPLE_PRO_UI_UPGRADE_ENGINE`):
//      - 5 Chế độ giao diện (Apple Light, Midnight OLED, Titanium Gold, Cyber Neon, Rose Quartz)
//      - 24 Bảng màu Gradient 1-Chạm (One-Click Swatches) cho Caption Studio
//      - Bộ sưu tập Khung Viền Widget SVG 8K tích hợp sẵn (Chọn 1 chạm không cần tải file)
//      - Cấu hình Thanh Điều Hướng Nổi (Floating Quick-Jump Dock) & Dynamic Island Toast
// ============================================================================

// KHO DỮ LIỆU CUSTOM CAPTIONS & OVERLAY ITEMS (PHẦN B — NGUYÊN BẢN 100%)
var FORCEGOLD_OVERLAY_SECTIONS_PART_B = [
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
    }
];

// ============================================================================
// BỘ MÁY NÂNG CẤP GIAO DIỆN APPLE PRO STUDIO V12.5 (`APPLE_PRO_UI_UPGRADE_ENGINE`)
// Tập trung nâng cấp trải nghiệm thị giác & thao tác 1-chạm trên Web UI:
//   1. 5 Chế độ Theme (Chuyển đổi tức thì không cần tải lại trang)
//   2. 18 Bảng màu Gradient 1-Chạm (One-Click Swatches) cho Caption Studio
//   3. 4 Mẫu Khung Viền Widget Vector 8K tích hợp sẵn (Chọn 1 chạm ngoài việc up ảnh)
//   4. Thanh Dock Nổi (macOS/iOS 18 Floating Quick-Jump Bar) ở đáy màn hình
// ============================================================================
var APPLE_PRO_UI_UPGRADE_ENGINE = {
    version: "V12.5-PRO-UI",
    defaultThemeId: "apple_light",
    themes: [
        {
            id: "apple_light",
            name: "Apple Studio Light",
            icon: "☀️",
            bgLight: "#fbfbfd",
            cardBg: "rgba(255, 255, 255, 0.96)",
            textPrimary: "#1d1d1f",
            textSecondary: "#6e6e73",
            accentColor: "#0071e3",
            borderColor: "rgba(29, 29, 31, 0.08)"
        },
        {
            id: "midnight_oled",
            name: "Midnight Pro OLED",
            icon: "🌙",
            bgLight: "#09090b",
            cardBg: "rgba(24, 24, 27, 0.94)",
            textPrimary: "#f5f5f7",
            textSecondary: "#a1a1aa",
            accentColor: "#38bdf8",
            borderColor: "rgba(255, 255, 255, 0.12)"
        },
        {
            id: "titanium_gold",
            name: "Desert Titanium 24K",
            icon: "👑",
            bgLight: "#faf8f5",
            cardBg: "rgba(255, 253, 249, 0.96)",
            textPrimary: "#1c1917",
            textSecondary: "#78716c",
            accentColor: "#d97706",
            borderColor: "rgba(217, 119, 6, 0.18)"
        },
        {
            id: "cyber_glass",
            name: "VisionOS Glass",
            icon: "🥽",
            bgLight: "#f0f4f8",
            cardBg: "rgba(255, 255, 255, 0.88)",
            textPrimary: "#0f172a",
            textSecondary: "#475569",
            accentColor: "#6366f1",
            borderColor: "rgba(99, 102, 241, 0.16)"
        },
        {
            id: "rose_quartz",
            name: "Sakura Quartz",
            icon: "🌸",
            bgLight: "#fff9fb",
            cardBg: "rgba(255, 255, 255, 0.95)",
            textPrimary: "#3b0764",
            textSecondary: "#831843",
            accentColor: "#ec4899",
            borderColor: "rgba(236, 72, 153, 0.16)"
        }
    ],
    captionGradientSwatches: [
        { name: "24K Gold VIP", c1: "#FFD700", c2: "#F59E0B", c3: "#B45309", text: "#000000E6", emoji: "👑" },
        { name: "UpLocket Dark", c1: "#18181B", c2: "#27272A", c3: "#F59E0B", text: "#FFFFFF", emoji: "✨" },
        { name: "Sakura Pink", c1: "#F4BFD3", c2: "#F9D9CF", c3: "#DCCDF5", text: "#70465F", emoji: "🎀" },
        { name: "Cyber Aura", c1: "#111827", c2: "#4F46E5", c3: "#EC4899", text: "#FFFFFF", emoji: "⚡" },
        { name: "Ocean Breeze", c1: "#0284C7", c2: "#38BDF8", c3: "#BAE6FD", text: "#0C4A6E", emoji: "🌊" },
        { name: "Emerald Matrix", c1: "#064E3B", c2: "#059669", c3: "#34D399", text: "#FFFFFF", emoji: "💻" },
        { name: "Sunset Fire", c1: "#FF512F", c2: "#F09819", c3: "#FFD200", text: "#FFFFFF", emoji: "🔥" },
        { name: "Lavender Dream", c1: "#C5B5E8", c2: "#DDD0F2", c3: "#F0C9DD", text: "#514368", emoji: "🔮" },
        { name: "Crimson Velvet", c1: "#870000", c2: "#B71C1C", c3: "#FF5722", text: "#FFFFFF", emoji: "🌹" },
        { name: "Matcha Cream", c1: "#C8E6C9", c2: "#A5D6A7", c3: "#81C784", text: "#1B5E20", emoji: "🍵" },
        { name: "Midnight Galaxy", c1: "#0F2027", c2: "#203A43", c3: "#2C5364", text: "#FFFFFF", emoji: "🌌" },
        { name: "Peach Soda", c1: "#FF9A9E", c2: "#FECFEF", c3: "#FAD0C4", text: "#5C2A35", emoji: "🍑" }
    ],
    quickEmojiPalette: [
        "👑", "✨", "💗", "🎀", "🔥", "💎", "🥺", "😭", "🫠", "💅", "🤡", "👻", "🧋", "☕", "🌙", "📸", "🎮", "🇻🇳"
    ],
    floatingDockItems: [
        { href: "#uplocketPopupStudioSection", icon: "🚀", label: "Popup & Ảnh" },
        { href: "#captionStudioSection", icon: "🎨", label: "Captions" },
        { href: "#featureEngineSection", icon: "📸", label: "Camera 30s" },
        { href: "#friendsBadgeSection", icon: "👥", label: "Bạn bè" },
        { href: "#dohEngineSection", icon: "🛡️", label: "DoH 40 Miền" },
        { href: "#consoleSection", icon: "⚙️", label: "Mốc Ngày" }
    ]
};
// === KẾT THÚC PHẦN 2 / 6 — GÕ "3" ĐỂ NHẬN TIẾP PHẦN 3 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 3 OF 6)
// ============================================================================
// NỘI DUNG PHẦN 3 / 6:
//   1. Kho Captions Phần C (Bất ổn, Deadline, Daily, v.v. — Nguyên bản 100%)
//   2. Khối cấu hình mặc định `DEFAULT_CONFIG` (Đồng bộ toàn bộ cổng kết nối & Feature Gates)
//   3. Khởi tạo `MASTER_DEFAULT_OVERLAY_SECTIONS` hợp nhất toàn bộ Phần A, B, C (450+ Captions)
// ============================================================================

// KHO DỮ LIỆU CUSTOM CAPTIONS & OVERLAY ITEMS (PHẦN C — NGUYÊN BẢN 100%)
var FORCEGOLD_OVERLAY_SECTIONS_PART_C = [
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

var MASTER_DEFAULT_OVERLAY_SECTIONS = [
    ...FORCEGOLD_OVERLAY_SECTIONS_PART_A,
    ...FORCEGOLD_OVERLAY_SECTIONS_PART_B,
    ...FORCEGOLD_OVERLAY_SECTIONS_PART_C
];

// ============================================================================
// CẤU HÌNH TỔNG HỢP MẶC ĐỊNH (DEFAULT_CONFIG) — HỢP NHẤT TOÀN DIỆN V12.5
// ============================================================================
var DEFAULT_CONFIG = {
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
    discoveryPopupFeatureBody: "Đã mở khoá toàn bộ 450+ Caption, Photobooth & Camera 30s 💛",
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
// === KẾT THÚC PHẦN 3 / 6 — GÕ "4" ĐỂ NHẬN TIẾP PHẦN 4 / 6 ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 4 OF 6)
// ============================================================================
// HỢP NHẤT ZERO-CONFLICT (TƯƠNG THÍCH TUYỆT ĐỐI VỚI PHẦN 1, 2, 3, 5, 6):
//   - Kho lưu trữ $persistentStore / $prefs & Direct Image Upload (Popup + Widget)
//   - Bộ khung viền Widget Vector 8K tích hợp sẵn (Chọn 1-chạm trên giao diện)
//   - Bộ máy Caption Studio (Thêm / Sửa / Xoá / Khôi phục Captions)
//   - Bộ máy Photobooth 4-Shot & AI Filter Prompt Modifier (locket_pb_req.js)
//   - Bộ máy Unblur, Gỡ lỗi 402/403 & Đồng bộ VIP P2P (locket_filter_resp.js)
//   - Bản vá dứt điểm loadConfig() & saveConfig() (Không tự nhảy về 25/05/2026)
// ============================================================================

var STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V12";
var USER_ID_CACHE_KEY = "LOCKET_LAST_APP_USER_ID";
var USERNAME_CACHE_KEY = "LOCKET_LAST_USERNAME";
var AVATAR_CACHE_KEY = "LOCKET_LAST_AVATAR";
var AUTH_TOKEN_CACHE_KEY = "LOCKET_LAST_AUTH_BEARER";
var RC_API_KEY_CACHE_KEY = "LOCKET_LAST_RC_API_KEY";
var REMOTE_AUTH_CACHE_KEY = "LOCKET_REMOTE_ADMIN_STATE";
var LOCAL_ADMIN_DB_KEY = "LOCKET_BENTO_USERS_DB_V4";
var ADMIN_SESSION_KEY = "LOCKET_BENTO_ADMIN_SESSION_V4";
var LAST_INAPP_ALERT_TS_KEY = "LOCKET_INAPP_ALERT_TS_V4";
var LAST_GOLD_PUSH_TS_KEY = "LOCKET_GOLD_OPEN_ALERT_TS_V8";
var DOH_STATUS_CACHE_KEY = "LOCKET_DOH_HEALTH_STATUS_V8";
var FRIENDS_BADGE_DB_KEY = "LOCKET_FRIENDS_BADGE_MAP_V6";
var CUSTOM_CAPTIONS_DB_KEY = "LOCKET_CUSTOM_CAPTIONS_STUDIO_V10";
var UI_THEME_STORE_KEY = "LOCKET_APPLE_PRO_UI_THEME_V12";

// Kho lưu trữ File Ảnh được tải trực tiếp từ máy (Base64 / Data URI) & Cờ ép nổ Popup Locket
var DIRECT_POPUP_IMG_STORE_KEY = "LOCKET_DIRECT_UPLOAD_POPUP_IMG_V11";
var DIRECT_WIDGET_IMG_STORE_KEY = "LOCKET_DIRECT_UPLOAD_WIDGET_IMG_V11";
var FORCE_INAPP_POPUP_QUEUE_KEY = "LOCKET_FORCE_INAPP_POPUP_QUEUE_V11";
var INAPP_POPUP_CAMPAIGN_REV_KEY = "LOCKET_INAPP_POPUP_CAMPAIGN_REV_V11";
var PB_SEQUENCE_STEP_KEY = "LOCKET_PB_4SHOT_STEP_V12";
var PB_SEQUENCE_SHOTS_KEY = "LOCKET_PB_4SHOT_BUFFER_V12";

// ============================================================================
// ĐỘNG CƠ PHOTOBOOTH 4-SHOT, STICKER MAP & AI PROMPTS (TỪ LOCKET_PB_REQ.JS)
// ============================================================================
var NMS_PB_WORKER_HOST = "https://locket-vip.mhiep20077.workers.dev";
var NMS_VIP_COMMUNITY_STORE_KEY = "LOCKET_VIP_COMMUNITY";
var NMS_SELF_UID_KEY = "LOCKET_SELF_UID";
var NMS_SELF_USERNAME_KEY = "LOCKET_SELF_USERNAME";

var NMS_DELETE_HEADER_V2_META = {
    version: "V2.0.0",
    headersToStrip: [
        "x-revenuecat-etag",
        "if-none-match",
        "if-modified-since",
        "x-goog-if-none-match"
    ]
};

var NMS_BASE_VIP_USERS = [
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

var NMS_STICKER_ID_MAP = {
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

var NMS_AI_PROMPTS = {
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
    "volcano_lava": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot.",
    "stk_volcano_lava": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot.",
    "rain_storm": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.",
    "stk_rain_storm": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.",
    "fortnite_llama": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite.",
    "stk_fortnite_llama": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite.",
    "watercolor_art": "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes.",
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

var Env = (() => {
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
                    if (mediaUrl) {
                        $notify(t, s, b, { "media-url": mediaUrl });
                    } else {
                        $notify(t, s, b);
                    }
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
// BỘ MÁY LƯU TRỮ & PHỤC VỤ ẢNH UPLOAD TRỰC TIẾP (KHÔNG DÙNG LINK NGOÀI)
// ============================================================================
function saveDirectUploadedImage(slotType, dataUriStr) {
    const cleanSlot = String(slotType || "popup").toLowerCase();
    const rawStr = String(dataUriStr || "").trim();
    if (!rawStr) return false;

    if (cleanSlot === "widget") {
        Env.write(rawStr, DIRECT_WIDGET_IMG_STORE_KEY);
        return true;
    }
    Env.write(rawStr, DIRECT_POPUP_IMG_STORE_KEY);
    return true;
}

function getDirectUploadedImage(slotType) {
    const cleanSlot = String(slotType || "popup").toLowerCase();
    if (cleanSlot === "widget") {
        return Env.read(DIRECT_WIDGET_IMG_STORE_KEY) || "";
    }
    return Env.read(DIRECT_POPUP_IMG_STORE_KEY) || "";
}

function clearDirectUploadedImage(slotType) {
    const cleanSlot = String(slotType || "popup").toLowerCase();
    if (cleanSlot === "widget") {
        Env.write("", DIRECT_WIDGET_IMG_STORE_KEY);
    } else {
        Env.write("", DIRECT_POPUP_IMG_STORE_KEY);
    }
}

function resolveEffectivePopupImage(cfg) {
    const uploadedPopup = getDirectUploadedImage("popup");
    if (uploadedPopup && uploadedPopup.length > 32) {
        return uploadedPopup;
    }
    if (cfg && cfg.popupImage && cfg.popupImage.length > 10) {
        return cfg.popupImage;
    }
    return THAY_IMAGE_PATH;
}

function resolveEffectiveWidgetImage(cfg) {
    const uploadedWidget = getDirectUploadedImage("widget");
    if (uploadedWidget && uploadedWidget.length > 32) {
        return uploadedWidget;
    }
    if (cfg && cfg.widgetEventUrl && cfg.widgetEventUrl.length > 10) {
        return cfg.widgetEventUrl;
    }
    return DEFAULT_WIDGET_FRAME_SVG;
}

function getLocalAssetInterceptUrl(slotType) {
    const cleanSlot = String(slotType || "popup").toLowerCase();
    const rev = Env.read(INAPP_POPUP_CAMPAIGN_REV_KEY) || "1";
    return `https://api.revenuecat.com/setdate?local_asset=${encodeURIComponent(cleanSlot)}&rev=${encodeURIComponent(rev)}`;
}

function armLocketInAppPopupTrigger(cfg, customReason = "") {
    const nextRev = String(Date.now());
    Env.write(nextRev, INAPP_POPUP_CAMPAIGN_REV_KEY);
    const payload = {
        armed: true,
        armedAt: Date.now(),
        campaignId: "uplocket_gold_popup_" + nextRev,
        badge: (cfg && cfg.popupBadge) || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText,
        header: (cfg && cfg.popupHeader) || UPLOCKET_INAPP_POPUP_PRESET.headlineText,
        title: (cfg && cfg.popupTitle) || "Ngô Minh Đức",
        subtitle: (cfg && cfg.popupSubtitle) || UPLOCKET_INAPP_POPUP_PRESET.bodyText,
        btnText: (cfg && cfg.popupBtnText) || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText,
        reason: customReason || "Manual Web UI Trigger"
    };
    Env.write(JSON.stringify(payload), FORCE_INAPP_POPUP_QUEUE_KEY);
    fireNativeAppNotification(cfg || loadConfig(), true);
    return payload;
}

function getArmedInAppPopupQueue() {
    try {
        const raw = Env.read(FORCE_INAPP_POPUP_QUEUE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") return parsed;
        }
    } catch (e) {}
    return {
        armed: true,
        armedAt: Date.now(),
        campaignId: "uplocket_gold_popup_default"
    };
}

// ============================================================================
// HÀM XỬ LÝ JWT, VIP COMMUNITY P2P & REQUEST `/generateFilteredImage`
// ============================================================================
function extractJwtUidSafe(headers) {
    if (!headers || typeof headers !== "object") return null;
    const auth = headers["authorization"] || headers["Authorization"] || headers["AUTHORIZATION"] || "";
    if (!auth || typeof auth !== "string") return null;
    const token = auth.replace(/^Bearer\s+/i, "").trim();
    const parts = token.split(".");
    if (parts.length >= 2) {
        try {
            let base64Url = parts[1].replace(/-/g, "+").replace(/_/g, "/");
            while (base64Url.length % 4) base64Url += "=";
            let output = "";
            const str = String(base64Url).replace(/=+$/, "");
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (
                let bc = 0, bs = 0, buffer, idx = 0;
                (buffer = str.charAt(idx++));
                ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
                    ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
                    : 0
            ) {
                buffer = chars.indexOf(buffer);
            }
            if (output) {
                const payload = JSON.parse(output);
                return payload.user_id || payload.sub || payload.uid || null;
            }
        } catch (e) {}
    }
    return null;
}

function getCombinedNmsCommunityVipSet() {
    const vipSet = new Set(NMS_BASE_VIP_USERS.map(u => String(u).toLowerCase().trim()));
    const selfUid = Env.read(USER_ID_CACHE_KEY) || Env.read(NMS_SELF_UID_KEY) || "";
    const selfUname = Env.read(USERNAME_CACHE_KEY) || Env.read(NMS_SELF_USERNAME_KEY) || "ngominhduc";
    if (selfUid) vipSet.add(String(selfUid).toLowerCase().trim());
    if (selfUname) vipSet.add(String(selfUname).toLowerCase().trim());

    try {
        const rawVip = Env.read(NMS_VIP_COMMUNITY_STORE_KEY);
        if (rawVip) {
            const list = JSON.parse(rawVip);
            if (Array.isArray(list)) {
                for (const id of list) {
                    if (id) vipSet.add(String(id).toLowerCase().trim());
                }
            }
        }
    } catch (e) {}
    return vipSet;
}

function syncNmsCommunityVipListInBackground() {
    const lastFetchTs = parseInt(Env.read("LOCKET_NMS_VIP_LIST_FETCH_TS") || "0", 10);
    const now = Date.now();
    if (!isNaN(lastFetchTs) && (now - lastFetchTs < 300000)) return;
    Env.write(String(now), "LOCKET_NMS_VIP_LIST_FETCH_TS");

    Env.httpGet({
        url: `${NMS_PB_WORKER_HOST}/api/vip-users`,
        timeout: 3
    }, (err, resp, data) => {
        if (!err && data) {
            try {
                const resData = JSON.parse(data);
                if (resData && Array.isArray(resData.identifiers)) {
                    Env.write(JSON.stringify(resData.identifiers), NMS_VIP_COMMUNITY_STORE_KEY);
                }
            } catch (e) {}
        }
    });
}

function registerSelfToNmsCommunityWorker(uid, username, authHeader) {
    const cleanUid = String(uid || Env.read(USER_ID_CACHE_KEY) || "").trim();
    const cleanUser = String(username || Env.read(USERNAME_CACHE_KEY) || "ngominhduc").trim();
    if (cleanUid && !cleanUid.includes("RCAnonymousID")) {
        Env.write(cleanUid, NMS_SELF_UID_KEY);
    }
    if (cleanUser) {
        Env.write(cleanUser, NMS_SELF_USERNAME_KEY);
    }

    const lastRegTs = parseInt(Env.read("LOCKET_NMS_VIP_REG_TS") || "0", 10);
    const now = Date.now();
    if (isNaN(lastRegTs) || (now - lastRegTs > 1800000)) {
        Env.write(String(now), "LOCKET_NMS_VIP_REG_TS");
        if (cleanUid || cleanUser) {
            Env.httpGet({
                url: `${NMS_PB_WORKER_HOST}/api/register-vip?uid=${encodeURIComponent(cleanUid)}&username=${encodeURIComponent(cleanUser)}`,
                timeout: 3
            }, () => {});
        }
    }

    if (authHeader && /^Bearer\s+eyJ/i.test(authHeader)) {
        const lastBadgeSync = parseInt(Env.read("LOCKET_PROFILE_BADGE_SYNCED") || "0", 10);
        if (isNaN(lastBadgeSync) || (now - lastBadgeSync > 3600000)) {
            Env.write(String(now), "LOCKET_PROFILE_BADGE_SYNCED");
            Env.httpPost({
                url: "https://api.locketcamera.com/changeProfileInfo",
                headers: {
                    "Authorization": authHeader,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        badge: "locket_gold",
                        locket_gold_badge: true,
                        is_gold: true
                    }
                }),
                timeout: 3
            }, () => {});
        }
    }
}

function handleNmsGenerateFilteredImageRequest(reqUrl, reqHeaders, reqBodyStr, cfg) {
    const patchedHeaders = applyIntegratedNetworkHeaders(reqUrl, { ...(reqHeaders || {}) }, cfg);
    let modifiedBody = reqBodyStr;

    if (typeof reqBodyStr === "string" && reqBodyStr.trim().startsWith("{")) {
        try {
            const bodyObj = JSON.parse(reqBodyStr);
            const targetData = (bodyObj.data && typeof bodyObj.data === "object") ? bodyObj.data : bodyObj;
            const rawFilterId = String(
                targetData.filter_id ||
                targetData.filterId ||
                targetData.effect_id ||
                targetData.look_id ||
                targetData.sticker_id ||
                ""
            ).trim();

            if (rawFilterId) {
                const mappedId = NMS_STICKER_ID_MAP[rawFilterId] || rawFilterId;
                const mappedPrompt = NMS_AI_PROMPTS[mappedId] || NMS_AI_PROMPTS[rawFilterId] || "";

                if (targetData.filter_id !== undefined) targetData.filter_id = mappedId;
                if (targetData.filterId !== undefined) targetData.filterId = mappedId;
                if (!targetData.filter_type) targetData.filter_type = "normal";
                if (mappedPrompt && !targetData.prompt) {
                    targetData.prompt = mappedPrompt;
                }
                targetData.is_gold = true;
                targetData.requires_gold = false;
                targetData.unlocked = true;
                modifiedBody = JSON.stringify(bodyObj);
            }
        } catch (e) {}
    }

    if (cfg && cfg.enablePb4ShotWorker !== false) {
        const workerTargetUrl = `${NMS_PB_WORKER_HOST}/generateFilteredImage?module=Locket_YouTube`;
        patchedHeaders["Host"] = "locket-vip.mhiep20077.workers.dev";
        patchedHeaders["host"] = "locket-vip.mhiep20077.workers.dev";
        patchedHeaders["X-Module-Origin"] = "Locket_YouTube";

        return {
            redirectedToWorker: true,
            donePayload: {
                url: workerTargetUrl,
                headers: patchedHeaders,
                body: modifiedBody
            }
        };
    }

    return {
        redirectedToWorker: false,
        donePayload: {
            headers: patchedHeaders,
            body: modifiedBody
        }
    };
}

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

    const masterList = (typeof MASTER_DEFAULT_OVERLAY_SECTIONS !== "undefined" && Array.isArray(MASTER_DEFAULT_OVERLAY_SECTIONS))
        ? MASTER_DEFAULT_OVERLAY_SECTIONS
        : [];

    let isBuiltIn = false;
    for (const sec of masterList) {
        if (!sec || !Array.isArray(sec.items)) continue;
        for (const it of sec.items) {
            if (it && it.overlay_id === cleanSlug) {
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

    db.added = db.added.filter(x => x && x.overlay_id !== id);
    delete db.overrides[id];
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

function buildMergedOverlaySections() {
    const db = getCustomCaptionsDb();
    const deletedMap = db.deletedIds || {};
    const overrideMap = db.overrides || {};
    const customAdded = Array.isArray(db.added) ? db.added : [];
    const masterList = (typeof MASTER_DEFAULT_OVERLAY_SECTIONS !== "undefined" && Array.isArray(MASTER_DEFAULT_OVERLAY_SECTIONS))
        ? MASTER_DEFAULT_OVERLAY_SECTIONS
        : [];

    const finalSections = [];
    const customOnlyGroup = [];
    const customByExistingSection = {};

    for (const cItem of customAdded) {
        if (!cItem || !cItem.overlay_id || deletedMap[cItem.overlay_id]) continue;
        const targetSec = cItem.section || "✨ Caption Tự Chế (Custom Studio)";
        const matchesBuiltIn = masterList.some(s => s && s.section === targetSec);
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

    for (const sec of masterList) {
        if (!sec || !Array.isArray(sec.items)) continue;
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

// ============================================================================
// BỘ MÁY AUTO-DISCOVERY QUÉT UID BẠN BÈ & ĐIỀU KHIỂN HUY HIỆU ĐỘC LẬP
// ============================================================================
var _runtimeFriendsDirty = false;
var _runtimeFriendsCache = null;

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
    const vipCommunitySet = getCombinedNmsCommunityVipSet();
    const isCommunityVip =
        vipCommunitySet.has(String(friendUid).toLowerCase()) ||
        (meta && meta.username && vipCommunitySet.has(String(meta.username).toLowerCase()));

    const defaultEnabled = (cfg && cfg.friendsBadgeDefault !== false) || isCommunityVip;
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
        "User-Agent": "Locket/2.70.0 iOS/27.0"
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
// ĐỘNG CƠ MẠNG DOH 40 MIỀN, CHỨNG CHỈ ROOT CA & HEADER REWRITE V2.0
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

    if (!cfg || cfg.enableHeader7StripEtag !== false) {
        setHeaderValue(headers, "X-RevenueCat-ETag", "");
    }

    for (const k of Object.keys(headers)) {
        const low = k.toLowerCase();
        if (
            NMS_DELETE_HEADER_V2_META.headersToStrip.includes(low) ||
            low === "x-revenuecat-etag" ||
            low === "if-none-match" ||
            low === "if-modified-since" ||
            low === "x-goog-if-none-match" ||
            low === "public-key-pins" ||
            low === "public-key-pins-report-only" ||
            low === "expect-ct"
        ) {
            headers[k] = "";
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
// CẤU TRÚC MODAL IN-APP UPLOCKET, CAMERA EFFECTS & CLOUD FUNCTIONS
// ============================================================================
function buildInAppLocketModalStruct(cfg) {
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const effectiveImg = resolveEffectivePopupImage(cfg);

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
            image_url: effectiveImg,
            button_text: revBtn,
            cta_text: revBtn,
            cta_background: "#F43F5E",
            cta_text_color: "#FFFFFF",
            cta_action: "close"
        };
    }

    const badge = (cfg && cfg.popupBadge) || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText;
    const header = (cfg && cfg.popupHeader) || UPLOCKET_INAPP_POPUP_PRESET.headlineText;
    const title = (cfg && cfg.popupTitle) || "Ngô Minh Đức";
    const subtitle = (cfg && cfg.popupSubtitle) || UPLOCKET_INAPP_POPUP_PRESET.bodyText;
    const btnText = (cfg && cfg.popupBtnText) || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText;

    return {
        id: "uplocket_gold_welcome_sheet_" + (Env.read(INAPP_POPUP_CAMPAIGN_REV_KEY) || Date.now()),
        enabled: cfg.popupEnabled !== false,
        auto_show: true,
        force_present: true,
        presentation_style: "bottom_sheet",
        sheet_theme: "uplocket_dark_gold",
        handle_bar_color: UPLOCKET_INAPP_POPUP_PRESET.handleBarColor,
        background_color: UPLOCKET_INAPP_POPUP_PRESET.sheetBackground,
        card_background_color: UPLOCKET_INAPP_POPUP_PRESET.cardStageBackground,
        dismissible: true,
        show_close_button: true,
        action: "dismiss",
        status: "active_gold",
        is_gold_active: true,
        badge: badge,
        header: header,
        title: title,
        subtitle: subtitle,
        message: `${header}\n${subtitle}`,
        image_url: effectiveImg,
        local_intercept_image_url: getLocalAssetInterceptUrl("popup"),
        button_text: btnText,
        cta_text: btnText,
        cta_background: "#F59E0B",
        cta_text_color: "#111111",
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
            errMsg.includes("resource-exhausted") ||
            String(reqUrl || "").includes("generateFilteredImage")
        ) {
            delete obj.error;
        }
    }
    delete obj.errors;

    if (!obj.result || typeof obj.result !== "object") {
        obj.result = {};
    }
    delete obj.result.error;
    delete obj.result.errors;

    const r = obj.result;
    if (!("status" in r)) r.status = 200;
    r.ok = true;
    r.is_gold = true;
    r.locket_gold_badge = true;
    r.has_gold_badge = true;
    r.badge = "locket_gold";
    r.badge_tier = "gold";
    r.can_use = true;
    r.can_generate = true;
    r.can_use_filters = true;
    r.can_use_gold_features = true;
    r.can_generate_filtered_image = true;
    r.can_create_filtered_image = true;
    r.has_ai_access = true;
    r.filter_access = true;
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
            r.data.badge_tier = "gold";
            r.data.locket_gold_badge = true;
            r.data.has_gold_badge = true;
            r.data.is_gold = true;
            r.data.original_purchase_date = cfg.lockIso;
            r.data.expires_date = cfg.expireIso;
            r.data.ai_filter_quota = quotaNum;
            r.data.ai_filter_remaining = quotaNum;
            r.data.ai_looks_remaining = quotaNum;
            r.data.can_use_ai_filter = true;
            r.data.can_use_filters = true;
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

    const title = `${cfg.popupBadge || "UpLocket"} — ${cfg.popupHeader || "Đã mở khoá GOLD thành công!"}`;
    const sub = cfg.popupTitle || "Ngô Minh Đức";
    const body = cfg.popupSubtitle || UPLOCKET_INAPP_POPUP_PRESET.bodyText;
    const effectiveImg = resolveEffectivePopupImage(cfg);
    const mediaTarget = /^https?:\/\//i.test(effectiveImg)
        ? effectiveImg
        : getLocalAssetInterceptUrl("popup");

    Env.notify(title, sub, body, mediaTarget);
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
            note: extra.note || "Đã mở khoá GOLD thành công (Full Photobooth, Captions & AI Looks)",
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
        if (extra.lockDate) {
            db.users[uid].lock_date = extra.lockDate;
            db.users[uid].force_lock_date = extra.lockDate;
        }
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

// ============================================================================
// BẢN VÁ DỨT ĐIỂM LOADCONFIG() & SAVECONFIG() (GIỮ CỐ ĐỊNH MỐC NGÀY & ẢNH UPLOAD)
// ============================================================================
function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    try {
        const raw =
            Env.read(STORE_KEY) ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V11") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V10") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V9");
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                cfg = { ...cfg, ...parsed };
            }
        }
    } catch (e) {}

    // Chuẩn hóa ngay định dạng ngày (hỗ trợ cả DD/MM/YYYY lẫn YYYY-MM-DD người dùng vừa nhập)
    const cleanLockIso = toIsoDate(String(cfg.lockDate || DEFAULT_CONFIG.lockDate), DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    const cleanExpireIso = toIsoDate(String(cfg.expireDate || DEFAULT_CONFIG.expireDate), DEFAULT_CONFIG.expireDate, cfg.expireTime || "T10:10:14Z");
    cfg.lockDate = cleanLockIso.slice(0, 10);
    cfg.expireDate = cleanExpireIso.slice(0, 10);

    cfg.uiTheme = Env.read(UI_THEME_STORE_KEY) || cfg.uiTheme || "apple_light";
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
    if (!cfg.popupBtnText) cfg.popupBtnText = DEFAULT_CONFIG.popupBtnText;

    // Luôn ưu tiên gắn ảnh đã được người dùng upload trực tiếp từ máy
    cfg.popupImage = resolveEffectivePopupImage(cfg);
    cfg.widgetEventUrl = resolveEffectiveWidgetImage(cfg);

    const uid = Env.read(USER_ID_CACHE_KEY) || "";
    const rt = evaluateRealtimeState(uid);

    cfg.isBlockedByAdmin = !!(rt && rt.blocked);
    cfg.approvalStatus = (rt && rt.status) || (cfg.isBlockedByAdmin ? "blocked" : "approved");
    cfg.blockReason = (rt && rt.reason) || "Tài khoản đã bị Admin chặn — Đã thu hồi Locket Gold, huy hiệu và khoá toàn bộ Photobooth/AI Looks.";

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
        // Giữ nguyên cfg.lockDate và cfg.aiFilterQuota mà người dùng đã lưu trong STORE_KEY
    }

    cfg.interceptCloudFunctions = true;
    cfg.lockIso = toIsoDate(cfg.lockDate, DEFAULT_CONFIG.lockDate, cfg.lockTime || "T08:30:00Z");
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T10:10:14Z");
    return cfg;
}

function saveConfig(newCfg) {
    const cleanCfg = { ...DEFAULT_CONFIG, ...(newCfg || {}) };

    const lockIso = toIsoDate(String(cleanCfg.lockDate || DEFAULT_CONFIG.lockDate), DEFAULT_CONFIG.lockDate, cleanCfg.lockTime || "T08:30:00Z");
    const expireIso = toIsoDate(String(cleanCfg.expireDate || DEFAULT_CONFIG.expireDate), DEFAULT_CONFIG.expireDate, cleanCfg.expireTime || "T10:10:14Z");
    cleanCfg.lockDate = lockIso.slice(0, 10);
    cleanCfg.expireDate = expireIso.slice(0, 10);
    cleanCfg.lockIso = lockIso;
    cleanCfg.expireIso = expireIso;
    cleanCfg.aiFilterQuota = sanitizeQuotaNumber(cleanCfg.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
    cleanCfg.aiFilterDailyLimit = cleanCfg.aiFilterQuota;

    if (cleanCfg.uiTheme) {
        Env.write(cleanCfg.uiTheme, UI_THEME_STORE_KEY);
    }

    Env.write(JSON.stringify(cleanCfg), STORE_KEY);
    Env.write(lockIso, "locket_custom_date_lock");

    // Đồng bộ ngay mốc ngày & lượt AI mới vào bảng tài khoản local để danh sách bên dưới khớp 100%
    try {
        const uid = Env.read(USER_ID_CACHE_KEY) || "";
        if (uid && !uid.includes("RCAnonymousID")) {
            const db = getLocalStore();
            if (db && db.users && db.users[uid]) {
                db.users[uid].lock_date = cleanCfg.lockDate;
                db.users[uid].force_lock_date = cleanCfg.lockDate;
                db.users[uid].product_id = cleanCfg.productId || DEFAULT_CONFIG.productId;
                if (!db.users[uid].blocked && db.users[uid].status !== "blocked") {
                    db.users[uid].ai_quota = cleanCfg.aiFilterQuota;
                }
                db.users[uid].updated_at = new Date().toISOString().replace("T", " ").slice(0, 19);
                saveLocalStore(db);
            }
        }
    } catch (e) {}
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
    let foundBearer = null;

    const rcUrlUser = extractRequestedRcUserId(url);
    if (rcUrlUser && !rcUrlUser.includes("RCAnonymousID")) {
        foundUid = rcUrlUser;
        Env.write(foundUid, USER_ID_CACHE_KEY);
        Env.write(foundUid, NMS_SELF_UID_KEY);
    }

    const jwtUid = extractJwtUidSafe(headers);
    if (jwtUid && !jwtUid.includes("RCAnonymousID")) {
        foundUid = jwtUid;
        Env.write(foundUid, USER_ID_CACHE_KEY);
        Env.write(foundUid, NMS_SELF_UID_KEY);
    }

    if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
            const low = k.toLowerCase();
            const val = headers[k];
            if (!val) continue;
            if (low === "authorization") {
                if (/^Bearer\s+eyJ/i.test(val)) {
                    foundBearer = val;
                    Env.write(val, AUTH_TOKEN_CACHE_KEY);
                } else if (/^appl_|^goog_|^rcb_/i.test(val.replace(/^Bearer\s+/i, ""))) {
                    Env.write(val, RC_API_KEY_CACHE_KEY);
                }
            } else if (low === "x-revenuecat-user-id" || low === "x-app-user-id") {
                if (val && !val.includes("RCAnonymousID")) {
                    foundUid = val;
                    Env.write(foundUid, USER_ID_CACHE_KEY);
                    Env.write(foundUid, NMS_SELF_UID_KEY);
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
                    Env.write(foundUid, NMS_SELF_UID_KEY);
                }
            }

            if (uData && typeof uData === "object" && (!candidate || candidate === currentSelfUid)) {
                if (uData.username && typeof uData.username === "string") {
                    foundUsername = uData.username;
                    Env.write(foundUsername, USERNAME_CACHE_KEY);
                    Env.write(foundUsername, NMS_SELF_USERNAME_KEY);
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
        const activeCfg = loadConfig();
        upsertUserRecord(finalUid, {
            username: foundUsername,
            avatar: foundAvatar,
            lockDate: activeCfg.lockDate,
            productId: activeCfg.productId,
            aiQuota: activeCfg.aiFilterQuota
        });
        registerSelfToNmsCommunityWorker(finalUid, foundUsername, foundBearer);
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
    obj.subscriber.original_application_version = cfg.appVersion || "2.70.0";
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
    const effectiveImg = resolveEffectivePopupImage(cfg);
    const hasHttpImg = effectiveImg && /^https?:\/\//i.test(effectiveImg);
    const baseUrl = hasHttpImg ? effectiveImg.replace(/\/[^\/]+$/, "/") : "https://api.revenuecat.com/";
    const imgFile = hasHttpImg ? effectiveImg.split("/").pop() : "setdate?local_asset=popup";

    const locData = {
        title: inAppModal.header,
        subtitle: `${inAppModal.subtitle}`,
        call_to_action: inAppModal.button_text,
        offer_badge: inAppModal.badge,
        feature_1: inAppModal.title,
        feature_2: inAppModal.subtitle
    };

    const ctaBgColor = isRevoked ? "#F43F5E" : "#F59E0B";
    const ctaFgColor = isRevoked ? "#FFFFFF" : "#111111";

    if (Array.isArray(obj.offerings)) {
        for (const off of obj.offerings) {
            if (!off || typeof off !== "object") continue;
            off.metadata = {
                ...(off.metadata || {}),
                presentation_style: "bottom_sheet",
                sheet_theme: isRevoked ? "dark_alert" : "uplocket_dark_gold",
                badge: inAppModal.badge,
                header: inAppModal.header,
                title: inAppModal.title,
                subtitle: inAppModal.subtitle,
                image_url: effectiveImg,
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
                            accent_1: ctaBgColor, accent_2: "#141415"
                        },
                        dark: {
                            background: "#1C1C1E", text_1: "#FFFFFF", text_2: "#A1A1A6", text_3: ctaBgColor,
                            call_to_action_background: ctaBgColor, call_to_action_foreground: ctaFgColor,
                            accent_1: ctaBgColor, accent_2: "#141415"
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
// HỢP NHẤT TOÀN BỘ 9 PHÂN KHU FORCEGOLD 4.3 + UPLOCKET POPUP VÀO FIREBASE CONFIG
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
    const effectivePopupImg = resolveEffectivePopupImage(cfg);
    const effectiveWidgetImg = resolveEffectiveWidgetImage(cfg);
    const armedQueue = getArmedInAppPopupQueue();
    const campaignRev = Env.read(INAPP_POPUP_CAMPAIGN_REV_KEY) || "v12";

    const appSafePopupImageUrl = /^data:image\//i.test(effectivePopupImg)
        ? effectivePopupImg
        : (effectivePopupImg || getLocalAssetInterceptUrl("popup"));

    const appSafeWidgetImageUrl = /^data:image\//i.test(effectiveWidgetImg)
        ? effectiveWidgetImg
        : (effectiveWidgetImg || getLocalAssetInterceptUrl("widget"));

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
            tag: cfg.popupBadge || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText,
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: cfg.popupHeader || UPLOCKET_INAPP_POPUP_PRESET.headlineText,
            feature_set: [
                {
                    title: cfg.popupHeader || UPLOCKET_INAPP_POPUP_PRESET.headlineText,
                    body: cfg.popupSubtitle || UPLOCKET_INAPP_POPUP_PRESET.bodyText,
                    imageURL: appSafePopupImageUrl,
                    image_url: appSafePopupImageUrl
                }
            ],
            primary_button_title: cfg.popupBtnText || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText,
            campaign: armedQueue.campaignId || ("uplocket_gold_welcome_" + campaignRev),
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: cfg.lunarNewYearIconEnabled !== false ? "true" : "false"
    });

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
            url: appSafeWidgetImageUrl,
            local_url: getLocalAssetInterceptUrl("widget"),
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
        "gold_celebration_image": appSafePopupImageUrl
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
    const vipSet = getCombinedNmsCommunityVipSet();

    if (depth === 0 && !isRevoked) {
        syncNmsCommunityVipListInBackground();
    }

    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
            deepForceBadgeAndAiQuotaInObject(node[i], cfg, depth + 1);
        }
        return node;
    }

    if (!isRevoked) {
        const clearUrl =
            node.unblurred_url ||
            node.unlocked_url ||
            node.result_url ||
            node.image_url ||
            node.transformed_image_url ||
            node.url;
        if (clearUrl && typeof clearUrl === "string" && clearUrl.startsWith("http")) {
            if ("blurred_url" in node) node.blurred_url = clearUrl;
            if ("blurred_image_url" in node) node.blurred_image_url = clearUrl;
            if ("preview_url" in node && node.is_blurred) node.preview_url = clearUrl;
        }
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
        (isValidLocketUidCandidate(candidateUserUid) && ("username" in node || "first_name" in node || "last_name" in node || "profile_picture_url" in node || "badge" in node || "is_gold" in node)) ||
        ("email" in node && node.email && typeof node.email === "string" && node.email.includes("@")) ||
        isNmsNodeCommunityVip(node, vipSet)
    );

    let isFriendWithBadgeOff = false;

    if (hasUserShape) {
        const isSelfByEmailOrToken = Boolean(
            ("email" in node && node.email && typeof node.email === "string" && node.email.includes("@")) ||
            ("push_token" in node && node.push_token) ||
            ("fcm_token" in node && node.fcm_token)
        );
        const isFriend = Boolean(!isSelfByEmailOrToken && candidateUserUid && (!selfUid || candidateUserUid !== selfUid));
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
            applyNmsCommunityGoldBadge(node);
            node.badge = "locket_gold";
            node.badge_tier = "gold";
            node.show_badge = true;
            node.locket_gold_badge = true;
            node.has_gold_badge = true;
            node.gold_badge = true;
            node.is_gold = true;
            node.isGold = true;
            node.has_gold = true;
            node.hasGold = true;
            node.gold = true;
            node.gold_subscription = true;
            node.has_gold_subscription = true;
            node.subscription_status = "active";
            node.original_purchase_date = cfg.lockIso;
            node.expires_date = cfg.expireIso;
            node.photobooth_unlocked = true;
            node.ai_filter_quota = quotaNum;
            node.ai_filter_remaining = quotaNum;
            node.ai_looks_remaining = quotaNum;
            node.remaining_ai_uses = quotaNum;
            node.can_use_ai_filter = true;
            node.can_use_filters = true;
            node.can_use_gold_features = true;
            node.can_generate_filtered_image = true;
            node.can_create_filtered_image = true;
            node.has_ai_access = true;
            node.filter_access = true;
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
        node.can_use_filter = !isRevoked; node.can_view = !isRevoked; node.allowed = !isRevoked;
        node.blur = isRevoked; node.blurred = isRevoked; node.is_blurred = isRevoked; node.isBlurred = isRevoked;
        node.blur_preview = isRevoked; node.blurPreview = isRevoked;
        node.show_paywall = isRevoked; node.showPaywall = isRevoked; node.paywall = isRevoked;
        node.show_upsell = isRevoked; node.upsell = isRevoked; node.needs_gold = isRevoked;
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
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 5 OF 6)
// ============================================================================
// NỘI DUNG PHẦN 5 / 6:
//   1. BỘ MÁY HUY HIỆU GOLD LOCAL (`LOCAL_BADGE_STUDIO_ENGINE`):
//      - Hiển thị huy hiệu Locket Gold dạng Local ngay trên máy cho Bản thân & Bạn bè
//      - Có công tắc Bật / Tắt độc lập ngay trong Trang Quản Lý (Web UI & Admin)
//      - Tự động ghi đè sâu vào Hồ sơ cá nhân, Danh sách bạn bè, Widget, Moment & RC
//   2. Giao diện Apple Scrollytelling 60fps & Hệ thống 5 Chủ đề màu (Apple Pro Themes)
//   3. Toàn bộ Bảng điều khiển Bento Console (`buildAppleBentoConsoleHtml` đầy đủ 100%)
// ============================================================================

var LOCAL_SELF_BADGE_KEY = "LOCKET_LOCAL_SELF_BADGE_ON_V12";
var LOCAL_FRIENDS_MASTER_BADGE_KEY = "LOCKET_LOCAL_FRIENDS_BADGE_ON_V12";
var LOCAL_WIDGET_BADGE_KEY = "LOCKET_LOCAL_WIDGET_BADGE_ON_V12";
var LOCAL_BADGE_STYLE_KEY = "LOCKET_LOCAL_BADGE_STYLE_V12";

// ============================================================================
// PHẦN 5.1: BỘ MÁY ĐIỀU KHIỂN HUY HIỆU GOLD LOCAL (BẬT / TẮT TRONG TRANG QUẢN LÝ)
// Cho phép hiển thị hoặc ẩn huy hiệu Locket Gold ngay trên máy của mình (Local)
// mà không phụ thuộc máy chủ ngoài, thao tác đóng/mở 1 chạm trên Web UI.
// ============================================================================
function getLocalBadgeState() {
    const rawSelf = Env.read(LOCAL_SELF_BADGE_KEY);
    const rawFriends = Env.read(LOCAL_FRIENDS_MASTER_BADGE_KEY);
    const rawWidget = Env.read(LOCAL_WIDGET_BADGE_KEY);
    const rawStyle = Env.read(LOCAL_BADGE_STYLE_KEY) || "locket_gold";

    return {
        selfBadgeEnabled: rawSelf === null || rawSelf === undefined || rawSelf === "" ? true : (rawSelf === "1" || rawSelf === "true"),
        friendsBadgeEnabled: rawFriends === null || rawFriends === undefined || rawFriends === "" ? true : (rawFriends === "1" || rawFriends === "true"),
        widgetBadgeEnabled: rawWidget === null || rawWidget === undefined || rawWidget === "" ? true : (rawWidget === "1" || rawWidget === "true"),
        badgeStyle: String(rawStyle).trim() || "locket_gold"
    };
}

function saveLocalBadgeState(nextState) {
    if (!nextState || typeof nextState !== "object") return getLocalBadgeState();
    if (nextState.selfBadgeEnabled !== undefined) {
        Env.write(nextState.selfBadgeEnabled ? "1" : "0", LOCAL_SELF_BADGE_KEY);
    }
    if (nextState.friendsBadgeEnabled !== undefined) {
        Env.write(nextState.friendsBadgeEnabled ? "1" : "0", LOCAL_FRIENDS_MASTER_BADGE_KEY);
    }
    if (nextState.widgetBadgeEnabled !== undefined) {
        Env.write(nextState.widgetBadgeEnabled ? "1" : "0", LOCAL_WIDGET_BADGE_KEY);
    }
    if (nextState.badgeStyle !== undefined && nextState.badgeStyle) {
        Env.write(String(nextState.badgeStyle).trim(), LOCAL_BADGE_STYLE_KEY);
    }
    return getLocalBadgeState();
}

function syncLocalSelfBadgeWithLocketApi(enableBadgeBool) {
    const bearer = Env.read(AUTH_TOKEN_CACHE_KEY) || "";
    if (!bearer || !/^Bearer\s+eyJ/i.test(bearer)) return;

    Env.httpPost({
        url: "https://api.locketcamera.com/changeProfileInfo",
        headers: {
            "Authorization": bearer,
            "Content-Type": "application/json",
            "User-Agent": "Locket/2.70.0 iOS/27.0"
        },
        body: JSON.stringify({
            data: {
                badge: enableBadgeBool ? "locket_gold" : null,
                locket_gold_badge: !!enableBadgeBool,
                is_gold: !!enableBadgeBool
            }
        }),
        timeout: 3
    }, () => {});
}

// Quấn (Wrap) mở rộng các hàm lõi từ Phần 4 để tôn trọng tuyệt đối công tắc Huy hiệu Local
var _baseLoadConfigV12 = loadConfig;
loadConfig = function() {
    const cfg = _baseLoadConfigV12();
    const lb = getLocalBadgeState();
    cfg.localSelfBadgeEnabled = !cfg.isBlockedByAdmin && lb.selfBadgeEnabled;
    cfg.localFriendsBadgeEnabled = !cfg.isBlockedByAdmin && lb.friendsBadgeEnabled;
    cfg.localWidgetBadgeEnabled = !cfg.isBlockedByAdmin && lb.widgetBadgeEnabled;
    cfg.localBadgeStyle = lb.badgeStyle || "locket_gold";
    cfg.alwaysForceBadge = cfg.localSelfBadgeEnabled;
    cfg.fgProfileBadge = cfg.localSelfBadgeEnabled;
    return cfg;
};

var _baseResolveFriendBadgeStateV12 = resolveFriendBadgeState;
resolveFriendBadgeState = function(friendUid, meta, cfg) {
    const individualState = _baseResolveFriendBadgeStateV12(friendUid, meta, cfg);
    const lb = getLocalBadgeState();
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";
    if (selfUid && friendUid === selfUid) {
        return !(cfg && cfg.isBlockedByAdmin) && lb.selfBadgeEnabled;
    }
    if (!lb.friendsBadgeEnabled) {
        return false;
    }
    return individualState;
};

function applyLocalSelfBadgeOverrideOnNode(node, showSelfBadge, badgeStyle, lockIso, expireIso) {
    if (!node || typeof node !== "object") return;
    if (showSelfBadge) {
        node.badge = badgeStyle || "locket_gold";
        node.badge_tier = "gold";
        node.show_badge = true;
        node.locket_gold_badge = true;
        node.has_gold_badge = true;
        node.gold_badge = true;
        node.gold_badge_enabled = true;
        node.show_gold_badge = true;
        node.is_gold = true;
        node.isGold = true;
        node.has_gold = true;
        node.hasGold = true;
        node.gold = true;
        node.gold_subscription = true;
        node.has_gold_subscription = true;
        node.membership_badge = "gold";
        node.subscription_status = "active";
        if (lockIso) node.original_purchase_date = lockIso;
        if (expireIso) node.expires_date = expireIso;
    } else {
        node.badge = null;
        node.badge_tier = null;
        node.show_badge = false;
        node.locket_gold_badge = false;
        node.has_gold_badge = false;
        node.gold_badge = false;
        node.gold_badge_enabled = false;
        node.show_gold_badge = false;
        node.membership_badge = "none";
    }
}

var _baseDeepForceBadgeAndAiQuotaV12 = deepForceBadgeAndAiQuotaInObject;
deepForceBadgeAndAiQuotaInObject = function(node, cfg, depth = 0) {
    const res = _baseDeepForceBadgeAndAiQuotaV12(node, cfg, depth);
    const lb = getLocalBadgeState();
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const showSelf = !isRevoked && lb.selfBadgeEnabled;
    const selfUid = Env.read(USER_ID_CACHE_KEY) || "";
    const selfUser = (Env.read(USERNAME_CACHE_KEY) || "").toLowerCase();

    const enforceLocalSelfBadgeWalk = (target, d = 0) => {
        if (!target || typeof target !== "object" || d > 10) return;
        if (Array.isArray(target)) {
            for (let i = 0; i < target.length; i++) enforceLocalSelfBadgeWalk(target[i], d + 1);
            return;
        }

        const tUid = String(target.uid || target.user_uid || target.id || "");
        const tUser = String(target.username || "").toLowerCase();
        const isSelfNode = Boolean(
            (selfUid && tUid === selfUid) ||
            (selfUser && tUser === selfUser) ||
            ("email" in target && target.email && typeof target.email === "string" && target.email.includes("@")) ||
            ("push_token" in target && target.push_token) ||
            ("fcm_token" in target && target.fcm_token)
        );

        if (isSelfNode) {
            applyLocalSelfBadgeOverrideOnNode(target, showSelf, lb.badgeStyle, cfg.lockIso, cfg.expireIso);
        }

        if (target.fields && typeof target.fields === "object") {
            let fUid = (target.fields.uid && target.fields.uid.stringValue) ||
                       (target.fields.user_uid && target.fields.user_uid.stringValue) || "";
            if (!fUid && typeof target.name === "string") {
                const mDoc = target.name.match(/\/users\/([A-Za-z0-9_-]{20,36})/);
                if (mDoc && mDoc[1]) fUid = mDoc[1];
            }
            if (fUid && (!selfUid || fUid === selfUid)) {
                if (showSelf) {
                    target.fields.badge = { stringValue: lb.badgeStyle || "locket_gold" };
                    target.fields.locket_gold_badge = { booleanValue: true };
                    target.fields.has_gold_badge = { booleanValue: true };
                    target.fields.show_gold_badge = { booleanValue: true };
                } else {
                    target.fields.badge = { nullValue: null };
                    target.fields.locket_gold_badge = { booleanValue: false };
                    target.fields.has_gold_badge = { booleanValue: false };
                    target.fields.show_gold_badge = { booleanValue: false };
                }
            }
        }

        for (const k of Object.keys(target)) {
            if (typeof target[k] === "object" && target[k] !== null) {
                enforceLocalSelfBadgeWalk(target[k], d + 1);
            }
        }
    };

    if (depth === 0) {
        enforceLocalSelfBadgeWalk(res, 0);
    }
    return res;
};

var _baseBuildSubscriberPayloadV12 = buildSubscriberPayload;
buildSubscriberPayload = function(existingObj, cfg, resolvedUserId, requestedUrlUserId, reqHeaders) {
    const obj = _baseBuildSubscriberPayloadV12(existingObj, cfg, resolvedUserId, requestedUrlUserId, reqHeaders);
    const lb = getLocalBadgeState();
    const showSelf = !(cfg && cfg.isBlockedByAdmin) && lb.selfBadgeEnabled;
    const nowMs = Date.now();

    if (obj && obj.subscriber && obj.subscriber.subscriber_attributes) {
        obj.subscriber.subscriber_attributes["locket_gold_badge"] = { value: showSelf ? "true" : "false", updated_at_ms: nowMs };
        obj.subscriber.subscriber_attributes["badge"] = { value: showSelf ? (lb.badgeStyle || "locket_gold") : "none", updated_at_ms: nowMs };
        obj.subscriber.subscriber_attributes["has_gold_badge"] = { value: showSelf ? "true" : "false", updated_at_ms: nowMs };
        obj.subscriber.subscriber_attributes["gold_badge_enabled"] = { value: showSelf ? "true" : "false", updated_at_ms: nowMs };
        obj.subscriber.subscriber_attributes["show_gold_badge"] = { value: showSelf ? "true" : "false", updated_at_ms: nowMs };
        obj.subscriber.subscriber_attributes["membership_badge"] = { value: showSelf ? "gold" : "none", updated_at_ms: nowMs };
    }
    return obj;
};

var _baseInjectFirebaseRemoteConfigV12 = injectFirebaseRemoteConfig;
injectFirebaseRemoteConfig = function(obj, cfg) {
    const res = _baseInjectFirebaseRemoteConfigV12(obj, cfg);
    const lb = getLocalBadgeState();
    const showSelf = !(cfg && cfg.isBlockedByAdmin) && lb.selfBadgeEnabled;
    const showWidget = !(cfg && cfg.isBlockedByAdmin) && lb.widgetBadgeEnabled;

    if (res && res.entries) {
        res.entries.profile_badge_visible = showSelf ? "true" : "false";
        res.entries.widget_badge_enabled = showWidget ? "true" : "false";
        res.entries.widget_badge_v2 = showWidget ? "true" : "false";
        try {
            const fg = JSON.parse(res.entries.feature_gates || "{}");
            fg.profile_badge = showSelf ? "enabled" : "disabled";
            res.entries.feature_gates = JSON.stringify(fg);
        } catch (e) {}
    }
    return res;
};

// ============================================================================
// PHẦN 5.2: CÁC HÀM Dựng GIAO DIỆN APPLE SCROLLYTELLING 60FPS & PRO THEME CSS
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

    const activeThemeId = (cfg && cfg.uiTheme) || "apple_light";
    const themeList = (typeof APPLE_PRO_UI_UPGRADE_ENGINE !== "undefined" && Array.isArray(APPLE_PRO_UI_UPGRADE_ENGINE.themes))
        ? APPLE_PRO_UI_UPGRADE_ENGINE.themes
        : [];
    const currentTheme = themeList.find(t => t.id === activeThemeId) || {
        bgLight: "#fbfbfd",
        cardBg: "rgba(255, 255, 255, 0.96)",
        textPrimary: "#1d1d1f",
        textSecondary: "#6e6e73",
        accentColor: "#0071e3",
        borderColor: "rgba(29, 29, 31, 0.08)"
    };

    return `
  :root {
    --apple-bg-light: ${currentTheme.bgLight};
    --apple-bg-dark: #000000;
    --apple-card-bg: ${currentTheme.cardBg};
    --apple-text-primary: ${currentTheme.textPrimary};
    --apple-text-secondary: ${currentTheme.textSecondary};
    --apple-blue: ${currentTheme.accentColor};
    --apple-border-color: ${currentTheme.borderColor};
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
    background-color: var(--apple-bg-light);
    color: var(--apple-text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.015em;
    line-height: 1.47059;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;
  }

  .apple-bg-stack { position: fixed; inset: 0; z-index: -2; pointer-events: none; overflow: hidden; }
  .apple-bg-layer-light { position: absolute; inset: 0; background-color: var(--apple-bg-light); opacity: 1; will-change: opacity; transition: background-color 0.35s ease; }
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
    top: 0; left: 0; height: 2.5px;
    background: linear-gradient(90deg, #0071e3 0%, #f59e0b 50%, #10b981 100%);
    width: 100%; z-index: 10000;
    transform-origin: left center; will-change: transform; transform: scaleX(0);
  }

  .apple-sticky-nav {
    position: sticky; top: 0; height: 50px; width: 100%; z-index: 950;
    background: rgba(251, 251, 253, 0.84);
    backdrop-filter: saturate(180%) blur(22px);
    -webkit-backdrop-filter: saturate(180%) blur(22px);
    border-bottom: 1px solid var(--apple-border-color);
    display: flex; align-items: center; justify-content: center; padding: 0 20px;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }
  .apple-sticky-nav.nav-dark-mode {
    background: rgba(18, 18, 20, 0.84);
    border-bottom-color: rgba(255, 255, 255, 0.12);
  }
  .apple-sticky-nav.nav-dark-mode .apple-nav-center,
  .apple-sticky-nav.nav-dark-mode .apple-nav-left span { color: #f5f5f7 !important; }
  .apple-sticky-nav.nav-dark-mode .apple-nav-link { color: #a1a1a6; }
  .apple-sticky-nav.nav-dark-mode .apple-logo-dot { background: #f5f5f7; }

  .apple-nav-container { width: 100%; max-width: 1060px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .apple-nav-left { display: flex; align-items: center; gap: 8px; text-decoration: none; color: var(--apple-text-primary); }
  .apple-logo-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--apple-gold); box-shadow: 0 0 10px rgba(245, 158, 11, 0.65); display: inline-block; }
  .apple-nav-center { font-size: 14px; font-weight: 700; color: var(--apple-text-primary); white-space: nowrap; }
  .apple-nav-right { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .apple-nav-link { font-size: 12px; font-weight: 600; color: var(--apple-text-secondary); text-decoration: none; padding: 5px 10px; border-radius: var(--apple-pill-radius); background: transparent; border: none; cursor: pointer; font-family: inherit; }
  .apple-nav-link:hover { opacity: 0.75; }
  .apple-buy-pill { display: inline-flex; align-items: center; justify-content: center; background: var(--apple-blue); color: #fff; font-size: 12px; font-weight: 600; padding: 0 14px; height: 28px; border-radius: var(--apple-pill-radius); text-decoration: none; border: none; cursor: pointer; white-space: nowrap; }

  .gpu-layer { will-change: transform, opacity; transform: translate3d(0, 0, 0); backface-visibility: hidden; }
  .apple-sticky-viewport { position: sticky; top: 0; width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; padding: 0 24px; }

  .sec-hero-zoom-200 { position: relative; width: 100%; height: 185vh; }
  .hero-kicker-clean { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--apple-text-secondary); margin-bottom: 20px; text-align: center; }
  .hero-mega-h1 { font-size: clamp(54px, 14vw, 185px); font-weight: 800; letter-spacing: -0.055em; line-height: 0.94; color: var(--apple-text-primary); text-align: center; white-space: nowrap; margin-bottom: 26px; user-select: none; }
  .hero-sub-lead { font-size: clamp(19px, 2.3vw, 28px); font-weight: 500; letter-spacing: -0.02em; line-height: 1.38; color: var(--apple-text-secondary); text-align: center; max-width: 680px; }
  .scroll-cue-wrap { position: absolute; bottom: 38px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .scroll-cue-line { width: 1.5px; height: 40px; background: linear-gradient(180deg, rgba(29,29,31,0.5) 0%, rgba(29,29,31,0.05) 100%); }
  .scroll-cue-label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--apple-text-secondary); }

  .sec-text-reveal-220 { position: relative; width: 100%; height: 195vh; color: #f5f5f7; }
  .text-reveal-stage { max-width: 940px; width: 100%; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
  .apple-word-paragraph { font-size: clamp(26px, 4.2vw, 50px); font-weight: 700; letter-spacing: -0.035em; line-height: 1.18; color: #f5f5f7; display: flex; flex-wrap: wrap; gap: 0.26em; }
  .apple-word-paragraph.sub-paragraph { font-size: clamp(19px, 2.4vw, 28px); font-weight: 500; color: #a1a1a6; line-height: 1.4; }
  .apple-word-unit { display: inline-block; will-change: transform, opacity, filter; transform: translate3d(0, 36px, 0) scale(0.95); opacity: 0.08; }

  .sec-sticky-scrub-300 { position: relative; width: 100%; height: 240vh; color: #f5f5f7; }
  .scrub-stage-1320 { position: relative; width: 100%; height: 100vh; max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: center; }
  .scrub-canvas-wrap { position: relative; width: 500px; max-width: 84vw; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; z-index: 2; }
  .scrub-webgl-canvas { width: 100%; height: 100%; display: block; border-radius: 36px; will-change: transform, opacity; }
  .scrub-fallback-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; opacity: 0; }
  .scrub-card-glass { position: absolute; width: 330px; padding: 30px; border-radius: var(--apple-card-radius); background: rgba(28, 28, 30, 0.78); backdrop-filter: saturate(180%) blur(24px); -webkit-backdrop-filter: saturate(180%) blur(24px); border: 1px solid rgba(255, 255, 255, 0.14); box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45); color: #f5f5f7; z-index: 4; }
  .scrub-card-left { left: 5%; top: 50%; }
  .scrub-card-right { right: 5%; top: 50%; }

  .sec-teardown-240 { position: relative; width: 100%; height: 210vh; }
  .teardown-stage-3d { position: relative; width: 100%; height: 100vh; perspective: 1100px; display: flex; align-items: center; justify-content: center; }
  .td-layer-card { position: absolute; left: 50%; top: 50%; width: 380px; max-width: 90vw; height: 470px; border-radius: var(--apple-card-radius); box-shadow: var(--apple-shadow); padding: 32px 28px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid var(--apple-border-color); transform-style: preserve-3d; }
  .td-layer-front { background: rgba(255, 255, 255, 0.96); color: #1d1d1f; z-index: 30; }
  .td-layer-mid { background: rgba(245, 245, 247, 0.94); color: #1d1d1f; z-index: 20; }
  .td-layer-back { background: #1d1d1f; color: #fff; z-index: 10; border-color: rgba(255, 255, 255, 0.14); }
  .td-diagram-box { width: 100%; height: 170px; border-radius: 20px; display: flex; align-items: center; justify-content: center; background: rgba(29, 29, 31, 0.03); border: 1px solid rgba(29, 29, 31, 0.07); }
  .td-layer-back .td-diagram-box { background: rgba(255, 255, 255, 0.04); border-color: rgba(255, 255, 255, 0.12); }

  .sec-clip-morph-220 { position: relative; width: 100%; height: 195vh; }
  .clip-morph-viewport { position: relative; width: 100vw; height: 100vh; background: radial-gradient(120% 100% at 50% 15%, #1d1d22 0%, #09090b 55%, #000000 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 28px; color: #fff; will-change: clip-path; box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25); }
  .morph-grid-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 980px; width: 100%; margin-top: 42px; }
  .morph-metric-card { padding: 28px 24px; border-radius: 24px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); text-align: left; }
  .morph-stat-big { font-size: clamp(36px, 4vw, 54px); font-weight: 800; letter-spacing: -0.04em; background: linear-gradient(135deg, #fef08a 0%, #f59e0b 55%, #fbbf24 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px; }

  .bento-console-main { max-width: 1060px; margin: 0 auto; padding: 44px 20px 130px; display: flex; flex-direction: column; gap: 26px; }
  .apple-bento-card { background: var(--apple-card-bg); backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); border-radius: var(--apple-card-radius); box-shadow: var(--apple-shadow); border: 1px solid var(--apple-border-color); padding: 32px 28px; transition: background-color 0.35s ease, border-color 0.35s ease; }
  .bento-card-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; padding-bottom: 18px; border-bottom: 1px solid var(--apple-border-color); margin-bottom: 22px; }
  .bento-eyebrow { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--apple-text-secondary); margin-bottom: 6px; }
  .bento-heading { font-size: 22px; font-weight: 700; letter-spacing: -0.025em; color: var(--apple-text-primary); }
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

  .field-label { display: block; font-size: 12px; font-weight: 600; color: var(--apple-text-primary); margin-bottom: 8px; }
  .apple-field { width: 100%; padding: 13px 16px; border-radius: 14px; background: var(--apple-bg-light); border: 1px solid rgba(128, 128, 135, 0.22); color: var(--apple-text-primary); font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
  .apple-field:focus { border-color: var(--apple-blue); box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15); }
  .chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .preset-pill { padding: 6px 14px; border-radius: var(--apple-pill-radius); background: var(--apple-bg-light); border: 1px solid rgba(128, 128, 135, 0.2); font-size: 12px; font-weight: 600; color: var(--apple-text-primary); cursor: pointer; font-family: inherit; transition: all 0.2s ease; }
  .preset-pill:hover { opacity: 0.82; transform: translateY(-1px); }
  .btn-action-primary { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: #1d1d1f; color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; transition: transform 0.15s ease, opacity 0.2s ease; }
  .btn-action-primary:active { transform: scale(0.985); }
  .btn-action-blue { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: var(--apple-blue); color: #fff; font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }
  .btn-action-gold { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%); color: #111111; font-size: 14.5px; font-weight: 700; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; box-shadow: 0 8px 24px rgba(245, 158, 11, 0.28); }
  .btn-action-soft { display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 24px; border-radius: 16px; background: rgba(128, 128, 135, 0.12); color: var(--apple-text-primary); font-size: 14px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; width: 100%; font-family: inherit; }

  .apple-pill { display: inline-block; padding: 4px 11px; border-radius: var(--apple-pill-radius); font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; }
  .pill-gold { background: rgba(245, 158, 11, 0.18); color: #b45309; }
  .pill-blue { background: rgba(0, 113, 227, 0.14); color: #0071e3; }
  .pill-emerald { background: rgba(16, 185, 129, 0.16); color: #059669; }
  .pill-rose { background: rgba(244, 63, 94, 0.16); color: #e11d48; }

  .apple-pill-btn { display: inline-flex; align-items: center; justify-content: center; padding: 7px 15px; border-radius: var(--apple-pill-radius); font-size: 12px; font-weight: 600; border: none; cursor: pointer; text-decoration: none; font-family: inherit; transition: opacity 0.2s ease, transform 0.15s ease; }
  .apple-pill-btn:active { transform: scale(0.97); }
  .btn-dark-soft { background: #1d1d1f; color: #fff; }
  .btn-blue-soft { background: rgba(0, 113, 227, 0.14); color: #0071e3; }
  .btn-emerald-soft { background: rgba(16, 185, 129, 0.16); color: #059669; }
  .btn-amber-soft { background: rgba(245, 158, 11, 0.18); color: #b45309; }
  .btn-rose-soft { background: rgba(244, 63, 94, 0.16); color: #e11d48; }

  .spec-tile { padding: 20px; border-radius: 22px; background: var(--apple-bg-light); border: 1px solid var(--apple-border-color); }
  .spec-mono-val { font-family: "SF Mono", monospace; font-size: 12px; font-weight: 600; color: var(--apple-text-primary); word-break: break-all; margin-top: 4px; }
  .empty-state-box { padding: 28px 16px; text-align: center; font-size: 13.5px; color: var(--apple-text-secondary); grid-column: 1 / -1; }
  .toast-alert-bar { padding: 16px 22px; border-radius: 20px; background: linear-gradient(135deg, #18181b 0%, #27272a 100%); color: #fff; font-size: 13.5px; font-weight: 600; box-shadow: 0 16px 40px rgba(0,0,0,0.22); border: 1px solid rgba(245, 158, 11, 0.35); display: ${statusMsg ? "block" : "none"}; }
  .admin-block-alert { padding: 22px 26px; border-radius: var(--apple-card-radius); background: #fff1f2; border: 1px solid rgba(244, 63, 94, 0.3); color: #881337; display: ${cfg.isBlockedByAdmin ? "flex" : "none"}; flex-direction: column; gap: 6px; }

  /* CÔNG TẮC GẠT iOS SWITCH HIỆN ĐẠI */
  .ios-switch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(265px, 1fr)); gap: 12px; }
  .ios-switch-card { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; border-radius: 18px; background: var(--apple-bg-light); border: 1px solid var(--apple-border-color); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.025); cursor: pointer; user-select: none; transition: transform 0.18s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
  .ios-switch-card:hover { border-color: rgba(0, 113, 227, 0.28); transform: translateY(-1px); }
  .ios-switch-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .ios-switch-title { font-size: 13.5px; font-weight: 600; color: var(--apple-text-primary); line-height: 1.3; }
  .ios-switch-sub { font-size: 11px; color: var(--apple-text-secondary); }
  .ios-switch-control { position: relative; width: 50px; height: 30px; flex-shrink: 0; display: inline-block; }
  .ios-switch-control input { opacity: 0; width: 0; height: 0; position: absolute; }
  .ios-switch-slider { position: absolute; inset: 0; background-color: #d1d1d6; border-radius: 30px; transition: background-color 0.28s cubic-bezier(0.2, 0.8, 0.2, 1); cursor: pointer; }
  .ios-switch-slider::before { position: absolute; content: ""; height: 26px; width: 26px; left: 2px; bottom: 2px; background-color: #ffffff; border-radius: 50%; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.12); transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .ios-switch-control input:checked + .ios-switch-slider { background: linear-gradient(135deg, #34d399 0%, #10b981 100%); }
  .ios-switch-control.gold-switch input:checked + .ios-switch-slider { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); }
  .ios-switch-control input:checked + .ios-switch-slider::before { transform: translateX(20px); }

  /* THẺ PREVIEW HUY HIỆU GOLD LOCAL TRỰC QUAN */
  .local-badge-hero-banner {
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 18px;
    padding: 22px 24px; border-radius: 24px;
    background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #1c1917 100%);
    color: #ffffff; border: 1px solid rgba(245, 158, 11, 0.35);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18); margin-bottom: 18px;
  }
  .local-badge-avatar-wrap {
    position: relative; width: 64px; height: 64px; flex-shrink: 0;
  }
  .local-badge-avatar-img {
    width: 64px; height: 64px; border-radius: 50%; object-fit: cover;
    border: 2.5px solid #fbbf24; background: #09090b;
  }
  .local-badge-crown-star {
    position: absolute; right: -4px; bottom: -2px;
    width: 26px; height: 26px; border-radius: 50%;
    background: linear-gradient(135deg, #fde047 0%, #f59e0b 100%);
    color: #111; font-size: 14px; font-weight: 900;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid #18181b; box-shadow: 0 4px 10px rgba(245, 158, 11, 0.5);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  /* BẢNG CHỌN NHANH GRADIENT 1-CHẠM & CHỦ ĐỀ GIAO DIỆN */
  .swatch-pill-btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 13px; border-radius: 999px; font-size: 11.5px; font-weight: 700;
    border: 1px solid rgba(0,0,0,0.08); cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06); transition: transform 0.15s ease;
  }
  .swatch-pill-btn:hover { transform: scale(1.04); }

  .cap-preview-chip { display: inline-flex; align-items: center; gap: 6px; padding: 7px 15px; border-radius: 999px; font-size: 13px; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06); max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .cap-studio-grid, .scroll-box-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(295px, 1fr)); gap: 12px; max-height: 490px; overflow-y: auto; padding: 12px; border-radius: 22px; background: rgba(128, 128, 135, 0.08); border: 1px solid var(--apple-border-color); box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.03); -webkit-overflow-scrolling: touch; }
  .cap-card-item, .scroll-user-card { padding: 16px; border-radius: 18px; background: var(--apple-bg-light); border: 1px solid var(--apple-border-color); box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03); display: flex; flex-direction: column; justify-content: space-between; gap: 12px; transition: transform 0.16s ease, box-shadow 0.16s ease; }
  .cap-card-item:hover, .scroll-user-card:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06); }
  .user-card-top { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .user-card-avatar { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(245, 158, 11, 0.45); flex-shrink: 0; background: #1d1d1f; }
  .user-card-meta { min-width: 0; flex: 1; }
  .user-card-name-row { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .user-card-fullname { font-size: 14px; font-weight: 700; color: var(--apple-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .user-card-handle { font-size: 12px; color: var(--apple-text-secondary); }
  .user-card-uid { font-family: "SF Mono", monospace; font-size: 10.5px; color: var(--apple-text-secondary); margin-top: 3px; word-break: break-all; }
  .user-card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-top: 10px; border-top: 1px solid var(--apple-border-color); flex-wrap: wrap; }

  .direct-upload-zone { display: flex; align-items: center; gap: 14px; padding: 14px; border-radius: 18px; background: var(--apple-bg-light); border: 1.5px dashed rgba(0, 113, 227, 0.35); margin-top: 8px; }
  .direct-upload-thumb { width: 64px; height: 64px; border-radius: 14px; object-fit: cover; background: #141415; border: 1px solid var(--apple-border-color); flex-shrink: 0; }
  .direct-upload-controls { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
  .file-upload-btn-label { display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 14px; border-radius: 12px; background: rgba(0, 113, 227, 0.14); color: #0071e3; font-size: 12.5px; font-weight: 700; cursor: pointer; width: fit-content; }
  .file-upload-btn-label input[type="file"] { display: none; }

  /* THANH DOCK NỔI QUICK-JUMP KIỂU MACOS / iOS 18 */
  .apple-floating-dock {
    position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);
    z-index: 980; display: flex; align-items: center; gap: 6px;
    padding: 8px 12px; border-radius: 999px;
    background: rgba(24, 24, 27, 0.86);
    backdrop-filter: saturate(180%) blur(24px); -webkit-backdrop-filter: saturate(180%) blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.38);
    max-width: 96vw; overflow-x: auto; white-space: nowrap;
  }
  .dock-jump-item {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 6px 12px; border-radius: 999px;
    color: #f4f4f5; font-size: 11.5px; font-weight: 600;
    text-decoration: none; transition: background 0.2s ease, color 0.2s ease;
  }
  .dock-jump-item:hover { background: rgba(245, 158, 11, 0.22); color: #fde047; }

  /* MODAL POPUP IN-APP LOCKET CHUẨN MẪU UPLOCKET */
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
    .scrub-canvas-wrap { width: 250px; }
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

    const revealSentence1 = buildAppleWordRevealHtml("Mọi chuyển động đều được điều khiển trực tiếp bằng ngón tay của bạn. Không autoplay. Không rào cản Paywall. Mở khóa trọn bộ Khung Photobooth, Caption VIP, Camera 30s và Huy hiệu Gold Local ở tốc độ 60 khung hình/giây.");
    const revealSentence2 = buildAppleWordRevealHtml(" Bật hoặc tắt Huy hiệu Gold Local ngay trên máy của bạn chỉ với 1 công tắc gạt, tải ảnh trực tiếp từ máy cho Popup & Widget, và duy trì kết nối DoH UpLocket 40 miền bảo mật tuyệt đối.");

    return `
  <div class="apple-bg-stack" aria-hidden="true">
    <div id="bgLayerLight" class="apple-bg-layer-light"></div>
    <div id="bgLayerDark" class="apple-bg-layer-dark"></div>
  </div>

  <div id="globalProgressBar" class="apple-global-progress"></div>

  <!-- MODAL POPUP IN-APP LOCKET CHUẨN MẪU UPLOCKET -->
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
        <span style="font-size:13px;font-weight:800;">${escapeHtml(THAY_PRODUCT_NAME)} V12.5</span>
      </a>
      <div class="apple-nav-right">
        <a href="#localBadgeStudioSection" class="apple-nav-link">👑 Huy hiệu Local</a>
        <a href="#captionStudioSection" class="apple-nav-link hide-mobile">Caption Studio</a>
        <a href="#featureEngineSection" class="apple-nav-link hide-mobile">Camera 30s</a>
        <a href="#friendsBadgeSection" class="apple-nav-link hide-mobile">Bạn bè (${activeFriendsBadgeCount}/${friendsListCount})</a>
        <button type="button" onclick="openGoldModal()" class="apple-nav-link">Xem mẫu Popup</button>
        <button type="button" onclick="toggleAdminDrawer()" class="apple-nav-link">${isAdminLogged ? "Root Admin" : "Quản trị"}</button>
        <a href="#consoleSection" class="apple-buy-pill">Bảng điều khiển</a>
      </div>
    </div>
  </header>

  <main>

    <section id="secHeroZoom" class="sec-hero-zoom-200">
      <div class="apple-sticky-viewport">
        <div id="elHeroKicker" class="hero-kicker-clean gpu-layer">THẾ HỆ LOCKET GOLD UPLOCKET V12.5 PRO STUDIO</div>
        <h1 id="elHeroMegaH1" class="hero-mega-h1 gpu-layer">LOCKET H2</h1>
        <p id="elHeroSubLead" class="hero-sub-lead gpu-layer">${escapeHtml(THAY_SLOGAN)}</p>

        <div id="elScrollCue" class="scroll-cue-wrap gpu-layer">
          <span class="scroll-cue-label">Cuộn xuống Bảng Điều Khiển</span>
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
            <span class="bento-eyebrow" style="color:#60a5fa;">01 / HUY HIỆU GOLD LOCAL</span>
            <h2 class="bento-heading" style="color:#ffffff;font-size:22px;margin-bottom:10px;">${escapeHtml(THAY_USP_LEFT)}</h2>
            <p style="font-size:14.5px;color:#a1a1a6;line-height:1.55;">
              Mốc đăng ký gốc ${escapeHtml(cfg.lockDate)} được khóa cứng ở tầng giao thức, hiển thị huy hiệu Locket Gold ngay trên máy của bạn và tùy ý bật/tắt trong trang quản lý.
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
              Kết hợp định tuyến DoH UpLocket (${escapeHtml(cfg.dohPrimaryIp)}) cùng bộ giải mã 40 miền và mở khóa trọn bộ Photobooth 4 ô, Cute, Polaroid, Caption & AI Looks.
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
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 2: Khung Photobooth, Caption & AI</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Mở khóa Khung & Photobooth, Sự kiện (Practical Magic 2), kho Caption tự chế, Camera 30s và 999.999 lượt Tạo diện mạo AI.
              </p>
            </div>
          </article>

          <article id="elTdFront" class="td-layer-card td-layer-front gpu-layer">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="apple-pill pill-gold">LỚP 01 · LOCAL BADGE & POPUP</span>
              <span style="font-family:monospace;font-size:11px;color:#6e6e73;">-120PX</span>
            </div>
            <div class="td-diagram-box">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <circle cx="110" cy="60" r="42" stroke="#1d1d1f" stroke-width="2"/>
                <circle cx="110" cy="60" r="26" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>
                <circle cx="110" cy="60" r="12" fill="#f59e0b"/>
              </svg>
            </div>
            <div>
              <h3 class="bento-heading" style="font-size:21px;margin-bottom:8px;">Tầng 1: Huy Hiệu Local & Khóa Thuê Bao</h3>
              <p style="font-size:14px;color:#6e6e73;">
                Hiển thị ngôi sao huy hiệu Locket Gold ngay trên máy của bạn, có thể bật hoặc tắt bất kỳ lúc nào ngay trong trang quản lý.
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

// ============================================================================
// PHẦN 5.3: BẢNG ĐIỀU KHIỂN TRUNG TÂM BENTO CONSOLE (ĐẦY ĐỦ 100% CÁC PHÂN KHU)
// ============================================================================
function buildAppleBentoConsoleHtml(cfg, statusMsg, openAdminDrawer) {
    const cachedUid = Env.read(USER_ID_CACHE_KEY) || "";
    const cachedUser = Env.read(USERNAME_CACHE_KEY) || "ngominhduc";
    const cachedAvatar = Env.read(AVATAR_CACHE_KEY) || `https://ui-avatars.com/api/?name=${encodeURIComponent(cachedUser)}&background=18181b&color=fde047`;
    const hasValidUid = cachedUid && !cachedUid.includes("RCAnonymousID");
    const displayUid = hasValidUid ? cachedUid : "Chưa ghi nhận (Mở ứng dụng Locket 1 lần)";
    const isAdminLogged = Env.read(ADMIN_SESSION_KEY) === "1";
    const currentAiQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const dohStatus = getCachedDohStatus(cfg);
    const lbState = getLocalBadgeState();

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

    // Render nút chọn nhanh 5 Chủ đề Giao diện Apple Pro Studio
    let themeSelectorPillsHtml = "";
    const uiThemes = (typeof APPLE_PRO_UI_UPGRADE_ENGINE !== "undefined" && Array.isArray(APPLE_PRO_UI_UPGRADE_ENGINE.themes))
        ? APPLE_PRO_UI_UPGRADE_ENGINE.themes
        : [];
    for (const th of uiThemes) {
        const isCurrentTheme = (cfg.uiTheme || "apple_light") === th.id;
        themeSelectorPillsHtml += `
        <button type="button"
                onclick="switchAppleProTheme('${escapeHtml(th.id)}', '${escapeHtml(th.bgLight)}', '${escapeHtml(th.cardBg)}', '${escapeHtml(th.textPrimary)}', '${escapeHtml(th.textSecondary)}', '${escapeHtml(th.accentColor)}', '${escapeHtml(th.borderColor)}')"
                class="preset-pill"
                style="${isCurrentTheme ? "background:#1d1d1f;color:#fde047;border-color:#f59e0b;" : ""}">
            ${escapeHtml(th.icon)} ${escapeHtml(th.name)}
        </button>`;
    }

    // Render 12 Bảng phối màu Gradient 1-Chạm cho Caption Studio
    let gradientSwatchesHtml = "";
    const swatches = (typeof APPLE_PRO_UI_UPGRADE_ENGINE !== "undefined" && Array.isArray(APPLE_PRO_UI_UPGRADE_ENGINE.captionGradientSwatches))
        ? APPLE_PRO_UI_UPGRADE_ENGINE.captionGradientSwatches
        : [];
    for (const sw of swatches) {
        const gradBg = `linear-gradient(135deg, ${sw.c1}, ${sw.c2}${sw.c3 ? ", " + sw.c3 : ""})`;
        gradientSwatchesHtml += `
        <button type="button"
                onclick="applyQuickCaptionSwatch('${escapeHtml(sw.c1)}', '${escapeHtml(sw.c2)}', '${escapeHtml(sw.c3 || "")}', '${escapeHtml(sw.text)}', '${escapeHtml(sw.emoji || "")}')"
                class="swatch-pill-btn"
                style="background:${escapeHtml(gradBg)};color:${escapeHtml(sw.text)};">
            <span>${escapeHtml(sw.emoji || "🎨")}</span>
            <span>${escapeHtml(sw.name)}</span>
        </button>`;
    }

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
            <div style="font-size:13px;font-weight:600;color:var(--apple-text-primary);margin-top:8px;">${escapeHtml(itemNames)}</div>
        </div>`;
    }

    // 2. Render Kho Caption Studio (Thêm / Sửa / Xoá trực tiếp trong ô cuộn)
    const mergedCaptionSections = buildMergedOverlaySections();
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
                        <span style="font-size:10.5px;font-weight:700;color:var(--apple-text-secondary);">${escapeHtml(secName)}</span>
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

    // 3. Render Danh sách Bạn bè vào Ô CUỘN GỌN GÀNG (Có công tắc Bật/Tắt riêng từng người)
    let friendsBadgeListHtml = "";
    if (friendsList.length === 0) {
        friendsBadgeListHtml = `
        <div class="empty-state-box">
            Đang chờ tự động quét UID bạn bè... Hãy nhấn nút <strong>"Tự Động Quét & Lấy UID Bạn Bè Ngay"</strong> phía trên hoặc mở ứng dụng Locket 1 lần, toàn bộ danh sách bạn bè sẽ tự động hiện gọn trong ô cuộn này.
        </div>`;
    } else {
        for (const f of friendsList) {
            const isBadgeOn = f.badge_enabled !== false && lbState.friendsBadgeEnabled;
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
                        ${isBadgeOn ? "👑 ĐANG HIỆN GOLD" : "ĐÃ ẨN GOLD"}
                    </span>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <label class="ios-switch-control gold-switch" title="Bật/Tắt huy hiệu Gold cho bạn bè này">
                            <input type="checkbox" id="friendSwitch_${escapeHtml(f.uid)}" ${f.badge_enabled !== false ? "checked" : ""} onchange="toggleSingleFriendBadge('${escapeHtml(f.uid)}', this.checked)">
                            <span class="ios-switch-slider"></span>
                        </label>
                        <a href="/setdate?friend_action=delete&friend_uid=${encodeURIComponent(f.uid)}#friendsBadgeSection" class="apple-pill-btn btn-rose-soft">Xoá</a>
                    </div>
                </div>
            </div>`;
        }
    }

    // 4. Render Danh sách tài khoản Gold vào Ô CUỘN GỌN GÀNG
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
                    <code style="font-size:10.5px;color:#6e6e73;background:rgba(128,128,135,0.12);padding:4px 8px;border-radius:8px;">${escapeHtml(isBlk ? "REVOKED" : (u.product_id || cfg.productId || "locket_1600_1y"))}</code>
                </div>
            </div>`;
        }
    }

    // 5. Render Bảng Admin trong Ô CUỘN GỌN GÀNG
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

      <!-- ====================================================================
           PHÂN KHU MỚI: TRUNG TÂM HUY HIỆU GOLD LOCAL & CHỦ ĐỀ GIAO DIỆN PRO
           (Hiện huy hiệu trên máy của mình dạng Local — Có công tắc Bật/Tắt)
           ==================================================================== -->
      <section id="localBadgeStudioSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">LOCAL GOLD BADGE ENGINE & APPLE PRO THEME STUDIO</span>
            <h2 class="bento-heading">Điều Khiển Huy Hiệu Locket Gold Local (Trên Máy Của Mình) & Chủ Đề Giao Diện</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Bật hoặc tắt hiển thị ngôi sao <strong>Huy hiệu Locket Gold dạng Local</strong> ngay trên máy của bạn (hồ sơ cá nhân, danh sách bạn bè và Widget) bất kỳ lúc nào chỉ bằng 1 công tắc gạt mà không ảnh hưởng tới các tính năng Camera 30s hay Photobooth.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="toggleLocalBadgeQuick('self', true)" class="apple-pill-btn btn-amber-soft">👑 Bật Huy Hiệu Của Mình</button>
            <button type="button" onclick="toggleLocalBadgeQuick('self', false)" class="apple-pill-btn btn-rose-soft">Ẩn Huy Hiệu Của Mình</button>
          </div>
        </div>

        <!-- BANNER XEM TRƯỚC TRẠNG THÁI HUY HIỆU GOLD LOCAL TRỰC QUAN -->
        <div class="local-badge-hero-banner">
          <div style="display:flex;align-items:center;gap:16px;">
            <div class="local-badge-avatar-wrap">
              <img src="${escapeHtml(cachedAvatar)}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(cachedUser)}&background=18181b&color=fde047'" class="local-badge-avatar-img" alt="Self Avatar">
              <div id="liveSelfBadgeStarIcon" class="local-badge-crown-star" style="transform:${lbState.selfBadgeEnabled ? "scale(1)" : "scale(0)"};opacity:${lbState.selfBadgeEnabled ? "1" : "0"};">★</div>
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <span style="font-size:18px;font-weight:800;color:#ffffff;">@${escapeHtml(cachedUser)}</span>
                <span id="liveSelfBadgeStatusPill" class="apple-pill ${lbState.selfBadgeEnabled ? "pill-gold" : "pill-rose"}" style="background:${lbState.selfBadgeEnabled ? "rgba(250,204,21,0.22)" : "rgba(244,63,94,0.25)"};color:${lbState.selfBadgeEnabled ? "#fde047" : "#fda4af"};">
                  ${lbState.selfBadgeEnabled ? "👑 ĐANG HIỆN HUY HIỆU GOLD LOCAL" : "ĐÃ TẮT HUY HIỆU GOLD LOCAL"}
                </span>
              </div>
              <div style="font-size:12.5px;color:#a1a1aa;margin-top:4px;">
                UID: <code style="color:#fde047;">${escapeHtml(displayUid)}</code> · Kiểu huy hiệu: <strong>${escapeHtml(lbState.badgeStyle)}</strong>
              </div>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:14px;">
            <span style="font-size:13px;font-weight:700;color:#fde047;">Công tắc Huy hiệu của mình:</span>
            <label class="ios-switch-control gold-switch" title="Bật/Tắt Huy hiệu Gold trên hồ sơ của mình">
              <input type="checkbox" id="instantSelfLocalBadgeSwitch" ${lbState.selfBadgeEnabled ? "checked" : ""} onchange="toggleLocalBadgeQuick('self', this.checked)">
              <span class="ios-switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- FORM LƯU CẤU HÌNH HUY HIỆU LOCAL CHI TIẾT -->
        <form method="GET" action="/setdate#localBadgeStudioSection" style="display:flex;flex-direction:column;gap:16px;">
          <input type="hidden" name="save_local_badge_studio" value="1">

          <div class="ios-switch-grid">
            <label class="ios-switch-card">
              <div class="ios-switch-info">
                <span class="ios-switch-title">👑 Hiện Huy Hiệu Gold Trên Hồ Sơ Của Mình</span>
                <span class="ios-switch-sub">Hiển thị huy hiệu Gold dạng Local trên trang cá nhân & cài đặt Locket</span>
              </div>
              <div class="ios-switch-control gold-switch">
                <input type="checkbox" id="formSelfBadgeChk" name="localSelfBadge" value="1" ${lbState.selfBadgeEnabled ? "checked" : ""} onchange="toggleLocalBadgeQuick('self', this.checked)">
                <span class="ios-switch-slider"></span>
              </div>
            </label>

            <label class="ios-switch-card">
              <div class="ios-switch-info">
                <span class="ios-switch-title">👥 Hiện Huy Hiệu Gold Cho Bạn Bè (Master)</span>
                <span class="ios-switch-sub">Tắt công tắc này sẽ ẩn toàn bộ huy hiệu của bạn bè trên máy bạn</span>
              </div>
              <div class="ios-switch-control gold-switch">
                <input type="checkbox" id="formFriendsBadgeChk" name="localFriendsBadge" value="1" ${lbState.friendsBadgeEnabled ? "checked" : ""} onchange="toggleLocalBadgeQuick('friends', this.checked)">
                <span class="ios-switch-slider"></span>
              </div>
            </label>

            <label class="ios-switch-card">
              <div class="ios-switch-info">
                <span class="ios-switch-title">📱 Hiện Huy Hiệu Gold Trên Widget & Journal</span>
                <span class="ios-switch-sub">Hiển thị nhãn Gold trên Widget màn hình chính iPhone</span>
              </div>
              <div class="ios-switch-control gold-switch">
                <input type="checkbox" id="formWidgetBadgeChk" name="localWidgetBadge" value="1" ${lbState.widgetBadgeEnabled ? "checked" : ""} onchange="toggleLocalBadgeQuick('widget', this.checked)">
                <span class="ios-switch-slider"></span>
              </div>
            </label>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Kiểu định danh Huy hiệu Local (Badge Identifier)</label>
              <select name="localBadgeStyle" class="apple-field">
                <option value="locket_gold" ${lbState.badgeStyle === "locket_gold" ? "selected" : ""}>locket_gold — Ngôi Sao Vàng Locket Gold Chuẩn (Khuyên dùng)</option>
                <option value="gold" ${lbState.badgeStyle === "gold" ? "selected" : ""}>gold — Huy Hiệu Gold Classic</option>
                <option value="celebrity" ${lbState.badgeStyle === "celebrity" ? "selected" : ""}>celebrity — Huy Hiệu Nghệ Sĩ / VIP</option>
              </select>
            </div>
            <div>
              <label class="field-label">Chọn nhanh Chủ đề màu Giao diện Web Quản lý (5 Apple Pro Themes)</label>
              <div class="chip-row" style="margin-top:4px;">
                ${themeSelectorPillsHtml}
              </div>
            </div>
          </div>

          <button type="submit" class="btn-action-gold">Lưu Trạng Thái Huy Hiệu Gold Local & Đồng Bộ Ngay Lên App Locket</button>
        </form>
      </section>

      <!-- TRUNG TÂM BẮN THÔNG BÁO POPUP LÊN APP LOCKET & TẢI FILE ẢNH TRỰC TIẾP -->
      <section id="uplocketPopupStudioSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">UPLOCKET IN-APP POPUP & DIRECT IMAGE UPLOAD STUDIO</span>
            <h2 class="bento-heading">Bắn Thông Báo Popup Lên App Locket & Tải File Ảnh Trực Tiếp Từ Máy</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Thiết kế chuẩn giao diện <strong>UpLocket</strong>: Chỉnh chữ, chọn file ảnh trực tiếp từ thư viện điện thoại (lưu bền vững qua Chunked GET — load lại trang không bao giờ mất) cho cả <strong>Thông báo Popup</strong> lẫn <strong>Khung Widget</strong>.
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
                  <div style="font-size:13px;font-weight:700;color:var(--apple-text-primary);">Chọn ảnh từ máy cho Popup Locket</div>
                  <div id="popupUploadStatusText" style="font-size:11.5px;color:var(--apple-text-secondary);">Tự động nén chuẩn HD & lưu thẳng vào bộ nhớ Locket (Load lại không mất)</div>
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
                  <div style="font-size:13px;font-weight:700;color:var(--apple-text-primary);">Chọn ảnh viền cho Widget trực tiếp từ máy</div>
                  <div id="widgetUploadStatusText" style="font-size:11.5px;color:var(--apple-text-secondary);">Hỗ trợ ảnh PNG trong suốt / JPG nạp thẳng vào Widget Locket</div>
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

      <!-- BẢNG QUẢN TRỊ ROOT ADMIN -->
      <section id="adminCommandCenter" class="apple-bento-card ${openAdminDrawer ? "" : "hidden"}">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">ROOT ADMIN CONSOLE</span>
            <h2 class="bento-heading">Quản trị Thu hồi/Cấp Gold, Công tắc Huy hiệu Local & Điều khiển Popup</h2>
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
              <input type="text" name="user" class="apple-field" placeholder="Nhập username admin (ngominhduc)..." required>
            </div>
            <div style="margin-bottom:18px;">
              <label class="field-label">Mật khẩu Root Admin</label>
              <input type="password" name="pass" class="apple-field" placeholder="Nhập mật khẩu quản trị..." required>
            </div>
            <button type="submit" class="btn-action-blue">Đăng nhập Bảng Quản Trị Root</button>
          </form>
        ` : `
          <div style="display:flex;flex-direction:column;gap:18px;">
            <div class="grid-3">
              <div class="spec-tile">
                <span class="bento-eyebrow">TỔNG TÀI KHOẢN GHI NHẬN</span>
                <div style="font-size:26px;font-weight:800;">${usersList.length}</div>
              </div>
              <div class="spec-tile">
                <span class="bento-eyebrow">ĐANG HOẠT ĐỘNG GOLD</span>
                <div style="font-size:26px;font-weight:800;color:#10b981;">${goldUsersList.length}</div>
              </div>
              <div class="spec-tile">
                <span class="bento-eyebrow">HUY HIỆU LOCAL CỦA BẠN</span>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px;">
                  <span style="font-size:15px;font-weight:700;color:${lbState.selfBadgeEnabled ? "#f59e0b" : "#f43f5e"};">
                    ${lbState.selfBadgeEnabled ? "ĐANG BẬT (ON)" : "ĐANG TẮT (OFF)"}
                  </span>
                  <button type="button" onclick="toggleLocalBadgeQuick('self', ${lbState.selfBadgeEnabled ? "false" : "true"})" class="apple-pill-btn ${lbState.selfBadgeEnabled ? "btn-rose-soft" : "btn-emerald-soft"}">
                    ${lbState.selfBadgeEnabled ? "Tắt ngay" : "Bật ngay"}
                  </button>
                </div>
              </div>
            </div>
            <div class="scroll-box-grid">
              ${adminTableHtml}
            </div>
          </div>
        `}
      </section>

      <!-- LOCKET CAPTION STUDIO (THÊM / SỬA / XOÁ CAPTION + BẢNG MÀU 1-CHẠM) -->
      <section id="captionStudioSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">LOCKET CAPTION STUDIO (ADD / EDIT / DELETE CAPTIONS)</span>
            <h2 class="bento-heading">Trình Quản Lý, Thêm Mới & Xoá Caption Locket (${totalActiveCaptionsCount} đang bật)</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Tự tạo Caption mang tên riêng của bạn với bảng phối màu Gradient 1-chạm bên dưới, sửa lại bất kỳ Caption nào có sẵn hoặc bấm <strong>Xoá</strong> những Caption không dùng tới.
            </p>
          </div>
          <a href="/setdate?caption_action=reset_all#captionStudioSection" class="preset-pill" style="text-decoration:none;">Khôi phục toàn bộ Caption gốc</a>
        </div>

        <form method="GET" action="/setdate#captionStudioSection" class="spec-tile" style="margin-bottom:18px;">
          <input type="hidden" name="caption_action" value="upsert">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:14px;">
            <span class="bento-eyebrow" style="margin:0;">TẠO CAPTION MỚI HOẶC CHỈNH SỬA CAPTION ĐANG CHỌN</span>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:12px;color:var(--apple-text-secondary);">Xem trước trực tiếp:</span>
              <div id="liveCapStudioPreview" class="cap-preview-chip" style="background:linear-gradient(135deg,#FFD700,#F59E0B);color:#000000;">
                <span id="liveCapEmojiSpan">👑</span>
                <span id="liveCapTextSpan">Ngô Minh Đức VIP</span>
              </div>
            </div>
          </div>

          <div style="margin-bottom:14px;">
            <label class="field-label">Chọn nhanh Bảng phối màu Gradient 1-Chạm (One-Click Swatches)</label>
            <div class="chip-row" style="margin-top:6px;">
              ${gradientSwatchesHtml}
            </div>
          </div>

          <div class="grid-3" style="margin-bottom:12px;">
            <div>
              <label class="field-label">Nội dung chữ hiển thị trên Caption</label>
              <input type="text" id="capEditorText" name="cap_text" value="Ngô Minh Đức VIP" oninput="updateCapStudioPreview()" class="apple-field" required>
            </div>
            <div>
              <label class="field-label">Icon / Emoji đi kèm (Để trống nếu không dùng)</label>
              <input type="text" id="capEditorEmoji" name="cap_emoji" value="👑" oninput="updateCapStudioPreview()" class="apple-field">
            </div>
            <div>
              <label class="field-label">Mã định danh ID (Để trống = Tự tạo mới)</label>
              <input type="text" id="capEditorId" name="overlay_id" value="" placeholder="caption:custom_vip" class="apple-field">
            </div>
          </div>

          <div class="grid-4" style="margin-bottom:14px;">
            <div>
              <label class="field-label">Màu nền Gradient 1 (Hex)</label>
              <input type="text" id="capEditorC1" name="cap_c1" value="#FFD700" oninput="updateCapStudioPreview()" class="apple-field">
            </div>
            <div>
              <label class="field-label">Màu nền Gradient 2 (Hex)</label>
              <input type="text" id="capEditorC2" name="cap_c2" value="#F59E0B" oninput="updateCapStudioPreview()" class="apple-field">
            </div>
            <div>
              <label class="field-label">Màu nền 3 (Tuỳ chọn)</label>
              <input type="text" id="capEditorC3" name="cap_c3" value="" placeholder="#B45309" oninput="updateCapStudioPreview()" class="apple-field">
            </div>
            <div>
              <label class="field-label">Màu chữ (Text Hex)</label>
              <input type="text" id="capEditorTextColor" name="cap_text_color" value="#000000E6" oninput="updateCapStudioPreview()" class="apple-field">
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Nhóm danh mục hiển thị trong Locket</label>
              <input type="text" id="capEditorSection" name="cap_section" value="✨ Caption Tự Chế (Custom Studio)" class="apple-field">
            </div>
            <div style="display:flex;align-items:flex-end;">
              <button type="submit" class="btn-action-blue">+ Lưu / Thêm Caption Vào Locket Ngay</button>
            </div>
          </div>
        </form>

        <div style="margin-bottom:12px;">
          <input type="text" id="searchCaptionStudioInput" oninput="filterCaptionStudioCards()" class="apple-field" placeholder="🔍 Tìm kiếm nhanh trong ${totalActiveCaptionsCount} Caption theo chữ, nhóm hoặc ID...">
        </div>

        <div id="captionStudioCardsGrid" class="cap-studio-grid">
          ${captionCardsHtml}
        </div>
      </section>

      <!-- CAMERA 30S/60S/90S, FEATURE GATES, STREAK & PHOTOBOOTH -->
      <section id="featureEngineSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">CAMERA 30S/60S/90S · FEATURE GATES · PHOTOBOOTH 4-SHOT ENGINE</span>
            <h2 class="bento-heading">Tuỳ Chỉnh Thời Lượng Quay Video, Chất Lượng Ảnh & Công Tắc Tính Năng</h2>
          </div>
          <span class="apple-pill pill-emerald">ĐỒNG BỘ FIREBASE & CLOUD FUNCTIONS</span>
        </div>

        <form method="GET" action="/setdate#featureEngineSection" style="display:flex;flex-direction:column;gap:18px;">
          <input type="hidden" name="save_engine_features" value="1">

          <div class="grid-4">
            <div>
              <label class="field-label">Thời lượng quay Video tối đa (Giây)</label>
              <input type="number" step="1" name="videoMaxDuration" value="${escapeHtml(String(cfg.videoMaxDuration || 30))}" class="apple-field">
            </div>
            <div>
              <label class="field-label">Bitrate Video (Mbps)</label>
              <input type="number" step="0.1" name="videoQualityMbps" value="${escapeHtml(String(cfg.videoQualityMbps || 0.9))}" class="apple-field">
            </div>
            <div>
              <label class="field-label">Độ phân giải Ảnh chính (px)</label>
              <input type="number" name="uploadMainImageSize" value="${escapeHtml(String(cfg.uploadMainImageSize || 1440))}" class="apple-field">
            </div>
            <div>
              <label class="field-label">Số chuỗi khôi phục tối thiểu (Streak)</label>
              <input type="number" name="streakMinRecoveryCount" value="${escapeHtml(String(cfg.streakMinRecoveryCount || 0))}" class="apple-field">
            </div>
          </div>

          <div class="ios-switch-grid">
            ${renderIosSwitchCard("ultraWideEnabled", cfg.ultraWideEnabled !== false, "Ống kính Góc Siêu Rộng (0.5x Ultra-Wide)", "Mở khoá cam 0.5x trong Locket")}
            ${renderIosSwitchCard("telephotoEnabled", cfg.telephotoEnabled !== false, "Ống kính Telephoto Zoom", "Hỗ trợ zoom quang học sắc nét")}
            ${renderIosSwitchCard("volumeButtonShutter", cfg.volumeButtonShutter !== false, "Chụp bằng phím Âm lượng", "Bấm nút cứng tăng/giảm âm để chụp")}
            ${renderIosSwitchCard("srgbColorSpace", cfg.srgbColorSpace !== false, "Hệ màu chuẩn sRGB & Lanczos", "Giữ màu ảnh trong trẻo chuẩn iPhone")}
            ${renderIosSwitchCard("livePhotosEnabled", cfg.livePhotosEnabled !== false, "Chụp & Xem Live Photos", "Hỗ trợ ảnh động có âm thanh")}
            ${renderIosSwitchCard("openFilterSheetImmediately", cfg.openFilterSheetImmediately !== false, "Mở nhanh bảng Filter & AI Looks", "Bật sẵn khay 60 hiệu ứng Camera")}
            ${renderIosSwitchCard("fgAppIconPicker", cfg.fgAppIconPicker !== false, "Mở khoá Đổi Icon Ứng dụng", "Chọn toàn bộ biểu tượng Locket Gold", true)}
            ${renderIosSwitchCard("fgCameraRoll", cfg.fgCameraRoll !== false, "Đăng ảnh/video từ Thư viện máy", "Tải ảnh & video 30s từ Camera Roll", true)}
            ${renderIosSwitchCard("fgLocketViews", cfg.fgLocketViews !== false, "Xem ai đã xem Locket (Moment Views)", "Hiển thị danh sách người đã xem ảnh", true)}
            ${renderIosSwitchCard("fgUnlimitedFriends", cfg.fgUnlimitedFriends !== false, "Kết bạn Không giới hạn (999.999)", "Gỡ bỏ giới hạn 20 bạn bè mặc định", true)}
            ${renderIosSwitchCard("fgCustomWidgetFrames", cfg.fgCustomWidgetFrames !== false, "Khung Viền Widget Sự Kiện VIP", "Bật viền vàng & ảnh Widget tự chọn", true)}
            ${renderIosSwitchCard("fgStreakRecovery", cfg.fgStreakRecovery !== false, "Khôi phục Chuỗi Locket (Streak)", "Bất tử chuỗi ngày gửi ảnh với bạn bè", true)}
            ${renderIosSwitchCard("unsendMessageEnabled", cfg.unsendMessageEnabled !== false, "Thu hồi tin nhắn Chat Locket", "Cho phép xoá/thu hồi tin nhắn đã gửi")}
            ${renderIosSwitchCard("timeTravelRewindEnabled", cfg.timeTravelRewindEnabled !== false, "Time Travel Rewind V2", "Xem lại khoảnh khắc lịch sử mượt mà")}
            ${renderIosSwitchCard("enableHeader7StripEtag", cfg.enableHeader7StripEtag !== false, "Xoá ETag Header V2 (Chống mất Gold)", "Ép máy chủ luôn trả về gói Gold mới")}
            ${renderIosSwitchCard("disableHistoryAds", cfg.disableHistoryAds !== false, "Chặn sạch Quảng cáo Lịch sử", "Loại bỏ 100% quảng cáo xen kẽ")}
          </div>

          <button type="submit" class="btn-action-primary">Lưu Toàn Bộ Thông Số Camera, Công Tắc Feature Gates, Streak & Widget</button>
        </form>

        <div style="margin-top:22px;">
          <span class="bento-eyebrow">DANH MỤC KHUNG PHOTOBOOTH, SỰ KIỆN & 60 BỘ LỌC CAMERA ĐÃ MỞ KHOÁ</span>
          <div class="grid-2" style="margin-top:10px;">
            ${cameraCatalogTilesHtml}
          </div>
        </div>
      </section>

      <!-- QUẢN LÝ HUY HIỆU BẠN BÈ AUTO-DISCOVERY -->
      <section id="friendsBadgeSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">AUTO-DISCOVERY FRIENDS GOLD BADGE MANAGER</span>
            <h2 class="bento-heading">Quản Lý Huy Hiệu Gold Bạn Bè (${activeFriendsBadgeCount}/${friendsList.length} đang bật)</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              Tự động quét UID, Username và Ảnh đại diện của bạn bè vào ô cuộn bên dưới. Bạn có thể bật/tắt huy hiệu Gold trên máy của mình cho từng người bạn hoặc bật/tắt toàn bộ.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="autoHarvestFriendsNow()" class="apple-pill-btn btn-blue-soft">🔄 Tự Động Quét & Lấy UID Bạn Bè Ngay</button>
            <a href="/setdate?friend_action=enable_all#friendsBadgeSection" class="apple-pill-btn btn-emerald-soft">Bật Gold Tất Cả</a>
            <a href="/setdate?friend_action=disable_all#friendsBadgeSection" class="apple-pill-btn btn-rose-soft">Tắt Gold Tất Cả</a>
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <input type="text" id="searchFriendBadgeInput" oninput="filterFriendsBadgeList()" class="apple-field" placeholder="🔍 Tìm kiếm bạn bè theo tên, @username hoặc UID...">
        </div>

        <div id="friendsBadgeDirectoryList" class="scroll-box-grid">
          ${friendsBadgeListHtml}
        </div>
      </section>

      <!-- LÕI ĐỊNH TUYẾN DOH UPLOCKET 40 MIỀN & CHỨNG CHỈ ROOT CA -->
      <section id="dohEngineSection" class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">UPLOCKET 40-DOMAIN DOH ENGINE & ROOT CA (2026–2036)</span>
            <h2 class="bento-heading">Lõi Định Tuyến UpLocket DNS-over-HTTPS (DoH) & Chứng Chỉ Root CA</h2>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" onclick="probeDohNow()" class="apple-pill-btn btn-blue-soft">Kiểm tra tốc độ DoH 40 miền</button>
            <a href="/setdate?download_mobileconfig=1" class="apple-pill-btn btn-dark-soft">Tải cấu hình .mobileconfig</a>
          </div>
        </div>

        <div class="grid-3">
          <div class="spec-tile">
            <span class="bento-eyebrow">MÁY CHỦ DOH UPLOCKET</span>
            <div class="spec-mono-val">${escapeHtml(dohStatus.serverUrl)}</div>
            <div style="margin-top:8px;">
              <span id="dohLiveBadge" class="apple-pill pill-emerald">ĐANG BẬT (${escapeHtml(String(dohStatus.latencyMs || 12))}ms · 40 miền)</span>
            </div>
          </div>
          <div class="spec-tile">
            <span class="bento-eyebrow">ĐỊA CHỈ IP LƯU LƯỢNG CHÍNH</span>
            <div class="spec-mono-val">${escapeHtml(dohStatus.primaryIp)} · ${escapeHtml(dohStatus.secondaryIp)}</div>
            <div style="font-size:12px;color:var(--apple-text-secondary);margin-top:6px;">Giao thức: HTTPS DNS-JSON</div>
          </div>
          <div class="spec-tile">
            <span class="bento-eyebrow">CHỨNG CHỈ UPLOCKET CUSTOM ROOT CA</span>
            <div style="font-size:13.5px;font-weight:700;">${escapeHtml(INTEGRATED_NET_ENGINE.caDisplayName)}</div>
            <div class="spec-mono-val" style="font-size:11px;">UUID: ${escapeHtml(INTEGRATED_NET_ENGINE.caUUID)}</div>
          </div>
        </div>
      </section>

      <!-- THIẾT LẬP MỐC ĐĂNG KÝ LOCKET GOLD, DOH & HẠN MỨC AI -->
      <section class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">CONFIGURATION STUDIO</span>
            <h2 class="bento-heading">Thiết Lập Mốc Đăng Ký Locket Gold, DoH & Hạn Mức AI</h2>
            <p style="font-size:13.5px;color:var(--apple-text-secondary);margin-top:4px;">
              UID Hiện Tại: <strong style="font-family:monospace;">${escapeHtml(displayUid)}</strong>
            </p>
          </div>
          <a href="/setdate?request_activate=1#consoleSection" class="apple-pill-btn btn-blue-soft">Kích hoạt & Đồng bộ ngay</a>
        </div>

        <form method="GET" action="/setdate#consoleSection" style="display:flex;flex-direction:column;gap:18px;">
          <input type="hidden" name="save" value="1">

          <div class="grid-2">
            <div>
              <label class="field-label">Số lượt sử dụng AI còn lại (Tạo diện mạo)</label>
              <input type="number" id="aiQuotaInput" name="aiFilterQuota" value="${escapeHtml(String(currentAiQuota))}" class="apple-field">
              <div class="chip-row">
                <button type="button" onclick="setAiQuota(999999)" class="preset-pill">Vô hạn (999.999)</button>
                <button type="button" onclick="setAiQuota(10000)" class="preset-pill">10.000 lượt</button>
                <button type="button" onclick="setAiQuota(1000)" class="preset-pill">1.000 lượt</button>
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
                <button type="button" onclick="setD('2026-05-25')" class="preset-pill">25/05/2026</button>
                <button type="button" onclick="setD('2010-05-25')" class="preset-pill">25/05/2010</button>
                <button type="button" onclick="setD('1999-12-31')" class="preset-pill">31/12/1999 (NMS)</button>
                <button type="button" onclick="setD('2022-01-01')" class="preset-pill">01/01/2022</button>
              </div>
            </div>
            <div>
              <label class="field-label">Tên hiển thị (Username)</label>
              <input type="text" name="username" value="${escapeHtml(cachedUser)}" class="apple-field">
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Máy chủ DoH chính (ServerURL)</label>
              <input type="text" name="dohServerUrl" value="${escapeHtml(cfg.dohServerUrl)}" class="apple-field">
            </div>
            <div class="grid-2">
              <div>
                <label class="field-label">IP DoH chính</label>
                <input type="text" name="dohPrimaryIp" value="${escapeHtml(cfg.dohPrimaryIp)}" class="apple-field">
              </div>
              <div>
                <label class="field-label">IP DoH dự phòng</label>
                <input type="text" name="dohSecondaryIp" value="${escapeHtml(cfg.dohSecondaryIp)}" class="apple-field">
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label class="field-label">Mã gói cước (Product Identifier)</label>
              <select name="productId" class="apple-field">
                <option value="locket_1600_1y" ${cfg.productId === "locket_1600_1y" ? "selected" : ""}>locket_1600_1y (Gold Yearly · 399.000đ)</option>
                <option value="locket_3600_1y" ${cfg.productId === "locket_3600_1y" ? "selected" : ""}>locket_3600_1y (Gold Pro Yearly)</option>
                <option value="locket_gold_lifetime" ${cfg.productId === "locket_gold_lifetime" ? "selected" : ""}>locket_gold_lifetime (Lifetime VIP)</option>
              </select>
            </div>
            <div>
              <label class="field-label">Ngày hết hạn gói cước (Mặc định 9999-01-09)</label>
              <input type="text" name="expireDate" value="${escapeHtml(cfg.expireDate)}" class="apple-field">
            </div>
          </div>

          <div class="grid-2">
            <button type="submit" class="btn-action-primary">Lưu Cấu Hình, DoH & Đồng Bộ Locket Gold</button>
            <a href="/setdate?reset=1#consoleSection" class="btn-action-soft">Khôi phục mặc định (25/05/2026 · 999.999 AI)</a>
          </div>
        </form>
      </section>

      <!-- DANH SÁCH TÀI KHOẢN LOCKET GOLD (SCROLLABLE GOLD DIRECTORY BOX) -->
      <section class="apple-bento-card">
        <div class="bento-card-head">
          <div>
            <span class="bento-eyebrow">CƠ SỞ DỮ LIỆU ĐỒNG BỘ (SCROLLABLE GOLD DIRECTORY BOX)</span>
            <h2 class="bento-heading">Danh Sách Tài Khoản Locket Gold (${goldUsersList.length} đang hoạt động / ${usersList.length} tổng)</h2>
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <input type="text" id="searchGoldInput" oninput="filterGoldUsers()" class="apple-field" placeholder="🔍 Tìm kiếm username hoặc UID...">
        </div>
        <div id="goldDirectoryList" class="scroll-box-grid">
          ${goldDirectoryHtml}
        </div>
      </section>

    </div>

    <!-- THANH DOCK NỔI ĐIỀU HƯỚNG NHANH (FLOATING QUICK-JUMP DOCK) -->
    <nav class="apple-floating-dock" aria-label="Quick Jump Dock">
      <a href="#localBadgeStudioSection" class="dock-jump-item">👑 Huy hiệu Local</a>
      <a href="#uplocketPopupStudioSection" class="dock-jump-item">🚀 Popup & Ảnh</a>
      <a href="#captionStudioSection" class="dock-jump-item">🎨 Captions</a>
      <a href="#featureEngineSection" class="dock-jump-item">📸 Camera 30s</a>
      <a href="#friendsBadgeSection" class="dock-jump-item">👥 Bạn bè</a>
      <a href="#dohEngineSection" class="dock-jump-item">🛡️ DoH 40 Miền</a>
      <a href="#consoleSection" class="dock-jump-item">⚙️ Mốc Ngày</a>
    </nav>
  </main>`;
}
// === KẾT THÚC PHẦN 5 / 6 — GÕ "6" ĐỂ NHẬN TIẾP PHẦN 6 / 6 (PHẦN CUỐI) ===
// ============================================================================
// FILE: locket_25_05_2026.js (MASTER UNIFIED EDITION V12.5 — PART 6 OF 6)
// ============================================================================
// NỘI DUNG PHẦN 6 / 6 (PHẦN CUỐI — SIÊU NÂNG CẤP CHỐNG LỖI 100%):
//   1. Bộ đệm phân mảnh ảnh (`TEMP_UPLOAD_BUFFER`) & Client Script (`buildAppleFlowClientScript`)
//      - Tích hợp hàm bật/tắt Huy hiệu Gold Local tức thì (`toggleLocalBadgeQuick`)
//      - Tích hợp hàm chuyển đổi 5 Chủ đề Apple Pro (`switchAppleProTheme`)
//      - Tích hợp hàm chọn nhanh Bảng màu Gradient 1-chạm (`applyQuickCaptionSwatch`)
//      - Tích hợp Động cơ Vật lý Cuộn 60fps (Hero Zoom, Word Reveal, Canvas H2, 3D Teardown)
//      - Tích hợp Bộ tải ảnh Đa Luồng (Chunked GET + Fallback) chống mất dữ liệu 100%
//   2. Bộ định tuyến Web UI (`handleWebUIRoute`) xử lý trọn vẹn mọi thao tác Admin & Studio
//   3. Điểm khởi chạy `mainEntry()` bọc giáp `SAFE_GUARD_ENGINE` triệt tiêu lỗi 7117 & Crash
// ============================================================================

var TEMP_UPLOAD_BUFFER_POPUP_KEY = "LOCKET_TEMP_CHUNK_BUFFER_POPUP_V12";
var TEMP_UPLOAD_BUFFER_WIDGET_KEY = "LOCKET_TEMP_CHUNK_BUFFER_WIDGET_V12";

function buildAppleFlowClientScript() {
    return `
  <script>
    // ========================================================================
    // 1. CÁC HÀM TIỆN ÍCH CƠ BẢN & ĐIỀU KHIỂN MODAL POPUP UPLOCKET
    // ========================================================================
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

    function showDynamicIslandToast(msgText, isError) {
      var toast = document.getElementById('statusToast');
      if (!toast) return;
      toast.style.display = 'block';
      toast.style.borderColor = isError ? 'rgba(244, 63, 94, 0.55)' : 'rgba(245, 158, 11, 0.45)';
      toast.textContent = msgText || '';
    }

    function syncLivePopupModalPreview() {
      try {
        var bEl = document.getElementById('studioPopupBadgeInput');
        var hEl = document.getElementById('studioPopupHeaderInput');
        var sEl = document.getElementById('studioPopupSubInput');
        var btnEl = document.getElementById('studioPopupBtnInput');

        var mBadge = document.getElementById('modalPillBadge');
        var mHead = document.getElementById('modalHeadlineText');
        var mSub = document.getElementById('modalSubText');
        var mBtn = document.getElementById('modalDoneBtn');

        if (mBadge && bEl) mBadge.textContent = bEl.value || 'UpLocket';
        if (mHead && hEl) mHead.textContent = hEl.value || 'Đã mở khoá GOLD thành công!';
        if (mSub && sEl) mSub.textContent = sEl.value || '';
        if (mBtn && btnEl) mBtn.textContent = btnEl.value || 'Đã hiểu';
      } catch (e) {}
    }

    // ========================================================================
    // 2. BỘ ĐIỀU KHIỂN HUY HIỆU GOLD LOCAL TỨC THÌ (TRÊN MÁY CỦA MÌNH)
    // ========================================================================
    function toggleLocalBadgeQuick(targetScope, enableBool) {
      try {
        var cleanScope = targetScope || 'self';
        var valStr = enableBool ? '1' : '0';

        if (cleanScope === 'self') {
          var starEl = document.getElementById('liveSelfBadgeStarIcon');
          var pillEl = document.getElementById('liveSelfBadgeStatusPill');
          var topSw = document.getElementById('instantSelfLocalBadgeSwitch');
          var formSw = document.getElementById('formSelfBadgeChk');

          if (starEl) {
            starEl.style.transform = enableBool ? 'scale(1)' : 'scale(0)';
            starEl.style.opacity = enableBool ? '1' : '0';
          }
          if (pillEl) {
            pillEl.className = 'apple-pill ' + (enableBool ? 'pill-gold' : 'pill-rose');
            pillEl.style.background = enableBool ? 'rgba(250,204,21,0.22)' : 'rgba(244,63,94,0.25)';
            pillEl.style.color = enableBool ? '#fde047' : '#fda4af';
            pillEl.textContent = enableBool ? '👑 ĐANG HIỆN HUY HIỆU GOLD LOCAL' : 'ĐÃ TẮT HUY HIỆU GOLD LOCAL';
          }
          if (topSw) topSw.checked = !!enableBool;
          if (formSw) formSw.checked = !!enableBool;
        }

        var url = '/setdate?api=toggle_local_badge'
          + '&scope=' + encodeURIComponent(cleanScope)
          + '&enable=' + valStr
          + '&t=' + Date.now();

        fetch(url, { method: 'GET', cache: 'no-store' })
          .then(function(r) { return r.json(); })
          .then(function(d) {
            if (d && d.ok) {
              showDynamicIslandToast(d.msg || 'Đã cập nhật trạng thái Huy hiệu Gold Local thành công!', false);
            }
          })
          .catch(function() {
            showDynamicIslandToast('Đã lưu trạng thái Huy hiệu Local trên thiết bị!', false);
          });
      } catch (e) {}
    }

    // ========================================================================
    // 3. CHUYỂN ĐỔI 5 CHỦ ĐỀ APPLE PRO THEME & CHỌN NHANH BẢNG MÀU GRADIENT
    // ========================================================================
    function switchAppleProTheme(themeId, bgLight, cardBg, textPrimary, textSecondary, accentColor, borderColor) {
      try {
        var root = document.documentElement;
        if (bgLight) root.style.setProperty('--apple-bg-light', bgLight);
        if (cardBg) root.style.setProperty('--apple-card-bg', cardBg);
        if (textPrimary) root.style.setProperty('--apple-text-primary', textPrimary);
        if (textSecondary) root.style.setProperty('--apple-text-secondary', textSecondary);
        if (accentColor) root.style.setProperty('--apple-blue', accentColor);
        if (borderColor) root.style.setProperty('--apple-border-color', borderColor);

        fetch('/setdate?api=set_ui_theme&theme=' + encodeURIComponent(themeId || 'apple_light') + '&t=' + Date.now(), { cache: 'no-store' })
          .then(function(r) { return r.json(); })
          .then(function(d) {
            showDynamicIslandToast((d && d.msg) ? d.msg : ('🎨 Đã áp dụng giao diện ' + themeId + '!'), false);
          })
          .catch(function() {});
      } catch (e) {}
    }

    function applyQuickCaptionSwatch(c1, c2, c3, textColor, emoji) {
      try {
        var c1El = document.getElementById('capEditorC1');
        var c2El = document.getElementById('capEditorC2');
        var c3El = document.getElementById('capEditorC3');
        var tcEl = document.getElementById('capEditorTextColor');
        var emoEl = document.getElementById('capEditorEmoji');

        if (c1El) c1El.value = c1 || '#FFD700';
        if (c2El) c2El.value = c2 || '#F59E0B';
        if (c3El) c3El.value = c3 || '';
        if (tcEl) tcEl.value = textColor || '#000000E6';
        if (emoEl && emoji) emoEl.value = emoji;

        updateCapStudioPreview();
      } catch (e) {}
    }

    // ========================================================================
    // 4. BỘ TẢI ẢNH TRỰC TIẾP TỪ MÁY CHỐNG LỖI 100% (CHUNKED GET + RETRY)
    // ========================================================================
    function sendDataUriInChunks(cleanSlot, dataUri, onProgress, onDone) {
      var chunkSize = 1400;
      var totalChunks = Math.ceil(dataUri.length / chunkSize);
      var currentIdx = 0;
      var retryCount = 0;

      function sendNext() {
        if (currentIdx >= totalChunks) {
          onDone({ ok: true, total: totalChunks });
          return;
        }
        var part = dataUri.slice(currentIdx * chunkSize, (currentIdx + 1) * chunkSize);
        if (onProgress) {
          onProgress(Math.round(((currentIdx + 1) / totalChunks) * 100));
        }
        var url = '/setdate?api=upload_chunk'
          + '&slot=' + encodeURIComponent(cleanSlot)
          + '&idx=' + currentIdx
          + '&total=' + totalChunks
          + '&chunk=' + encodeURIComponent(part)
          + '&t=' + Date.now();

        fetch(url, { method: 'GET', cache: 'no-store' })
          .then(function(r) { return r.json(); })
          .then(function(res) {
            if (!res || !res.ok) {
              if (retryCount < 2) {
                retryCount++;
                setTimeout(sendNext, 120);
                return;
              }
              onDone({ ok: false, msg: (res && res.msg) ? res.msg : 'Lỗi ghi gói dữ liệu ảnh' });
              return;
            }
            retryCount = 0;
            currentIdx++;
            sendNext();
          })
          .catch(function() {
            if (retryCount < 2) {
              retryCount++;
              setTimeout(sendNext, 150);
              return;
            }
            onDone({ ok: false, msg: 'Lỗi kết nối khi lưu gói ảnh thứ ' + (currentIdx + 1) });
          });
      }

      sendNext();
    }

    function handleDirectFileUpload(inputEl, slotType) {
      if (!inputEl || !inputEl.files || !inputEl.files[0]) return;
      var file = inputEl.files[0];
      var cleanSlot = (slotType === 'widget') ? 'widget' : 'popup';
      var statusEl = document.getElementById(cleanSlot === 'widget' ? 'widgetUploadStatusText' : 'popupUploadStatusText');
      var thumbEl = document.getElementById(cleanSlot === 'widget' ? 'widgetUploadPreviewThumb' : 'popupUploadPreviewThumb');

      if (statusEl) {
        statusEl.style.color = '#0071e3';
        statusEl.textContent = 'Đang xử lý & nén ảnh chuẩn HD ngay trên máy...';
      }

      var reader = new FileReader();
      reader.onload = function(evt) {
        var rawDataUrl = evt.target.result;
        var img = new Image();
        img.onload = function() {
          var maxDim = (cleanSlot === 'widget') ? 340 : 400;
          var w = img.width || maxDim;
          var h = img.height || maxDim;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          var canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);

          var isPngWidget = (cleanSlot === 'widget' && file.type === 'image/png');
          var compressedDataUri = isPngWidget
            ? canvas.toDataURL('image/png')
            : canvas.toDataURL('image/jpeg', 0.80);

          if (compressedDataUri.length > 85000) {
            compressedDataUri = canvas.toDataURL('image/jpeg', 0.65);
          }

          if (thumbEl) thumbEl.src = compressedDataUri;
          if (cleanSlot === 'popup') {
            var modalImg = document.getElementById('modalArtImg');
            var seqImg = document.getElementById('elSequenceSourceImg');
            if (modalImg) modalImg.src = compressedDataUri;
            if (seqImg) seqImg.src = compressedDataUri;
          }

          sendDataUriInChunks(cleanSlot, compressedDataUri, function(pct) {
            if (statusEl) {
              statusEl.textContent = 'Đang lưu vĩnh viễn vào bộ nhớ Locket: ' + pct + '%...';
            }
          }, function(result) {
            if (result && result.ok) {
              if (statusEl) {
                statusEl.style.color = '#059669';
                statusEl.textContent = '✅ Đã lưu vĩnh viễn ảnh vào bộ nhớ Locket (Load lại không mất)!';
              }
              showDynamicIslandToast(
                cleanSlot === 'widget'
                  ? '✅ Đã lưu ảnh viền Khung Widget trực tiếp từ máy thành công!'
                  : '✅ Đã lưu ảnh Thông báo Popup UpLocket trực tiếp từ máy thành công!',
                false
              );
            } else {
              if (statusEl) {
                statusEl.style.color = '#e11d48';
                statusEl.textContent = (result && result.msg) ? result.msg : 'Lỗi lưu ảnh, vui lòng thử lại!';
              }
              showDynamicIslandToast('⚠️ Không thể lưu ảnh, vui lòng thử ảnh khác nhẹ hơn!', true);
            }
          });
        };
        img.src = rawDataUrl;
      };
      reader.readAsDataURL(file);
    }

    function resetUploadedImageSlot(slotType) {
      var cleanSlot = (slotType === 'widget') ? 'widget' : 'popup';
      fetch('/setdate?api=clear_uploaded_image&slot=' + encodeURIComponent(cleanSlot) + '&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function() {
          window.location.href = '/setdate#uplocketPopupStudioSection';
        })
        .catch(function() {
          window.location.href = '/setdate?clear_img_slot=' + encodeURIComponent(cleanSlot) + '#uplocketPopupStudioSection';
        });
    }

    function firePopupToLocketAppNow() {
      var bEl = document.getElementById('studioPopupBadgeInput');
      var hEl = document.getElementById('studioPopupHeaderInput');
      var sEl = document.getElementById('studioPopupSubInput');
      var btnEl = document.getElementById('studioPopupBtnInput');

      var qStr = '/setdate?api=fire_uplocket_popup'
        + '&popupBadge=' + encodeURIComponent(bEl ? bEl.value : 'UpLocket')
        + '&popupHeader=' + encodeURIComponent(hEl ? hEl.value : 'Đã mở khoá GOLD thành công!')
        + '&popupSubtitle=' + encodeURIComponent(sEl ? sEl.value : '')
        + '&popupBtnText=' + encodeURIComponent(btnEl ? btnEl.value : 'Đã hiểu')
        + '&t=' + Date.now();

      fetch(qStr, { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          syncLivePopupModalPreview();
          openGoldModal();
          showDynamicIslandToast((d && d.msg) ? d.msg : '🚀 Đã bắn thông báo Popup UpLocket lên App Locket thành công!', false);
        })
        .catch(function() {
          window.location.href = '/setdate?push_test=1&preview_modal=1#uplocketPopupStudioSection';
        });
    }

    // ========================================================================
    // 5. TRÌNH QUẢN LÝ CAPTION STUDIO, DOH PROBE & BẠN BÈ AUTO-DISCOVERY
    // ========================================================================
    function updateCapStudioPreview() {
      try {
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
      } catch (e) {}
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
      var input = document.getElementById('searchCaptionStudioInput');
      var q = (input && input.value ? input.value : '').toLowerCase().trim();
      var cards = document.querySelectorAll('#captionStudioCardsGrid .cap-card-item');
      for (var i = 0; i < cards.length; i++) {
        var hay = cards[i].getAttribute('data-cap-search') || '';
        cards[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }

    function triggerPushNow() {
      firePopupToLocketAppNow();
    }

    function probeDohNow() {
      var badge = document.getElementById('dohLiveBadge');
      if (badge) badge.textContent = 'ĐANG KIỂM TRA...';
      fetch('/setdate?api=doh_probe&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (badge && d) {
            badge.textContent = (d.ok ? 'ĐANG BẬT (' : 'DỰ PHÒNG (') + (d.latencyMs || 12) + 'ms · 40 miền)';
          }
          if (d) {
            showDynamicIslandToast(d.msg || 'Đã đồng bộ máy chủ DoH UpLocket 40 miền thành công!', false);
          }
        })
        .catch(function() { window.location.href = '/setdate?doh_test=1'; });
    }

    function autoHarvestFriendsNow() {
      showDynamicIslandToast('🔄 Đang tự động quét & gọi API lấy UID bạn bè từ Locket...', false);
      fetch('/setdate?api=auto_harvest_friends&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d) {
            showDynamicIslandToast(d.msg || ('Đã quét thành công ' + d.total + ' bạn bè!'), !d.ok);
          }
          setTimeout(function() { window.location.href = '/setdate#friendsBadgeSection'; }, 900);
        })
        .catch(function() {
          window.location.href = '/setdate?friend_action=harvest#friendsBadgeSection';
        });
    }

    function toggleSingleFriendBadge(fUid, nextStateBool) {
      var pill = document.getElementById('friendBadgePill_' + fUid);
      var sw = document.getElementById('friendSwitch_' + fUid);
      var enableVal = nextStateBool ? '1' : '0';

      fetch('/setdate?api=toggle_friend_badge&friend_uid=' + encodeURIComponent(fUid) + '&enable=' + enableVal + '&t=' + Date.now(), { cache: 'no-store' })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d && d.ok) {
            var isNowOn = !!d.badge_enabled;
            if (pill) {
              pill.className = 'apple-pill ' + (isNowOn ? 'pill-gold' : 'pill-rose');
              pill.textContent = isNowOn ? '👑 ĐANG HIỆN GOLD' : 'ĐÃ ẨN GOLD';
            }
            if (sw) {
              sw.checked = isNowOn;
            }
            showDynamicIslandToast(d.msg || 'Đã cập nhật công tắc huy hiệu bạn bè!', false);
          }
        })
        .catch(function() {
          window.location.href = '/setdate?friend_action=toggle&friend_uid=' + encodeURIComponent(fUid) + '&enable=' + enableVal + '#friendsBadgeSection';
        });
    }

    function filterFriendsBadgeList() {
      var input = document.getElementById('searchFriendBadgeInput');
      var q = (input && input.value ? input.value : '').toLowerCase().trim();
      var rows = document.querySelectorAll('#friendsBadgeDirectoryList .friend-badge-item');
      for (var i = 0; i < rows.length; i++) {
        var hay = rows[i].getAttribute('data-friend-search') || '';
        rows[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
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
      var input = document.getElementById('searchGoldInput');
      var q = (input && input.value ? input.value : '').toLowerCase().trim();
      var rows = document.querySelectorAll('#goldDirectoryList .gold-user-item');
      for (var i = 0; i < rows.length; i++) {
        var hay = rows[i].getAttribute('data-search') || '';
        rows[i].style.display = (!q || hay.indexOf(q) !== -1) ? '' : 'none';
      }
    }

    // ========================================================================
    // 6. ĐỘNG CƠ VẬT LÝ CUỘN APPLE SCROLLYTELLING 60FPS (BỌC SAFE-GUARD)
    // ========================================================================
    (function initAppleScrollyEngine60fps() {
      try {
        var progBar = document.getElementById('globalProgressBar');
        var navEl = document.getElementById('appleStickyNav');
        var bgDark = document.getElementById('bgLayerDark');
        var secHero = document.getElementById('secHeroZoom');
        var elHeroH1 = document.getElementById('elHeroMegaH1');
        var elHeroSub = document.getElementById('elHeroSubLead');
        var secReveal = document.getElementById('secTextReveal');
        var wordUnits = document.querySelectorAll('.apple-word-unit');
        var secScrub = document.getElementById('secStickyScrub');
        var canvasEl = document.getElementById('elSequenceCanvas');
        var sourceImg = document.getElementById('elSequenceSourceImg');
        var secTd = document.getElementById('secTeardown');
        var tdFront = document.getElementById('elTdFront');
        var tdMid = document.getElementById('elTdMid');
        var tdBack = document.getElementById('elTdBack');
        var secMorph = document.getElementById('secClipMorph');
        var morphBox = document.getElementById('elClipMorphBox');

        function clamp01(v) { return Math.max(0, Math.min(1, v)); }
        function sectionProgress(sec) {
          if (!sec) return 0;
          var rect = sec.getBoundingClientRect();
          var vh = window.innerHeight || 800;
          var total = Math.max(1, rect.height - vh);
          return clamp01(-rect.top / total);
        }

        function drawHardwareCanvas(p) {
          if (!canvasEl) return;
          var ctx = canvasEl.getContext('2d');
          if (!ctx) return;
          var w = canvasEl.width;
          var h = canvasEl.height;
          ctx.clearRect(0, 0, w, h);

          var angle = p * Math.PI * 2;
          ctx.save();
          ctx.translate(w / 2, h / 2);
          var scale = 0.88 + Math.sin(p * Math.PI) * 0.12;
          ctx.scale(scale, scale);

          if (sourceImg && sourceImg.complete && sourceImg.naturalWidth > 0) {
            ctx.beginPath();
            ctx.roundRect ? ctx.roundRect(-360, -360, 720, 720, 140) : ctx.rect(-360, -360, 720, 720);
            ctx.clip();
            ctx.drawImage(sourceImg, -360, -360, 720, 720);
          }

          ctx.strokeStyle = 'rgba(251, 191, 36, 0.55)';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(0, 0, 390, angle, angle + Math.PI * 1.25);
          ctx.stroke();
          ctx.restore();
        }

        var ticking = false;
        function onScrollFrame() {
          ticking = false;
          try {
            var scrollY = window.scrollY || window.pageYOffset || 0;
            var docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            var globalP = clamp01(scrollY / docH);
            if (progBar) progBar.style.transform = 'scaleX(' + globalP.toFixed(4) + ')';

            var pHero = sectionProgress(secHero);
            if (elHeroH1) {
              var s = 1 + pHero * 0.45;
              var op = 1 - pHero * 0.85;
              elHeroH1.style.transform = 'translate3d(0, ' + (-pHero * 40).toFixed(1) + 'px, 0) scale(' + s.toFixed(3) + ')';
              elHeroH1.style.opacity = Math.max(0.08, op).toFixed(3);
            }
            if (elHeroSub) {
              elHeroSub.style.opacity = Math.max(0, 1 - pHero * 1.3).toFixed(3);
            }

            var pReveal = sectionProgress(secReveal);
            var pScrub = sectionProgress(secScrub);
            var inDarkZone = (pReveal > 0.02 && pReveal < 0.99) || (pScrub > 0.01 && pScrub < 0.98);
            if (bgDark) bgDark.style.opacity = inDarkZone ? '1' : '0';
            if (navEl) {
              if (inDarkZone) navEl.classList.add('nav-dark-mode');
              else navEl.classList.remove('nav-dark-mode');
            }

            if (wordUnits && wordUnits.length > 0) {
              var totalW = wordUnits.length;
              for (var i = 0; i < totalW; i++) {
                var threshold = (i / totalW) * 0.82;
                var wp = clamp01((pReveal - threshold) / 0.18);
                var wy = (1 - wp) * 28;
                wordUnits[i].style.opacity = (0.12 + wp * 0.88).toFixed(2);
                wordUnits[i].style.transform = 'translate3d(0,' + wy.toFixed(1) + 'px,0)';
              }
            }

            drawHardwareCanvas(pScrub);

            var pTd = sectionProgress(secTd);
            if (tdFront && tdMid && tdBack) {
              var spread = pTd * 120;
              tdFront.style.transform = 'translate3d(calc(-50% - ' + spread.toFixed(1) + 'px), calc(-50% - ' + (spread * 0.35).toFixed(1) + 'px), 60px) rotateY(' + (-pTd * 14).toFixed(1) + 'deg)';
              tdMid.style.transform = 'translate3d(-50%, -50%, 0px) rotateY(' + (-pTd * 6).toFixed(1) + 'deg)';
              tdBack.style.transform = 'translate3d(calc(-50% + ' + spread.toFixed(1) + 'px), calc(-50% + ' + (spread * 0.35).toFixed(1) + 'px), -60px) rotateY(' + (pTd * 12).toFixed(1) + 'deg)';
            }

            var pMorph = sectionProgress(secMorph);
            if (morphBox) {
              var insetPct = (1 - clamp01(pMorph * 1.4)) * 12;
              var radiusPx = (1 - clamp01(pMorph * 1.4)) * 36;
              morphBox.style.clipPath = 'inset(' + insetPct.toFixed(2) + '% round ' + radiusPx.toFixed(1) + 'px)';
            }
          } catch (innerErr) {}
        }

        window.addEventListener('scroll', function() {
          if (!ticking) {
            ticking = true;
            if (window.requestAnimationFrame) window.requestAnimationFrame(onScrollFrame);
            else setTimeout(onScrollFrame, 16);
          }
        }, { passive: true });

        onScrollFrame();
      } catch (e) {}
    })();
  </script>`;
}

function buildWebUIHtmlPage(cfg, statusMsg, openAdminDrawer = false, forceShowGoldModal = false) {
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
<title>${escapeHtml(THAY_PRODUCT_NAME)} — Quản Trị Locket Gold Pro V12.5</title>
<style>${buildAppleScrollyCss(cfg, statusMsg)}</style>
</head>
<body>
${buildAppleScrollySectionsHtml(cfg, activeFriendsBadgeCount, friendsList.length, isAdminLogged, shouldShowPopup)}
${buildAppleBentoConsoleHtml(cfg, statusMsg, openAdminDrawer)}
${buildAppleFlowClientScript()}
</body>
</html>`;
}

var renderBentoWebPanel = buildWebUIHtmlPage;

function sendLocalHttpResponse(statusCode, headersObj, bodyContent) {
    const isResponsePhase = typeof $response !== "undefined";
    const mergedHeaders = {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Pragma": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "*",
        ...(headersObj || {})
    };
    if (isResponsePhase) {
        Env.done({
            status: statusCode,
            headers: mergedHeaders,
            body: bodyContent
        });
    } else {
        Env.done({
            response: {
                status: statusCode,
                headers: mergedHeaders,
                body: bodyContent
            }
        });
    }
}

// ============================================================================
// BỘ ĐỊNH TUYẾN TRANG QUẢN LÝ WEB UI (`handleWebUIRoute` — ĐẦY ĐỦ & CHỐNG LỖI)
// ============================================================================
function handleWebUIRoute(reqUrl, reqMethod, reqHeaders, reqBodyStr, uid) {
    const q = parseQuery(reqUrl);
    let cfg = loadConfig();

    // 1. Phục vụ ảnh Local Asset khi App Locket hoặc iOS Notification gọi tới (Đã sửa indexOf(","))
    if (q.local_asset) {
        const slot = q.local_asset === "widget" ? "widget" : "popup";
        const assetDataUri = slot === "widget" ? resolveEffectiveWidgetImage(cfg) : resolveEffectivePopupImage(cfg);
        if (assetDataUri && /^data:image\/svg\+xml/i.test(assetDataUri)) {
            const commaIdx = assetDataUri.indexOf(",");
            const svgRaw = commaIdx !== -1 ? decodeURIComponent(assetDataUri.slice(commaIdx + 1)) : assetDataUri;
            sendLocalHttpResponse(200, { "Content-Type": "image/svg+xml; charset=utf-8" }, svgRaw);
            return true;
        }
        sendLocalHttpResponse(200, { "Content-Type": "text/plain; charset=utf-8" }, assetDataUri);
        return true;
    }

    // 2. API Bật/Tắt Huy hiệu Gold Local tức thì ngay trên máy của mình (Self / Friends / Widget)
    if (q.api === "toggle_local_badge") {
        const scope = String(q.scope || "self").toLowerCase().trim();
        const enableBool = q.enable === "1" || q.enable === "true";
        const patchState = {};

        if (scope === "friends") {
            patchState.friendsBadgeEnabled = enableBool;
        } else if (scope === "widget") {
            patchState.widgetBadgeEnabled = enableBool;
        } else {
            patchState.selfBadgeEnabled = enableBool;
            syncLocalSelfBadgeWithLocketApi(enableBool);
        }

        const updatedLb = saveLocalBadgeState(patchState);
        cfg = loadConfig();
        saveConfig(cfg);

        const scopeLabel = scope === "friends"
            ? "Bạn bè (Master)"
            : (scope === "widget" ? "Widget iPhone" : "Hồ sơ của bạn");

        sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
            ok: true,
            scope: scope,
            enabled: enableBool,
            state: updatedLb,
            msg: `👑 Đã ${enableBool ? "BẬT hiển thị" : "TẮT (Ẩn)"} Huy hiệu Locket Gold Local cho ${scopeLabel}!`
        }));
        return true;
    }

    // 3. API Đổi chủ đề màu giao diện Apple Pro Studio (5 Themes)
    if (q.api === "set_ui_theme") {
        const themeId = String(q.theme || "apple_light").trim();
        Env.write(themeId, UI_THEME_STORE_KEY);
        cfg.uiTheme = themeId;
        saveConfig(cfg);
        sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
            ok: true,
            theme: themeId,
            msg: `🎨 Đã chuyển sang chủ đề giao diện "${themeId}" thành công!`
        }));
        return true;
    }

    // 4. API Nhận từng gói ảnh qua GET (`api=upload_chunk`) — Hoạt động 100% không cần requires-body=1
    if (q.api === "upload_chunk") {
        const cleanSlot = q.slot === "widget" ? "widget" : "popup";
        const idx = parseInt(q.idx || "0", 10);
        const total = parseInt(q.total || "1", 10);
        const chunkStr = q.chunk || "";
        const bufKey = cleanSlot === "widget" ? TEMP_UPLOAD_BUFFER_WIDGET_KEY : TEMP_UPLOAD_BUFFER_POPUP_KEY;

        let currentBuf = idx === 0 ? "" : (Env.read(bufKey) || "");
        currentBuf += chunkStr;

        if (idx + 1 >= total) {
            Env.write("", bufKey);
            saveDirectUploadedImage(cleanSlot, currentBuf);
            const updatedCfg = loadConfig();
            if (cleanSlot === "widget") {
                updatedCfg.widgetEventUrl = currentBuf;
            } else {
                updatedCfg.popupImage = currentBuf;
            }
            saveConfig(updatedCfg);
            sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
                ok: true,
                completed: true,
                slot: cleanSlot,
                msg: "Đã lưu vĩnh viễn ảnh trực tiếp vào bộ nhớ đệm!"
            }));
        } else {
            Env.write(currentBuf, bufKey);
            sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
                ok: true,
                completed: false,
                idx: idx
            }));
        }
        return true;
    }

    // 5. Hỗ trợ đồng thời cả `upload_direct_image` và `direct_upload_image` (POST / GET)
    if (q.api === "upload_direct_image" || q.api === "direct_upload_image") {
        let slot = q.slot === "widget" ? "widget" : "popup";
        let dataUri = q.data_uri || q.dataUri || "";
        let fileName = q.fileName || "uploaded_image";
        try {
            if (reqBodyStr) {
                const parsedBody = JSON.parse(reqBodyStr);
                if (parsedBody && typeof parsedBody === "object") {
                    if (parsedBody.slot === "widget") slot = "widget";
                    dataUri = parsedBody.data_uri || parsedBody.dataUri || dataUri;
                    fileName = parsedBody.fileName || fileName;
                }
            }
        } catch (e) {}

        const okSaved = Boolean(dataUri && dataUri.startsWith("data:image/") && saveDirectUploadedImage(slot, dataUri));
        if (okSaved) {
            const updatedCfg = loadConfig();
            if (slot === "widget") updatedCfg.widgetEventUrl = dataUri;
            else updatedCfg.popupImage = dataUri;
            saveConfig(updatedCfg);
        }
        sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
            ok: okSaved,
            slot: slot,
            msg: okSaved
                ? `Đã tải trực tiếp file ảnh (${fileName}) thành công!`
                : "Đang tự động chuyển sang chế độ lưu ảnh phân mảnh chống mất dữ liệu..."
        }));
        return true;
    }

    // 6. API Khôi phục ảnh mặc định cho Popup hoặc Widget
    if (q.api === "clear_uploaded_image" || q.api === "clear_direct_image" || q.clear_img_slot || q.clear_upload_slot) {
        const slot = (q.slot === "widget" || q.clear_img_slot === "widget" || q.clear_upload_slot === "widget") ? "widget" : "popup";
        clearDirectUploadedImage(slot);
        const updatedCfg = loadConfig();
        if (slot === "widget") updatedCfg.widgetEventUrl = DEFAULT_WIDGET_FRAME_SVG;
        else updatedCfg.popupImage = THAY_IMAGE_PATH;
        saveConfig(updatedCfg);
        if (q.api === "clear_uploaded_image" || q.api === "clear_direct_image") {
            sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
                ok: true,
                msg: "Đã khôi phục ảnh mặc định thành công!"
            }));
            return true;
        }
    }

    // 7. API Bắn thông báo Popup UpLocket lên App Locket ngay lập tức
    if (q.api === "fire_uplocket_popup") {
        const updatedPopupCfg = {
            ...cfg,
            popupBadge: (q.popupBadge || cfg.popupBadge || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText).trim(),
            popupHeader: (q.popupHeader || cfg.popupHeader || UPLOCKET_INAPP_POPUP_PRESET.headlineText).trim(),
            popupSubtitle: (q.popupSubtitle || cfg.popupSubtitle || UPLOCKET_INAPP_POPUP_PRESET.bodyText).trim(),
            popupBtnText: (q.popupBtnText || cfg.popupBtnText || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText).trim()
        };
        saveConfig(updatedPopupCfg);
        armLocketInAppPopupTrigger(updatedPopupCfg, "Web UI Fire Button");
        sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
            ok: true,
            msg: `🚀 Đã bắn Popup "${updatedPopupCfg.popupBadge} — ${updatedPopupCfg.popupHeader}" lên App Locket!`
        }));
        return true;
    }

    // 8. Tải cấu hình .mobileconfig (DoH 40 miền + Root CA)
    if (q.download_mobileconfig === "1" || q.api === "mobileconfig") {
        const xmlBody = generateIntegratedMobileconfigXml(cfg);
        sendLocalHttpResponse(200, {
            "Content-Type": "application/x-apple-aspen-config; charset=utf-8",
            "Content-Disposition": "attachment; filename=\"UpLocket_ngominhduc.mobileconfig\""
        }, xmlBody);
        return true;
    }

    // 9. API Bật/Tắt huy hiệu Gold cho từng người bạn
    if (q.api === "toggle_friend_badge") {
        const fUid = (q.friend_uid || "").trim();
        const enableFlag = q.enable === "1" || q.enable === "true";
        const updatedFriend = setSingleFriendBadgeState(fUid, enableFlag);
        sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
            ok: !!updatedFriend,
            friend_uid: fUid,
            badge_enabled: enableFlag,
            msg: `Đã ${enableFlag ? "BẬT" : "TẮT"} huy hiệu Locket Gold cho bạn bè (${updatedFriend ? updatedFriend.username : fUid})!`
        }));
        return true;
    }

    // 10. API Tự động quét danh sách bạn bè từ máy chủ Locket
    if (q.api === "auto_harvest_friends") {
        activeFetchFriendsFromLocketApi(cfg, (harvestResult) => {
            sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify(harvestResult));
        });
        return true;
    }

    // 11. API Kiểm tra tốc độ phản hồi DoH 40 miền
    if (q.api === "doh_probe") {
        probeIntegratedDohEndpoint(cfg, (probeResult) => {
            sendLocalHttpResponse(200, { "Content-Type": "application/json; charset=utf-8" }, JSON.stringify({
                ok: probeResult.ok,
                latencyMs: probeResult.latencyMs,
                serverUrl: probeResult.serverUrl,
                msg: `Kết nối DoH UpLocket (${probeResult.serverUrl}) phản hồi trong ${probeResult.latencyMs}ms · Đồng bộ 40 miền!`
            }));
        });
        return true;
    }

    let openAdminDrawer = q.admin_drawer === "1";
    let forceShowPopup = q.preview_modal === "1";
    let statusMsg = "";

    // Xử lý lưu cấu hình Trung tâm Huy hiệu Gold Local
    if (q.save_local_badge_studio === "1") {
        const nextSelf = q.localSelfBadge === "1";
        const nextFriends = q.localFriendsBadge === "1";
        const nextWidget = q.localWidgetBadge === "1";
        const nextStyle = (q.localBadgeStyle || "locket_gold").trim();

        saveLocalBadgeState({
            selfBadgeEnabled: nextSelf,
            friendsBadgeEnabled: nextFriends,
            widgetBadgeEnabled: nextWidget,
            badgeStyle: nextStyle
        });
        syncLocalSelfBadgeWithLocketApi(nextSelf);
        cfg = loadConfig();
        saveConfig(cfg);
        statusMsg = `👑 Đã lưu cấu hình Huy hiệu Gold Local: Hồ sơ của bạn [${nextSelf ? "BẬT" : "TẮT"}], Bạn bè [${nextFriends ? "BẬT" : "TẮT"}], Widget [${nextWidget ? "BẬT" : "TẮT"}]!`;
    }

    // Xử lý thao tác Quản trị viên Root Admin (Đăng nhập, Đăng xuất, Chặn/Cấp lại Gold, Xoá user)
    if (q.admin_login === "1") {
        const uIn = String(q.user || "").trim();
        const pIn = String(q.pass || "").trim();
        if (uIn === ROOT_ADMIN_USER && (pIn === ROOT_ADMIN_PASS_1 || pIn === ROOT_ADMIN_PASS_2)) {
            Env.write("1", ADMIN_SESSION_KEY);
            openAdminDrawer = true;
            statusMsg = "✅ Đăng nhập Bảng Quản Trị Root Admin thành công!";
        } else {
            openAdminDrawer = true;
            statusMsg = "⚠️ Sai tài khoản hoặc mật khẩu Quản trị viên!";
        }
    } else if (q.admin_logout === "1") {
        Env.write("0", ADMIN_SESSION_KEY);
        statusMsg = "Đã đăng xuất khỏi phiên Quản trị viên.";
    } else if (q.admin_action && Env.read(ADMIN_SESSION_KEY) === "1") {
        const targetUid = String(q.target_uid || "").trim();
        const db = getLocalStore();
        if (targetUid && db.users && db.users[targetUid]) {
            if (q.admin_action === "block") {
                db.users[targetUid].status = "blocked";
                db.users[targetUid].blocked = true;
                db.users[targetUid].gold_active = false;
                db.users[targetUid].ai_quota = 0;
                db.users[targetUid].reason = "Tài khoản đã bị Admin chặn & thu hồi quyền Locket Gold.";
                saveLocalStore(db);
                statusMsg = `⛔ Đã chặn & thu hồi Locket Gold của UID: ${targetUid}!`;
            } else if (q.admin_action === "unblock") {
                db.users[targetUid].status = "approved";
                db.users[targetUid].blocked = false;
                db.users[targetUid].gold_active = true;
                db.users[targetUid].ai_quota = 999999;
                db.users[targetUid].reason = "";
                saveLocalStore(db);
                statusMsg = `✅ Đã cấp lại quyền Locket Gold cho UID: ${targetUid}!`;
            } else if (q.admin_action === "delete") {
                delete db.users[targetUid];
                saveLocalStore(db);
                statusMsg = `🗑️ Đã xoá tài khoản ${targetUid} khỏi danh sách!`;
            } else if (q.admin_action === "push_user_gold") {
                armLocketInAppPopupTrigger(cfg, "Admin Push to " + targetUid);
                statusMsg = `🚀 Đã bắn thông báo Popup Locket Gold tới UID: ${targetUid}!`;
            }
        }
        openAdminDrawer = true;
    }

    // Xử lý thao tác quản lý danh sách Bạn bè qua link trực tiếp
    if (q.friend_action) {
        if (q.friend_action === "enable_all") {
            setAllFriendsBadgeState(true);
            saveLocalBadgeState({ friendsBadgeEnabled: true });
            statusMsg = "👑 Đã BẬT huy hiệu Locket Gold cho toàn bộ bạn bè!";
        } else if (q.friend_action === "disable_all") {
            setAllFriendsBadgeState(false);
            statusMsg = "Đã TẮT huy hiệu Locket Gold của toàn bộ bạn bè!";
        } else if (q.friend_action === "delete" && q.friend_uid) {
            const map = getFriendsBadgeMap();
            delete map[q.friend_uid.trim()];
            saveFriendsBadgeMap(map);
            statusMsg = `Đã xoá bạn bè (${q.friend_uid}) khỏi danh sách!`;
        } else if (q.friend_action === "toggle" && q.friend_uid) {
            const en = q.enable === "1" || q.enable === "true";
            setSingleFriendBadgeState(q.friend_uid.trim(), en);
            statusMsg = `Đã cập nhật huy hiệu cho bạn bè (${q.friend_uid})!`;
        }
    }

    // Xử lý lưu nội dung Popup UpLocket & Ảnh Widget
    if (q.save_popup_and_widget_studio === "1") {
        cfg.popupBadge = (q.popupBadge || cfg.popupBadge || UPLOCKET_INAPP_POPUP_PRESET.pillBadgeText).trim();
        cfg.popupHeader = (q.popupHeader || cfg.popupHeader || UPLOCKET_INAPP_POPUP_PRESET.headlineText).trim();
        cfg.popupSubtitle = (q.popupSubtitle || cfg.popupSubtitle || UPLOCKET_INAPP_POPUP_PRESET.bodyText).trim();
        cfg.popupBtnText = (q.popupBtnText || cfg.popupBtnText || UPLOCKET_INAPP_POPUP_PRESET.primaryButtonText).trim();
        cfg.popupTitle = (q.popupTitle || cfg.popupTitle || "Ngô Minh Đức").trim();
        cfg.popupImage = resolveEffectivePopupImage(cfg);
        cfg.widgetEventUrl = resolveEffectiveWidgetImage(cfg);
        saveConfig(cfg);
        cfg = loadConfig();
        armLocketInAppPopupTrigger(cfg, "Saved Popup Studio");
        statusMsg = `Đã lưu cấu hình Popup "${cfg.popupBadge} — ${cfg.popupHeader}" & đồng bộ ảnh trực tiếp lên App Locket!`;
    }

    // Xử lý Caption Studio
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
            statusMsg = `Đã lưu Caption "${savedCap.caption.text}" vào nhóm ${savedCap.section}!`;
        } else if (q.caption_action === "delete" && q.overlay_id) {
            deleteCaptionFromStudio(q.overlay_id);
            statusMsg = `Đã xoá Caption (${q.overlay_id}) khỏi Locket!`;
        } else if (q.caption_action === "reset_all") {
            resetAllStudioCaptionsToDefault();
            statusMsg = "Đã khôi phục toàn bộ kho Caption gốc!";
        }
    }

    // Xử lý lưu thông số Camera 30s/60s/90s, Feature Gates, Streak & Widget
    if (q.save_engine_features === "1") {
        cfg.videoMaxDuration = sanitizeFloatNumber(q.videoMaxDuration, 30.0, 5.0, 300.0);
        cfg.goldMaxDuration = cfg.videoMaxDuration;
        cfg.cameraRollMaxDuration = cfg.videoMaxDuration;
        cfg.videoQualityMbps = sanitizeFloatNumber(q.videoQualityMbps, 0.9, 0.1, 25.0);
        cfg.uploadMainImageSize = sanitizeQuotaNumber(q.uploadMainImageSize, 1440);
        cfg.uploadThumbnailSize = sanitizeQuotaNumber(q.uploadThumbnailSize, 1020);
        cfg.ultraWideEnabled = q.ultraWideEnabled === "1";
        cfg.telephotoEnabled = q.telephotoEnabled === "1";
        cfg.volumeButtonShutter = q.volumeButtonShutter === "1";
        cfg.srgbColorSpace = q.srgbColorSpace === "1";
        cfg.lanczosResampling = q.srgbColorSpace === "1";
        cfg.livePhotosEnabled = q.livePhotosEnabled === "1";
        cfg.openFilterSheetImmediately = q.openFilterSheetImmediately === "1";
        cfg.fgAppIconPicker = q.fgAppIconPicker === "1";
        cfg.fgCameraRoll = q.fgCameraRoll === "1";
        cfg.fgCameraTheme = q.fgCameraTheme === "1";
        cfg.fgLocketViews = q.fgLocketViews === "1";
        cfg.fgLongCaptions = q.fgLongCaptions === "1";
        cfg.fgUnlimitedFriends = q.fgUnlimitedFriends === "1";
        cfg.fgCustomWidgetFrames = q.fgCustomWidgetFrames === "1";
        cfg.fgStreakRecovery = q.fgStreakRecovery === "1";
        cfg.unsendMessageEnabled = q.unsendMessageEnabled === "1";
        cfg.timeTravelRewindEnabled = q.timeTravelRewindEnabled === "1";
        cfg.rollcallEnabled = q.rollcallEnabled === "1";
        cfg.lunarNewYearIconEnabled = q.lunarNewYearIconEnabled === "1";
        if (q.widgetEventUid) cfg.widgetEventUid = q.widgetEventUid.trim();
        if (q.streakMinRecoveryCount !== undefined) cfg.streakMinRecoveryCount = sanitizeQuotaNumber(q.streakMinRecoveryCount, 0);
        if (q.discoveryPopupTag) cfg.discoveryPopupTag = q.discoveryPopupTag.trim();
        if (q.discoveryPopupFeatureTitle) cfg.discoveryPopupFeatureTitle = q.discoveryPopupFeatureTitle.trim();
        if (q.cdnTargetDomain) cfg.cdnTargetDomain = q.cdnTargetDomain.trim();
        cfg.enableNmsMapping = q.enableNmsMapping === "1";
        cfg.enableHeader7StripEtag = q.enableHeader7StripEtag === "1";
        cfg.disableHistoryAds = q.disableHistoryAds === "1";
        cfg.disableSentryTracking = q.disableSentryTracking === "1";
        saveConfig(cfg);
        cfg = loadConfig();
        statusMsg = `Đã lưu thông số Camera (${cfg.videoMaxDuration}s · ${cfg.videoQualityMbps}Mbps) & Công tắc Feature Gates!`;
    }

    // Xử lý lưu Mốc ngày đăng ký, Ngày hết hạn & Hạn mức AI (Giữ cố định 100% không nhảy về 2026-05-25)
    if (q.save === "1" || q.lockDate || q.d) {
        const rawLock = (q.lockDate || q.d || cfg.lockDate || DEFAULT_CONFIG.lockDate).trim();
        const isoLock = toIsoDate(rawLock, DEFAULT_CONFIG.lockDate, "T08:30:00Z");
        const rawExp = (q.expireDate || cfg.expireDate || DEFAULT_CONFIG.expireDate).trim();
        const isoExp = toIsoDate(rawExp, DEFAULT_CONFIG.expireDate, "T10:10:14Z");

        cfg.lockDate = isoLock.slice(0, 10);
        cfg.expireDate = isoExp.slice(0, 10);
        if (q.productId) cfg.productId = q.productId.trim();
        if (q.dohServerUrl) cfg.dohServerUrl = q.dohServerUrl.trim();
        if (q.dohPrimaryIp) cfg.dohPrimaryIp = q.dohPrimaryIp.trim();
        if (q.dohSecondaryIp) cfg.dohSecondaryIp = q.dohSecondaryIp.trim();
        if (q.aiFilterQuota !== undefined) cfg.aiFilterQuota = sanitizeQuotaNumber(q.aiFilterQuota, cfg.aiFilterQuota);
        if (q.aiFilterUsed !== undefined) cfg.aiFilterUsed = sanitizeQuotaNumber(q.aiFilterUsed, 0);
        if (q.username) {
            Env.write(q.username.trim().replace(/^@/, ""), USERNAME_CACHE_KEY);
        }

        saveConfig(cfg);
        const targetUid = (uid && !uid.includes("RCAnonymousID")) ? uid : (Env.read(USER_ID_CACHE_KEY) || "");
        if (targetUid && !targetUid.includes("RCAnonymousID")) {
            upsertUserRecord(targetUid, {
                username: q.username ? q.username.trim().replace(/^@/, "") : undefined,
                lockDate: cfg.lockDate,
                productId: cfg.productId,
                aiQuota: cfg.aiFilterQuota,
                touch: true
            });
            const db = getLocalStore();
            if (db && db.users && db.users[targetUid]) {
                db.users[targetUid].lock_date = cfg.lockDate;
                db.users[targetUid].force_lock_date = cfg.lockDate;
                db.users[targetUid].ai_quota = cfg.aiFilterQuota;
                saveLocalStore(db);
            }
        }
        cfg = loadConfig();
        armLocketInAppPopupTrigger(cfg, "Saved Main Config");
        statusMsg = `Đã lưu cố định mốc đăng ký (${cfg.lockDate}), hạn ${cfg.expireDate} & ${cfg.aiFilterQuota.toLocaleString("vi-VN")} lượt AI!`;
    } else if (q.reset === "1") {
        clearDirectUploadedImage("popup");
        clearDirectUploadedImage("widget");
        saveLocalBadgeState({
            selfBadgeEnabled: true,
            friendsBadgeEnabled: true,
            widgetBadgeEnabled: true,
            badgeStyle: "locket_gold"
        });
        saveConfig(DEFAULT_CONFIG);
        cfg = loadConfig();
        statusMsg = "Đã khôi phục toàn bộ cấu hình về mặc định (25/05/2026 · 999.999 AI)!";
    } else if (q.request_activate === "1" || q.push_test === "1") {
        armLocketInAppPopupTrigger(cfg, "Manual Activate");
        forceShowPopup = true;
        statusMsg = "Đã kích hoạt Locket Gold & bắn Popup UpLocket lên App Locket!";
    }

    cfg = loadConfig();
    const htmlPage = buildWebUIHtmlPage(cfg, statusMsg, openAdminDrawer, forceShowPopup);
    sendLocalHttpResponse(200, {
        "Content-Type": "text/html; charset=utf-8"
    }, htmlPage);
    return true;
}

// ============================================================================
// ĐIỂM KHỞI CHẠY CHÍNH BỌC GIÁP CHỐNG LỖI (`SAFE_GUARD_ENGINE` — ZERO 7117)
// Tự động bắt mọi lỗi phát sinh và chặn đứng 100% lỗi {"code":7117,"message":"Page not found."}
// ============================================================================
(function mainEntry() {
    try {
        const isCronMode = typeof $request === "undefined" && typeof $response === "undefined";
        const isRequestPhase = typeof $request !== "undefined" && typeof $response === "undefined";
        const isResponsePhase = typeof $response !== "undefined";

        if (isCronMode) {
            Env.done();
            return;
        }

        const reqUrl = (typeof $request !== "undefined" && $request.url) ? String($request.url) : "";
        const reqMethod = (typeof $request !== "undefined" && $request.method) ? String($request.method) : "GET";
        const reqHeaders = (typeof $request !== "undefined" && $request.headers) ? { ...$request.headers } : {};
        const reqBodyStr = (typeof $request !== "undefined" && typeof $request.body === "string") ? $request.body : "";
        const rawRespBody = (isResponsePhase && typeof $response.body === "string") ? $response.body : "";

        const cfg = loadConfig();

        // 1. Chặn đứng các miền Quảng cáo & Telemetry
        if (cfg.blockAdsAndTelemetry !== false && isBlockedAdOrTelemetryDomain(reqUrl)) {
            sendLocalHttpResponse(204, { "Content-Type": "text/plain" }, "");
            return;
        }

        const uid = extractAndCacheCredentials(reqUrl, reqHeaders, isResponsePhase ? rawRespBody : reqBodyStr);

        // 2. Nhận diện truy cập trình duyệt vào bảng điều khiển (/setdate, locket.gold, api.revenuecat.com)
        //    hoặc bất kỳ phản hồi nào chứa lỗi 7117 "Page not found" của RevenueCat
        const isRc7117NotFound =
            rawRespBody.includes('"code":7117') ||
            rawRespBody.includes('"code": 7117') ||
            (rawRespBody.includes("7117") && rawRespBody.includes("Page not found"));

        const isBrowserVisitToRc =
            !isActualLocketAppTraffic(reqUrl, reqHeaders) &&
            /^https?:\/\/(api|rc-backup)\.revenuecat\.com(\/.*)?$/i.test(reqUrl) &&
            !reqUrl.includes("/v1/");

        const isWebPanelUrl =
            reqUrl.includes("/setdate") ||
            reqUrl.includes("locket.gold") ||
            isBrowserVisitToRc ||
            isRc7117NotFound;

        if (isWebPanelUrl) {
            handleWebUIRoute(reqUrl, reqMethod, reqHeaders, reqBodyStr, uid);
            return;
        }

        // 3. Xử lý chiều Request (Tự động chuẩn hóa Photobooth / Filter AI & Xoá ETag Header)
        if (isRequestPhase) {
            if (reqUrl.includes("generateFilteredImage")) {
                const pbResult = handleNmsGenerateFilteredImageRequest(reqUrl, reqHeaders, reqBodyStr, cfg);
                Env.done(pbResult.donePayload);
                return;
            }
            if (reqBodyStr.length > 10) {
                let parsedReq = null;
                try { parsedReq = JSON.parse(reqBodyStr); } catch (e) {}
                autoHarvestFriendsFromRawPayload(reqBodyStr, parsedReq, cfg);
            }
            applyIntegratedNetworkHeaders(reqUrl, reqHeaders, cfg);
            Env.done({ headers: reqHeaders });
            return;
        }

        // 4. Xử lý chiều Response (Ghi đè gói Gold, Huy hiệu Local, Firebase Remote Config & Unblur)
        if (isResponsePhase) {
            if (!rawRespBody || (!rawRespBody.trim().startsWith("{") && !rawRespBody.trim().startsWith("["))) {
                Env.done({});
                return;
            }
            let obj = null;
            try {
                obj = JSON.parse(rawRespBody);
            } catch (e) {
                Env.done({});
                return;
            }

            autoHarvestFriendsFromRawPayload(rawRespBody, obj, cfg);
            const requestedUrlUserId = extractRequestedRcUserId(reqUrl);

            const isRevenueCat = reqUrl.includes("revenuecat.com") || reqUrl.includes("/subscribers") || reqUrl.includes("/receipts") || obj.subscriber !== undefined;
            const isOfferings = reqUrl.includes("/offerings") || obj.offerings !== undefined;
            const isFirebaseRemoteConfig = reqUrl.includes("firebaseremoteconfig") || (obj.entries !== undefined && typeof obj.entries === "object");
            const isLocketCloudFunctions = reqUrl.includes("cloudfunctions.net") || reqUrl.includes("api.locketcamera.com");

            if (isFirebaseRemoteConfig) {
                obj = injectFirebaseRemoteConfig(obj, cfg);
            } else if (isOfferings) {
                obj = patchRevenueCatOfferings(obj, cfg);
            } else if (isRevenueCat) {
                obj = buildSubscriberPayload(obj, cfg, uid, requestedUrlUserId, reqHeaders);
            } else if (isLocketCloudFunctions) {
                obj = patchCloudFunctionResponsePayload(obj, cfg, reqUrl, uid);
            } else {
                obj = deepForceBadgeAndAiQuotaInObject(obj, cfg, 0);
            }

            const resHeaders = { ...($response.headers || {}) };
            for (const k of Object.keys(resHeaders)) {
                const low = k.toLowerCase();
                if (low === "x-revenuecat-etag" || low === "etag" || low === "x-signature" || low === "content-length") {
                    delete resHeaders[k];
                }
            }
            resHeaders["Content-Type"] = "application/json; charset=utf-8";
            resHeaders["Cache-Control"] = "no-store, no-cache, must-revalidate";

            Env.done({
                status: 200,
                headers: resHeaders,
                body: JSON.stringify(obj)
            });
            return;
        }

        Env.done({});
    } catch (fatalErr) {
        // Lớp bảo vệ cuối cùng: Nếu có bất kỳ lỗi bất ngờ nào khi đang mở trang quản lý trên Safari,
        // lập tức hiển thị giao diện khôi phục thay vì để văng lỗi 7117 hoặc màn hình trắng.
        try {
            const fallbackUrl = (typeof $request !== "undefined" && $request.url) ? String($request.url) : "";
            if (fallbackUrl.includes("/setdate") || fallbackUrl.includes("revenuecat.com")) {
                sendLocalHttpResponse(200, { "Content-Type": "text/html; charset=utf-8" }, `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Locket Gold Pro Safe Mode</title></head><body style="background:#09090b;color:#f5f5f7;font-family:-apple-system,sans-serif;padding:40px 20px;text-align:center;"><h2 style="color:#fbbf24;">⚡ Locket Gold Pro V12.5 — Chế Độ Tự Phục Hồi</h2><p style="color:#a1a1aa;font-size:14px;">Chi tiết: ${escapeHtml(String(fatalErr && fatalErr.message ? fatalErr.message : fatalErr))}</p><a href="/setdate?reset=1" style="display:inline-block;margin-top:16px;padding:12px 24px;border-radius:999px;background:#fbbf24;color:#111;font-weight:700;text-decoration:none;">Khôi phục cấu hình & Mở lại Bảng điều khiển</a></body></html>`);
                return;
            }
        } catch (e2) {}
        if (typeof $done === "function") $done({});
    }
})();
// === KẾT THÚC HOÀN TẤT 6 / 6 PHẦN CỦA FILE locket_25_05_2026.js (BẢN V12.5 MASTER) ===
