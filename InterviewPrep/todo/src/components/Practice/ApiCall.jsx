import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCall = () => {
    const [title, setTitle] = useState('');
    const [click,setClick] = useState(1);
    function handeClick(){
        setClick(Math.floor(Math.random()*10)+1);
    }
    useEffect(() => {
        console.log('hey');
        axios.get(`https://jsonplaceholder.typicode.com/todos/${click}`)
            .then((response) => setTitle(response.data.title))
    }, [click])
    return (
        <div>Good Morning - {title}
        <button style={{display:'fixed'}} onClick={()=>handeClick()}> Click </button>
        </div>
    )
}
export default ApiCall;