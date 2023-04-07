<template>
    <div class=" pl-4 pb-4 bg-white rounded-lg shadow">
        <div class="flex items-center pl-[18px] py-3">
            <img srcset="@/assets/img/video.png 2x" alt class="mr-[10px] w-[15px] h-[10px]" />
            <h2 class="text-grey8 text-heading5 font-semibold">Video ngắn</h2>
        </div>

        <!-- <div class="flex">
            <index title="Dòng tiền bất động sản cuối năm 2022 sẽ ra sao" />
            <index title="Dòng tiền bất động sản cuối năm 2022 sẽ ra sao" />
            <index title="Dòng tiền bất động sản cuối năm 2022 sẽ ra sao" />
        </div> -->

        <swiper :slides-per-view="2" :space-between="16" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <index title="Dòng tiền bất động sản cuối năm 2022 sẽ ra sao" />
            </swiper-slide>
            <swiper-slide>
                <index title="Dòng tiền bất động sản cuối năm 2022 sẽ ra sao" />
            </swiper-slide>
            <swiper-slide>
                <index title="Dòng tiền bất động sản cuối năm 2022 sẽ ra sao" />
            </swiper-slide>
        </swiper>



    </div>
</template>

<script>
import index from '@/components/ShortVideo/StructureShortVideo/index.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export default {
    components: {
        index,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {

    }
}


</script>



<style>
.swiper-button-next {
    width: 44px;
    height: 44px;
    background-color: #F6F6F6;
    border-radius: 50px;
    color: #9A9A9A
}
</style>