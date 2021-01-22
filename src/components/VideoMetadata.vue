<template>
      <div class="video-metadata">
	        <div>
                <h4>{{title}}</h4>
                <div class="video-stats">
                    <div>
                        <span>{{randomNumber(1000000)}} visualizaciones {{date}} </span>
                    </div>
                    <div>
                        <VideoReactions 
                        :src="require('../../public/assets/thumbs.svg')" 
                        :alt="'Me gusta'"
                        :title="'Me gusta'"
                        >
                            {{randomNumber(1000000)}}
                        </VideoReactions>
                        <VideoReactions 
                        :src="require('../../public/assets/thumbs.svg')"
                        :alt="'No me gusta'"
                        :title="'No me gusta'">
                            {{randomNumber(10000)}}
                        </VideoReactions>
                        <VideoReactions 
                        :src="require('../../public/assets/share.svg')"
                        :alt="'compartir icono'"
                        :title="'Compartir'">
                            COMPARTIR
                        </VideoReactions>
                        <VideoReactions 
                        :src="require('../../public/assets/playlist.svg')"
                        :alt="'agregar icono'"
                        :title="'Agregar a lista'">
                            GUARDAR
                        </VideoReactions>
                        <VideoReactions 
                        :src="require('../../public/assets/dots.svg')"
                        :alt="'puntos incono'"
                        :title="'Menu'">
                        </VideoReactions>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import VideoReactions from './VideoReactions';

export default {
    name: 'VideoMetadata', 
    props: ['title', 'date'],
    components: {
        VideoReactions
    },
     methods: {
        randomNumber: (number) => Math.floor(Math.random() * number).toLocaleString(),
    },
    created(){
        console.log(this.title, this.date)
    }
}
</script>

<style lang="scss">
    .video-metadata {
        display: flex;
        justify-content: center;
        margin: auto;

    } 


    h4 {
        font-weight: 400;
        color: #fff;
        margin: 0;
        font-size: 1.2rem;
    }


    .video-stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        border-bottom: var(--border-divider);

        div:first-of-type {
            span {
                color: #86805c;
            }
        }

        div:last-of-type {
            padding: 0 0.2em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 450px;
        }
    }
</style>