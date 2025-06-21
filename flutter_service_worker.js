'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "56bbc0b12d8ccb3e686ad0dba9be5b97",
".git/config": "e5db489674b6273064e07dd5dd325a20",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "31bfe06da528b0da50d069e0610486e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e5695b1f0dfdbf5d2a1fb0a1d719873a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb4065653f66ba05c3334ae83d2d5454",
".git/logs/refs/heads/main": "b19dd8f78e120fd0b40248b6201cd489",
".git/logs/refs/remotes/origin/main": "e7a6791450b855f5b5facf473f865f4a",
".git/objects/00/4a08d9015d08e34163cbe01a8b387b2dd6464f": "a03b4642ed64493773b2d8492728cd56",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0d/036fefb1155bca14f36e83e4e58db352b258a0": "bcff0291582cfcbbd58d07eeff5de258",
".git/objects/14/c6d7c8226b00afe2576817de93876c17c38531": "ce050928f17b82c0d26ef2fce3604830",
".git/objects/19/fef377594b1309e17a0611c1a04100d05cc138": "dc72fec9a9fc6f794d0dfb3310aed820",
".git/objects/1b/feb13d2d9391a2c1e15456c686fc2efcae0a22": "1b2a1ed224c01e18b5045e14234fcb60",
".git/objects/1c/9878e09112aba4954d1a16cd3fe615b78467e2": "be7f8d4e839b0bf40859b7c13ef0fbe7",
".git/objects/1d/f0d8a8f8576e53e5e4b9cac1ea51043a82fd95": "a05293e32787984fbb3721dda4ef54de",
".git/objects/1e/56d0f8a99b4d465ef5995f5b339d608e2f29ca": "ad65c0254621d2db8f4e382784d2115e",
".git/objects/20/e6ef2b88a6c113faa4519c47bf4636fa052745": "4fbfb95eddcc05330aecf926706b8eb3",
".git/objects/2f/2992ddbf00be21b08c88573b5b7ed706a29eca": "acd5cdf23ab19002974bc267020e862d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/8c28352641d4cd60a1688133785e3fb93cb4ea": "31bd55df863bda4a25abc662fb7a03f2",
".git/objects/3c/46bbd90872d919967010ee115199d1e498e696": "f6fa6d4fab71979f00dd3e0a45c9a644",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/560cd91e7bdc7382c0cbb8ee854e5b36316b35": "14dd199c38405b2b9857f8733a8f75e8",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/69f3d4fcef0bd9cd4fba81c0ac65dcc25204c7": "826b12cd68a40ef0d0e785caeb36ebd1",
".git/objects/51/dfdd66f17e4426bd18debb810754db35dfd258": "19eb955a1f336b87e892bd977f1a3307",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/ad598fac2b135db76b472d47422c87fde3ecb7": "de15e5b6ef578eb6d4ae679c381c18e5",
".git/objects/5d/3913ce82f71824cb070fed5631c5dc94068f72": "8745bb692c1e8becff0ee9f2f0a02a68",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/37d6fe9a3dc86313160cc3215b844004323e79": "1fade661f044d5bd93ec052e7235957a",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/b276361f2b09616e8923a621aefeb4595c86b9": "56608bdc12e8170a87aa528eeba57f13",
".git/objects/6f/164ced45a7a569256d1af66ce786e6b9864c58": "c80c69447f289daa960e9de701eafdc5",
".git/objects/72/ce6e8bf3e9a14b8bc1d02d6b442558a861c429": "02f0e370ac0a90a77ee3a85bea79fada",
".git/objects/74/189540830ed79b451aa57cab04306a4020c8a0": "6e6428b2937123512091887c937b30fa",
".git/objects/74/a1f6790ec7b9ce58380277d52f456e1e34af06": "e0ee4654224d14351d8da12492b055e9",
".git/objects/7b/6e5e8f2d878799cc9067933287c5fe46b442e7": "9e0141f48d168aeca91469d21e1f3219",
".git/objects/7c/a4c0a90e5b4daec4858c6a33c8ae3d238e7b79": "91a06098d714de30a1efc79004f127a7",
".git/objects/80/f7572822a9c11ab633b045fd4749dce236826f": "190c1b2d4a9618bec2d69aca5a7ee821",
".git/objects/84/e826d6650d171007b13d06fc55db7b2e94af49": "3d8cd173b65b1bf1a9b10667dc663b47",
".git/objects/86/ba05ae86665e61397d6a5a666f78b28742a683": "a31e47e8bd76ae3cfd79e0fa0605ed75",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8d/5d800c061322a61a669985ba2adbcdf046166f": "cd7d8e4f43c7429f8b24fa53176749be",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/e72fd6fe75726b6f74184276432eb387ab4981": "6bf822a8b70e5cee0a3f74299356af08",
".git/objects/95/f0d5d0628433ff3755be292c7cb01566a09515": "f354015ad5de5071fdb8e99d5d2856f0",
".git/objects/96/9a101281154952418ca63c9272914ea62811a5": "325ce6f2aa4f0d96d521c8169dd7d95a",
".git/objects/99/6595649d1dc2df6fcb6f6b21bd49070ddca2ff": "9369e1c609c57ffe414c5eb5bf8dde3f",
".git/objects/9d/0e50a3c34e03be09e24737f03d7f743da0f293": "0e4511df372ab69d1b8c4afc12ffa72a",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a1/0b3a06b9170051312fe428af0eb33e31f1b796": "da0398dc1af08a170a42d75782647070",
".git/objects/a1/20841b4d9aa37c53c99b1d14d9f29f5a03cfc8": "d9fbea25d2caff58d0e6543d6a445fcc",
".git/objects/a4/9135b0f96bd8730dd3dc26bba17a4a60ae82a8": "b41a1d066d5387771ed066ecaec78b1b",
".git/objects/a5/8cff7fc58cfc3a390645300e2b64ffa493112a": "ad1fe50f6d2c9a6d27fe3414b8108ea2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/7650e7fdfa301447260e780c8ebb17f9e69bf0": "7db3a04a5f5a1f66927c8c1515fdeb75",
".git/objects/a8/1586be95d1082a8cc2dfb90d895ecc2cfc4a23": "572de71e5204923aeaf80947d03537aa",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/aa2eb02a14ace3887bbe94618ac9266690da79": "ebe2091f77ec1c53e027444c1cac67c1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/b53a20111adfec040952db9f160431a088d516": "db6a582befec063ae55fa5abe0f37c35",
".git/objects/c4/cb8afa54575949de741ffa019fab0fda607df6": "72ea7ed4934e509b54839164a75b6c1b",
".git/objects/c4/d34f96aba95b7f19f12bd7014cf62ddb69a1ec": "e6b66b6a9a44e43b3dbebec170f2f5a0",
".git/objects/c8/3ecca68d57bae46fbaf5ba7438d8ee89172e52": "707353c8a75d00ea09ba1c5b20fc1336",
".git/objects/c8/7fe77a8786d658d400e87b8a0ccdcd01083a0d": "243cd777ca8510b98655d8d5a26fe420",
".git/objects/cd/a20c084c2b72ed925f156aefcf9e4f6a0a8fd0": "79ce12812e8a351835297b21f6ae373d",
".git/objects/ce/fee5d91176cb5455f9e77acfa0a7c4d21323d5": "d37fe8954b7cebe24d0a0b404369704a",
".git/objects/d1/241516bc2357fadd283371e34055d9b1cc89a8": "cf0a74319cddbd86751641c69e786775",
".git/objects/d2/e5fbbd81debe4e2e4e3044255d1f906067520b": "18a8c6eab526322e7ec224f9cbedce11",
".git/objects/d3/a6467619f2379d51115842cbbd02cbc0413caf": "f7c0ec0688f7281bb7968fb9ed156b6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/05253d7054b22ed6fe66bf25020009be002bd9": "505dff850ba11908c0d78b1b838d0659",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/de46dfcfa47317a03e8df0b2f89b7e8226780f": "a96f4615cbd98bb59fbb7875db1497ea",
".git/objects/d9/0c85e21b12ee66888f5c8a09d93269ea47dbe1": "f2f69778834d21fa8aec26e5710ab9e2",
".git/objects/d9/292b39e70700b0dd94fea5b5f812cba6879703": "75c37eb3bc5507f1b3a6e6becc0b8201",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/81e0616891bd8de31f7b57ff5d9a6970cecefe": "7b9e83027ea342f262139ed6bbf51ef1",
".git/objects/e2/57bfd54bc05ded06414a34b97ff0712e49394a": "475504a1843c6afdc6f15742850924b3",
".git/objects/eb/4c9132a533aeeb446508995ffad02c455415fd": "89fcb4d91b07efd07c19a3b794ee18ce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/a2d3679d34af18b5d5a8baa5d27f22c1b26403": "ebf46d3021097def1868dcb33e6edfcd",
".git/ORIG_HEAD": "576eca2d03f6b9a6442ccc054377839f",
".git/refs/heads/main": "576eca2d03f6b9a6442ccc054377839f",
".git/refs/remotes/origin/main": "576eca2d03f6b9a6442ccc054377839f",
"assets/AssetManifest.bin": "656f96f39b33bad49381d026f6a68102",
"assets/AssetManifest.bin.json": "61a55bc46868f0d7341f852d832939ef",
"assets/AssetManifest.json": "2c35636d783ffdeaa69c2286eed29451",
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
"assets/assets/Images/crisis_project.jpg": "0ea4e4b164477d0286076f6ea6d54ec5",
"assets/assets/Images/filters.jpeg": "6b6d0c448cf8c3c70ee9dfebed7e3e57",
"assets/assets/Images/leetcompete.jpeg": "4dd941f477806651d8f8f568d2f89b25",
"assets/assets/Images/likhai_project.png": "613634a99c930f97e669f2a5060e7458",
"assets/assets/Images/pocketbox-extension.png": "3d2f3c09a94e93959afe7c53510ab5bd",
"assets/assets/Images/profile.png": "11cbbde706c4358a02c31e2682302d58",
"assets/assets/Images/saarthi_logo.jpeg": "4e09173f826a820d333b16277b4ae2cb",
"assets/assets/Images/safar_project.png": "1dfb94fa83900cb3235b9ac790c7e85d",
"assets/assets/Images/suitup.jpg": "2a0268be2d91a00257060671299a51fb",
"assets/assets/Images/sync.jpg": "e6fb4a775c7225999d841b1017a197e9",
"assets/assets/Images/timestamp.jpg": "f02534adb915e7db383573ce85c1d839",
"assets/assets/Images/type-racer.jpg": "a1133a1b38a18d5017035072f0d6df9c",
"assets/FontManifest.json": "1402c6c4d8b76494d58d43429801dec0",
"assets/fonts/MaterialIcons-Regular.otf": "e16da477acabb6317da1e66657462c51",
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
"flutter_bootstrap.js": "610914ddbbb852b4acc4527fcaa5a2cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "b14d4e4dd91c97bfd356d72b733ab96c",
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
