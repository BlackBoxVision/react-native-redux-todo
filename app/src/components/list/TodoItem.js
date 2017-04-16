import React from 'react';
import { number, bool, string, func } from 'prop-types';
import { Platform } from 'react-native';
import { Button, Card, CardItem, Text, CheckBox, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodoItem extends React.Component {
    static propTypes = {
        size: number.isRequired,
        isCompleted: bool.isRequired,
        color: string.isRequired,
        title: string.isRequired,
        description: string.isRequired,
        removeMessage: string.isRequired,
        toggleMessage: string.isRequired,
        iconName: string.isRequired,
        toggle: func.isRequired,
        remove: func.isRequired
    };

    static defaultProps = {
        color: '#E91E63',
        iconName: 'delete',
        size: 20
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <Card style={styles.card}>
                <CardItem header>
                    <Icon
                        name="assignment"
                        size={this.props.size}
                        color={this.props.color}
                    />
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={{...styles.text, flex: 1}}
                    >
                        {this.props.title}
                    </Text>
                </CardItem>
                <CardItem content>
                    <Text>{this.props.description}</Text>
                </CardItem>
                <CardItem footer>
                    <Left>
                        <Button
                            onPress={this.props.toggle}
                            transparent
                        >
                            <CheckBox
                                color={this.props.color}
                                onPress={this.props.toggle}
                                checked={this.props.isCompleted}
                                style={styles.checkbox}
                            />
                            <Text style={styles.text}>
                                {Platform.OS === 'ios' ? this.props.toggleMessage : this.props.toggleMessage.toUpperCase()}
                            </Text>
                        </Button>
                    </Left>
                    <Body/>
                    <Right>
                        <Button
                            onPress={this.props.remove}
                            style={styles.button}
                            transparent
                        >
                            <Icon
                                onPress={this.props.remove}
                                name={this.props.iconName}
                                size={this.props.size}
                                color={this.props.color}
                            />
                            <Text style={styles.text}>
                                {Platform.OS === 'ios' ? this.props.removeMessage : this.props.removeMessage.toUpperCase()}
                            </Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }

    getStyles = (props) => ({
        card: {
            borderRadius: 4
        },
        button: {
            marginTop: 3
        },
        checkbox: {
            left: 0
        },
        text: {
            color: props.color,
            marginLeft: 8
        }
    });
}