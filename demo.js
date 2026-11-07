const ROOT_ADMIN_USER = "ngominhduc";
const ROOT_ADMIN_PASS_1 = "ducff123#";
const ROOT_ADMIN_PASS_2 = "Ducnocode2505@";
const ADMIN_API_URL = "";

const NMS_HEADER_VERSION = "V1.0.2";
const UA_ENTITLEMENT_MAPPING = {
    "Locket": ["Gold", "locket_1600_1y"]
};

const THAY_PRODUCT_NAME = "LOCKET GOLD PRO";
const THAY_SLOGAN = "Thiết kế tối giản. Hiệu ứng cuộn điện ảnh 60fps. Quyền năng thuần khiết.";
const THAY_USP_LEFT = "Khóa cứng mốc đăng ký gốc và đồng bộ huy hiệu Locket Gold theo thời gian thực.";
const THAY_USP_RIGHT = "Chip Locket H2 & Lõi DoH UpLocket 40 miền mới. Mở khóa trọn bộ Photobooth, Sự kiện, Tinh nghịch, Ngoại hình, Kho Caption Custom & 999.999 lượt Tạo diện mạo AI.";
const THAY_FEATURES = [
    {
        title: "Mở khóa toàn diện Photobooth, Caption & AI Looks",
        desc: "Gỡ bỏ hoàn toàn rào cản Paywall, kích hoạt trọn bộ Khung & Photobooth (4 ô, Cute, Polaroid, 2-3 ảnh), Video 30s, Kho 130+ Caption tuỳ biến và 999.999 lượt Tạo diện mạo AI.",
        badge: "FULL PHOTOBOOTH & CAPTION",
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
        stat: "2099"
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
    serverAddresses: ["172.67.146.35", "104.21.10.172"],
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
                { id: "photobooth_4_grid", effect_id: "photobooth_4_grid", title: "Photobooth 4 ô", layout: "grid_2x2", shots_count: 4, is_free: true, unlocked: true, requires_gold: false },
                { id: "photobooth_cute", effect_id: "photobooth_cute", title: "Photobooth Cute", layout: "cute_frame", shots_count: 1, is_free: true, unlocked: true, requires_gold: false },
                { id: "polaroid_1_shot", effect_id: "polaroid_1_shot", title: "Polaroid 1 ảnh", layout: "polaroid_single", shots_count: 1, is_free: true, unlocked: true, requires_gold: false },
                { id: "photobooth_2_shot", effect_id: "photobooth_2_shot", title: "Photobooth 2 ảnh", layout: "strip_2", shots_count: 2, is_free: true, unlocked: true, requires_gold: false },
                { id: "photobooth_3_shot", effect_id: "photobooth_3_shot", title: "Photobooth 3 ảnh", layout: "strip_3", shots_count: 3, is_free: true, unlocked: true, requires_gold: false }
            ]
        },
        {
            id: "su_kien",
            title: "Sự kiện",
            type: "event_effects",
            unlocked: true,
            items: [
                { id: "practical_magic_2", effect_id: "practical_magic_2", title: "Practical Magic 2", category: "event", is_free: true, unlocked: true, requires_gold: false }
            ]
        },
        {
            id: "tinh_nghich",
            title: "Tinh nghịch",
            type: "playful_ai_looks",
            unlocked: true,
            items: [
                { id: "looks_maxxing", look_id: "looks_maxxing", title: "Looks-Maxxing", category: "playful", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "influencer", look_id: "influencer", title: "Influencer", category: "playful", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "toothless", look_id: "toothless", title: "Toothless", category: "playful", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "okay_wig", look_id: "okay_wig", title: "Okay Wig", category: "playful", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false }
            ]
        },
        {
            id: "ngoai_hinh",
            title: "Ngoại hình",
            type: "appearance_ai_looks",
            unlocked: true,
            items: [
                { id: "bye_brows", look_id: "bye_brows", title: "Bye Brows", category: "appearance", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "braces", look_id: "braces", title: "Braces", category: "appearance", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "tatted", look_id: "tatted", title: "Tatted", category: "appearance", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "beard", look_id: "beard", title: "Beard", category: "appearance", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false },
                { id: "buns", look_id: "buns", title: "Buns", category: "appearance", is_ai_look: true, is_free: true, unlocked: true, requires_gold: false }
            ]
        },
        {
            id: "an_mung",
            title: "Ăn mừng",
            type: "celebration_effects",
            unlocked: true,
            items: [
                { id: "party_confetti", effect_id: "party_confetti", title: "Confetti Gold", category: "celebration", is_free: true, unlocked: true, requires_gold: false },
                { id: "birthday_crown", effect_id: "birthday_crown", title: "Birthday Crown", category: "celebration", is_free: true, unlocked: true, requires_gold: false }
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

const DEFAULT_OVERLAY_SECTIONS = [
    {
        section: "🎨 General",
        items: [
            { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
            { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
            { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
            { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
            { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
            { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
            { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
            { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
            { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
            { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
            { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
        ]
    },
    {
        section: "🎨 Holiday Caption",
        items: [
            { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
            { overlay_id: "caption:autumn_2026", source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Xin chào Mùa Thu", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:christmas_eve_2026", source: "remote", caption: { background: { colors: ["#2FA85F", "#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:new_years_eve_2026", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#643F00", type: "static_content" } },
            { overlay_id: "caption:new_years_day_2027", source: "remote", caption: { background: { colors: ["#3B00EC", "#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:new_years_day_2027_alternate", source: "remote", caption: { background: { colors: ["#FF0062", "#FF783F"] }, max_lines: 1, text: "2027", text_color: "#FFFFFF", type: "static_content" } }
        ]
    },
    {
        section: "🎨 Decorative by Katem Nguyễn",
        items: [
            { overlay_id: "caption:katemnguyen", source: "remote", caption: { background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, max_lines: 1, text: "💻 Katem Nguyễn", text_color: "#183153", type: "static_content" } },
            { overlay_id: "caption:cu", source: "remote", caption: { background: { colors: ["#FFD6A5", "#FFF1A8", "#FFC4D6"] }, max_lines: 1, text: "Cu 🐎", text_color: "#633B24", type: "static_content" } },
            { overlay_id: "caption:tuat", source: "remote", caption: { background: { colors: ["#2C1A0E", "#5D4037", "#D7A86E"] }, icon: { data: "🐕", type: "emoji" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:snake_vibes", source: "remote", caption: { background: { colors: ["#2E7D32", "#66BB6A"] }, icon: { data: "🐍", type: "emoji" }, max_lines: 1, text: "Snake Vibes", localized_text: { en: "Snake Vibes", vn: "Chất rắn" }, text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "👻", type: "emoji" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } }
        ]
    },
    {
        section: "🎨 Tình yêu & Cơm chó 💕",
        items: [
            { overlay_id: "caption:toi_nho_em", source: "remote", caption: { background: { colors: ["#FFFFFF", "#6D9EEB"] }, max_lines: 1, text: "보고 싶어 🥺", text_color: "#000000E6", type: "static_content" } },
            { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", text_color: "#FFFFFFDB", type: "static_content" } },
            { overlay_id: "caption:em_nho_anhh", source: "remote", caption: { background: { colors: ["#F2B8CF", "#E8C8EE", "#D7C9F5"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "em nhớ anhh", text_color: "#69465F", type: "static_content" } },
            { overlay_id: "caption:nho_anh_phien", source: "remote", caption: { background: { colors: ["#F0B5CB", "#F6D0DF", "#DCCAF0"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "nhớ anh tới mức hơi phiền", text_color: "#70445A", type: "static_content" } },
            { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#F4BFD3", "#F9D9CF", "#DCCDF5"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "i love you", text_color: "#70465F", type: "static_content" } },
            { overlay_id: "caption:yeu_cuc_dang", source: "remote", caption: { background: { colors: ["#F2B5C8", "#F8D5D9", "#F6E5D2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "yêu cục dàng", text_color: "#754454", type: "static_content" } },
            { overlay_id: "caption:yeu_emmm", source: "remote", caption: { background: { colors: ["#F2AFC6", "#F7C9D9", "#E5CFF4"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "Yeu Emmm", text_color: "#70445C", type: "static_content" } },
            { overlay_id: "caption:yeu_anhhh", source: "remote", caption: { background: { colors: ["#B8C9F2", "#D5DDF8", "#E8CFF0"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "Yeu Anhhh", text_color: "#414C72", type: "static_content" } },
            { overlay_id: "caption:baby_love", source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF69B4", "#FF1493"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Baby Love 💖", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:muon_duoc_om", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "🫂", type: "emoji" }, max_lines: 1, text: "Muốn được ôm", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:cho_hun_mieng", source: "remote", caption: { background: { colors: ["#F3AFC7", "#F8D0D8", "#F4C9BB"] }, icon: { data: "😘", type: "emoji" }, max_lines: 1, text: "cho hun miếng coi", text_color: "#754252", type: "static_content" } },
            { overlay_id: "caption:me_anh_me_ngu", source: "remote", caption: { background: { colors: ["#C4C8EF", "#DED3F4", "#EBCDE4"] }, icon: { data: "💤", type: "emoji" }, max_lines: 1, text: "mê anh hơn mê ngủ", text_color: "#4F4770", type: "static_content" } },
            { overlay_id: "caption:be_be_can_do", source: "remote", caption: { background: { colors: ["#F4C2D5", "#F9E1E8", "#E9D4F5"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "em bé cần được dỗ", text_color: "#75495F", type: "static_content" } },
            { overlay_id: "caption:iu_thi_noi", source: "remote", caption: { background: { colors: ["#F4BFD0", "#E9C7EF", "#D7D0F4"] }, icon: { data: "🤭", type: "emoji" }, max_lines: 1, text: "iu thì nói, đừng có ngại", text_color: "#68465F", type: "static_content" } },
            { overlay_id: "caption:iu_hong_thi_bao", source: "remote", caption: { background: { colors: ["#F1B5CE", "#F8D6E4", "#E8C8F0"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "iu hong thì bảo", text_color: "#70445E", type: "static_content" } },
            { overlay_id: "caption:anh_thuong_em", source: "remote", caption: { background: { colors: ["#E9B9CF", "#F5D5DF", "#D8C8F0"] }, icon: { data: "🥹", type: "emoji" }, max_lines: 1, text: "anh có thương em thiệt hong", text_color: "#70465D", type: "static_content" } },
            { overlay_id: "caption:yeu_em_nhiem_vu", source: "remote", caption: { background: { colors: ["#E9B7CD", "#F3D0DD", "#E4C6F1"] }, icon: { data: "🫡", type: "emoji" }, max_lines: 1, text: "yêu em là nhiệm vụ cả đời", text_color: "#71455F", type: "static_content" } },
            { overlay_id: "caption:crush_nhin", source: "remote", caption: { background: { colors: ["#F0C0D5", "#E0C8EF", "#C8D5F3"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "crush nhìn em một cái là xong", text_color: "#594664", type: "static_content" } },
            { overlay_id: "caption:ngoai_le_cua_em", source: "remote", caption: { background: { colors: ["#E7B8D0", "#E4D0F2", "#C8D8F2"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "anh là ngoại lệ của em", text_color: "#584762", type: "static_content" } },
            { overlay_id: "caption:dang_ban_tuong_tu", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💭", type: "emoji" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:mac_bay_tinh_yeu", source: "remote", caption: { background: { colors: ["#EE9CA7", "#FFDDE1"] }, icon: { data: "💘", type: "emoji" }, max_lines: 1, text: "Mắc bẫy tình yêu", text_color: "#000000E6", type: "static_content" } },
            { overlay_id: "caption:minh_cuoi_nhau", source: "remote", caption: { background: { colors: ["#F0B8CD", "#F7D4DF", "#E7C9EF"] }, icon: { data: "💍", type: "emoji" }, max_lines: 1, text: "hông ấy mình cưới nhau đi", text_color: "#70465B", type: "static_content" } },
            { overlay_id: "caption:wedding_time", source: "remote", caption: { background: { colors: ["#FFE4E1", "#E73C7E"] }, icon: { data: "💍", type: "emoji" }, max_lines: 1, text: "Wedding Time!", localized_text: { en: "Wedding Time!", vn: "Đám cưới nè!" }, text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:dating_time", source: "remote", caption: { background: { colors: ["#E91E63", "#F44336"] }, icon: { data: "💕", type: "emoji" }, max_lines: 1, text: "Dating Time!", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:cam_thay_hanh_phuc", source: "remote", caption: { background: { colors: ["#EC407A", "#F8BBD0"] }, icon: { data: "🇻🇳", type: "emoji" }, max_lines: 1, text: "Cảm thấy hạnh phúc", localized_text: { en: "Feeling Happy", vn: "Cảm thấy hạnh phúc" }, text_color: "#FFFFFFE6", type: "static_content" } }
        ]
    }
];
DEFAULT_OVERLAY_SECTIONS.push(
    {
        section: "🎨 Gen Z & Xéo xắt 💅",
        items: [
            {
                overlay_id: "caption:feeling_cute",
                source: "remote",
                caption: {
                    background: { colors: ["#F8BBD0", "#E91E63"] },
                    icon: { data: "🌷", type: "emoji" },
                    max_lines: 1,
                    text: "Feeling Cute",
                    localized_text: { en: "Feeling Cute", vn: "Cảm thấy dthw" },
                    text_color: "#FFFFFFE5",
                    type: "static_content"
                }
            },
            {
                overlay_id: "caption:cutie_pie",
                source: "remote",
                caption: {
                    background: { colors: ["#FFDEE9", "#FFB6C1", "#FF9AA2"] },
                    icon: { data: "🎀", type: "emoji" },
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
                    background: { colors: ["#FFD1DC", "#FFB7C5", "#FFC0CB"] },
                    icon: { data: "🌸", type: "emoji" },
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
                    background: { colors: ["#F3C1D4", "#F8DDE5", "#E8CFF0"] },
                    icon: { data: "💗", type: "emoji" },
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
                    background: { colors: ["#FC5C7D", "#6A82FB"] },
                    icon: { data: "💅", type: "emoji" },
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
                    background: { colors: ["#C5B5E8", "#DDD0F2", "#F0C9DD"] },
                    icon: { data: "✨", type: "emoji" },
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
                    background: { colors: ["#FFD700", "#FF8C00"] },
                    icon: { data: "✨", type: "emoji" },
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
                    background: { colors: ["#F77062", "#FE5196"] },
                    icon: { data: "💅", type: "emoji" },
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
                    background: { colors: ["#F0B5CA", "#F5D2DD", "#EAD1F0"] },
                    icon: { data: "🎀", type: "emoji" },
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
                    background: { colors: ["#FF5722", "#FFC107"] },
                    icon: { data: "😎", type: "emoji" },
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
                    background: { colors: ["#E5B7CD", "#F0D0DC", "#DCCCF0"] },
                    icon: { data: "🪞", type: "emoji" },
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
                    background: { colors: ["#FFDEE9", "#B5FFFC", "#FAD0C4", "#FFD1FF"] },
                    icon: { data: "🪞", type: "emoji" },
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
                    background: { colors: ["#8E2DE2", "#4A00E0"] },
                    icon: { data: "🕶️", type: "emoji" },
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
                    background: { colors: ["#D6B8E8", "#E8CDEB", "#F3D2D9"] },
                    icon: { data: "🎬", type: "emoji" },
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
                    background: { colors: ["#C5B6E5", "#DAD1F0", "#C7D8F0"] },
                    icon: { data: "🪩", type: "emoji" },
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
                    background: { colors: ["#A7B9D5", "#C8D4E8", "#DCCCEB"] },
                    icon: { data: "😎", type: "emoji" },
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
                    background: { colors: ["#EC407A", "#F44336"] },
                    icon: { data: "🐉", type: "emoji" },
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
                    background: { colors: ["#8EACCD", "#B5C8DE", "#D7C7E6"] },
                    icon: { data: "😎", type: "emoji" },
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
                    background: { colors: ["#CBB4DE", "#DFCBEA", "#F2E3F7"] },
                    icon: { data: "👑", type: "emoji" },
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
                    background: { colors: ["#11998E", "#38EF7D"] },
                    icon: { data: "🥬", type: "emoji" },
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
                    background: { colors: ["#FFC107", "#FFA000"] },
                    icon: { data: "🚀", type: "emoji" },
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
                    background: { colors: ["#BCC5D6", "#D7DEEA", "#EDE8F5"] },
                    icon: { data: "🕶️", type: "emoji" },
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
                    background: { colors: ["#2980B9", "#2C3E50"] },
                    icon: { data: "👌", type: "emoji" },
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
                    background: { colors: ["#F7971E", "#FFD200"] },
                    icon: { data: "💎", type: "emoji" },
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
                    background: { colors: ["#B9D7D0", "#D6E6D7", "#E8DFC6"] },
                    icon: { data: "🫶", type: "emoji" },
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
                    background: { colors: ["#D7B5D4", "#E9CDE1", "#F1D8D0"] },
                    icon: { data: "💅", type: "emoji" },
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
                    background: { colors: ["#D4B7D9", "#E8C7D5", "#F1D9D0"] },
                    icon: { data: "💅", type: "emoji" },
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
                    background: { colors: ["#C6B8D9", "#D9C8D8", "#E8C4C9"] },
                    icon: { data: "😒", type: "emoji" },
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
                    background: { colors: ["#A9A4C8", "#C7A6BE", "#E0B9C3"] },
                    icon: { data: "😒", type: "emoji" },
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
                    background: { colors: ["#B8B6D2", "#D1C4DA", "#E5C5CF"] },
                    icon: { data: "😒", type: "emoji" },
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
                    background: { colors: ["#FF4E50", "#F9D423"] },
                    icon: { data: "👎", type: "emoji" },
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
                    background: { colors: ["#FFD1DC", "#FFB7C5", "#FFE4E1"] },
                    icon: { data: "🎀", type: "emoji" },
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
                    background: { colors: ["#FF9A9E", "#FECFEF", "#FBC2EB", "#A6C1EE"] },
                    icon: { data: "💅", type: "emoji" },
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
                    background: { colors: ["#FF6EC7", "#7873F5", "#4ADEDE", "#FFE66D"] },
                    icon: { data: "🌈", type: "emoji" },
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
                    background: { colors: ["#F7971E", "#FFD200", "#FFEE58"] },
                    icon: { data: "😂", type: "emoji" },
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
                    background: { colors: ["#FFEB3B", "#FF9800"] },
                    icon: { data: "😎", type: "emoji" },
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
                    background: { colors: ["#00F2FE", "#4FACFE"] },
                    icon: { data: "🤡", type: "emoji" },
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
                    background: { colors: ["#A8C3A0", "#DCE5D1"] },
                    icon: { data: "🍂", type: "emoji" },
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
                    background: { colors: ["#F3C6D8", "#F8E1E8", "#E7B8D0"] },
                    icon: { data: "🪳", type: "emoji" },
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
                    background: { colors: ["#E9B8C8", "#F6D4C8", "#D9C9EF"] },
                    icon: { data: "🙀", type: "emoji" },
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
                    background: { colors: ["#F1C0D2", "#F5D9E1", "#E7D1F2"] },
                    icon: { data: "🎀", type: "emoji" },
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
                    background: { colors: ["#8A2387", "#E94057", "#F27121"] },
                    icon: { data: "🍿", type: "emoji" },
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
                    background: { colors: ["#8A2387", "#E94057"] },
                    icon: { data: "🍿", type: "emoji" },
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
                    background: { colors: ["#F0C4A8", "#F3D8B8", "#D8C6E5"] },
                    icon: { data: "🍿", type: "emoji" },
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
                    background: { colors: ["#11998E", "#38EF7D"] },
                    icon: { data: "📺", type: "emoji" },
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
                    background: { colors: ["#FF512F", "#F09819", "#FFD200"] },
                    icon: { data: "🚨", type: "emoji" },
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
                    background: { colors: ["#F5B8A9", "#F6D0B2", "#E8BFCB"] },
                    icon: { data: "🚨", type: "emoji" },
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
                    background: { colors: ["#F0B5B5", "#F2D0C4", "#E4C5DB"] },
                    icon: { data: "🚨", type: "emoji" },
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
                    background: { colors: ["#B71C1C", "#FF5722"] },
                    icon: { data: "🏃", type: "emoji" },
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
                    background: { colors: ["#D31027", "#EA384D"] },
                    icon: { data: "🏃💨", type: "emoji" },
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
                    background: { colors: ["#D7CCC8", "#EFEBE9", "#F5F5F0"] },
                    icon: { data: "🙏🥺", type: "emoji" },
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
                    background: { colors: ["#E53935", "#FF7043"] },
                    icon: { data: "🥊", type: "emoji" },
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
                    background: { colors: ["#114357", "#F29492"] },
                    icon: { data: "🗡️", type: "emoji" },
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
                    background: { colors: ["#D8B4E2", "#F8BBD0"] },
                    icon: { data: "🪷", type: "emoji" },
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
                    background: { colors: ["#D7CCC8", "#8D6E63"] },
                    icon: { data: "🧶", type: "emoji" },
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
                    background: { colors: ["#263238", "#455A64"] },
                    icon: { data: "🛞", type: "emoji" },
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
                    background: { colors: ["#FFF59D", "#80DEEA"] },
                    icon: { data: "🥺", type: "emoji" },
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
                    background: { colors: ["#FFB74D", "#F8BBD0"] },
                    icon: { data: "😭", type: "emoji" },
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
                    background: { colors: ["#607D8B", "#37474F"] },
                    icon: { data: "😔", type: "emoji" },
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
                    background: { colors: ["#C5C9E8", "#DFD1F0", "#F0D1DB"] },
                    icon: { data: "🤨", type: "emoji" },
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
                    background: { colors: ["#B8C8DC", "#D1D5E7", "#E6CBE1"] },
                    icon: { data: "🤨", type: "emoji" },
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
                    background: { colors: ["#B6B2D5", "#D6C5DF", "#E8BFC8"] },
                    icon: { data: "🤡", type: "emoji" },
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
                    background: { colors: ["#C1B6D9", "#D8C5E3", "#E8C1D1"] },
                    icon: { data: "🤡", type: "emoji" },
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
                    background: { colors: ["#D4BCE8", "#E8D0F0", "#F1D0D9"] },
                    icon: { data: "😌", type: "emoji" },
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
                    background: { colors: ["#D1C8E5", "#E8D4DF", "#E8D7BC"] },
                    icon: { data: "😌", type: "emoji" },
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
                    background: { colors: ["#9C27B0", "#7B1FA2"] },
                    icon: { data: "🎁", type: "emoji" },
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
                    background: { colors: ["#00BCD4", "#0097A7"] },
                    icon: { data: "😅", type: "emoji" },
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
                    background: { colors: ["#4CAF50", "#00BCD4"] },
                    icon: { data: "🎮", type: "emoji" },
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
                    background: { colors: ["#FF0844", "#FFB199"] },
                    icon: { data: "🙈", type: "emoji" },
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
                    background: { colors: ["#232526", "#414345"] },
                    icon: { data: "🕯️", type: "emoji" },
                    max_lines: 1,
                    text: "Xin vĩnh biệt cụ",
                    text_color: "#FFFFFFE6",
                    type: "static_content"
                }
            }
        ]
    },
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
);

const DEFAULT_AI_CAMERA_FILTER_CONFIG = {
    allows_custom_filters: true,
    show_filter_button: true,
    sheet_enabled: true,
    open_sheet_immediately: true,
    sheet_filters: [
        {
            title: { en: "Goofy" },
            filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"]
        },
        {
            title: { en: "Looks" },
            filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"]
        },
        {
            title: { en: "Celebrate" },
            filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"]
        },
        {
            title: { en: "Cute" },
            filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"]
        },
        {
            title: { en: "Costumes" },
            filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"]
        },
        {
            title: { en: "Holidays" },
            filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"]
        }
    ],
    picker_filters: [
        "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
        "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
        "tatted", "mohawk", "braces", "slimed", "princess",
        "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
        "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
        "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
        "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
    ]
};

const DEFAULT_FRIENDS_SHEET_COUNT_CONFIG = {
    items: [
        { threshold: 0, icon_name: "heart" },
        { threshold: 1, icon_name: "heart.fill" },
        { threshold: 10, emoji: "🤍" },
        { threshold: 100, emoji: "💛" },
        { threshold: 500, emoji: "❤️‍🔥" },
        { threshold: 1000, emoji: "🌟🫶🌟" },
        { threshold: 2000, emoji: "✨💟✨" },
        { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
        { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
    ]
};

const DEFAULT_FRIEND_LOCKET_COUNT_CONFIG = {
    items: [
        { threshold: 0, icon_name: "heart" },
        { threshold: 1, icon_name: "heart.fill" },
        { threshold: 10, emoji: "🤍" },
        { threshold: 100, emoji: "💛" },
        { threshold: 500, emoji: "❤️‍🔥" },
        { threshold: 1000, emoji: "✨💗✨" },
        { threshold: 2000, emoji: "✨️⭐️✨" },
        { threshold: 5000, emoji: "✨💎✨" },
        { threshold: 10000, emoji: "✨🔐💛✨" }
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
    storeTransactionId: "2000001108724193",
    priceAmount: 399000,
    priceCurrency: "VND",
    appVersion: "1.0",
    forceSandboxFalse: true,
    alwaysForceBadge: true,
    friendsBadgeDefault: true,
    cronKeepAlive: true,
    notifyOnSync: true,
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
    videoMaxDurationSeconds: 30.0,
    videoQualityMbps: 0.9,
    uploadMainImageQuality: 1.0,
    uploadMainImageSize: 1440,
    uploadThumbImageSize: 1020,
    maxFriendsLimit: 999999,
    widgetFrameEnabled: true,
    widgetFrameUid: "midautumn_2026",
    widgetFrameUrl: "https://i.postimg.cc/fbY7MGdR/hlw.png",
    widgetFramePlacement: "below",
    widgetFrameStartAt: "2020-01-01T00:00:00",
    widgetFrameEndAt: "2099-12-31T23:59:59",
    widgetFrameMaxImages: 5,
    discoveryPopupTag: "LOCKET GOLD Ngô Minh Đức",
    discoveryPopupTitle: "Đã Kích Hoạt 💛",
    discoveryPopupFeatureTitle: "Ngô Minh Đức ✨",
    discoveryPopupFeatureBody: "Full Photobooth, AI Filter & Kho Caption",
    discoveryPopupButtonTitle: "Xong",
    discoveryPopupCampaign: "locket_gold_welcome_v9",
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
    popupStyle: "bottom_sheet_dark_gold",
    popupBadge: "LOCKET GOLD",
    popupHeader: "Đã mở khoá GOLD thành công!",
    popupTitle: "Ngô Minh Đức",
    popupSubtitle: "Anh Yêu Tất Cả Các Em",
    popupImage: THAY_IMAGE_PATH,
    popupBtnText: "Hoàn tất",
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

const STORE_KEY = "LOCKET_GOLD_MAX_CONFIG_V9";
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
const CUSTOM_CAPTIONS_DB_KEY = "LOCKET_CUSTOM_CAPTIONS_DB_V9";
const CUSTOM_AI_FILTERS_DB_KEY = "LOCKET_CUSTOM_AI_FILTERS_DB_V9";

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

function setHeaderValue(headerObj, headerKey, headerVal) {
    if (!headerObj || typeof headerObj !== "object") return;
    const lowKey = String(headerKey || "").toLowerCase();
    for (const existingKey of Object.keys(headerObj)) {
        if (existingKey.toLowerCase() === lowKey) {
            headerObj[existingKey] = headerVal;
            return;
        }
    }
    headerObj[headerKey] = headerVal;
}

function getCustomCaptionsState() {
    try {
        const raw = Env.read(CUSTOM_CAPTIONS_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                return {
                    added: Array.isArray(parsed.added) ? parsed.added : [],
                    deletedIds: Array.isArray(parsed.deletedIds) ? parsed.deletedIds : []
                };
            }
        }
    } catch (e) {}
    return { added: [], deletedIds: [] };
}

function saveCustomCaptionsState(state) {
    const clean = {
        added: Array.isArray(state.added) ? state.added : [],
        deletedIds: Array.isArray(state.deletedIds) ? state.deletedIds : []
    };
    Env.write(JSON.stringify(clean), CUSTOM_CAPTIONS_DB_KEY);
    return clean;
}

function addCustomCaptionEntry(sectionName, textStr, emojiIcon, color1, color2, color3, textColor) {
    const cleanText = String(textStr || "").trim();
    if (!cleanText) return null;
    const state = getCustomCaptionsState();
    const slug = cleanText
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 28) || ("custom_" + Date.now());
    const overlayId = "caption:" + slug + "_" + String(Date.now()).slice(-4);
    const colors = [color1 || "#FF9A9E", color2 || "#FECFEF"];
    if (color3 && String(color3).trim().startsWith("#")) {
        colors.push(String(color3).trim());
    }
    const newItem = {
        section: sectionName || "🎨 Custom Captions (Tự Tạo)",
        overlay_id: overlayId,
        source: "remote",
        is_custom_user: true,
        caption: {
            background: { colors: colors },
            max_lines: 1,
            text: cleanText,
            localized_text: { en: cleanText, vn: cleanText },
            text_color: textColor || "#FFFFFFE6",
            type: "static_content"
        }
    };
    if (emojiIcon && String(emojiIcon).trim()) {
        newItem.caption.icon = { data: String(emojiIcon).trim(), type: "emoji" };
    }
    state.added.unshift(newItem);
    state.deletedIds = state.deletedIds.filter(id => id !== overlayId);
    saveCustomCaptionsState(state);
    return newItem;
}

function deleteCaptionEntryById(overlayId) {
    if (!overlayId) return false;
    const state = getCustomCaptionsState();
    const beforeLen = state.added.length;
    state.added = state.added.filter(item => item.overlay_id !== overlayId);
    if (!state.deletedIds.includes(overlayId)) {
        state.deletedIds.push(overlayId);
    }
    saveCustomCaptionsState(state);
    return state.added.length < beforeLen || state.deletedIds.includes(overlayId);
}

function restoreAllDeletedDefaultCaptions() {
    const state = getCustomCaptionsState();
    state.deletedIds = [];
    saveCustomCaptionsState(state);
}

function resetAllCaptionsToFactory() {
    saveCustomCaptionsState({ added: [], deletedIds: [] });
}

function buildMergedOverlaySections() {
    const state = getCustomCaptionsState();
    const deletedSet = new Set(state.deletedIds || []);
    const sectionsClone = JSON.parse(JSON.stringify(DEFAULT_OVERLAY_SECTIONS));

    for (const sec of sectionsClone) {
        if (Array.isArray(sec.items)) {
            sec.items = sec.items.filter(it => !deletedSet.has(it.overlay_id));
        }
    }

    if (Array.isArray(state.added) && state.added.length > 0) {
        const customBySection = {};
        for (const cItem of state.added) {
            if (!cItem || deletedSet.has(cItem.overlay_id)) continue;
            const secTitle = cItem.section || "🎨 Custom Captions (Tự Tạo)";
            if (!customBySection[secTitle]) customBySection[secTitle] = [];
            customBySection[secTitle].push({
                overlay_id: cItem.overlay_id,
                source: cItem.source || "remote",
                is_custom_user: true,
                caption: cItem.caption
            });
        }

        for (const [secTitle, itemsArr] of Object.entries(customBySection)) {
            const existingSec = sectionsClone.find(s => s.section === secTitle);
            if (existingSec) {
                existingSec.items = [...itemsArr, ...existingSec.items];
            } else {
                sectionsClone.unshift({
                    section: secTitle,
                    items: itemsArr
                });
            }
        }
    }

    return sectionsClone.filter(s => Array.isArray(s.items) && s.items.length > 0);
}

function buildDynamicCaptionTypesArray() {
    const baseTypes = [
        "standard", "poll", "color_palette", "review", "music", "location",
        "weather", "time", "streak", "star_sign", "party_time", "locket_count",
        "good_morning", "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
    ];
    const state = getCustomCaptionsState();
    for (const cItem of state.added || []) {
        if (cItem && cItem.overlay_id) {
            const shortKey = cItem.overlay_id.replace(/^caption:/, "");
            if (shortKey && !baseTypes.includes(shortKey)) {
                baseTypes.push(shortKey);
            }
        }
    }
    return baseTypes;
}

function getCustomAiFiltersState() {
    try {
        const raw = Env.read(CUSTOM_AI_FILTERS_DB_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                return {
                    extraFilters: Array.isArray(parsed.extraFilters) ? parsed.extraFilters : [],
                    disabledFilters: Array.isArray(parsed.disabledFilters) ? parsed.disabledFilters : []
                };
            }
        }
    } catch (e) {}
    return { extraFilters: [], disabledFilters: [] };
}

function saveCustomAiFiltersState(st) {
    Env.write(JSON.stringify({
        extraFilters: Array.isArray(st.extraFilters) ? st.extraFilters : [],
        disabledFilters: Array.isArray(st.disabledFilters) ? st.disabledFilters : []
    }), CUSTOM_AI_FILTERS_DB_KEY);
}

function buildMergedCameraFilterConfig() {
    const st = getCustomAiFiltersState();
    const disabledSet = new Set(st.disabledFilters || []);
    const baseCfg = JSON.parse(JSON.stringify(DEFAULT_AI_CAMERA_FILTER_CONFIG));

    for (const group of baseCfg.sheet_filters) {
        group.filter_ids = group.filter_ids.filter(id => !disabledSet.has(id));
    }
    baseCfg.picker_filters = baseCfg.picker_filters.filter(id => !disabledSet.has(id));

    for (const extra of st.extraFilters || []) {
        if (!extra || !extra.filter_id || disabledSet.has(extra.filter_id)) continue;
        const catName = extra.category || "Looks";
        let targetGroup = baseCfg.sheet_filters.find(g => g.title && g.title.en === catName);
        if (!targetGroup) {
            targetGroup = { title: { en: catName }, filter_ids: [] };
            baseCfg.sheet_filters.unshift(targetGroup);
        }
        if (!targetGroup.filter_ids.includes(extra.filter_id)) {
            targetGroup.filter_ids.unshift(extra.filter_id);
        }
        if (!baseCfg.picker_filters.includes(extra.filter_id)) {
            baseCfg.picker_filters.unshift(extra.filter_id);
        }
    }

    return baseCfg;
}
function addCustomAiFilterEntry(filterId, categoryName) {
    const cleanId = String(filterId || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_]+/g, "_");
    if (!cleanId) {
        return null;
    }
    const st = getCustomAiFiltersState();
    st.disabledFilters = st.disabledFilters.filter(id => id !== cleanId);
    const exists = st.extraFilters.find(f => f.filter_id === cleanId);
    if (!exists) {
        st.extraFilters.unshift({
            filter_id: cleanId,
            category: categoryName || "Looks",
            added_at: new Date().toISOString().replace("T", " ").slice(0, 19)
        });
    }
    saveCustomAiFiltersState(st);
    return cleanId;
}

function toggleAiFilterIdState(filterId, enableBool) {
    const cleanId = String(filterId || "").trim();
    if (!cleanId) {
        return false;
    }
    const st = getCustomAiFiltersState();
    if (enableBool) {
        st.disabledFilters = st.disabledFilters.filter(id => id !== cleanId);
    } else {
        if (!st.disabledFilters.includes(cleanId)) {
            st.disabledFilters.push(cleanId);
        }
    }
    saveCustomAiFiltersState(st);
    return true;
}

function deleteCustomAiFilterById(filterId) {
    const cleanId = String(filterId || "").trim();
    if (!cleanId) {
        return false;
    }
    const st = getCustomAiFiltersState();
    st.extraFilters = st.extraFilters.filter(f => f.filter_id !== cleanId);
    if (!st.disabledFilters.includes(cleanId)) {
        st.disabledFilters.push(cleanId);
    }
    saveCustomAiFiltersState(st);
    return true;
}

function resetAiFiltersToFactory() {
    saveCustomAiFiltersState({
        extraFilters: [],
        disabledFilters: []
    });
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
    const n = parseInt(String(val || "").replace(/[^\d]/g, ""), 10);
    if (isNaN(n) || n < 0) {
        return fallback;
    }
    if (n > 999999999) {
        return 999999999;
    }
    return n;
}

function toIsoDate(raw, fallbackDate, timeSuffix = "T08:30:00Z") {
    if (!raw || typeof raw !== "string") {
        return fallbackDate + timeSuffix;
    }
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

function isActualLocketAppTraffic(url, headers) {
    const u = String(url || "").toLowerCase();
    if (u.includes("/setdate") || u.includes("locket.gold")) {
        return false;
    }
    if (/^https?:\/\/(api|rc-backup)\.revenuecat\.com\/?(\?.*)?$/i.test(u)) {
        return false;
    }

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
    if (!url || typeof url !== "string") {
        return false;
    }
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
        if (low.includes(d)) {
            return true;
        }
    }
    return false;
}

let _runtimeFriendsDirty = false;
let _runtimeFriendsCache = null;

function isValidLocketUidCandidate(str) {
    if (!str || typeof str !== "string") {
        return false;
    }
    const s = str.trim();
    if (s.length < 20 || s.length > 40) {
        return false;
    }
    if (s.includes("RCAnonymousID") || s.includes("locket_") || s.includes(" ")) {
        return false;
    }
    return /^[A-Za-z0-9_-]{20,40}$/.test(s);
}

function getFriendsBadgeMap() {
    if (_runtimeFriendsCache) {
        return _runtimeFriendsCache;
    }
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
    if (!isValidLocketUidCandidate(friendUid)) {
        return true;
    }
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
    if (!friendUid) {
        return null;
    }
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
        if (!node || typeof node !== "object" || depth > 12) {
            return;
        }
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
                if (matchDoc && matchDoc[1]) {
                    docUid = matchDoc[1];
                }
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
            try {
                parsed = JSON.parse(rawText);
            } catch (e) {}
            autoHarvestFriendsFromRawPayload(rawText, parsed, cfg);
        }
        pendingCalls--;
        if (pendingCalls <= 0) {
            const currentMap = getFriendsBadgeMap();
            const unnamedUids = Object.keys(currentMap).filter(u => {
                if (u === selfUid) {
                    return false;
                }
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
                        try {
                            pObj = JSON.parse(body);
                        } catch (e) {}
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

function isSupplementalMatchedDomain(url) {
    if (!url || typeof url !== "string") {
        return false;
    }
    const low = url.toLowerCase();
    for (const domain of INTEGRATED_NET_ENGINE.supplementalMatchDomains) {
        if (low.includes(domain.toLowerCase())) {
            return true;
        }
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
        if (callback) {
            callback(statusObj);
        }
    });
}

function getCachedDohStatus(cfg) {
    try {
        const raw = Env.read(DOH_STATUS_CACHE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                return parsed;
            }
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
    if (!headers || typeof headers !== "object") {
        return headers;
    }
    if (!isSupplementalMatchedDomain(url)) {
        return headers;
    }

    setHeaderValue(headers, "X-RevenueCat-ETag", "");

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
        headers["X-NMS-Header-Version"] = NMS_HEADER_VERSION;
    }

    return headers;
}

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
            enabled: !isRevoked,
            unlocked: !isRevoked,
            remaining_uses: quotaNum
        },
        ai_filter_quota: quotaNum,
        ai_looks_remaining: quotaNum,
        sections: sections
    };
}

function patchCloudFunctionResponsePayload(obj, cfg, reqUrl, resolvedUserId) {
    if (!obj || typeof obj !== "object") {
        return obj;
    }
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
    if (!("status" in r)) {
        r.status = 200;
    }
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

function fireNativeAppNotification(cfg, forceImmediate = false) {
    if (cfg.isBlockedByAdmin) {
        const selfUid = Env.read(USER_ID_CACHE_KEY) || "UID";
        triggerInAppLocketBlockAlert(selfUid, cfg.blockReason, true, forceImmediate);
        return;
    }
    if (!forceImmediate && cfg.pushNotifyOnActivate === false) {
        return;
    }

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
                if (!parsed.cf_url) {
                    parsed.cf_url = INTEGRATED_NET_ENGINE.dohBaseHost;
                }
                if (!parsed.doh_query_url) {
                    parsed.doh_query_url = INTEGRATED_NET_ENGINE.dohServerUrl;
                }
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
    if (!uid || uid.includes("RCAnonymousID")) {
        return null;
    }
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
            note: extra.note || "Đã mở khoá GOLD thành công (Full Photobooth, Caption & AI Looks)",
            lock_date: extra.lockDate || DEFAULT_CONFIG.lockDate,
            product_id: extra.productId || DEFAULT_CONFIG.productId,
            ai_quota: extra.aiQuota !== undefined ? sanitizeQuotaNumber(extra.aiQuota, DEFAULT_CONFIG.aiFilterQuota) : DEFAULT_CONFIG.aiFilterQuota,
            activated_at: nowStr,
            updated_at: nowStr,
            reason: ""
        };
        saveLocalStore(db);
    } else {
        if (extra.username) {
            db.users[uid].username = extra.username;
        }
        if (extra.full_name) {
            db.users[uid].full_name = extra.full_name;
        }
        if (extra.avatar) {
            db.users[uid].avatar = extra.avatar;
        }
        if (extra.lockDate) {
            db.users[uid].lock_date = extra.lockDate;
        }
        if (extra.productId) {
            db.users[uid].product_id = extra.productId;
        }
        if (extra.aiQuota !== undefined && !db.users[uid].blocked && db.users[uid].status !== "blocked") {
            db.users[uid].ai_quota = sanitizeQuotaNumber(extra.aiQuota, db.users[uid].ai_quota || DEFAULT_CONFIG.aiFilterQuota);
        }
        if (extra.touch) {
            db.users[uid].updated_at = nowStr;
        }
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
        if (raw) {
            remoteCache = JSON.parse(raw);
        }
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
        if (callback) {
            callback(st);
        }
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
        if (callback) {
            callback(currentSt);
        }
    });
}

function loadConfig() {
    let cfg = { ...DEFAULT_CONFIG };
    try {
        const raw =
            Env.read(STORE_KEY) ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V8") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V6") ||
            Env.read("LOCKET_GOLD_MAX_CONFIG_V5");
        if (raw) {
            const parsed = JSON.parse(raw);
            cfg = { ...cfg, ...parsed };
        }
    } catch (e) {}

    cfg.aiFilterQuota = sanitizeQuotaNumber(cfg.aiFilterQuota, DEFAULT_CONFIG.aiFilterQuota);
    cfg.aiFilterDailyLimit = sanitizeQuotaNumber(cfg.aiFilterDailyLimit || cfg.aiFilterQuota, cfg.aiFilterQuota);
    cfg.aiFilterUsed = sanitizeQuotaNumber(cfg.aiFilterUsed, 0);
    cfg.friendsBadgeDefault = cfg.friendsBadgeDefault !== false;
    cfg.videoMaxDurationSeconds = parseFloat(cfg.videoMaxDurationSeconds) || 30.0;
    cfg.videoQualityMbps = parseFloat(cfg.videoQualityMbps) || 0.9;
    cfg.maxFriendsLimit = sanitizeQuotaNumber(cfg.maxFriendsLimit, 999999);

    if (!cfg.dohServerUrl || cfg.dohServerUrl.includes("doh.2707226.xyz")) {
        cfg.dohServerUrl = INTEGRATED_NET_ENGINE.dohServerUrl;
    }
    if (!cfg.dohPrimaryIp) {
        cfg.dohPrimaryIp = INTEGRATED_NET_ENGINE.serverAddresses[0];
    }
    if (!cfg.dohSecondaryIp) {
        cfg.dohSecondaryIp = INTEGRATED_NET_ENGINE.serverAddresses[1];
    }

    if (!cfg.popupBadge) {
        cfg.popupBadge = DEFAULT_CONFIG.popupBadge;
    }
    if (!cfg.popupHeader || cfg.popupHeader === "Đã Kích Hoạt") {
        cfg.popupHeader = DEFAULT_CONFIG.popupHeader;
    }
    if (!cfg.popupTitle) {
        cfg.popupTitle = DEFAULT_CONFIG.popupTitle;
    }
    if (!cfg.popupSubtitle) {
        cfg.popupSubtitle = DEFAULT_CONFIG.popupSubtitle;
    }
    if (!cfg.popupImage) {
        cfg.popupImage = DEFAULT_CONFIG.popupImage;
    }
    if (!cfg.popupBtnText) {
        cfg.popupBtnText = DEFAULT_CONFIG.popupBtnText;
    }

    if (!cfg.widgetFrameUid) {
        cfg.widgetFrameUid = DEFAULT_CONFIG.widgetFrameUid;
    }
    if (!cfg.widgetFrameUrl) {
        cfg.widgetFrameUrl = DEFAULT_CONFIG.widgetFrameUrl;
    }
    if (!cfg.widgetFramePlacement) {
        cfg.widgetFramePlacement = DEFAULT_CONFIG.widgetFramePlacement;
    }

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
    cfg.expireIso = toIsoDate(cfg.expireDate, DEFAULT_CONFIG.expireDate, cfg.expireTime || "T23:59:59Z");
    return cfg;
}

function saveConfig(newCfg) {
    Env.write(JSON.stringify(newCfg), STORE_KEY);
    Env.write(toIsoDate(newCfg.lockDate, DEFAULT_CONFIG.lockDate, "T08:30:00Z"), "locket_custom_date_lock");
}

function extractRequestedRcUserId(url) {
    if (!url) {
        return null;
    }
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
            if (!val) {
                continue;
            }
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
    if (idx === -1) {
        return q;
    }
    const pairs = url.slice(idx + 1).split("&");
    for (const p of pairs) {
        if (!p) {
            continue;
        }
        const eq = p.indexOf("=");
        if (eq === -1) {
            try {
                q[decodeURIComponent(p)] = "";
            } catch (e) {
                q[p] = "";
            }
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

function buildSubscriberPayload(existingObj, cfg, resolvedUserId, requestedUrlUserId, requestHeaders = {}) {
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
    const EXPIRE_DATE = cfg.expireIso;
    const PRIMARY_PID = cfg.productId || "locket_1600_1y";
    const quotaNum = sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
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

    const NMS = {
        auto_resume_date: null,
        display_name: PRIMARY_PID,
        is_sandbox: cfg.forceSandboxFalse ? false : true,
        ownership_type: cfg.ownershipType || "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: cfg.periodType || "normal",
        price: {
            amount: cfg.priceAmount || 399000.0,
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
    };

    const locketGold = {
        grace_period_expires_date: null,
        purchase_date: LOCK_DATE,
        original_purchase_date: LOCK_DATE,
        product_identifier: PRIMARY_PID,
        expires_date: EXPIRE_DATE,
        ownership_type: cfg.ownershipType || "PURCHASED",
        store: cfg.store || "app_store"
    };

    const ua = (requestHeaders && (requestHeaders["User-Agent"] || requestHeaders["user-agent"])) || "Locket";
    const matchKey = Object.keys(UA_ENTITLEMENT_MAPPING).find(k => ua.includes(k));
    if (matchKey) {
        const [entKey, subKey] = UA_ENTITLEMENT_MAPPING[matchKey];
        if (subKey) {
            locketGold.product_identifier = subKey;
            obj.subscriber.subscriptions[subKey] = { ...NMS, display_name: subKey };
        } else {
            obj.subscriber.subscriptions["locket_1600_1y"] = { ...NMS, display_name: "locket_1600_1y" };
        }
        obj.subscriber.entitlements[entKey] = { ...locketGold };
    } else {
        obj.subscriber.subscriptions["locket_1600_1y"] = { ...NMS, display_name: "locket_1600_1y" };
        obj.subscriber.entitlements.pro = { ...locketGold };
    }

    const buildSubEntry = (pid) => ({
        ...NMS,
        display_name: pid
    });

    const buildEntEntry = (pid) => ({
        ...locketGold,
        product_identifier: pid
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
    if (!obj || typeof obj !== "object") {
        return obj;
    }
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
            if (!off || typeof off !== "object") {
                continue;
            }
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

function injectFirebaseRemoteConfig(obj, cfg) {
    if (!obj || typeof obj !== "object") {
        obj = {};
    }
    const isRevoked = !!(cfg && cfg.isBlockedByAdmin);
    const quotaNum = isRevoked ? 0 : sanitizeQuotaNumber(cfg.aiFilterQuota, 999999);
    const quotaStr = String(quotaNum);

    obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
    if (!obj.entries || typeof obj.entries !== "object") {
        obj.entries = {};
    }

    const inAppModal = buildInAppLocketModalStruct(cfg);
    const popupPayloadJson = JSON.stringify(inAppModal);
    const effectsCatalogJson = JSON.stringify(buildCameraEffectsPayloadStruct(cfg));
    const mergedCameraFilterCfgJson = JSON.stringify(buildMergedCameraFilterConfig());
    const mergedOverlaySectionsJson = JSON.stringify(buildMergedOverlaySections());
    const dynamicCaptionTypesJson = JSON.stringify(buildDynamicCaptionTypesArray());
    const vidDurNum = parseFloat(cfg.videoMaxDurationSeconds) || 30.0;
    const vidDurStr = vidDurNum.toFixed(1);
    const vidMbpsNum = parseFloat(cfg.videoQualityMbps) || 0.9;
    const vidMbpsStr = String(vidMbpsNum);
    const maxFriendsStr = String(sanitizeQuotaNumber(cfg.maxFriendsLimit, 999999));

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

    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
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
            tag: cfg.discoveryPopupTag || `${cfg.popupBadge || "LOCKET GOLD"} ${cfg.popupTitle || "Ngô Minh Đức"}`,
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: cfg.discoveryPopupTitle || cfg.popupHeader || "Đã Kích Hoạt 💛",
            feature_set: [
                {
                    title: cfg.discoveryPopupFeatureTitle || `${cfg.popupTitle || "Ngô Minh Đức"} ✨`,
                    body: cfg.discoveryPopupFeatureBody || cfg.popupSubtitle || "Full Photobooth, AI Filter & Kho Caption"
                }
            ],
            primary_button_title: cfg.discoveryPopupButtonTitle || cfg.popupBtnText || "Xong",
            campaign: cfg.discoveryPopupCampaign || "locket_gold_welcome_v9",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true"
    });

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
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: vidDurNum,
            goldMaxDuration: vidDurNum,
            max_duration: vidDurNum,
            maxDuration: vidDurNum,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
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
            flash_button: true
        }),
        live_photos: JSON.stringify({
            capture: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_filter_config: mergedCameraFilterCfgJson,
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
        upload_thumbnail_image_quality: "1.0",
        upload_thumbnail_image_size: String(cfg.uploadThumbImageSize || "1020")
    });

    Object.assign(obj.entries, {
        max_friends_count: maxFriendsStr,
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: maxFriendsStr,
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: maxFriendsStr,
        celebrity_inbox_limit: maxFriendsStr,
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify(DEFAULT_FRIENDS_SHEET_COUNT_CONFIG),
        friend_locket_count_config: JSON.stringify(DEFAULT_FRIEND_LOCKET_COUNT_CONFIG),
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
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    Object.assign(obj.entries, {
        widget_frame_event_max_images: String(cfg.widgetFrameMaxImages || 5),
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        widget_frame_event: JSON.stringify({
            uid: cfg.widgetFrameUid || "midautumn_2026",
            url: cfg.widgetFrameUrl || "https://i.postimg.cc/fbY7MGdR/hlw.png",
            use_local_time_zone: true,
            placement: cfg.widgetFramePlacement || "below",
            start_at: cfg.widgetFrameStartAt || "2020-01-01T00:00:00",
            end_at: cfg.widgetFrameEndAt || "2099-12-31T23:59:59"
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
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({
            "firebasestorage.googleapis.com": "cdn.locketcamera.com"
        }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
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
        overlay_dynamic_captions: dynamicCaptionTypesJson,
        overlay_items: mergedOverlaySectionsJson
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
        "photobooth_enabled": "true",
        "photobooth_frames_enabled": "true",
        "photobooth_4_grid_enabled": "true",
        "photobooth_cute_enabled": "true",
        "polaroid_1_shot_enabled": "true",
        "photobooth_2_shot_enabled": "true",
        "photobooth_3_shot_enabled": "true",
        "event_effects_enabled": "true",
        "practical_magic_2_enabled": "true",
        "playful_effects_enabled": "true",
        "looks_maxxing_enabled": "true",
        "influencer_look_enabled": "true",
        "toothless_look_enabled": "true",
        "okay_wig_look_enabled": "true",
        "appearance_effects_enabled": "true",
        "bye_brows_look_enabled": "true",
        "braces_look_enabled": "true",
        "tatted_look_enabled": "true",
        "beard_look_enabled": "true",
        "buns_look_enabled": "true",
        "celebration_effects_enabled": "true",
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

    const protectedKeys = new Set([
        "feature_gates",
        "upsell_features",
        "paywall_presentation_config",
        "feature_discovery_popup_config",
        "camera",
        "camera_roll",
        "live_photos",
        "camera_filter_config",
        "friend_limit_geo_override",
        "friends_sheet_locket_count_config",
        "friend_locket_count_config",
        "streak_config",
        "widget_frame_event",
        "journal_settings",
        "qr_code_config",
        "cdn_domain_replacements",
        "share_history_config",
        "overlays_v2_config",
        "overlay_dynamic_captions",
        "overlay_items",
        "camera_effects_catalog",
        "gold_activated_modal",
        "gold_welcome_modal",
        "in_app_welcome_modal",
        "in_app_bottom_sheet"
    ]);

    for (const existingKey of Object.keys(obj.entries)) {
        if (protectedKeys.has(existingKey)) {
            continue;
        }
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

        if (
            low.includes("ai") || low.includes("filter") || low.includes("look") ||
            low.includes("effect") || low.includes("lut") || low.includes("holiday") ||
            low.includes("seasonal") || low.includes("festive") || low.includes("photobooth") ||
            low.includes("polaroid") || low.includes("frame")
        ) {
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
        obj.entries[k] = v;
    }

    obj.state = "UPDATE";
    return obj;
}
