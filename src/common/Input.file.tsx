import React from 'react';
import Upload from '../assets/Upload.svg';
import { StyledFileInput, StyledLabelText, StyledContainer, StyledLabel } from './Input.file.styles';

interface InputFileProps {
    addMovies: (movies: File) => void;
}

export const InputFile: React.FC<InputFileProps> = ({ addMovies }) => {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    const setFile = (file: File | null) => {
        fileInputRef.current!.value = '';
        if (file !== null) addMovies(file);
    };

    return (
        <StyledContainer>
            <StyledLabel>
                <img src={Upload} />
                <StyledLabelText>Upload a movie</StyledLabelText>
                <StyledFileInput
                    type={'file'}
                    ref={fileInputRef}
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />
            </StyledLabel>
        </StyledContainer>
    );
};
