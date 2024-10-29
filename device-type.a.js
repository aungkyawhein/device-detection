const DeviceInfoA = () => {
  const userAgent = navigator.userAgent;
  let deviceType = "Desktop";
  if (/iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) {
    deviceType = "Tablet";
  } else if (/iPhone|iPod/i.test(userAgent)) {
    deviceType = "Mobile";
  } else if (/Android/i.test(userAgent)) {
    deviceType = "Mobile";
  }

  if (DeviceInfo.browser === 'Safari' && deviceType === 'Desktop') {
    if (navigator.maxTouchPoints > 0) {
      deviceType = 'Tablet';
    }
  }

  return deviceType;
};
const deviceTypeA = DeviceInfoA();
document.getElementById('a').textContent = deviceTypeA;
