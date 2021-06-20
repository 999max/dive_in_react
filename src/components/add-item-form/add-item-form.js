import React from "react";

import './add-item-form.css'


const AddItemForm = ({ onAddItem }) => {

  return (
    <form className="add-item-form  d-flex">

      <input type='text'
             className='form-control'
             placeholder='What needs to do?'/>
      
      <button type='button'
              className='btn btn-outline-secondary'
              onClick={() => onAddItem('Hello!')}>
        Add Item
      </button>
    </form>
  )
}


export default AddItemForm;