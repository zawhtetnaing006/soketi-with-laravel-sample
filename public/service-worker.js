// self.addEventListener('install', (event) => {
//   event.waitUntil(new Promise((resolve, reject) => {
//     console.log("doing setup stuff")
//     resolve()
//   }))
//   console.log("Service worker finished installing")
// })
 
// self.addEventListener('activate', (event) => {
//   event.waitUntil(new Promise((resolve, reject) => {
//     console.log("doing clean-up stuff!")
//     resolve()
//   }))
//   console.log('activation done!')
// })
 
// self.addEventListener('fetch', (event) => {
//   console.log("Request intercepted", event)
// });

self.addEventListener('push', (event) => {
  console.log("Push event fired", event)
});