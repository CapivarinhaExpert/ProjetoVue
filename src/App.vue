<template>
  <navegacao/>

  <router-view/>
</template>


<script>
  import Navegacao from './components/Navegacao.vue';
  export default {
    components:{
      Navegacao
    }
  }
</script>
<style>
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
</style>
