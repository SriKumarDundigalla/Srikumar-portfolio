import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { Chart, registerables } from 'chart.js';
import router from './router'





Chart.register(...registerables);
//const app = createApp(App)

createApp(App).use(router).mount('#app')
