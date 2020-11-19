import Vue from "vue";
import router from "./router";
import store from './store';
import NProgress from 'nprogress';
import App from "./App.vue";
import Argon from "./plugins/argon-kit";
// import './registerServiceWorker';
import vmodal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';
import {initialize} from '@/utils/general.js';
import '../node_modules/nprogress/nprogress.css';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';



initialize(store, router);

Vue.config.productionTip = false;
Vue.use(NProgress)
Vue.use(Argon);
Vue.use(vmodal);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.use(SuiVue);



router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
 router,
 store,
 render: h => h(App)
}).$mount("#app");