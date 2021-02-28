import React, { useState, useEffect } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/types/root.state';
import { useGuest } from '../../utils/useGuest';
import { usePageRestClient } from '../../pageRestClient';
import { useSnackbar } from 'react-simple-snackbar';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    const [username, setUsername] = useState<string>('');
    const [openSnackbar] = useSnackbar();
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
    }, []);
    const submit = () => {
        restClient
            .login(username)
            .then((data) => {
                dispatch({
                    type: 'LOGIN',
                    payload: data,
                });
                setUsername('');
                openSnackbar(`Success: logged in`);
            })
            .catch((e) => openSnackbar(`Error: ${e.response.data.message}`));
    };
    return (
        <StyledAuth>
            <Form title={'Login'} username={username} setUsername={setUsername} submit={submit} />
        </StyledAuth>
    );
};
