<template>
  <!-- <Main /> -->

  <Detail />

  <!-- <LoadingPage /> -->

  <router-view />
</template>


<script>
import LoadingPage from './layouts/LoadingPage.vue';
import Main from './layouts/Main.vue';
import Detail from './pages/Detail/Detail.vue';

export default {
  name: 'App',
  components: {
    Main,
    LoadingPage,
    Detail
  }
}
</script>
<style lang="scss"></style>

