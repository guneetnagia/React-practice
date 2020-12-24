import React from 'react';

export default class ToDo extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            text: '',
            todoList: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        let newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState({
            todoList: this.state.todoList.concat(newItem),
            text: ''
        })
    }
    render() {
        return (
            <div>
                <h3> TODO </h3>
                {
                    this.state.todoList.map((item,idx) => (
                        <li key={idx}>{item.text}</li>
                    ))
                }
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">What needs to be done?</label>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.text}></input>
            <button>Add #{this.state.todoList.length+1}</button>
                </form>
            </div>
        );
    }
} 