import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import AppContainer from './container/AppContainer';

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <AppContainer/>
            </Provider>
        );
    }
}