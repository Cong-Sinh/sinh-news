<template>
  <div class="flex justify-around items-center h-[48px] ">
    <vote :vote="vote" />
    <router-link :to="`/feed/${article.code}`">
      <comment :comment="comment" />
    </router-link>
    <share class="cursor-pointer " share="Chia Sẻ" :article="article" />
  </div>
</template>

<script>
import vote from './CardIngredient/Voted.vue';
import share from './CardIngredient/Shared.vue';
import comment from './CardIngredient/Comment.vue';
export default {
  props: {
    comment: {
      type: String,
      default: "",
      required: true
    },
    article: {
      type: String,
      default: "",
      require: true,
    },
    vote: {
      type: String,
      default: "",
      require: true,
    }

  },
  components: {
    vote,
    share,
    comment
  },
}
</script>