import React, { Component, PropTypes } from 'react';
import { Header, Title, Left } from 'native-base';

export default class TodoHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <Header>
                <Left>
                    <Title>
                        {this.props.title}
                    </Title>
                </Left>
            </Header>
        )
    }
}