import React, { Component, PropTypes, Children } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

export default class DataProvider extends Component {
    static propTypes = {
        appTheme: PropTypes.object.isRequired,
        i18n: PropTypes.object.isRequired,
        icons: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    };

    static defaultProps = {
        icons: {},
        appTheme: {}
    }

    static childContextTypes = {
        icons: PropTypes.object.isRequired,
        appTheme: PropTypes.object
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
                    {Children.only(this.props.children)}
                </I18nextProvider>
            </Provider>
        );
    }
}