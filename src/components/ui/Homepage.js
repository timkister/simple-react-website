import React from "react";

import NavBar from "./navbar/NavBar";

export default function Homepage(props) {

    const navbaritems = props.data.navbaritems
    const currentsite = props.data.currentsite

    return(
        <div>
            <div className="navbar">
                <NavBar currentsite={currentsite} navbaritems={navbaritems}/>
            </div>
        </div>
    )
}