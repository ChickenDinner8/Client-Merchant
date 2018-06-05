import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'
import Content1 from '@/components/Content1'
import Content2 from '@/components/Content2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Login',
      component:Login
    },
    {
      path: '/home',
      component: Home,
      children: [
      	{
      		path: 'content1',
      		component: Content1
      	},
      	{
      		path: 'content2',
      		component: Content2
      	},
      	{
      		path: '/home',
      		redirect: '/home/content1'
      	}
      ]
    },
    {
    	path:'/',
    	redirect: '/home'
    }
  ]
})
