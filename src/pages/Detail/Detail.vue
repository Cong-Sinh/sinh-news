<template>
  <Header />

  <div class="grid grid-cols-12 bg-background1 font-font">
    <LeftDetail />

    <main class="font-font col-span-5 col-start-4 mt-14 mb-7">
      <div class="flex items-center pt-6 pb-4">
        <img srcset="@/assets/img/IconHomeDetail.png 2x" alt class="h-4 w[14px]" />
        <img srcset="@/assets/img/IconLefteDetail.png 2x" alt class="mx-3 w-1 h-[10px]" />
        <p class="uppercase text-grey4 text-M font-normal">Thị Trường</p>
      </div>

      <div class="bg-white pt-4 px-3 rounded-lg">
        <AvatarWithNameAndTime name="Phạm Đăng Phúc" time="22 phút trước" class="ml-2 text-M" />

        <TitleDetaiil :title="articleDetail?.summary" />
        <!-- bài báo -->

        <div v-html="articleDetail?.description"></div>
        <!-- bài báo -->


        <!-- <Article></Article> -->

        <Summary :title="articleDetail?.summary" />
        <!-- bài báo -->
        <div class="bg-grey0 rounded p-4">

          <div class="font-semibold text-heading6 text-background4 t-4" v-html="articleDetail?.title"></div>

          <div class=" pt-3 text-M text-grey8 font-normal   " v-html="articleDetail?.description" />


        </div>
        <!-- bài báo -->

        <!-- comment post  -->
        <div>
          <div class="flex justify-between pt-[2rem] pb-[1rem]">
            <h3 class="font-semibold text-text1 text-grey8">Bình luận (12)</h3>
            <ul class="flex items-center">
              <p class="pr-2 relative text-background4 text-text2 font-normal cursor-pointer">Mới nhất</p>
              <img srcset="@/assets/img/IconUserDown.png 2x" alt class="items-center" />
              <ul class="rounded-lg absolute mt-[8rem] ml-[-3rem] z-30 bg-white shadow-2xl">
                <li class="ml-4 pr-12 my-5 text-background4 text-text2 font-normal">Mới nhất</li>
                <li class="ml-4 pr-12 my-5 text-background4 text-text2 font-normal">Cũ nhất</li>
              </ul>
            </ul>
          </div>

          <input type="text" placeholder="Bình luận của bạn..."
            class="h-11 w-full border p-7 outline-none rounded-lg my-4" />

          <!-- comment post  -->

          <!-- comment -->
          <CommentErorr />
          <CommentDetail />
          <RepComment />
          <CommentDetail />
          <CommentDetail />
          <!-- comment -->

          <div class="flex justify-center py-8">
            <button
              class="text-text4 font-medium justify-center flex items-center mx-4 w-[7rem] h-7 text-grey7 border border-grey1 rounded-[44px]">
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
  },
  created() {
    const currentFeedId = this.$route && this.$route.params?.id ? this.$route.params?.id : null;
    this.getFeedDetail(currentFeedId)
  },

  mounted() {
    setTimeout(() => {
      // console.log(this.articleDetail, '--------------------------articleDetail')
    }, 3000)
  },
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
}
</script>

<style></style>
