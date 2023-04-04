<template>
    <div class="flex items-center mb-6">
        <img srcset="@/assets/img/go_up.png 2x" alt="Meey News" class="mr-[10px] w-[20px] h-[12px]" />
        <h2 class="text-heading6 font-semibold" :src="[src]" :title="title">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        src: {
            type: String,
            default: "",
        }
    }
}
</script>

<style></style>