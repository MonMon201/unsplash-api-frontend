import React, { useState } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { User } from '../../types/User';
import { usePageRestClient } from '../../pageRestClient';

interface LoginProps {
    user: User;
    setUser: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ user, setUser }) => {
    const [username, setUsername] = useState<string>('');
    const restClient = usePageRestClient(user.id);
    const submit = () => {
        restClient.login(username).then((data) => {
            setUser(data);
            console.log(user);
        });
    };
    return (
        <StyledAuth>
            <Form title={'Login'} setUsername={setUsername} submit={submit} />
        </StyledAuth>
    );
};
