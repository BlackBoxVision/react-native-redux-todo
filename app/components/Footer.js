import React, { Component, PropTypes } from 'react';
import { Text, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodoFooter extends Component {
    static propTypes = {
        changeFilter: PropTypes.func
    };

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.props.changeFilter('all')}>
                        <Icon name='assignment' size={20} color="#FFFFFF"/>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => this.props.changeFilter('complete')}>
                        <Icon name='assignment-turned-in' size={20} color="#FFFFFF"/>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button onPress={() => this.props.changeFilter('active')}>
                        <Icon name='assignment-late' size={20} color="#FFFFFF"/>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}