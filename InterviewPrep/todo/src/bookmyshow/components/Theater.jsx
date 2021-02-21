import React from 'react';
import Seat from './Seat';

function Theater() {
    let seats = {
        categories: [
            { type: 'normal', capacity: 10, price: 100 },
            { type: 'glass', capacity: 15, price: 200 }
        ],
        reserved:[]
    }
    let max_select = 3;

    return (
        <div className="container">
            <table className="grid">
                <tbody>
                    <tr>
                        {
                            seats.categories.map((category, idx) => (
                                <td key={idx} >
                                    <Seat category={category} />
                                </td>
                            )
                            )
                        }
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}
export default Theater;