import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/Home.vue';

let routes = [
    {
        path: '/',
        component: Home
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});
