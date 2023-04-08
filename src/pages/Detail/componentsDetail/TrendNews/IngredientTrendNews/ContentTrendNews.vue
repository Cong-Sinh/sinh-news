<template>
    <h3 class="font-semibold text-Base text-grey8 pb-2" :title="title">{{ title }}</h3>
    <p class="text-M font-normal text-grey6" :content="content"> {{ content }}</p>
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