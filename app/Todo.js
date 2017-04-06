import React, { Component } from 'react';
import { I18nextProvider as TranslationProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './config/i18n';

import configureStore from './redux/helper/configureStore';

import ScreenManager from './config/manager';

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <TranslationProvider i18n={i18n}>
                    <ScreenManager/>
                </TranslationProvider>
            </Provider>
        );
    }
}