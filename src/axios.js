import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecom-complete-by-zedan/us-central1/api'
});

export default instance