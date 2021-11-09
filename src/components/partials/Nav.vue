<template>
<nav class="navbar container is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="../../assets/logo.png" width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-end">

      <b class="navbar-item">
        <router-link to="/"  class="navbar-item has-text-white">Home</router-link>
      </b>

      <b class="navbar-item">
        <router-link to="/about" class="navbar-item has-text-white">About</router-link>
      </b>

      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-success is-inverted">
            <strong>Log in</strong>
          </a>
          <a class="button is-success">
            <strong>Register</strong>
          </a>
        </div>
      </div>

    </div>

  </div>
</nav>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style lang="scss" scoped>
  nav {
    padding: 32px;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
  }
  
  
</style>