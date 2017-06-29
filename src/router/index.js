import Vue from 'vue'
import Router from 'vue-router'
import Me from '../components/pages/Me'
import Post from '../components/pages/Post'
import Tags from '../components/pages/Tags'
import Project from '../components/pages/Project'
import Article from '../components/pages/Article.vue'
import createArticle from '../components/server/CreateArticle'
import viewArticles from '../components/server/ViewArticles.vue'
import changeArticle from '../components/server/ChangeArticle.vue'
import Login from '../components/server/login.vue'
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
    },
    {
      path: '/articles/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/back',
      redirect: {
        name: 'viewArticles'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/back/createArticle',
      name: 'createArticle',
      component: createArticle
    },
    {
      path: '/back/viewArticles',
      name: 'viewArticles',
      component: viewArticles
    },
    {
      path: '/back/changeArticle/:id',
      name: 'changeArticle',
      component: changeArticle
    }
  ]
})
