<template>
  <Header class="max-[768px]:hidden" />

  <div class="grid grid-cols-12 bg-background1 font-font pt-14 max-[768px]:pt-0 max-[768px]:grid-cols-1">
    <LeftDetail class="max-[768px]:hidden" />

    <main class="col-span-5 col-start-4 font-font mt-140 mb-7">
      <router-link to="/">
        <IconLogoDetail :title="articleDetail?.categories?.[0]?.name" />
      </router-link>
      <div class="px-3 pt-4 bg-white rounded-lg">
        <AvatarWithNameAndTime
          :src="articleDetail?.publishedBy?.avatar.url"
          :name="articleDetail?.publishedBy?.fullname"
          time="22 phút trước"
          class="ml-2 text-M"
        />

        <TitleDetail :title="articleDetail?.comment" class="text-sm" />
        <!-- bài báo -->

        <!-- <Article></Article> -->

        <!-- bài báo -->
        <div class="p-4 rounded bg-grey0">
          <newspaperLogo :title="articleDetail?.source?.domain" :src="articleDetail?.source?.logo" />
          <div class="font-semibold text-heading6 text-background4 t-4" v-html="articleDetail?.title"></div>

          <Summary :summary="articleDetail?.summary" />

          <div class="pt-3 font-normal text-M text-grey8" v-html="articleDetail?.description" />
        </div>
        <!-- bài báo -->

        <Share />

        <TrendNews :items="articleDetail?.feedsRelated" />

        <!-- comment post  -->
        <div>
          <div class="flex justify-between pt-[2rem] pb-[1rem]">
            <h3 class="font-semibold text-text1 text-grey8">Bình luận (12)</h3>
            <ul class="flex items-center">
              <p class="relative pr-2 font-normal cursor-pointer text-background4 text-text2">Mới nhất</p>
              <img srcset="@/assets/img/IconUserDown.png 2x" alt class="items-center" />
              <ul class="rounded-lg absolute mt-[8rem] ml-[-3rem] z-30 bg-white shadow-2xl">
                <li class="pr-12 my-5 ml-4 font-normal text-background4 text-text2">Mới nhất</li>
                <li class="pr-12 my-5 ml-4 font-normal text-background4 text-text2">Cũ nhất</li>
              </ul>
            </ul>
          </div>

          <input
            type="text"
            placeholder="Bình luận của bạn..."
            class="w-full my-4 border rounded-lg outline-none h-11 p-7"
          />

          <!-- comment post  -->

          <!-- comment -->
          <!-- <CommentErorr />
          <CommentDetail />
          <RepComment />
          <CommentDetail />
          <CommentDetail /> -->
          <!-- comment -->

          <div class="flex justify-center py-8">
            <button
              class="text-text4 font-medium justify-center flex items-center mx-4 w-[7rem] h-7 text-grey7 border border-grey1 rounded-[44px]"
            >
              Xem Thêm
              <img srcset="@/assets/img/IconUserDown.png 2x" alt class="pl-2" />
            </button>
          </div>
        </div>
      </div>
    </main>
    <RightSidebar class="mt-[4.5rem] font-semibold" />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue';
import RightSidebar from '@/components/Sidebar/RightSidebar.vue';
import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import Voted from '@/components/ArticleCard/CardIngredient/Voted.vue';
import LeftDetail from '@/pages/Detail/componentsDetail/LeftSideBar/LeftDetail.vue';
import Summary from '@/pages/Detail/componentsDetail/Summary/Summary.vue';
import Article from './componentsDetail/ContentArticle/Article.vue';
import Share from './componentsDetail/Share/Share.vue';
import TrendNews from '@/pages/Detail/componentsDetail/TrendNews/TrendNews.vue';
import CommentDetail from '@/pages/Comment/Comment.vue';
import RepComment from '@/pages/Comment/RepComment.vue';
import CommentErorr from '@/pages/Comment/CommentErorr.vue';
import IconLogoDetail from './componentsDetail/IconLogoDetail.vue';
import newspaperLogo from './componentsDetail/newspaperLogo.vue';
import TitleDetail from '@/pages/Detail/TitleDetail/TitleDetail.vue';
import { isFeedId } from '@/utils/number';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Header,
    RightSidebar,
    AvatarWithNameAndTime,
    Voted,
    LeftDetail,
    Summary,
    Article,
    Share,
    TrendNews,
    CommentDetail,
    RepComment,
    CommentErorr,
    IconLogoDetail,
    newspaperLogo,
    TitleDetail,
  },
  created() {
    const currentFeedId = this.$route && this.$route.params?.id ? this.$route.params?.id : null;
    this.getFeedDetail(currentFeedId);
  },

  mounted() {},
  computed: {
    ...mapGetters('feed', {
      articleDetail: 'articleDetail',
      isLoading: 'loadingDetail',
    }),
  },
  methods: {
    ...mapActions('feed', ['getFeedDetail']),
  },
  beforeRouteEnter(to, from, next) {
    const feedId = to.params.id;
    if (feedId.length === 6 && isFeedId(to.params.id)) {
      next();
    } else {
      next('/404');
    }
  },
};
</script>

<style></style>
