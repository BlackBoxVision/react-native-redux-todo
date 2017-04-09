import React from 'react';
import { func } from 'prop-types';
import { Form, InputGroup, Input, Button, Text, Body } from 'native-base';
import { Field } from 'redux-form';

const TextInput = ({ input, meta, ...inputProps }) => (
    <InputGroup underline>
        <Input
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            {...inputProps}
        />
    </InputGroup>
);

export default class TodoForm extends React.Component {
    static propTypes = {
        t: func.isRequired,
        handleSubmit: func.isRequired
    };

    render() {
        const { props } = this;

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
                        style={{
                            paddingHorizontal: 8,
                            backgroundColor: '#673AB7',
                            marginTop: 8
                        }}
                        full
                        primary
                    >
                        <Body>
                            <Text style={{ color: '#FFFFFF' }}>
                                {props.t('todo-submit')}
                            </Text>
                        </Body>
                    </Button>
                </Form>
            </Form>
        );
    }
}