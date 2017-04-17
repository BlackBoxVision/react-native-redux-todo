import React, { Component } from 'react';
import { Platform } from 'react-native';
import { array, string, object, objectOf, func } from 'prop-types';
import { Container, Header, Left, Right, Title, Button, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';
import pure from 'recompose/pure';

import FloatingActionButton from '../components/common/FloatingButton';
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

interface Props {
    items: Array<Object>,
    filter: String,
    navigation: {
        navigate: Function,
        goBack: Function
    },
    actions: {
        toggleTodo: Function,
        removeTodo: Function,
        visibilityFilter: Function
    }
};

@enhance
export default class Todos extends Component<Props> {
    static displayName = 'Todo App';

    render() {
        const styles = this.getStyles(this.props);

        const addTodoButton = (
            <Right>
                <Button
                    onPress={this.addTodo}
                    transparent
                >
                    <Icon
                        name='add'
                        size={30}
                        color='#FFFFFF'
                    />
                </Button>
            </Right>
        );

        const title = (
            <Title style={styles.title}>
                {Todos.displayName}
            </Title>
        );

        return (
            <Container>
                <Header style={styles.header}>
                    {Platform.OS === 'ios' && <Left/>}
                    {Platform.OS === 'ios' && <Body>{title}</Body>}
                    {Platform.OS === 'ios' && addTodoButton}
                    {Platform.OS === 'android' && <Left>{title}</Left>}
                </Header>
                <TodoList
                    items={this.props.items}
                    filter={this.props.filter}
                    toggleTodo={this.props.actions.toggleTodo}
                    removeTodo={this.props.actions.removeTodo}
                />
                {Platform.OS === 'android' && <FloatingActionButton onPress={this.addTodo}/>}
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