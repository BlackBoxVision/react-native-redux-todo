import { Platform } from 'react-native';

export default class TextHelpers {
    static capitalize(text) {
        return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
    }

    static textByPlatform(text) {
        if (Platform.OS === 'ios') {
            return TextHelpers.capitalize(text);
        } else {
            //Uppercase text on Android applies to button/checkbox/switch labels.
            return text.toUpperCase();
        }
    }
}