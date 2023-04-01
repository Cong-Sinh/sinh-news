<template>
    <div class="flex items-center  py-[20px]">
        <img srcset="@/assets/img/go_up.png 2x" alt="" class="w-[20px] h-3 mr-3">
        <h2 class="text-heading6 font-semibold text-Grey8">Tin xu hướng</h2>
    </div>

    <div class="flex pb-6">
        <img srcset="@/assets/img/ImageDetail.png 2x" alt="">
        <div class="pl-4">

            <ContentTrendNews title="  Nga nêu lý do Ukraine không đàm phán hòa
                                    bình
                                    chấm dứt xung đột" />

            <ContentTrendNews content="Nga cáo buộc các nước phương Tây, đặc biệt là Mỹ,
                                            đang nỗ lực để ngăn Ukraine bước vào bàn đàm phán với Moscow." />
        </div>
    </div>
</template>

<script>
import ContentTrendNews from './IngredientTrendNews/ContentTrendNews.vue';
export default {
    components: {
        ContentTrendNews
    }
}
</script>

<style></style>