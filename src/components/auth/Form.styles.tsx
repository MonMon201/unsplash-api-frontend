import styled from 'styled-components';
import { colors } from '../../colors';
import { StyledButton } from '../../common/Button';

export const StyledForm = styled.div`
    display: flex;
    flex-flow: column;
    color: ${colors.white10};
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 200px;
    background: ${colors.black10};
    border-radius: 5px;
`;

export const StyledFormContainer = styled.div`
    display: flex;
    width: 80%;
    flex-flow: row;
`;

export const StyledTitleContainer = styled(StyledFormContainer)`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 30px;
    background-color: ${colors.white10};
    color: ${colors.black10};
    margin-top: -20px;
`;

export const StyledSubmitButton = styled(StyledButton)`
    width: 30%;
    height: 30px;
    margin-left: 2%;
    padding: 0;
    background-color: ${colors.blue10};
    margin-top: 20px;
`;
