import Vue from 'vue'
import Router from 'vue-router'
import Me from '../components/pages/Me'
// import Post from '../components/pages/Post'
import Tags from '../components/pages/Tags'
import Index from '../components/pages/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/',
    //   name: 'Post',
    //   component: Hello
    // },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    }
  ]
})
