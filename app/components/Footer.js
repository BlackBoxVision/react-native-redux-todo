import React, { Component, PropTypes } from 'react';
import { Footer } from 'native-base';

import FooterItem from './FooterItem';

export default class TodoFooter extends Component {
    static propTypes = {
        filter: PropTypes.string,
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
            <Footer style={{ backgroundColor: '#673AB7' }}>
                {this.props.tabs.map(this.renderFooterTab)}
            </Footer>
        )
    }

    renderFooterTab = (tab, index) => (
        <FooterItem
            key={`tab-key-${index}`}
            icon={tab.icon}
            filter={tab.filter}
            currentFilter={this.props.filter}
            changeFilter={() => this.props.changeFilter(tab.filter)}
        />
    );
}