<template>
  <div class="fixed hidden  right-[10rem] xl:block  top-14 mt-6">
    <!-- Title  -->
    <TitleSidebar title="Xu hướng" src="@/assets/img/AvatarLoading.png" />
    <!-- Title  -->

    <ContentRight />
    <ContentRight />
    <ContentRight />

  </div>
</template>

<script>
import TitleSidebar from '@/components/Sidebar/rightSide/TitleRight.vue'
import ContentRight from './rightSide/ContentRight.vue';
export default {
  components: {
    ContentRight,
    TitleSidebar
  }
}
</script>