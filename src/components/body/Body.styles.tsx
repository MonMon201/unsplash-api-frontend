import styled from 'styled-components';

export const StyledBody = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > section {
        width: 80%;
    }
`;
