import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import AddNewTodo from './components/addNewTodo/addNewTodo'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddNewTodo></AddNewTodo>
    </div>
  );
}

export default App;
