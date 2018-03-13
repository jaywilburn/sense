// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
Vue.use(Buefy, {
  defaultIconPack: 'fa'
})
Vue.config.productionTip = false
Vue.use(vueSmoothScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  created () {
    AOS.init({ disable: 'mobile' })
  },
  components: { App },
  template: '<App/>'
})
