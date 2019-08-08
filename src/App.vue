<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">Animaxion</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>Agregar GIF/ Crear GIF</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Categorias" right>
              <b-dropdown-item :to="{name: 'about'}">Reacciones</b-dropdown-item>
              <b-dropdown-item :to="{name: 'about'}">Entretenimiento</b-dropdown-item>
              <b-dropdown-item :to="{name: 'about'}">Deportes</b-dropdown-item>
              <b-dropdown-item :to="{name: 'about'}">Gamming</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :to="{name: 'about'}" text>Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>
    <b-container>      
      <router-view/>
    </b-container>
  </div>
</template>
<style lang="stylus">
// #app
//   font-family 'Avenir', Helvetica, Arial, sans-serif
//   -webkit-font-smoothing antialiased
//   -moz-osx-font-smoothing grayscale
//   text-align center
//   color #2c3e50

// #nav
//   padding 30px
//   a
//     font-weight bold
//     color #2c3e50
//     &.router-link-exact-active
//       color #42b983
</style>
