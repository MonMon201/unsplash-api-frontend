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
import { useDispatch, useSelector } from 'react-redux';
import { constants } from '../../constants';
import { LOGOUT } from '../../redux/types/user.actions';
import { RootState } from '../../redux/types/root.state';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [authComp, setAuthComp] = useState<boolean>(true);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({
            type: LOGOUT,
        });
    };
    useEffect(() => {
        setAuthComp(user.username === constants.GUEST || user.id === constants.defaultUser.id);
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
