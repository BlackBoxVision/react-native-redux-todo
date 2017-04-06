import { createStore, applyMiddleware, compose  } from 'redux';
import { createLogger } from 'redux-logger';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import reducers from './reducers';

// const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// const logger = createLogger({
//     predicate: (getState, action) => isDebuggingInChrome,
//     collapsed: true,
//     duration: true,
//     diff: true,
// });

export default function configureStore(onComplete = () => {}) {
    const engine = createEngine('AppTree');
    const storeMiddleware = storage.createMiddleware(engine);

    let store = createStore(
        storage.reducer(reducers), //Apply redux-storage so we can persist Redux state to disk
        compose(
            applyMiddleware(
                thunk,
                storeMiddleware//,
                //logger
            )//,
            //devTools(),
        )
    );

    // if (isDebuggingInChrome) {
    //     window.helper = helper;
    // }

    const load = storage.createLoader(engine);

    load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'));

    return store;
}