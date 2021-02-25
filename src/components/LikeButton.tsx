import React, { useState } from 'react';
import { StyledLikeButton } from './LikeButton.styles';
import BlackHeart from '../assets/BlackHeart.svg';
import WhiteHeart from '../assets/WhiteHeart.svg';

export const LikeButton = () => {
    const [heart, setHeart] = useState<string>(WhiteHeart);

    const switcher = () => {
        if (heart === WhiteHeart) {
            setHeart(BlackHeart);
        } else {
            setHeart(WhiteHeart);
        }
    };

    return (
        <StyledLikeButton onClick={switcher}>
            <img src={heart} />
        </StyledLikeButton>
    );
};
