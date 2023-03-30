<template>
    <div class="flex items-center cursor-pointer">
        <img srcset="@/assets/img/share.png 2x" alt="Meey News" class="w-4 h-[13px]" />
        <h3 class="text-text2 text-Grey7 ml-[10px]">{{ share }}</h3>
    </div>
</template>
<script>
export default {
    props: {
        share: {
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