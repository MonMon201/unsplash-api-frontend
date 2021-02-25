'use strict';

import { useContext } from 'react';
import { Photo } from './interfaces';
import { RestClientContext } from './restClient';

const apiEndpoints = {
    SEARCH: (item: string) => `/search/${item}`,
};

export const usePageRestClient = () => {
    const restClient = useContext(RestClientContext);
    return {
        search: (item: string): Promise<Photo[]> => restClient.get(apiEndpoints.SEARCH(item)).then((res) => res.data),
    };
};
