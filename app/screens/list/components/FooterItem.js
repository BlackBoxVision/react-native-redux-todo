import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const capitalize = text => `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;

export default class FooterItem extends React.Component {
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