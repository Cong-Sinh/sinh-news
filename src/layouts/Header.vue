<template>
  <header class="w-full font-font h-[56px] grid grid-cols-12 items-center fixed max-[760px]:sticky bg-white z-10">
    <!-- top-header -->
    <!-- logo  -->
    <div class="col-span-3">
      <router-link to="/">
        <img srcset="../assets/img/Logo_Meey_News.png 2x" alt="Meey News" class="ml-6 max-[760px]:w-[100px]" />
      </router-link>
    </div>
    <!-- logo  -->

    <!-- search  -->
    <div class="flex items-center col-span-5 bg-background1 h-10 rounded-[40px] my-2 max-[760px]:hidden">
      <img srcset="../assets/img/SearchBar.png 2x" alt="Meey News" class="w-4 h-4 ml-[15px] mr-[6px] my-3" />
      <input type="text" placeholder="Tìm kiếm..." class="bg-background1 outline-none w-[538px] h-[20px]" />
    </div>
    <!-- search  -->

    <!-- user  -->
    <transition>
      <div class="flex items-center col-span-4 ml-auto" v-click-outside="hide">
        <!-- <login title="Đăng nhập" class="group-hover:block none " /> -->
        <div
          class="inline-block absolute group right-0 h-[41px] max-[760px]:right-2 max-[760px]:bottom-[-90px] w-[246px] max-[760px]:h-[140px]"
        >
          <LogUot @click="toggle" class="ml-[11rem] mb-1 mt-2 cu`rsor-pointer" />

          <div v-if="opened" class="mr-3 px-3 mt-[.5rem] rounded-lg bg-white shadow w-full">
            <!-- <StructureLoguot name="Nguyễn Tuấn Anh" setting="Quản lý thông tin cá nhân" loguot="Đăng xuât" /> -->
          </div>
        </div>
      </div>
    </transition>
    <!-- user  -->

    <!-- top-header -->
  </header>
</template>

<script>
import AvatarHeader from '@/components/Header/AvatarHeader.vue';
import LogUot from '@/components/Header/AvatarLogin/LogUot.vue';
// import StructureLoguot from '@/components/Header/AvatarLogin/StructureLoguot.vue';
import vClickOutside from 'click-outside-vue3';

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    AvatarHeader,
    LogUot,
    // StructureLoguot,
  },
  data() {
    return {
      showFlag: false,
      opened: false,
    };
  },
  watch: {
    opened: function (val) {
      if (val) {
        this.showFlag = false;
      }
    },
  },
  methods: {
    hide() {
      this.opened = false;
    },
    toggle() {
      this.opened = !this.opened;
    },
  },
};
</script>
