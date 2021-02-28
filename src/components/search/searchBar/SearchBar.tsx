import React from 'react';
import SearchTool from '../../../assets/SearchTool.svg';
import { StyledSearchBar, StyledSearchButton } from './SearchBar.styles';
import { InputQuery } from './Input.query';

interface SearchBarProps {
    placeholder: string;
    setText: (value: string) => void;
    search: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, setText, search }) => {
    return (
        <StyledSearchBar>
            <StyledSearchButton onClick={search}>
                <img src={SearchTool} />
            </StyledSearchButton>
            <InputQuery placeholder={placeholder} setText={setText} />
        </StyledSearchBar>
    );
};
