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
        const { props, getStyles } = this;
        const styles = getStyles(props);

        return (
            <Fab
                active={props.active}
                direction={props.direction}
                position={props.position}
                onPress={props.onPress}
                containerStyle={styles.fabContainer}
                style={styles.fab}
            >
                <Icon
                    name={props.iconName}
                    size={props.iconSize}
                    color={props.iconColor}
                />
                {props.children}
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