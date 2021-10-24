import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import characterModule from "@/stores/character";
import cardModule from "@/stores/card";

Vue.config.productionTip = false

// import vue-panzoom
import panZoom from 'vue-panzoom'

// install plugin
Vue.use(Vuex);
Vue.use(panZoom);

const store = new Vuex.Store({
  modules: {
    character: characterModule,
    card: cardModule
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
