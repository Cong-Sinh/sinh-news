<template>
    <img src="@/assets/img/User.png" alt="Meey News" class="w-4 h-4" />
    <button class="ml-[6px] text-Primary5 mr-[36px]">{{ title }}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
            riqueri: true
        },
    },
}
</script>

<style></style>