import React, { Component, PropTypes } from 'react';
import { Text, View } from 'native-base';

export default class EmptyView extends Component {
    static propTypes = {
        message: PropTypes.string
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 200
            }}>
                <Text>
                    {this.props.message}
                </Text>
            </View>
        )
    }
}