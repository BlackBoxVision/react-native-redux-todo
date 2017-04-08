import React, { PropTypes } from 'react';
import { BackAndroid, Platform } from 'react-native';
import connect from 'react-redux/lib/connect/connect';

export default function withBackButton(initialRoute = 'Home') {
    return ReactComponent => {
        const mapStateToProps = state => ({
            index: state.navigate.index,
            routes: state.navigate.routes
        });

        @connect(mapStateToProps)
        class BackButtonComponent extends React.Component {
            static propTypes = {
                routes: PropTypes.array.isRequired,
                index: PropTypes.number.isRequired
            }

            constructor(props, context) {
                super(props, context);
            }

            componentDidMount() {
                this.attachBackButton(this.props.routes, this.props.index);
            }

            componentWillReceiveProps(nextProps) {
                this.attachBackButton(nextProps.routes, nextProps.index);
            }

            componentWillUnmount() {
                this.detachBackButton();
            }

            render() {
                return (
                    <ReactComponent
                        {...this.context}
                        {...this.props}
                    />
                )
            }

            attachBackButton = (routes, index) => {
                if (Platform.OS === 'android') {
                    BackAndroid.addEventListener('backPress', () => {
                        if (routes[index].routeName !== initialRoute) {
                            this.props.navigation.goBack();
                            return true;
                        } else {
                            BackAndroid.exitApp();
                            return true;
                        }

                        return false;
                    });
                }
            }

            detachBackButton = () => {
                if (Platform.OS === 'android') {
                    BackAndroid.removeEventListener('backPress');
                }
            }
        }

        return BackButtonComponent;
    }
}
