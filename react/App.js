import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import Header from './Header';
import config from '../app.json';


export default class TodoApp extends Component {
    state = {
        value: '',
        items: []
    }

    render() {
        return (
            <Container>
                <Header displayName={config.displayName}/>
                <Content>
                </Content>
            </Container>
        );
    }
}