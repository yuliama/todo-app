import { useState } from "react";

export default function ToDoItem({ item, onChange }) {
    let className = item.isCompleted ? 'completed' : '';
    
    const [checked, setChecked] = useState(item.isCompleted);

    function checkChanged(item) {
        setChecked(!checked);
        return onChange(item);
        console.log("checkChanged", item); 
    }
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => checkChanged(item)}></input>
            <label name="todo" className={className}>{item.text}</label>
        </div>
    )
}