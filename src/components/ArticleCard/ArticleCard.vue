<template>
  <div class="bg-white rounded-lg mb-5 shadow">
    <div class="px-4 pt-4">
      <AvatarWithNameAndTime
        src="@/assets/img/avatar.png 2x"
        name="Ngô Thanh Thảo"
        time="15 phút trước"
        titleClass="text-sm"
        class="mb-3"
      />
      <p class="text-background4 text-M font-normal leading-5 pb-2">
        Trong bối cảnh nền kinh tế nghẽn
        thanh
        khoản, thị
        trường bất động sản gặp khó khăn, tôi bắt
        đầu nghe thấy
        các nhận định “doanh nghiệp bất động sản phải giảm giá”; “doanh nghiệp bất động sản không chịu nghe lời,
        không chịu giảm...
        <strong
          class="text-M text-grey5 font-normal cursor-pointer"
        >xem thêm</strong>
      </p>
    </div>

    <router-link to="/news/1">
      <img src="@/assets/img/ImageRatio.png" alt="Meey News" />
    </router-link>

    <h3 class="bg-background1 px-4 h-[64px] flex items-center boxshadow-content">
      Dòng tiền bất động sản cuối năm 2022
      chuyển hướng ra sao, thời điểm nào để bắt đáy?
    </h3>
    <NameAndColor
      name="Thị Trường"
      color="bg-secondary3"
      class="tracking-wider text-grey7 uppercase text-S font-medium py-3 px-4 border-b"
    />
    <CardAction />
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

import AvatarWithName from "@/components/Avatar/AvatarWithName.vue";
import AvatarWithNameAndTime from "@/components/Avatar/AvatarWithNameAndTime.vue";
import CardAction from "@/components/ArticleCard/CardAction.vue";
import NameAndColor from "../Category/NameAndColor.vue";

export default {
  components: {
    AvatarWithName,
    AvatarWithNameAndTime,
    CardAction,
    NameAndColor,
  },
};
</script>