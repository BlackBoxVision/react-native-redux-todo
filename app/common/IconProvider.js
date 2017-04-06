import React, { Component, PropTypes } from 'react';

export default class IconProvider extends Component {
    static propTypes = {
        icons: PropTypes.object.isRequired
    };

    static childContextTypes = {
        icons: PropTypes.object.isRequired
    };

    getChildContext() {
        return {
            icons: this.props.icons
        };
    }

    render() {
        return this.props.children;
    }
}