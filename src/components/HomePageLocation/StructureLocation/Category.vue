<template>
    <div class="flex justify-between pt-4  ">
        <div class="">
            <h3 class="text-grey8  font-semibold  leading-6" :title="title">{{ title }}
            </h3>
            <p class="text-grey5 text-M" :interact="interact">{{ interact }}</p>
        </div>
        <img srcset="@/assets/img/locationImg1png.png 2x" alt="">
    </div>
</template>

<script>
export default {
    props: {
        title: {
            name: String,
            default: "",
            require: true
        },
        interact: {
            name: String,
            default: "",
            require: true
        }

    },
}
</script>

<style></style>