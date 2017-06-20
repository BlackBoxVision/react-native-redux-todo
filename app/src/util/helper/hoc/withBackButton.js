import React from 'react';
import PropTypes from 'prop-types';
import { BackAndroid, Platform } from 'react-native';
import connect from 'react-redux/lib/connect/connect';

export default function withBackButton() {
    return ReactComponent => {
        const mapStateToProps = state => ({
            index: state.navigate.index
        });

        @connect(mapStateToProps)
        class BackButtonComponent extends React.Component {
            static propTypes = {
                index: PropTypes.number.isRequired
            };

            constructor(props, context) {
                super(props, context);
            }

            componentDidMount() {
                Platform.OS === 'android' &&
                    BackAndroid.addEventListener('hardwareBackPress', this.handleBackPress);
            }

            componentWillUnmount() {
                Platform.OS === 'android' &&
                    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackPress);
            }

            render() {
                return <ReactComponent {...this.context} {...this.props} />;
            }

            handleBackPress = () => {
                if (this.props.index) {
                    this.props.navigation.goBack();
                    return true;
                } else {
                    return false;
                }
            };
        }

        return BackButtonComponent;
    };
}
