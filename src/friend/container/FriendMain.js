import React from 'react';
import store from '../../common/store';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

class FriendMain extends React.Component {
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	};
	componentWillUnmount() {
		this.unsubscribe();
	};

	onAdd = () => {
		store.dispatch(addFriend(friend));
	};

	render() {
		const friends = store.getState.friend.friends;
		return(
			<div>
				<button onClick={onAdd}>친구 추가</button>
				<FriendList friends={friends} />
			</div>
		);
	};
}

export default FriendMain;