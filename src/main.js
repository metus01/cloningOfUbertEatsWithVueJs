import {createApp} from 'vue';
import App from './App.vue';

import {createRouter, createWebHashHistory} from 'vue-router';
import HomE from './page/Home.vue';
import RestauranT from './page/Restaurant.vue';
import HelloWorldVue from './page/HelloWord.vue';
const routes = [
  {
    path: '/',
    component: HomE,
  },
  {
    name:'Restaurant',
    path: '/restaurant/:name',
    component: RestauranT,
  },
  {
    name: 'HelloWord',
    path: '/HelloWorld',
    component:HelloWorldVue,
  }
];
const router = createRouter ({
  history: createWebHashHistory (),
  routes,
});
const VueApp = createApp (App);
VueApp.use (router);
VueApp.mount ('#app');
