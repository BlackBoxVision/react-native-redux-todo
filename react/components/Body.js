import React, { Component, PropTypes } from 'react';
import { Content, List, Input, InputGroup, Form } from 'native-base';

import TodoItem from './TodoItem';

export default class TodoBody extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onChangeText: PropTypes.func.isRequired,
        onToggle: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired
    };

    render() {
        return (
            <Content contentContainerStyle={{ justifyContent: 'space-between' }}>
                <Form>
                    <InputGroup
                        borderType="underline"
                        style={{ flex: 0.9 }}
                    >
                        <Input
                            value={this.props.value}
                            placeholder='Insert a to do'
                            onSubmitEditing={this.props.onSubmit}
                            onChangeText={this.props.onChangeText}
                        />
                    </InputGroup>
                </Form>
                <List
                    dataArray={this.props.items}
                    renderRow={this.renderItem}
                />
            </Content>
        )
    }

    renderItem = item => (
        <TodoItem
            item={item}
            key={`todo-${item.key}`}
            toggle={() => this.props.onToggle(item.key)}
            remove={() => this.props.onRemove(item.key)}
        />
    );
}