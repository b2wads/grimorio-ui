const windowSize = {
  height: 300,
  width: 600,
};
const left = window.screen ? Math.round(screen.width / 2 - windowSize.width / 2) : 100;
const WINDOW_INFO = `width=${windowSize.width},height=${windowSize.height},top=100,left=${left}`;
const SHARE_URL = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/intent/tweet?url=',
  whatsapp_mobile: 'https://api.whatsapp.com/send?text=',
  whatsapp_web: 'https://web.whatsapp.com/send?text=',
};

const share = (shareUrl, url, name = 'share') => {
  if (!url || typeof url !== 'string') {
    return null;
  }
  const href = shareUrl + url;
  window.open(href, name, WINDOW_INFO);
};

export const shareOn = {
  facebook: url => share(SHARE_URL.facebook, url, 'social-share'),
  twitter: url => share(SHARE_URL.twitter, url, 'social-share'),
  whatsapp_web: url => share(SHARE_URL.whatsapp_web, url, 'social-shared'),
  whatsapp_mobile: url => share(SHARE_URL.whatsapp_mobile, url, 'social-shared'),
};
