import React, { Component, PropTypes } from 'react';
import { Text, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodoFooter extends Component {
    static propTypes = {
        onFilterChange: PropTypes.func
    };

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.props.onFilterChange('all')}>
                        <Icon name='assignment' size={20} color="#FFFFFF"/>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => this.props.onFilterChange('complete')}>
                        <Icon name='assignment-turned-in' size={20} color="#FFFFFF"/>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => this.props.onFilterChange('active')}>
                        <Icon name='assignment-late' size={20} color="#FFFFFF"/>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}