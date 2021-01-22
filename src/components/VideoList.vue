<template>
    <div>
        <VideoItem v-for="video in getVideos" :key="video.id.videoId" :video="video" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import VideoItem from './VideoItem';
export default {
    name: 'VideoList',
    components: {
        VideoItem
    },
    computed: mapGetters(['getVideos']),
    
}
</script>

<style lang="scss" scoped>

</style>