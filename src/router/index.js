import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/i18n'

/* Component */
import Layout from '@/pages/Layout'

Vue.use(Router)

/**
 * generate route
 * @param path
 * @param view
 * @param key - for i18n
 * @returns {{path: *, name: *, component: (function(): (Promise<*>|*))}}
 */
const generateRoute = (path, view, key) => {
  return {
    path: path,
    name: key,
    component: () => import(/* webpackChunkName: "routes" */`@/pages/${view}Page.vue`)
  }
}

// locale pattern
const languagePattern = '([a-z]{2,3}|[a-z]{2,3}-[a-zA-Z]{4}|[a-z]{2,3}-[A-Z]{2,3})'
const languageRegex = new RegExp(`^\\/${languagePattern}(?:\\/.*)?$`)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:lang' + languagePattern,
      component: Layout,
      props: route => ({ lang: route.params.lang }),
      children: [
        {
          path: '',
          redirect: {name: 'setting.items.user'}
        },
        /** Diary **/
        generateRoute('calendar', 'calendar/Calendar', 'calendar'),
        /** System User CRUD **/
        generateRoute('setting/user', 'setting/user/List', 'setting.items.user')
      ]
    },
    generateRoute('error', 'error/Error', 'error')
  ]
})

router.beforeEach((to, from, next) => {
  const currentLanguageKey = 'currentLanguage'
  console.log('cookie : ', document.cookie)
  console.log('route to: ', to)
  if (languageRegex.test(to.fullPath)) {
    let lang = to.params.lang
    if (!lang || !i18n.messages.hasOwnProperty(lang)) { // not found
      console.log('not found')
      next({
        name: 'error',
        params: {
          statusCode: 404,
          message: 'Page Not Found'
        }
      })
    } else { // set locale by param
      i18n.locale = lang
      document.cookie = `${currentLanguageKey}=${lang};path=/;max-age=${60 * 60 * 24 * 7}`
    }
  } else if (to.name !== 'error') {
    // If route is /... -> redirect to /:lang/...
    let getLanguageCookie = () => new Map(document.cookie.split('; ').map(c => c.split('='))).get(currentLanguageKey)
    let lang = getLanguageCookie() || i18n.fallbackLocale
    next({
      path: `/${lang}${to.fullPath}`,
      params: {
        lang: 'en'
      }
    })
  }

  next()
})

export default router
