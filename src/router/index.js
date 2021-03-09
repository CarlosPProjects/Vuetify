import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Proveedores from '../views/proveedores.vue'
import Clientes from '../views/clientes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Proveedores',
    name: 'Proveedores',
    component: Proveedores
  },
  {
    path: '/Clientes',
    name: 'Clientes',
    component: Clientes
  }
]

const router = new VueRouter({
  routes
})

export default router
