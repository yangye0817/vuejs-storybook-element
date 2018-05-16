import Vue from 'vue'
import VueI18n from 'vue-i18n'
import _ from 'lodash'
import ElementLocale from 'element-ui/lib/locale'

import * as langs from './locales/index'

Vue.use(VueI18n)

const defaultLocale = 'en'
const messages = {}
_.keys(langs).map(k => {
  // get element-ui locale
  let locale = require(`element-ui/lib/locale/lang/${k}`).default
  // merge with custom locale with element-ui
  locale = _.merge(langs[k], locale)
  // merge with 'en' for default value setting (href, icon ...)
  messages[k] = (k === defaultLocale) ? locale : _.merge(_.cloneDeep(langs[defaultLocale]), locale)
})

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
