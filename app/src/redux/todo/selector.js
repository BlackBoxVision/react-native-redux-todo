"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var getFilter = function (state) { return state.todo.filter; };
var getTodos = function (state) { return state.todo.items; };
;
function getByFilter(filter, items) {
    switch (filter) {
        case 'complete':
            return items.filter(function (item) { return item.completed; });
        case 'active':
            return items.filter(function (item) { return !item.completed; });
        case 'all':
        default:
            return items;
    }
}
exports.getVisibleTodos = reselect_1.createSelector([getFilter, getTodos], getByFilter);
