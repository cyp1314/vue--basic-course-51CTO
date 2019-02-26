import types from '../types.js'
import axios from 'axios'

const state = {
  ratings: []
}

const getters = {
    ratings(state) {
    return state.ratings;
  }
}

const actions = {
  getRatings({
    commit
  }, state) {
    axios.get('https://www.easy-mock.com/mock/5c74af248a68351906bd9aaf/example/ratings').then(resp => {
    //   console.log(resp);
      if (resp.data.success == 200) {
        commit(types.GET_RATINGS, resp.data.ratings);
        
      }
    })
  },


}

const mutations = {
    [types.GET_RATINGS](state,data) {
        state.ratings = data;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
