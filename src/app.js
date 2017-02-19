import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import store from './js/store/index.js';
import router from './js/route/index.js';

new Vue({
    name: 'MainApp',
    el: '#app',
    data: {
        message: 'Message From Vue'
    },
    router,
    store
 });
