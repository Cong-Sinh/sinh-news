<template>
    <div class="flex items-center py-4 border-b-2 ">
        <img src="@/assets/img/avatarLoguot.png " alt="" class="pr-3">
        <p class="pr-[2rem] font-medium text-M text-grey8" :name="name">{{ name }}</p>
    </div>
    <div>
        <div class="flex items-center justify-between py-2">
            <div class="flex  items-center">
                <img src="@/assets/img/setting.png " alt="" class="w-3 h-3 mr-3">
                <p class="font-normal text-M text-grey8 pr-4">{{ setting }}</p>
            </div>
            <img srcset="@/assets/img/IconRight.png 2x" alt="" class="w-[6px] h-[10px]">
        </div>

        <div class="flex items-center py-2 justify-between">
            <div class="flex  items-center">
                <img src="@/assets/img/loguot.png " alt="" class="w-3 h-3 mr-3">
                <p class="font-normal text-M text-grey8 pr-4">{{ loguot }}</p>
            </div>
            <img srcset="@/assets/img/IconRight.png 2x" alt="" class="w-[6px] h-[10px]">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ""
        },
        setting: {
            type: String,
            default: ""
        },
        loguot: {
            type: String,
            default: ""
        }
    }
}
</script>

<style></style>