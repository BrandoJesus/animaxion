<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}">GIPHY</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>
              Agregar GIF/ Crear GIF <i class="fa fa-puzzle-piece"></i>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Categorias" right>
              <b-dropdown-item @click="ir(op.value)" v-for="(op, index) of options"
              :key="index">{{ op.text }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="login" :to="{name: 'search'}" text>
              Login <i class="fa fa-user"></i>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>      
      <router-view/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Trending from '@/components/Trending.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    Trending
  },
  data () {
    return {
      texto: '',
      options: [
        { text: 'Reacciones', value: 'reacciones' },
        { text: 'Entretenimiento', value: 'entretenimiento' },
        { text: 'Deportes', value: 'deportes' },
        { text: 'Stickers', value: 'stickers' },
        { text: 'Memes', value: 'memes' },
        { text: 'Juegos', value: 'juegos' }
      ]
    }
  },
  computed:{
    ...mapState(['trending'])
  },
  methods: {
    ...mapActions(['getTrending', 'getBusqueda']),
    ir(texto) {
      console.log('texto ', texto);
      this.$router.push({path: `/search/${ texto }`});
      this.getBusqueda(texto);
    },
  },
  created() {
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
//   -webkit-font-smoothing antialiased
//   -moz-osx-font-smoothing grayscale
//   text-align center
  // color #2c3e50

.titulo
  font-size 25px
  font-weight 700
  color #42b983

.nav-item.login
  background #42b983
  border #343a40 1px solid
  border-radius 10px
  padding 0 15px

.nav-item.login .nav-link
  color #343a40 !important

.nav-item.login .nav-link:hover
  color #fff !important


// #nav
//   padding 30px
//   a
//     font-weight bold
//     color #2c3e50
//     &.router-link-exact-active
//       color #42b983
</style>