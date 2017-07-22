import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api.js'

Vue.use(Vuex)

const state = {
  datas: '111',
  lists: ''
}

const getters = {
  data: state => state.datas,
  lists: state => state.lists
}

const actions = {
  initData: ({ commit }) => {
    api.getBanner()
    .then((res) => {
      commit('initData', res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  initData: (state, res) => {
    state.lists = res.data.banners
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
