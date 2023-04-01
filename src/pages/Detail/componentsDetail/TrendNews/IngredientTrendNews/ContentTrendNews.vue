<template>
    <h3 class="font-semibold text-text1 text-Grey8 pb-2" :title="title">{{ title }}</h3>

    <p class="text-text2 font-normal text-Grey6" :content="content"> {{ content }}</p>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
            required: true
        },
        content: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style></style>