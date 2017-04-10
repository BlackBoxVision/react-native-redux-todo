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
        size: 20
    };

    render() {
        const { props, getStyles, getColor, getMessage } = this;
        const styles = getStyles(props);

        return (
            <FooterTab style={props.style}>
                <Button onPress={props.changeFilter}>
                    <Icon
                        name={props.icon}
                        size={props.size}
                        color={getColor(props)}
                    />
                    <Text style={styles.text}>
                        {getMessage()}
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