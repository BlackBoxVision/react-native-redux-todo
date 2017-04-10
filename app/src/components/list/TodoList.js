import React from 'react';
import { string, array, func } from 'prop-types';
import { Content, List } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';
import compose from 'recompose/compose';

import withIcons from '../common/hoc/withIcons';

import EmptyView from '../common/EmptyView';
import TodoItem from './TodoItem';

const enhance = compose(
    translate(),
    withIcons()
);

@enhance
export default class TodoList extends React.Component {
    static propTypes = {
        filter: string.isRequired,
        items: array.isRequired,
        t: func.isRequired,
        getIcon: func.isRequired,
        toggleTodo: func.isRequired,
        removeTodo: func.isRequired
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