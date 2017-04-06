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
        t: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    };

    render() {
        const { props } = this;
        const styles = this.getStyles(props);

        return (
            <Content contentContainerStyle={styles.content}>
                {!props.items.length && <EmptyView name={this.getName(props.filter)} message={props.t(`message-${props.filter}`)}/>}
                {!!props.items.length && <List dataArray={props.items} renderRow={this.getItemRenderer(props, styles)}/>}
            </Content>
        )
    }

    getItemRenderer = (props, styles) => ({ key, text, completed }, index) => (
        <TodoItem
            key={`todo-item-key${index}`}
            message={text}
            isCompleted={completed}
            toggle={() => props.toggleTodo(key)}
            remove={() => props.removeTodo(key)}
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

    getStyles = (props) => ({
        content: {
            justifyContent: 'space-between'
        }
    });
}