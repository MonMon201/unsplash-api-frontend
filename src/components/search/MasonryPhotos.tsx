import React from 'react';
import Masonry from 'react-responsive-masonry';
import { Photo } from '../../interfaces';
import { Slide } from './Slide';

interface MasonryPhotosProps {
    pictures: Photo[];
}

export const MasonryPhotos: React.FC<MasonryPhotosProps> = ({ pictures }) => {
    return (
        <Masonry columnsCount={2} gutter={'10px'}>
            {pictures.map((picture) => {
                return <Slide key={picture.id} url={picture.url} />;
            })}
        </Masonry>
    );
};
