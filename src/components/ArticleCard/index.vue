<template>
  <div class="bg-white rounded-lg mb-5">
    <div class="p-4">
      <AvatarWithName
        src="@/assets/img/avatar.png 2x"
        name="Ngô Thanh Thảo"
        width="w-9"
        height="h-10"
        titleClass="text-base text-red-500"
      />
      <AvatarWithNameAndTime
        src="@/assets/img/avatar.png 2x"
        name="Ngô Thanh Thảo"
        time="15 phút trước"
        titleClass="text-sm"
        class="mt-4"
      />
      <p class="text-Background4 text-text2 font-normal leading-5 pb-2">
        Trong bối cảnh nền kinh tế nghẽn
        thanh
        khoản, thị
        trường bất động sản gặp khó khăn, tôi bắt
        đầu nghe thấy
        các nhận định “doanh nghiệp bất động sản phải giảm giá”; “doanh nghiệp bất động sản không chịu nghe lời,
        không chịu giảm...
        <strong
          class="text-text2 text-Grey5 font-normal cursor-pointer"
        >xem thêm</strong>
      </p>
    </div>
    <img src="@/assets/img/ImageRatio.png" alt="Meey News" />
    <h3
      class="bg-Background1 px-2 h-[64px] flex items-center boxshadow-content"
    >Dòng tiền bất động sản cuối năm 2022 chuyển hướng ra sao, thời điểm nào để bắt đáy?</h3>
    <div class="flex border-b-[1px] items-center">
      <span class="ml-[18px] bg-[#E86C64] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
      <h3 class="py-3">thị trường</h3>
    </div>
    <CardAction />
    <!-- <div class="flex justify-around items-center h-[48px]">
      <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/up.png 2x" alt="Meey News" class="w-4 h[4]" />
        <h3 class="text-text2 text-Grey7 px-3">278 vote</h3>
        <img srcset="@/assets/img/dow.png 2x" alt="Meey News" class="w-4 h[4]" />
      </div>
      <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/comment.png 2x" alt="Meey News" class="w-[15px] h-[15px]" />
        <h3 class="text-text2 text-Grey7 ml-[10px]">27 bình luận</h3>
      </div>
      <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/share.png 2x" alt="Meey News" class="w-4 h-[13px]" />
        <h3 class="text-text2 text-Grey7 ml-[10px]">Chia sẻ</h3>
      </div>
    </div>-->
  </div>
</template>
<script>
import AvatarWithName from "@/components/Avatar/AvatarWithName.vue";
import AvatarWithNameAndTime from "@/components/Avatar/AvatarWithNameAndTime.vue";
import CardAction from "@/components/ArticleCard/CardAction.vue";

export default {
  components: {
    AvatarWithName,
    AvatarWithNameAndTime,
    CardAction,
  },
};
</script>