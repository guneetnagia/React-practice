import React from 'react';
import Todo from './Todo';

function ToDoList({ todoList,handleToggle }) {
    return (
        <div>
            {
                todoList.map(todo => {
                    return (
                        <Todo todo={todo} key={todo.id} handleToggle={handleToggle}></Todo>
                    )
                })
            }
        </div>
    )
}

export default ToDoList;