import React from 'react';

import icons from '../res/icons';
import resources from '../res/strings';

import configureI18n from './i18n';
import configureStore from './redux/store';

import ScreenManager from './navigation';
import DataProvider from './util/helper/DataProvider';

import withStatusBar from './util/helper/hoc/withBar';

@withStatusBar('#512DA8')
export default class TodoApp extends React.Component {
    render() {
        return (
            <DataProvider store={configureStore()} i18n={configureI18n(resources)} icons={icons}>
                <ScreenManager />
            </DataProvider>
        );
    }
}
