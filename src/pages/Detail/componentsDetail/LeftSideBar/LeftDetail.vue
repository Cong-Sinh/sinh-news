<template>
    <div class="font-font col-span-3 fixed mt-[14rem] ml-[18rem] ">
        <div class="mb-7">
            <img src="@/assets/img/upleftSidebar.png" alt="" class="mb-1 ml-1">
            <vote vote="123.4" />
        </div>
        <div class="mb-8">
            <img src="@/assets/img/downleftSidebar.png" alt="" class="mb-1 ml-1">
        </div>
        <div class="mb-14">
            <img src="@/assets/img/CommentleftSidebar.png" alt="" class="mb-1 ml-1 ">
            <Vote comment="298" />

        </div>
        <div>
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