import Axios, { AxiosInstance } from 'axios';
import { createContext } from 'react';

const baseURL = 'http://localhost:3001';

export type RestClient = AxiosInstance;

export const createRestClient = () => {
    return Axios.create({
        baseURL,
    });
};

export const RestClientContext = createContext<RestClient>(createRestClient());
