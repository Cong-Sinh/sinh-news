<template>
  <div class="flex items-center">
    <AvatarWithName
      :src="src"
      :name="name"
      :width="width"
      :height="height"
      :titleClass="titleClass"
    />
    <img srcset="@/assets/img/Icon..png 2x" alt="Meey News" class="w-1 h-1 mx-2" />
    <p class="text-Grey5 text-text4">{{time}}</p>
  </div>
</template>
<script>
import AvatarWithName from "@/components/Avatar/AvatarWithName.vue";

export default {
  components: {
    AvatarWithName,
  },
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
    width: {
      type: String,
      default: "w-6",
    },
    height: {
      type: String,
      default: "h-6",
    },
    time: {
      type: String,
      default: "",
    },
    titleClass: {
      type: String,
      default: "",
    },
  },
};
</script>