import React, { useState } from 'react';

function TodoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');
    function handleChange(e) {
        setUserInput(e.currentTarget.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="what's next" value={userInput} onChange={(e) => handleChange(e)} />
            </form>
        </div>
    )
}

export default TodoForm;