import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/header/Header';
import { StyledBody } from './components/body/Body';
import { Search } from './components/search/Search';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/types/root.state';
import { HistoryList } from './components/history/History';
import { usePageRestClient } from './pageRestClient';
import { useGuest } from './utils/useGuest';
import { constants } from './constants';

export const App = () => {
    const user = useSelector((state: RootState) => state.user.user);

    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
    }, []);
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <StyledBody>
                    <Route exact path={constants.routes.default}>
                        <Search />
                    </Route>
                    <Route path={constants.routes.login}>
                        <Login />
                    </Route>
                    <Route path={constants.routes.signup}>
                        <Signup />
                    </Route>
                    <Route path={constants.routes.history}>
                        <HistoryList />
                    </Route>
                </StyledBody>
            </Router>
        </>
    );
};
