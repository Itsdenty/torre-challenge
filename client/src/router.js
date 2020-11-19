import Vue from "vue";
import Router from "vue-router"; 

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path:'/',
      component: () => import('@/layouts/Default.vue'),
      children: [ 
        { path: '', name: 'landing', component: () => import('@/views/Landing.vue') }, 
      ]
    },
    {
      path: "*",
      component: () => import('@/views/NotFound.vue'),
    },


  ]
});
