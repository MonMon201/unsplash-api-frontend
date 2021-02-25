import React from 'react';
import { StyledHeader, StyledBar, StyledLogo, StyledText } from './Header.styles';
import Camera from '../assets/Camera.svg';
import { usePageRestClient } from '../pageRestClient';

export const Header = () => {
    const restClient = usePageRestClient();

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
