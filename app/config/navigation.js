import { StackNavigator } from 'react-navigation';

import TodoList from '../screens/list/TodoList';
import AddTodo from '../screens/add/AddTodo';

export default StackNavigator({
    Home: {
        screen: TodoList
    },
    AddTodo: {
        screen: AddTodo
    }
});