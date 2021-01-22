import { createStore } from 'vuex'
import youtube, {apiDefaultParams} from '../api/youtube';


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
      // const response = await youtube.get('', {
      //   params: {
      //     ...apiDefaultParams,
      //     q: term
      //   }
      // })
      // const videos = response.data.items;
      const exampleObject = {
        "kind": "youtube#searchResult",
        "etag": "ng_yivYKQ3StFlt8-SQP2fH8ERU",
        "id": {
            "kind": "youtube#video",
            "videoId": "Wy9q22isx3U"
        },
        "snippet": {
            "publishedAt": "2019-01-10T12:59:59Z",
            "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
            "title": "Vue JS Crash Course",
            "description": "In this crash course you will learn all about Vue.js including what it is, Vue-CLI, components, data, events, directives, etc Sponsor: http://www.netlify.com Code ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Wy9q22isx3U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Wy9q22isx3U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Wy9q22isx3U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Traversy Media",
            "liveBroadcastContent": "none",
            "publishTime": "2019-01-10T12:59:59Z"
        }
    }
      const videos = [];
      for(let i = 0; i < 5; i++) {
        videos.push(exampleObject);
      }
      commit('setVideos', videos)
    },
    updateSelectedVideo({commit}, video) {
    //   const exampleObject = {
    //     "kind": "youtube#searchResult",
    //     "etag": "ng_yivYKQ3StFlt8-SQP2fH8ERU",
    //     "id": {
    //         "kind": "youtube#video",
    //         "videoId": "Wy9q22isx3U"
    //     },
    //     "snippet": {
    //         "publishedAt": "2019-01-10T12:59:59Z",
    //         "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
    //         "title": "Vue JS Crash Course",
    //         "description": "In this crash course you will learn all about Vue.js including what it is, Vue-CLI, components, data, events, directives, etc Sponsor: http://www.netlify.com Code ...",
    //         "thumbnails": {
    //             "default": {
    //                 "url": "https://i.ytimg.com/vi/Wy9q22isx3U/default.jpg",
    //                 "width": 120,
    //                 "height": 90
    //             },
    //             "medium": {
    //                 "url": "https://i.ytimg.com/vi/Wy9q22isx3U/mqdefault.jpg",
    //                 "width": 320,
    //                 "height": 180
    //             },
    //             "high": {
    //                 "url": "https://i.ytimg.com/vi/Wy9q22isx3U/hqdefault.jpg",
    //                 "width": 480,
    //                 "height": 360
    //             }
    //         },
    //         "channelTitle": "Traversy Media",
    //         "liveBroadcastContent": "none",
    //         "publishTime": "2019-01-10T12:59:59Z"
    //     }
    // }
      commit('setSelectedVideo', video)
    }
  },

})

