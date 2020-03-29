import React from 'react';

/**
 * New todo interface
 * @param {*} props 
 */
const NewToDo = (props) => {
  return (
    <div>
      <h1>Just Another To-Do</h1>
      <input type="text" className="form-control add-todo" placeholder="Add a to-do" onKeyPress={props.onKeyPress} />
    </div>
  )
}

export default NewToDo;
