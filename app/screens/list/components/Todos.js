import React, { Component, PropTypes } from 'react';
import { Content, List } from 'native-base';
import { translate } from 'react-i18next';

import EmptyView from './EmptyView';
import TodoItem from './TodoItem';

@translate()
export default class Todos extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    };

    render() {
        const { items, filter } = this.props;
        const message = this.props.t(`message-${filter}`);

        return (
            <Content contentContainerStyle={{ justifyContent: 'space-between' }}>
                {!items.length && <EmptyView name={this.getName(filter)} message={message}/>}
                {!!items.length && <List dataArray={items} renderRow={this.renderItem}/>}
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

    getName = filter => {
        switch (filter) {
            case 'complete':
                return 'assignment-turned-in';
            case 'active':
                return 'assignment-late';
            case 'all':
            default:
                return 'assignment';
        }
    }
}