import styled from 'styled-components';
import { colors } from '../../colors';

export const StyledForm = styled.div`
    display: flex;
    flex-flow: column;
    color: ${colors.white10};
    justify-content: center;
    align-items: center;
    width: 80%;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const StyledTableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
`;

export const StyledTableTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${colors.black10};
    border-radius: 5px 5px 0px 0px;
`;

export const StyledTable = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-template-rows: auto;
    & ${StyledTableContainer} {
        background-color: ${colors.blue20};
    }
    & ${StyledTableContainer}:nth-child(odd) {
        background-color: ${colors.blue10};
    }
    & ${StyledTableContainer}:last-child {
        border-radius: 0px 0px 5px 5px;
    }
`;
