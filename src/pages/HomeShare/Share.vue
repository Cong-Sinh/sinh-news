<template>
    <div class="grid grid-cols-12  font-font">
        <div class="gird col-span-9 bg-neutral-950">

            <img src="@/assets/img/BackgroudShare.png" alt="" class="opacity-[50%] blur-sm h-[1100px]   w-full">


            <div class="flex top-7 w-[73%] cursor-pointer pl-5 absolute ">
                <div class="flex">
                    <img src="@/assets/img/IconClose.png" alt="" class="pr-6 cursor-pointer h-6 z-10">
                    <img src="@/assets/img/Logo_Meey_News.png" alt="" class="h-[1.8rem] w-[7rem]">
                </div>
                <img src="@/assets/img/extend.png" alt="" class=" top-0 right-0 w-5 h-5 ml-auto ">

            </div>
            <div class="flex ml-[35%] translate-x-[-35%] justify-center items-center bottom-[6rem] absolute  ">
                <img src="@/assets/img/LeftShare.png" alt="" class="w-[78px] h-[78px]">
                <div class="relative">
                    <div class="shadow-share z-1 w-[448px] h-[462px] top-[364px] rounded-lg absolute "> </div>
                    <img src="@/assets/img/ShareHome.png" alt="" class="h-[826px] w-[448px]  ">
                    <ContentCommentShare class="z-10  absolute bottom-6 text-white px-4"
                        comment="Ông Dũng cho biết qua báo cáo của các địa phương, các hiệp hội cho thấy thị trường bất động sản cao cấp được đầu tư nhiều trong khi đó nhà ở xã hội, nhà có giá phù hợp rất hạn chế. Đây là biểu hiện lệch pha rõ nét " />
                </div>
                <div class="">

                    <img src="@/assets/img/RightShare.png" alt="" class="">
                    <div class="absolute">
                        <div class="">
                            <img src="@/assets/img/UpShare.png" alt="" class="pt-[2rem]">
                            <p class="text-center text-white text-M">1492</p>
                        </div>
                        <img src="@/assets/img/DowShare.png" alt="" class="pb-3">
                        <img src="@/assets/img/CommentShare.png" alt="" class="pb-[1rem]">
                        <img src="@/assets/img/ShareShare.png" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
        <div class="gird col-span-3 px-4 pt-6 mb-2 ">
            <avatar-with-name name="Nguyễn Kỳ Duyên" height="w-9" width="h-9" />
            <TitleShare
                title=' Bloomberg tiết lộ Trung Quốc đang cân nhắc nới lỏng kiểm soát với các doanh nghiệp tùy vào việc đáp ứng tiêu
                                                                                                                                                        chuẩn chính sách "3 lằn ranh đỏ."' />
            <div class="border-t-2 ">
                <div>
                    <rep-comment-share />

                    <CommentShare class="" />
                    <CommentShare class="" />

                    <div class=" border-t-2 ">
                        <div class="flex items-center mt-1">
                            <avatar-with-name height="w-10" width="h-10" class="pr-4" />
                            <input type="text" placeholder="Bình luận của bạn..."
                                class="pl-3 w-full h-10 border-2 rounded-[20px] outline-none">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvatarWithName from '@/components/Avatar/AvatarWithName.vue'
import AvatarWithNameAndTime from "@/components/Avatar/AvatarWithNameAndTime.vue";
import Comment from '@/pages/Comment/Comment.vue';
import CommentShare from './ComponentShare/structureCommentShare/CommentShares.vue';
import RepCommentShare from './ComponentShare/structureCommentShare/RepCommentShare.vue';
import ContentCommentShare from './ComponentShare/structureCommentShare/ContentCommentShare.vue';
import TitleShare from './ComponentShare/TitleShare.vue';
export default {
    components: {
        AvatarWithName,
        AvatarWithNameAndTime,
        Comment,
        CommentShare,
        RepCommentShare,
        ContentCommentShare,
        TitleShare
    },

}
</script>

<style></style>