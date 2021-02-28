import { PhotoActionTypes } from './photos.actions';
import { UserActionTypes } from './user.actions';

export type RootActionTypes = PhotoActionTypes | UserActionTypes;
