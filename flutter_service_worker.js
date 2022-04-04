'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3d0f4ae6d69ad86d1a1aabd7089636e5",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/GITGUI_MSG": "fffca4d67ea0a788813031b8bbc3b329",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e85fbaef622acc250cff21706bdc4b7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d9badf4a648e30494b3d59f9a75d7b2",
".git/logs/refs/heads/master": "8d9badf4a648e30494b3d59f9a75d7b2",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/ed06a3cb55cba80dc03fb5450fcbd4d922fbdb": "a5b3cd1eced1afdda73507c34c1a8b89",
".git/objects/01/eee584ba8acdace866ac5a29914e8380a50967": "aa2c772cb2fbc55d9bcad588135d040c",
".git/objects/02/c4193d666cb8aff36f2dc98e6eb0fea7b26693": "b9cc544ef15cb586d9c32107773ccf80",
".git/objects/12/8e1c3a312c94a74b2c23bf104e4d68abb27044": "f4cd0732ffa6a98ef73ce7ff3e614143",
".git/objects/12/f2ae08d3dc1d211aceed4027f603b37f9b81d6": "fcb2d2ecb1c47a00b635c76bf2983cb8",
".git/objects/1d/223efe8001ff19139f182c3f63ece2f65201b5": "f5da293419add8db19c75cf21cc053e4",
".git/objects/29/d09ad971b4701ad07e44f009558ec953c6fd3e": "063639085bee784f2a70abe8ef95c3ff",
".git/objects/2c/444592a5a71880245baf80fff3e94024cee19e": "4d89aa80ddbe2759fc6796de9b9acf6c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/efa83d49e8ddb9844c59324936c753ed9b93ee": "d9e69e57071ef8ef29f92bbe92b5167e",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/41/8fc24cebf0c56b0749308f49dc745496867f46": "c9c1d6a95780fc144d7d77a6ec21686e",
".git/objects/41/9fc94d29b1104d3fbb210677127eeab9f51542": "237ddd301ecf60268a7321fb6661b8fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/525b4f8a181a50d17502d388e58d172d783c64": "11e38fafc71b373bea401ee4499c31fc",
".git/objects/62/35195c44bd5c4917077f20141747ce322451c2": "0e1055c4b58835ddbd6cb8115efb686c",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/69/c85e09959cf2ba35ce14912562cb630460fd15": "beb81f53bc9848b767765f51ac76bef5",
".git/objects/6d/af2ad78eaab7c4fc4d85fb2a38cd0156141409": "62c1f5f3450261f99956cb9642e56a5a",
".git/objects/6f/ff474f536fae3d64e58a02c68c3163c04b51b5": "db638d4a73cdb154460924e9df842f3d",
".git/objects/73/3cfe0eb0ce2341f0e313057061830c700dfec4": "6edcf6ddf5ddbcba94f7e4fd525eba2a",
".git/objects/73/55d1dc64abc270c89c75d2762342409a42d752": "79b0000fc185ecc5fb7338dc877f444a",
".git/objects/74/fe2f1d84238f37fd4a9bb975eb527cbda26c74": "f0a568d8c4855abc7324d5fffc8d9401",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/d0b614b0f8c7fba5e2609373f91d66d8448ff4": "a4ca3cea884a9fddfd7c2ba27475aeb5",
".git/objects/83/090a86d6a18532d5d7ccab0f3ba6dc7525bdae": "b5236a06b06b390ece06ba6e7a3c21ab",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/1ad795bb12d25d6d57a852bbbdae9bc568b772": "315508c3c1a6db2dcb550ab23f7230d2",
".git/objects/95/25b1087ef0e08a05ae15e624660d9ebc3df022": "28318b1ba93217d5fc6f36ece08a23cc",
".git/objects/95/bc3655e317918122c5e11560c7694f3e3be04f": "6c231b40e6967a195bc6fd0a9b648d7c",
".git/objects/9c/fadcc68d3ac750418e9c65241f1a77b3e05402": "01028af69c7c5f4c1f87f3c49c4684a4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/b81c6a353dd7bfe80158a3afd187204f2a071e": "38cc24e9146b846380951ba855238afa",
".git/objects/a2/c6bb86705e1a9828ba6a2152921d44bd28d67c": "153ccde11323ee4485aaad6242a68ac6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/5ff62ccaf7ee96571d5a276e996109b741f296": "4315e4a71f6a7a6831daff2b4ba0e74a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b6/29b3742a4591beb8228e6fdd2ab0c8638924a8": "e0765c67601a8d7807e506b317cb83b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/1f972627dd855b744b04174da515a8e8c7ac1d": "b387c2d7a799258e01e9257d557b182b",
".git/objects/c7/ef2984811ad726e0116f544c313751c345833e": "0d990d7b37503c82d887bcf589c5f36a",
".git/objects/c9/3bf9f988a7cea59e2c3ea84ad8a4250564262d": "ac158f27bef7979b648dfb2d14c703f7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/09968710965cc761a910e911edff63e88cd04f": "529a65aa1dc2a99f557c7ae2f7e61d56",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d19710ccdc2ca8c845505ed0ef5d17ccc0980c": "fe22bf3b3c95fb051b52669f10bb8504",
".git/objects/f3/120daac4cdbc441f9faf3f258813037bd53981": "dd1cd14398aba9527c5a517b35fc3ed3",
".git/objects/f7/016cfeb2ddd4eba3ae4cf64b062a4129d563fc": "5a8c6b9209131343bd5bee8d590cb556",
".git/objects/f7/946ecd9089f87f32f3fdd6ca55417e89261598": "9ae9ad3c7261ad35e00bc2c13cc1af55",
".git/refs/heads/master": "4c633008dc2528383075da3763080af3",
"assets/AssetManifest.json": "b7a0c14fca821c17ddc0103a50a62654",
"assets/assets/bgimg.JPG": "7c707df6c4020baf5012764d58ff1dcc",
"assets/assets/bhagavad-gita-quiz.jpg": "083c009f7616e57b93aca9144f8816dd",
"assets/assets/bhagvt.jpg": "9b5c1a91b70ba925d9f849e157d1fdf7",
"assets/assets/cat.jpg": "4b93f33f20929e9a96c8a3b82e81567f",
"assets/assets/im.png": "90b580b67b4f0ba11d13fabc05af0301",
"assets/assets/imag22.jpg": "e2d2a2215b1f586b53431f6e0c286bc6",
"assets/assets/imag22.png": "9d408f96070dd80c1d30ce727d27fe86",
"assets/assets/images%25202.jpg": "c3ae450db343641f1459917839b7bcb6",
"assets/assets/images.jpg": "9fa279d2164b12465bdc3f2b1f2f68ca",
"assets/assets/images_2.png": "66ebc484d151e25ed0a6987c6388bee5",
"assets/assets/img1.jpg": "4f4c48a38c800ae6b089ff19c74a0219",
"assets/assets/img2.jpg": "c69d14df3666da58e4cd44131c4a8f4c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "38f8ef56c01f61e9d16218f665d55fb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "394212682e739f3e6bc03497665fa833",
"/": "394212682e739f3e6bc03497665fa833",
"main.dart.js": "76ff023854a64b5805733343ff7ae7b2",
"manifest.json": "4515a419b098e49e7afc1a1e31dea084",
"version.json": "d4c91ccc57683fb7e15221fdd8a80f6f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
