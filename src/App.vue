<template>
  
  <div id="app">
    <div>
      <NavBarComponent/>
    </div>

    <router-view/>
  </div>
</template>

<script>
 import NavBarComponent from "./components/NavBarComponet.vue";

export default {
  components:{
    NavBarComponent
  }
}

</script>

<style>

</style>
