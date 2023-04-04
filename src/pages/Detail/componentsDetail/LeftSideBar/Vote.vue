<template>
    <p class="text-text2 text-center" :vote="vote">{{ vote }}</p>
    <p class="text-Primary5 text-text2 " :title="title" :share="share" :class="[colorClass]">{{ title }}</p>
    <p class=" font-normal text-text2 text-center" :comment="comment">{{ comment }}</p>
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
        colorClass: {
            type: String,
            default: ""
        },
        share: {
            type: Number,
            default: ""
        }

    }
}
</script>

<style></style>