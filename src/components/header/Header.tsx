import React from 'react';
import {
    StyledHeader,
    StyledBar,
    StyledLogo,
    StyledText,
    StyledAuth,
    StyledSignup,
    StyledHistory,
} from './Header.styles';
import { Link } from '../../common/A';
import Camera from '../../assets/Camera.svg';

export const Header = () => {
    return (
        <StyledHeader>
            <StyledBar>
                <StyledLogo>
                    <Link href={'/search'}>
                        <img src={Camera} />
                        <StyledText>Unsplash API</StyledText>
                    </Link>
                </StyledLogo>

                <StyledHistory>History</StyledHistory>

                <StyledAuth>
                    <Link href={'/login'}>Sign In</Link>
                    <StyledSignup>
                        <Link href={'/signup'}>Sign Up</Link>
                    </StyledSignup>
                </StyledAuth>
            </StyledBar>
        </StyledHeader>
    );
};
