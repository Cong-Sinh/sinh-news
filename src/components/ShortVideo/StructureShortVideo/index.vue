<template>
    <div class="w-[16rem] relative inline-block bg-no-repeat rounded-xl mr-4  ">
        <img src="@/assets/img/Home1.png" alt="" class="w-full">
        <Title class="" :title="title" />

    </div>
</template>

<script>
import Title from '@/components/ShortVideo/StructureShortVideo/Title.vue'

export default {
    props: {
        title: {
            type: String,
            default: "",
            required: true
        }
    },
    components: {
        Title
    }
}
</script>

<style></style>