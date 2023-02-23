import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue' 

// Importa arquivos CSS Bootstrap e BootstrapVue (a ordem é importante) 
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css' 

// Torna o BootstrapVue disponível em todo o seu projeto 
Vue.use(BootstrapVue) // Opcionalmente, instale o plug-in de componentes do ícone BootstrapVue 
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
