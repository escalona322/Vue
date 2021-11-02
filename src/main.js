import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/navegacion/Home.vue';
import Musica from './components/navegacion/Musica.vue';
import Cine from './components/navegacion/Cine.vue';
import Television from './components/navegacion/Television.vue';
import CicloVida from './components/CicloVida.vue';
import JuegosConmutados from './components/JuegosConmutados.vue';
import Directivas from './components/Directivas.vue';
Vue.config.productionTip = false

Vue.use(VueRouter);

//SE HACE UN ARRAY CON TODAS LAS RUTAS DEL SERVIDOR
const routes = [
  {path: "/home", component: Home},
  {path: "/juegosconmutados", component: JuegosConmutados},
  {path: "/directivas", component: Directivas},
  {path: "/ciclovida", component: CicloVida},
  {path: "/cine", component: Cine},
  {path: "/musica", component: Musica},
  {path: "/television", component: Television},
  {path: "/", component: Home},
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,//LE DECLARO EN LA APP
  render: h => h(App),
}).$mount('#app')
