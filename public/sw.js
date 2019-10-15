//26-Septiembre
const staticAssets = [
  './',
  '/css/styles.css',
  '/css/programs-landing.css',
  '/css/lead-form.css',
  // '/javascript/index.js',
  '/javascript/sidenav.js',
  // '/images/cover-images/homepage__cover.jpg',
  '/images/cover-images/slogan-shadow.png',
  // '/images/cover-images/front-end__cover.jpg',
  // '/images/cover-images/scholarship__cover.jpg',
  // '/images/cover-images/web-mobile__cover.jpg',
  // '/images/cover-images/why-us__cover.jpg',
  // '/images/cover-images/form__cover.jpg'

  '/images/badges/fullstack-badge.png',
  '/images/badges/cloud-badge.png',
  '/images/badges/marketing-badge.png',
  '/images/badges/ux-badge.png'
];
//
//
self.addEventListener('install', async event => {
  console.log('install');
  const cache = await caches.open('academy-static');
  cache.addAll(staticAssets);
});
//
self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}
