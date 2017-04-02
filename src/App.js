import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';

export default class TodoApp extends Component {
    state = {
        value: '',
        items: []
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Todo App</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                </Content>
            </Container>
        );
    }
}