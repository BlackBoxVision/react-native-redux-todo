import TodoActions from './constants';

const initialState = {
    filter: 'all',
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return {
                ...state,
                items: state.items.concat(action.payload.todo)
            };

        case TodoActions.TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map(
                    item =>
                        item.key !== action.payload.id
                            ? item
                            : { ...item, completed: !item.completed }
                )
            };

        case TodoActions.REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.key !== action.payload.id)
            };

        case TodoActions.VISIBILITY_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            };

        default:
            return state;
    }
}
