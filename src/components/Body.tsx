import React, { useState } from 'react';
import { StyledBody, StyledSearchBarSection, StyledGridSection } from './Body.styles';
import { SearchBar } from '../common/SearchBar';
import { usePageRestClient } from '../pageRestClient';
import { Photo } from '../interfaces';

export const Body = () => {
    const restClient = usePageRestClient();
    const [text, setText] = useState<string>('');
    const [pictures, setPictures] = useState<Photo[]>([]);

    const search = async () => setPictures(await restClient.search(text));

    return (
        <StyledBody>
            <StyledSearchBarSection>
                <SearchBar placeholder={'Movie name, actor, release year...'} setText={setText} search={search} />
            </StyledSearchBarSection>
            <StyledGridSection>
                {pictures ? (
                    <>
                        {pictures.map((picture) => {
                            return (
                                <div key={picture.id}>
                                    <img src={picture.url} />
                                </div>
                            );
                        })}
                    </>
                ) : null}
            </StyledGridSection>
        </StyledBody>
    );
};
