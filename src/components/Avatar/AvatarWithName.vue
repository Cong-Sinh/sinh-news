<template>
  <div class="flex items-center">
    <img srcset="@/assets/img/avatar.png 2x" alt="Meey News" :class="['mr-1']" />
    <p :class="titleClass">{{ name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
      required: true,
    },
    name: {
      type: String,
      default: "tadaaa",
      required: true,
    },
    titleClass: {
      type: String,
      default: "",
    },
  },
};
</script>