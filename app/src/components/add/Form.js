import React from 'react';
import { Platform } from 'react-native';
import { func } from 'prop-types';
import { Form, Button, Text, Body } from 'native-base';
import { Field } from 'redux-form';

import TextInput from './TextInput';

export default class TodoForm extends React.Component {
    static propTypes = {
        translate: func.isRequired,
        onSubmit: func.isRequired
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <Form>
                <Form>
                    <Field
                        name='title'
                        component={TextInput}
                        placeholder={this.translate('todo-title')}
                    />
                    <Field
                        name='description'
                        component={TextInput}
                        placeholder={this.translate('todo-description')}
                    />
                    <Button
                        onPress={this.props.onSubmit}
                        style={styles.button}
                        primary
                        full
                    >
                        <Body>
                            <Text style={styles.text}>
                                {this.getMessage()}
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

    translate = (key, conf = {}) => this.props.translate(key, conf);

    getMessage = _ => {
        const message = this.translate('todo-submit');

        return Platform.OS === 'ios' ? message : message.toUpperCase();
    };
}