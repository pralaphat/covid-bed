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
    margin-left: 450px;
    margin-right: 450px;
    background-color: #fff;
    border-radius: 10px;
  }
</style>