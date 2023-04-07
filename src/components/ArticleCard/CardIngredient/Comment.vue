<template>
    <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/comment.png 2x" alt="Meey News" class="w-[15px] h-[15px]" />
        <h3 class="text-M text-grey7 ml-[10px]">{{ comment }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            type: String,
            default: "",
            require: true,
        },
        src: {
            type: String,
            default: "",
            require: true
        }
    },
}
</script>

<style></style>