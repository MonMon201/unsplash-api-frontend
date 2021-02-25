import React from 'react';
import { LikeButton } from './LikeButton';
import { Photo } from '../interfaces';
import { StyledSlide } from './Slide.style';

interface MasonryPhotoProps {
    url: string;
}

export const Slide: React.FC<MasonryPhotoProps> = ({ url }) => {
    return (
        <StyledSlide>
            <LikeButton />
            <img src={url} style={{ width: '100%', display: 'block' }} />
        </StyledSlide>
    );
};
