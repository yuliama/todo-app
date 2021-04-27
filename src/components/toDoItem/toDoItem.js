import { useState } from "react";
import './toDoItem.css'

export default function ToDoItem({ item, onChange, onDelete }) {
    const [showDeleteIcon, setshowDeleteIcon] = useState('hide');

    let deleteIcon = <input className={showDeleteIcon + ' deleteIcon'} onClick={() => onDelete(item)} type="button" ></input >

    function addDeleteIcon(showIcon) {
        showIcon ? setshowDeleteIcon('show') : setshowDeleteIcon('hide');
    }

    return (
        <div className="item" onMouseEnter={() => addDeleteIcon(true)} onMouseLeave={() => addDeleteIcon(false)}>
            <input id={'todo' + item.id} type="checkbox" checked={item.isCompleted} onChange={() => onChange(item)}></input>
            <label htmlFor={'todo' + item.id} className={item.isCompleted ? 'completed' : ''}>{item.text}</label>
            {deleteIcon}
        </div>
    )
}