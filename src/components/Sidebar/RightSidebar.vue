<template>
  <div class="fixed right-[8rem]  top-14 mt-6">
    <!-- Title  -->
    <div class="flex items-center mb-6">
      <img srcset="@/assets/img/go_up.png 2x" alt="Meey News" class="mr-[10px] w-[20px] h-[12px]" />
      <h2 class="text-heading6 font-semibold">Xu hướng</h2>
    </div>
    <!-- Title  -->

    <ListRight />
    <ListRight />
    <ListRight />
    <ListRight />

  </div>
</template>

<script>
import ListRight from './StructureRight/ListRight.vue';
export default {
  components: {
    ListRight
  }
}
</script>