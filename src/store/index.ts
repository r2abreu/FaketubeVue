import { createStore } from 'vuex'
import youtube, {apiDefaultParams} from '../api/youtube';

const placeHolderData = [
  {
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
  },
  {
      "kind": "youtube#searchResult",
      "etag": "-eQRHbJjv1byhHRUcgsTaL-yHlE",
      "id": {
          "kind": "youtube#video",
          "videoId": "nhBVL41-_Cw"
      },
      "snippet": {
          "publishedAt": "2020-04-03T16:50:03Z",
          "channelId": "UCsBjURrPoezykLs9EqgamOA",
          "title": "Vue.js Explained in 100 Seconds",
          "description": "What is Vue.js? Learn the basics of Vue and build your first reactive UI component in just 100 seconds ⚡   https://fireship.io/courses/vue/ Vue Docs ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/nhBVL41-_Cw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/nhBVL41-_Cw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/nhBVL41-_Cw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Fireship",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-03T16:50:03Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "Xu4qGZRTA2GOj9P2d2t1nYOA8mU",
      "id": {
          "kind": "youtube#video",
          "videoId": "AqesL138vMA"
      },
      "snippet": {
          "publishedAt": "2020-04-23T00:29:35Z",
          "channelId": "UCP15FVAA2UL-QOcGhy7-ezA",
          "title": "¿Qué es Vue.js y por qué es tan especial?",
          "description": "Vue.js es un framework progresivo de JavaScript que te da la flexibilidad necesaria para trabajar con todo tipo de proyectos (grandes o pequeños), además se ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/AqesL138vMA/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/AqesL138vMA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/AqesL138vMA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "EDteam",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-23T00:29:35Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "rfcKMPtPlE1vNFwKBrXOqyXV1bs",
      "id": {
          "kind": "youtube#video",
          "videoId": "4deVCNJq3qc"
      },
      "snippet": {
          "publishedAt": "2019-03-19T15:15:00Z",
          "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
          "title": "Learn Vue.js - Full Course for Beginners - 2019",
          "description": "Learn to use Vue.js in this full tutorial course for beginners. Vue.js is an open-source JavaScript framework for building user interfaces and single-page ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/4deVCNJq3qc/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/4deVCNJq3qc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/4deVCNJq3qc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "freeCodeCamp.org",
          "liveBroadcastContent": "none",
          "publishTime": "2019-03-19T15:15:00Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "VJpVBVjG0_rneViRFewC0Y0zWPE",
      "id": {
          "kind": "youtube#video",
          "videoId": "OrxmtDw4pVI"
      },
      "snippet": {
          "publishedAt": "2020-02-24T18:20:37Z",
          "channelId": "UCsUalyRg43M8D60mtHe6YcA",
          "title": "Vue.js: The Documentary",
          "description": "by honeypot.io | What began as a side project of a Google developer now shares the JS leaderboard with #React and #Angular... With the help of Sarah Drasner ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/OrxmtDw4pVI/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/OrxmtDw4pVI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/OrxmtDw4pVI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Honeypot",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-24T18:20:37Z"
      }
  }
]


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
    //   const response = await youtube.get('', {
    //     params: {
    //       ...apiDefaultParams,
    //       q: term
    //     }
    //   })
      // const videos = response.data.items;
     
    
      commit('setVideos', placeHolderData);
      commit('setSelectedVideo', placeHolderData[0]);
    },
    updateSelectedVideo({commit}, video) {

      commit('setSelectedVideo', video)
    }
  },

})

