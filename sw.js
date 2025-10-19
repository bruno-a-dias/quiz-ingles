// ===================================
// SERVICE WORKER - English Learning Hub
// ===================================

const CACHE_NAME = 'english-hub-v1.0.0';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/flashcards.html',
  '/quiz.html',
  '/css/main.css',
  '/css/flashcards.css',
  '/css/quiz.css',
  '/css/print.css',
  '/js/main.js',
  '/js/language.js',
  '/js/flashcards.js',
  '/js/quiz.js',
  '/js/navigation.js',
  '/data/translations.json',
  '/data/flashcards-data.json',
  '/data/quiz-questions.json',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install Event - Cache assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Cache new requests
            return caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
              });
          });
      })
      .catch(() => {
        // Offline fallback page (optional)
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Background Sync (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

function syncData() {
  // Sync logic here
  return Promise.resolve();
}
