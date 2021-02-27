import { UserActionTypes, LOGIN, LOGOUT } from './types/user.actions';
import { UserState } from './types/user.state';
import { constants } from '../constants';

const initialState: UserState = {
    user: constants.defaultUser,
};

export const rootReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case LOGIN:
            return {
                user: (state.user = action.payload),
            };
        case LOGOUT:
            return {
                user: (state.user = initialState.user),
            };
        default:
            return state;
    }
};
