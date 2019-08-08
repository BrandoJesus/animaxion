<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-row>
      <b-col cols="12">
        <b-input-group class="mt-3">
        <b-form-input v-model="texto" @keyup.enter="ir" placeholder="Busca todos los GIF'S" ></b-form-input>
        <b-input-group-append>
          <b-button @click="ir" variant="info">Buscar</b-button>
        </b-input-group-append>
      </b-input-group>
      </b-col>
    </b-row>
    <!-- <Trending/> -->    
    <b-row class="mt-3">
      <b-col cols="12" class="my-2 trending">
        TRENDING GIF
      </b-col>
      <b-col class="my-1" cols="12" md="4" v-for="t of trending" :key="t.id">
        <b-card-img-lazy
        :src="t.src"
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
      texto: '',
    }
  },
  computed:{
    ...mapState(['trending'])
  },
  methods: {
    ...mapActions(['getTrending', 'getBusqueda']),
    ir() {
      console.log('texto ', this.texto);
      this.$router.push({path: `/search/${ this.texto }`, query: { sort: 'revelant' }});     
    },
    scroll(trending) {
      window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        console.log('scrolll', this.trending.length);
        // Do something, anything!
        this.getTrending(this.trending.length)
      }
    };
    }
  },
  created() {
    this.getTrending()
  },
  mounted() {
    this.scroll(this.trending);
  }
}
</script>

<style lang="stylus">
  .trending
    color #cccccc
    font-size 20px
</style>
