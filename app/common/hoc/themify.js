import React, { PropTypes } from 'react';

export default function themify() {
    return ReactComponent => {
        class ThemifyComponent extends React.Component {
            static contextTypes = {
                appTheme: PropTypes.object.isRequired
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

        return ThemifyComponent;
    }
}
