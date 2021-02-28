import { combinedReducer } from '../rootReducer';

export type RootState = ReturnType<typeof combinedReducer>;
