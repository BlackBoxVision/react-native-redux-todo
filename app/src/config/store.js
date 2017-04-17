"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var storage = require("redux-storage");
var redux_storage_engine_reactnativeasyncstorage_1 = require("redux-storage-engine-reactnativeasyncstorage");
var remote_redux_devtools_1 = require("remote-redux-devtools");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("../redux/reducers");
var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = redux_logger_1.createLogger({
    predicate: function (getState, action) { return isDebuggingInChrome; },
    collapsed: true,
    duration: true,
    diff: true,
});
function configureStore(onComplete) {
    if (onComplete === void 0) { onComplete = function () { }; }
    var engine = redux_storage_engine_reactnativeasyncstorage_1.default('AppTree');
    var storeMiddleware = storage.createMiddleware(engine);
    var store = redux_1.createStore(storage.reducer(reducers_1.default), //Apply redux-storage so we can persist Redux state to disk
    redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default, storeMiddleware, logger), remote_redux_devtools_1.default()));
    if (isDebuggingInChrome) {
        window.store = store;
    }
    var load = storage.createLoader(engine);
    load(store)
        .then(onComplete)
        .catch(function () { return console.log('Failed to load previous state'); });
    return store;
}
exports.default = configureStore;
