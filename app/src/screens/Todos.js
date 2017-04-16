import React from 'react';
import { array, string, object, objectOf, func } from 'prop-types';
import { Container, Header, Left, Title } from 'native-base';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';
import pure from 'recompose/pure';

import FloatingButton from '../components/common/FloatingButton';
import TodoList from '../components/list/TodoList';
import Footer from '../components/list/Footer';

import withBackButton from '../components/common/hoc/withBackButton';

import * as TodoActions from '../redux/todo/actions';
import * as TodoSelectors from '../redux/todo/selector';

const mapStateToProps = state => ({
    items: TodoSelectors.getVisibleTodos(state),
    filter: state.todo.filter
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withBackButton(),
    pure
);

@enhance
export default class Todos extends React.Component {
    static displayName = 'Todo App';

    static propTypes = {
        items: array.isRequired,
        filter: string.isRequired,
        navigation: object.isRequired,
        actions: objectOf(func).isRequired
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Title style={styles.title}>
                            {Todos.displayName}
                        </Title>
                    </Left>
                </Header>
                <TodoList
                    items={this.props.items}
                    filter={this.props.filter}
                    toggleTodo={this.props.actions.toggleTodo}
                    removeTodo={this.props.actions.removeTodo}
                />
                <FloatingButton onPress={this.addTodo}/>
                <Footer
                    currentFilter={this.props.filter}
                    changeFilter={this.props.actions.visibilityFilter}
                />
            </Container>
        );
    }

    getStyles = (props) => ({
        header: {
            backgroundColor: '#673AB7'
        },
        title: {
            color: '#FFFFFF'
        }
    });

    addTodo = () => {
        this.props.navigation.navigate('AddTodo');
        this.props.actions.visibilityFilter('all');
    };
}