<template>
  <div class="flex items-center">
    <img :src="src" alt="Meey News" :class="['mr-3, rounded-xl', height, width]" />
    <p :class="['ml-3']">{{ name }}</p>
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
    class: {
      type: String,
      default: "",
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
    src: {
      type: Object,
      default: {}
    }
  },
};
</script>