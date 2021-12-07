self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('password-maker').then((cache) => cache.addAll([
        './',
        './index.html',
        './style.css',
           './logo.svg',
         './logo.png',
            './logo2.png',
        './logo3.png',
            './script.js',
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
