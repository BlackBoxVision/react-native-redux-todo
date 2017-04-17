"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var icons_1 = require("../res/icons");
var withBar_1 = require("./components/common/hoc/withBar");
var TodoApp = (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoApp.prototype.render = function () {
        return store = {};
        i18n = {};
        icons_1.default = { icons: icons_1.default } >
            />
            < /DataProvider>;
        ;
    };
    return TodoApp;
}(react_1.default.Component));
TodoApp = __decorate([
    withBar_1.default('#512DA8')
], TodoApp);
exports.default = TodoApp;
