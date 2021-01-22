<template>
    	<iframe :title="video.title" :src="video.url" />
        <VideoMetadata  />
		<p>{{video.description}}</p>
</template>

<script>
import VideoMetadata from './VideoMetadata';
export default {
    name: 'VideoDetail',
    components: {
        VideoMetadata
    },
    props: ['selectedVideo'],
    computed: {
        video(){
            if(this.selectedVideo) {
                const { id: videoId, 
                        snippet: {
                            title, 
                            description, 
                            publishedAt
                        }
                    } = this.selectedVideo
                const url = `https://www.youtube.com/embed/${videoId}`;
                // Formato de fecha
                const formattedDate = publishedAt.slice(0, publishedAt.indexOf('T'));
                return{url, title, description, formattedDate}
            }
        }
    },
    methods: {
        randomNumber: (number) => Math.floor(Math.random() * number).toLocaleString(),
    },
    created() {
        console.log(this.selectedVideo);
    }
   
}
</script>

<style lang="scss" scoped>
    iframe {
        width: 100%;
        height: 50em;
        border: 0;
    }
</style>