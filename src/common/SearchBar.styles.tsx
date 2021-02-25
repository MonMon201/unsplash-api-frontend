import styled from 'styled-components';
import { itemContainer } from '../common/ItemContainer.styles';
import { colors } from '../colors';

export const StyledSearchBar = styled(itemContainer)`
    width: 100%;
    height: 60px;
    padding: 1px;
    border-radius: 10px;
    border: 1px solid black;
    background: ${colors.white10};
`;
