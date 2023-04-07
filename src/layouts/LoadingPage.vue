<template>
    <div class="grid grid-cols-12 bg-background1 font-font">
        <Header />
        <LeftSidebar />

        <div class=" col-span-5 col-start-4 mt-14 pt-6">
            <div class="bg-white rounded-lg mb-5 shadow">
                <div class="p-4 flex items-center">
                    <img src="@/assets/img/AvatarLoading.png" alt="" class="pr-1">
                    <span class="w-[11rem] h-3 bg-background1"></span>
                </div>
                <div class="p-4 ">
                    <div class=" mb- h-[10px] bg-background1"></div>
                    <div class=" mb- h-[10px] bg-background1 mt-2"></div>
                </div>
                <div class="bg-background1 h-[18rem]"></div>
                <div class=" ml-[18px] border-b-[1px] flex items-center ">
                    <span class=" bg-background1 w-[7rem] h-3  rounded-[2px] mr-[10px]"></span>
                    <NameAndColor name="Thị Trường" class="py-3 " />
                </div>
            </div>
            <div class="bg-white rounded-lg mb-5 shadow">
                <div class="p-4 flex items-center">
                    <img src="@/assets/img/AvatarLoading.png" alt="" class="pr-1">
                    <span class="w-[11rem] h-3 bg-background1"></span>
                </div>
                <div class="p-4 ">
                    <div class=" mb- h-[10px] bg-background1"></div>
                    <div class=" mb- h-[10px] bg-background1 mt-2"></div>
                </div>
                <div class="bg-background1 h-[18rem]"></div>
                <div class=" ml-[18px] border-b-[1px] flex items-center ">
                    <span class=" bg-background1 w-[7rem] h-3  rounded-[2px] mr-[10px]"></span>
                    <NameAndColor name="Thị Trường" class="py-3 " />
                </div>
            </div>
            <CardAction />
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import LeftSidebar from '@/components/Sidebar/LeftSidebar.vue';
export default {
    components: {
        Header,
        LeftSidebar
    }
}
</script>

<style></style>