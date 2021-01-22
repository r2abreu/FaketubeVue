<template>
  <Layout>
    And this is my content
  </Layout>
</template>

<script>
import Layout from './components/Layout';


export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang='scss'>
:root {
  --background-color: #202020;
  --font-family: 'Roboto', sans-serif;
  --secondary-color: #818179;
}

/* RESET */ 


html {
  box-sizing: border-box;
  font-size: 16px;
}

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

a {
  text-decoration: none;
  
}

body {
  background-color: var(--background-color);
  font-family: var(--font-family);
  letter-spacing: -0.5px;
}
</style>