<template>
    <div class="rounded-lg h-14 shadow-md bg-white my-5 flex w-full">

        <div class=" flex my-auto justify-between " @click="opened = true">
            <img srcset="@/assets/img/IconDantri.png 2x" alt="" class="rounded-full w-9 h-9 mr-2 ml-4">
            <button class="text-grey4 w-full">
                Viết bài, chia sẻ quan điểm...
            </button>
        </div>

        <div class="top-0 bottom-0 left-0 right-0 bg-gray-100 z-20">

        </div>
        <ModalPost v-if="opened" :opened="opened" @onClose="handleClose" />

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
            opened: false,
        };
    },

    methods: {
        handleClose($event) {
            this.opened = false;
        }
    },
}
</script>

<style></style>