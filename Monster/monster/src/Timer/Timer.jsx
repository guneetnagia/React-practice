import React from 'react';

export default class Timer extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            seconds : 0
        }
    }
    componentDidMount(){
        this.interval = setInterval(
            () => this.tick(),
            1000
        )
    }
    tick() {
        this.setState({
            seconds:this.state.seconds + 1
        })
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render(){
        return (
            <h1>Time is : {this.state.seconds}</h1>
            )
    }
}
