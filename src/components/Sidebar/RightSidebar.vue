<template>
  <div class="fixed max-[768px]:hidden  right-[10rem] xl:block  top-14 mt-6">
    <!-- Title  -->
    <TitleSidebar title="Xu hướng" src="@/assets/img/AvatarLoading.png" />
    <!-- Title  -->
    <ContentRight :items="articleDetail?.feedsRelated" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TitleSidebar from '@/components/Sidebar/rightSide/TitleRight.vue'
import ContentRight from './rightSide/ContentRight.vue';
export default {
  components: {
    ContentRight,
    TitleSidebar
  },
  computed: {
    ...mapGetters('feed', {
      articleDetail: 'articleDetail',
    }),
  },
}
</script>