import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import SobreGustavo from '@/components/SobreGustavo';
import Contador from '@/components/Contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path:'/sobre',
      name:'SobreGustavo',
      component:SobreGustavo,
    },
    {
      path:'/contador',
      name:'Contador',
      component:Contador,
    }
  ],
});
