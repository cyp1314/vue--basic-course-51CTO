import types from "../types"
import axios from "axios"

const state = {  //数据源
    seller: {}
}

const getters= {  //获取数据
    seller(state) {
        return state.seller
    }
}

const actions = {  //执行发生的动作，提交一个变化
    getSeller({commit,state}) {
        axios.get('https://easy-mock.com/mock/5c74af248a68351906bd9aaf/example/seller').then(resp => {
            // console.log(resp)
            if(resp.data.success==200) {  
                commit(types.GET_SELLER,resp.data.seller)
            }
        })
    }
}

const mutations= {  //更新数据源
    [types.GET_SELLER](state,data) {
        state.seller = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}