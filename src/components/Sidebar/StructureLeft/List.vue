<template>
    <div>
        <div class="flex items-center w-[220px] mr-[10px] h-10">

            <span color="bg-[#8BAFE5]" class="bg-[#FD867E] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <!-- <NameAndColor name="Thị Trường" class="py-3" /> -->
            <router-link to="/loading">hiii</router-link>
        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#8BAFE5] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Dự án" class="py-3" />
        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#9F6DBE] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Quy hoạch" class="py-3" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#E5A62C] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Phân tích báo cáo" class="py-3" />
        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#827AE2] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Chuyên gia nhận định" class="py-3" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#CE58A6] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Kiến thức" class="py-3" />
        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#2FBBC3] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Pháp lý" class="py-3" />
        </div>
        <div class="flex items-center w-[220px] h-10">
            <span class="bg-[#55AC82] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Phong thủy" class="py-3" />
        </div>
        <div class="flex items-center w-[220px] h-10 mb-[238px]">
            <span class="bg-[#DE782D] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
            <NameAndColor name="Giải trí" class="py-3" />
        </div>
    </div>
</template>

<script>
import NameAndColor from "@/components/Category/NameAndColor.vue"
export default {
    components: { NameAndColor },
}
</script>

<style></style>