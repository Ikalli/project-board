import React from 'react';
import store from '../../common/store';
import { addPost } from '../state';
import PostList from '../component/PostList';

class PostMain extends React.Component {
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	};
	componentWillUnmount() {
		this.unsubscribe();
	};

	onAdd = () => {
		store.dispatch(addPost(post));
	};

	render() {
		const posts = store.getState().post.posts;
		return(
			<div>
				<button onClick={this.onAdd}>글 추가하기</button>
				<PostList posts={posts} />
			</div>
		)
	}
}

export default PostMain;