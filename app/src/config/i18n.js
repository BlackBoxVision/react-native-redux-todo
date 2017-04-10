import { NativeModules, Platform } from 'react-native';
import i18next from 'i18next';

import translations from '../../res/strings.json';

function getLocale() {
    return Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;
}

const locale = getLocale();

export default i18next.init({
    fallbackLng: 'en',
    lng: locale ? locale.replace(/_/, '-') : 'en',
    resources: translations
});