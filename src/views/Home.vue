<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-row>
      <b-col cols="12">
        <b-input-group class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <!-- <b-button variant="outline-success">Button</b-button> -->
          <b-button variant="info">Buscar</b-button>
        </b-input-group-append>
      </b-input-group>
      </b-col>
    </b-row>
    <!-- <Trending/> -->    
    <b-row class="mt-3">
      <b-col cols="12" class="my-2">
        Trending
      </b-col>
      <b-col cols="12" md="4" v-for="t of trending" :key="t.id">
        <b-card-img-lazy
        :src="t.images.fixed_width_small.webp"
        overlay
        >
      </b-card-img-lazy>
    </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Trending from '@/components/Trending.vue'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    Trending
  },
  data () {
    return {
      // fotos: this.state.trending.data
      // fotos: [
      //   {id: 1, name: 'Foto 1', src: 'https://picsum.photos/600/300/?image=23'},
      //   {id: 2, name: 'Foto 2', src: 'https://picsum.photos/600/300/?image=24'},
      //   {id: 3, name: 'Foto 2', src: 'https://picsum.photos/600/300/?image=25'}
      // ]
    }
  },
  computed:{
    ...mapState(['trending'])
  },
  methods: {
    ...mapActions(['getTrending'])
  },
  created() {
    this.getTrending()
  }
}
</script>
