import React, { Component, PropTypes } from 'react';
import { Dimensions } from 'react-native';
import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EmptyView extends Component {
    static propTypes = {
        message: PropTypes.string
    };

    render() {
        const { height } = Dimensions.get('window');

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: (height/2) - 100
            }}>
                <Icon name={this.props.name} size={60} color='#E91E63'/>
                <Text style={{ color: '#424242' }}>
                    {this.props.message}
                </Text>
            </View>
        )
    }
}