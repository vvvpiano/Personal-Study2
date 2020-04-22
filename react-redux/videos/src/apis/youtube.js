import axios from 'axios';

const KEY = 'AIzaSyAOtwYF_dxBlCQYpkNdi6vdv0II2eDLSLg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
        // key: `${KEY}`
    }
})