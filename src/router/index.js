import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/league-standings/:day',
    name: 'league',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LeagueTable.vue'),
  },
  {
    path: '/player-bio/:player/:won/:lost/:mom/:total/:ave',
    name: 'player-bio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PlayerBio.vue'),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
