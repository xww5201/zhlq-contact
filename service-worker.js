const CACHE_NAME = 'contact-page-cache-v1';
const urlsToCache = [
  '/1.html', // 如果你使用的不是1.html，请替换为你的HTML文件名
  
  // 可添加其他需要缓存的资源（CSS、JS、图片等）
  '/背景.png',
  '/logo.png',
  '/ts.mp3',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});