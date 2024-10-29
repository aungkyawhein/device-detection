const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  let deviceType = 'Desktop';
  let browser = 'Unknown Browser';

  if (/iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) {
    deviceType = 'Tablet';
  } else if (/iPhone|iPod/i.test(userAgent)) {
    deviceType = 'Mobile';
  } else if (/Android/i.test(userAgent)) {
    deviceType = 'Mobile';
  }

  if (/Safari/i.test(userAgent) && !/Chrome|CriOS/i.test(userAgent)) browser = 'Safari';
  if (browser === 'Safari' && deviceType === 'Desktop') {
    if (navigator.maxTouchPoints > 0) {
      deviceType = 'Tablet';
    }
  }

  return deviceType;
};

const deviceType = getDeviceType();
document.getElementById('a').textContent = deviceType;
