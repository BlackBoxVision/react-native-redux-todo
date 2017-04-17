"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var TextHelpers = (function () {
    function TextHelpers() {
    }
    TextHelpers.capitalize = function (text) {
        return "" + text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };
    TextHelpers.textByPlatform = function (text) {
        if (react_native_1.Platform.OS === 'ios') {
            return TextHelpers.capitalize(text);
        }
        else {
            //Uppercase text on Android applies to button/checkbox/switch labels.
            return text.toUpperCase();
        }
    };
    return TextHelpers;
}());
exports.default = TextHelpers;
