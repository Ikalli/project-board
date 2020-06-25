import React from 'react';
import './App.css';
import { createStore, combineReducers } from 'redux';
import boardReducer, {
  addList,
  removeList,
  editList
} from './board/state';
import friendReducer, {
  addFriend,
  removeFriend
} from './friend/state';

const reducer = combineReducers({
  board: boardReducer,
  friend: friendReducer
})

const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

store.dispatch(addList({ id: 1, desc: 'love coding'}));
store.dispatch(addList({ id: 2, desc: 'hello world!'}));

store.dispatch(addFriend({ id: 1, name: 'IU'}));

function App() {
  return (
    <div className="App">
      <header className="main_header">Project Board</header>
      <section className="main_section">
  			<article className="todo">Hello</article>
  			<article className="in_progress">Hello</article>
  			<article className="done">Hello</article>
      </section>
      <footer className="main_footer">개발자:<a href="https://github.com/Ekalii">&nbsp;Ekalii</a></footer>
    </div>
  );
}

export default App;
