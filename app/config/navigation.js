import { StackNavigator } from 'react-navigation';

import Todos from '../screens/list/Todos';
import AddTodo from '../screens/add/AddTodo';

const config = {
    headerMode: 'none'
};

const routes = {
    Home: {
        screen: Todos
    },
    AddTodo: {
        screen: AddTodo
    }
};

export default StackNavigator(routes, config);