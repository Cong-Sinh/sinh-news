<template>
    <div class="text-grey8 font-normal mb-[15rem]">
        <div v-for="(item, index) in items" :key="index"
            class="flex items-center font-semibold w-[220px] h-10 cursor-pointer" @click.prevent="onPushParamsToUrl(item)">
            <NameAndColor :name="item.name"
                :class="['hover:bg-gray-300 py-3 rounded-sm font-normal w-full pl-1', categorySlug === item.slug ? 'bg-gray-300' : '']"
                :color="`bg-[${item.css.borderColor}]`" />
        </div>
    </div>
</template>
  
<script>
import NameAndColor from '@/components/Category/NameAndColor.vue';
export default {
    props: {
        items: {
            type: Array,
            default: [],
        },
    },
    components: { NameAndColor },
    computed: {
        categorySlug() {
            return this.$route?.query?.category;
        },
    },
    methods: {
        onPushParamsToUrl(item) {
            console.log(item, 'item');
            this.$router.push({ path: '/', query: { category: item.slug } });
        },
    },
};
</script>
  
<style></style>