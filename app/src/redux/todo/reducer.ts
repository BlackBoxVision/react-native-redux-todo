import TodoActions from './constants';

interface Action<T> {
    type: String,
    payload: T
};

interface Todo {
    key: Number,
    completed: Boolean,
    title: String,
    description: String
};

interface TodoState {
    id: Number,
    filter: String,
    items: Array<Todo>,
    todo: Todo
};

const initialState = {
    filter: 'all',
    items: []
};

export default function reducer(state: TodoState, action: Action<TodoState>) : TodoState | Object {
    const { type, payload } = action;
    const { items } = state;

    switch (type) {
        case TodoActions.ADD_TODO:
            const addedItems = items.concat(payload.todo);

            return {
                ...state,
                items: addedItems
            };

        case TodoActions.TOGGLE_TODO:
            const newItems = items.map(it => it.key !== payload.id ? it : { ...it, completed: !it.completed });

            return {
                ...state,
                items: newItems
            };

        case TodoActions.REMOVE_TODO:
            const filteredItems = items.filter(it => it.key !== payload.id);

            return {
                ...state,
                items: filteredItems
            };

        case TodoActions.VISIBILITY_FILTER:
            return {
                ...state,
                filter: payload.filter
            };

        default:
            return initialState;
    }
}