import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/header/Header';
import { StyledBody } from './components/body/Body';
import { Search } from './components/search/Search';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { HistoryList } from './components/history/History';
import { constants } from './constants';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <StyledBody>
                    <Route exact path={constants.routes.default} component={Search} />
                    <Route path={constants.routes.login} component={Login} />
                    <Route path={constants.routes.signup} component={Signup} />
                    <Route path={constants.routes.history} component={HistoryList} />
                </StyledBody>
            </Router>
        </>
    );
};
