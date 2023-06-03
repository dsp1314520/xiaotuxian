


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 框架自带的样式文件
// import './assets/main.css'
// 自己编写的样式文件
import  "@/styles/common.scss";
// import {  getCategoryAPI} from "@/apis/testApi";
// getCategoryAPI().then((res)=>{ 
// console.log(res);
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
