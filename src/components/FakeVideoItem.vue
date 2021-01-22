<template>
        <div className="video-item">
			<figure>
				<img :src="getFakeImage" alt="video item" title="video item" />
				<figcaption>
					{{randomDuration(59, 5)}}
				</figcaption>
			</figure>
			<div>
				<span>{{randomName()}}</span>
				<span>{{randomName()}}</span>
				<span>{{randomDate(1000000).toLocaleString()}} visualizaciones</span>
				<span>Hace {{randomDate(12)}} meses</span>
			</div>
		</div>
</template>

<script>
import faker from 'faker'

export default {
	name: 'FakeVideoItem',
	computed: {
		getFakeImage: () => faker.image.image(),	
	},
	methods: {
		randomDate(time) {
            return Math.floor(Math.random() * time)
		},
		randomDuration(time1, time2) {
			return `${this.randomDate(time1)} : ${this.randomDate(time2)} 0`
		}, 
		randomName() {
			return `${faker.random.words()}`
		}
	}
}
</script>


<style lang="scss">

.video-item {
	 display: flex;
	 margin-top: 1em;
	 width: 402px;
	 height: 94px;

	span {
		display: block;
	}

	figure {
		margin: 0 0.5em 0 0;
		position: relative;

		

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


</style>