import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trending: [],
    busqueda: [],
    totalbusqueda: 0,
    api_key: 'ZIcbfHJHCt93O9rXiOCpZAZw4pkdfyWZ'
  },
  mutations: {
    listarTrending(state, lista) {
      lista.data.forEach(el => {
        state.trending.push({
          id: el.id,
          type: el.type,
          title: el.title,
          src: el.images.fixed_width.webp
        });
      });
    },
    listarBusqueda(state, lista) {
      state.busqueda = [];
      lista.data.forEach(el => {
        state.busqueda.push({
          id: el.id,
          type: el.type,
          title: el.title,
          src: el.images.fixed_width.webp
        });
      });
      state.totalbusqueda = lista.pagination.count;
    }
  },
  actions: {
    getTrending: async function({ commit }, offset) {
      if(!offset) offset= 0;
      let url = 'http://api.giphy.com/v1/gifs/trending?api_key='
      + this.state.api_key + '&limit=24&offset='+ offset;
      let data = await fetch(url);
      let trending = await data.json();
      console.log('trending ', trending);
      commit('listarTrending', trending);
    },
    getBusqueda: async function({ commit }, texto) {
      if(!texto) texto = '';

      let url = 'http://api.giphy.com/v1/gifs/search?api_key='
      + this.state.api_key + '&q=' + texto;
      console.log('url ', url);

      let data = await fetch(url);
      let busqueda = await data.json();
      console.log('busqueda ', busqueda);
      commit('listarBusqueda', busqueda);
    },
  }
})
