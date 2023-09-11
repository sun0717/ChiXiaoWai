import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
  // path和component对应关系
  routes: [
    {
      path: "/",
      component: () => import('@/pages/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/Home/index.vue')
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/pages/Login/index.vue"),
      children: [
        {
          path: "phone",
          component: () => import("@/pages/Login/Phone/index.vue"),
        },
        {
          path: "email",
          component: () => import("@/pages/Login/Email/index.vue"),
        },
      ],
    },
  ],
});

export default router;
