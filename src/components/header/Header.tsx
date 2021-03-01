import React, { useEffect, useState } from 'react';
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
import { useGuest } from '../../utils/useGuest';
import { constants } from '../../constants';
import { LOGOUT } from '../../redux/types/user.actions';
import { RootState } from '../../redux/types/root.state';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [authComp, setAuthComp] = useState<boolean>(false);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({
            type: LOGOUT,
        });
        setAuthComp(false);
    };
    const restClient = usePageRestClient(user.id);
    useEffect(() => {
        useGuest(user, dispatch, restClient.guest);
    }, []);
    useEffect(() => {
        setAuthComp(user.username === (constants.GUEST || ''));
    });
    return (
        <>
            <StyledHeader>
                <StyledBar>
                    <StyledLogo>
                        <Link href={constants.routes.default}>
                            <img src={Camera} />
                            <StyledText>Go photos</StyledText>
                        </Link>
                    </StyledLogo>

                    <StyledHistory>
                        <Link href={constants.routes.history}>History</Link>
                    </StyledHistory>

                    {authComp ? (
                        <StyledAuth>
                            <Link href={constants.routes.login}>Sign In</Link>
                            <StyledSignup>
                                <Link href={constants.routes.signup}>Sign Up</Link>
                            </StyledSignup>
                        </StyledAuth>
                    ) : (
                        <StyledAuth>
                            <Link href={constants.routes.default} onClick={logout}>
                                <img src={Exit} />
                                <StyledText>Logout</StyledText>
                            </Link>
                        </StyledAuth>
                    )}
                </StyledBar>
            </StyledHeader>
        </>
    );
};
