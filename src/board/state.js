import createReducer from '../common/createReducer';

const ADD = 'board/ADD';
const REMOVE = 'board/REMOVE';
const EDIT = 'board/EDIT';

export const addList = list => ({ type: ADD, list });
export const removeList = list => ({ type: REMOVE, list });
export const editList = list => ({ type: EDIT, list });

const INITIAL_STATE = { list: [] };

const reducer = createReducer(INITIAL_STATE, {
	[ADD]: (state, action) => (state.list.push(action.list)),
	[removeList]: (state, action) => (state.list.filter(
		list => list.id !== action.list.id
	)),
	[EDIT]: (state, action) => {
		const index = state.list.findIndex(
			list => list.id === action.list.id
		);
		if (index >= 0) {
			state.list[index] = action.list;
		};
	}
})

export default reducer;