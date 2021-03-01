'use strict';

import { useContext } from 'react';
import { Photo } from './types/Photo';
import { RestClientContext } from './restClient';
import { User } from './types/User';
import { History } from './types/History';
import { SearchQuery } from './types/SearchQuery';
import { LikeQuery } from './types/LikeQuery';
import { Like } from './types/Like';

const apiEndpoints = {
    SEARCH: (userId: string) => `/search/${userId}`,
    LOGIN: (username: string) => `/auth/login/${username}`,
    SIGNUP: (username: string) => `/auth/register/${username}`,
    HISTORY: (userId: string) => `/history/${userId}`,
    GUEST: () => `/auth/guest`,
    LIKE: (userId: string) => `/like/${userId}`,
    DISLIKE: (userId: string) => `/removeLike/${userId}`,
};

export const usePageRestClient = (userId: string) => {
    const restClient = useContext(RestClientContext);
    return {
        search: (query: SearchQuery): Promise<Photo[]> =>
            restClient.post<Photo[]>(apiEndpoints.SEARCH(userId), query).then((res) => res.data),
        login: (username: string, query: User): Promise<User> =>
            restClient.post<User>(apiEndpoints.LOGIN(username), query).then((res) => res.data),
        signup: (username: string, query: User): Promise<User> =>
            restClient.post<User>(apiEndpoints.SIGNUP(username), query).then((res) => res.data),
        guest: (): Promise<User> => restClient.post<User>(apiEndpoints.GUEST()).then((res) => res.data),
        history: (): Promise<History[]> =>
            restClient.get<History[]>(apiEndpoints.HISTORY(userId)).then((res) => res.data),
        like: (query: LikeQuery): Promise<Like> =>
            restClient.post<Like>(apiEndpoints.LIKE(userId), query).then((res) => res.data),
        dislike: (query: LikeQuery): Promise<Like> =>
            restClient.post<Like>(apiEndpoints.LIKE(userId), query).then((res) => res.data),
    };
};
