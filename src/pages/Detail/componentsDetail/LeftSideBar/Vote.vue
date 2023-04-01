<template>
    <p class="text-text2 text-center" :vote="vote">{{ vote }}</p>
    <p class="text-Primary5 text-text2 " :title="title">{{ title }}</p>
    <p class="text-Grey8 font-normal text-text2 text-center" :comment="comment">{{ comment }}</p>
</template>

<script>
export default {
    props: {
        vote: {
            type: Number,
            default: "",
            requiry: true
        },
        title: {
            type: String,
            default: "",
            requiry: true
        },
        comment: {
            type: Number,
            default: "",
            requiry: true
        },

    }
}
</script>

<style></style>