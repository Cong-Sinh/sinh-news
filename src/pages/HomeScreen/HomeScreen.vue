
<template>
  <div class="grid grid-cols-12 bg-background1 font-font">
    <LeftSidebar />
    <main class="font-font col-span-5 col-start-4 mt-14">
      <div class="py-8">
        <!-- <template v-if="isLoading">
          <Skeleton />
        </template>
        <template v-else>
          <div>
            <ArticleCard v-for="(article, index) in articleList" :key="index" :article="article" />
            <InfiniteLoading @infinite="infiniteHandler" />
            <h1>test</h1>
          </div>
          <ShortVideo class="pb-8" />

          <NewsAround />

          <VideoCard />

          <RecentNews />
          <RightSidebar />
        </template>-->

        <div>
          <ArticleCard v-for="(article, index) in articleList" :key="index" :article="article" />

          <template v-if="articleList?.length > 0">
            <InfiniteLoading @infinite="infiniteHandler" />
          </template>
        </div>
      </div>
    </main>
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
import { mapActions, mapGetters, mapState } from 'vuex';
import axios from 'axios';
import InfiniteLoading from 'v3-infinite-loading';

export const namespace = 'feed';

export default {
  data() {
    return {
      articels: [],
      page: 1,
      feedPayload: {
        fingerprint: '700658735',
        limit: 10,
        page: 1,
      },
    };
  },

  components: {
    InfiniteLoading,
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
      this.getFeedSuggestion(this.feedPayload);
    }
  },
  watch: {
    categorySlug: function (currentValue) {
      if (currentValue) {
        this.getFeedByCategory({ limit: 10, page: 1, categorySlug: currentValue });
      } else {
        this.getFeedSuggestion(feedPayload);
      }
    },
  },

  computed: {
    ...mapState('feed', {
      articleListData: 'articleListData',
    }),
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
    async infiniteHandler(state) {
      if (this.feedPayload.page >= this.articleListData.totalPages) return state.complete();

      const _payload = { ...this.feedPayload, page: this.feedPayload.page + 1, loadMore: true };
      await this.getFeedSuggestion(_payload);
      state.loaded();
      this.feedPayload = { ...this.feedPayload, page: this.feedPayload.page + 1 };
    },
  },
};
</script>