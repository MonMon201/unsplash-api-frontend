import React, { useState, useEffect } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../../redux/types/user.state';
import { useGuest } from '../../utils/useGuest';
import { usePageRestClient } from '../../pageRestClient';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const user = useSelector((state: UserState) => state.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
        console.log(user);
    }, []);
    const [username, setUsername] = useState<string>('');
    const submit = () => {
        restClient.login(username).then((data) => {
            dispatch({
                type: 'LOGIN',
                payload: data,
            });
            console.log(user);
        });
    };
    return (
        <StyledAuth>
            <Form title={'Login'} setUsername={setUsername} submit={submit} />
        </StyledAuth>
    );
};
