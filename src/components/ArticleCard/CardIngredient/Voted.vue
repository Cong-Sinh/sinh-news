<template>
    <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/up.png 2x" :height="height" :width="width" alt="Meey News" class="w-4 h[4]" />
        <div class="flex items-center  px-3">
            <h3 class="text-M text-grey7 mr-1 ">{{ vote }}</h3>
            <p class="text-M text-grey7">vote</p>
        </div>
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