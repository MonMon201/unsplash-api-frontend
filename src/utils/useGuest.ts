import { User } from '../types/User';
import { UserActionTypes } from '../redux/types/user.actions';

export const useGuest = (user: User, dispatch: (action: UserActionTypes) => void, guest: () => Promise<User>) => {
    if (!user.id.length) guest().then((data) => dispatch({ type: 'LOGIN', payload: data }));
};
