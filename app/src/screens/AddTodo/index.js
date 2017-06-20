import React from 'react';
import { func, object, objectOf } from 'prop-types';
import { Container, Content, Header, Body, Title, Button, Left, Icon, Right } from 'native-base';
import bindActionCreators from 'redux/lib/bindActionCreators';
import translate from 'react-i18next/dist/commonjs/translate';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';
import pure from 'recompose/pure';

import { reduxForm } from 'redux-form';

import AddTodoForm from '../Todos/components/Form';
import withBackButton from '../../util/helper/hoc/withBackButton';

import * as TodoActions from '../../redux/todo/actions';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

const enhance = compose(
    connect(null, mapDispatchToProps),
    reduxForm({ form: 'todo' }),
    withBackButton(),
    translate(null, { translateFuncName: 'translate' }),
    pure
);

@enhance
export default class AddTodo extends React.Component {
    static propTypes = {
        translate: func.isRequired,
        navigation: object.isRequired,
        actions: objectOf(func).isRequired
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button onPress={this.goBack} transparent>
                            <Icon name='arrow-back' style={styles.icon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>
                            {this.props.translate('title')}
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                    <AddTodoForm
                        translate={this.props.translate}
                        onSubmit={this.handleSubmit()}
                    />
                </Content>
            </Container>
        )
    }

    getStyles = (props) => ({
        content: {
            justifyContent: 'space-between',
            padding: 8
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

    handleSubmit = () => this.props.handleSubmit(this.submitTodo);

    goBack = _ => this.props.navigation.goBack();

    submitTodo = (values) => {
        if (Object.keys(values).length !== 2) {
            alert(this.props.translate('form'));
            return;
        }

        this.props.actions.addTodo({
            key: Date.now(),
            title: values.title,
            description: values.description,
            completed: false
        });

        this.props.navigation.goBack();
    };
}