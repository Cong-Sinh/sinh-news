<template>
  <div class="bg-white rounded-lg mb-5 shadow w-full max-[760px]:mb-2">
    <div class="px-4 pt-4 pb-2 max-[760px]:text-sm">
      <AvatarWithNameAndTime
        :src="article.publishedBy.avatar.url"
        :name="article.publishedBy.fullname"
        :time="article.updatedAt"
        titleClass="text-sm"
        class="mb-3"
      />
      <div class="text-background4 text-M font-normal leading-5 line-clamp-1 max-[760px]:text-sm">
        {{ article.summary }}
      </div>
    </div>

    <router-link :to="`/feed/${article.code}`">
      <img class="flex mx-auto" :src="article.thumbnail?.url" alt="Meey News" />
      <h3 class="bg-background1 px-4 h-[4rem] flex items-center line-clamp-2">{{ article.title }}</h3>
    </router-link>

    <NameAndColor
      :name="article?.categories?.[0]?.name"
      color="bg-secondary3"
      class="tracking-wider text-grey7 uppercase text-S font-medium py-3 px-4 border-b max-[760px]:text-xs"
    />
    <CardAction
      :comment="article?.interaction?.totalComments"
      :vote="article?.interaction?.totalVotes"
      :article="article"
      :title="title"
    />
  </div>
</template>
<script>
// import { RouterLink } from 'vue-router';

import AvatarWithName from '@/components/Avatar/AvatarWithName.vue';
import AvatarWithNameAndTime from '@/components/Avatar/AvatarWithNameAndTime.vue';
import CardAction from '@/components/ArticleCard/CardAction.vue';
import NameAndColor from '../Category/NameAndColor.vue';

export default {
  props: {
    article: {
      type: Array,
      default: [],
      require: true,
    },
    name: {
      type: Array,
      default: [],
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
