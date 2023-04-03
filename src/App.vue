<template>
  <!-- <Main /> -->

  <!-- <Detail /> -->

  <HomeShare />

  <!-- <LoadingPage /> -->

  <router-view />
</template>


<script>
import LoadingPage from './layouts/LoadingPage.vue';
import Main from './layouts/Main.vue';
import Detail from './pages/Detail/Detail.vue';
import HomeShare from './pages/HomeShare/Share.vue';


export default {
  name: 'App',
  components: {
    Main,
    LoadingPage,
    Detail,
    HomeShare
  }
}
</script>
<style lang="scss"></style>

