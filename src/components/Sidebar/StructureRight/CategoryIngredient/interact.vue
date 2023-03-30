<template>
    <p class="text-text4 text-Grey3 font-normal">{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style></style>