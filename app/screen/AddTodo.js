import React, { Component, PropTypes } from 'react';
import { Container, Content, Form, InputGroup, Input } from 'native-base';
import { connect } from 'react-redux';

import bind from '../redux/logic/todo/bindings';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
export default class AddTodo extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        actions: PropTypes.objectOf(PropTypes.func)
    }

    static navigationOptions = {
        title: 'Add Todo',
        header: {
            tintColor: '#FFFFFF',
            style: {
                backgroundColor: '#673AB7'
            },
            titleStyle: {
                color: '#FFFFFf'
            }
        }
    };

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: 'space-between' }}>
                    <Form>
                        <InputGroup
                            borderType="underline"
                            style={{ flex: 0.9 }}
                        >
                            <Input
                                value={this.props.value}
                                placeholder='Insert a to do'
                                onSubmitEditing={this.submitTodo}
                                onChangeText={this.props.actions.changeValue}
                            />
                        </InputGroup>
                    </Form>
                </Content>
            </Container>
        )
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
        this.props.navigation.goBack();
    };
}