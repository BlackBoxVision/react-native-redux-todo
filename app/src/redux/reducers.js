"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var combineReducers_1 = require("redux/lib/combineReducers");
var redux_form_1 = require("redux-form");
var reducer_1 = require("./todo/reducer");
var reducer_2 = require("./navigate/reducer");
exports.default = combineReducers_1.default({
    todo: reducer_1.default,
    navigate: reducer_2.default,
    form: redux_form_1.reducer
});
