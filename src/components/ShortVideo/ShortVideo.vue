<template>
  <div class="mt-10 pl-4 pb-4 bg-white rounded-lg shadow">
    <div class="flex items-center pl-[18px] py-3">
      <img srcset="@/assets/img/video.png 2x" alt class="mr-[10px] w-[15px] h-[10px]" />
      <h2 class="text-grey8 text-heading5 font-semibold">Video ngắn</h2>
    </div>
    <router-link to="/shortVideo">
      <swiper
        :slides-per-view="2"
        :space-between="16"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
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
    </router-link>
  </div>
</template>

<script>
import index from '@/components/ShortVideo/StructureShortVideo/index.vue';
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
  methods: {},
};
</script>




<style>
.swiper-button-next {
  width: 50px;
  height: 50px;
  background-color: #f6f6f6;
  border-radius: 50px;
  color: #9a9a9a;
}

.swiper-button-prev {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  color: #9a9a9a;
  background-color: #f6f6f6;
}
</style>