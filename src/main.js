import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { Loading,Button,Message,Tooltip,Dropdown,DropdownMenu,DropdownItem,Menu,MenuItem,Submenu,Row,Col } from 'element-ui';
Vue.use(Loading);
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.component(Message)
Vue.prototype.$message = Message
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
