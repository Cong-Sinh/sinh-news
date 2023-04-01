<template>
    <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/up.png 2x" :height="height" :width="width" alt="Meey News" class="w-4 h[4]" />
        <h3 class="text-text2 text-Grey7 px-3 ">{{ vote }}</h3>
        <img srcset="@/assets/img/dow.png 2x" :height="height" :width="width" alt="Meey News" class="w-4 h[4]" />
    </div>
</template>

<script>
export default {
    props: {
        vote: {
            type: String,
            default: "",
            require: true,
        },
        src: {
            type: String,
            default: "",
            require: true
        },
        height: {
            type: String,
            default: "",
            require: true
        },
        width: {
            type: String,
            default: "",
            require: true
        }
    },
}
</script>

<style></style>