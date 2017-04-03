import React, { Component, PropTypes } from 'react';
import { Container } from 'native-base';

import Header from '../components/base/Header';
import Body from '../components/base/Body';
import Footer from '../components/base/Footer';

import app from '../../app.json';

export default class AppContainer extends Component {
    static propTypes = {
        todos: PropTypes.array,
        text: PropTypes.string,
        filter: PropTypes.string,
        toggle: PropTypes.func,
        remove: PropTypes.func,
        addTodo: PropTypes.func,
        clearValue: PropTypes.func,
        changeValue: PropTypes.func,
        changeFilter: PropTypes.func
    };

    state = {
        value: '',
        items: []
    }

    render() {
        const { state: { value, items } } = this;

        return (
            <Container>
                <Header title={app.displayName}/>
                <Body
                    items={items}
                    value={value}
                    filter={this.props.filter}
                    onSubmit={this.handleAdd}
                    onToggle={this.props.toggle}
                    onRemove={this.props.remove}
                    onChangeText={this.handleChangeText}
                />
                <Footer onFilterChange={this.props.changeFilter}/>
            </Container>
        );
    }

    handleChangeText = value => this.setState({ value });

    handleAdd = () => {
        let { items, value } = this.state;

        items.push({
            key: Date.now(),
            text: value,
            completed: false
        })

        this.setState({ items, value: '' });
    }
}