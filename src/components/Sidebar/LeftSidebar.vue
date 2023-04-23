<template>
  <div class="font-font col-span-3 fixed mt-14 pl-6 py-8 border-r border-solid border-black">
    <div class="flex items-center">
      <img srcset="@/assets/img/IconHome.png 2x" alt="Meey News" class="w-[15px] h-[14px] mr-[10px]" />
      <h3>Trang chủ</h3>
      <img srcset="@/assets/img/IconRight.png" alt="Meey News" class="w-[5px] h-[9px] ml-4" />
    </div>
    <h3 class="mt-8 mb-4 text-grey6">Tất cả chuyên mục</h3>
    <CategoriesList :items="categoriesList" />

    <div class="text-SM  text-grey7 mt-[15rem]">
      <p class="py-1">Về Meey Share</p>
      <p class="py-1">Trợ giúp</p>
      <p class="py-1">Điều khoản sử dụng</p>
      <p class="py-1">Chính sách bảo mật</p>
      <p class="py-1">Một sản phẩm của Meey Group</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CategoriesList from './leftSide/List.vue';
export default {
  created() {
    this.getLefSideBar()
  },
  mounted() {
    // console.log(
    //   this.getLefSideBar, '------------------------------ getLefSideBar'
    // );
  },
  computed: {
    ...mapGetters('feed', {
      categoriesList: 'categoriesList',
    }),
  },
  methods: {
    ...mapActions('feed', ['getLefSideBar']),
  },
  components: {
    CategoriesList
  }
}
</script>