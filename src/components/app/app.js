import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

import './app.css';


export default class App extends Component {

  startId = 1;

  state = {
    todoData: [
      this.createTodoItem('Make Coffee'),
      this.createTodoItem('Buy scooter'),
      this.createTodoItem('Make an App'),
      this.createTodoItem('See New Movie'),
    ]
  }

  createTodoItem(label) {
    return {
      id: this.startId++,
      label,
      important: false,
      done: false,
    }
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
    const newItem = this.createTodoItem(text)
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState( ({todoData}) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState( ({todoData}) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render() {

    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <span>{ (new Date()).toString() }</span>

        <AppHeader toDo ={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={todoData}
          onDeleted={ this.deleteItem } 
          onToggleImportant={ this.onToggleImportant}
          onToggleDone={ this.onToggleDone } />

        <AddItemForm 
          onAddItem={ this.addItem }/>
      </div>
    )
  }
}

