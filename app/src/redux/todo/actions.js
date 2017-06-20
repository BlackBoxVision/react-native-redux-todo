import TodoActions from './constants';

//Create an standard flux action
const createAction = (type, payload) => dispatch => dispatch({ type, payload });

export const addTodo = todo => createAction(TodoActions.ADD_TODO, { todo });
export const toggleTodo = id => createAction(TodoActions.TOGGLE_TODO, { id });
export const removeTodo = id => createAction(TodoActions.REMOVE_TODO, { id });
export const visibilityFilter = filter => createAction(TodoActions.VISIBILITY_FILTER, { filter });