import { createApp } from 'vue'

import App from './App.vue';
import router from './router';

import './assets/main.css'

import BaseButton from './components/ui/BaseButton.vue';
import BaseTitle from './components/ui/BaseTitle.vue';

const app = createApp(App)


app.use(router)

app.component('base-button', BaseButton);
app.component('base-title', BaseTitle);

app.mount('#app')
