import React  from 'react';
import { string, func, arrayOf } from 'prop-types';
import { Footer } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';

import compose from 'recompose/compose';

import withIcons from '../common/hoc/withIcons';

import FooterItem from './FooterItem';

const enhance = compose(
    translate(),
    withIcons()
);

@enhance
export default class TodoFooter extends React.Component {
    static propTypes = {
        filter: string.isRequired,
        backgroundColor: string.isRequired,
        t: func.isRequired,
        changeFilter: func.isRequired,
        tabs: arrayOf(string).isRequired
    };

    static defaultProps = {
        backgroundColor: '#673AB7',
        tabs: ['all', 'active', 'complete']
    };

    render() {
        const styles = this.getStyles(this.props);

        return (
            <Footer style={styles.footer}>
                {this.props.tabs.map(this.getItemRenderer)}
            </Footer>
        )
    }

    getStyles = (props) => ({
        footer: {
            backgroundColor: props.backgroundColor
        }
    });

    translate = (key, conf = {}) => this.props.t(key, conf);

    getItemRenderer = (item, index) => (
        <FooterItem
            key={`footer-item-key${index}`}
            icon={this.props.getIcon(`filter-${item}`)}
            filter={item}
            message={this.translate(item)}
            currentFilter={this.props.filter}
            changeFilter={() => this.props.changeFilter(item)}
        />
    );
}