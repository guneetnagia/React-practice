import React,{useState} from 'react';

const Counter=()=>{
    const [digit,setDigit] = useState(0);
    function handeClick(){
        setDigit((prev)=>prev+1)
    }
    return(
        <div>
            <h3>{digit}</h3>
            <button type="text" onClick={()=>handeClick()}>Increment</button>
        </div>
    );
}
export default Counter;