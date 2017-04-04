import { StackNavigator } from 'react-navigation';

import TodoList from '../screen/TodoList';
import AddTodo from '../screen/AddTodo';

export default StackNavigator({
    Home: {
        screen: TodoList
    },
    AddTodo: {
        screen: AddTodo
    }
});