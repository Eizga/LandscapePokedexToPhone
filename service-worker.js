const SHELL_CACHE = "pokedex-web-shell-v11";
const API_CACHE = "pokedex-web-api-v1";
const IMAGE_CACHE = "pokedex-web-images-v1";
const MAX_CACHED_SPRITES = 120;
const SHELL_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./data/pokemon-text-master.json",
    "./manifest.webmanifest",
    "./assets/pwa-icon-180.png",
    "./assets/pwa-icon-192.png",
    "./assets/pwa-icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(SHELL_CACHE)
            .then(cache => cache.addAll(SHELL_FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("message", event => {
    if (event.data?.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys
                .filter(key => key.startsWith("pokedex-web-") && ![SHELL_CACHE, API_CACHE, IMAGE_CACHE].includes(key))
                .map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;

    const response = await fetch(request);
    if (response.ok) {
        const cache = await caches.open(SHELL_CACHE);
        try {
            await cache.put(request, response.clone());
        } catch {
            // Keep the online response usable if the browser has no cache space left.
        }
    }
    return response;
}

async function networkFirstShell(request) {
    const cache = await caches.open(SHELL_CACHE);
    try {
        const response = await fetch(request, { cache: "no-cache" });
        if (response.ok) {
            try {
                await cache.put(request, response.clone());
            } catch {
                // Keep the newest response usable if the browser has no cache space left.
            }
        }
        return response;
    } catch (error) {
        const cached = await cache.match(request) || await caches.match(request);
        if (cached) return cached;
        throw error;
    }
}

async function networkFirstApi(request) {
    const cache = await caches.open(API_CACHE);
    try {
        const response = await fetch(request);
        if (response.ok) {
            try {
                await cache.put(request, response.clone());
            } catch {
                // API requests still work online if persistent storage is full.
            }
        }
        return response;
    } catch (error) {
        const cached = await cache.match(request);
        if (cached) return cached;
        throw error;
    }
}

async function cachePokemonImage(request) {
    const cache = await caches.open(IMAGE_CACHE);
    const cached = await cache.match(request);
    if (cached) {
        try {
            await cache.delete(request);
            await cache.put(request, cached.clone());
        } catch {
            // Continue serving a valid cached image even if its cache entry cannot be refreshed.
        }
        return cached;
    }

    const response = await fetch(request);
    if (response.ok || response.type === "opaque") {
        try {
            await cache.put(request, response.clone());
            const keys = await cache.keys();
            const expired = keys.slice(0, Math.max(0, keys.length - MAX_CACHED_SPRITES));
            await Promise.all(expired.map(key => cache.delete(key)));
        } catch {
            // Return the downloaded sprite even when it cannot be stored for offline use.
        }
    }
    return response;
}

self.addEventListener("fetch", event => {
    const request = event.request;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    if (url.origin === self.location.origin) {
        if (request.mode === "navigate"
            || request.destination === "script"
            || request.destination === "style"
            || url.pathname.endsWith(".webmanifest")) {
            event.respondWith(networkFirstShell(request));
            return;
        }

        event.respondWith(cacheFirst(request));
        return;
    }

    if (url.origin === "https://pokeapi.co" && url.pathname.startsWith("/api/v2/")) {
        event.respondWith(networkFirstApi(request));
        return;
    }

    if (request.destination === "image"
        && url.hostname === "raw.githubusercontent.com"
        && url.pathname.includes("/PokeAPI/sprites/")) {
        event.respondWith(cachePokemonImage(request));
    }
});
