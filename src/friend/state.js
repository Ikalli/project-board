import createItemsLogic from '../common/createItemsLogic';

const { add, remove, reducer } = createItemsLogic("friends");
export const addFriend = add;
export const removeFriend = remove;
export default reducer;