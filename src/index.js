import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {

  const isLoggedIn = false;
  const loginBox = <p><span>Log in please</span></p>;

  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Have a breakfast', important: true },
    { label: 'Make a table', important: true },
    { label: 'Make React App', important: false },
  ];

  return (
    <div> 
      <span>{ (new Date()).toString() }</span>
      { isLoggedIn ? null : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
