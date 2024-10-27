// // src/api/index.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken, removeToken } from '@/src/utils/tokenManager';

export const API_URL: string = process.env.REACT_APP_API_URL || 'http://192.168.1.70:4000';
// Универсальная функция для создания baseQuery с поддержкой авторизации
export const createBaseQuery = () => {
    const baseQuery = fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: async (headers) => {
            const token = await getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    });

    // Обертывание для обработки 401 Unauthorized
    const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result.error && result.error.status === 401) {
            console.log('Unauthorized, removing token...');
            await removeToken();
            // Здесь можно добавить логику для перенаправления на страницу логина
        }

        return result;
    };

    return baseQueryWithReauth;
};

// import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
// import {getToken} from '../utils/tokenManager';
//
// export const API_URL: string = process.env.REACT_APP_API_URL || 'http://localhost:4000';
//
// const $api = axios.create({
//     baseURL: API_URL,
//     timeout: 5000,
// });
//
// // каждый запрос пройдет через эту функицю
// $api.interceptors.request.use(
//     async (config: InternalAxiosRequestConfig) => {
//         try {
//             const token = await getToken();
//             if (token && config.headers) {
//                 config.headers.Authorization = `Bearer ${token}`;
//             }
//         } catch (error) {
//             console.error('Error fetching token:', error);
//             // Можно добавить логику для уведомления пользователя
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
//
// // каждый ответ от сервера пройдет через эту функцию
// $api.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     (error) => {
//         if (error.response) {
//             if (error.response.status === 401) {
//                 // Автоматический редирект или logout при 401
//                 console.log('Unauthorized, redirecting to login...');
//                 // Тут можно добавить логику для выхода из системы или обновления токена
//             }
//         }
//         return Promise.reject(error);
//     }
// );
//
// export default $api;
