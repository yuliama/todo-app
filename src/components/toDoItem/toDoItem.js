import { useState } from "react";
import './toDoItem.css'

export default function ToDoItem({ item, onChange, onDelete }) {
    const [checked, setChecked] = useState(item.isCompleted);
    const [showDeleteIcon, setshowDeleteIcon] = useState('hide');

    let deleteIcon = <input className={showDeleteIcon + ' deleteIcon'} onClick={() => onDelete(item)} type="button" ></input >
    let className = item.isCompleted ? 'completed' : '';
    let itemId = 'todo' + item.id;

    function checkChanged(item) {
        setChecked(!checked);
        return onChange(item);
    }

    function addDeleteIcon(showIcon) {
        showIcon ? setshowDeleteIcon('show') : setshowDeleteIcon('hide');
    }

    return (
        <div className="item" onMouseEnter={() => addDeleteIcon(true)} onMouseLeave={() => addDeleteIcon(false)}>
            <input id={itemId} type="checkbox" checked={checked} onChange={() => checkChanged(item)}></input>
            <label htmlFor={itemId} className={className}>{item.text}</label>
            {deleteIcon}
        </div>
    )
}