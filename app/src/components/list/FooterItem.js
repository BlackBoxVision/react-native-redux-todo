import React from 'react';
import { func, string, object, number } from 'prop-types';
import { Platform } from 'react-native';
import { FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const capitalize = text => `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;

export default class FooterItem extends React.Component {
    static propTypes = {
        changeFilter: func.isRequired,
        currentFilter: string.isRequired,
        filter: string.isRequired,
        message: string.isRequired,
        icon: string.isRequired,
        style: object.isRequired,
        size: number.isRequired
    };

    static defaultProps = {
        size: 20,
        style: {
            backgroundColor: '#673AB7'
        }
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <FooterTab style={this.props.style}>
                <Button onPress={this.props.changeFilter}>
                    <Icon
                        name={this.props.icon}
                        size={this.props.size}
                        color={this.getColor(this.props)}
                    />
                    <Text style={styles.text}>
                        {this.getMessage()}
                    </Text>
                </Button>
            </FooterTab>
        );
    }

    getColor = props => props.currentFilter === props.filter ? '#F8BBD0' : '#FFFFFF';

    getMessage = () => Platform.OS === 'ios' ? capitalize(this.props.message) : this.props.message.toUpperCase();

    getStyles = (props) => ({
        text: {
            color: props.currentFilter === props.filter ? '#F8BBD0' : '#FFFFFF'
        }
    });
}