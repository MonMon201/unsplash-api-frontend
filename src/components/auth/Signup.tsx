import React, { useState, useEffect } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { usePageRestClient } from '../../pageRestClient';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../redux/types/user.state';
import { useGuest } from '../../utils/useGuest';

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const user = useSelector((state: UserState) => state.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
        console.log(user);
    }, []);
    const [username, setUsername] = useState<string>('');
    const submit = () => {
        restClient.signup(username).then((data) => {
            dispatch({
                type: 'LOGIN',
                payload: data,
            });
            console.log(data);
        });
    };
    return (
        <StyledAuth>
            <Form title={'Signup'} setUsername={setUsername} submit={submit} />
        </StyledAuth>
    );
};
