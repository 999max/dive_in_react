import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

import './app.css';


export default class App extends Component {

  startId = 100;

  state = {
    todoData: [
      { label: 'Make coffee', important: true, id: 1 },
      { label: 'Buy scooter', important: false, id: 2 },
      { label: 'Do some job', important: true, id: 3 },
      { label: 'Make an App', important: false, id: 4 },
      { label: 'See a movie', important: false, id: 5 },
    ]
  }

  deleteItem = (id) =>{
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const updatedTodoData = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx+1)
      ]

      return {
        todoData: updatedTodoData
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.startId++
    }
    this.setState(({todoData}) => {

      const updatedTodoData = [
        ...todoData,
        newItem
      ]

      return {
        todoData: updatedTodoData
      }

    })
  }

  render() {

    return (
      <div className='todo-app'>
        <span>{ (new Date()).toString() }</span>

        <AppHeader toDo ={3} done={2} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData}
          onDeleted={ this.deleteItem } />

        <AddItemForm 
          onAddItem={ this.addItem }/>
      </div>
    )
  }
}

