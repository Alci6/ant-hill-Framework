!function(){"use strict";const e=1601304688663,t="cache"+e,s=["/client/inject_styles.88de199d.js","/client/1-Title.cb20a27d.js","/client/99-Credits.b79198c1.js","/client/index.7c020b00.js","/client/[slug].2d023c26.js","/client/index.09c60fbd.js","/client/client.a360fd35.js","/client/guia.164f1d73.js"].concat(["/service-worker-index.html","/.DS_Store","/descargas/Ant Hill Framework.pdf","/favicon.png","/gif/Celula.svg","/gif/Ciclo.svg","/gif/Documento.svg","/gif/Fuego agua.svg","/gif/Ojo.svg","/gif/Rueda.svg","/gif/why.svg","/global.css","/icons/anthill.svg","/icons/download.svg","/images/.DS_Store","/images/anthill.png","/images/backgroundPaper.png","/images/indexIcon.svg","/manifest.json","/mini.png","/miniatura.png","/sitemap.xml","/tachyons.css"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();