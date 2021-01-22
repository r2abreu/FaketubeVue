<template>
    <form @submit="onFormSubmit">
        <input 
        @input="onInputChange" 
        :value="getSearchTerm" 
        placeholder="Buscar" 
        type="text" 
        name="search" />
        <input type="submit" alt="Search" value=" " />
    </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'SearchBar', 
    computed: mapGetters(['getSearchTerm']),
    methods: {
        ...mapActions(['updateSearchTerm', 'updateVideos']),
        onInputChange(event) {
            // Controlar el elemento 'target'
            this.updateSearchTerm(event.target.value);
        }, 
        onFormSubmit(event) {
            event.preventDefault();
            const term = event.target.firstElementChild.value;
            term ? this.updateVideos(term) : this.updateVideos('Aprende Vue')  
               
        }
    },

}
</script>

<style lang="scss" scoped>
    form {
        width: 648px;
        display: flex;

        input[type="submit"] {
            color: var(--secondary-color);
            height: 32px;
            width: 65px;
            padding: 0.5em;
            border: none;
            background: no-repeat url(../../public/assets/search.svg) 50% 50% / 30%, #323232;

       
        }

        input:not([type="submit"]) {
            width: 564px;
            height: 32px;
            padding: 0 0.5em;
            font-size: 1rem;
            color: var(--secondary-color);
            border: 1px solid #323232;
            background-color: #121212;

            &:focus {
                border: 0.1px inset #3ea5ff8c;
                outline: transparent;
            
            }

        }
    }
</style>