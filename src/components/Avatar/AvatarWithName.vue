<template>
  <div class="flex items-center">
    <img srcset="@/assets/img/avatar.png 2x" alt="Meey News" :class="['mr-1', height, width]" />
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
      default: "",
      required: true,
    },
    titleClass: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "w-6",
    },
    height: {
      type: String,
      default: "h-6",
    },
  },
};
</script>