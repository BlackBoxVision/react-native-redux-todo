import React, { Component } from 'react';
import { I18nextProvider as TranslationProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './config/i18n';
import icons from './resources/icons';

import configureStore from './redux/helper/configureStore';

import ScreenManager from './screens/Manager';
import IconProvider from './common/IconProvider';

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <TranslationProvider i18n={i18n}>
                    <IconProvider icons={icons}>
                        <ScreenManager/>
                    </IconProvider>
                </TranslationProvider>
            </Provider>
        );
    }
}