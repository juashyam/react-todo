import React from 'react';
import firebase from './firebase';
import NewToDo from './Components/NewToDo';
import DisplayToDo from './Components/DisplayToDo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: {}
    }
  }

  /**
   * Fetch existing todos from Firebase Realtime Database
   */
  componentDidMount() {
    const todoRef = firebase.database().ref('todos');
    todoRef.on('value', snapshot => {
      const todos = snapshot.val();
      const newState = {};
      for (let todo in todos) {
        newState[todo] = todos[todo];
      }

      this.setState({
        todos: newState
      });
    });
  }

  /**
   * Render To Do interface
   */
  render() {
    return (
      <div className="todo-container">
        <NewToDo onKeyPress={this.handleKeyPress} />
        <DisplayToDo todos={this.state.todos} removeToDo={this.handleRemove} />
      </div>
    )
  }

  /**
   * Add new todo on press of Enter key
   */
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const task = event.target.value;
      if (task) {
        const todo = {};
        todo[Date.now()] = task;
        firebase.database().ref('todos').update(todo);
        event.target.value = '';
      }
    }
  }

  /**
   * Remove a todo from Firebase Realtime Database
   */
  handleRemove = index => {
    firebase.database().ref('todos').child(index).remove()
    console.log(index);
  }
}

export default App;
