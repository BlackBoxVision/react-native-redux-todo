import React, { Component, PropTypes } from 'react';
import { Content, List } from 'native-base';
import { translate } from 'react-i18next';

import iconify from '../../../common/hoc/iconify';

import EmptyView from '../../../common/EmptyView';
import TodoItem from './TodoItem';

@translate()
@iconify()
export default class Todos extends Component {
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
            justifyContent: 'space-between'
        }
    });

    getItemRenderer = (props, styles) => ({ key, text, completed }, index) => (
        <TodoItem
            key={`todo-item-key${index}`}
            message={text}
            isCompleted={completed}
            toggle={() => props.toggleTodo(key)}
            remove={() => props.removeTodo(key)}
        />
    );
}