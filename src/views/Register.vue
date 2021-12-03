<template>
  <div id="regis">
      <div class="hero-body">
        <Regis />
      </div>
  </div>
</template>
<script>
import Regis from '../components/RegisterComponent.vue'
export default {
  name: 'regis',
  components: {
    Regis
  }  
}
</script>
<style lang="scss" scoped>
  .hero-body {
    margin-left: 250px;
    margin-right: 250px;
    background-color: #fff;
    border-radius: 30px;
  }
</style>