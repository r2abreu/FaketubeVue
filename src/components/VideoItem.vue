<template>
    <div className="video-item" @click="updateSelectedVideo(video)">
        <figure>
            <img :src="videoProps.url" :alt="videoProps.title" :title="videoProps.title" />
            <figcaption>
                {{randomDuration(59, 5)}}
            </figcaption>
        </figure>
        <div>
            <span>{{videoProps.title}}</span> 
            <span>{{videoProps.channelTitle}}</span>
            <span>{{randomDate(1000000).toLocaleString()}} visualizaciones</span>
        </div>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'VideoItem',
    props: ['video'], 
    computed: {
            videoProps() {  
                const { id: {videoId},
                        snippet: {
                            title,
                            channelTitle, 
                            description,
                            thumbnails: {
                                default: {
                                    url
                                }
                            }
                        }} = this.video;
                return {videoId, title, channelTitle, description, url}
        }
    },
    methods: {
        ...mapActions(['updateSelectedVideo']),
		randomDate(time) {
            return Math.floor(Math.random() * time)
		},
		randomDuration(time1, time2) {
			return `${this.randomDate(time1)} : ${this.randomDate(time2)} 0`
		}, 
		randomName() {
			return `${faker.random.words()}`
		}
    }, 

}
</script>
