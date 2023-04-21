<template>
  <div class="fixed   right-[10rem]  top-14 mt-6">
    <!-- Title  -->
    <TitleSidebar title="Xu hướng" src="@/assets/img/AvatarLoading.png" />
    <!-- Title  -->

    <ContentRight />
    <ContentRight />
    <ContentRight />

  </div>
</template>

<script>
import TitleSidebar from '@/components/Sidebar/StructureRight/TitleRight.vue'
import ContentRight from './StructureRight/ContentRight.vue';
export default {
  components: {
    ContentRight,
    TitleSidebar
  }
}
</script>