<template>
    <div class="font-normal">
        <p class="text-M text-center" :colorClass="['text-background4', colorClass]" :vote="vote">{{ vote }}</p>
        <p class=" font-normal text-M text-center " :colorClass="['text-background4', colorClass]" :comment="comment">{{
            comment }}</p>
        <p class="text-primary5 text-M  " :title="title" :share="share" :class="[colorClass]">{{ title }}</p>
    </div>
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