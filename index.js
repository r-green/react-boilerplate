import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle'
import todoApp from './src/reducers';
import App from './src/components/App';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
   saveState({
       todos: store.getState().todos
   });
}, 1000));


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);