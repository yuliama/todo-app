import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import AddNewTodo from './components/addNewTodo/addNewTodo'
import { useState } from 'react';
import TodoModel from './model/TodoModel';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoCount, setTodoCount] = useState(0);

  function addNewTodo(e) {
    let count = todoCount + 1;
    setTodoCount(count);

    setTodoList(todoList.concat(new TodoModel(count, false, e)));
  }

  return (
    <div className="App">
      <Header></Header>
      <AddNewTodo onKeyDown={e => addNewTodo(e)}></AddNewTodo>
    </div>
  );
}

export default App;
