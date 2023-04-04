<template>
    <div class="font-font  fixed mt-[4rem] ml-[25rem] ">
        <div class="mb-5 text-white ">
            <img src="@/assets/img/upleftSidebar.png" alt="" class="mb-1 ml-1 ">
            <vote vote="123.4" />
        </div>
        <div class="mb-8 text-white">
            <img src="@/assets/img/downleftSidebar.png" alt="" class="mb-1 ml-1">
        </div>
        <div class="mb-14 text-white">
            <img src="@/assets/img/CommentleftSidebar.png" alt="" class="mb-1 ml-1 ">
            <Vote comment="298" colorClass="text-white" />

        </div>
        <div class="">
            <img src="@/assets/img/shareLeftSidebar.png" alt="" class="mb-1 ml-1">
            <Vote title="Chia sẻ" />
        </div>
    </div>
    <Vote />
</template>

<script>
import Vote from '@/pages/Detail/componentsDetail/LeftSideBar/Vote.vue'
export default {
    components: {
        Vote
    }
}
</script>

<style></style>