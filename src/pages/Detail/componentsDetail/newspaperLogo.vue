<template>
    <div class="flex items-center">
        <img :src="src" class="w-4 h-4" />
        <p class="px-2 text-M font-normal text-grey6" :title="title">{{ title }}</p>
        <img src="@/assets/img/IconLefteDetail.png" alt class="w-1 h[6px]" />

    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
            required: true
        },
        src: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style></style>