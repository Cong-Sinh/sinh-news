<template>
    <p class=" bottom-4 text-white font-medium px-3  z-20 absolute drop-shadow-lg">{{ title }}</p>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
            required: true
        },
    }
}
</script>

<style></style>

