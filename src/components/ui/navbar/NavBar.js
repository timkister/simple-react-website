import React from "react";
import Logo from "./Logo";

import './NavBar.css';
import NavBarItem from "./NavBarItem";

export default function NavBar(props) {

    const navbaritems = props.navbaritems

    return(
        <div className="container">
            <div className="logo">
                <Logo />
            </div>
            <div className="navbaritems">
                {navbaritems.map(function(item){
                    return(
                        <NavBarItem key={item.title} navbaritem={item}/>
                    )}
                )}
            </div>
        </div>
    )
}