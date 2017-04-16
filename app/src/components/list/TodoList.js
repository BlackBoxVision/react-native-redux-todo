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
        const styles = this.getStyles(this.props);

        return (
            <Content contentContainerStyle={styles.content}>
                {!this.props.items.length && <EmptyView iconName={this.props.getIcon(`filter-${this.props.filter}`)} text={this.translate(`message-${this.props.filter}`)}/>}
                {!!this.props.items.length && <List dataArray={this.props.items} renderRow={this.getItemRenderer}/>}
            </Content>
        )
    }

    getStyles = (props) => ({
        content: {
            justifyContent: 'space-between',
            padding: 8
        }
    });

    translate = (key, conf = {}) => this.props.t(key, conf);

    getItemRenderer = ({ key, title, description, completed }, index) => (
        <TodoItem
            key={`todo-item-key${index}`}
            title={title}
            description={description}
            isCompleted={completed}
            toggleMessage={this.translate('is-completed')}
            removeMessage={this.translate('remove-todo')}
            toggle={() => this.props.toggleTodo(key)}
            remove={() => this.props.removeTodo(key)}
        />
    );
}