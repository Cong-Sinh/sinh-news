<template>
    <p class="pl-1 text-text-2 text-Grey8 py-3 font-normal" :title="title">
        {{ title }}

    </p>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
            riquery: true
        }
    }
}
</script>

<style></style>