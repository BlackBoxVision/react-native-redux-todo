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

            getIcon = key => {
                const icon = this.context.icons[key];

                if (!icon) {
                    throw `The icon with ${key} is not present inside icons. Maybe you forget to declare it? Review icons.json`;
                }

                return icon;
            }
        }

        return IconifyComponent;
    }
}
