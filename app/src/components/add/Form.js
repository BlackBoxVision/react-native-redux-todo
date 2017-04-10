import React from 'react';
import { Platform } from 'react-native';
import { func } from 'prop-types';
import { Form, Button, Text, Body } from 'native-base';
import { Field } from 'redux-form';

import TextInput from './TextInput';

export default class TodoForm extends React.Component {
    static propTypes = {
        t: func.isRequired,
        handleSubmit: func.isRequired
    };

    render() {
        const { props, getStyles, getMessage } = this;
        const styles = getStyles(props);

        return (
            <Form>
                <Form>
                    <Field
                        name='title'
                        component={TextInput}
                        placeholder={props.t('todo-title')}
                    />
                    <Field
                        name='description'
                        component={TextInput}
                        placeholder={props.t('todo-description')}
                    />
                    <Button
                        onPress={props.handleSubmit}
                        style={styles.button}
                        primary
                        full
                    >
                        <Body>
                            <Text style={styles.text}>
                                {getMessage(props)}
                            </Text>
                        </Body>
                    </Button>
                </Form>
            </Form>
        );
    }

    getStyles = (props) => ({
        button: {
            height: Platform.OS === 'android' ? 36 : 40,
            paddingHorizontal: 8,
            backgroundColor: '#673AB7',
            marginTop: 8
        },
        text: {
            color: '#FFFFFF'
        }
    });

    getMessage = (props) => Platform.OS === 'ios' ? props.t('todo-submit') : props.t('todo-submit').toUpperCase();
}