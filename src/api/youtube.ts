import axios from 'axios';
const KEY = process.env.VUE_APP_YOTUBE_API;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
});

export const apiDefaultParams = {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
}