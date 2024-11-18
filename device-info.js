const DeviceInfo = (() => {
    const userAgent = navigator.userAgent;
    let deviceType = "Desktop";
    let os = "Unknown OS";
    let browser = "Unknown Browser";

    // Detect OS
    if (/Windows/i.test(userAgent)) os = "Windows";
    else if (/Macintosh|Mac OS X/i.test(userAgent)) os = "macOS";
    else if (/iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) {
        os = /iPad/i.test(userAgent) ? "iOS" : "Android";
        deviceType = "Tablet";
    } else if (/iPhone|iPod/i.test(userAgent)) {
        os = "iOS";
        deviceType = "Mobile";
    } else if (/Android/i.test(userAgent)) {
        os = "Android";
        deviceType = "Mobile";
    } else if (/Linux/i.test(userAgent)) os = "Linux";

    // Detect Browser
    if (/Chrome/i.test(userAgent) && !/Edg|OPR/i.test(userAgent)) browser = "Chrome";
    else if (/Safari/i.test(userAgent) && !/Chrome|CriOS/i.test(userAgent)) browser = "Safari";
    else if (/Firefox/i.test(userAgent)) browser = "Firefox";
    else if (/MSIE|Trident/i.test(userAgent)) browser = "Internet Explorer";
    else if (/Edg/i.test(userAgent)) browser = "Edge";
    else if (/OPR|Opera/i.test(userAgent)) browser = "Opera";

    // Additional check for iPad detection
    if (os === "iOS" && deviceType === "Desktop") {
        if (navigator.maxTouchPoints > 1 || screen.width >= 768 && screen.width <= 1024) {
            deviceType = "Tablet";
        }
    }

    return { deviceType, os, browser };
})();

const { deviceType, os, browser } = DeviceInfo;
document.getElementById('c').innerHTML = `<span>${deviceType}</span> | <span>${os}</span> | <span>${browser}</span>`;
