import React, { Component, PropTypes } from 'react';
import { Container, Fab } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        actions: PropTypes.objectOf(PropTypes.func)
    };

    static navigationOptions = {
        title: app.displayName,
        header: headerStyles
    };

    render() {
        return (
            <Container>
                <Todos
                    items={this.props.items}
                    filter={this.props.filter}
                    toggleTodo={this.props.actions.toggleTodo}
                    removeTodo={this.props.actions.removeTodo}
                />
                <FloatingButton onPress={this.addTodo}/>
                <Footer
                    filter={this.props.filter}
                    changeFilter={this.props.actions.visibilityFilter}
                />
            </Container>
        );
    }

    addTodo = () => {
        this.props.navigation.navigate('AddTodo');
        this.props.actions.visibilityFilter('all');
    };
}