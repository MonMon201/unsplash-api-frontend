import React from 'react';
import { StyledAddButton } from './AddButton.styles';
import Add from '../assets/Add.svg';

export const AddButton = () => {
    return (
        <StyledAddButton>
            <img src={Add} />
        </StyledAddButton>
    );
};
