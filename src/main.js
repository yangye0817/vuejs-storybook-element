import Vue from 'vue'

import App from './App'
import i18n from './i18n'
import store from './store'
import router from './router'

/**
 * Import vue plugins
 */
import './plugins'
/**
 * Import custom style
 */
import '@/assets/style/app.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})
