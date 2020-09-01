import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Button,
  NavBar ,
  Tabbar, 
  TabbarItem,
  PullRefresh,
  ShareSheet,
  Cell,
  Card,
  Checkbox,
  CheckboxGroup,
  SubmitBar 

} from 'vant';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(PullRefresh);
Vue.use(ShareSheet);
Vue.use(Cell);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
