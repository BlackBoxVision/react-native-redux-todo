"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
;
;
;
var initialState = {
    filter: 'all',
    items: []
};
function reducer(state, action) {
    var type = action.type, payload = action.payload;
    var items = state.items;
    switch (type) {
        case constants_1.default.ADD_TODO:
            var addedItems = items.concat(payload.todo);
            return __assign({}, state, { items: addedItems });
        case constants_1.default.TOGGLE_TODO:
            var newItems = items.map(function (it) { return it.key !== payload.id ? it : __assign({}, it, { completed: !it.completed }); });
            return __assign({}, state, { items: newItems });
        case constants_1.default.REMOVE_TODO:
            var filteredItems = items.filter(function (it) { return it.key !== payload.id; });
            return __assign({}, state, { items: filteredItems });
        case constants_1.default.VISIBILITY_FILTER:
            return __assign({}, state, { filter: payload.filter });
        default:
            return initialState;
    }
}
exports.default = reducer;
