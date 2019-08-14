<template>
  <div class="search">
    <b-row class="mt-3">
      <b-col cols="12" sm="6" class="titulo">
        {{ $route.params.id }} <b-badge variant="dark">{{ totalbusqueda }} GIFs</b-badge>        
      </b-col>
      <b-col cols="12" sm="6" class="text-right">
        <b-form-group @click="filtrar">
          <b-form-radio-group v-model="selected" :options="options" buttons 
            button-variant="outline-dark" size="sm" @input="filtrar"></b-form-radio-group>
        </b-form-group>
      </b-col>
      <b-card-group columns>
        <b-card-img-lazy class="my-1" overlay :src="t.src"
        v-for="(t, index) of busqueda" :key="index"
        :blank-src="imgBlank" :title="t.title">
        </b-card-img-lazy>
      </b-card-group>
      <b-col cols="12" class="center" v-show="totalbusqueda === 0">
        No se encontraron GIF'S
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'Search',
  data() {
    return {
      url: '',
      selected: '',
      options: [
        { text: 'Recientes', value: 'recent' },
        { text: 'Relevantes', value: 'revelant' }
      ],
      imgBlank: '/img/loader.a65c0afd.jpg'
    }
  },computed:{
    ...mapState(['busqueda', 'totalbusqueda'])
  },
  methods: {
    ...mapActions(['getBusqueda']),
    filtrar() {
      if(!this.selected || !this.$route.params.id) return false;
      this.getBusqueda(this.$route.params.id +'&sort='+ this.selected);
    },
    scroll(busqueda) {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;        
        if (bottomOfWindow) {
          console.log('busqueda.length ', busqueda.length);
          this.getBusqueda(this.$route.params.id +'&sort='+ this.selected + '&offset='+ busqueda.length);
        } 
      };
    }
  },
  created() {
    this.getBusqueda(this.$route.params.id);
  },
  mounted() {
    this.scroll(this.busqueda);
  }
}
</script>
<style lang="stylus" scoped>
  .center
    position absolute
    transform translate(-50%, -50%)
</style>