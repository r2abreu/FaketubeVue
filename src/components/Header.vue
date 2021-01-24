<template>
    <header>
        <nav>
            <a href="/#bottom">
                <img src="../../public/assets/logo.svg" alt="faketube logo" title="Faketube" />
            </a>
            <h1>FakeTube <sup> ES</sup></h1>
        </nav>
        <SearchBar />
    </header>
</template>

<script>
import SearchBar from './SearchBar';


export default {
    name: 'Header',
    components: {
        SearchBar
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 0;
    min-height: 56px;
    background-color: var(--background-color);
    // Previene solapamiento de la imagen de pulgar abajo debido a propiedad `transform`
    z-index: 1;

    nav {
        display: flex;
        align-items: center;

        img {
            width: 2rem;
            margin-right: 0.2em;
        }

        h1 {
            color: #fff;
            margin: 0;
            font-size: 1.2rem;
            letter-spacing: -2px;

            sup {
                font-weight: lighter;
                margin-left: 0.2em;
                color: #989898
            }
        }
    }
}

@media screen and (max-width: 800px) {

    header {
        padding: 0 0.5em;
    }

    nav {
       flex: 1 1 10%;

       h1 {
           display: none;
       }
    }
}
</style>