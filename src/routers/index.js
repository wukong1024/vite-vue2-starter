import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 解决 vue-router 报 NavigationDuplicated 错误
// vue-router 在3.1版本以后将 $router.push()、 $router.replace() 方法改为了 Promise，假如没有回调函数，错误信息就会交给全局的路由错误处理。
const originalPush = Router.prototype.push
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  // 去除路径中的#标志
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    // to：要进入的目标路由对象，到哪里去.和导航守卫的beforeEach一样
    // from：离开的路由对象，哪里来
    // savedPosition: 点击前进/后退的时候记录值{x:?,y:?}.并且只有通过浏览器的前进后退才会触发.
    // return 期望滚动到哪个的位置 { x: number, y: number }或者是{ selector: string, offset? : { x: number, y: number }},这里selector接收字符串形式的hash,如'#foo',同时你还可以通过offset设置偏移,版本需要大于2.6+
    // 举个实例
    // console.log(to, savedPosition)
    if (savedPosition) {
      // 如果是浏览器的前进后退就,返回之前保存的位置
      return savedPosition
    } else if (to.hash) {
      // 如果存在hash,就滚动到hash所在位置
      return { selector: to.hash, behavior: 'smooth' }
    } else {
      return { x: 0, y: 0 } // 否则就滚动到顶部
    }
  },
  routes
})

// 增加加载动画
router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title + '--'
  // } else {
  //   document.title = ''
  // }
  NProgress.start()
  next()
})

// 在路由跳转后用NProgress.done()标记下结束
router.afterEach(() => {
  NProgress.done()
  NProgress.remove()
})

export default router
