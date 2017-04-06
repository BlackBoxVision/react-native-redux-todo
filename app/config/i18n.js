import { NativeModules, Platform } from 'react-native';
import i18next from 'i18next';

import translations from '../resources/translations';

function getLocale() {
    return Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;
}

const locale = getLocale();

export default i18next.init({
    lng: locale ? locale.replace(/_/, '-') : 'en',
    resources: translations
});