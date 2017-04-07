import React from 'react';
import { BackAndroid, Platform } from 'react-native';

export default function backify() {
    return ReactComponent => {
        class BackifyComponent extends React.Component {
            constructor(props, context) {
                super(props, context);
            }

            componentDidMount() {
                if (Platform.OS === 'android') {
                    BackAndroid.addEventListener('backPress', () => {
                        if (!this.isMainScreen()) {
                            this.props.navigation.goBack();
                            return true;
                        } else {
                            BackAndroid.exitApp();
                            return true;
                        }

                        return false;
                    });
                }
            }

            componentWillUnmount() {
                if (Platform.OS === 'android') {
                    BackAndroid.removeEventListener('backPress');
                }
            }

            render() {
                return (
                    <ReactComponent
                        {...this.context}
                        {...this.props}
                    />
                )
            }

            isMainScreen = () => ReactComponent.displayName === 'TodoList';
        }

        return BackifyComponent;
    }
}
