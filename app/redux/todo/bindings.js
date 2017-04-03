import { bindActionCreators } from 'redux';

import * as TodoActions from './actions';
import * as TodoSelectors from './selector';

export default {
    mapStateToProps: state => ({
        items: TodoSelectors.getByFilter(state),
        text: state.todo.value,
        filter: state.todo.filter
    }),
    mapDispatchToProps: dispatch => ({
        actions: bindActionCreators(TodoActions, dispatch)
    })
};