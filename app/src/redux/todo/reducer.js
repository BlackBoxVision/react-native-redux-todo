import TodoActions from './constants';

const initialState = {
    filter: 'all',
    items: []
};

export default function reducer(state = initialState, { type, payload }) {
    const { items } = state;

    switch (type) {
        case TodoActions.ADD_TODO:
            return {
                ...state,
                items: items.concat(payload.todo)
            };

        case TodoActions.TOGGLE_TODO:
            return {
                ...state,
                items: items.map(
                    it => (it.key !== payload.id ? it : { ...it, completed: !it.completed })
                )
            };

        case TodoActions.REMOVE_TODO:
            return {
                ...state,
                items: items.filter(it => it.key !== payload.id)
            };

        case TodoActions.VISIBILITY_FILTER:
            return {
                ...state,
                filter: payload.filter
            };

        default:
            return state;
    }
}
