import axios from 'axios';

const KEY = 'AIzaSyDIm8p8NLw58Z5fsqxOFDf_CSVsWwDd4xQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});