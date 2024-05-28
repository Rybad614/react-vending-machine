import React from "react";
import { Link } from "react-router-dom";


function Chips() {
    return (
        <div>
            <h1>CHIPS</h1>
            <p>please select whatever you like!</p>
            <ul>
                <li>Lay's</li>
                <li>Ruffles</li>
                <li>Pringles</li>
                <li>Utz</li>
                <li>Kettle Brand</li>
            </ul>
            <Link to='/'>Select New Item</Link>
        </div>
    )
}


export default Chips;