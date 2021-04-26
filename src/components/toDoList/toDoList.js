import ToDoItem from '../toDoItem/toDoItem';
import './toDoList.css'

export default function ToDoList({ list, onChange }) {
    let todoList = list.map(item => {
        return <ToDoItem item={item} onChange={e => onChange(e)}></ToDoItem>
    })
    return (
        <div className="list">
            {todoList}
        </div>
    )
}