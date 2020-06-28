import React from 'react';
import store from '../../common/store';
import { addFriend } from '../state';
import { getFriend } from '../../common/mockData';
import FriendList from '../component/FriendList';

class FriendMain extends React.PureComponent {
	state = {
		friends: store.getState().friend.friends
	};

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.setState({ 
			friends: store.getState().friend.friends
		}));
	};
	componentWillUnmount() {
		this.unsubscribe();
	};

	onAdd = () => {
		const friend = getFriend();
		store.dispatch(addFriend(friend));
	};

	render() {
		const friends = store.getState().friend.friends;
		return(
			<div>
				<button onClick={this.onAdd}>친구 추가</button>
				<FriendList friends={friends} />
			</div>
		);
	};
}

export default FriendMain;