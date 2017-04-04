import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import bind from '../redux/logic/navigate/bindings';
import Navigator from './routing';

@connect(bind.mapStateToProps)
export default class AppNavigator extends Component {
    render() {
        return (
            <Navigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigate,
                })}
            />
        );
    }
}