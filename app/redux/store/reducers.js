import { combineReducers } from 'redux';

import todo from '../logic/todo/reducer';
import navigate from '../logic/navigate/reducer';

export default combineReducers({
    todo,
    navigate
});