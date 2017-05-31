import Vue from 'vue'
import Router from 'vue-router'
import Me from '../components/pages/Me'
import Post from '../components/pages/Post'
import Tags from '../components/pages/Tags'
import Project from '../components/pages/Project'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
