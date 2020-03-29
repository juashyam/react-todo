import React from 'react';

/**
 * Display todos
 * @param {*} props 
 */
const DisplayToDo = (props) => {
  const todos = props.todos;

  // Sort todo list by timestamp and render in list
  const todoList = Object.keys(todos).sort((firstEl, SecondEl) => {
    return SecondEl-firstEl
  }).map(index => 
    <li key={index}>
      <span>{todos[index]}</span>
      <span className="remove" onClick={() => props.removeToDo(index)}>Remove</span>
    </li>
  )

  return <ul>{todoList}</ul>
}

export default DisplayToDo;
