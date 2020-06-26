import { createStore, combineReducers } from "redux";
import postReducer from '../post/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
	post: postReducer,
	friend: friendReducer
})

const store = createStore(reducer);
export default store;