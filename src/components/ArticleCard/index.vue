<template>
  <div class="bg-white rounded-lg mb-5">
    <div class="p-4">
      <AvatarWithNameAndTime src="@/assets/img/avatar.png 2x" name="Ngô Thanh Thảo" time="15 phút trước"
        titleClass="text-sm" class="mb-3 " />
      <p class="text-Background4 text-text2 font-normal leading-5 pb-2">
        Trong bối cảnh nền kinh tế nghẽn
        thanh
        khoản, thị
        trường bất động sản gặp khó khăn, tôi bắt
        đầu nghe thấy
        các nhận định “doanh nghiệp bất động sản phải giảm giá”; “doanh nghiệp bất động sản không chịu nghe lời,
        không chịu giảm...
        <strong class="text-text2 text-Grey5 font-normal cursor-pointer">xem thêm</strong>
      </p>
    </div>
    <img src="@/assets/img/ImageRatio.png" alt="Meey News" />
    <h3 class="bg-Background1 px-4 h-[64px]  flex items-center boxshadow-content">Dòng tiền bất động sản cuối năm 2022
      chuyển hướng ra sao, thời điểm nào để bắt đáy?</h3>
    <div class=" ml-[18px] border-b-[1px] flex items-center ">
      <span class=" bg-[#E86C64] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
      <NameAndColor name="Thị Trường" class="py-3 " />
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