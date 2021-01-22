<template>
    	<iframe :title="video.title" :src="video.url" />
        <div class="video-metadata">

        </div>
	    <h4 className="ui header">{{video.title}}</h4>
		<p>{{video.description}}</p>
</template>

<script>


export default {
    name: 'VideoDetail',
    props: ['selectedVideo'],
    computed: {
        video(){
            if(this.selectedVideo) {
                const videoId = this.selectedVideo.id.videoId;
                const url = `https://www.youtube.com/embed/${videoId}`;
                const title = this.selectedVideo.snippet.title;
                const description = this.selectedVideo.snippet.description;
                return{url, title, description}
            }
        }, 
       
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