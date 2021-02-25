import React from 'react';
import { StyledHeader, StyledBar, StyledLogo, StyledText } from './Header.styles';
import Camera from '../assets/Camera.svg';
import { useMovieNightPageRestClient } from '../movieNightPageRestClient';

export const Header = () => {
    const restClient = useMovieNightPageRestClient();

    const addMovies = (movies: File) => {
        const reader = new FileReader();
        reader.readAsText(movies);
        reader.onloadend = () => {
            const base64 = reader.result;
            if (typeof base64 === 'string') restClient.addMovies(base64).then((res) => console.log(res));
        };
    };

    return (
        <StyledHeader>
            <StyledBar>
                <StyledLogo>
                    <img src={Camera} />
                    <StyledText>Unsplash API</StyledText>
                </StyledLogo>
            </StyledBar>
        </StyledHeader>
    );
};
