import React from 'react';
import addNavigationHelpers from 'react-navigation/lib/addNavigationHelpers';
import connect from 'react-redux/lib/connect/connect';

import Navigator from '../config/navigation';

const mapStateToProps = state => ({
    navigate: state.navigate
});

@connect(mapStateToProps)
export default class ScreenManager extends React.Component {
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