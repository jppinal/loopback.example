import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      books: [],
      max: 0,
    }
  },
  getters,
  mutations,
  actions,
}
