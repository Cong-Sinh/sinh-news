<template>
  <div class="flex items-center cursor-pointer relative" v-click-outside="hide">
    <button class="flex items-center" @click="toggle">
      <img srcset="@/assets/img/share.png 2x" alt="Meey News" class="w-4 h-[13px]" />
      <h3 class="text-M text-primary5 ml-[10px]">{{ share }}</h3>
    </button>

    <Transition>
      <div class="absolute right-[-100%] mb-[14.5rem] rounded-lg shadow-lg w-[14rem] Popup bg-white down" v-if="opened">
        <ShareNetwork network="facebook" :url="article?.link" :title="article?.title" :description="article?.description"
          quote hashtags class="flex items-center rounded-lg p-2 m-2 hover:bg-background6">
          <img srcset="@/assets/img/ShareFb.png 2x" alt class="ml-1 mr-2" />
          <p class="text-background4 text-M">Chia sẻ lên Facebook</p>
        </ShareNetwork>
        <div class="flex items-center rounded-lg p-2 m-2 hover:bg-background6">
          <img srcset="@/assets/img/ShareZalo.png 2x" alt class="ml-1 mr-2" />
          <p class="text-background4 text-M">Chia sẻ lên Zalo</p>
        </div>
        <div class="flex items-center rounded-lg p-2 m-2 hover:bg-background6">
          <img srcset="@/assets/img/ShareGB.png 2x" alt class="ml-1 mr-2" />
          <p class="text-background4 text-M">Sao chép liên kết</p>
        </div>
        <img @click.prevent="showFlag = !showFlag" v-if="showFlag === false ? true : ''"
          srcset="@/assets/img/ShareDown.png 2x" alt class="m-auto p-3" />

        <div class="mb-1 gray-bg" v-show="showFlag">
          <ShareNetwork network="Messenger" :url="article?.link" title description quote hashtags
            class="flex items-center rounded-lg p-2 m-2 hover:bg-background6">
            <img src alt class="ml-1 mr-2" />
            <p class="text-background4 text-M">Chia sẻ lên Messenger</p>
          </ShareNetwork>
          <ShareNetwork network="WhatsApp" :url="article?.link" title="  " description quote hashtags
            class="flex items-center rounded-lg p-2 m-2 hover:bg-background6">
            <img srcset="@/assets/img/ShareFb.png 2x" alt class="ml-1 mr-2" />
            <p class="text-background4 text-M">Chia sẻ lên WhatsApp</p>
          </ShareNetwork>
          <ShareNetwork network="telegram" :url="article?.link" :title="article?.title"
            :description="article?.description" quote hashtags
            class="flex items-center rounded-lg p-2 m-2 hover:bg-background6">
            <img srcset="@/assets/img/ShareFb.png 2x" alt class="ml-1 mr-2" />
            <p class="text-background4 text-M">Chi sẻ lên Telegram</p>
          </ShareNetwork>
          <button class="flex mx-auto" @click="showFlag = false">Thu nhỏ</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vClickOutside from 'click-outside-vue3';

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    article: {
      type: Object,
      default: {},
      require: true,
    },
    share: {
      type: String,
      default: '',
      require: true,
    },
    src: {
      type: String,
      default: '',
      require: true,
    },
    title: {
      type: String,
      default: '',
      require: true,
    },
  },

  computed: {
    ...mapGetters('feed', {
      articleList: 'articleList',
      getFeedSuggestion: 'getFeedSuggestion',
    }),
  },
  data: function () {
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
    ...mapActions('feed', ['getFeedDetail']),
    toggle() {
      this.opened = !this.opened;
    },

    hide() {
      this.opened = false;
    },
  },
};
</script>

<style></style>
