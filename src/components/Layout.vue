<template>
    <Header />
    <main>
        <slot>Si estas viendo esto, el componente Layout no se renderizo correctamente.</slot>
    </main>
    <Footer />
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
    name: 'Layout',
    components: {
        Header, 
        Footer
    }
}
</script>

<style lang="scss" scoped>
main {
    color: var(--primary-color)
}

</style>