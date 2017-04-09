import React from 'react';
import { object } from 'prop-types';

export default function withTheme() {
    return ReactComponent => {
        class ThemableComponent extends React.Component {
            static contextTypes = {
                appTheme: object.isRequired
            };

            constructor(props, context) {
                super(props, context);
            }

            render() {
                return (
                    <ReactComponent
                        appTheme={this.context.appTheme}
                        {...this.context}
                        {...this.props}
                    />
                )
            }
        }

        return ThemableComponent;
    }
}
