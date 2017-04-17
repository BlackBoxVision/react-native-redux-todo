import { Platform } from 'react-native';

export default class TextHelpers {
    static capitalize(text: String) : String {
        return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
    }

    static textByPlatform(text: String) : String {
        if (Platform.OS === 'ios') {
            return TextHelpers.capitalize(text);
        } else {
            //Uppercase text on Android applies to button/checkbox/switch labels.
            return text.toUpperCase();
        }
    }
}