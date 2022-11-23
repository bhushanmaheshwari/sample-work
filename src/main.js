import { createApp } from 'vue'

import App from './App.vue';
import router from './router';
import store from './stores';

import './assets/main.css'

import BaseButton from './components/ui/BaseButton.vue';
import BaseTitle from './components/ui/BaseTitle.vue';
import BaseBreadcrumbs from './components/ui/BaseBreadcrumbs.vue'

const app = createApp(App)


app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-title', BaseTitle);
app.component('base-bc', BaseBreadcrumbs);

app.mount('#app')
