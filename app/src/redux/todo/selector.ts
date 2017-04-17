import { createSelector } from 'reselect';

const getFilter = state => state.todo.filter;
const getTodos = state => state.todo.items;

interface Todo {
    completed: Boolean,
    title: String,
    description: String
};

function getByFilter(filter: String, items: Array<Todo>) : Array<Todo> {
    switch (filter) {
        case 'complete':
            return items.filter(item => item.completed);
        case 'active':
            return items.filter(item => !item.completed);
        case 'all':
        default:
            return items;
    }
}

export const getVisibleTodos = createSelector([getFilter, getTodos], getByFilter);