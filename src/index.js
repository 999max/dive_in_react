import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components//todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';


const App = () => {

  const todoData = [
    { label: 'Make coffee', important: true, id: 1 },
    { label: 'Buy scooter', important: false, id: 2 },
    { label: 'Do some job', important: true, id: 3 },
    { label: 'Make an App', important: false, id: 4 },
    { label: 'See a movie', important: false, id: 5 },
  ]

  return (
    <div className='todo-app'>
      <span>{ (new Date()).toString() }</span>

      <AppHeader toDo ={3} done={2} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));