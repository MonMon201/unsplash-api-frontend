import styled from 'styled-components';
import { colors } from '../colors';
import { itemContainer } from '../common/ItemContainer.styles';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 160px;
    background: ${colors.black10};
    color: ${colors.white10};
`;

export const StyledBar = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-top: 36px;
    height: 100px;
`;

export const StyledLogo = styled(itemContainer)`
    font-size: 30px;
`;

export const StyledText = styled.div`
    margin-left: 10px;
`;

export const StyledUpload = styled(itemContainer)`
    font-size: 24px;
`;
