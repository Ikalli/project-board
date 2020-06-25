import createReducer from '../common/createReducer';
import createItemsLogic from '../common/createItemsLogic';
import mergeReducers from '../common/mergeReducers';

const { add, remove, reducer: boardReducer } = createItemsLogic("board");

const EDIT = 'board/EDIT';

export const addList = add;
export const removeList = remove;
export const editList = list => ({ type: EDIT, list });

const reducer = createReducer({ board: [] }, {
	[EDIT]: (state, action) => {
		const index = state.board.findIndex(
			board => board.id === action.list.id
		);
		if (index >= 0) {
			state.board[index] = action.list;
		}
	}
})

const reducers = [reducer, boardReducer];
export default mergeReducers(reducers);