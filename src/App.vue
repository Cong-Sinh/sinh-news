<template>
  <Main />


  <router-view />
</template>


<script>
import Main from './layouts/Main.vue';
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>
<style lang="scss"></style>

