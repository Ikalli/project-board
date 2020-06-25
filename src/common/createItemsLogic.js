import createReducer from './createReducer';

export default function createItemsLogic(name) {
	const ADD = `${name}/ADD`;
	const REMOVE = `${name}/REMOVE`;

	const add = item => ({ type: ADD, item });
	const remove= item => ({ type: REMOVE, item });

	const reducer = createReducer({ [name]: [] },
		{
			[ADD]: (state, action) => (state[name].push(action.item)),
			[REMOVE]: (state, action) => {
				const index = state[name].findIndex(
					item => item.id === action.item.id
				);
				state[name].splice(index, 1);
			}
		}
	);

	return { add, remove, reducer};
}