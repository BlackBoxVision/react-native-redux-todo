import combineReducers from 'redux/lib/combineReducers';
import { reducer as form } from 'redux-form';

import todo from '../logic/todo/reducer';
import navigate from '../logic/navigate/reducer';

export default combineReducers({
    todo,
    navigate,
    form
});