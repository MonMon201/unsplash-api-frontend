import React from 'react';
import SearchTool from '../assets/SearchTool.svg';
import { StyledSearchBar } from './SearchBar.styles';
import { InputText } from './Input.text';
import { StyledButton } from './Button.styles';

interface SearchBarProps {
    placeholder: string;
    setText: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, setText }) => {
    return (
        <StyledSearchBar>
            <StyledButton>
                <img src={SearchTool} />
            </StyledButton>
            <InputText placeholder={placeholder} setText={setText} />
        </StyledSearchBar>
    );
};
