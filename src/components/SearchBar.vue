<template>
    <form>
        <input placeholder="Buscar" type="text" name="search" />
        <input type="image" src="../../public/assets/searchs.svg" />
    </form>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style lang="scss" scoped>
    form {
        width: 648px;
        display: flex;

        input[type="image"] {
            color: var(--secondary-color);
            height: 32px;
            width: 65px;
            padding: 0.5em;
        }

        input:not([type="image"]) {
            width: 564px;
            height: 32px;
            padding: 0 0.5em;
            font-size: 1rem;
            color: var(--secondary-color);
            border: 1px solid #323232;
            background-color: #121212;

        }
    }
</style>