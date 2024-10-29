function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();

  // Check for iPad specifically
  if (/ipad/.test(userAgent) || (/macintosh/.test(platform) && 'ontouchend' in document)) {
    return "Tablet";
  }

  // Check for mobile devices
  if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    return "Mobile";
  }

  // Check for tablets based on screen size
  if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
    return "Tablet";
  }

  // Default to Desktop
  return "Desktop";
}

const deviceTypeB = getDeviceType();
document.getElementById('a').textContent = deviceTypeB;
