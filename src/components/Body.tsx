import React, { useState } from 'react';
import { StyledBody, StyledSearchBarSection } from './Body.styles';
import { SearchBar } from '../common/SearchBar';

export const Body = () => {
    const [text, setText] = useState<string>('');

    return (
        <StyledBody>
            <StyledSearchBarSection>
                <SearchBar placeholder={'Movie name, actor, release year...'} setText={setText} />
            </StyledSearchBarSection>
        </StyledBody>
    );
};
