import { createStore } from 'vuex'
import youtube, {apiDefaultParams} from '../api/youtube';
import placeHolderData from '../api/placeHolder';




export default createStore({
  state:()  => ({
    searchTerm: '',
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
      const response = await youtube.get('', {
        params: {
          ...apiDefaultParams,
          q: term
        }
      })
      const videos = response.data.items;
     
    
      commit('setVideos', videos);
      commit('setSelectedVideo', videos[0]);
    },
    updateSelectedVideo({commit}, video) {
      commit('setSelectedVideo', video)
    }
  },

})

