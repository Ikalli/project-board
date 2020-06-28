import React from 'react';
import './App.css';
import FriendMain from './friend/container/FriendMain';
import PostMain from './post/container/PostMain';

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
