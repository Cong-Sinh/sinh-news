<template>
    <p class="text-M text-center" :vote="vote">{{ vote }}</p>
    <p class="text-primary5 text-M " :title="title" :share="share" :class="[colorClass]">{{ title }}</p>
    <p class=" font-normal text-M text-center" :comment="comment">{{ comment }}</p>
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