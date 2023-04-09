
<template>
  <Header />
  <div class="grid grid-cols-12 bg-background1 font-font">
    <LeftSidebar />
    <main class="font-font col-span-5 col-start-4 mt-14">
      <div class="py-8">
        <ArticleCard />

        <Skeleton />

        <div class="pb-8">
          <ShortVideo />
        </div>

        <NewsAround />

        <ArticleCard />

        <VideoCard />

        <RecentNews />
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
    NewsAround,
    RecentNews,
    VideoCard,
    Skeleton,
  },
};
import Header from "@/layouts/Header.vue";
import LeftSidebar from "@/components/Sidebar/LeftSidebar.vue";
import RightSidebar from "@/components/Sidebar/RightSidebar.vue";
import ArticleCard from "@/components/ArticleCard/ArticleCard.vue";
import ShortVideo from "@/components/ShortVideo/ShortVideo.vue";
import NewsAround from "@/components/HomePageLocation/NewsAround.vue";
import RecentNews from "@/components/HomePageLocation/RecentNews.vue";
import VideoCard from "@/components/ArticleCard/VideoCard.vue";
import LoadingPageVue from "./LoadingPage.vue";
import NewsAroundVue from "@/components/HomePageLocation/NewsAround.vue";
import Skeleton from "@/components/Skeleton/Skeleton.vue";
</script>