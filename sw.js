// Minimal service worker - taaki PWA installable requirement poori ho.
// Filhaal koi offline-caching nahi karta, sirf pass-through hai.
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
