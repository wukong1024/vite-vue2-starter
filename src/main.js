import Vue from 'vue'
import App from './App.vue'

import router from './routers'
const vue = new Vue({
  router,
  // store,
  render: h => h(App),
});

// Run!
vue.$mount('#app');