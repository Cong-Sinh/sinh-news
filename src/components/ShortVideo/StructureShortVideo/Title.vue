<template>
    <p class=" bottom-[1rem] text-white font-medium px-3  z-20 absolute drop-shadow-lg">{{ title }}</p>
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

