<template>
    <header>
        <nav>
            <img src="../../public/assets/logo.svg" alt="faketube logo" title="Faketube" />
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
    padding: 0 15em;
    min-height: 56px;
    background-color: var(--background-color);

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
</style>