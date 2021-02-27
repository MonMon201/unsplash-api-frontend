import styled from 'styled-components';
import { colors } from '../colors';

export const StyledInputText = styled.input`
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    &::placeholder {
        color: ${colors.grey10};
    }
`;
