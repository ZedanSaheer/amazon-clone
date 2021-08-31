import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-ecom-complete-by-zedan.cloudfunctions.net/api'
});

export default instance