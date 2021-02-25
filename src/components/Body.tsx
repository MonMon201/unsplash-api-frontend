import React, { useState } from 'react';
import { StyledBody, StyledSearchBarSection, StyledGridSection } from './Body.styles';
import { SearchBar } from '../common/SearchBar';
import { usePageRestClient } from '../pageRestClient';
import { Photo } from '../interfaces';
import { MasonryPhotos } from './MasonryPhotos';
import { Slide } from './Slide';

export const Body = () => {
    const restClient = usePageRestClient();
    const [text, setText] = useState<string>('');
    const [pictures, setPictures] = useState<Photo[]>([]);

    const search = async () => setPictures(await restClient.search(text));
    const way =
        'https://images.unsplash.com/photo-1508402476522-c77c2fa4479d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDk3NDR8MHwxfHNlYXJjaHwxfHxzdGFyfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=400';

    return (
        <StyledBody>
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
        </StyledBody>
    );
};
