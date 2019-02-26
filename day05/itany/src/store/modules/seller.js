import types from '../types.js'
import axios from 'axios'

const state = {
  seller: {},
  detailShow:false
}

const getters = {
    seller(state) {
        return state.seller;
    },
    detailShow(state) {
      return state.detailShow
    }
}

const actions = {
  getSeller({commit}, state) {
    axios.get('https://easy-mock.com/mock/5c74af248a68351906bd9aaf/example/seller').then(resp=>{
        // console.log(resp);
        if(resp.data.success==200) {
            commit(types.GET_SELLER, resp.data.seller);
        }
    })
  },
  showDetail({commit}) {
    commit(types.SHOW_DETAIL);
  },
  hideDetail({commit}) {
    commit(types.HIDE_DETAIL);
  }

}

const mutations = {
    [types.GET_SELLER](state,data) {
        state.seller = data;
    },
    [types.SHOW_DETAIL](state) {
      state.detailShow = true;
    },
    [types.HIDE_DETAIL](state) {
      state.detailShow = false;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
