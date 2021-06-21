import React, { Component } from "react";

import './add-item-form.css'


export default class AddItemForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    return (
        <form className="add-item-form  d-flex"
              onSubmit={this.onSubmit}>
          <input type='text'
                 className='form-control'
                 placeholder='What needs to do?'
                 onChange={this.onLabelChange}
                 value={this.state.label} />
          
          <button type='button'
                  className='btn btn-outline-secondary'>
            Add Item
          </button>
        </form>
      )
  } 
}


// export default AddItemForm;