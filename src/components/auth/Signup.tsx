import React, { useState } from 'react';
import { StyledAuth } from './Auth.styles';
import { Form } from './Form';
import { User } from '../../types/User';
import { usePageRestClient } from '../../pageRestClient';

interface SignupProps {
    user: User;
    setUser: (user: User) => void;
}

export const Signup: React.FC<SignupProps> = ({ user, setUser }) => {
    const [username, setUsername] = useState<string>('');
    const restClient = usePageRestClient(user.id);
    const submit = () => {
        restClient.signup(username).then((data) => setUser(data));
    };
    return (
        <StyledAuth>
            <Form title={'Signup'} setUsername={setUsername} submit={submit} />
        </StyledAuth>
    );
};
