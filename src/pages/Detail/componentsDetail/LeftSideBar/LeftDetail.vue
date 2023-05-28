<template>
    <div class="font-font col-span-3 fixed mt-[12rem] ml-[18rem] ">
        <div class="mb-2 ">
            <img src="@/assets/img/upleftSidebar.png" alt="" class="mb-1 ml-1">
            <Vote :vote="articleDetail?.buffVote" class="text-grey8" />
        </div>
        <div class="mb-8">
            <img src="@/assets/img/downleftSidebar.png" alt="" class="mb-1 ml-1">
        </div>
        <div class="mb-14">
            <img src="@/assets/img/CommentleftSidebar.png" alt="" class="mb-1 ml-1 ">
            <Vote comment="298" class="text-grey8" />

        </div>
        <div>
            <img src="@/assets/img/shareLeftSidebar.png" alt="" class="mb-1 ml-1">

            <Vote share="12323" title="Chia sẻ" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Vote from '@/pages/Detail/componentsDetail/LeftSideBar/Vote.vue'
export default {
    components: {
        Vote
    },

    computed: {
        ...mapGetters('feed', {
            articleDetail: 'articleDetail',
        }),
    },

}
</script>

<style></style>