import axios from 'axios';
import {API_AUTH_SERVER_URI} from "../const/apiConsts.ts";
// import {USER_LOCALSTORAGE_ACCESS_TOKEN_KEY} from "../const/localStorageConsts.ts";


export const $authApi = axios.create({
    baseURL: API_AUTH_SERVER_URI,
});

// $api.interceptors.request.use((config) => {
//     if (config.headers) {
//         config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY) || '';
//     }
//
//     return config;
// });