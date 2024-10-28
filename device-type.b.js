function detectDeviceType() {
  const ua = navigator.userAgent;

  // Checks for tablets
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(ua)) {
    return 'tablet';
  }

  // Checks for mobile phones
  if (/mobile/i.test(ua)) {
    return 'mobile';
  }

  // Checks for desktop devices
  return 'desktop';
}

const deviceType = detectDeviceType();
document.getElementById('a').textContent = deviceType;
