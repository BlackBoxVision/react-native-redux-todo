import { StatusBar, Platform } from 'react-native';
import Navigator from '../../../navigation/routing';

export default function reducer(state, action) {
    const newState = Navigator.router.getStateForAction(action, state);

    if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('#512DA8', true);
    }

    return newState || state;
};