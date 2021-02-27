import React, { useState } from 'react';
import { StyledForm, StyledFormContainer, StyledSubmitButton, StyledTitleContainer } from './Form.styles';
import { InputName } from './Input.name';

interface FormProps {
    title: string;
    setUsername: (username: string) => void;
    submit: () => void;
}

export const Form: React.FC<FormProps> = ({ title, setUsername, submit }) => {
    return (
        <StyledForm>
            <StyledTitleContainer>{title}</StyledTitleContainer>
            <StyledFormContainer>
                <InputName placeholder={`${title}...`} setText={setUsername} />
                <StyledSubmitButton onClick={submit}>{title}</StyledSubmitButton>
            </StyledFormContainer>
        </StyledForm>
    );
};
