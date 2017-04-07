import React, { Component, PropTypes } from 'react';
import { Container, Content, Form, InputGroup, Input, Header, Body, Title, Button, Left, Icon, Right } from 'native-base';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import bind from './connect/bindings';
import backify from '../../common/hoc/backify';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
@translate()
@backify()
export default class AddTodo extends Component {
    static displayName = 'AddTodo';

    static propTypes = {
        value: PropTypes.string.isRequired,
        t: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
        actions: PropTypes.objectOf(PropTypes.func).isRequired
    };

    render() {
        const { props, getStyles, goBack, submitTodo } = this;
        const styles = getStyles(props);

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button onPress={goBack(props)} transparent>
                            <Icon name='arrow-back' style={styles.icon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>
                            {props.t('title')}
                        </Title>
                    </Body>
                    <Right />
                </Header>
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
        },
        header: {
            backgroundColor: '#673AB7'
        },
        title: {
            color: '#FFFFFF'
        },
        icon: {
            color: '#FFFFFF'
        }
    });

    goBack = props => _ => props.navigation.goBack();

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