<template>
    <div class>
        <h3 class="w-[186px] mr-3 text-M text-background4 content-navbar-right mb-1"> {{ title }}</h3>
        <p class="text-S text-grey3 font-normal">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
            required: true,
        },
        src: {
            type: String,
            default: "",
            required: true,
        },
        text: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style></style>