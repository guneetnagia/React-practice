import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Bond! James Bond'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => {this.setState({name:'Singh! Guneet Singh'})}}>Change Name</button>
            </div>
        )
    }
}

export default App;