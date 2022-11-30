if (!self.define) {
    let e,
        s = {};
    const n = (n, t) => (
        (n = new URL(n + ".js", t).href),
        s[n] ||
            new Promise((s) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = n), (e.onload = s), document.head.appendChild(e);
                } else (e = n), importScripts(n), s();
            }).then(() => {
                let e = s[n];
                if (!e)
                    throw new Error(`Module ${n} didn’t register its module`);
                return e;
            })
    );
    self.define = (t, a) => {
        const i =
            e ||
            ("document" in self ? document.currentScript.src : "") ||
            location.href;
        if (s[i]) return;
        let c = {};
        const o = (e) => n(e, i),
            r = { module: { uri: i }, exports: c, require: o };
        s[i] = Promise.all(t.map((e) => r[e] || o(e))).then(
            (e) => (a(...e), c),
        );
    };
}
define(["./workbox-588899ac"], function (e) {
    "use strict";
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: "/_next/static/Uwkl1_kM3A9V-VZw4EFnc/_buildManifest.js",
                    revision: "88680982864d28aa118f50399e2fb18f",
                },
                {
                    url: "/_next/static/Uwkl1_kM3A9V-VZw4EFnc/_ssgManifest.js",
                    revision: "b6652df95db52feb4daf4eca35380933",
                },
                {
                    url: "/_next/static/chunks/515-6dc066e45c186961.js",
                    revision: "6dc066e45c186961",
                },
                {
                    url: "/_next/static/chunks/framework-ffee79c6390da51e.js",
                    revision: "ffee79c6390da51e",
                },
                {
                    url: "/_next/static/chunks/main-68fc5f3ea39c1faa.js",
                    revision: "68fc5f3ea39c1faa",
                },
                {
                    url: "/_next/static/chunks/pages/403-269e2b7fa0e18b53.js",
                    revision: "269e2b7fa0e18b53",
                },
                {
                    url: "/_next/static/chunks/pages/404-e714571cd42af6ac.js",
                    revision: "e714571cd42af6ac",
                },
                {
                    url: "/_next/static/chunks/pages/_app-8b719611ab3eff29.js",
                    revision: "8b719611ab3eff29",
                },
                {
                    url: "/_next/static/chunks/pages/_error-8e848193de3c139c.js",
                    revision: "8e848193de3c139c",
                },
                {
                    url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
                    revision: "837c0df77fd5009c9e46d446188ecfd0",
                },
                {
                    url: "/_next/static/chunks/webpack-2369ea09e775031e.js",
                    revision: "2369ea09e775031e",
                },
                {
                    url: "/_next/static/css/b8074d0b3d7b3fa9.css",
                    revision: "b8074d0b3d7b3fa9",
                },
                {
                    url: "/favicon.ico",
                    revision: "d41d8cd98f00b204e9800998ecf8427e",
                },
                {
                    url: "/icons/icon-512x512.png",
                    revision: "d41d8cd98f00b204e9800998ecf8427e",
                },
                {
                    url: "/manifest.json",
                    revision: "65de9da3d32738a3874af87919833772",
                },
            ],
            { ignoreURLParametersMatching: [] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            "/",
            new e.NetworkFirst({
                cacheName: "start-url",
                plugins: [
                    {
                        cacheWillUpdate: async ({
                            request: e,
                            response: s,
                            event: n,
                            state: t,
                        }) =>
                            s && "opaqueredirect" === s.type
                                ? new Response(s.body, {
                                      status: 200,
                                      statusText: "OK",
                                      headers: s.headers,
                                  })
                                : s,
                    },
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: "google-fonts-webfonts",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: "google-fonts-stylesheets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-font-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-image-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-image",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: "static-audio-assets",
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: "static-video-assets",
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-js-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-style-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-data",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: "static-data-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const s = e.pathname;
                return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
            },
            new e.NetworkFirst({
                cacheName: "apis",
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith("/api/");
            },
            new e.NetworkFirst({
                cacheName: "others",
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: "cross-origin",
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 3600,
                    }),
                ],
            }),
            "GET",
        );
});
