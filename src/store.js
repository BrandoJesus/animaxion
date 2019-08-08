import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trending: []
  },
  mutations: {
    listarTrending(state, lista) {
      state.trending = lista.data
    }
  },
  actions: {
    getTrending: async function({ commit }) {
      let data = await fetch('http://api.giphy.com/v1/gifs/trending?api_key=ZIcbfHJHCt93O9rXiOCpZAZw4pkdfyWZ&limit=12')      
      let trending = await data.json();
      console.log('trending ', trending);
      commit('listarTrending', trending);
    }
  }
})
