<template>
  <!-- <Main /> -->

  <!-- <Detail /> -->

  <!-- <HomeShare /> -->

  <PopUp />

  <!-- <LoadingPage /> -->

  <!-- <router-view> -->


  <!-- </router-view> -->
</template>


<script>
import LoadingPage from './layouts/LoadingPage.vue';
import Main from './layouts/Main.vue';
import Detail from './pages/Detail/Detail.vue';
import HomeShare from './pages/HomeShare/Share.vue';
import PopUp from './pages/PopUp/PopUp.vue';


export default {
  name: 'App',
  components: {
    Main,
    LoadingPage,
    Detail,
    HomeShare,
    PopUp
  }
}
</script>
<style lang="scss"></style>

