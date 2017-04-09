import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Left, Title } from 'native-base';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';
import pure from 'recompose/pure';

import FloatingButton from '../../common/FloatingButton';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

import withBackButton from '../../common/hoc/withBackButton';

import * as TodoActions from '../../redux/logic/todo/actions';
import * as TodoSelectors from '../../redux/logic/todo/selector';

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
        items: PropTypes.array.isRequired,
        filter: PropTypes.string.isRequired,
        navigation: PropTypes.object.isRequired,
        actions: PropTypes.objectOf(PropTypes.func).isRequired
    };

    render() {
        const { props, getStyles, addTodo, handleScroll } = this;
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
                    scroll={handleScroll}
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