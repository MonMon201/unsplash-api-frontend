import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combinedReducer } from './rootReducer';
import { Store } from 'redux';

export const getPersisted = () => {
    const persistedReducer = persistReducer(
        {
            key: 'root',
            storage,
        },
        combinedReducer,
    );
    const store: Store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};
