import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>HELLO, I AM A VENDING MACHINE. 
                WHAT WOULD YOU LIKE TO EAT?
            </h1>
            <Link to='/chips'><h2>CHIPS</h2></Link>
            <Link to='/drink'><h2>DRINK</h2></Link>
            <Link to='/candy'><h2>CANDY</h2></Link>
        </div>
    )
}


export default VendingMachine;