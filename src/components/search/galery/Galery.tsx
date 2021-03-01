import React from 'react';
import Masonry from 'react-responsive-masonry';
import { Photo } from '../../../types/Photo';
import { GaleryPhoto } from './GaleryPhoto';

interface GaleryProps {
    pictures: Photo[];
    user: string;
}

export const Galery: React.FC<GaleryProps> = ({ pictures, user }) => {
    return (
        <Masonry columnsCount={2} gutter={'10px'}>
            {pictures.map((picture, i) => {
                return <GaleryPhoto key={i} picture={picture} userId={user} />;
            })}
        </Masonry>
    );
};
