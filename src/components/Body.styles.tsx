import styled from 'styled-components';

export const StyledBody = styled.body`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledBodySection = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 40px;
`;

export const StyledSearchBarSection = styled(StyledBodySection)`
    width: 60%;
`;
