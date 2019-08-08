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
          src: el.images.fixed_width_small.webp
        });
      });
    },
    listarBusqueda(state, lista) {
      state.busqueda = lista.data;
      state.totalbusqueda = lista.pagination.count
    }
  },
  actions: {
    getTrending: async function({ commit }, offset) {      
      if(!offset) offset= 0;
      let url = 'http://api.giphy.com/v1/gifs/trending?api_key='
      + this.state.api_key + '&limit=12&offset='+ offset;
      console.log('url ', url);
      let data = await fetch(url)      
      let trending = await data.json();
      console.log('trending ', trending);
      
      commit('listarTrending', trending);
    },
    getBusqueda: async function({ commit }, texto, sort) {
      if(!texto) texto = '';
      console.log('texto ', texto);
      console.log('sort ', sort);
      if(!sort) sort = 'relevant';

      let url = 'http://api.giphy.com/v1/gifs/search?api_key='
      + this.state.api_key + '&q=' + texto + '&sort='+ sort;
      console.log('url ', url);

      let data = await fetch(url)
      let busqueda = await data.json();
      console.log('busqueda ', busqueda);
      commit('listarBusqueda', busqueda);
    },
  }
})
