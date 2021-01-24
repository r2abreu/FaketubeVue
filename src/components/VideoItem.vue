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

<style lang="scss">


.video-item {
	 display: flex;
	 margin-top: 1em;
	 width: 402px;
	 height: min-content;
	 cursor: pointer;

	span {
		display: block;
	}

	figure {
		margin: 0 0.5em 0 0;
		position: relative;
		max-height: 94px;

		

		img {
			width: 168px;
			height: 94px;
		}

		figcaption {
			position: absolute;
			bottom: 5px;
			right: 5px;
			font-size: 0.75rem;
			font-weight: bold;
			padding: 0.2em;
			color: #fff;
			background-color: #0000008e
		}

	}

	div {
		span:first-of-type {
			color: #fff;
			font-weight: bold;
			font-size: 1rem;
			margin-bottom: 4px;
		}

		span {
			color: #8a97a0;
			font-size: 0.85rem;
			letter-spacing: 0.5px;
		}
	}


}	

@media screen and (max-width: 350px) {
	.video-item div {
		span:first-of-type {
			max-width: 140px;
		}
	}
}

</style>