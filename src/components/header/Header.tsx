import React, { useEffect } from 'react';
import {
    StyledHeader,
    StyledBar,
    StyledLogo,
    StyledText,
    StyledAuth,
    StyledSignup,
    StyledHistory,
} from './Header.styles';
import { Link } from '../../common/A';
import Camera from '../../assets/Camera.svg';
import Exit from '../../assets/Exit.svg';
import { usePageRestClient } from '../../pageRestClient';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../redux/types/user.state';
import { useGuest } from '../../utils/useGuest';
import { constants } from '../../constants';
import { LOGOUT } from '../../redux/types/user.actions';
import { User } from '../../types/User';
import { routes } from '../../routes';

interface HeaderProps {
    user: User;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
    const dispatch = useDispatch();
    const logout = () => {
        console.log('Logout');
        dispatch({
            type: LOGOUT,
        });
    };
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
    });

    return (
        <StyledHeader>
            <StyledBar>
                <StyledLogo>
                    <Link href={routes.search}>
                        <img src={Camera} />
                        <StyledText>Go photos</StyledText>
                    </Link>
                </StyledLogo>

                <StyledHistory>History</StyledHistory>

                {user.username !== constants.GUEST ? (
                    <StyledAuth>
                        <img src={Exit} />
                        <Link onClick={logout}>
                            <StyledText>Logout</StyledText>
                        </Link>
                    </StyledAuth>
                ) : (
                    <StyledAuth>
                        <Link href={routes.login}>Sign In</Link>
                        <StyledSignup>
                            <Link href={routes.signup}>Sign Up</Link>
                        </StyledSignup>
                    </StyledAuth>
                )}
            </StyledBar>
        </StyledHeader>
    );
};
