'use strict';

import { useContext } from 'react';
import { RestClientContext } from './restClient';

const apiEndpoints = {
    ADD_MOVIES: () => `http://localhost:3001/addMovies`,
};

export const useMovieNightPageRestClient = () => {
    const restClient = useContext(RestClientContext);

    return {
        addMovies: (payload: string) => restClient.post(apiEndpoints.ADD_MOVIES(), payload).then((res) => res.data),
    };
};
