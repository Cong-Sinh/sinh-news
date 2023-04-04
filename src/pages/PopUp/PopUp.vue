
<template >
    <Header />
    <div class="grid grid-cols-12 font-font">
        <div class="top-0 left-0 right-0 bottom-0 backgroud-popup">
            <div>

                <div class="grid grid-cols-12  font-font">
                    <!-- <LeftSideBarPopUpVue /> -->
                    <LeftDetail class="text-white absolute top-0 mt-[4rem]  ml-[26rem]" />
                    <main class="font-font col-span-5 col-start-5 mt-14 mb-7 ">
                        <div class="bg-white pt-4 px-3 rounded-lg">
                            <AvatarWithNameAndTime name="Phạm Đăng Phúc" time="22 phút trước" class="ml-2" />

                            <TitleDetaiil
                                title='Bloomberg tiết lộ Trung Quốc đang cân nhắc nới lỏng kiểm soát với các doanh nghiệp tùy vào việc đáp ứng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    tiêu chuẩn chính sách "3 lằn ranh đỏ" ' />
                            <!-- bài báo -->
                            <Article />
                            <!-- bài báo -->
                            <img src="@/assets/img/CloseIcon.png" alt=""
                                class="absolute top-0 mt-[4rem] right-0 mr-[18rem] cursor-pointer">
                        </div>
                    </main>
                </div>
            </div>
        </div>

        <LeftSidebar class="" />
        <main class="font-font col-span-5  col-start-4 mt-14">
            <div class="py-8   ">
                <ArticleCard />

                <div class="pb-8">
                    <ShortVideo />
                </div>

                <Loading />

                <ArticleCard />

                <VideoCard />

                <Complete />
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
        Loading,
        Complete,
        VideoCard,


        Header,
        RightSidebar,
        AvatarWithNameAndTime,
        Voted,
        TitleDetaiil,
        Article,
        LeftSideBarPopUpVue,
        LeftDetail
    },
};
import Header from "@/layouts/Header.vue";
import LeftSidebar from "@/components/Sidebar/LeftSidebar.vue";
import RightSidebar from "@/components/Sidebar/RightSidebar.vue";
import ArticleCard from "@/components/ArticleCard/index.vue";
import ShortVideo from "@/components/ShortVideo/ShortVideo.vue";
import Loading from "@/components/HomePageLocation/Loading.vue";
import Complete from '@/components/HomePageLocation/Complete.vue';
import VideoCard from "@/components/ArticleCard/VideoCard.vue";


import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import Voted from '@/components/ArticleCard/CardIngredient/Voted.vue';
import TitleDetaiil from '@/pages/Detail/componentsDetail/TitleDetail/TitleDetaiil.vue';
import Article from "../Detail/componentsDetail/ContentArticle/Article.vue";
import LeftSideBarPopUpVue from './LeftSideBarPopUp.vue';
import LeftDetail from "../Detail/componentsDetail/LeftSideBar/LeftDetail.vue";


</script>