import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Content } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';
import compose from 'recompose/compose';

import withIcons from '../../../util/helper/hoc/withIcons';

import EmptyView from '../../../util/helper/EmptyView';
import TodoItem from './TodoItem';

const enhance = compose(translate(null, { translateFuncName: 'translate' }), withIcons());

@enhance
export default class TodoList extends React.Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        translate: PropTypes.func.isRequired,
        getIcon: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired
    };

    render() {
        const styles = this.getStyles(this.props);

        let contentView = (
            <EmptyView
                iconName={this.props.getIcon(`filter-${this.props.filter}`)}
                text={this.props.translate(`message-${this.props.filter}`)}
            />
        );

        if (this.props.items.length > 0) {
            contentView = <FlatList data={this.props.items} renderItem={this.renderTodoItem} />;
        }

        return (
            <Content contentContainerStyle={styles.content}>
                {contentView}
            </Content>
        );
    }

    getStyles = props => ({
        content: {
            justifyContent: 'space-between',
            padding: 8
        }
    });

    renderTodoItem = ({ item }) =>
        <TodoItem
            key={item.key}
            title={item.title}
            isCompleted={item.completed}
            description={item.description}
            toggle={() => this.props.toggleTodo(item.key)}
            remove={() => this.props.removeTodo(item.key)}
            toggleMessage={this.props.translate('is-completed')}
            removeMessage={this.props.translate('remove-todo')}
        />;
}
