import React from 'react';
import { StyledForm, StyledFormContainer, StyledSubmitButton, StyledTitleContainer } from './Form.styles';
import { InputName } from './Input.name';

interface FormProps {
    title: string;
    username: string;
    setUsername: (username: string) => void;
    submit: () => void;
}

export const Form: React.FC<FormProps> = ({ title, username, setUsername, submit }) => {
    return (
        <StyledForm>
            <StyledTitleContainer>{title}</StyledTitleContainer>
            <StyledFormContainer>
                <InputName placeholder={`${title}...`} setText={setUsername} username={username} />
                <StyledSubmitButton onClick={submit}>{title}</StyledSubmitButton>
            </StyledFormContainer>
        </StyledForm>
    );
};
