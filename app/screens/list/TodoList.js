import React, { Component, PropTypes } from 'react';
import { Container, Header, Left, Title } from 'native-base';
import { connect } from 'react-redux';

import Todos from './components/Todos';
import Footer from './components/Footer';
import FloatingButton from '../../common/FloatingButton';

import bind from './connect/bindings';
import backify from '../../common/hoc/backify';
import app from '../../../app.json';

@connect(bind.mapStateToProps, bind.mapDispatchToProps)
@backify()
export default class TodoList extends Component {
    static displayName = 'TodoList';

    static propTypes = {
        items: PropTypes.array.isRequired,
        filter: PropTypes.string.isRequired,
        navigation: PropTypes.object.isRequired,
        actions: PropTypes.objectOf(PropTypes.func).isRequired
    };

    render() {
        const { props, getStyles, addTodo } = this;
        const styles = getStyles(props);

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Title style={styles.title}>
                            {app.displayName}
                        </Title>
                    </Left>
                </Header>
                <Todos
                    items={props.items}
                    filter={props.filter}
                    toggleTodo={props.actions.toggleTodo}
                    removeTodo={props.actions.removeTodo}
                />
                <FloatingButton onPress={addTodo}/>
                <Footer
                    filter={props.filter}
                    changeFilter={props.actions.visibilityFilter}
                />
            </Container>
        );
    }

    getStyles = (props) => ({
        header: {
            backgroundColor: '#673AB7'
        },
        title: {
            color: '#FFFFFF'
        }
    });

    addTodo = () => {
        this.props.navigation.navigate('AddTodo');
        this.props.actions.visibilityFilter('all');
    };
}