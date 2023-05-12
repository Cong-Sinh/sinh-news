<!-- <template>
    <div class="bg-white shadow-list z-5 min-w-[20rem] text-center min-h-[10.5rem] rounded-xl px-4 pb-4 pt-5"
        v-click-outside="onClickOutside">
        <img src="@/assets/img/CloseGray.png" alt="" class="float-right cursor-pointer p-1">
        <div class="mt-6">
            <h3 class="mb-2 font-medium text-background4 text-heading7 ">Bỏ bài viết</h3>
            <p class="text-grey7 font-normal text-sm">Sau khi bỏ, bài đang viết sẽ bị hủy. </p>
            <div class="flex justify-around mt-4">
                <p
                    class="flex border items-center justify-center rounded-lg  w-[136px] h-[44px] text-grey7 font-medium text-sm cursor-pointer">
                    Tiếp tục nhập
                </p>
                <p
                    class="flex  sdsdsdsdsd border items-center justify-center border-bg-red2 bg-red2 rounded-lg w-[136px] h-[44px] text-white font-medium cursor-pointer text-sm">
                    Bỏ
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3';

export default {
    opened: function (val) {
        if (val) {
            this.showFlag = false;
        }
    },
    data: function () {
        return {
            opened: false,
        }
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
    directives: {
        clickOutside: vClickOutside.directive,
    },
    methods: {
        handleCloseModal() {
            this.$emit('onClose', false)
        },

        onClickOutside() {
            this.handleCloseModal()
        },
    }

}
</script>

<style></style> -->

<!-- <transition>
    <template v-if="opened">
        <div class="bg-white shadow-list z-5 min-w-[20rem] text-center min-h-[10.5rem] rounded-xl px-4 pb-4 pt-5"
            v-click-outside="onClickOutside">
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
</transition> -->