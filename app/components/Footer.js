import React, { Component, PropTypes } from 'react';
import { Platform } from 'react-native';
import { Text, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodoFooter extends Component {
    static propTypes = {
        changeFilter: PropTypes.func,
        tabs: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        tabs: [
            {
                filter: 'all',
                icon: 'assignment'
            },
            {
                filter: 'complete',
                icon: 'assignment-turned-in'
            },
            {
                filter: 'active',
                icon: 'assignment-late'
            }
        ]
    };

    render() {
        return (
            <Footer>
                {this.props.tabs.map(this.renderFooterTab)}
            </Footer>
        )
    }

    renderFooterTab = (tab, index) => (
        <FooterTab key={`tab-key-${index}`}>
            <Button onPress={() => this.props.changeFilter(tab.filter)}>
                <Icon name={tab.icon} size={20} color={Platform.OS === 'ios' ? '#757575' : '#FFFFFF'}/>
                <Text>{tab.filter}</Text>
            </Button>
        </FooterTab>
    )
}