<template>
    <router-link :to="`/feed/${item.code}`" class="flex" v-for="(item, index) in items" :key="index">
        <Title :title="item?.comment" :text="item?.publishedBy.fullname" />
        <img :src="item?.thumbnail.url" alt="Meey News" class="mb-6 w-[90px] h-[60px]" />
    </router-link>
</template>

<script>

import Title from '@/components/Sidebar/rightSide/CategoryIngredient/Title.vue'
export default {
    props: {
        items: {
            type: Array,
            default: [],
        }
    },
    components: {
        Title
    },
}
</script>

<style></style>