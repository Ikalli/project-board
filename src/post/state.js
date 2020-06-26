import createReducer from '../common/createReducer';
import createItemsLogic from '../common/createItemsLogic';
import mergeReducers from '../common/mergeReducers';

const { add, remove, reducer: postReducer } = createItemsLogic("post");

const EDIT = 'post/EDIT';

export const addList = add;
export const removeList = remove;
export const editList = list => ({ type: EDIT, list });

const reducer = createReducer({ post: [] }, {
	[EDIT]: (state, action) => {
		const index = state.post.findIndex(
			post => post.id === action.list.id
		);
		if (index >= 0) {
			state.post[index] = action.list;
		}
	}
})

const reducers = [reducer, postReducer];
export default mergeReducers(reducers);