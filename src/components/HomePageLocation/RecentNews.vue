<template>
    <div class="p-4 bg-white rounded-lg shadow">
        <p class="text-grey5 text-S">TIN TỨC GẦN BẠN</p>
        <div class="flex items-center border-b-[2px] pb-4 ">
            <img srcset="@/assets/img/location.png" alt="" class="pr-3 w-6 h-4">
            <p class="text-grey8 text-heading7 font-semibold  ">Đống Đa, Hà Nội</p>
        </div>

        <CategoryVue title="Vì sao bất động sản quan trọng với nền kinh tế?" interact="1234 tương tác" />
        <CategoryVue title="Vì sao bất động sản quan trọng với nền kinh tế?" interact="1234 tương tác" />
        <CategoryVue title="Vì sao bất động sản quan trọng với nền kinh tế?" interact="1234 tương tác" />
        <CategoryVue title="Vì sao bất động sản quan trọng với nền kinh tế?" interact="1234 tương tác" />




    </div>
</template>

<script>
import CategoryVue from '@/components/HomePageLocation/StructureLocation/Category.vue'
export default {
    components: {
        CategoryVue
    }
}
</script>

<style></style>
