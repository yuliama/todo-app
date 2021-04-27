import './addNewTodo.css';
import { useState } from "react";

export default function AddNewTodo({ onKeyDown }) {
    const [todo, setTodo] = useState('');
    return (
        <div className="addNewTodo">
            <input type="text" value={todo} placeholder="What's next?" onChange={e => setTodo(e.target.value)} onKeyDown={e => {
                if (e.key == "Enter" && todo) {
                    let value = todo;
                    setTodo('');
                    return onKeyDown(value);
                }
            }}></input>
        </div>
    )
}