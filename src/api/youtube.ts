import axios from 'axios';
const KEY = process.env.VUE_APP_YOTUBE_API;


console.log(KEY)

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        q: 'Dross',
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

