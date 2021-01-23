<template>
      <div class="video-metadata">
	        <div>
                <h4>{{video.title}}</h4>
                <div class="video-stats">
                    <div>
                        <span>{{randomNumber(10000000)}} visualizaciones</span>
                    </div>
                    <div>
                        <VideoReactions 
                        :src="require('../../public/assets/thumbs.svg')" 
                        :alt="'Me gusta'"
                        :title="'Me gusta'"
                        :random-number="randomNumber(1000000)"
                        >
                        </VideoReactions>
                        <VideoReactions 
                        :src="require('../../public/assets/thumbs.svg')"
                        :alt="'No me gusta'"
                        :title="'No me gusta'"
                        :random-number="randomNumber(100000)"
                        >
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
import {mapGetters} from 'vuex';
import VideoReactions from './VideoReactions';

export default {
    name: 'VideoMetadata',
    components: {
        VideoReactions
    },
        methods: {
         ...mapGetters(['getSelectedVideo']),
        randomNumber: (number) => Math.floor(Math.random() * number).toLocaleString(),
    },
    computed: {
         video(){
            if(this.getSelectedVideo) {
                const { id: videoId, 
                        snippet: {
                            title, 
                            description, 
                            publishedAt
                        }
                    } = this.getSelectedVideo();
                const url = `https://www.youtube.com/embed/${videoId}`;
                // Formato de fecha
                const formattedDate = publishedAt.slice(0, publishedAt.indexOf('T'));
                return{url, title, description, formattedDate}
            }
        }
    },

}
</script>

<style lang="scss">
    .video-metadata {
        display: flex;
        justify-content: center;
        margin: auto;

        & > div:first-of-type {
            width: 100%;
        }

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

    @media screen and (max-width: 800px) {
        .video-stats {
            height: min-content;
            padding: 1em 0;
            gap: 1em;
            flex-direction: column;
            align-items: flex-start;
       
        }
    }

    @media screen and (max-width: 460px) {
        .video-stats div:last-of-type {
            display: none;
        }
    }
</style>