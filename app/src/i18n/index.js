import { NativeModules, Platform } from 'react-native';
import i18next from 'i18next';

export function getLocale() {
    const { SettingsManager, I18nManager } = NativeModules;

    if (Platform.OS === 'ios') {
        return SettingsManager.settings.AppleLocale;
    } else {
        return I18nManager.localeIdentifier;
    }
}

export default function configureI18n(
    resources,
    browserLocale = getLocale(),
    defaultLocale = 'en'
) {
    const lng = browserLocale ? browserLocale.replace(/_/, '-') : defaultLocale;
    const fallbackLng = defaultLocale;

    return i18next.init({ fallbackLng, lng, resources });
}
