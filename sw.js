// Service worker minimal — juste ce qu'il faut pour que le navigateur
// propose l'installation de l'Atelier comme une application.
// Ne met rien en cache : le site continue de fonctionner normalement en ligne.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
