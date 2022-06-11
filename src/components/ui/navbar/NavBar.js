import React from "react";

import './NavBar.css';
import NavBarItem from "./NavBarItem";

export default function NavBar(props) {

    const navbaritems = props.navbaritems

    return(
        <div className="container">
            {navbaritems.map(function(item){
                return(
                    <NavBarItem navbaritem={item}/>
                )}
            )}
        </div>
    )
}