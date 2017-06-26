// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Icon, Button, Input, MessageBox, Message} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueSimplemde from 'vue-simplemde'
import axios from 'axios'
import 'vue-awesome/icons'

Vue.config.productionTip = false
axios.default.withCredentials = true

Vue.use(Icon)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.use(VueSimplemde)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
