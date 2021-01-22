<template>
    <div class="comment-list">
        <CommentDetail 
        v-for="user in getUsers" 
        :key="user.cell"
        :avatar="user.picture.thumbnail" />
    </div>
</template>

<script>
import randomuser from '../api/randomuser';
import CommentDetail from './CommentDetail';

export default {
    name: 'CommentList', 
    components: {
        CommentDetail,
 
    },
    data() {
        return {
            users: []
        }
    },
    computed: {
        getUsers() {
            return this.users;
        }
    },
    methods: {
        async search() {
            const response = await randomuser.get();
            this.users = response.data.results;
        }
    },
    created() {
        this.search();
    }

  
}
</script>

<style lang="scss" scoped>
   .comment-list {
       margin-top: 2rem !important;
   }
</style>