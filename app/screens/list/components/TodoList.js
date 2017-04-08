import React, { Component, PropTypes } from 'react';
import { Content, List } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';
import compose from 'recompose/compose';

import withIcons from '../../../common/hoc/withIcons';

import EmptyView from '../../../common/EmptyView';
import TodoItem from './TodoItem';

const enhance = compose(
    translate(),
    withIcons()
);

@enhance
export default class TodoList extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        t: PropTypes.func.isRequired,
        getIcon: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    };

    render() {
        const { props, getStyles, getItemRenderer } = this;
        const styles = getStyles(props);

        return (
            <Content contentContainerStyle={styles.content}>
                {!props.items.length && <EmptyView iconName={props.getIcon(`filter-${props.filter}`)} text={props.t(`message-${props.filter}`)}/>}
                {!!props.items.length && <List dataArray={props.items} renderRow={getItemRenderer(props, styles)}/>}
            </Content>
        )
    }

    getStyles = (props) => ({
        content: {
            justifyContent: 'space-between',
            padding: 8
        }
    });

    getItemRenderer = (props, styles) => ({ key, title, description, completed }, index) => (
        <TodoItem
            key={`todo-item-key${index}`}
            title={title}
            description={description}
            isCompleted={completed}
            toggleMessage={props.t('is-completed')}
            removeMessage={props.t('remove-todo')}
            toggle={() => props.toggleTodo(key)}
            remove={() => props.removeTodo(key)}
        />
    );
}