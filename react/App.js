import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Text, CheckBox, Left, Input, InputGroup, Footer, FooterTab, Button, Body, Right, Icon } from 'native-base';

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
                <Content contentContainerStyle={{ justifyContent: 'space-between' }}>
                    <View>
                        <InputGroup
                            borderType="underline"
                            style={{ flex: 0.9 }}
                        >
                            <Input
                                value={value}
                                placeholder='Insert a to do'
                                onSubmitEditing={this.handleAdd}
                                onChangeText={this.handleChangeText}
                            />
                        </InputGroup>
                    </View>
                    <List
                        dataArray={items}
                        renderRow={this.renderItem}
                    />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text>All</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Completed</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Active</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    handleChangeText = value => this.setState({ value });

    handleAdd = () => {
        let { items, value } = this.state;

        items.push({
            key: Date.now(),
            text: value,
            completed: false
        })

        this.setState({ items, value: '' });
    }

    getPressHandler = item => {
        return () => {
            let { items } = this.state;

            const index = items.findIndex(it => it.key === item.key);
            items[index].completed = true;

            this.setState({ items });
        }
    }

    renderItem = item => (
        <ListItem>
            <Left>
                <CheckBox onPress={this.getPressHandler(item)} checked={item.completed}/>
            </Left>
            <Body>
                <Text>
                    {item.text}
                </Text>
            </Body>
            <Right>
                <Icon name="md-trash"/>
            </Right>
        </ListItem>
    )
}