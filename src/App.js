import React from 'react';
import './App.css';
import FriendMain from './friend/container/FriendMain';
import PostMain from './post/container/PostMain';
import store from './common/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="main_header">Project Board</header>
        <section className="main_section">
          <PostMain />
          <FriendMain />
        </section>
        <footer className="main_footer">개발자:<a href="https://github.com/Ekalii">&nbsp;Ekalii</a></footer>
      </div>
    </Provider>
  );
}

export default App;
