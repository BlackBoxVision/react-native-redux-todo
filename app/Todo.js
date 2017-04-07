import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';

import i18n from './config/i18n';
import icons from './resources/icons';

import configureStore from './redux/helper/configureStore';

import ScreenManager from './screens/Manager';
import DataProvider from './common/DataProvider';

export default class TodoApp extends Component {
    componentDidMount() {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('#512DA8', true);
        }
    }

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