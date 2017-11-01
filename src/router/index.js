import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/main/main'
import Download from 'components/download/download'
import Sort from 'components/sort/sort'
import Detial from 'components/app-detail/app-detail'
import Counsel from 'components/counsel/counsel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/download',
      component: Download
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/sort/:id',
      component: Detial
    },
    {
      path: '/counsel',
      component: Counsel
    }
  ]
})
