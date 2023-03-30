
<template>
  <Header />
  <div class="grid grid-cols-12 bg-Background1">
    <LeftSidebar />
    <main class="font-font col-span-5 col-start-4 mt-14">
      <div class="py-8">
        <!-- content-post -->
        <ArticleCard />

        <div class="pb-8">
          <!-- shortVideo -->
          <ShortVideo />
          <!-- shortVideo -->
        </div>

        <ArticleCard />
        <!-- content-post -->
      </div>






    </main>

    <RightSidebar />
  </div>
</template>

<script>
export default {
  components: {
    Header,
    LeftSidebar,
    RightSidebar,
    ArticleCard,
    ShortVideo,
  },
};
import Header from "@/layouts/Header.vue";
import LeftSidebar from "@/components/Sidebar/LeftSidebar.vue";
import RightSidebar from "@/components/Sidebar/RightSidebar.vue";
import ArticleCard from "@/components/ArticleCard/index.vue";
import ShortVideo from "@/components/ShortVideo/ShortVideo.vue";
</script>