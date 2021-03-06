// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  
}
firebase.initializeApp(config)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
