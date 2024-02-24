import { createApp } from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import App from './pages/App.vue'
import { initializeApp } from "firebase/app";
import { VueFire, VueFireAuth } from 'vuefire';
import Home from './pages/Home.vue';
import Preview from './pages/Preview.vue';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const routes: RouteRecordRaw[] = [
    { path: '/', component: Preview, name: "preview" },
    { path: '/home', component: Home, name: "home" },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router).use(VueFire, {firebaseApp, modules: [VueFireAuth()]}).mount('#app')
