import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ClavierView from '../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import JournalView from '../views/JournalView.vue'
import AddContactView from '../views/AddContactView.vue'

const routes = [
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/addContact',
    name: 'addContact',
    component: AddContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
