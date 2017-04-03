import React, { Component, PropTypes } from 'react';
import { Text, Footer, FooterTab, Button } from 'native-base';

export default class TodoFooter extends Component {
    static propTypes = {
        onFilterChange: PropTypes.func
    };

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.props.onFilterChange('all')}>
                        <Text>All</Text>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => this.props.onFilterChange('completed')}>
                        <Text>Completed</Text>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => this.props.onFilterChange('active')}>
                        <Text>Active</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}