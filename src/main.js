import Vue from 'vue';
import App from './App';
// import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false;

// Vue.use(SuiVue); //...probably not needed, as I can import only the components I need into my own, one by one (?)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
