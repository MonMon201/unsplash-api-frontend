import React, { useState } from 'react';
import { StyledSearch, StyledSearchBarSection, StyledGridSection } from './Search.styles';
import { SearchBar } from './SearchBar';
import { usePageRestClient } from '../../pageRestClient';
import { Photo } from '../../interfaces';
import { MasonryPhotos } from './MasonryPhotos';
import { User } from '../../types/User';

interface SearchProps {
    user: User;
}

export const Search: React.FC<SearchProps> = ({ user }) => {
    const restClient = usePageRestClient('Guest');
    const [text, setText] = useState<string>('');
    const [pictures, setPictures] = useState<Photo[]>([]);

    const search = async () =>
        setPictures(
            await restClient.search({
                query: text,
            }),
        );

    return (
        <StyledSearch>
            <StyledSearchBarSection>
                <SearchBar placeholder={"Any photos you'd like..."} setText={setText} search={search} />
            </StyledSearchBarSection>
            <StyledGridSection>
                {pictures ? (
                    <>
                        <MasonryPhotos pictures={pictures} />
                    </>
                ) : null}
            </StyledGridSection>
        </StyledSearch>
    );
};
