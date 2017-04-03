import React, { Component, PropTypes } from 'react';
import { ListItem, Text, CheckBox, Left, Body, Right, Icon } from 'native-base';

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
                        name="md-trash"
                    />
                </Right>
            </ListItem>
        )
    }
}