import React, { useState, useEffect } from 'react';
import { StyledSearch, StyledSearchBarSection, StyledGridSection } from './Search.styles';
import { SearchBar } from './SearchBar';
import { usePageRestClient } from '../../pageRestClient';
import { Photo } from '../../types/Photo';
import { MasonryPhotos } from './MasonryPhotos';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../../redux/types/user.state';
import { useGuest } from '../../utils/useGuest';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
    const user = useSelector((state: UserState) => state.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
        console.log(user);
    }, []);
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
