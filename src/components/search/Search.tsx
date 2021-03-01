import React, { useState, useEffect } from 'react';
import { StyledSearch, StyledSearchBarSection, StyledGridSection } from './Search.styles';
import { SearchBar } from './searchBar/SearchBar';
import { usePageRestClient } from '../../pageRestClient';
import { Galery } from './galery/Galery';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/types/root.state';
import { useSnackbar } from 'react-simple-snackbar';
interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const pictures = useSelector((state: RootState) => state.photo.pictures);
    const [openSnackbar] = useSnackbar();
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        dispatch({
            type: 'UNSET',
        });
    }, []);
    const [text, setText] = useState<string>('');

    const search = () => {
        restClient
            .search({
                query: text,
            })
            .then((payload) => {
                dispatch({
                    type: 'SET',
                    payload,
                });
            })
            .catch((e) => openSnackbar(`Error: ${e.response.data.message}`));
    };

    return (
        <StyledSearch>
            <StyledSearchBarSection>
                <SearchBar placeholder={"Any photos you'd like..."} setText={setText} search={search} />
            </StyledSearchBarSection>
            <StyledGridSection>
                {pictures ? (
                    <>
                        <Galery pictures={pictures} user={user.id} />
                    </>
                ) : null}
            </StyledGridSection>
        </StyledSearch>
    );
};
