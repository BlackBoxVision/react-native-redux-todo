import React, { Component, PropTypes } from 'react';
import { Content, List, Input, InputGroup, Form } from 'native-base';

import EmptyView from './EmptyView';
import TodoItem from './TodoItem';

export default class Todos extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    };

    render() {
        return (
            <Content contentContainerStyle={{ justifyContent: 'space-between' }}>
                {!this.props.items.length && <EmptyView message={`There are no ${this.props.filter} todos`}/>}
                {this.props.items.length > 0 && <List dataArray={this.props.items} renderRow={this.renderItem}/>}
            </Content>
        )
    }

    renderItem = item => (
        <TodoItem
            item={item}
            key={`todo-${item.key}`}
            toggle={() => this.props.toggleTodo(item.key)}
            remove={() => this.props.removeTodo(item.key)}
        />
    );
}