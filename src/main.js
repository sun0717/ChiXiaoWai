import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
// 引入清除默认样式
import '@/style/reset.scss'
import 'element-plus/dist/index.css'
// import router from './router'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
