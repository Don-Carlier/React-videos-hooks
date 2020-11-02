import axios from 'axios';

const KEY = 'AIzaSyAXlAaMX1W_xDyWPAoWUIqcnWsTI3iT1go';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

