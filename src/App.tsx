import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/header/Header';
import { StyledBody } from './components/body/Body.styles';
import { Search } from './components/search/Search';
import { Login } from './components/auth/Login';
import { User } from './types/User';
import { usePageRestClient } from './pageRestClient';
import { Signup } from './components/auth/Signup';

export const App = () => {
    const restClient = usePageRestClient('user.id');
    const [user, setUser] = useState<User>({
        id: '',
        username: '',
    });

    useEffect(() => {
        restClient.guest().then((data) => {
            console.log(user);
            setUser(data);
        });
    }, []);

    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <StyledBody>
                    <Route path={'/search'}>
                        <Search user={user} />
                    </Route>
                    <Route path={'/login'}>
                        <Login user={user} setUser={setUser} />
                    </Route>
                    <Route path={'/signup'}>
                        <Signup user={user} setUser={setUser} />
                    </Route>
                </StyledBody>
            </Router>
        </>
    );
};
