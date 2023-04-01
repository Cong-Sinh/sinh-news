<template>
  <header class="w-full font-font h-[56px] grid grid-cols-12 items-center boxshadow fixed bg-white z-10">
    <!-- top-header -->
    <!-- logo  -->
    <div class="col-span-3">
      <img srcset="../assets/img/Logo_Meey_News.png 2x" alt="Meey News" class="ml-6" />
    </div>
    <!-- logo  -->

    <!-- search  -->
    <div class="flex items-center  col-span-5  bg-Background1 h-10 rounded-[40px] my-2">
      <img srcset="../assets/img/SearchBar.png 2x" alt="Meey News" class="w-4 h-4 ml-[15px] mr-[6px] my-3" />
      <input type="text" placeholder="Tìm kiếm..." class="bg-Background1 outline-none w-[538px] h-[20px]" />
    </div>
    <!-- search  -->

    <!-- user  -->
    <div class="flex items-center ml-auto col-span-4">
      <login title="Đăng nhập" />
      <!-- <LogUot /> -->
    </div>
    <!-- user  -->
    <!-- top-header -->
  </header>
</template>

<script>

import AvatarHeader from '@/components/Header/AvatarHeader.vue'
import Login from '@/components/Header/AvatarLogin/Login.vue'
import LogUot from '@/components/Header/AvatarLogin/LogUot.vue'
export default {
  components: {
    AvatarHeader,
    Login,
    LogUot
  }
}
</script>