<template>
  <Layout>
    <VideoDetail v-if="getSelectedVideo" :selectedVideo="getSelectedVideo" />
    <section>
      <div>
        <VideoMetadata v-if="getSelectedVideo" />
        <CommentList />
      </div>
      <div>
        <VideoList />
        <FakeVideoList />
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from './components/Layout';
// Componentes generados por api de Youtube
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import VideoMetadata from './components/VideoMetadata';
// Componentes generados por librerias `faker` y `random user`
import FakeVideoList from './components/FakeVideoList'
import CommentList from './components/CommentList'
// Importaciones funcionales del componente
import {mapGetters, mapActions} from 'vuex';



export default {
  components: {
    Layout,
    CommentList,
    FakeVideoList,
    VideoList, 
    VideoDetail,
    VideoMetadata
  }, 
  name: 'App',
  computed: {
    ...mapGetters(['getSelectedVideo', 'getVideos']),
   
  },
  methods: mapActions(['updateSelectedVideo', 'updateVideos']) ,
  created() {
    this.updateVideos('Learn Vue');
    this.updateSelectedVideo(this.getVideos[0])
    console.log(this.getVideos)
  }
}

</script>

<style lang='scss'>
:root {
  --background-color: #202020;
  --font-family: 'Roboto', sans-serif;
  --secondary-color: #818179;
  --border-divider: 1px solid  #ffffff1a;
  --youtube-red: #FF0000;
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

section {
  padding: 20px 5em 0 5em;
  gap: 2em;
  display: flex;
  justify-content: center;

  & > div:first-of-type {
    min-width: 800px;
  }
}

img[alt="No me gusta"] {
    transform: rotate(-180deg);
}


@media screen and (max-width: 1200px) {
  section {
    flex-direction: column;
    padding: 20px 2em;

    & > div:first-of-type {
      min-width: initial;
    }
  }
}

</style>