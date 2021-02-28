import styled from 'styled-components';
import { colors } from '../../../colors';
import { StyledButton } from '../../../common/Button';

export const StyledLikeButton = styled(StyledButton)`
    position: absolute;
    display: flex;
    right: 20px;
    top: 20px;
    width: 48px;
    height: 48px;
    border-radius: 5px;
    background: ${colors.white10};
    align-items: center;
    justify-content: center;
`;
