import { User } from '../../types/User';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginUserAction {
    type: typeof LOGIN;
    payload: User;
}

interface LogoutUserAction {
    type: typeof LOGOUT;
}

export type UserActionTypes = LoginUserAction | LogoutUserAction;
