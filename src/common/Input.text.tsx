import React from 'react';
import { StyledTextInput } from './Input.text.styles';

interface InputTextProps {
    placeholder: string;
    setText: (value: string) => void;
}

export const InputText: React.FC<InputTextProps> = ({ placeholder, setText }) => {
    return (
        <StyledTextInput
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
};
