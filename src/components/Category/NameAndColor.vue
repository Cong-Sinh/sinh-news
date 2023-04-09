<template>
    <div class=" flex items-center ">
        <span :class="['w-3 h-3 border rounded-sm mr-2.5', color]"></span>
        <div class="flex  items-center">
            <!-- <span v-bind="color"></span> -->
            <p :class="['', name]">{{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: "",
            require: true,
        },
        color: {
            type: String,
            default: "",
        }
    }
}
</script>

<style></style>