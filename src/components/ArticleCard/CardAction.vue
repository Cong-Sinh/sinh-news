<template>
  <div class="flex justify-around items-center h-[48px] ">
    <vote vote="278" />
    <comment comment="bình luận" />
    <share share="Chia Sẻ" />
  </div>
</template>

<script>
import vote from './CardIngredient/Voted.vue';
import share from './CardIngredient/Shared.vue';
import comment from './CardIngredient/Comment.vue';
export default {
  components: {
    vote,
    share,
    comment
  }
}
</script>