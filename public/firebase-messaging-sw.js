importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
    const { title, body } = payload.data; // Assuming the payload contains 'title' and 'body' data
  
    // Customize notification here
    const notificationOptions = {
      body: body || 'Awesome notification!',
    };
  
    // Show the notification
    self.registration.showNotification(title || 'Awesome application!', notificationOptions);
  });