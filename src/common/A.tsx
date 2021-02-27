import styled from 'styled-components';
import { colors } from '../colors';

export const Link = styled.a`
    color: ${(props) => (props.color ? props.color : colors.white10)};
    text-decoration: none;
`;
