let CACHE_NAME = "drumMachine-cache-v1";
const urlsToCache = ["./", "./index.html"];
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
