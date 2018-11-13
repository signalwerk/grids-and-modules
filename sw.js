/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-247f0e267fafd5642a6f.js"
  },
  {
    "url": "app.b6f197430f783b3e67aa.css"
  },
  {
    "url": "app-d8bce1141f51539f5e83.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-59bc0028065f4945c275.js"
  },
  {
    "url": "index.html",
    "revision": "7f105b0b1cfd21209c7bdfac0103aa8c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6177a03431ccb4ee56bd1ac350a372d5"
  },
  {
    "url": "0.de514beb2b5e866da59d.css"
  },
  {
    "url": "0-db335b7c3e53ac109bdb.js"
  },
  {
    "url": "component---src-pages-index-js-4bdc2ab504c003e828ca.js"
  },
  {
    "url": "static/d/648/path---index-6a9-stmn2jaIoGMxiZQ8jZNkJUvEkOQ.json",
    "revision": "4ee2bdb8d6d9716d61c8b55f12062438"
  },
  {
    "url": "component---src-pages-404-js-64142abe778ca170e5d3.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a7fd95ab08ff2d04670ef4bb65261704"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/grids-and-modules/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});