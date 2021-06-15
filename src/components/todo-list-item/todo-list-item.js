import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

    render() {
        const { label, important } = this.props;
        const itemStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span className='todo-list-item'>
                <span className='todo-list-item-label'
                      style={ itemStyle }>
                    { label }
                </span>
                <button type='button'
                        className='btn btn-outline-danger btn-sm float-right'>
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type='button'
                        className='btn btn-outline-success btn-sm float-right'>
                    <i className='fa fa-exclamation'></i>
                </button>
            </span>
        )
    }
};
