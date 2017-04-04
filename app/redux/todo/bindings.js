import { bindActionCreators } from 'redux';

import * as TodoActions from './actions';
import * as TodoSelectors from './selector';

export default {
    mapStateToProps: state => ({
        items: TodoSelectors.getVisibleTodos(state),
        value: state.todo.value,
        filter: state.todo.filter
    }),
    mapDispatchToProps: dispatch => ({
        actions: bindActionCreators(TodoActions, dispatch)
    })
};