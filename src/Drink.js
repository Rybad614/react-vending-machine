import React from "react";
import { Link } from "react-router-dom";


function Drink() {
    return (
        <div>
            <h1>DRINKS</h1>
            <p>please select whatever you like!</p>
            <ul>
                <li>Coca-Cola</li>
                <li>Pepsi</li>
                <li>Red Bull</li>
                <li>Nestle</li>
                <li>Dr Pepper</li>
            </ul>
            <Link to='/'>Select New Item</Link>
        </div>
    )
}


export default Drink;