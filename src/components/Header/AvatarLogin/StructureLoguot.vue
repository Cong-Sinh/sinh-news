<template>
    <div class=" flex items-center py-4 border-b-2 cursor-pointer">
        <img src="@/assets/img/avatarLoguot.png " alt="" class="pr-3 max-[760px]:w-9">
        <p class="pr-[2rem] font-medium text-M text-grey8" :name="name">{{ name }}</p>
    </div>
    <div class="text-sm">
        <div class="flex items-center justify-between py-2 cursor-pointer">
            <div class="flex  items-center">
                <img src="@/assets/img/setting.png " alt="" class="w-3 h-3 mr-3">
                <p class="font-normal text-M text-grey8 pr-4 max-[760px]:pr-0 ">{{ setting }}</p>
            </div>
            <img srcset="@/assets/img/IconRight.png 2x" alt="" class="w-[6px] h-[10px]">
        </div>

        <div class="flex items-center py-2 justify-between cursor-pointer">
            <div class="flex  items-center">
                <img src="@/assets/img/log  uot.png " alt="" class="w-3 h-3 mr-3">
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