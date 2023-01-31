import { createWebHistory, createRouter } from 'vue-router';
import RouterMain from './views/main';
import RouterPortfolio from './views/portfolio';
import RouterTechBlog from './views/techblog';
import RouterEnjoy from './views/enjoy';

const routes = [
    {
        path: '/',
        name: 'MAIN',
        component: RouterMain,
    },
    {
        path: '/portfolios',
        name: 'PORTFOLIOS',
        component: RouterPortfolio,
    },
    {
        path: '/techblog',
        name: 'TECHBLOG',
        component: RouterTechBlog,
    },
    {
        path: '/enjoy',
        name: 'ENJOY',
        component: RouterEnjoy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
