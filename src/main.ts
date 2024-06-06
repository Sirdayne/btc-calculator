import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import ElementPlus from "element-plus";
const app = createApp(App);

app.use(VueApexCharts);
app.use(ElementPlus);
app.mount('#app')
