import axios from 'axios';

export const apiClient = axios.create({
    baseURL: `https://dev.seoltab.com/front_test_review`,
});