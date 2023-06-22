/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken,onMessage } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5sEiNjOfOtHNHQ46cVRSpCw_QQQdCR2M",
    authDomain: "test-a3e47.firebaseapp.com",
    projectId: "test-a3e47",
    storageBucket: "test-a3e47.appspot.com",
    messagingSenderId: "1070835773915",
    appId: "1:1070835773915:web:fec52b9c866753279577fe",
    measurementId: "G-1G5BRKCZDP"
};
  
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(messaging, {vapidKey: "BN4FwV2BP_67DnnAlHP4h8rutdhbAk9Oel6yBvyldza3gHK9kxm6uDhFSFOLdp2absAhAEr4OzX_tGQICis2C_c"}).then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

window.Pusher = Pusher;

window.onload = function () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
          console.log('Service worker registered successfully:', registration);
        })
        .catch(function (error) {
          console.log('Service worker registration failed:', error);
        });
    } else {
      console.log('Service workers are not supported.');
    }
  }
  
// let laravelEcho = new Echo({
//     broadcaster: 'pusher',
//     key: 'some-key',
//     wsHost: '127.0.0.1',
//     wsPort: 6002,
//     wssPort: 6002,
//     forceTLS: true,
//     encrypted: true,
//     disableStats: true,
//     enabledTransports: ['ws', 'wss'],
//     cluster:import.meta.env.VITE_PUSHER_APP_CLUSTER,
// });

// laravelEcho.channel("orders").listen("OrderStatusUpdated", (e) => {
//     console.log('OrderStatusUpdated');
// });


