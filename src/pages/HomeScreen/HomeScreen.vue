
<template>
  <Header />
  <div class="grid grid-cols-12 bg-background1 font-font ">
    <LeftSidebar />
    <main
      class=" mt-7  font-font col-span-5 col-start-4 max-[760px]:col-span-12 max-[760px]:col-start-0  max-[760px]:mt-0">
      <div class="py-8 max-[760px]:py-0">
        <PostArticle class="max-[760px]:hidden" />
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
import PostArticle from '@/components/PostArticle/PostArticle.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import InfiniteLoading from 'v3-infinite-loading';
import ModalPost from '@/components/PostArticle/PostModal/ModalPost.vue';


export const namespace = 'feed';

export default {
  data() {
    return {
      feedPayload: {
        fingerprint: 'fingerprint',
        interaction: true,
        limit: 10,
        page: 1,
      }
    }
  },

  components: {
    Header,
    LeftSidebar,
    RightSidebar,
    InfiniteLoading,
    ArticleCard,
    ShortVideo,
    NewsAround,
    RecentNews,
    VideoCard,
    Skeleton,
    PostArticle,
    ModalPost,
  },
  created() {
    if (this.categorySlug) {
      this.getFeedByCategory({ limit: 10, page: 1, categorySlug: this.categorySlug });
    } else {
      this.getFeedSuggestion(this.feedPayload)
    };

  },
  mounted() {
  },
  watch: {
    categorySlug: function (currentValue) {
      if (currentValue) {
        this.getFeedByCategory({ limit: 10, page: 1, categorySlug: currentValue });
      } else {
        this.getFeedSuggestion(this.feedPayload);
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
      // this.feedPayload = { ...this.feedPayload, page: this.feedPayload.page + 1 };
    },
  },
};
</script>