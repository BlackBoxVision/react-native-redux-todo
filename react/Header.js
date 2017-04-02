import React, { Component, PropTypes } from 'react';
import { Header, Title, Left } from 'native-base';

export default class AppHeader extends Component {
    static propTypes = {
        displayName: PropTypes.string.isRequired
    };

    render() {
        return (
            <Header>
                <Left>
                    <Title>
                        {this.props.displayName}
                    </Title>
                </Left>
            </Header>
        )
    }
}