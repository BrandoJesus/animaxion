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
      <b-col class="my-1" cols="12" sm="6" md="4" lg="3"
       v-for="(t, index) of busqueda" :key="index">
        <b-card-img-lazy overlay :src="t.src"
        blank-src="/img/logo.82b9c7a5.png" :title="t.title">
        </b-card-img-lazy>
      </b-col>
      <b-col cols="12" v-show="totalbusqueda === 0">
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
      ]
    }
  },computed:{
    ...mapState(['busqueda', 'totalbusqueda'])
  },
  methods: {
    ...mapActions(['getBusqueda']),
    filtrar() {
      if(!this.selected || !this.$route.params.id) return false;
      this.getBusqueda(this.$route.params.id +'&sort='+ this.selected);
    }
  },
  created() {
    this.getBusqueda(this.$route.params.id);
  }
}
</script>
<style lang="stylus" scoped>
</style>