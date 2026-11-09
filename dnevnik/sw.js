self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => { e.waitUntil((async () => {
  await self.registration.unregister();
  (await self.clients.matchAll({type:'window'})).forEach(c => c.navigate(c.url));
})()); });
