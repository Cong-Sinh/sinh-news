<template>
  <div class="font-font col-span-3 fixed mt-14 pl-6 py-8 border-r-1 border-solid border-black">
    <div class="flex items-center">
      <img srcset="@/assets/img/IconHome.png 2x" alt="Meey News" class="w-[15px] h-[14px] mr-[10px]" />
      <router-link to="/">Trang chủ</router-link>
      <img srcset="@/assets/img/IconRight.png" alt="Meey News" class="w-[5px] h-[9px] ml-4" />
    </div>
    <h3 class="mt-8 mb-4 text-grey6">Tất cả chuyên mục</h3>
    <CategoriesList :items="categoriesList" />

    <ul class="text-SM  text-grey7 mt-[15rem]">
      <li class="py-1"><a href="/"> Về Meey Share</a></li>
      <li class="py-1"><a href="/"> Trợ giúp</a></li>
      <li class="py-1"><a href="/">Điều khoản sử dụng</a> </li>
      <li class="py-1"><a href="/">Chính sách bảo mật</a> </li>
      <li class="py-1"><a href="/">Một sản phẩm của Meey Group</a> </li>
    </ul>
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