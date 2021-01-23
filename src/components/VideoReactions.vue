<template>
    <figure>
        <img :src="src" :title="title" :alt="alt"  />
    </figure>
    <span>
        <slot>
            {{randomNumber}}
        </slot>
    </span>
</template>

<script>
export default {
    name: 'VideoReactions',
    props: ['src', 'title', 'alt', 'randomNumber']
}
</script>

<style lang="scss" scoped>
    figure {
        margin: 0;
        width: 1.1rem;

        img {
            width: 100%;
        }
    }

    span {
        color: #86805c;
    }
</style>