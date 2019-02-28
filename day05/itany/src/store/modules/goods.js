import types from '../types.js'
import axios from 'axios'

const state = {
  goods: []
}

const getters = {
  goods(state) {
    return state.goods;
  }
}

const actions = {
  getGoods({
    commit
  }, state) {
    axios.get('/goods').then(resp => {
        console.log(resp);
      if (resp.data.success == 200) {
        commit(types.GET_GOODS, resp.data.goods);
      }
    })
  },


}

const mutations = {
    [types.GET_GOODS](state,data) {
        state.goods = data;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
