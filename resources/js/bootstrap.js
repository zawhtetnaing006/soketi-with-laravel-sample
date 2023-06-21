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
window.Pusher = Pusher;

let laravelEcho = new Echo({
    broadcaster: 'pusher',
    key: 'some-key',
    wsHost: '127.0.0.1',
    wsPort: 6002,
    wssPort: 6002,
    forceTLS: false,
    encrypted: true,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    cluster:import.meta.env.VITE_PUSHER_APP_CLUSTER,
});

laravelEcho.channel("orders").listen("OrderStatusUpdated", (e) => {
    console.log('OrderStatusUpdated');
});