import { createApp } from 'vue';
import App from './App.vue'; // Main App
import Router from './router'; // Router
// import gsap from 'gsap';

// Main App
const APP = createApp(App);

// Global Component
// APP.use(gsap);
// APP.config.globalProperties.gsap = gsap;

// App Setting
APP.use(Router).mount('#app');
// APP.prototype.$gsap = gsap;
