import React, { Component } from 'react';

import i18n from './config/i18n';
import icons from './resources/icons';

import configureStore from './redux/helper/configureStore';

import ScreenManager from './screens/Manager';
import DataProvider from './common/DataProvider';

export default class TodoApp extends Component {
    render() {
        return (
            <DataProvider
                store={configureStore()}
                icons={icons}
                i18n={i18n}
            >
                <ScreenManager/>
            </DataProvider>
        );
    }
}