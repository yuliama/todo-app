import ToDoItem from '../toDoItem/toDoItem';

export default function ToDoList({ list, onChange }) {
    let todoList = list.map(item => {
        return <ToDoItem item={item} onChange={e => onChange(e)}></ToDoItem>
    })
    return (
        <div>
            {todoList}
        </div>
    )
}