import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import * as todoActions from '../redux/todo/actions';
import * as todoSelectors from '../redux/todo/selector';

import app from '../../app.json';

class AppContainer extends Component {
    static propTypes = {
        items: PropTypes.array,
        text: PropTypes.string,
        filter: PropTypes.string,
        addTodo: PropTypes.func,
        toggleTodo: PropTypes.func,
        removeTodo: PropTypes.func,
        changeValue: PropTypes.func,
        clearValue: PropTypes.func,
        visibilityFilter: PropTypes.func
    };

    render() {
        return (
            <Container>
                <Header title={app.displayName}/>
                <Body
                    items={this.props.items}
                    value={this.props.text}
                    filter={this.props.filter}
                    onSubmit={this.submitTodo}
                    onToggle={this.props.toggleTodo}
                    onRemove={this.props.removeTodo}
                    onChangeText={this.props.changeValue}
                />
                <Footer onFilterChange={this.props.visibilityFilter}/>
            </Container>
        );
    }

    submitTodo = () => {
        if (this.props.text.length === 0) return;

        this.props.addTodo({
            key: Date.now(),
            text: this.props.text,
            completed: false
        });

        this.props.clearValue();
    }
}

const mapStateToProps = state => ({
    items: todoSelectors.getItemsByFilter(state),
    text: state.todo.value,
    filter: state.todo.filter
});

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(todoActions.addTodo(todo)),
    toggleTodo: id => dispatch(todoActions.toggleTodo(id)),
    removeTodo: id => dispatch(todoActions.removeTodo(id)),
    visibilityFilter: filter => dispatch(todoActions.visibilityFilter(filter)),
    changeValue: text => dispatch(todoActions.changeValue(text)),
    clearValue: () => dispatch(todoActions.clearValue())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);