import React from 'react';
import store from '../../common/store';
import { addFriend } from '../state';
import { getFriend } from '../../common/mockData';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';

class FriendMain extends React.PureComponent {
	state = {
		friends: store.getState().friend.friends
	};

	onAdd = () => {
		const friend = getFriend();
		this.props.addFriend(friend);
	};

	render() {
		const { friends } = this.props;
		return(
			<div>
				<button onClick={this.onAdd}>친구 추가</button>
				<FriendList friends={friends} />
			</div>
		);
	};
}

const mapStateToProps = state => {
	return { friends: state.friend.friends };
};

const mapDispatchToProps = dispatch => {
	return {
		addFriend: friend => {
			dispatch(addFriend(friend))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FriendMain)