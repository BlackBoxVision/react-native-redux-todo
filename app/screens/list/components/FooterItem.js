import React, { Component, PropTypes } from 'react';
import { Platform } from 'react-native';
import { FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const capitalize = text => `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;

export default class FooterItem extends Component {
    static propTypes = {
        changeFilter: PropTypes.func.isRequired,
        currentFilter: PropTypes.string.isRequired,
        filter: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        size: PropTypes.number.isRequired
    };

    static defaultProps = {
        size: 20
    };

    render() {
        const { props } = this;
        const styles = this.getStyles(props);

        return (
            <FooterTab style={props.style}>
                <Button onPress={props.changeFilter}>
                    <Icon
                        name={props.icon}
                        size={props.size}
                        color={this.getColor(props)}
                    />
                    <Text style={styles.text}>
                        {this.getMessage()}
                    </Text>
                </Button>
            </FooterTab>
        );
    }

    getColor = (props) => props.currentFilter === props.filter ? '#F8BBD0' : '#FFFFFF';

    getMessage = () => Platform.OS === 'ios' ? capitalize(this.props.message) : this.props.message.toUpperCase();

    getStyles = (props) => ({
        text: {
            color: props.currentFilter === props.filter ? '#F8BBD0' : '#FFFFFF'
        }
    });
}