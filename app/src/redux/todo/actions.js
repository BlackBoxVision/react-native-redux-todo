"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
//Create an standard flux action
var createAction = function (object) { return function (dispatch) { return dispatch(object); }; };
function toggleTodo(id) {
    return createAction({
        type: constants_1.default.TOGGLE_TODO,
        payload: {
            id: id
        }
    });
}
exports.toggleTodo = toggleTodo;
function removeTodo(id) {
    return createAction({
        type: constants_1.default.REMOVE_TODO,
        payload: {
            id: id
        }
    });
}
exports.removeTodo = removeTodo;
function addTodo(todo) {
    return createAction({
        type: constants_1.default.ADD_TODO,
        payload: {
            todo: todo
        }
    });
}
exports.addTodo = addTodo;
function visibilityFilter(filter) {
    return createAction({
        type: constants_1.default.VISIBILITY_FILTER,
        payload: {
            filter: filter
        }
    });
}
exports.visibilityFilter = visibilityFilter;
