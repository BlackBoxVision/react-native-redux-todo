import React from 'react';
import PropTypes from 'prop-types';
import { FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TextHelpers from '../../../util/TextHelpers';

export default class FooterItem extends React.Component {
    static propTypes = {
        isCurrentFilter: PropTypes.bool.isRequired,
        changeFilter: PropTypes.func.isRequired,
        message: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        size: PropTypes.number.isRequired
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
                        color={this.props.isCurrentFilter ? '#F8BBD0' : '#FFFFFF'}
                    />
                    <Text style={styles.text}>
                        {TextHelpers.textByPlatform(this.props.message)}
                    </Text>
                </Button>
            </FooterTab>
        );
    }

    getStyles = (props) => ({
        text: {
            color: props.isCurrentFilter ? '#F8BBD0' : '#FFFFFF'
        }
    });
}