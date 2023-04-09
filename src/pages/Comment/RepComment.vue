<template>
    <!-- rep-comment  -->
    <div class="pl-3  border-l-2">
        <input placeholder="Phản hồi của bạn..." type="text" class="w-full pl-4 mb-4 h-11 border-2 outline-none rounded-lg">


        <div class="">
            <div class="flex justify-between items-center">
                <AvatarWithNameAndTime name="Hoàng Anh Tuấn" time="15 phút trước" />
                <img srcset="@/assets/img/seeMore.png 2x" alt="">
            </div>
            <content-comment-detail comment=" Đó là do tâm lý cũ. Vì giá nhà mặt đất mà thấp hơn giá căn hộ là biết cuộc sống
                                                      ở mặt đất tệ thế nào rồi. Có nhiều cái tệ gây thiệt hại cho chính chủ 
                                                    thể nhưng sống quá lâu trong môi trường đó nên ko nhận ra." />
            <div class="flex items-center pb-7">
                <voted vote="278" class=" w-7" />
                <p class=" text-S font-medium text-grey6 ml-[5rem]">Phản hồi</p>
            </div>
        </div>
        <div class="">
            <div class="flex justify-between items-center">
                <AvatarWithNameAndTime name="Hoàng Anh Tuấn" time="15 phút trước" />
                <img srcset="@/assets/img/seeMore.png 2x" alt="">
            </div>
            <content-comment-detail
                comment="
                                                                               !!! <strong>@Hoàng Anh Tuấn</strong>: Càng xây nhiều chung cư thì càng tắc đường. Cùng là 1000m2 nhà mặt đất có 100 người ở, còn chung cư thì 1000 ." />
            <div class="flex items-center pb-7">
                <voted vote="278" class=" w-7" />
                <p class=" text-S font-medium text-grey6 ml-[5rem]">Phản hồi</p>
            </div>
        </div>


    </div>
    <!-- rep-comment  -->
</template>

<script>
import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import ContentCommentDetail from './structureComment/ContentComment.vue';
import Voted from '@/components/ArticleCard/CardIngredient/Voted.vue';

export default {
    components: { AvatarWithNameAndTime, ContentCommentDetail, Voted }
}
</script>

<style></style>