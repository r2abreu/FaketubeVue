<template>
    <div class="comment-container">
        <figure>
            <img :src="avatar" alt="avatar" />
        </figure>
        <div>
            <span>{{userFaker()}}</span>
            <span>Hace {{randomDate(12)}} meses</span>
            <p>{{userSentence()}}</p>
            <div>
                <figure>
                    <img src="../../public/assets/thumbs.svg" alt="thumbs up" title="Me gusta" />
                </figure>
                <span>{{randomDate(500)}}</span>
                <figure>
                    <img src="../../public/assets/thumbs.svg" alt="thumbs down" title="No me gusta" />
                </figure>
				<span>RESPONDER</span>
            </div>
        </div>
    </div>
</template>

<script>
import faker from 'faker';
export default {
    name: 'CommentDetail',
    props: ['avatar'],
    methods: {
        userFaker: () => faker.internet.userName(), 
        userSentence: () => faker.lorem.sentence(),
        randomDate(time) {
            return Math.floor(Math.random() * time)
        }
    },
}
</script>

<style lang="scss" scoped>

.comment-container {
    display: flex;
    align-items: flex-start;

    figure {
        margin: 0 1em 1em 1em;
        img {
                    border-radius: 50%;
                }
    }

    & > div {
        margin-bottom: 16px;

        span:first-of-type {
            color: #fff;
            font-weight: 700;
        }

        span:last-of-type {
            color: #aaaaaa;
            margin-left: 0.5em;
            font-size: 0.85rem;
        }

        p {
            margin: 0.5em 0;
            color: #fff;
            font-weight: 400;
        }

        & > div {
            display: flex;
            align-items: center;

            figure {
                box-sizing: content-box;
                padding: 8px;
                width: 16px;
                height: 16px;
                margin: 0;

                
            }

            span {
                font-size: 0.8rem;
                color: #aaaaaa;
            }

            figure:last-of-type {
                margin-left: 0.5em;

                img[alt="thumbs down"] {
                    transform: rotate(-180deg);
                }
            }

            span:last-of-type {
                color: #aaaaaa;
                margin-left: 0.5em;
                font-size: 0.85rem;
            }
        }
    }
}

</style>