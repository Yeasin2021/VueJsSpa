import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/pages/home';
import About from '../components/pages/about';
import Specials from '../components/pages/specials';
import dataTable from '../components/pages/datatable';
import dataAdd from '../components/pages/dataAdd';

// import content from '../components/content';

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
    //   // dynamic segments start with a colon
       { path: '/', component: Home,name:'home' },
       { path: '/about', component: About,name:'about' },
       { path: '/specials', component: Specials,name:'specials' },
       { path: '/datatable', component: dataTable, name:'datatable'},
       { path: '/dataadd', component: dataAdd, name:'dataAdd'},
    ]
  })

  export default router;
