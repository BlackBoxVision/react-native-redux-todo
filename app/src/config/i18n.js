"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var i18next_1 = require("i18next");
function getLocale() {
    var SettingsManager = react_native_1.NativeModules.SettingsManager, I18nManager = react_native_1.NativeModules.I18nManager;
    if (react_native_1.Platform.OS === 'ios') {
        return SettingsManager.settings.AppleLocale;
    }
    else {
        return I18nManager.localeIdentifier;
    }
}
exports.getLocale = getLocale;
function configureI18n(resources, browserLocale, defaultLocale) {
    if (browserLocale === void 0) { browserLocale = getLocale(); }
    if (defaultLocale === void 0) { defaultLocale = 'en'; }
    var lng = browserLocale ? browserLocale.replace(/_/, '-') : defaultLocale;
    var fallbackLng = defaultLocale;
    return i18next_1.default.init({ fallbackLng: fallbackLng, lng: lng, resources: resources });
}
exports.default = configureI18n;
