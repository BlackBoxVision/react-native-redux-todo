import { bindActionCreators } from 'redux';

import * as TodoActions from '../../../redux/logic/todo/actions';

export default {
    mapStateToProps: state => ({
        value: state.todo.value
    }),
    mapDispatchToProps: dispatch => ({
        actions: bindActionCreators(TodoActions, dispatch)
    })
};