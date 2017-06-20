import { StackNavigator } from 'react-navigation';

import Todos from '../../screens/Todos/index';
import AddTodo from '../../screens/AddTodo/index';

const config = {
    headerMode: 'none'
};

const addScreen = screen => ({ screen });

const routes = {
    Home: addScreen(Todos),
    AddTodo: addScreen(AddTodo)
};

export default StackNavigator(routes, config);
