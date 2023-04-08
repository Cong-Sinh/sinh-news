<template>
    <p class="pt-2 pb-4 text-background4 font-normal text-M "> {{ title }}

    </p>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            Default: "",
        }
    }
}
</script>

<style></style>