<template>
    <div class="bg-white rounded-lg mb-5 shadow">
        <div class="pt-4 px-4 ">
            <AvatarWithNameAndTime src="@/assets/img/avatar.png 2x" name="Phạm Quang Phúc" time="15 phút trước"
                titleClass="text-sm" class="mb-3 " />
            <p class="text-background4 text-M font-normal leading-5 pb-2">
                Nhưng khi thị trường khó khăn, xu hướng dòng tiền sẽ đổ về những sản phẩm có mức giá phù hợp với nhu cầu
                thực của người dân và có giá trị thực.
                <strong class="text-M text-grey5 font-normal cursor-pointer">xem thêm</strong>
            </p>
        </div>
        <img srcset="@/assets/img/VideoCard.png 2x" alt="Meey News Video" class="w-full" />

        <div class=" ml-[18px] border-b-[1px] flex items-center ">
            <!-- <span class=" bg-[#E86C64] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span> -->
            <NameAndColor name="Thị Trường" class="py-3" color="bg-[#E86C64]" />
        </div>
        <CardAction />
    </div>
</template>
<script>
import AvatarWithName from "@/components/Avatar/AvatarWithName.vue";
import AvatarWithNameAndTime from "@/components/Avatar/AvatarWithNameAndTime.vue";
import CardAction from "@/components/ArticleCard/CardAction.vue";
import NameAndColor from '../Category/NameAndColor.vue';

export default {
    components: {
        AvatarWithName,
        AvatarWithNameAndTime,
        CardAction,
        NameAndColor,
    },
};
</script>