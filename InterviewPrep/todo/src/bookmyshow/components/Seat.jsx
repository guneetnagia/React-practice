import React from 'react';

function Seat({category}){
    return(
        <div>{category.price}</div>
    );
}

export default Seat;