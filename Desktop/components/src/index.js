import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">Trang</a>
            <div className="metadata">
              <span className="date">Today at 8:25</span>
            </div>
            <div className="text">Nice blog post</div>
          </div>
        </div>
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));