import createReducer from '../common/createReducer';

const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";

export const addFriend = friend => ({ type: ADD, friend });
export const removeFriend = friend => ({ type: REMOVE, friend });

const INITIAL_STATE = { friends: [] };

const reducer = createReducer(INITIAL_STATE, {
	[ADD]: (state, action) => state.friends.push(action.friend),
	[REMOVE]: (state, action) => state.friends.filter(
		friend => friend.id !== action.friend.id
	)
});

export default reducer;