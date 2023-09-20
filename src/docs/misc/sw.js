// https://developer.chrome.com/docs/workbox/remove-buggy-service-workers/
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    windowClients.forEach(windowClient => {
      windowClient.navigate(windowClient.url)
    })
  })
})
