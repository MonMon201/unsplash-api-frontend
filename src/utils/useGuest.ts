import { User } from '../types/User';
import { RootActionTypes } from '../redux/types/root.actions';

export const useGuest = (user: User, dispatch: (action: RootActionTypes) => void, guest: () => Promise<User>) => {
    if (!user.id.length) {
        guest().then((data) => {
            dispatch({ type: 'LOGIN', payload: data });
        });
    }
};
