import { StackNavigator } from 'react-navigation';

import TodoList from '../screens/list/TodoList';
import AddTodo from '../screens/add/AddTodo';

const config = {
    headerMode: 'none'
};

const routes = {
    Home: {
        screen: TodoList
    },
    AddTodo: {
        screen: AddTodo
    }
};

export default StackNavigator(routes, config);