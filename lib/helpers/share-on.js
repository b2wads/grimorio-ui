"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareOn = void 0;
var windowSize = {
  height: 300,
  width: 600
};
var left = window.screen ? Math.round(screen.width / 2 - windowSize.width / 2) : 100;
var WINDOW_INFO = "width=".concat(windowSize.width, ",height=").concat(windowSize.height, ",top=100,left=").concat(left);
var SHARE_URL = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/intent/tweet?url='
};

var share = function share(shareUrl, url) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'share';

  if (!url || typeof url !== 'string') {
    return null;
  }

  var href = shareUrl + url;
  window.open(href, name, WINDOW_INFO);
};

var shareOn = {
  facebook: function facebook(url) {
    return share(SHARE_URL.facebook, url, 'social-share');
  },
  twitter: function twitter(url) {
    return share(SHARE_URL.twitter, url, 'social-share');
  }
};
exports.shareOn = shareOn;