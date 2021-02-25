import styled from 'styled-components';
import { colors } from '../colors';

export const StyledTextInput = styled.input`
    width: 93%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    &::placeholder {
        color: ${colors.grey10};
    }
`;
