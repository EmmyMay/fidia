import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrettyCheckbox from 'pretty-checkbox-vue';
import 'pretty-checkbox/dist/pretty-checkbox.css';
Vue.use(PrettyCheckbox);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
