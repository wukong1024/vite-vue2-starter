const baseRoutes = [
  {
    path: '',
    name: 'index',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页'
    }
  },

]

const routes = [
  ...baseRoutes
]

export default routes
