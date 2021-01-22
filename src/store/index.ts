import { createStore } from 'vuex'
import youtube from '../api/youtube';


export default createStore({
  state:()  => ({
    searchTerm: 'Dross',
    videos: []
  }),
  getters: {
    getSearchTerm: (state) =>  state.searchTerm,
    getVideos: (state) => state.videos
  },
  mutations: {
    setSearchTerm(state,term) {
      state.searchTerm = term;
    }, 
    setVideos(state, videos) {
      state.videos = videos;
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
    }
  },

})
