import React, { useState } from 'react';
import Header from './components/Todo/Header';
import data from './components/Todo/data.json';
import TodoList from './components/Todo/ToDoList';
import TodoForm from './components/Todo/TodoForm';

export function ToDo_App() {
    const [todoList, setTodo] = useState(data);

    function addTask(userInput) {
        let copy = [...todoList];
        copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
        setTodo(copy);
    }

    function handleToggle(id) {
        let mapped = todoList.map((task) => {
            return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
        })
        setTodo(mapped);
    }

    return (
        <div>
            <Header />
            <TodoList todoList={todoList} handleToggle={handleToggle} />
            <TodoForm addTask={addTask} />
        </div>
    )
}