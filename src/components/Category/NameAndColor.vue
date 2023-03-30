<template>
    <div class="flex  items-center">
        <span v-bind="color"></span>
        <h3 :class="name">{{ name }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        color: ""
    },
    props: {
        name: {
            type: String,
            default: "",
            require: true,
        }
    }
}
</script>

<style></style>