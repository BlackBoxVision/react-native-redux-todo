import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import bind from '../redux/todo/bindings';

import app from '../../app.json';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
export default class AppContainer extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        text: PropTypes.string.isRequired,
        filter: PropTypes.string.isRequired,
        actions: PropTypes.objectOf(PropTypes.func)
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
                    onToggle={this.props.actions.toggleTodo}
                    onRemove={this.props.actions.removeTodo}
                    onChangeText={this.props.actions.changeValue}
                />
                <Footer onFilterChange={this.props.actions.visibilityFilter}/>
            </Container>
        );
    }

    submitTodo = () => {
        if (this.props.text.length === 0) return;

        this.props.actions.addTodo({
            key: Date.now(),
            text: this.props.text,
            completed: false
        });

        this.props.actions.clearValue();
    }
}