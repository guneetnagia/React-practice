import React from 'react';
import './Todo.css';

const Todo = ({ todo,handleToggle }) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }
    return (
        <div id={todo.id} className = {todo.complete ? 'strike' : ""} 
            value={todo.id} onClick={(e) => handleClick(e)}>
            {todo.task}
        </div>
    )
}

export default Todo;