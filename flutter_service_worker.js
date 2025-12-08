'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5dc746f36a58f3853b0e4ff52de8c9bd",
"assets/AssetManifest.bin.json": "b661db2af94a80b7c5a3eba7366bbeb3",
"assets/AssetManifest.json": "59a9d42081349ec402b71eade26a894d",
"assets/assets/Fonts/Inconsolata-Bold.ttf": "074a4103de5a618baeefd901a09f0093",
"assets/assets/Fonts/Inconsolata-Medium.ttf": "69ee0a070826e32a30f41d72927031cc",
"assets/assets/Fonts/Inconsolata-Regular.ttf": "f491f18124d91cadefcf16269d284648",
"assets/assets/Icons/favicon.png": "02d3169793c2c5c24d44bc9784ca6a35",
"assets/assets/Images/abcd.png": "e7d4a4a3397ac14d65a285e5a89502ff",
"assets/assets/Images/aiesec.png": "c8d7466574e96eec0984b06741b6fa0b",
"assets/assets/Images/aiesec_logo.jpg": "61b5b01e02abe937cde0b05dc1c61cd1",
"assets/assets/Images/anyfeast_logo.png": "e3b798905c7064e93db643334ef1c022",
"assets/assets/Images/beeyarn_logo.jpeg": "bdb87ac5c22c0d1aeff1803f6b580dc1",
"assets/assets/Images/buildspace.png": "a3b1e6133e88dfa2231860ed445dd2c8",
"assets/assets/Images/filters.jpeg": "6b6d0c448cf8c3c70ee9dfebed7e3e57",
"assets/assets/Images/likhai_project.png": "613634a99c930f97e669f2a5060e7458",
"assets/assets/Images/nuance.png": "8851f24e109fb9753b8663b77c7e0411",
"assets/assets/Images/orbit_project.png": "dc443fe1a5ff4402fa7ece26d05a0918",
"assets/assets/Images/pocketbox-extension.png": "3d2f3c09a94e93959afe7c53510ab5bd",
"assets/assets/Images/profile.png": "11cbbde706c4358a02c31e2682302d58",
"assets/assets/Images/saarthi_logo.jpeg": "4e09173f826a820d333b16277b4ae2cb",
"assets/assets/Images/saathi_project.jpg": "4ddf45254718d25780184feb93e47094",
"assets/assets/Images/safar_project.png": "1dfb94fa83900cb3235b9ac790c7e85d",
"assets/assets/Images/suitup.jpg": "2a0268be2d91a00257060671299a51fb",
"assets/assets/Images/theoldinternet.png": "0cff07173b8f2479908fc6b8d4c8b78b",
"assets/assets/Images/timestamp.jpg": "f02534adb915e7db383573ce85c1d839",
"assets/assets/Images/trent.png": "b1216b9c408a3dacb40d7609ab4a76d0",
"assets/assets/Images/tweetbot.png": "1e78e59e0336941353ba74ec25e7e344",
"assets/FontManifest.json": "1402c6c4d8b76494d58d43429801dec0",
"assets/fonts/MaterialIcons-Regular.otf": "56064c1852c5481b61a5b7a5529dd006",
"assets/NOTICES": "765b5853659fc44ba7857227ec3700fb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "02d3169793c2c5c24d44bc9784ca6a35",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7b9b95c1443a01c99d9436ab96a77770",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "360d758fa532d1d415aebc10e7325702",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
