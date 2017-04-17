"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var Todos_1 = require("../screens/Todos");
var AddTodo_1 = require("../screens/AddTodo");
var config = {
    headerMode: 'none'
};
var routes = {
    Home: {
        screen: Todos_1.default
    },
    AddTodo: {
        screen: AddTodo_1.default
    }
};
exports.default = react_navigation_1.StackNavigator(routes, config);
