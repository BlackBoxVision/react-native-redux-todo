import { bindActionCreators } from 'redux';

import * as TodoActions from '../../../redux/logic/todo/actions';
import * as TodoSelectors from '../../../redux/logic/todo/selector';

export default {
    mapStateToProps: state => ({
        items: TodoSelectors.getVisibleTodos(state),
        filter: state.todo.filter
    }),
    mapDispatchToProps: dispatch => ({
        actions: bindActionCreators(TodoActions, dispatch)
    })
};