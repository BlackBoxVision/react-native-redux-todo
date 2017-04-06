import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import Todos from './components/Todos';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

import bind from '../../redux/logic/todo/bindings';

import headerStyles from '../../config/header';
import app from '../../../app.json';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
export default class TodoList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        filter: PropTypes.string.isRequired,
        navigation: PropTypes.object.isRequired,
        actions: PropTypes.objectOf(PropTypes.func).isRequired
    };

    static navigationOptions = {
        title: app.displayName,
        header: headerStyles
    };

    render() {
        const { props } = this;

        return (
            <Container>
                <Todos
                    items={props.items}
                    filter={props.filter}
                    toggleTodo={props.actions.toggleTodo}
                    removeTodo={props.actions.removeTodo}
                />
                <FloatingButton onPress={this.addTodo}/>
                <Footer
                    filter={props.filter}
                    changeFilter={props.actions.visibilityFilter}
                />
            </Container>
        );
    }

    addTodo = () => {
        this.props.navigation.navigate('AddTodo');
        this.props.actions.visibilityFilter('all');
    };
}