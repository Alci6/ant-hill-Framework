(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1601715555512;

	const files = [
		"/service-worker-index.html",
		"/descargas/Ant Hill Framework.pdf",
		"/favicon.png",
		"/gif/Celula.svg",
		"/gif/Ciclo.svg",
		"/gif/Corazon.svg",
		"/gif/Documento.svg",
		"/gif/Fuego agua.svg",
		"/gif/Ojo.svg",
		"/gif/Rueda.svg",
		"/gif/why.svg",
		"/global.css",
		"/icons/anthill.svg",
		"/icons/close-white-18dp.svg",
		"/icons/download.svg",
		"/icons/menu-24px.svg",
		"/images/anthill.png",
		"/images/backgroundPaper.png",
		"/images/indexIcon.svg",
		"/manifest.json",
		"/mini.png",
		"/miniatura.png",
		"/sitemap.xml",
		"/tachyons.min.css"
	];

	const shell = [
		"/client/inject_styles.5607aec6.js",
		"/client/client.b5057e21.js",
		"/client/index.1cffae79.js",
		"/client/guia.b5ca5827.js",
		"/client/99-Credits.a8ccb0d8.js",
		"/client/index.612960db.js",
		"/client/index.1d43d21b.js",
		"/client/posts.cc7272fb.js",
		"/client/[permalink].b06945b0.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYwMTcxNTU1NTUxMjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Rlc2Nhcmdhcy9BbnQgSGlsbCBGcmFtZXdvcmsucGRmXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2dpZi9DZWx1bGEuc3ZnXCIsXG5cdFwiL2dpZi9DaWNsby5zdmdcIixcblx0XCIvZ2lmL0NvcmF6b24uc3ZnXCIsXG5cdFwiL2dpZi9Eb2N1bWVudG8uc3ZnXCIsXG5cdFwiL2dpZi9GdWVnbyBhZ3VhLnN2Z1wiLFxuXHRcIi9naWYvT2pvLnN2Z1wiLFxuXHRcIi9naWYvUnVlZGEuc3ZnXCIsXG5cdFwiL2dpZi93aHkuc3ZnXCIsXG5cdFwiL2dsb2JhbC5jc3NcIixcblx0XCIvaWNvbnMvYW50aGlsbC5zdmdcIixcblx0XCIvaWNvbnMvY2xvc2Utd2hpdGUtMThkcC5zdmdcIixcblx0XCIvaWNvbnMvZG93bmxvYWQuc3ZnXCIsXG5cdFwiL2ljb25zL21lbnUtMjRweC5zdmdcIixcblx0XCIvaW1hZ2VzL2FudGhpbGwucG5nXCIsXG5cdFwiL2ltYWdlcy9iYWNrZ3JvdW5kUGFwZXIucG5nXCIsXG5cdFwiL2ltYWdlcy9pbmRleEljb24uc3ZnXCIsXG5cdFwiL21hbmlmZXN0Lmpzb25cIixcblx0XCIvbWluaS5wbmdcIixcblx0XCIvbWluaWF0dXJhLnBuZ1wiLFxuXHRcIi9zaXRlbWFwLnhtbFwiLFxuXHRcIi90YWNoeW9ucy5taW4uY3NzXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCIvY2xpZW50L2luamVjdF9zdHlsZXMuNTYwN2FlYzYuanNcIixcblx0XCIvY2xpZW50L2NsaWVudC5iNTA1N2UyMS5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguMWNmZmFlNzkuanNcIixcblx0XCIvY2xpZW50L2d1aWEuYjVjYTU4MjcuanNcIixcblx0XCIvY2xpZW50Lzk5LUNyZWRpdHMuYThjY2IwZDguanNcIixcblx0XCIvY2xpZW50L2luZGV4LjYxMjk2MGRiLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC4xZDQzZDIxYi5qc1wiLFxuXHRcIi9jbGllbnQvcG9zdHMuY2M3MjcyZmIuanNcIixcblx0XCIvY2xpZW50L1twZXJtYWxpbmtdLmIwNjk0NWIwLmpzXCIsXG5cdFwiL2NsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW14vXSs/KVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZ3VpYVxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsLCByb3V0ZXMgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XG5jb25zdCBjYWNoZWQgPSBuZXcgU2V0KHRvX2NhY2hlKTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuXHRldmVudC53YWl0VW50aWwoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3BlbihBU1NFVFMpXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnNraXBXYWl0aW5nKCk7XG5cdFx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG5cdFx0XHQvLyBkZWxldGUgb2xkIGNhY2hlc1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XG5cdFx0fSlcblx0KTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuXHRpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuXHQvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuXHRpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybjtcblxuXHQvLyBpZ25vcmUgZGV2IHNlcnZlciByZXF1ZXN0c1xuXHRpZiAodXJsLmhvc3RuYW1lID09PSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnQpIHJldHVybjtcblxuXHQvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZVxuXHRpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcblx0Ly8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XG5cdC8vIGFwcCwgYnV0IGlmIGl0J3MgcmlnaHQgZm9yIHlvdXJzIHRoZW4gdW5jb21tZW50IHRoaXMgc2VjdGlvblxuXHQvKlxuXHRpZiAodXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Ki9cblxuXHRpZiAoZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJykgcmV0dXJuO1xuXG5cdC8vIGZvciBldmVyeXRoaW5nIGVsc2UsIHRyeSB0aGUgbmV0d29yayBmaXJzdCwgZmFsbGluZyBiYWNrIHRvXG5cdC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3Vcblx0Ly8gbWlnaHQgcHJlZmVyIGEgY2FjaGUtZmlyc3QgYXBwcm9hY2ggdG8gYSBuZXR3b3JrLWZpcnN0IG9uZS4pXG5cdGV2ZW50LnJlc3BvbmRXaXRoKFxuXHRcdGNhY2hlc1xuXHRcdFx0Lm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKVxuXHRcdFx0LnRoZW4oYXN5bmMgY2FjaGUgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0Y2FjaGUucHV0KGV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuXG5cdFx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FDTyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFDdkM7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDRCQUE0QjtDQUM3QixDQUFDLG1DQUFtQztDQUNwQyxDQUFDLGNBQWM7Q0FDZixDQUFDLGlCQUFpQjtDQUNsQixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLGtCQUFrQjtDQUNuQixDQUFDLG9CQUFvQjtDQUNyQixDQUFDLHFCQUFxQjtDQUN0QixDQUFDLGNBQWM7Q0FDZixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLGNBQWM7Q0FDZixDQUFDLGFBQWE7Q0FDZCxDQUFDLG9CQUFvQjtDQUNyQixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLHFCQUFxQjtDQUN0QixDQUFDLHNCQUFzQjtDQUN2QixDQUFDLHFCQUFxQjtDQUN0QixDQUFDLDZCQUE2QjtDQUM5QixDQUFDLHVCQUF1QjtDQUN4QixDQUFDLGdCQUFnQjtD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
