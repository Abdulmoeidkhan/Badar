if (!self.define) { let e, s = {}; const n = (n, c) => (n = new URL(n + ".js", c).href, s[n] || new Promise((s => { if ("document" in self) { const e = document.createElement("script"); e.src = n, e.onload = s, document.head.appendChild(e) } else e = n, importScripts(n), s() })).then((() => { let e = s[n]; if (!e) throw new Error(`Module ${n} didn’t register its module`); return e }))); self.define = (c, i) => { const a = e || ("document" in self ? document.currentScript.src : "") || location.href; if (s[a]) return; let t = {}; const o = e => n(e, a), r = { module: { uri: a }, exports: t, require: o }; s[a] = Promise.all(c.map((e => r[e] || o(e)))).then((e => (i(...e), t))) } } define(["./workbox-588899ac"], (function (e) { "use strict"; importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{ url: "/_next/static/CqphLqGF46eCrSXBFaIdj/_buildManifest.js", revision: "5ea30236ffb2def04fc118a82c136c4e" }, { url: "/_next/static/CqphLqGF46eCrSXBFaIdj/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" }, { url: "/_next/static/chunks/231-6dde3c298c2eeb26.js", revision: "6dde3c298c2eeb26" }, { url: "/_next/static/chunks/framework-114634acb84f8baa.js", revision: "114634acb84f8baa" }, { url: "/_next/static/chunks/main-67e54c36fe99fd6c.js", revision: "67e54c36fe99fd6c" }, { url: "/_next/static/chunks/pages/_app-c5215cfbe3ce0a9c.js", revision: "c5215cfbe3ce0a9c" }, { url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js", revision: "8353112a01355ec2" }, { url: "/_next/static/chunks/pages/index-f65b7b24b0303bb4.js", revision: "f65b7b24b0303bb4" }, { url: "/_next/static/chunks/pages/listDataSlice/listDataSlice-a75cbeeb7e820f66.js", revision: "a75cbeeb7e820f66" }, { url: "/_next/static/chunks/pages/listDataSlice/listFethcApi-1206ee6484283974.js", revision: "1206ee6484283974" }, { url: "/_next/static/chunks/pages/store/store-9c9be461c0e7a4c7.js", revision: "9c9be461c0e7a4c7" }, { url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js", revision: "837c0df77fd5009c9e46d446188ecfd0" }, { url: "/_next/static/chunks/webpack-87b3a303122f2f0d.js", revision: "87b3a303122f2f0d" }, { url: "/_next/static/css/27d177a30947857b.css", revision: "27d177a30947857b" }, { url: "/_next/static/css/92ff1f22dd9892a3.css", revision: "92ff1f22dd9892a3" }, { url: "/favicon.ico", revision: "d808d056a557ea3d262671a0b2b492dd" }, { url: "/icons/Badar-Logo-Black.png", revision: "069c78b4bf6d8ea43a6e3ed3c576b7a5" }, { url: "/icons/Badar-icon-128x128.png", revision: "f7a6ff339bd0ba379f71cd9a9dde4e25" }, { url: "/icons/Badar-icon-144x144.png", revision: "03b578ed88a540d8134680a33d0d1107" }, { url: "/icons/Badar-icon-152x152.png", revision: "735be6f9b0fc3bad754d31aa0ca80ffc" }, { url: "/icons/Badar-icon-16x16.png", revision: "d808d056a557ea3d262671a0b2b492dd" }, { url: "/icons/Badar-icon-192x192.png", revision: "070bfc0dcfdc18aa70be11537f230052" }, { url: "/icons/Badar-icon-32x32.png", revision: "cc009ca4522dec2fb895dcc1b5695b0d" }, { url: "/icons/Badar-icon-384x384.png", revision: "472b951dc6263dedd4cfa0a9dfc78260" }, { url: "/icons/Badar-icon-512x512.png", revision: "608bc22b13a29660413b27d8c93dbc37" }, { url: "/icons/Badar-icon-72x72.png", revision: "6d2152800b6b6116325920edaefd3a40" }, { url: "/icons/Badar-icon-96x96.png", revision: "b27635fa90720f1774f34bf7a0da6cbb" }, { url: "/icons/icon-128x128.png", revision: "d626cfe7c65e6e5403bcbb9d13aa5053" }, { url: "/icons/icon-144x144.png", revision: "e53a506b62999dc7a4f8b7222f8c5add" }, { url: "/icons/icon-152x152.png", revision: "18b3958440703a9ecd3c246a0f3f7c72" }, { url: "/icons/icon-16x16.png", revision: "83703514f19796ee15151e450984416d" }, { url: "/icons/icon-192x192.png", revision: "27dc12f66697a47b6a8b3ee25ba96257" }, { url: "/icons/icon-32x32.png", revision: "25e2c6ee34840568012b32e4314278df" }, { url: "/icons/icon-384x384.png", revision: "a40324a3fde2b0b26eeffd4f08bf8be8" }, { url: "/icons/icon-512x512.png", revision: "93d6e8e15cfa78dfee55446f607d9a28" }, { url: "/icons/icon-72x72.png", revision: "f2ffc41b3482888f3ae614e0dd2f6980" }, { url: "/icons/icon-96x96.png", revision: "fba02a40f7ba6fc65be8a2f245480f6d" }, { url: "/manifest.json", revision: "835ec70efc0dacf8b639b13b6eb48211" }, { url: "/sw.js", revision: "2271ff4f39ddc0cd1cf939b0f07e1e38" }, { url: "/sw.js.map", revision: "1d2080baa19c421c1c6d27c6dbbcf9ab" }, { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" }], { ignoreURLParametersMatching: [] }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({ cacheName: "start-url", plugins: [{ cacheWillUpdate: async ({ request: e, response: s, event: n, state: c }) => s && "opaqueredirect" === s.type ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers }) : s }] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({ cacheName: "static-audio-assets", plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({ cacheName: "static-video-assets", plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { if (!(self.origin === e.origin)) return !1; const s = e.pathname; return !s.startsWith("/api/auth/") && !!s.startsWith("/api/") }), new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { if (!(self.origin === e.origin)) return !1; return !e.pathname.startsWith("/api/") }), new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => !(self.origin === e.origin)), new e.NetworkFirst({ cacheName: "cross-origin", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }), "GET") }));
