import React, { Component, PropTypes } from 'react';
import { ListItem, Text, CheckBox, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        toggle: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
    };

    render() {
        return (
            <ListItem>
                <Left>
                    <CheckBox
                        color="#009688"
                        onPress={this.props.toggle}
                        checked={this.props.item.completed}
                    />
                </Left>
                <Body>
                    <Text>{this.props.item.text}</Text>
                </Body>
                <Right>
                    <Icon
                        onPress={this.props.remove}
                        name="delete"
                        size={20}
                        color="#757575"
                    />
                </Right>
            </ListItem>
        )
    }
}