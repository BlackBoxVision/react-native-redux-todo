import TodoActions from './constants';

//Create an standard flux action
const createAction = object => dispatch => dispatch(object);

export function toggleTodo(id) {
    return createAction({
        type: TodoActions.TOGGLE_TODO,
        payload: {
            id
        }
    })
}

export function removeTodo(id) {
    return createAction({
        type: TodoActions.REMOVE_TODO,
        payload: {
            id
        }
    });
}

export function addTodo(todo) {
    return createAction({
        type: TodoActions.ADD_TODO,
        payload: {
            todo
        }
    });
}

export function visibilityFilter(filter) {
    return createAction({
        type: TodoActions.VISIBILITY_FILTER,
        payload: {
            filter
        }
    });
}

