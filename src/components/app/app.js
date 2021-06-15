import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


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

export default App;
