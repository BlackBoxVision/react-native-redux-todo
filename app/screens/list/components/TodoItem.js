import React, { Component, PropTypes } from 'react';
import { CardItem, Text, CheckBox, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodoItem extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        color: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        toggle: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
    };

    static defaultProps = {
        color: '#E91E63',
        iconName: 'delete',
        size: 20
    };

    render() {
        return (
            <CardItem>
                <Left>
                    <CheckBox
                        color={this.props.color}
                        onPress={this.props.toggle}
                        checked={this.props.isCompleted}
                    />
                </Left>
                <Body>
                    <Text>
                        {this.props.message}
                    </Text>
                </Body>
                <Right>
                    <Icon
                        onPress={this.props.remove}
                        name={this.props.iconName}
                        size={this.props.size}
                        color={this.props.color}
                    />
                </Right>
            </CardItem>
        )
    }
}