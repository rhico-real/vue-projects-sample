import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import 'primeicons/primeicons.css'
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
