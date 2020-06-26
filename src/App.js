import React from 'react';
import './App.css';
import { createStore, combineReducers } from 'redux';
import postReducer, {
  addPost,
  removePost,
  editPost
} from './post/state';
import friendReducer, {
  addFriend,
  removeFriend
} from './friend/state';
import FriendMain from './friend/container/FriendMain';
import PostMain from './post/container/PostMain';

const reducer = combineReducers({
  post: postReducer,
  friend: friendReducer
})

const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

store.dispatch(addPost({ id: 1, desc: 'love coding'}));
store.dispatch(addPost({ id: 2, desc: 'hello world!'}));
store.dispatch(editPost({ id: 1, desc: 'like coding'}));

store.dispatch(addFriend({ id: 1, name: 'IU'}));

function App() {
  return (
    <div className="App">
      <header className="main_header">Project Board</header>
      <section className="main_section">
  			<PostMain />
        <FriendMain />
      </section>
      <footer className="main_footer">개발자:<a href="https://github.com/Ekalii">&nbsp;Ekalii</a></footer>
    </div>
  );
}

export default App;
