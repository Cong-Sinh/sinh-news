<template>
    <div class="rounded-lg h-14 shadow-md bg-white my-5 flex w-full cursor-pointer" v-click-outside="hide">
        <div class="flex  my-auto w-full " @click="toggle">
            <img srcset="@/assets/img/IconDantri.png 2x" alt="" class="rounded-full w-9 h-9 mr-2 ml-4">
            <button class="text-grey4 w-full">
                Viết bài, chia sẻ quan điểm...
            </button>
        </div>
        <div class="top-0 bottom-0 left-0 right-0 bg-gray-100 z-20">

        </div>
        <div v-if="opened">
            <div @click.prevent="showFlag = !showFlag">
                <ModalPost />
            </div>
        </div>



    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3';

import ModalPost from './ModalPost/ModalPost.vue';

export default {

    components: { ModalPost },
    directives: {
        clickOutside: vClickOutside.directive,
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
        toggle() {
            this.opened = !this.opened;
        },

        hide() {
            console.log('hide');
            this.opened = false;
        },
    },
}
</script>

<style></style>