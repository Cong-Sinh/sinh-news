<template>
    <div class="flex mb-4 items-center">
        <img src="@/assets/img/go_up.png" alt="" class="mr-3">
        <h3 class="text-xl text-grey8 font-semibold">Tin Xu Hướng</h3>
    </div>
    <router-link :to="`/feed/${item.code}`" v-for="(item, index) in items" :key="index" class="flex pb-6  ">
        <img :src="item?.thumbnail.url" alt="" class="h-[4.5rem] max-w-[6.75rem] ">
        <div class="pl-4 text-sm items-center flex text-background4">
            <ContentTrendNews :title="item?.title" />
            <!-- <ContentTrendNews content="Nga cáo buộc các nước phương Tây, đặc biệt là Mỹ,
                đang nỗ lực để ngăn Ukraine bước vào bàn đàm phán với Moscow." /> -->
        </div>
    </router-link>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentTrendNews from './IngredientTrendNews/ContentTrendNews.vue';
export default {
    props: {
        items: {
            type: Array,
            default: [],
        },
    },
    components: {
        ContentTrendNews
    },
    computed: {
        ...mapGetters('feed', {
            articleDetail: 'articleDetail',
        }),
    },
}
</script>

<style></style>