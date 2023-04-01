<template>
    <p class="pt-2 pb-3 text-Grey8 text-text2 font-normal" :comment="comment">{{ comment }}</p>
</template>

<script>
export default {
    props: {
        comment: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style></style>