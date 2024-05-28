import React from "react";
import { Link } from "react-router-dom";


function Candy() {
    return (
        <div>
            <h1>CANDY</h1>
            <p>please select whatever you like!</p>
            <ul>
                <li>Hershey</li>
                <li>Twizzlers</li>
                <li>Jolly Rancher</li>
                <li>Skittles</li>
                <li>Haribo</li>
            </ul>
            <Link to='/'>Select New Item</Link>
        </div>
    )
}


export default Candy;