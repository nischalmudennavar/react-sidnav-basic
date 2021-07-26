import React from 'react';
import './nav.css';



function Navbar({show}) {
    return (
        // <div className="side-nav !active">
        //     Navbar
        // </div>
        <div className={ show ? 'side-nav active' : 'side-nav '}>
            Navbar
        </div>
    )
}

export default Navbar
