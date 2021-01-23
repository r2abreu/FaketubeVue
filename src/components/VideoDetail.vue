<template>
    	<div>
            <iframe :title="video.title" :src="video.url" width="1600" height="900" frameborder="0" />
        </div>
		<p>{{video.description}}</p>
</template>

<script>

export default {
    name: 'VideoDetail',
    props: ['selectedVideo'],
    
    methods: {
        randomNumber: (number) => Math.floor(Math.random() * number).toLocaleString(),
    },
    computed: {
        video() {
            if(this.selectedVideo) {
                const { 
                    id:{videoId}, 
                    snippet: {title}} = this.selectedVideo;
                const url = `https://www.youtube.com/embed/${videoId}`;
                return {title, url}
            }

        }
    }, 
    created() {
        console.log(this.selectedVideo)
    }
   
   
}
</script>

<style lang="scss" scoped>
    div {
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    div::after {
        padding-top: 56.25%;
        display: block;
        content: '';
    }
 
    iframe {
        border: 0;
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>