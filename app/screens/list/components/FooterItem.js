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
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <FooterTab style={{ backgroundColor: '#673AB7' }}>
                <Button onPress={this.props.changeFilter}>
                    <Icon name={this.props.icon} size={20} color={this.getColor(this.props.filter)}/>
                    <Text style={{ color: this.getColor(this.props.filter) }}>
                        {this.getMessage()}
                    </Text>
                </Button>
            </FooterTab>
        );
    }

    getColor = filter => this.props.currentFilter === filter ? '#F8BBD0' : '#FFFFFF';

    getMessage = () => Platform.OS === 'ios' ? capitalize(this.props.message) : this.props.message.toUpperCase();
}