'use strict';

import { useContext } from 'react';
import { Photo } from './types/Photo';
import { RestClientContext } from './restClient';
import { User } from './types/User';
import { SearchQuery } from './types/SearchQuery';

const apiEndpoints = {
    SEARCH: (userId: string) => `/search/${userId}`,
    LOGIN: (username: string) => `/auth/login/${username}`,
    SIGNUP: (username: string) => `/auth/register/${username}`,
    GUEST: () => `/auth/guest`,
};

export const usePageRestClient = (userId: string) => {
    const restClient = useContext(RestClientContext);
    return {
        search: (query: SearchQuery): Promise<Photo[]> =>
            restClient.post<Photo[]>(apiEndpoints.SEARCH(userId), query).then((res) => res.data),
        login: (username: string): Promise<User> =>
            restClient.post<User>(apiEndpoints.LOGIN(username)).then((res) => res.data),
        signup: (username: string): Promise<User> =>
            restClient.post<User>(apiEndpoints.SIGNUP(username)).then((res) => res.data),
        guest: (): Promise<User> => restClient.post<User>(apiEndpoints.GUEST()).then((res) => res.data),
    };
};
