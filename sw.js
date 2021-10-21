self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        './',
        './index.html',
     //   '/pwa-examples/a2hs/index.js',
        './style.css',
           './logo.svg',
           './logo copy.svg',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
