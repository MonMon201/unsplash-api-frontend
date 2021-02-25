import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/Header';
import { Body } from './components/Body';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Body />
        </>
    );
};
