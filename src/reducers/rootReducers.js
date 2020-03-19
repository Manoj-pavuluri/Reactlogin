
import PostReducers from './postReducers';
import { combineReducers } from 'redux';

const RootReducers = combineReducers({
    login:PostReducers
})

export default RootReducers;