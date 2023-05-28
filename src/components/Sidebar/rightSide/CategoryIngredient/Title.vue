<template>
    <div class>
        <h3 class="w-[186px] mr-3 text-M text-background4 font-medium content-navbar-right mb-1" :title="title"> {{ title }}
        </h3>
        <div class="text-S text-grey3 font-normal flex">
            <p class="pr-1">đăng bởi </p>
            <p>{{ text }}</p>

        </div>

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
    },
}
</script>

<style></style>