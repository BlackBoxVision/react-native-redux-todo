import React from 'react';
import { string, array, func } from 'prop-types';
import { Content, List } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';
import compose from 'recompose/compose';

import withIcons from '../common/hoc/withIcons';

import EmptyView from '../common/EmptyView';
import TodoItem from './TodoItem';

const enhance = compose(
    translate(null, { translateFuncName: 'translate' }),
    withIcons()
);

@enhance
export default class TodoList extends React.Component {
    static propTypes = {
        filter: string.isRequired,
        items: array.isRequired,
        translate: func.isRequired,
        getIcon: func.isRequired,
        toggleTodo: func.isRequired,
        removeTodo: func.isRequired
    };

    render() {
        const styles = this.getStyles(this.props);

        const emptyView = (
            <EmptyView
                iconName={this.props.getIcon(`filter-${this.props.filter}`)}
                text={this.props.translate(`message-${this.props.filter}`)}
            />
        );

        const listView = (
            <List
                dataArray={this.props.items}
                renderRow={this.renderTodoItem}
            />
        );

        return (
            <Content contentContainerStyle={styles.content}>
                {!this.props.items.length && emptyView}
                {!!this.props.items.length && listView}
            </Content>
        )
    }

    getStyles = (props) => ({
        content: {
            justifyContent: 'space-between',
            padding: 8
        }
    });

    renderTodoItem = (todo, index) => (
        <TodoItem
            key={`todo-item-key${index}`}
            title={todo.title}
            description={todo.description}
            isCompleted={todo.completed}
            toggleMessage={this.props.translate('is-completed')}
            removeMessage={this.props.translate('remove-todo')}
            toggle={() => this.props.toggleTodo(todo.key)}
            remove={() => this.props.removeTodo(todo.key)}
        />
    );
}