import React, { useState, useEffect } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { usePageRestClient } from '../../pageRestClient';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/types/root.state';
import { useGuest } from '../../utils/useGuest';
import { useSnackbar } from 'react-simple-snackbar';

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
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
            .signup(username)
            .then((data) => {
                dispatch({
                    type: 'LOGIN',
                    payload: data,
                });
                setUsername('');
                openSnackbar(`Success: ${data.username} was successfully registered`);
            })
            .catch((e) => openSnackbar(`Error: ${e.response.data.message}`));
    };
    return (
        <StyledAuth>
            <Form title={'Signup'} setUsername={setUsername} submit={submit} username={username} />
        </StyledAuth>
    );
};
