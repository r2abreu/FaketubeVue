import { createStore } from 'vuex'
import youtube from '../api/youtube';


export default createStore({
  state:()  => ({
    searchTerm: 'Dross',
    selectedVideo: null,
    videos: []
  }),
  getters: {
    getSearchTerm: (state) =>  state.searchTerm,
    getVideos: (state) => state.videos, 
    getSelectedVideo: (state) => state.selectedVideo,
  },
  mutations: {
    setSearchTerm(state,term) {
      state.searchTerm = term;
    }, 
    setVideos(state, videos) {
      state.videos = videos;
    }, 
    setSelectedVideo(state, video) {
      state.selectedVideo = video;
    }
  },
  actions: {
    updateSearchTerm({commit}, term) {
      commit('setSearchTerm', term)
    },
    async updateVideos({commit}, term) {
      const response = await youtube.get('')
      console.log(response)
      // commit('setVideos', videos)
    },
    updateSelectedVideo({commit}, video) {
      commit('setSelectedVideo', video)
    }
  },

})
