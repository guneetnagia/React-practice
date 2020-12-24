import React,{useState} from 'react';

function SearchBar({onFormSubmit}){

    const [val, setVal] = useState('');

    function onInputChange(e){
        setVal(e.target.value);
    }
    function onFormSubmits(){
        onFormSubmit(val);
        //setVal('')
    }
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>Video Search</div>
            <input type="text" value={val} onChange={(e) => onInputChange(e)} />
            <button onClick={(e) => onFormSubmits(e)}> Search </button>
        </form>
    );
}

export default SearchBar;