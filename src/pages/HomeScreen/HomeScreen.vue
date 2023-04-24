
<template>
  <div class="grid grid-cols-12 bg-background1 font-font">
    <LeftSidebar />
    <main class="font-font col-span-5 col-start-4 mt-14">
      <div class="py-8">
        <template v-if="isLoading">
          <Skeleton />
        </template>
        <template v-else>
          <ArticleCard v-for="(article, index) in articleList" :key="index" :article="article" />
          <ShortVideo class="pb-8" />

          <NewsAround />

          <VideoCard />

          <RecentNews />
        </template>
      </div>
    </main>
    <RightSidebar />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue';
import LeftSidebar from '@/components/Sidebar/LeftSidebar.vue';
import RightSidebar from '@/components/Sidebar/RightSidebar.vue';
import ArticleCard from '@/components/ArticleCard/ArticleCard.vue';
import ShortVideo from '@/components/ShortVideo/ShortVideo.vue';
import NewsAround from '@/components/HomePageLocation/NewsAround.vue';
import RecentNews from '@/components/HomePageLocation/RecentNews.vue';
import VideoCard from '@/components/ArticleCard/VideoCard.vue';
import Skeleton from '@/components/Skeleton/Skeleton.vue';
import { mapActions, mapGetters } from 'vuex';
export const namespace = 'feed';

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
  created() {
    if (this.categorySlug) {
      this.getFeedByCategory({ limit: 10, page: 1, categorySlug: this.categorySlug });
    } else {
      this.getFeedSuggestion()
    };
  },
  mounted() {
    // console.log(
    //   this.articleList,
    //   "----------------------------------------------------------------this.articleList "
    // );
  },
  watch: {
    categorySlug: function (currentValue) {
      if (currentValue) {
        this.getFeedByCategory({ limit: 10, page: 1, categorySlug: currentValue });
      } else {
        this.getFeedSuggestion();
      }
    },
  },

  computed: {
    ...mapGetters('feed', {
      articleList: 'articleList',
      isLoading: 'isLoading',
    }),
    categorySlug() {
      return this.$route?.query?.category;
    },
  },
  methods: {
    ...mapActions('feed', ['getFeedSuggestion', 'getFeedByCategory']),
  },
};
</script>