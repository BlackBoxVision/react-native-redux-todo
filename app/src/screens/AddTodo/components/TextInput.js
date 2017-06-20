import React from 'react';
import { object } from 'prop-types';
import { InputGroup, Input } from 'native-base';

export default class TextInput extends React.Component {
    static propTypes = {
        input: object.isRequired,
        meta: object.isRequired
    };

    render() {
        const { input, meta, ...inputProps } = this.props;

        return (
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
    }
}
