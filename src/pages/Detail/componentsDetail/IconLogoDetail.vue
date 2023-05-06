<template>
    <div class="flex items-center pt-6 pb-4 pl-4">
        <img srcset="@/assets/img/IconHomeDetail.png 2x" alt class="h-4 w[14px]" />
        <img srcset="@/assets/img/IconLefteDetail.png 2x" alt class="mx-3 w-1 h-[10px]" />
        <p class="uppercase text-grey4 text-M font-normal">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
            require: true
        }
    }
}
</script>

<style></style>