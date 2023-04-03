<template>
    <div class="pb-5 pt-3">
        <div class="flex justify-between items-center">
            <AvatarWithNameAndTime src="@/assets/img/CommentShare.png" name="Phạm Đăng Phúc" time="15 phút trước" />
            <img srcset="@/assets/img/seeMore.png 2x" alt="">
        </div>
        <content-comment-detail />

        <div class="pl-6">
            <ContentCommentShare
                comment="Ông Dũng cho biết qua báo cáo của các địa phương, các hiệp hội cho thấy thị trường bất động sản cao cấp được đầu tư nhiều trong khi đó nhà ở xã hội, nhà có giá phù hợp rất hạn chế. Đây là biểu hiện lệch pha rõ nét ở các đô thị đặc biệt" />

            <div class="flex items-center">
                <voted vote="278" class=" w-7" />
                <p class="text-text4 font-medium text-Grey6 ml-[5rem]">Phản hồi</p>
            </div>

        </div>
        <div class="flex items-center pt-5 pl-6">
            <img src="@/assets/img/Iconfeedbackr.png" alt="">
            <button class="text-Grey6 text-text4 font-medium pl-2">8 phản hồi</button>
        </div>
    </div>
</template>

<script>
import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import ContentCommentShare from '@/pages/HomeShare/ComponentShare/structureCommentShare/ContentCommentShare.vue';
import Voted from '@/components/ArticleCard/CardIngredient/Voted.vue';

export default {
    components: { AvatarWithNameAndTime, Voted, ContentCommentShare }
}
</script>

<style></style>