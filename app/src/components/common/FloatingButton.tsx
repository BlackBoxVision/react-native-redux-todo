import React from 'react';
import { func, string, number, bool, any } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Fab } from 'native-base';

export default class FloatingButton extends React.Component {
    static propTypes = {
        onPress: func.isRequired,
        backgroundColor: string.isRequired,
        iconColor: string.isRequired,
        iconName: string.isRequired,
        direction: string.isRequired,
        position: string.isRequired,
        iconSize: number.isRequired,
        active: bool.isRequired,
        children: any
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
        const styles = this.getStyles(this.props);

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

    getStyles = (props) => ({
        fabContainer: {
            bottom: 70
        },
        fab: {
            backgroundColor: props.backgroundColor
        }
    });
}