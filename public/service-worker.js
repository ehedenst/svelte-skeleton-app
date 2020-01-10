const assets = ['/index.html', '/manifest.json', '/build/bundle.css', '/build/bundle.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open('svelte-app').then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
