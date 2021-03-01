import { User } from '../types/User';
import { RootActionTypes } from '../redux/types/root.actions';

export const useGuest = (userId: string, dispatch: (action: RootActionTypes) => void, guest: () => Promise<User>) => {
    if (!userId.length) {
        guest().then((data) => {
            dispatch({ type: 'LOGIN', payload: data });
        });
    }
};
