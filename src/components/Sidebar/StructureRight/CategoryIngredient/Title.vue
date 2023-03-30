<template>
    <div class>
        <h3 class="w-[186px] mr-3 text-text2 text-Background4 content-navbar-right mb-1"> {{ title }}</h3>
        <p class="text-text4 text-Grey3 font-normal">1.284 tương tác</p>
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
    }
}
</script>

<style></style>