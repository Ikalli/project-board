import React from 'react';
import store from '../../common/store';
import { addPost } from '../state';
import { getPost } from '../../common/mockData';
import PostList from '../component/PostList';
import { connect } from 'react-redux';

class PostMain extends React.PureComponent {
	state = {
		posts: store.getState().post.posts
	};

	onAdd = () => {
		const post = getPost();
		this.props.addPost(post);
	};

	render() {
		console.log("postmain");
		const { posts } = this.props;
		return(
			<div>
				<button onClick={this.onAdd}>글 추가하기</button>
				<PostList posts={posts} />
			</div>
		);
	};
}

const mapStateToProps = state => {
	return { posts: state.post.posts }
}

const mapDispatchToProps = dispatch => {
	return {
		addPost: post => {
			dispatch(addPost(post));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostMain);