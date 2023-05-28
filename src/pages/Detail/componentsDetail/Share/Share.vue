<template>
    <div class="text-center py-7">
        <p class="text-grey8 text-M font-medium">Bài viết hữu ích? Hãy chia sẻ ngay cho bạn bè nhé!</p>
        <div class="flex justify-center pt-5">

            <ShareNetwork network="Facebook" :url="articleDetail?.link" title="" description="" quote="" hashtags="">
                <img src="@/assets/img/ShareFb.png" alt="" class="w-8 h-8 mx-3">
            </ShareNetwork>
            <ShareNetwork network="Facebook" :url="articleDetail?.link" title="" description="" quote="" hashtags="">
                <img src="@/assets/img/ShareZalo.png" alt="" class="w-8 h-8 mx-3">

            </ShareNetwork>
            <ShareNetwork network="Facebook" :url="articleDetail?.link" title="" description="" quote="" hashtags="">
                <img src="@/assets/img/ShareGB.png" alt="" class="w-8 h-8 mx-3" />
            </ShareNetwork>
            <ShareNetwork network="messenger" :url="articleDetail?.link" title="" description="" quote="" hashtags="">
                <img src="@/assets/img/ShareMess.png" alt="" class="w-8 h-8 mx-3">

            </ShareNetwork>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    props: {
        article: {
            type: Object,
            default: {},
            require: true,
        },
    },
    computed: {
        ...mapGetters('feed', {
            articleDetail: 'articleDetail',
        }),
    },
    methods: {
        ...mapActions('feed', ['getFeedDetail']),
    }
}
</script>

<style></style>