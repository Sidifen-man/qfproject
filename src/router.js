import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      // redirect:'/brand',
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/Home.vue"),
      meta: {
        title: "启赋家族"
      }
    },
    {
      path: "/test",
      name: "test",
      component: () =>
        import(/* webpackChunkName: "index" */ "./components/CardTest.vue"),
      meta: {
        title: "测试"
      }
    },
    {
      path: "/brand",
      name: "brand",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/brand/index.vue"),
      meta: {
        title: "品牌活动"
      }
    },
    {
      path: "/shot",
      name: "shot",
      component: () =>
        import(/* webpackChunkName: "shot" */ "./views/shot/index.vue"),
      meta: {
        title: "大咖说"
      }
    },
    {
      path: "/organic",
      name: "organic",
      component: () =>
        import(/* webpackChunkName: "organic" */ "./views/organic/index.vue"),
      meta: {
        title: "母爱不妥协 专属宝宝有机之选"
      }
    },
    {
      path: "/family/atwo",
      name: "Atwo",
      component: () =>
        import(/* webpackChunkName: "Atwo" */ "./views/family/Atwo.vue"),
      meta: {
        title: "双重珍稀 启赋大金罐"
      }
    },
    {
      path: "/family/blueDiamond",
      name: "BlueDiamond",
      component: () =>
        import(
          /* webpackChunkName: "BlueDiamond" */ "./views/family/BlueDiamond.vue"
        ),
      meta: {
        title: "蓝钻启赋"
      }
    },
    {
      path: "/family/qiyun",
      name: "QiYun",
      component: () =>
        import(/* webpackChunkName: "QiYun" */ "./views/family/QiYun.vue"),
      meta: {
        title: "蓝钻启韵"
      }
    },
    {
      path: "/ha",
      name: "ha",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ha" */ "./views/Ha.vue")
    }
  ]
});

// 路由钩子函数 用来渲染网页的title
router.afterEach(route => {
  if (route.meta.title) {
    document.title = route.meta.title;
  }
  window.scrollTo(0, 0);
});

export default router;
