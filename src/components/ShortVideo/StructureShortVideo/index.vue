<template>
    <div class="w-[16rem] relative inline-block h-[22rem] bg-no-repeat rounded-xl mr-4  ">
        <img src="@/assets/img/Home1.png" alt="" class="">

        <Title class="" :title="title" />

    </div>
</template>

<script>
import Title from '@/components/ShortVideo/StructureShortVideo/title.vue'

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