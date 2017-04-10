import React from 'react';
import { string, number } from 'prop-types';
import { Dimensions } from 'react-native';
import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EmptyView extends React.Component {
    static propTypes = {
        color: string.isRequired,
        iconColor: string.isRequired,
        iconName: string.isRequired,
        text: string.isRequired,
        size: number.isRequired,
    };

    static defaultProps = {
        iconColor: '#E91E63',
        color: '#424242',
        size: 60
    };

    render() {
        const { props, getStyles } = this;
        const styles = getStyles(props);

        return (
            <View style={styles.container}>
                <Icon
                    name={props.iconName}
                    size={props.size}
                    color={props.iconColor}
                />
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
        )
    }

    getStyles = (props) => ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: (Dimensions.get('window').height / 2) - 100
        },
        text: {
            color: props.color
        }
    });
}