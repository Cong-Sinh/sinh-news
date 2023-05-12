<template>
    <div class="z-20 fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[rgba(0,0,0,0.6)]">
        <div class="relative top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] rounded-[12px]">
            <div class="w-[28rem] vungantoan  bg-white shadow-md rounded-xl z-2 absolute mx-auto"
                v-click-outside="onClickOutside">
                <div class="flex justify-between items-center h-11 bg-background2 rounded-t-xl px-2">
                    <img src="@/assets/img/CloseWhite.png" alt="">

                    <h3 class="font-semibold text-grey8 text-heading7 text-center ">
                        Tạo bài viết mới
                    </h3>
                    <img src="@/assets/img/Close.png" alt="" class="cursor-pointer" @click="toggle">
                    <!-- @click="handleCloseModal" -->
                </div>
                <div class="mx-6 py-4 ">
                    <div class="flex ">
                        <img src="@/assets/img/avatar.png" alt="" class="w-[3rem] h-[3rem] rounded-full">
                        <div class="ml-2">
                            <p class="">Đào Phương Dung</p>
                            <button class="w-[4.5rem] h-6 rounded-md border-solid border flex items-center "
                                @click.prevent="showFlag = !showFlag">
                                <button class="text-S font-medium text-grey7 mr-2 ml-2">chủ đề</button>
                                <img srcset="@/assets/img/IconUserDown.png 2x" alt="">
                            </button>
                        </div>
                    </div>


                    <div class="min-h-[216px] my-4  bg-white shadow-list rounded-lg text-grey8 font-normal text-sm z-3"
                        v-show="showFlag">
                        <div class="pt-2 ">
                            <button class="flex justify-between items-center bg-primary0 h-10  px-4  w-full">
                                <div>BĐS thường ngày</div>
                                <img src="@/assets/img/Tick.png" alt="" class="mr-2">
                            </button>
                            <button class="flex justify-between items-center  h-10  px-4  w-full">
                                <div>BĐS thường ngày</div>
                            </button>

                        </div>
                    </div>

                    <transition>
                        <template v-if="opened">
                            <div class="bg-white shadow-list z-5 min-w-[20rem] text-center min-h-[10.5rem] rounded-xl px-4 pb-4 pt-5 bg-[rgba(0,0,0,0.6)]
                                ">
                                <img src="@/assets/img/CloseGray.png" alt="" class="float-right cursor-pointer p-1">
                                <div class="mt-6">
                                    <h3 class="mb-2 font-medium text-background4 text-heading7 ">Bỏ bài viết</h3>
                                    <p class="text-grey7 font-normal text-sm">Sau khi bỏ, bài đang viết sẽ bị hủy. </p>
                                    <div class="flex justify-around mt-4">
                                        <p class="flex border items-center justify-center rounded-lg  w-[136px] h-[44px] text-grey7 font-medium text-sm cursor-pointer"
                                            @click="toggle">
                                            Tiếp tục nhập
                                        </p>
                                        <p class="flex border items-center justify-center border-bg-red2 bg-red2 rounded-lg w-[136px] h-[44px] text-white font-medium cursor-pointer text-sm"
                                            @click="handleCloseModal">
                                            Bỏ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </transition>

                    <!-- <transition>
                        <div v-if="opened">
                            <Close />
                        </div>
                    </transition> -->

                    <div class="min-h-[212px] ">
                        <textarea v-model="message" :min-height="30" :max-height="350" type="text"
                            placeholder="Chia sẻ quan điểm về bất động sản" rows="1" cols="50"
                            class="border-l-2 my-6 font-normal text-sm border-primary5 w-full block p-1 break-words outline-none  min-h-[25px] " />
                        <button class="h-10 bg-background6 rounded-lg w-full items-center flex text-primary5 text-sm">
                            <img src="@/assets/img/sharelink.png" alt="" class="px-3">
                            <input type="text" placeholder="Gắn link chia sẻ bài viết"
                                class="bg-background6 sđsdsfdsf outline-none w-full mr-5" />
                        </button>
                    </div>

                    <button :class="[disableButton ? styleObjectActive : '']" :style="[styleObjectActive, styleObject]"
                        class=" h-11 rounded-2xl gh w-full ">Đăng</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3';
import TextareaAutosize from 'vue-textarea-autosize'
// import Close from './Close.vue';
export default {
    components: {
        TextareaAutosize,
        // Close
    },
    methods: {
        switchSelect(event) {
            this.selected = event.target.value;
        }
    },
    directives: {
        clickOutside: vClickOutside.directive,
    },
    data() {
        return {
            styleObject: {
                backgroundColor: 'red',
                color: "white",
            },
            styleObjectActive: {
                backgroundColor: 'blue',
                color: "white",

            },
            showFlag: false,
            opened: false,
            message: "",
            dis: true
        }
    },
    computed: {
        disableButton() {
            return !this.message || this.message.length === 0
        }
    },
    watch: {
        opened: function (val) {
            if (val) {
                this.showFlag = false;
            }
        },
    },
    methods: {
        handleCloseModal() {
            this.$emit('onClose', false)
        },

        onClickOutside() {
            this.handleCloseModal()
        },
        toggle() {
            this.opened = !this.opened;
        },
        hide() {
            this.opened = false;
        },
    }
}
</script>
