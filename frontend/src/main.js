import { createApp } from 'vue'

import App from './App.vue';
import router from './router';
import store from './stores';

import './assets/main.css'

import BaseDeepdive from './components/ui/BaseDeepdive.vue';
import BaseTitle from './components/ui/BaseTitle.vue';
import BaseBreadcrumbs from './components/ui/BaseBreadcrumbs.vue'


import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBDK2eQQPzImlDlvpRKQVuIjz7I0KWjLXo",
    authDomain: "bm-sample-work.firebaseapp.com",
    projectId: "bm-sample-work",
    storageBucket: "bm-sample-work.appspot.com",
    messagingSenderId: "373331721738",
    appId: "1:373331721738:web:e09e1080d5886cd42da9f3",
    measurementId: "G-K02RXPSNZ7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
logEvent(analytics, 'app_loaded');


createApp(App)
    .use(router)
    .use(store)
    .component('base-deepdive', BaseDeepdive)
    .component('base-title', BaseTitle)
    .component('base-bc', BaseBreadcrumbs)
    .mount('#app');
