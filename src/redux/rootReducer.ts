import { combineReducers } from 'redux';
import { photoReducer } from './reducers/photos.reducer';
import { userReducer } from './reducers/user.reducer';

export const combinedReducer = combineReducers({
    user: userReducer,
    photo: photoReducer,
});
