import { useState } from 'react';
import TodoModel from './model/TodoModel';
import Header from './components/header/header'
import AddNewTodo from './components/addNewTodo/addNewTodo'
import ToDoList from './components/toDoList/toDoList'

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoCount, setTodoCount] = useState(0);

  function addNewTodo(e) {
    let count = todoCount + 1;
    setTodoCount(count);

    setTodoList(todoList.concat(new TodoModel(count, false, e)));
  }

  function changeCheckTodoItem(item) {
    let list = [...todoList];
    let newList = list.map(listItem => {
      if (listItem.id === item.id) {
        let completed = !listItem.isCompleted
        listItem.isCompleted = completed;
      }
      return listItem;
    });
    setTodoList(newList);

    console.log("appjs/changeCheckTodoItem", newList);
  }
  
  return (
    <div className="App">
      <Header></Header>
      <AddNewTodo onKeyDown={e => addNewTodo(e)}></AddNewTodo>
      <ToDoList list={todoList} onChange={item => changeCheckTodoItem(item)}></ToDoList>
    </div>
  );
}

export default App;
