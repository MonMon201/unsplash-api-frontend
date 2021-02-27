import styled from 'styled-components';
import { colors } from '../../colors';
import { StyledInputText } from '../../common/Input.text';

export const StyledInputName = styled(StyledInputText)`
    width: 100%;
    height: 26px;
    margin-top: 20px;
    padding-left: 15px;
    border: 1px solid ${colors.white10};
    background: ${colors.white10};
    color: ${colors.black10};
`;
