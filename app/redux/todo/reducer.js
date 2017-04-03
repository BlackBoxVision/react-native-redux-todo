import TodoActions from './constants';

const initialState = {
    filter: 'all',
    value: '',
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TodoActions.ADD_TODO: {
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload.todo
                ]
            };
        }

        case TodoActions.TOGGLE_TODO:
            const newItems = state.items.filter(it => it.key !== action.payload.id);
            const item = state.items.find(it => it.key === action.payload.id);

            return {
                ...state,
                items: [
                    ...newItems,
                    {
                        ...item,
                        completed: !item.completed
                    }
                ]
            };

        case TodoActions.REMOVE_TODO:
            return {
                ...state,
                items: [...state.items].filter(it => it.key !== action.payload.id)
            };

        case TodoActions.VISIBILITY_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            };

        case TodoActions.CHANGE_VALUE:
        case TodoActions.CLEAR_VALUE:
            return {
                ...state,
                value: action.payload.value
            };

        default:
            return state;
    }
}