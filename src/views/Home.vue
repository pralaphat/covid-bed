<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">

        <div class="column ml-6">
          <div class="content">
            <h1 class="title is-2 has-text-left-desktop ml-6 mt-6">
              BEDME: the COVID-19 resources management system
            </h1>
            <p class="subtitle is-family-monospace is-5 has-text-left-desktop has-text-success has-text-weight-semibold ml-6 mt-5 ">
              ✅ Managing hospital resources
              <br>✅ Request COVID-19 Bed
            </p>
            <nav class="bd-hello-buttons buttons ml-6 mt-6">
                <router-link to="/" class="button bd-fat-button is-success has-text-weight-semibold" >For Hospital</router-link>
                <router-link to="/" class="button bd-fat-button is-success is-inverted has-text-weight-semibold" >For Patient</router-link>
            </nav>
          </div>
        </div>

        <div class="column">
          <img class="is-square align-left" src="../assets/bed.png" width="350"/>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
  };
</script>
<style scoped>
  h1 {
    font-family: 'Nunito';
    font-weight: 700;
  }

  button {
    position: absolute;
  }

</style>
