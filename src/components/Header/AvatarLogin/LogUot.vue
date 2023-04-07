<template>
    <div class="flex items-center">
        <img src="@/assets/img/UserLogin.png" alt="Meey News" class="w-9 h-9" />
        <img srcset="@/assets/img/IconUserDown.png 2x" alt="" class="ml-[6px] text-primary5 mr-[36px]">
    </div>
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