import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '../components/Hello';

import content from '../components/content';

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
      // dynamic segments start with a colon
      { path: '/', component: Hello,name:'hello' },
      { path: '/content', component: content,name:'content' },
    ]
  })

  export default router;