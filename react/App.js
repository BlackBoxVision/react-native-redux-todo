import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Container, Content, List, ListItem, Text, CheckBox, Left } from 'native-base';

import Header from './Header';
import config from '../app.json';


export default class TodoApp extends Component {
    state = {
        value: '',
        items: []
    }

    render() {
        const { state: { value, items } } = this;

        return (
            <Container>
                <Header displayName={config.displayName}/>
                <Content style={{ padding: 8 }}>
                    <TextInput
                        value={value}
                        placeholder='Insert a to do'
                        onSubmitEditing={this.handleAdd}
                        onChangeText={this.handleChangeText}
                    />
                    <List
                        dataArray={items.reverse()}
                        renderRow={this.renderItem}
                    />
                </Content>
            </Container>
        );
    }

    handleChangeText = value => this.setState({ value });

    handleAdd = () => {
        let { items, value } = this.state;

        items = [
            ...items,
            {
                key: Date.now(),
                text: value,
                completed: false
            }
        ]

        this.setState({ items, value: '' });
    }

    getPressHandler = item => {
        return () => {
            let { items } = this.state;

            const index = items.findIndex(it => it.key === item.key);
            items[index] = item;

            this.setState({ items });
        }
    }

    renderItem = ({ text, completed }) => (
        <ListItem>
            <Left>
                <CheckBox checked={completed}/>
            </Left>
            <Text>
                {text}
            </Text>
        </ListItem>
    )
}