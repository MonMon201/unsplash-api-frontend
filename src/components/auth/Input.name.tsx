import React from 'react';
import { StyledInputName } from './Input.name.styles';

interface InputNameProps {
    placeholder: string;
    setText: (value: string) => void;
}

export const InputName: React.FC<InputNameProps> = ({ placeholder, setText }) => {
    return (
        <StyledInputName
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
};
