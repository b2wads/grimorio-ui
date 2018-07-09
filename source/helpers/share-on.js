const WINDOW_SIZE = 'width=580,height=296';
const SHARE_URL = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/intent/tweet?url=',
};

const share = (shareUrl, url, name = 'share') => {
  if (!url || typeof url !== 'string') {
    return null;
  }
  const href = shareUrl + url;
  window.open(href, name, WINDOW_SIZE);
};

export default {
  facebook: url => share(SHARE_URL.facebook, url, 'facebook-share'),
  twitter: url => share(SHARE_URL.twitter, url, 'facebook-share'),
};
