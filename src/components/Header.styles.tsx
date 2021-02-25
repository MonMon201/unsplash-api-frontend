import styled from 'styled-components';
import { colors } from '../colors';
import { itemContainer } from '../common/ItemContainer.styles';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 130px;
    background: ${colors.black10};
    color: ${colors.white10};
`;

export const StyledBar = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-top: 16px;
    height: 100px;
`;

export const StyledLogo = styled(itemContainer)`
    font-size: 30px;
`;

export const StyledText = styled.div`
    margin-left: 15px;
`;

export const StyledAuth = styled(itemContainer)`
    font-size: 24px;
    color: #00b2ff;
`;

export const StyledSignup = styled(StyledText)`
    display: flex;
    width: 120px;
    height: 35px;
    border: 1px solid #00b2ff;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;
