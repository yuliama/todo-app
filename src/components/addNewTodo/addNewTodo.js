import './addNewTodo.css';
import { useState } from "react";

export default function AddNewTodo({ onKeyDown }) {
    const [todo, setTodo] = useState('');
    return (
        <div className="addNewTodo">
            <input type="text" placeholder="What's next?" onChange={e => setTodo(e.target.value)} onKeyDown={e => {
                if (e.key == "Enter") {
                    return onKeyDown(todo);
                }
            }}></input>
        </div>
    )
}