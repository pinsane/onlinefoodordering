// import axios from 'axios';
// axios.interceptors.request.use(
//     async (config) => {
//         const token = await authService.getToken();
//         if (token) {
//             config.baseURL = process.env.VUE_APP_API_ENDPOINT;
//             config.headers.Authorization = `Bearer ${token.accessToken}`;
//         }
//         return config;
//     },
//     error => Promise.reject(error),
// );