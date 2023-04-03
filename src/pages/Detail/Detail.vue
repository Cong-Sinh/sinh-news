<template>
    <Header />

    <div class="grid grid-cols-12 bg-Background1 font-font">

        <LeftDetail />

        <main class="font-font col-span-5 col-start-4 mt-14 mb-7 ">
            <div class="flex items-center pt-6 pb-4">
                <img srcset="@/assets/img/IconHomeDetail.png 2x" alt="" class="h-4 w[14px]">
                <img srcset="@/assets/img/IconLefteDetail.png 2x" alt="" class="mx-3 w-1 h-[10px]">
                <p>Thị Trường</p>
            </div>

            <div class="bg-white pt-4 px-3 rounded-lg">

                <AvatarWithNameAndTime name="Phạm Đăng Phúc" time="22 phút trước" class="ml-2" />

                <TitleDetaiil
                    title='Bloomberg tiết lộ Trung Quốc đang cân nhắc nới lỏng kiểm soát với các doanh nghiệp tùy vào việc đáp ứng
                                                                                                                                                                                                                                                                                                                                                                                                tiêu chuẩn chính sách "3 lằn ranh đỏ" ' />
                <!-- bài báo -->
                <Article />
                <!-- bài báo -->

                <!-- bài viết hữu ích -->
                <Share />
                <!-- bài viết hữu ích -->

                <!-- tin xu huong -->
                <div class="px-7 border-y-2">
                    <TrendNews />
                    <TrendNews />
                </div>
                <!-- tin xu huong -->

                <!-- comment post  -->
                <div>
                    <div class="flex justify-between pt-[2rem] pb-[1rem]">
                        <h3 class="font-semibold text-text1 text-Grey8">Bình luận (12)</h3>
                        <ul class="flex items-center">
                            <p class="pr-2 relative text-Background4 text-text2 font-normal cursor-pointer">Mới nhất </p>
                            <img srcset="@/assets/img/IconUserDown.png 2x" alt="" class="items-center">
                            <ul class=" rounded-lg  absolute mt-[8rem] ml-[-3rem] z-30 bg-white  shadow-2xl">
                                <li class="ml-4 pr-12 my-5 text-Background4 text-text2 font-normal">
                                    mới nhất
                                </li>
                                <li class="ml-4 pr-12 my-5 text-Background4 text-text2 font-normal">
                                    mới nhất
                                </li>
                            </ul>
                        </ul>
                    </div>

                    <input type="text" placeholder="Bình luận của bạn..." class="h-11 w-full border p-7 rounded-lg my-4">

                    <!-- comment post  -->

                    <!-- comment -->
                    <CommentErorr />
                    <CommentDetail />
                    <RepComment />
                    <CommentDetail />
                    <CommentDetail />
                    <!-- comment -->

                    <div class="flex justify-center pb-8">
                        <button
                            class="text-text4 font-medium justify-center  flex items-center mx-4 w-[7rem] h-7 text-Grey7 border border-Grey1  rounded-[44px]">
                            Xem Thêm
                            <img srcset="@/assets/img/IconUserDown.png 2x" alt="" class="pl-2">
                        </button>
                    </div>

                </div>

            </div>
        </main>
        <RightSidebar class=" mt-[4.5rem]" />
    </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import RightSidebar from '@/components/Sidebar/RightSidebar.vue';
import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import Voted from '@/components/ArticleCard/CardIngredient/Voted.vue';
import LeftDetail from '@/pages/Detail/componentsDetail/LeftSideBar/LeftDetail.vue';
import TitleDetaiil from '@/pages/Detail/componentsDetail/TitleDetail/TitleDetaiil.vue';
import Article from './componentsDetail/ContentArticle/Article.vue';
import Share from './componentsDetail/Share/Share.vue';
import TrendNews from '@/pages/Detail/componentsDetail/TrendNews/TrendNews.vue';
import CommentDetail from './componentsDetail/Comment/Comment.vue';
import RepComment from './componentsDetail/Comment/RepComment.vue';
import CommentErorr from './componentsDetail/Comment/CommentErorr.vue';

export default {
    components: {
        Header,
        RightSidebar,
        AvatarWithNameAndTime,
        Voted,
        LeftDetail,
        TitleDetaiil,
        Article,
        Share,
        TrendNews,
        CommentDetail,
        RepComment,
        CommentErorr
    }
}
</script>

<style></style>
