import { createApp } from 'vue'

import App from './App.vue';
import router from './router';
import store from './stores';

import './assets/main.css'

import BaseDeepdive from './components/ui/BaseDeepdive.vue';
import BaseTitle from './components/ui/BaseTitle.vue';
import BaseBreadcrumbs from './components/ui/BaseBreadcrumbs.vue'

const app = createApp(App)


app.use(router);
app.use(store);

app.component('base-deepdive', BaseDeepdive);
app.component('base-title', BaseTitle);
app.component('base-bc', BaseBreadcrumbs);

app.mount('#app')
