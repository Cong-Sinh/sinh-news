<template>
  <div class="bg-white rounded-lg mb-5 shadow">
    <div class="px-4 pt-4 pb-2">
      <AvatarWithNameAndTime src="@/assets/img/avatar.png 2x" name="Ngô Thanh Thảo" time="15 phút trước"
        titleClass="text-sm" class="mb-3" />
      <div class="text-background4 text-M font-normal leading-5 line-clamp-1">{{ article.summary }}</div>
    </div>

    <router-link :to="`/feed/${article.code}`">
      <img :src="article.thumbnail?.url" alt="Meey News" />
      <h3 class="bg-background1 px-4 h-[64px] flex items-center boxshadow-content">{{ article.title }}</h3>
    </router-link>

    <NameAndColor name="Thị Trường" color="bg-secondary3"
      class="tracking-wider text-grey7 uppercase text-S font-medium py-3 px-4 border-b" />
    <CardAction />
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

import AvatarWithName from '@/components/Avatar/AvatarWithName.vue';
import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import CardAction from '@/components/ArticleCard/CardAction.vue';
import NameAndColor from '../Category/NameAndColor.vue';

export default {
  props: {
    article: {
      type: Object,
      default: {},
      require: true,
    },
  },

  components: {
    AvatarWithName,
    AvatarWithNameAndTime,
    CardAction,
    NameAndColor,
  },
};
</script>