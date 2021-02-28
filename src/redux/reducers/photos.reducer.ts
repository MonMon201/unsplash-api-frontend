import { PhotoActionTypes, SET, UNSET } from '../types/photos.actions';
import { PhotosState } from '../types/photos.state';

const initialState: PhotosState = {
    pictures: [],
};

export const photoReducer = (state: PhotosState = initialState, action: PhotoActionTypes): PhotosState => {
    switch (action.type) {
        case SET:
            return {
                pictures: (state.pictures = action.payload),
            };
        case UNSET:
            return {
                pictures: (state.pictures = initialState.pictures),
            };
        default:
            return state;
    }
};
