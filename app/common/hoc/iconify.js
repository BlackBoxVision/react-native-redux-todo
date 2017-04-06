import React, { PropTypes } from 'react';

export default function iconify() {
    return ReactComponent => {
        class IconifyComponent extends React.Component {
            static contextTypes = {
                icons: PropTypes.object.isRequired
            };

            constructor(props, context) {
                super(props, context);
            }

            render() {
                return (
                    <ReactComponent
                        getIcon={this.getIcon}
                        {...this.context}
                        {...this.props}
                    />
                )
            }

            getIcon = key => this.context.icons[key];
        }

        return IconifyComponent;
    }
}
