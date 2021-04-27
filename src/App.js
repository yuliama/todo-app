import { useState } from 'react';
import TodoModel from './model/TodoModel';
import Header from './components/header/header'
import AddNewTodo from './components/addNewTodo/addNewTodo'
import ToDoList from './components/toDoList/toDoList'
import Actions from './components/actions/actions'

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [latestTodoCount, setLatestTodoCount] = useState(0);

  let activeTodoCount = todoList.filter(e => !e.isCompleted).length;

  console.log(activeTodoCount + '/' + todoList.length);

  function addNewTodo(e) {
    let count = latestTodoCount + 1;
    setLatestTodoCount(count);

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

  function deleteItem(item){
    let list = [...todoList];
    let newList = list.filter(listItem => {return listItem.id != item.id});
    setTodoList(newList);

    console.log("appjs/deleteItem", newList);
  }

  return (
    <div className="App">
      <Header></Header>
      <AddNewTodo onKeyDown={e => addNewTodo(e)}></AddNewTodo>
      <ToDoList list={todoList} onChange={item => changeCheckTodoItem(item)} onDelete={item => deleteItem(item)}></ToDoList>
      <Actions activeTodosNumber={activeTodoCount}></Actions>
    </div>
  );
}

export default App;
