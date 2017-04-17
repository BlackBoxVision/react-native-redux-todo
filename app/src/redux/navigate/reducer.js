"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("../../config/navigation");
function reducer(state, action) {
    var newState = navigation_1.default.router.getStateForAction(action, state);
    return newState || state;
}
exports.default = reducer;
;
