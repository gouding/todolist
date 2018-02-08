import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Edit from '@/pages/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
