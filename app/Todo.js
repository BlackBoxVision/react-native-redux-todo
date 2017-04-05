import React, { Component } from 'react';
import { I18nextProvider as TranslationProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './resources/internationalization';

import configureStore from './redux/store/configureStore';

import AppNavigator from './navigation/Navigator';

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <TranslationProvider i18n={i18n}>
                    <AppNavigator/>
                </TranslationProvider>
            </Provider>
        );
    }
}