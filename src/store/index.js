import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import app from './modules/app'
import getters from './getters'

const store = () => {
  const vuexStore = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV !== 'production'
      ? [createLogger()]
      : [],
    namespaced: true,
    modules: {
      app
    },
    getters
  })

  return vuexStore
}

export default store
