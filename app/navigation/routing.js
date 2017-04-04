import { StackNavigator } from 'react-navigation';

import TodoListScreen from '../screen/TodoListScreen';

export default StackNavigator({
    Home: {
        screen: TodoListScreen
    }
});