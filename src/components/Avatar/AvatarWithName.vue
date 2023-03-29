<template>
  <div class="flex items-center">
    <img srcset="@/assets/img/avatar.png 2x" alt="Meey News" :class="['mr-1', width, height]" />
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
    width: {
      type: String,
      default: "w-6",
    },
    height: {
      type: String,
      default: "h-6",
    },
    titleClass: {
      type: String,
      default: "",
    },
  },
};
</script>