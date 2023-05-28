<template>
    <div class="flex items-center pt-6 pb-4 pl-4  max-[768px]:pt-4 ">
        <img srcset="@/assets/img/IconHomeDetail.png 2x" alt class="h-4 w[14px]  max-[768px]:hidden" />
        <img src="@/assets/img/logoHomeDetail.png" class="min-[768px]:hidden" />
        <div class="px-1 min-[768px]:hidden text-grey3 h-5">/</div>
        <img srcset="@/assets/img/IconLefteDetail.png 2x" alt class="mx-3 w-1 h-[10px] max-[768px]:hidden" />
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