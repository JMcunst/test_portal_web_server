import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 추가 부분

Vue.config.productionTip = false

new Vue({  
  router,  // 추가 부분
  render: h => h(App),
}).$mount('#app')
