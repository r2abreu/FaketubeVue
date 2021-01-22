<template>
    <div>
        <FakeVideoItem v-for="n in 9" :key="n" />
    </div>
</template>

<script>
import FakeVideoItem from './FakeVideoItem'

export default {
    name: 'FakeVideoList', 
    components: {
        FakeVideoItem
    }
}
</script>

<style lang="scss" scoped>
    div {
       
    }
</style>