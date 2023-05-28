<template>
  <!-- <Detail /> -->

  <!-- <HomeShare /> -->

  <!-- <PopUp /> -->

  <!-- <LoadingPage /> -->
  <OpenApp class=" min-[760px]:hidden" />

  <router-view v-slot="{ Component }" :key="$route.path">
    <template v-if="Component">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="Component" />
          </suspense>
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>


<script>
import Header from "@/layouts/Header.vue";
import LoadingPage from "./layouts/LoadingPage.vue";
import Main from "./layouts/Main.vue";
import Detail from "./pages/Detail/Detail.vue";
import HomeShare from "./pages/HomeShare/Share.vue";
import PopUp from "./pages/PopUp/PopUp.vue";
import OpenApp from "./components/OpenApp/OpenApp.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    LoadingPage,
    Detail,
    HomeShare,
    PopUp,
    OpenApp
  },
};
</script>
<style lang="scss"></style>

