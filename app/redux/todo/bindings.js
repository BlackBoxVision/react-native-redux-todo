import * as TodoActions from './actions';
import * as TodoSelectors from './selector';

export default {
    mapStateToProps: state => ({
        items: TodoSelectors.getItemsByFilter(state),
        text: state.todo.value,
        filter: state.todo.filter
    }),
    mapDispatchToProps: dispatch => ({
        addTodo: todo => dispatch(TodoActions.addTodo(todo)),
        toggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
        removeTodo: id => dispatch(TodoActions.removeTodo(id)),
        visibilityFilter: filter => dispatch(TodoActions.visibilityFilter(filter)),
        changeValue: text => dispatch(TodoActions.changeValue(text)),
        clearValue: () => dispatch(TodoActions.clearValue())
    })
};