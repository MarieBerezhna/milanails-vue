import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Service from '../views/Service.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Milanails',
    component: Home
  },
  {
    path: '/service/:link',
    name: 'service',
    component: Service
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
