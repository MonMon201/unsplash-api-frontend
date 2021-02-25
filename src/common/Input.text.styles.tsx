import styled from 'styled-components';
import { colors } from '../colors';

export const StyledTextInput = styled.input`
    width: 85%;
    height: 100%;
    padding-left: 27px;
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    &::placeholder {
        color: ${colors.grey10};
    }
`;
