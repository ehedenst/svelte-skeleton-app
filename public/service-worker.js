const assets = ['/index.html', '/manifest.json', '/build/bundle.css', '/build/bundle.js'];
const cacheName = 'svelte-app';

self.addEventListener('install', event => {
  // Pre-fetch core files
  event.waitUntil(caches.open('svelte-app').then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request).then(response => {
            const url = new URL(event.request.url);
            if (url.origin == location.origin) {
              // Cache on demand from same origin
              cache.put(event.request, response.clone());
            }
            return response;
          })
        );
      });
    })
  );
});
