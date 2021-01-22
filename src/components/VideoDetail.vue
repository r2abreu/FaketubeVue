<template>
    	<iframe :title="video.title" :src="video.url" />
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