<template>
  <div class="home">
    <b-row>
      <b-col cols="12">
        <b-input-group class="mt-3">        
        <b-form-input id="busqueda" v-model="texto" 
        @keyup.enter="ir" placeholder="Busca todos los GIF'S">
        </b-form-input>
        <b-input-group-append>
          <b-button @click="ir" variant="info">
            Buscar <i class="fa fa-search"></i>
          </b-button>
        </b-input-group-append>
      </b-input-group>
      </b-col>
    </b-row>
    <!-- <Trending/> -->    
    <b-row class="mt-3">
      <b-col cols="12" class="my-2 trending">
        TRENDING GIF
      </b-col>
      <b-col class="my-1" cols="12" sm="4" md="3" lg="2" 
      v-for="(t, index) of trending" :key="index">
        <b-card-img-lazy overlay :src="t.src">
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
      //this.$router.push({path: `/search/${ this.texto }`, query: { sort: 'revelant' }});     
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
  
  #busqueda::placeholder
    transition opacity 1s, letter-spacing 1s

  #busqueda:focus::placeholder
    opacity 0
    letter-spacing 30px
  
  .btn 
    background none !important
    border #2c3e50 1px solid !important
    color #2c3e50 !important
    display block !important
    overflow hidden !important
    transition 1s all ease !important

  .btn::before
    background #2c3e50 !important
    content ""
    width 100% !important
    height 100% !important
    position absolute !important
    top 50%
    left 50% 
    transform translate(-50%, -50%)
    z-index -1
    transition all 0.6s ease 

  .btn-info::before 
    width 0 !important
    height 100% !important

  .btn:hover::before
    width 100% !important
    color #fff !important
  
  .btn:hover
    color #fff !important
</style>
