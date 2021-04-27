import { useState } from 'react'
import './actions.css'

export default function Actions({ activeTodosNumber, visibilityClassName, onClick }) {
    const [filter, setFilter] = useState('All');

    function onChangeFilter(item) {
        setFilter(item);
        return onClick(item);
    }
    return (
        <div className={visibilityClassName + " actionsSection"}>
            {activeTodosNumber} items left
            <div className="filterActions">
                <input type="button" className={filter === "All" ? 'active' : ''} onClick={() => onChangeFilter("All")} value="All"></input>
                <input type="button" className={filter === "Active" ? 'active' : ''} onClick={() => onChangeFilter("Active")} value="Active"></input>
                <input type="button" className={filter === "Completed" ? 'active' : ''} onClick={() => onChangeFilter("Completed")} value="Completed"></input>
            </div>
        </div>
    )
}