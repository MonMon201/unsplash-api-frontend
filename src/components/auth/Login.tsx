import React, { useState } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/types/root.state';
import { usePageRestClient } from '../../pageRestClient';
import { useSnackbar } from 'react-simple-snackbar';
import { constants } from '../../constants';
import { Redirect } from 'react-router';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    const [username, setUsername] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const [openSnackbar] = useSnackbar();
    const submit = () => {
        restClient
            .login(username, user)
            .then((data) => {
                dispatch({
                    type: 'LOGIN',
                    payload: data,
                });
                setUsername('');
                openSnackbar(`Success: logged in`);
                setRedirect(true);
            })
            .catch((e) => openSnackbar(`Error: ${e.response.data.message}`));
    };
    return (
        <StyledAuth>
            {redirect ? (
                <Redirect to={constants.routes.default} />
            ) : (
                <Form title={'Login'} username={username} setUsername={setUsername} submit={submit} />
            )}
        </StyledAuth>
    );
};
