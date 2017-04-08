import React from 'react';
import { Platform, StatusBar } from 'react-native';

export default function withStatusBar(backgroundColor) {
    return ReactComponent => {
        class StatusBarComponent extends React.Component {
            constructor(props, context) {
                super(props, context);
            }

            componentDidMount() {
                if (Platform.OS === 'android' && Platform.Version >= 21) {
                    StatusBar.setBackgroundColor(backgroundColor, true);
                }
            }

            render() {
                return (
                    <ReactComponent
                        {...this.props}
                        {...this.context}
                    />
                )
            }
        }

        return StatusBarComponent;
    }
}