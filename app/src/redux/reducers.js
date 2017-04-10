import combineReducers from 'redux/lib/combineReducers';
import { reducer as form } from 'redux-form';

import todo from './todo/reducer';
import navigate from './navigate/reducer';

export default combineReducers({
    todo,
    navigate,
    form
});