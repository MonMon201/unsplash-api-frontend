import React from 'react';
import { StyledInputQuery } from './Input.query.styles';

interface InputQueryProps {
    placeholder: string;
    setText: (value: string) => void;
}

export const InputQuery: React.FC<InputQueryProps> = ({ placeholder, setText }) => {
    return (
        <StyledInputQuery
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
};
