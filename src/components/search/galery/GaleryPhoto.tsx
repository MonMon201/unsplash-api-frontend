import React from 'react';
import { LikeButton } from './LikeButton';
import { StyledSlide, StyledImage } from './GaleryPhoto.style';
import { Photo } from '../../../types/Photo';

interface GaleryPhotoProps {
    picture: Photo;
    userId: string;
}

export const GaleryPhoto: React.FC<GaleryPhotoProps> = ({ picture, userId }) => {
    return (
        <StyledSlide>
            <LikeButton picture={picture} userId={userId} />
            <StyledImage src={picture.url} />
        </StyledSlide>
    );
};
