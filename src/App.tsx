import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/header/Header';
import { StyledBody } from './components/body/Body.styles';
import { Search } from './components/search/Search';
import { Login } from './components/auth/Login';
import { usePageRestClient } from './pageRestClient';
import { Signup } from './components/auth/Signup';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from './redux/types/user.state';
import { useGuest } from './utils/useGuest';
import { routes } from './routes';

export const App = () => {
    const user = useSelector((state: UserState) => state.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
        console.log(user);
    }, []);
    return (
        <>
            <GlobalStyle />
            <Header user={user} />
            <Router>
                <StyledBody>
                    <Route path={routes.search}>
                        <Search />
                    </Route>
                    <Route path={routes.login}>
                        <Login />
                    </Route>
                    <Route path={routes.signup}>
                        <Signup />
                    </Route>
                </StyledBody>
            </Router>
        </>
    );
};
