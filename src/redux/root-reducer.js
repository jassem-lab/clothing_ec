// represents overall reducer from all reducers pulled in
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})