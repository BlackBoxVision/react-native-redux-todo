import React from 'react';

import i18n from './config/i18n';
import icons from '../res/icons.json';

import configureStore from './config/store';

import ScreenManager from './components/Manager';
import DataProvider from './components/common/DataProvider';

import withStatusBar from './components/common/hoc/withBar';

@withStatusBar('#512DA8')
export default class TodoApp extends React.Component {
    render() {
        return (
            <DataProvider store={configureStore()} icons={icons} i18n={i18n}>
                <ScreenManager/>
            </DataProvider>
        );
    }
}