<template>
    <!-- <div v-click-outside="hide" @click="toggle">Toggle</div> -->
    <!-- <div v-show="opened">Popup item</div> -->
    <div v-click-outside="onClickOutside">
        <div class="flex items-center cursor-pointer relative" @click="isOpen = !isOpen">
            <button class="flex items-center" @click="() => TogglePopup('buttonTrigger')">
                <img srcset="@/assets/img/share.png 2x" alt="Meey News" class="w-4 h-[13px]" />
                <h3 class="text-M text-primary5 ml-[10px] ">{{ share }}</h3>
            </button>

            <div class="absolute right-[-100%]  mb-[14.5rem] rounded-lg shadow-lg w-[14rem] Popup  bg-white down"
                v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">

                <ShareNetwork network="facebook" :url="article?.link" :title="article?.title"
                    :description="article?.description" quote="" hashtags=""
                    class="flex items-center rounded-lg p-2 m-2 hover:bg-background6  ">
                    <img srcset="@/assets/img/ShareFb.png 2x" alt="" class="ml-1 mr-2">
                    <p class="text-background4  text-M"> Chia sẻ lên Facebook</p>
                </ShareNetwork>
                <div class=" flex items-center rounded-lg p-2 m-2 hover:bg-background6  ">
                    <img srcset="@/assets/img/ShareZalo.png 2x" alt="" class="ml-1 mr-2">
                    <p class="text-background4  text-M">Chia sẻ lên Zalo</p>
                </div>
                <div class=" flex items-center rounded-lg p-2 m-2 hover:bg-background6  ">
                    <img srcset="@/assets/img/ShareGB.png 2x" alt="" class="ml-1 mr-2">
                    <p class="text-background4  text-M">Sao chép liên kết</p>
                </div>
                <img @click="showFlag = !showFlag" v-if="showFlag === false ? true : ''"
                    srcset="@/assets/img/ShareDown.png 2x" alt="" class="m-auto p-3">

                <div class="mb-1 gray-bg" v-show="showFlag">
                    <ShareNetwork network="Messenger" :url="article?.link" title="" description="" quote="" hashtags=""
                        class="flex items-center rounded-lg p-2 m-2 hover:bg-background6 ">
                        <img src="" alt="" class="ml-1 mr-2">
                        <p class="text-background4  text-M"> Chia sẻ lên Messenger</p>
                    </ShareNetwork>
                    <ShareNetwork network="WhatsApp" :url="article?.link" title="  " description="" quote="" hashtags=""
                        class="flex items-center rounded-lg p-2 m-2 hover:bg-background6 ">
                        <img srcset="@/assets/img/ShareFb.png 2x" alt="" class="ml-1 mr-2">
                        <p class="text-background4  text-M"> Chia sẻ lên WhatsApp </p>
                    </ShareNetwork>
                    <ShareNetwork network="telegram" :url="article?.link" :title="article?.title"
                        :description="article?.description" quote="" hashtags=""
                        class="flex items-center rounded-lg p-2 m-2 hover:bg-background6 ">
                        <img srcset="@/assets/img/ShareFb.png 2x" alt="" class="ml-1 mr-2">
                        <p class="text-background4  text-M"> Chi sẻ lên Telegram</p>
                    </ShareNetwork>
                    <button class="flex justify-center px-[45%] " @click="() => TogglePopup('buttonTrigger')">Ẩn</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import { mapActions, mapGetters } from 'vuex';
import { ref } from 'vue';
export default {
    components: {
        vClickOutside
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    data: function () {
        return {
            title: "",
            showFlag: false,
            isOpen: false
        }
    },
    setup() {
        const popupTriggers = ref({
            buttonTrigger: false,
            timedTrigger: false
        });
        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
        }
        return {
            popupTriggers,
            TogglePopup,
        }
    },
    mounted() {

    },
    watch: {
        onClickOutside() {
            console.log(onClickOutside, 'dfgfdgfdgdfg');
        },
    },
    props: {
        article: {
            type: Object,
            default: {},
            require: true,
        },
        share: {
            type: String,
            default: "",
            require: true,
        },
        src: {
            type: String,
            default: "",
            require: true
        },
        title: {
            type: String,
            default: "",
            require: true
        }
    },
    computed: {
        ...mapGetters('feed', {
            articleList: 'articleList',
            getFeedSuggestion: 'getFeedSuggestion',
        }),
    },
    methods: {
        ...mapActions('feed', ['getFeedDetail']),
        onClickOutside() {
            if (this.isOpen) {
                this.isOpen = false
            }
        }
    }
}
</script>

<style></style>
