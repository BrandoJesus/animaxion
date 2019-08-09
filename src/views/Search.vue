<template>
  <div class="search">
    <b-row class="mt-3">
      <b-col cols="9" class="my-2 text-uppercase">
        {{ $route.params.id }} 
        <b-badge variant="dark">{{ totalbusqueda }}</b-badge>        
      </b-col>
      <b-col cols="3">
        <b-link class="mx-1" @click="filtrar('recent')">Recientes</b-link> 
        <b-link class="mx-1" @click="filtrar('revelant')">Relevantes</b-link>
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
    }
  },computed:{
    ...mapState(['busqueda', 'totalbusqueda'])
  },
  methods: {
    ...mapActions(['getBusqueda']),
    filtrar(extra) {
      console.log('extra ', extra);
      console.log('params ', this.$route.params.id);      
      // this.getBusqueda(this.$route.params.id, this.$route.query.sort);
      // let texto = this.$route.params.id +'&'+this.$route.query.sort;
      // this.getBusqueda(this.$route.params.id, extra);
      
      // this.$router.push({path: `/search/${ this.$route.params.id }`, query: {sort: extra}})  
    }
  },
  created() {
    console.log('created ', this.$route);
    this.getBusqueda(this.$route.params.id, this.$route.query.sort);
  },
  updated() {
    console.log('updated ', this.$route);
    // this.getBusqueda(this.$route.params.id, this.$route.query.sort);
  }
}
</script>
