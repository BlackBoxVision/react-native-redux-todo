import React, { Component, PropTypes } from 'react';
import { Container, Fab } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Body from '../components/Body';
import Footer from '../components/Footer';

import bind from '../redux/logic/todo/bindings';

import app from '../../app.json';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
export default class TodoListScreen extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        filter: PropTypes.string.isRequired,
        actions: PropTypes.objectOf(PropTypes.func)
    };

    static navigationOptions = {
        title: app.displayName,
        header: {
            style: {
                backgroundColor: '#3F51B5'
            },
            titleStyle: {
                color: '#FFFFFf'
            }
        }
    };

    render() {
        return (
            <Container>
                <Body
                    items={this.props.items}
                    value={this.props.value}
                    filter={this.props.filter}
                    submitTodo={this.submitTodo}
                    toggleTodo={this.props.actions.toggleTodo}
                    removeTodo={this.props.actions.removeTodo}
                    changeValue={this.props.actions.changeValue}
                />
                <Fab
                    active={false}
                    direction="right"
                    position="bottomRight"
                    containerStyle={{
                        bottom: 70
                    }}
                    style={{
                        backgroundColor: '#009688'
                    }}>
                    <Icon name="add" size={20} color="#FFFFFF"/>
                </Fab>
                <Footer changeFilter={this.props.actions.visibilityFilter}/>
            </Container>
        );
    }

    submitTodo = () => {
        if (this.props.value.length === 0) {
            return;
        }

        this.props.actions.addTodo({
            key: Date.now(),
            text: this.props.value,
            completed: false
        });

        this.props.actions.clearValue();
    };
}