import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID iD8OBK_TPoIT_DFtz_r-RnwJqFda6kiWMu0No80auKY'
    }
});