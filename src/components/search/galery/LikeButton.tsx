import React, { useState } from 'react';
import { StyledLikeButton } from './LikeButton.styles';
import BlackHeart from '../../../assets/BlackHeart.svg';
import WhiteHeart from '../../../assets/WhiteHeart.svg';
import { usePageRestClient } from '../../../pageRestClient';
import { Photo } from '../../../types/Photo';

interface LikeButtonProps {
    picture: Photo;
    userId: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ picture, userId }) => {
    const restClient = usePageRestClient(userId);
    const [heart, setHeart] = useState<string>(picture.like ? BlackHeart : WhiteHeart);

    const switcher = () => {
        if (heart === WhiteHeart) {
            restClient
                .like({
                    photoId: picture.id,
                })
                .then(() => setHeart(BlackHeart));
        } else {
            restClient
                .dislike({
                    photoId: picture.id,
                })
                .then(() => setHeart(WhiteHeart));
        }
    };

    return (
        <StyledLikeButton onClick={switcher}>
            <img src={heart} />
        </StyledLikeButton>
    );
};
