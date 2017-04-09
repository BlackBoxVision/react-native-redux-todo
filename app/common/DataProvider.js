import React from 'react';
import { object } from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

export default class DataProvider extends React.Component {
    static propTypes = {
        appTheme: object.isRequired,
        i18n: object.isRequired,
        icons: object.isRequired,
        store: object.isRequired
    };

    static defaultProps = {
        icons: {},
        appTheme: {}
    }

    static childContextTypes = {
        icons: object.isRequired,
        appTheme: object
    };

    getChildContext() {
        return {
            icons: this.props.icons,
            appTheme: this.props.theme
        };
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <I18nextProvider i18n={this.props.i18n}>
                    {React.Children.only(this.props.children)}
                </I18nextProvider>
            </Provider>
        );
    }
}