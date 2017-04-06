import React, { Component, PropTypes } from 'react';
import { Container, Content, Form, InputGroup, Input } from 'native-base';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import bind from '../../redux/logic/todo/bindings';

import headerStyles from '../../config/header';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
@translate()
export default class AddTodo extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        t: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
        actions: PropTypes.objectOf(PropTypes.func).isRequired
    }

    static navigationOptions = {
        title: 'Add Todo',
        header: headerStyles
    };

    render() {
        const { props, getStyles, submitTodo } = this;
        const styles = getStyles(props);

        return (
            <Container>
                <Content contentContainerStyle={styles.content}>
                    <Form>
                        <InputGroup
                            borderType="underline"
                            style={styles.inputGroup}
                        >
                            <Input
                                value={props.value}
                                placeholder={props.t('add-todo')}
                                onSubmitEditing={submitTodo}
                                onChangeText={props.actions.changeValue}
                            />
                        </InputGroup>
                    </Form>
                </Content>
            </Container>
        )
    }

    getStyles = (props) => ({
        content: {
            justifyContent: 'space-between'
        },
        inputGroup: {
            flex: 0.9
        }
    });

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