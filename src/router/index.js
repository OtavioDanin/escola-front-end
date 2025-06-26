import { createRouter, createWebHistory } from 'vue-router'
import AlunoView from '../views/AlunoView.vue'
import AlunoCreate from '../views/AlunoCreate.vue'
import AlunoEdit from '../views/AlunoEdit.vue'

const routes = [
  {
    path: '/',
    name: 'alunos',
    component: AlunoView
  },
  {
    path: '/create',
    name: 'alunoCreate',
    component: AlunoCreate
  },
  {
    path: '/edit/:id',
    name: 'alunoEdit',
    component: AlunoEdit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router