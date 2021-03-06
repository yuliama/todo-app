import { React, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TodoModel from './model/TodoModel';
import Header from './components/header/header';
import AddNewTodo from './components/addNewTodo/addNewTodo';
import ToDoList from './components/toDoList/toDoList';
import Actions from './components/actions/actions';
import Button from 'react-bootstrap/Button';

import './App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [latestTodoCount, setLatestTodoCount] = useState(0);
  const [filterBy, setFilterBy] = useState('All');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState('');

  let activeTodoCount = todoList.filter(e => !e.isCompleted).length;

  let visibilityClassName = todoList.length ? 'show' : 'hide';

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

  function deleteItem(item) {
    if (!item.isCompleted) {
      setItemToDelete(item);
      openModal();
    }
    else {
      finalDeleteItem(item);
    }
  }
  function finalDeleteItem(item) {
    let list = [...todoList];
    let newList = list.filter(listItem => { return listItem.id != item.id });
    setTodoList(newList);

    console.log("appjs/deleteItem", newList);
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(isApproved) {
    setIsOpen(false);
    if (isApproved && itemToDelete) {
      finalDeleteItem(itemToDelete);
      setItemToDelete('');
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <AddNewTodo onKeyDown={e => addNewTodo(e)}></AddNewTodo>
      <ToDoList list={filterBy === 'All' ? todoList :
        filterBy === 'Active' ? todoList.filter(item => !item.isCompleted) : todoList.filter(item => item.isCompleted)}
        onChange={item => changeCheckTodoItem(item)} onDelete={item => deleteItem(item)} filterBy={filterBy}></ToDoList>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <h2 className="deleteModalTitle">This operation will delete an uncompleted task.<br></br> Do you want to continue?</h2>
        <div className="modalBtn">
          <Button onClick={() => closeModal(true)}>Yes</Button>
          <Button onClick={() => closeModal(false)}>Cancel</Button>
        </div>
      </Modal>
      <Actions activeTodosNumber={activeTodoCount} visibilityClassName={visibilityClassName} onClick={(item) => setFilterBy(item)}></Actions>
    </div >
  );
}

export default App;