import React, { useState } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { usePageRestClient } from '../../pageRestClient';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/types/root.state';
import { useSnackbar } from 'react-simple-snackbar';
import { Redirect } from 'react-router';
import { constants } from '../../constants';

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const restClient = usePageRestClient(user.id);
    const [username, setUsername] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const [openSnackbar] = useSnackbar();
    const submit = () => {
        restClient
            .signup(username, user)
            .then((data) => {
                dispatch({
                    type: 'LOGIN',
                    payload: data,
                });
                setUsername('');
                openSnackbar(`Success: ${data.username} was successfully registered`);
                setRedirect(true);
            })
            .catch((e) => openSnackbar(`Error: ${e.response.data.message}`));
    };
    return (
        <StyledAuth>
            {redirect ? (
                <Redirect to={constants.routes.default} />
            ) : (
                <Form title={'Signup'} username={username} setUsername={setUsername} submit={submit} />
            )}
        </StyledAuth>
    );
};
