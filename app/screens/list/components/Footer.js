import React, { Component, PropTypes } from 'react';
import { Footer } from 'native-base';
import { translate } from 'react-i18next';

import FooterItem from './FooterItem';

@translate()
export default class TodoFooter extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        t: PropTypes.func.isRequired,
        changeFilter: PropTypes.func.isRequired,
        tabs: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        backgroundColor: '#673AB7',
        tabs: [
            {
                filter: 'all',
                icon: 'assignment'
            },
            {
                filter: 'active',
                icon: 'assignment-late'
            },
            {
                filter: 'complete',
                icon: 'assignment-turned-in'
            }
        ]
    };

    render() {
        const { props } = this;
        const styles = this.getStyles(props);

        return (
            <Footer style={styles.footer}>
                {props.tabs.map(this.getItemRenderer(props, styles))}
            </Footer>
        )
    }

    getItemRenderer = (props, styles) => ({ icon, filter }, index) => (
        <FooterItem
            key={`footer-item-key${index}`}
            icon={icon}
            filter={filter}
            message={props.t(filter)}
            currentFilter={props.filter}
            changeFilter={() => props.changeFilter(filter)}
            style={styles.footer}
        />
    );

    getStyles = (props) => ({
        footer: {
            backgroundColor: props.backgroundColor
        }
    })
}