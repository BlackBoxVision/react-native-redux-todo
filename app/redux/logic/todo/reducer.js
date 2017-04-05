import TodoActions from './constants';

const initialState = {
    filter: 'all',
    value: '',
    items: []
};

export default function reducer(state = initialState, action) {
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

        case TodoActions.CHANGE_VALUE:
        case TodoActions.CLEAR_VALUE:
            return {
                ...state,
                value: payload.value
            };

        default:
            return state;
    }
}