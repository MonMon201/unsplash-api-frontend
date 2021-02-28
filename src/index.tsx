import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { getPersisted } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import SnackbarProvider from 'react-simple-snackbar';

const { store, persistor } = getPersisted();

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SnackbarProvider>
                    <App />
                </SnackbarProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
