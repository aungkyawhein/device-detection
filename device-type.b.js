function detectDeviceType() {
  const ua = navigator.userAgent;

  // Checks for tablets
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(ua)) {
    return 'Tablet';
  }

  // Checks for mobile phones
  if (/mobile/i.test(ua)) {
    return 'Mobile';
  }

  // Checks for desktop devices
  return 'Desktop';
}

const deviceTypeB = detectDeviceType();
document.getElementById('a').textContent = deviceTypeB;
