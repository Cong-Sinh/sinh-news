<template>
    <div class="flex items-center cursor-pointer relative">
        <img srcset="@/assets/img/share.png 2x" alt="Meey News" class="w-4 h-[13px]" />
        <h3 class="text-M text-grey7 ml-[10px]">{{ share }}</h3>


        <!-- <div class="absolute ml-[2rem] mb-[13rem] rounded-lg shadow-xl w-[14rem]  bg-white down">

            <div class="bg-background6 flex items-center rounded-lg p-2 m-2 ">
                <img srcset="@/assets/img/ShareFb.png 2x" alt="" class="ml-1 mr-2">
                <p class="text-background4 mr-3 text-M">Chia sẻ lên Facebook</p>
            </div>
            <div class=" flex items-center  p-2 m-2 ">
                <img srcset="@/assets/img/ShareZalo.png 2x" alt="" class="ml-1 mr-2">
                <p class="text-background4 mr-3 text-M">Chia sẻ lên Zalo</p>
            </div>
            <div class=" flex items-center  p-2 m-2 ">
                <img srcset="@/assets/img/ShareGB.png 2x" alt="" class="ml-1 mr-2">
                <p class="text-background4 mr-3 text-M">Sao chép liên kết</p>
            </div>


            <img srcset="@/assets/img/ShareDown.png 2x" alt="" class="m-auto mb-3">
        </div> -->

    </div>
</template>
<script>

export default {
    props: {
        share: {
            type: String,
            default: "",
            require: true,
        },
        src: {
            type: String,
            default: "",
            require: true
        }
    },
}
</script>

<style></style>