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

import app from '../../../app.json';

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
    static propTypes = {
        items: array.isRequired,
        filter: string.isRequired,
        navigation: object.isRequired,
        actions: objectOf(func).isRequired
    };

    render() {
        const { props, getStyles, addTodo } = this;
        const styles = getStyles(props);

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Title style={styles.title}>
                            {app.displayName}
                        </Title>
                    </Left>
                </Header>
                <TodoList
                    items={props.items}
                    filter={props.filter}
                    toggleTodo={props.actions.toggleTodo}
                    removeTodo={props.actions.removeTodo}
                />
                <FloatingButton onPress={addTodo}/>
                <Footer
                    filter={props.filter}
                    changeFilter={props.actions.visibilityFilter}
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