import styled from 'styled-components';
import { itemContainer } from '../../common/ItemContainer';
import { colors } from '../../colors';
import { StyledButton } from '../../common/Button';

export const StyledSearchBar = styled(itemContainer)`
    width: 100%;
    height: 60px;
    padding: 1px;
    border-radius: 10px;
    border: 1px solid black;
    background: ${colors.white10};
`;

export const StyledSearchButton = styled(StyledButton)`
    width: 7%;
    height: 100%;
`;
