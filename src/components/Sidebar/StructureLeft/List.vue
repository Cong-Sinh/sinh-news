<template>
    <div class="text-grey8 font-normal  ">
        <div class="flex items-center font-semibold  w-[220px] mr-[10px] h-10">
            <NameAndColor name="Thị Trường" class="py-3 font-bold    " color="bg-[#FD867E]" />
            <img src="@/assets/img/IconRight.png" alt="" class=" h-2.5 w-1.5 ml-3">
        </div>
        <div class="flex items-center w-[220px]  h-10">
            <NameAndColor name="Dự án" class="py-3 font-normal " color="bg-[#8BAFE5]" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <NameAndColor name="Quy hoạch" class="py-3 font-normal " color="bg-[#9F6DBE]" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <NameAndColor name="Phân tích báo cáo " class="py-3 font-normal " color="bg-[#E5A62C]" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <NameAndColor name="Chuyên gia nhận định" class="py-3 font-normal " color="bg-[#827AE2]" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <NameAndColor name="Kiến thức" class="py-3 font-normal " color="bg-[#CE58A6]" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <NameAndColor name="Pháp lý" class="py-3 font-normal " color="bg-[#2FBBC3]" />

        </div>
        <div class="flex items-center w-[220px] h-10">
            <NameAndColor name="Phong thủy" class="py-3 font-normal " color="bg-[#55AC82]" />

        </div>
        <div class="flex items-center w-[220px] h-10 mb-[238px]">
            <NameAndColor name="Giải trí" class="py-3 font-normal " color="bg-[#DE782D]" />

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