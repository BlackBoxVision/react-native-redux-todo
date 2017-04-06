import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Fab } from 'native-base';

export default class FloatingButton extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        iconColor: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        direction: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        iconSize: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired,
        children: PropTypes.any
    };

    static defaultProps = {
        active: false,
        direction: 'right',
        position: 'bottomRight',
        backgroundColor: '#E91E63',
        iconName: 'add',
        iconColor: '#FFFFFF',
        iconSize: 20
    }

    render() {
        const styles = this.getStyles();

        return (
            <Fab
                active={this.props.active}
                direction={this.props.direction}
                position={this.props.position}
                onPress={this.props.onPress}
                containerStyle={styles.fabContainer}
                style={styles.fab}
            >
                <Icon
                    name={this.props.iconName}
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                />
                {this.props.children}
            </Fab>
        )
    }

    getStyles = () => ({
        fabContainer: {
            bottom: 70
        },
        fab: {
            backgroundColor: this.props.backgroundColor
        }
    });
}