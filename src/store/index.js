import Vue from 'vue'
import Vuex from 'vuex'

import wishlist from './wishlist'
import openlibrary from './openlibrary'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    wishlist,
    openlibrary,
  },
})

export default store
