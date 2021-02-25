import styled from 'styled-components';

export const StyledBody = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
`;

const StyledBodySection = styled.section`
    display: flex;
    padding-top: 40px;
`;

export const StyledSearchBarSection = styled(StyledBodySection)`
    width: 60%;
`;

export const StyledGridSection = styled(StyledBodySection)`
    width: 80%;
`;
