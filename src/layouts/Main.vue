
<template>
  <Header />
  <div class="grid grid-cols-12 bg-Background1">
    <LeftSidebar />
    <main class="font-font col-span-5 col-start-5 mt-14">
      <div class="py-8">
        <!-- content-post -->
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />

        <!-- content-post -->

        <!-- short-video  -->

        <!-- <div class="w-[568px] h-[441px] bg-white rounded-lg">
          <div class="flex items-center pl-[18px] pt-[27px]">
            <img srcset="@/assets/img/video.png 2x" alt class="mr-[10px] w-[15px] h-[10px]" />
            <h2 class="text-Grey8 text-heading5 font-semibold">Video ngắn</h2>
          </div>
        </div>-->

        <!-- short-video  -->
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
  },
};
import Header from "@/layouts/Header.vue";
import LeftSidebar from "@/components/Sidebar/LeftSidebar.vue";
import RightSidebar from "@/components/Sidebar/RightSidebar.vue";
import ArticleCard from "@/components/ArticleCard/index.vue";
</script>