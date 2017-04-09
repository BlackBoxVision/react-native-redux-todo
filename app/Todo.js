import React from 'react';

import i18n from './config/i18n';
import icons from './resources/icons';

import configureStore from './redux/helper/configureStore';

import ScreenManager from './screens/Manager';
import DataProvider from './common/DataProvider';

import withStatusBar from './common/hoc/withStatusBar';

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