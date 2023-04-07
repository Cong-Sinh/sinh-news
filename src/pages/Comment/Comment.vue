<template>
    <div class="pb-8 pt-3">
        <div class="flex justify-between items-center">
            <AvatarWithNameAndTime name="Phạm Đăng Phúc" time="15 phút trước" />
            <img srcset="@/assets/img/seeMore.png 2x" alt="">
        </div>
        <content-comment-detail
            comment="Ông Dũng cho biết qua báo cáo của các địa
                                                                    phương, các hiệp hội cho thấy thị
                                                                    trường bất động sản cao cấp được đầu tư nhiều trong khi đó nhà ở xã hội, nhà có giá phù hợp rất
                                                                    hạn chế. Đây là biểu hiện lệch pha rõ nét ở các đô thị đặc th..." />
        <div class="flex items-center">
            <voted vote="278" class=" w-7" />
            <p class="text-text4 font-medium text-grey6 ml-[5rem]">Phản hồi</p>
        </div>
    </div>
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