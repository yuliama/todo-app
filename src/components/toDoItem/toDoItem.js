import { useState } from "react";
import './toDoItem.css'

export default function ToDoItem({ item, onChange }) {
    let className = item.isCompleted ? 'completed' : '';
    
    const [checked, setChecked] = useState(item.isCompleted);

    function checkChanged(item) {
        setChecked(!checked);
        return onChange(item);
    }
    return (
        <div className="item">
            <input name="todo" type="checkbox" checked={checked} onChange={() => checkChanged(item)}></input>
            <label for="todo" className={className}>{item.text}</label>
        </div>
    )
}