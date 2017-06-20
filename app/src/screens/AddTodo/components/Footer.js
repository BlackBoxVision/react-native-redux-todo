import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';

import compose from 'recompose/compose';

import withIcons from '../../../util/helper/hoc/withIcons';

import FooterItem from './FooterItem';

const enhance = compose(translate(null, { translateFuncName: 'translate' }), withIcons());

@enhance
export default class TodoFooter extends React.Component {
    static propTypes = {
        currentFilter: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        translate: PropTypes.func.isRequired,
        changeFilter: PropTypes.func.isRequired,
        tabs: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    static defaultProps = {
        backgroundColor: '#673AB7',
        tabs: ['all', 'active', 'complete']
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <Footer style={styles.footer}>
                {this.props.tabs.map(this.renderTab)}
            </Footer>
        );
    }

    getStyles = props => ({
        footer: {
            backgroundColor: props.backgroundColor
        }
    });

    renderTab = (tabName, index) =>
        <FooterItem
            key={`footer-item-key${index}`}
            message={this.props.translate(tabName)}
            icon={this.props.getIcon(`filter-${tabName}`)}
            changeFilter={() => this.props.changeFilter(tabName)}
            isCurrentFilter={tabName === this.props.currentFilter}
        />;
}
