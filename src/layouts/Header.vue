<template>
  <header
    class="w-full font-font h-[56px] grid grid-cols-12 items-center boxshadow fixed bg-white z-10"
  >
    <!-- top-header -->
    <!-- logo  -->
    <div class="col-span-3">
      <router-link to="/">
        <img srcset="../assets/img/Logo_Meey_News.png 2x" alt="Meey News" class="ml-6" />
      </router-link>
    </div>
    <!-- logo  -->

    <!-- search  -->
    <div class="flex items-center col-span-5 bg-background1 h-10 rounded-[40px] my-2">
      <img
        srcset="../assets/img/SearchBar.png 2x"
        alt="Meey News"
        class="w-4 h-4 ml-[15px] mr-[6px] my-3"
      />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        class="bg-background1 outline-none w-[538px] h-[20px]"
      />
    </div>
    <!-- search  -->

    <!-- user  -->
    <div class="flex items-center ml-auto col-span-4">
      <login title="Đăng nhập" class="group-hover:block" />

      <!-- <div class="absolute group top-0 right-0 ">
        <LogUot class="ml-[10rem] mb-1 mt-2" />
        <div class="mr-3 px-3 rounded-lg  bg-white shadow ">
          <StructureLoguot name="Nguyễn Tuấn Anh" setting="Quản lý thông tin cá nhân" loguot="Đăng xuât" />
        </div>
      </div>-->
    </div>
    <!-- user  -->

    <!-- top-header -->
  </header>
</template>

<script>
import AvatarHeader from "@/components/Header/AvatarHeader.vue";
import Login from "@/components/Header/AvatarLogin/Login.vue";
import LogUot from "@/components/Header/AvatarLogin/LogUot.vue";
import StructureLoguot from "@/components/Header/AvatarLogin/StructureLoguot.vue";
export default {
  components: {
    AvatarHeader,
    Login,
    LogUot,
    StructureLoguot,
  },
};
</script>