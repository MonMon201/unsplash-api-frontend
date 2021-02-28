import { Photo } from '../../types/Photo';

export const SET = 'SET';
export const UNSET = 'UNSET';

interface SetPhotoAction {
    type: typeof SET;
    payload: Photo[];
}

interface UnsetPhotoAction {
    type: typeof UNSET;
}

export type PhotoActionTypes = SetPhotoAction | UnsetPhotoAction;
