import createReducer from '../common/createReducer';
import createItemsLogic from '../common/createItemsLogic';
import mergeReducers from '../common/mergeReducers';

const { add, remove, reducer: postReducer } = createItemsLogic("posts");

const EDIT = 'post/EDIT';

export const addPost = add;
export const removePost = remove;
export const editPost = list => ({ type: EDIT, list });

const reducer = createReducer({ posts: [] }, {
	[EDIT]: (state, action) => {
		const index = state.posts.findIndex(
			post => post.id === action.list.id
		);
		if (index >= 0) {
			state.posts[index] = action.list;
		}
	}
})

const reducers = [reducer, postReducer];
export default mergeReducers(reducers);